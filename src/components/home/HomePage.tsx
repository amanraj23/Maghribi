import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, CalendarDays, MapPinned, MessagesSquare } from "lucide-react";
import { amenities, investmentReasons } from "@/data/amenities";
import { categories, featuredProject, projects } from "@/data/projects";
import { locationAdvantages, statistics } from "@/data/locations";
import { testimonials } from "@/data/testimonials";
import { whatsappHref } from "@/config/site";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasonCards = [
  ["Prime Locations", "Projects selected for access, usability and future neighbourhood value.", MapPinned],
  ["Clear Documentation", "Project information is structured for transparent due diligence.", BadgeCheck],
  ["Modern Infrastructure", "Roads, utilities and open spaces planned for real everyday life.", Building2],
  ["Advisor-Led Visits", "Site visits and project details are handled by a dedicated advisor.", CalendarDays]
] as const;

export function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88"
          alt="Premium residential plots with landscaped roads"
          fill
          sizes="100vw"
          priority
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Premium plotted developments</p>
          <h1>Where Your Future Takes Shape</h1>
          <span>Residential, villa and investment plots designed for better living and smarter ownership.</span>
          <div className="hero-actions">
            <Button href="/projects">Explore Projects</Button>
            <Button href={whatsappHref("I would like to book a Maghribi site visit.")} variant="secondary">
              Book a Site Visit
            </Button>
          </div>
        </div>
        <div className="hero-panel">
          <LeadForm sourcePage="Hero" />
        </div>
        <div className="scroll-indicator">Scroll</div>
      </section>

      <Marquee items={investmentReasons} />

      <section className="section" id="projects">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Plots Presented Like Private Collections"
            text="Each project is structured from centralized data, making details easy to update as approvals, prices and images are finalized."
          />
        </Reveal>
        <Reveal className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-image">
                <Image src={project.image} alt={`${project.name} project view`} fill sizes="(min-width: 900px) 33vw, 100vw" />
              </div>
              <div className="project-card-body">
                <p>{project.category}</p>
                <h3>{project.name}</h3>
                <span>{project.location}</span>
                <ul>
                  <li>{project.approvalStatus}</li>
                  <li>{project.plotSizes.join(" / ")}</li>
                  <li>{project.startingPrice}</li>
                </ul>
                <Link href={`/projects/${project.slug}`}>
                  Explore Project <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section split-section" id="why-invest">
        <Reveal>
          <SectionHeading
            eyebrow="Why Invest With Us"
            title="Quiet Confidence, Clear Process"
            text="A premium land purchase should feel composed from first enquiry to registration support."
          />
        </Reveal>
        <Reveal className="reason-grid">
          {reasonCards.map(([title, description, Icon]) => (
            <article className="reason-card" key={String(title)}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section dark-band">
        <SectionHeading eyebrow="Project Categories" title="Choose the Shape of Your Investment" align="center" />
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.title}>
              <Image src={category.image} alt={category.title} fill sizes="(min-width: 900px) 33vw, 100vw" />
              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link href="/projects">Explore</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section editorial">
        <Reveal className="editorial-image">
          <Image src={featuredProject.image} alt={`${featuredProject.name} featured project`} fill sizes="(min-width: 900px) 50vw, 100vw" />
        </Reveal>
        <Reveal className="editorial-copy">
          <SectionHeading eyebrow="Featured Project" title={featuredProject.name} />
          <p>{featuredProject.story}</p>
          <ul>
            {featuredProject.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button href={`/projects/${featuredProject.slug}`}>Get Project Details</Button>
        </Reveal>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Amenities" title="Infrastructure That Feels Considered" align="center" />
        <div className="amenity-grid">
          {amenities.map(({ title, description, icon: Icon }) => (
            <article className="amenity-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section location-section">
        <div className="map-placeholder">
          <MapPinned size={42} />
          <span>Google Maps integration placeholder</span>
        </div>
        <div>
          <SectionHeading
            eyebrow="Location Advantage"
            title="Connectivity Details Kept Honest"
            text="Distances and landmarks are intentionally awaiting verified project data."
          />
          <ul className="location-list">
            {locationAdvantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stats-band">
        {statistics.map((stat) => (
          <AnimatedCounter key={stat.label} {...stat} />
        ))}
      </section>

      <section className="section testimonials">
        <SectionHeading eyebrow="From The People" title="Verified Stories Will Live Here" align="center" />
        <div className="testimonial-row">
          {testimonials.map((item) => (
            <blockquote key={item.name}>
              <p>{item.review}</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section gallery-preview">
        <SectionHeading eyebrow="Gallery" title="A Visual Sense of Place" />
        <div className="masonry">
          {projects.flatMap((project) => project.gallery).slice(0, 6).map((image, index) => (
            <Link className="gallery-tile" href="/gallery" key={image}>
              <Image src={image} alt={`Maghribi gallery image ${index + 1}`} fill sizes="(min-width: 900px) 33vw, 100vw" />
            </Link>
          ))}
        </div>
      </section>

      <section className="social-section">
        <div>
          <p className="eyebrow">@maghribi</p>
          <h2>Site visits, plotted stories and project updates.</h2>
        </div>
        <div className="social-cards">
          {projects.map((project) => (
            <article key={project.slug}>
              <Image src={project.image} alt={`${project.name} social preview`} fill sizes="280px" />
              <span>{project.name}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="lead-cta" id="contact">
        <div>
          <MessagesSquare size={28} />
          <h2>Speak to a Maghribi Property Advisor</h2>
          <p>Share your requirements and our team will help you shortlist projects, plot sizes and site visit slots.</p>
        </div>
        <LeadForm sourcePage="Lead CTA" />
      </section>
    </>
  );
}
