import React from 'react';

export function DrTasMock() {
  return (
    <div className="mock-finanzia mock-drtas" aria-hidden>
      <div className="row1">
        <span className="pill">✚ DrTas · Health Services</span>
        <span className="pill">Active · Online</span>
      </div>
      <div className="big">
        2,450
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', marginLeft: 8 }}>
          consultations
        </span>
      </div>
      <div className="pill" style={{ alignSelf: 'flex-start' }}>
        ↗ 99.8% uptime · Automated reports
      </div>
      <div className="bars">
        <i style={{ height: '52%' }} /><i style={{ height: '68%' }} /><i style={{ height: '60%' }} />
        <i style={{ height: '82%' }} /><i style={{ height: '74%' }} /><i className="hi" style={{ height: '94%' }} />
        <i style={{ height: '58%' }} /><i style={{ height: '78%' }} /><i style={{ height: '70%' }} />
        <i style={{ height: '86%' }} /><i style={{ height: '64%' }} /><i style={{ height: '76%' }} />
      </div>
    </div>
  );
}
