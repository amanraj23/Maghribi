import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, CalendarDays, MapPinned, MessagesSquare } from "lucide-react";
import { amenities, investmentReasons } from "@/data/amenities";
import { categories, lifestyleImages, projects } from "@/data/projects";
import { brandMarkers, locationAdvantages } from "@/data/locations";
import { trustNotes } from "@/data/trust";
import { whatsappHref } from "@/config/site";
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
            title="Private Project Releases, Shared With Serious Buyers First"
            text="Maghribi is preparing its next plotted development releases. Join the enquiry list to receive location, plot-size and site-visit information as soon as inventory opens."
          />
        </Reveal>
        {projects.length > 0 ? (
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
        ) : (
          <Reveal className="release-panel">
            <div>
              <p className="eyebrow">Upcoming Inventory</p>
              <h3>Project details will be announced after final release readiness.</h3>
              <span>
                Register your interest and the advisory team will share only verified project information, including location,
                plot sizes, documentation status and site visit slots.
              </span>
            </div>
            <Button href="#contact">Join Priority List</Button>
          </Reveal>
        )}
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
          <Image
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85"
            alt="Elegant plotted residential community planning"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </Reveal>
        <Reveal className="editorial-copy">
          <SectionHeading eyebrow="The Maghribi Standard" title="Land Buying With More Poise and Less Noise" />
          <p>
            The website is now shaped around the way Maghribi can actually work before project launches: receive enquiries,
            understand buyer intent, shortlist the right opportunity and share confirmed details with care.
          </p>
          <ul>
            {["Priority enquiry list", "Advisor-guided project matching", "Documentation shared before commitment", "Site visits when inventory opens"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button href="#contact">Request a Call Back</Button>
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
        <div className="location-map">
          <MapPinned size={42} />
          <span>Location map available during consultation</span>
        </div>
        <div>
          <SectionHeading
            eyebrow="Location Advantage"
            title="Know the Location Before You Commit"
            text="Our advisors walk you through access, surroundings, landmarks and growth potential for the project you are considering."
          />
          <ul className="location-list">
            {locationAdvantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stats-band">
        {brandMarkers.map((item) => (
          <div className="stat" key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section trust-section">
        <SectionHeading eyebrow="Buying Experience" title="A Clearer Way to Choose Land" align="center" />
        <div className="testimonial-row">
          {trustNotes.map((item) => (
            <blockquote key={item.title}>
              <p>{item.text}</p>
              <footer>
                <strong>{item.title}</strong>
                <span>Maghribi advisory process</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section gallery-preview">
        <SectionHeading eyebrow="Gallery" title="A Visual Sense of Place" />
        <div className="masonry">
          {lifestyleImages.map((image, index) => (
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
          {categories.map((category) => (
            <article key={category.title}>
              <Image src={category.image} alt={`${category.title} social preview`} fill sizes="280px" />
              <span>{category.title}</span>
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
