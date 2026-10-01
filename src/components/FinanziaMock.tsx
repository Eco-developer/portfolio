export function FinanziaMock() {
  return (
    <div className="mock-finanzia" aria-hidden>
      <div className="row1">
        <span className="pill">◆ Finanzia · Balance</span>
        <span className="pill">Sep · 2026</span>
      </div>
      <div className="big">€ 12,480<span style={{fontFamily:'var(--font-mono)', fontSize:13, color:'var(--muted)', marginLeft:8}}>.32</span></div>
      <div className="pill" style={{alignSelf:'flex-start'}}>↗ +8.2% vs last month · AI insight ready</div>
      <div className="bars">
        <i style={{height:'40%'}} /><i style={{height:'62%'}} /><i style={{height:'34%'}} />
        <i style={{height:'78%'}} /><i style={{height:'56%'}} /><i className="hi" style={{height:'92%'}} />
        <i style={{height:'48%'}} /><i style={{height:'70%'}} /><i style={{height:'60%'}} />
        <i style={{height:'82%'}} /><i style={{height:'44%'}} /><i style={{height:'66%'}} />
      </div>
    </div>
  );
}