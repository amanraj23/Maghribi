"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { navigationItems } from "@/config/navigation";
import { whatsappHref } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MaghribiLogo } from "@/components/ui/MaghribiLogo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solidHeader = pathname !== "/" || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="topbar">Premium plotted developments | Site visits by appointment</div>
      <header className={`site-header ${solidHeader ? "is-scrolled" : ""}`}>
        <MaghribiLogo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={18} />
          </button>
          <Button href={whatsappHref("I would like to book a Maghribi site visit.")}>Book a Site Visit</Button>
          <button className="icon-btn mobile-toggle" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {navigationItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Button href={whatsappHref("I would like to book a Maghribi site visit.")}>Book a Site Visit</Button>
      </div>
    </>
  );
}
