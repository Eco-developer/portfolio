import React from 'react';

export function YoutubeMock() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} aria-hidden>
      <img
        src={`${process.env.PUBLIC_URL}/assets/youtube-app.png`}
        alt="YouTube Clone"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}