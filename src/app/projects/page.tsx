import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Maghribi residential, villa and investment plot projects."
};

export default function ProjectsPage() {
  return (
    <section className="inner-page section">
      <SectionHeading eyebrow="Projects" title="Explore Maghribi Plotted Developments" />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <div className="project-image">
              <Image src={project.image} alt={`${project.name} project`} fill sizes="(min-width: 900px) 33vw, 100vw" />
            </div>
            <div className="project-card-body">
              <p>{project.category}</p>
              <h3>{project.name}</h3>
              <span>{project.location}</span>
              <ul>
                <li>{project.approvalStatus}</li>
                <li>{project.plotSizes.join(" / ")}</li>
              </ul>
              <Link href={`/projects/${project.slug}`}>
                Explore Project <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
