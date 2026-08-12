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
        Maghribi Group of Companies is presented here with replacement-ready content. Add the company history,
        leadership, certifications and verified project details in the central config and data files when available.
      </p>
    </section>
  );
}
