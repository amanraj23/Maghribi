import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { siteConfig, whatsappHref } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Maghribi Group of Companies to enquire about premium residential and villa plots."
};

export default function ContactPage() {
  return (
    <section className="inner-page section contact-grid">
      <div>
        <SectionHeading eyebrow="Contact" title="Book a Site Visit or Request Project Details" />
        <div className="contact-list">
          <a href={`tel:${siteConfig.phone}`}>
            <Phone /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail /> {siteConfig.email}
          </a>
          <a href={whatsappHref("I want to enquire about Maghribi plots.")}>
            <MapPin /> WhatsApp enquiry
          </a>
        </div>
        <p>{siteConfig.address}</p>
        <p>{siteConfig.businessHours}</p>
      </div>
      <LeadForm sourcePage="Contact" />
    </section>
  );
}
