// A short screen recording dropped inline in a blog-style write-up, styled
// and behaving like a gif (autoplay, loop, muted, no controls) rather than
// a full video player, so it reads as part of the paragraph flow and stays
// light. Renders nothing until a real clip exists for that spot.
export default function InlineClip({ src, caption }: { src?: string; caption?: string }) {
  if (!src) return null;
  return (
    <figure className="lab-clip">
      <video src={src} autoPlay loop muted playsInline preload="metadata" />
      {caption && <figcaption className="lab-clip-caption">{caption}</figcaption>}
    </figure>
  );
}
