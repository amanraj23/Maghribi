export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-label="Project benefits">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
