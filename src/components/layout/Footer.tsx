import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navigationItems } from "@/config/navigation";
import { siteConfig, whatsappHref } from "@/config/site";
import { MaghribiLogo } from "@/components/ui/MaghribiLogo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <MaghribiLogo />
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h3>Company</h3>
          {navigationItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:${siteConfig.phone}`}>
            <Phone size={16} /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail size={16} /> {siteConfig.email}
          </a>
          <a href={whatsappHref("I want Maghribi project details.")}>
            <MapPin size={16} /> Chat on WhatsApp
          </a>
        </div>
        <div>
          <h3>Connect</h3>
          <div className="social-row">
            <a href={siteConfig.socials.instagram} aria-label="Instagram">
              <Instagram />
            </a>
            <a href={siteConfig.socials.linkedin} aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
          <p>{siteConfig.businessHours}</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 {siteConfig.name}. All rights reserved.</div>
    </footer>
  );
}
