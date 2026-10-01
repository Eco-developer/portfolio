import { useEffect, useRef } from "react";
import { STACK } from "../constants";
import { FooterCTA, Marquee, Placeholder, Reveal, Section, GithubIcon, ExternalLinkIcon } from "../components";
import { Route } from "../components/Nav";
import { useTranslator } from "../hooks/useTranslator";

export function HomePage({ go }: { go: (route: Route) => void; }) {
  const { t, projects, experience } = useTranslator();

  // parallax for hero (subtle)
  const heroRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const y = window.scrollY;
      el.style.setProperty('--py', `${Math.min(y * 0.15, 80)}px`);
      el.style.setProperty('--pop', `${Math.max(1 - y / 900, 0.6)}`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <div className="page">
      {/* ---- HERO ---- */}
      <div className="hero" ref={heroRef} style={{ position: 'relative' }}>
        <div className="orb a" /><div className="orb b" />
        <div className="grid-bg" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="hero-top">
            <span className="hero-status"><span className="dot" />{t('home.status')}</span>
            <span>{t('home.location')}</span>
          </div>

          <h1 className="hero-title" style={{ transform: 'translateY(calc(var(--py, 0px) * -0.4))', opacity: 'var(--pop, 1)' }}>
            <Reveal as="span" className="row">
              <span dangerouslySetInnerHTML={{ __html: t('home.hero.title1') }} />
            </Reveal>
            <Reveal as="span" delay={1} className="row">
              <span dangerouslySetInnerHTML={{ __html: t('home.hero.title2') }} />
            </Reveal>
            <Reveal as="span" delay={2} className="row">
              <span dangerouslySetInnerHTML={{ __html: t('home.hero.title3') }} />
            </Reveal>
          </h1>

          <div className="hero-meta">
            <Reveal delay={2}>
              <p className="hero-tagline" dangerouslySetInnerHTML={{ __html: t('home.hero.tagline') }} />
            </Reveal>
            <Reveal delay={3}>
              <div className="hero-fact">
                <span className="k">{t('home.hero.focusKey')}</span>
                <span className="v" dangerouslySetInnerHTML={{ __html: t('home.hero.focusVal') }} />
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="hero-fact">
                <span className="k">{t('home.hero.sinceKey')}</span>
                <span className="v" dangerouslySetInnerHTML={{ __html: t('home.hero.sinceVal') }} />
              </div>
            </Reveal>
          </div>

          <div className="scroll-cue"><span className="line" /> {t('home.hero.scrollCue')}</div>
        </div>
      </div>

      {/* ---- STACK MARQUEE ---- */}
      <Marquee items={[
        { text: 'TypeScript' }, { text: 'React' }, { text: 'NestJS', italic: true },
        { text: 'Node.js' }, { text: 'Next.js', italic: true }, { text: 'PostgreSQL' },
        { text: 'Vue' }, { text: 'OpenAI', italic: true }, { text: 'Docker' },
        { text: 'Prisma' }, { text: 'Playwright', italic: true },
      ]} />

      {/* ---- FEATURED ---- */}
      <Section
        id="featured"
        eyebrow={t('home.featured.eyebrow')}
        title={t('home.featured.title')}
        desc={t('home.featured.desc')}
      >
        <div className="featured">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i === 0 ? 1 : 2}>
              <div
                className="fcard"
                role="link"
                tabIndex={0}
                onClick={() => go({ name: 'project', slug: p.slug })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') go({ name: 'project', slug: p.slug });
                }}
              >
                <div className="fcard-head">
                  <div>
                    <div className="fcard-idx">{p.idx} · {p.kind}</div>
                    <h3 className="fcard-title" style={{ marginTop: 12 }} dangerouslySetInnerHTML={{ __html: p.title }} />
                  </div>
                  <span className="fcard-year">{p.year}</span>
                </div>
                <div className="fcard-viz">
                  {p.Viz ? <p.Viz /> : <Placeholder label="[ product visual ]" />}
                </div>
                <p className="fcard-desc">{p.desc}</p>
                <div className="fcard-tags">
                  {p.tags.slice(0, 4).map(tag => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <div className="fcard-actions">
                  <div className="fcard-cta">
                    {t('home.featured.read')} <span className="arrow">→</span>
                  </div>
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ext-link-btn"
                      onClick={(e) => e.stopPropagation()}
                      title={t('project.viewGithub')}
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="ext-link-btn"
                      onClick={(e) => e.stopPropagation()}
                      title={t('project.visitWebsite')}
                    >
                      <ExternalLinkIcon size={12} />
                      <span>{t('project.visitWebsite')}</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---- SELECTED WORK LIST ---- */}
      <Section
        id="selected"
        eyebrow={t('home.selected.eyebrow')}
        title={t('home.selected.title')}
        desc={t('home.selected.desc')}
      >
        <div className="work-grid">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i + 1, 4)}>
              <div
                className="work-row"
                role="link"
                tabIndex={0}
                onClick={() => go({ name: 'project', slug: p.slug })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') go({ name: 'project', slug: p.slug });
                }}
              >
                <span className="idx">{p.idx}</span>
                <span className="name" dangerouslySetInnerHTML={{ __html: p.title }} />
                <span className="role">{p.role}</span>
                <span className="year">{p.year}</span>
                <div className="work-actions">
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
                      <GithubIcon size={15} />
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
                      <ExternalLinkIcon size={13} />
                    </a>
                  )}
                </div>
                <span className="arr">→</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
          <a className="nav-cta" href="#/projects" onClick={(e) => { e.preventDefault(); go({ name: 'projects' }); }}>
            {t('home.selected.seeAll')}
          </a>
        </div>
      </Section>

      {/* ---- STACK ---- */}
      <Section
        id="stack"
        eyebrow={t('home.stack.eyebrow')}
        title={t('home.stack.title')}
        desc={t('home.stack.desc')}
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

      {/* ---- EXPERIENCE PREVIEW ---- */}
      <Section
        id="experience"
        eyebrow={t('home.exp.eyebrow')}
        title={t('home.exp.title')}
        desc={t('home.exp.desc')}
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

      <FooterCTA />
    </div>
  );
}