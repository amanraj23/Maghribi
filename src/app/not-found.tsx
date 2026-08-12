import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="inner-page section narrow-page">
      <p className="eyebrow">404</p>
      <h1>Page Not Found</h1>
      <p>The page you are looking for may have moved.</p>
      <Button href="/">Return Home</Button>
    </section>
  );
}
