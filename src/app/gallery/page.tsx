import type { Metadata } from "next";
import Image from "next/image";
import { lifestyleImages } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A premium gallery preview for Maghribi project images and plotted development visuals."
};

export default function GalleryPage() {
  return (
    <section className="inner-page section gallery-preview">
      <SectionHeading
        eyebrow="Gallery"
        title="A Premium Sense of Place"
        text="A visual direction for Maghribi's plotted communities, to be replaced with owned project photography as developments are released."
      />
      <div className="masonry">
        {lifestyleImages.map((image, index) => (
          <div className="gallery-tile" key={image}>
            <Image src={image} alt={`Maghribi lifestyle gallery ${index + 1}`} fill sizes="(min-width: 900px) 33vw, 100vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
