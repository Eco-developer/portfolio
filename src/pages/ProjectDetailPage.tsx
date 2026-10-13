import { FooterCTA, Placeholder, Reveal, GithubIcon, ExternalLinkIcon } from "../components";
import { Route } from "../components/Nav";
import { useTranslator } from "../hooks/useTranslator";

export interface ProjectDetailProps {
  slug?: string;
  go: (route: Route) => void;
}

export function ProjectDetailPage({ slug, go }: ProjectDetailProps) {
  const { t, projects } = useTranslator();

  const p = projects.find((x) => x.slug === slug) || projects[0];
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <div className="page">
      <div className="wrap pd-hero">
        <Reveal>
          <div className="eyebrow">
            {t('project.eyebrow', {
              idx: p.idx,
              total: String(projects.length).padStart(2, '0'),
              year: p.year,
            })}
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="pd-title" dangerouslySetInnerHTML={{ __html: p.title }} />
        </Reveal>

        <div className="pd-meta">
          <Reveal delay={1}>
            <div>
              <div className="k">{t('project.role')}</div>
              <div className="v">{p.role}</div>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div>
              <div className="k">{t('project.year')}</div>
              <div className="v">{p.year}</div>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div>
              <div className="k">{t('project.kind')}</div>
              <div className="v">{p.kind}</div>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div>
              <div className="k">{t('project.stack')}</div>
              <div className="v">{p.tags.join(' · ')}</div>
            </div>
          </Reveal>
        </div>

        {(p.githubUrl || p.url) && (
          <Reveal delay={2}>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {p.githubUrl && (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ext-link-btn"
                  style={{ padding: '10px 18px', fontSize: '12px' }}
                >
                  <GithubIcon size={16} />
                  <span>{t('project.viewGithub')}</span>
                  <span>↗</span>
                </a>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ext-link-btn"
                  style={{ padding: '10px 18px', fontSize: '12px' }}
                >
                  <ExternalLinkIcon size={14} />
                  <span>{p.url.includes('play.google.com') ? t('project.viewApp') : t('project.visitWebsite')}</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </Reveal>
        )}

        <Reveal delay={3}>
          <div className="pd-viz">
            {p.Viz ? <p.Viz /> : <Placeholder label={`[ hero shot — ${p.plain.toLowerCase()} ]`} />}
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <div className="pd-body">
          <div className="pd-side">
            <div style={{ position: 'sticky', top: 100 }}>
              <div>{t('project.contents')}</div>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--ink)' }}>
                <a href="#problem">{t('project.problemTab')}</a>
                <a href="#approach">{t('project.approachTab')}</a>
                <a href="#outcome">{t('project.outcomeTab')}</a>
                <a href="#numbers">{t('project.numbersTab')}</a>
              </div>
            </div>
          </div>
          <div className="pd-prose">
            <div className="pd-block" id="problem">
              <div className="eyebrow" style={{ marginBottom: 12 }}>§ {t('project.problemTab')}</div>
              <h3>{t('project.problemHeading')}</h3>
              <p>{p.problem}</p>
            </div>

            <div className="pd-block" id="approach">
              <div className="eyebrow" style={{ marginBottom: 12 }}>§ {t('project.approachTab')}</div>
              <h3>{t('project.approachHeading')}</h3>
              <p>{p.approach}</p>
              <div className="pd-shots">
                <div className="pd-shot">
                  {p.slug === 'disney-plus-clone' ? (
                    <img src={`${process.env.PUBLIC_URL}/assets/disneyplus.jpg`} alt="Disney+ Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : p.slug === 'space-tourism' ? (
                    <img src={`${process.env.PUBLIC_URL}/assets/space-turism.jpg`} alt="Space Tourism Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : p.slug === 'youtube-clone' ? (
                    <img src={`${process.env.PUBLIC_URL}/assets/youtube-app.png`} alt="Youtube Clone Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <Placeholder label="[ web application preview ]" />
                  )}
                </div>
                <div className="pd-shot">
                  <Placeholder label="[ responsive interface ]" />
                </div>
              </div>
            </div>

            <div className="pd-block" id="outcome">
              <div className="eyebrow" style={{ marginBottom: 12 }}>§ {t('project.outcomeTab')}</div>
              <h3>{t('project.outcomeHeading')}</h3>
              <p>{p.outcome}</p>
            </div>

            <div className="pd-block" id="numbers">
              <div className="eyebrow" style={{ marginBottom: 12 }}>§ {t('project.numbersTab')}</div>
              <div className="pd-stats">
                {p.stats.map((s, i) => (
                  <div className="pd-stat" key={i}>
                    <div className="n">{s.n}</div>
                    <div className="l">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pd-nextprev">
              <a
                href={`#/project/${prev.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  go({ name: 'project', slug: prev.slug });
                  window.scrollTo({ top: 0, behavior: 'auto' });
                }}
              >
                <span className="l">{t('project.prev')}</span>
                <span className="t" dangerouslySetInnerHTML={{ __html: prev.title }} />
              </a>
              <a
                href={`#/project/${next.slug}`}
                style={{ textAlign: 'right' }}
                onClick={(e) => {
                  e.preventDefault();
                  go({ name: 'project', slug: next.slug });
                  window.scrollTo({ top: 0, behavior: 'auto' });
                }}
              >
                <span className="l">{t('project.next')}</span>
                <span className="t" dangerouslySetInnerHTML={{ __html: next.title }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 80 }} />
      <FooterCTA />
    </div>
  );
}
