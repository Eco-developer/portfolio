import React from 'react';
import { useTranslator } from '../hooks/useTranslator';

export interface Route {
  name: 'home' | 'projects' | 'about' | 'project' | string;
  slug?: string;
}

export interface NavProps {
  route: Route;
  go: (route: Route) => void;
}

export function Nav({ route, go }: NavProps) {
  const { language, setLanguage, t } = useTranslator();

  const links = [
    { id: 'home', label: t('nav.home') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'about', label: t('nav.about') },
  ];

  const active = route.name === 'project' ? 'projects' : route.name;

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a className="nav-brand" href="#/" onClick={(e) => { e.preventDefault(); go({ name: 'home' }); }}>
          <span className="nav-brand-mark">JQ</span>
          <span className="nav-brand-name">Jose Quesada</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#/${l.id === 'home' ? '' : l.id}`}
              className={'nav-link' + (active === l.id ? ' active' : '')}
              onClick={(e) => {
                e.preventDefault();
                go({ name: l.id });
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="lang-switcher" role="group" aria-label="Language selection">
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={language === 'es' ? 'active' : ''}
              onClick={() => setLanguage('es')}
              aria-pressed={language === 'es'}
            >
              ES
            </button>
          </div>

          <a
            className="nav-cta"
            href="#/about"
            onClick={(e) => {
              e.preventDefault();
              go({ name: 'about' });
            }}
          >
            <span>{t('nav.available')}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}