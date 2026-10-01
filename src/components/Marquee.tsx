
export function Marquee({ items }: {items:any[]}) {
  const track = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it.italic ? <em className="italic" style={{fontStyle:'italic'}}>{it.text}</em> : it.text}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}