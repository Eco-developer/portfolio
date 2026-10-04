import { useMemo, useState } from "react";
import { FooterCTA, Placeholder, Reveal, GithubIcon, ExternalLinkIcon } from "../components";
import { Route } from "../components/Nav";
import { useTranslator } from "../hooks/useTranslator";

export function ProjectsPage({ go }: { go: (route: Route) => void; }) {
  const { t, projects } = useTranslator();
  const [filter, setFilter] = useState('all');
  const filters = ['all', 'AI', 'Fullstack', 'Frontend'];

  const filterLabels: Record<string, string> = {
    all: t('projects.filters.all'),
    AI: t('projects.filters.ai'),
    Fullstack: t('projects.filters.fullstack'),
    Frontend: t('projects.filters.frontend'),
  };

  const shown = useMemo(() => {
    if (filter === 'all') return projects;
    const f = filter.toLowerCase();
    return projects.filter(p => {
      const k = p.kind.toLowerCase();
      const tags = p.tags.map(tag => tag.toLowerCase());
      if (f === 'ai') return k.includes('ai') || k.includes('ia') || tags.includes('openai');
      if (f === 'fullstack') return k.includes('fullstack') || tags.includes('fullstack') || tags.includes('nestjs') || tags.includes('mongodb');
      if (f === 'frontend') return k.includes('frontend') || tags.includes('frontend') || tags.includes('react');
      return k.includes(f) || tags.includes(f);
    });
  }, [filter, projects]);

  return (
    <div className="page">
      <div className="wrap plist-head">
        <Reveal>
          <div className="eyebrow">{t('projects.eyebrow', { count: projects.length })}</div>
        </Reveal>
        <Reveal delay={1}>
          <h1 dangerouslySetInnerHTML={{ __html: t('projects.title') }} />
        </Reveal>
        <Reveal delay={2}>
          <p className="section-desc" style={{ maxWidth: '64ch' }}>
            {t('projects.desc')}
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="plist-filters">
            {filters.map(f => (
              <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>
                {filterLabels[f] || f}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <div className="plist-grid">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min((i % 3) + 1, 4)}>
              <div
                className="pcard"
                role="link"
                tabIndex={0}
                onClick={() => go({ name: 'project', slug: p.slug })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') go({ name: 'project', slug: p.slug });
                }}
              >
                <div className="pcard-viz">
                  {p.Viz ? <p.Viz /> : <Placeholder label={`[ ${p.plain.toLowerCase()} — visual ]`} />}
                </div>
                <div className="pcard-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div className="pcard-title" dangerouslySetInnerHTML={{ __html: p.title }} />
                    <div style={{ display: 'flex', gap: 6 }}>
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="icon-link"
                          onClick={(e) => e.stopPropagation()}
                          title={t('project.viewGithub')}
                          aria-label={t('project.viewGithub')}
                        >
                          <GithubIcon size={14} />
                        </a>
                      )}
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="icon-link"
                          onClick={(e) => e.stopPropagation()}
                          title={p.url.includes('play.google.com') ? t('project.viewApp') : t('project.visitWebsite')}
                          aria-label={p.url.includes('play.google.com') ? t('project.viewApp') : t('project.visitWebsite')}
                        >
                          <ExternalLinkIcon size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="pcard-desc">{p.desc}</div>
                  <div className="pcard-meta">
                    <span className="mono" style={{ color: 'var(--muted)' }}>{p.kind}</span>
                    <span className="mono" style={{ color: 'var(--muted)' }}>{p.year} →</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div style={{ height: 80 }} />
      <FooterCTA />
    </div>
  );
}