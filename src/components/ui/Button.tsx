import type React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  className?: string;
};

export function Button({ href, children, variant = "primary", type = "button", className }: ButtonProps) {
  const classes = cn("btn", `btn-${variant}`, className);
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {content}
    </button>
  );
}
