import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing } from "lucide-react";
import { categories, projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Maghribi residential, villa and investment plot projects."
};

export default function ProjectsPage() {
  return (
    <section className="inner-page section">
      <SectionHeading
        eyebrow="Projects"
        title="Upcoming Maghribi Plotted Developments"
        text="Current project inventory is being prepared for release. Register interest now and receive confirmed project details directly from the advisory team."
      />
      {projects.length > 0 ? (
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
      ) : (
        <div className="release-panel">
          <BellRing size={34} />
          <div>
            <p className="eyebrow">Priority Access</p>
            <h3>New project releases will appear here when they are ready.</h3>
            <span>Until then, the enquiry desk can help you share your preferred location, budget and plot size.</span>
          </div>
          <Button href="/contact">Register Interest</Button>
        </div>
      )}
      <div className="category-grid project-category-space">
        {categories.map((category) => (
          <article className="category-card" key={category.title}>
            <Image src={category.image} alt={category.title} fill sizes="(min-width: 900px) 33vw, 100vw" />
            <div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
