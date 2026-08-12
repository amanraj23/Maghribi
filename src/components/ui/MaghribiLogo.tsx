import Link from "next/link";

export function MaghribiLogo() {
  return (
    <Link className="brand" href="/" aria-label="Maghribi Group of Companies home">
      <span className="brand-mark" aria-hidden="true">
        <span className="tower tower-one" />
        <span className="tower tower-two" />
        <span className="tower tower-three" />
        <span className="chevron chevron-one" />
        <span className="chevron chevron-two" />
      </span>
      <span className="brand-copy">
        <strong>Maghribi</strong>
        <small>Group of Companies</small>
      </span>
    </Link>
  );
}
