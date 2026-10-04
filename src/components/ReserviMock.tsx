import React from 'react';

export function ReserviMock() {
  return (
    <div className="mock-finanzia" aria-hidden>
      <div className="row1">
        <span className="pill">🍽 Reservi · Dining</span>
        <span className="pill">Next.js 14 · Live</span>
      </div>
      <div className="big">
        Table 04
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', marginLeft: 8 }}>
          confirmed
        </span>
      </div>
      <div className="pill" style={{ alignSelf: 'flex-start' }}>
        ↗ Instant reservation · Responsive
      </div>
      <div className="bars">
        <i style={{ height: '35%' }} /><i style={{ height: '55%' }} /><i style={{ height: '70%' }} />
        <i style={{ height: '45%' }} /><i style={{ height: '80%' }} /><i className="hi" style={{ height: '90%' }} />
        <i style={{ height: '60%' }} /><i style={{ height: '75%' }} /><i style={{ height: '50%' }} />
        <i style={{ height: '85%' }} /><i style={{ height: '65%' }} /><i style={{ height: '40%' }} />
      </div>
    </div>
  );
}

