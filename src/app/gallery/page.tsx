import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A premium gallery preview for Maghribi project images and plotted development visuals."
};

export default function GalleryPage() {
  const images = projects.flatMap((project) => project.gallery.map((image) => ({ image, project: project.name })));
  return (
    <section className="inner-page section gallery-preview">
      <SectionHeading eyebrow="Gallery" title="Project Images" />
      <div className="masonry">
        {images.map((item, index) => (
          <div className="gallery-tile" key={item.image}>
            <Image src={item.image} alt={`${item.project} gallery ${index + 1}`} fill sizes="(min-width: 900px) 33vw, 100vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
