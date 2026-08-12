import type { ValidatedLead } from "@/lib/validations";

export async function submitLeadToSheet(lead: ValidatedLead, request: Request) {
  const endpoint = process.env.GOOGLE_SHEET_ENDPOINT;

  const row = {
    timestamp: new Date().toISOString(),
    fullName: lead.fullName,
    phone: lead.phone,
    email: lead.email || "",
    interestedProject: lead.interestedProject,
    plotSize: lead.plotSize,
    message: lead.message,
    sourcePage: lead.sourcePage,
    utmSource: lead.utmSource,
    utmMedium: lead.utmMedium,
    utmCampaign: lead.utmCampaign,
    utmTerm: lead.utmTerm,
    utmContent: lead.utmContent,
    userAgent: request.headers.get("user-agent") || "",
    leadStatus: "New"
  };

  if (!endpoint) {
    return { stored: false, reason: "GOOGLE_SHEET_ENDPOINT is not configured", row };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(row),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Lead storage failed");
  }

  return { stored: true };
}
