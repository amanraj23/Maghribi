"use client";

import { Button } from "@/components/ui/Button";

export default function ErrorPage() {
  return (
    <section className="inner-page section narrow-page">
      <p className="eyebrow">Error</p>
      <h1>Something Went Wrong</h1>
      <p>Please try again in a moment.</p>
      <Button href="/">Return Home</Button>
    </section>
  );
}
