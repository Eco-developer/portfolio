import { useCallback, useEffect, useState } from 'react';
import { Nav, VariantSwitcher } from './components';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { Route } from './components/Nav';
import { TranslatorProvider, useTranslator } from './hooks/useTranslator';

function parseHash(): Route {
  const h = (window?.location?.hash || '#/').replace(/^#/, '');
  const parts = h.split('/').filter(Boolean);
  if (parts.length === 0) return { name: 'home' };
  if (parts[0] === 'projects') return { name: 'projects' };
  if (parts[0] === 'about') return { name: 'about' };
  if (parts[0] === 'project' && parts[1]) return { name: 'project', slug: parts[1] };
  return { name: 'home' };
}

function hashFor(route: Route) {
  if (route.name === 'home') return '#/';
  if (route.name === 'project') return `#/project/${route.slug}`;
  return `#/${route.name}`;
}

function AppContent() {
  const [route, setRoute] = useState<Route>(parseHash());
  const [variant, setVariantState] = useState(() => localStorage.getItem('jq-variant') || 'bold');
  const { language, t } = useTranslator();

  useEffect(() => {
    document.documentElement.setAttribute('data-variant', variant);
    localStorage.setItem('jq-variant', variant);
  }, [variant]);

  const go = useCallback((r: Route) => {
    if (window?.location?.hash !== hashFor(r)) {
      window?.history?.pushState(null, '', hashFor(r));
    }
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const onPop = () => setRoute(parseHash());
    window.addEventListener('popstate', onPop);
    window.addEventListener('hashchange', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('hashchange', onPop);
    };
  }, []);

  let Page = null;
  if (route.name === 'home') Page = <HomePage go={go} />;
  else if (route.name === 'projects') Page = <ProjectsPage go={go} />;
  else if (route.name === 'about') Page = <AboutPage />;
  else if (route.name === 'project') Page = <ProjectDetailPage slug={route.slug} go={go} />;

  const label =
    route.name === 'home'
      ? t('nav.home')
      : route.name === 'projects'
      ? t('nav.projects')
      : route.name === 'about'
      ? t('nav.about')
      : `${language === 'es' ? 'Caso de estudio' : 'Case study'} · ${route.slug}`;

  return (
    <div data-screen-label={label}>
      <Nav route={route} go={go} />
      <main key={route.name + (route.slug || '')}>{Page}</main>
      <VariantSwitcher variant={variant} setVariant={setVariantState} />
    </div>
  );
}

function App() {
  return (
    <TranslatorProvider>
      <AppContent />
    </TranslatorProvider>
  );
}

export default App;
