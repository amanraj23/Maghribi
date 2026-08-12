import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Maghribi Group of Companies and its premium plotted development vision."
};

export default function AboutPage() {
  return (
    <section className="inner-page section narrow-page">
      <SectionHeading eyebrow="About Us" title="A Premium Land Development Brand" />
      <p>
        Maghribi Group of Companies develops a premium plotted living experience built on composed planning,
        guided customer conversations and a clear path from enquiry to site visit. The brand is shaped for buyers
        who want land ownership to feel refined, transparent and well supported.
      </p>
    </section>
  );
}
