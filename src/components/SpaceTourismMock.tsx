import React from 'react';

export function SpaceTourismMock() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} aria-hidden>
      <img
        src={`${process.env.PUBLIC_URL}/assets/space-turism.jpg`}
        alt="Space Tourism Website"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}

