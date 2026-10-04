import React from 'react';

export function DisneyMock() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} aria-hidden>
      <img
        src={`${process.env.PUBLIC_URL}/assets/disneyplus.jpg`}
        alt="Disney+ Clone"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}

