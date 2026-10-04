import React from 'react';

export function GoldChicksMock() {
  return (
    <div className="mock-finanzia" aria-hidden>
      <div className="row1">
        <span className="pill">✦ Gold Chicks · Store</span>
        <span className="pill">React · Vercel</span>
      </div>
      <div className="big">
        Catalog
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', marginLeft: 8 }}>
          v2.0
        </span>
      </div>
      <div className="pill" style={{ alignSelf: 'flex-start' }}>
        ↗ High-fidelity layout · Mobile-first
      </div>
      <div className="bars">
        <i style={{ height: '45%' }} /><i style={{ height: '60%' }} /><i style={{ height: '50%' }} />
        <i style={{ height: '70%' }} /><i style={{ height: '65%' }} /><i className="hi" style={{ height: '88%' }} />
        <i style={{ height: '55%' }} /><i style={{ height: '72%' }} /><i style={{ height: '62%' }} />
        <i style={{ height: '78%' }} /><i style={{ height: '58%' }} /><i style={{ height: '82%' }} />
      </div>
    </div>
  );
}

