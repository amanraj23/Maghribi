"use client";

import type React from "react";
import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { projects } from "@/data/projects";

type Status = { type: "idle" | "success" | "error"; message: string };

export function LeadForm({ sourcePage = "Website" }: { sourcePage?: string }) {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const utm = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmTerm: params.get("utm_term") || "",
      utmContent: params.get("utm_content") || ""
    };
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...payload, ...utm, sourcePage })
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Submission failed");
      form.reset();
      setStatus({ type: "success", message: result.message });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "We could not submit your enquiry right now."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <input name="website" type="text" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <label>
        <span>Full Name</span>
        <input name="fullName" minLength={2} maxLength={80} required autoComplete="name" />
      </label>
      <label>
        <span>Mobile Number</span>
        <input name="phone" minLength={8} maxLength={18} required autoComplete="tel" inputMode="tel" />
      </label>
      <label>
        <span>Email Address</span>
        <input name="email" type="email" maxLength={120} autoComplete="email" />
      </label>
      <label>
        <span>Interested Project</span>
        <select name="interestedProject" defaultValue="">
          <option value="">Select project</option>
          {projects.map((project) => (
            <option key={project.slug} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Preferred Plot Size</span>
        <input name="plotSize" maxLength={40} placeholder="30 x 40, 40 x 60..." />
      </label>
      <label className="form-wide">
        <span>Message</span>
        <textarea name="message" maxLength={600} rows={4} placeholder="Tell us what you are looking for" />
      </label>
      <button className="form-submit" disabled={isSubmitting} type="submit">
        <Send size={17} aria-hidden="true" />
        {isSubmitting ? "Submitting..." : "Enquire Now"}
      </button>
      {status.message ? (
        <p className={`form-status ${status.type}`} role="status">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
