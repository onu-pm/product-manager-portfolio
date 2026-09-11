type LinkDef = { label: string; href: string };

/** Renders `text`, turning any exact occurrence of a link's label into an
 *  anchor tag. Used for partner/platform names cited inline in a write-up. */
export default function Linkified({ text, links }: { text: string; links?: LinkDef[] }) {
  if (!links || links.length === 0) return <>{text}</>;

  const pattern = new RegExp(`(${links.map((l) => l.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const link = links.find((l) => l.label === part);
        return link ? (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="work-inline-link"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}
