export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}
