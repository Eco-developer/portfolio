import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { useTranslator } from "../hooks/useTranslator";

export function FooterCTA() {
  const [time, setTime] = useState('');
  const { t, cvUrl, cvFilename } = useTranslator();

  useEffect(() => {
    const upd = () => {
      const d = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setTime(d);
    };
    upd(); 
    const intervalId = setInterval(upd, 1000); 
    return () => clearInterval(intervalId);
  }, []);
 
  return (
    <>
      <div className="footer-cta">
        <div className="orb a" style={{ opacity: .12 }} />
        <Reveal>
          <div className="eyebrow" style={{ color: 'color-mix(in oklab, var(--inverse-ink) 60%, transparent)' }}>
            {t('footer.eyebrow')}
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{ marginTop: 24 }} dangerouslySetInnerHTML={{ __html: t('footer.title') }} />
        </Reveal>
        <Reveal delay={2}>
          <div className="row">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a className="btn" href="mailto:josesk8mqc@gmail.com">
                josesk8mqc@gmail.com <span>→</span>
              </a>
              <a 
                className="btn ghost" 
                href={cvUrl} 
                download={cvFilename}
                target="_blank" 
                rel="noreferrer"
              >
                {t('footer.downloadCv')} <span>↓</span>
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <div className="mono" style={{ color: 'color-mix(in oklab, var(--inverse-ink) 55%, transparent)', marginBottom: 4 }}>
                  {t('footer.localTime')}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22 }}>{time}</div>
              </div>
              <div>
                <div className="mono" style={{ color: 'color-mix(in oklab, var(--inverse-ink) 55%, transparent)', marginBottom: 4 }}>
                  {t('footer.elsewhere')}
                </div>
                <div style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em' }}>
                  <a href="https://github.com/Eco-developer" target="_blank" rel="noreferrer" style={{ borderBottom: '1px solid currentColor' }}>GitHub</a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ borderBottom: '1px solid currentColor' }}>LinkedIn</a>
                  <a href="https://read.cv" target="_blank" rel="noreferrer" style={{ borderBottom: '1px solid currentColor' }}>Read.cv</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="footer-meta">
        <span>{t('footer.meta')}</span>
        <span>v2.0 · Sep 2026</span>
      </div>
    </>
  );
}