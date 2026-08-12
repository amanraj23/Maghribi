import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappHref } from "@/config/site";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

type Props = { params: Promise<{ slug: string }> };

function getProject(slug: string): Project {
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return project;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.seoDescription,
    alternates: { canonical: `/projects/${project.slug}` }
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  return (
    <>
      <section className="project-hero">
        <Image src={project.image} alt={`${project.name} hero`} fill priority sizes="100vw" />
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.name}</h1>
          <span>{project.location}</span>
        </div>
      </section>
      <section className="section project-detail-grid">
        <div>
          <SectionHeading eyebrow="Project Story" title={project.description} />
          <p>{project.story}</p>
          <ul className="detail-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button href={whatsappHref(`I want details for ${project.name}.`)}>Chat on WhatsApp</Button>
        </div>
        <aside>
          <LeadForm sourcePage={project.name} />
        </aside>
      </section>
      <section className="section gallery-preview">
        <SectionHeading eyebrow="Project Gallery" title="Project Visuals" />
        <div className="masonry">
          {project.gallery.map((image, index) => (
            <div className="gallery-tile" key={image}>
              <Image src={image} alt={`${project.name} gallery ${index + 1}`} fill sizes="(min-width: 900px) 33vw, 100vw" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
