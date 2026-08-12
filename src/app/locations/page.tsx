import type { Metadata } from "next";
import { locationAdvantages } from "@/data/locations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Locations",
  description: "Location advantages and connectivity information for Maghribi projects."
};

export default function LocationsPage() {
  return (
    <section className="inner-page section location-section">
      <div className="location-map">Location map available during consultation</div>
      <div>
        <SectionHeading eyebrow="Locations" title="Understand Every Project Surrounding" />
        <ul className="location-list">
          {locationAdvantages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
