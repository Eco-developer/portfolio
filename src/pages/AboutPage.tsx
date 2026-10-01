import { FooterCTA, Reveal, Section } from "../components";
import { STACK } from "../constants";
import { useTranslator } from "../hooks/useTranslator";

export function AboutPage() {
  const { t, experience } = useTranslator();

  return (
    <div className="page">
      <div className="wrap plist-head">
        <Reveal>
          <div className="eyebrow">{t('about.eyebrow')}</div>
        </Reveal>
        <Reveal delay={1}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(52px, 10vw, 140px)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              margin: '24px 0 20px',
            }}
            dangerouslySetInnerHTML={{ __html: t('about.title') }}
          />
        </Reveal>
      </div>

      <div className="wrap">
        <div className="about-cols">
          <Reveal delay={1}>
            <p className="about-lede" dangerouslySetInnerHTML={{ __html: t('about.lede') }} />
          </Reveal>
          <Reveal delay={2}>
            <div>
              <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
            </div>
          </Reveal>
        </div>

        <div style={{ height: 80 }} />

        <Section
          id="tl"
          eyebrow={t('about.expEyebrow')}
          title={t('about.expTitle')}
        >
          <div className="timeline">
            {experience.map((e, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 4)}>
                <div className="tl-row">
                  <span className="tl-year">{e.year}</span>
                  <div className="tl-body">
                    <h4>{e.role}</h4>
                    <div className="co">{e.co}</div>
                    <p>{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="stack-about"
          eyebrow={t('about.stackEyebrow')}
          title={t('about.stackTitle')}
        >
          <div className="stack-grid">
            {STACK.map((s, i) => (
              <Reveal key={s.k} delay={Math.min((i % 4) + 1, 4)}>
                <div className="stack-tile">
                  <span className="k">{s.k}</span>
                  <span className="v" dangerouslySetInnerHTML={{ __html: s.v }} />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      <FooterCTA />
    </div>
  );
}