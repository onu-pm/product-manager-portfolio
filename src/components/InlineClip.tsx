// A short screen recording or screenshot dropped inline in a case-study
// section, showing the app itself rather than just describing it. A video
// plays like a gif — autoplay, loop, muted, no controls — so it reads as
// part of the paragraph flow rather than a heavy embedded player. Renders
// nothing until a real clip/screenshot exists for that spot.
export default function InlineClip({ src, caption }: { src?: string; caption?: string }) {
  if (!src) return null;
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);
  return (
    <figure className="lab-clip">
      {isVideo ? (
        <video src={src} autoPlay loop muted playsInline preload="metadata" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={caption ?? ""} />
      )}
      {caption && <figcaption className="lab-clip-caption">{caption}</figcaption>}
    </figure>
  );
}
