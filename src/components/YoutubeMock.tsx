export function YoutubeMock() {
  return (
    <div className="mock-yt" aria-hidden>
      <div className="side">
        <i /><i /><i /><i /><i />
      </div>
      <div className="feed">
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="card" key={i}>
            <div className="thumb" />
            <div className="meta"><div className="a" /><div className="b" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}