import React from 'react';

export function MedicTasMock() {
  return (
    <div className="mock-finanzia mock-medictas" aria-hidden>
      <div className="row1">
        <span className="pill">🌐 MedicTas · Global Telehealth</span>
        <span className="pill">Live · 4 Countries</span>
      </div>
      <div className="big">
        4,820
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', marginLeft: 8 }}>
          virtual visits
        </span>
      </div>
      <div className="pill" style={{ alignSelf: 'flex-start' }}>
        ● WebRTC encrypted · Instant doctor matching
      </div>
      <div className="bars">
        <i style={{ height: '48%' }} /><i style={{ height: '72%' }} /><i style={{ height: '64%' }} />
        <i style={{ height: '88%' }} /><i style={{ height: '78%' }} /><i className="hi" style={{ height: '96%' }} />
        <i style={{ height: '62%' }} /><i style={{ height: '84%' }} /><i style={{ height: '76%' }} />
        <i style={{ height: '90%' }} /><i style={{ height: '68%' }} /><i style={{ height: '82%' }} />
      </div>
    </div>
  );
}

