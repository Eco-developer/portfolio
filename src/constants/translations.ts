export type Language = 'en' | 'es';

export const TRANSLATIONS = {
  en: {
    // Nav
    'nav.home': '01 Home',
    'nav.projects': '02 Projects',
    'nav.about': '03 About',
    'nav.available': 'Available Q4 · 2026',

    // Home - Hero
    'home.status': 'Open to new work · Q4 2026',
    'home.location': 'Madrid, Spain',
    'home.hero.title1': 'Jose <em>Quesada</em>',
    'home.hero.title2': '<span class="stroke">Fullstack</span> AI Developer',
    'home.hero.title3': 'building for <em>humans</em>.',
    'home.hero.tagline': '5 years shipping Software. Currently building <em style="font-style: italic">Finanzia</em> — a conversational AI agent for personal finance.',
    'home.hero.focusKey': 'Focus',
    'home.hero.focusVal': 'FullStack <small>+ Data</small> <small>+ AI</small>',
    'home.hero.sinceKey': 'Since',
    'home.hero.sinceVal': '2020<small>5 yrs</small>',
    'home.hero.scrollCue': 'Scroll to see the work',

    // Home - Featured
    'home.featured.eyebrow': '§ Featured · 2023 — 2026',
    'home.featured.title': "Two builds I'd like to <em>talk about</em>.",
    'home.featured.desc': "Not everything I build deserves a page. These two do — one explores conversational agentic AI for personal finance, the other solves responsive media streaming architecture.",
    'home.featured.read': 'Read case study',

    // Home - Selected work
    'home.selected.eyebrow': '§ Selected work · Personal builds',
    'home.selected.title': 'A wider <em>index</em>.',
    'home.selected.desc': 'Interactive frontend challenges, fullstack streaming clones, and responsive web platforms. Click through for detail.',
    'home.selected.seeAll': 'See all projects →',

    // Home - Stack
    'home.stack.eyebrow': '§ Stack · what I reach for',
    'home.stack.title': 'Tools I actually <em>ship</em> with.',
    'home.stack.desc': 'I keep the surface small on purpose. Fewer tools, more depth.',

    // Home - Experience
    'home.exp.eyebrow': '§ Experience · 2020 — now',
    'home.exp.title': "Where I've <em>worked</em>.",
    'home.exp.desc': 'Four and a half years across product companies, agencies, and my own bench.',

    // Projects Page
    'projects.eyebrow': '§ Index · {count} projects',
    'projects.title': 'The <em>work</em>, in full.',
    'projects.desc': "A curated index of personal projects and open-source builds. Streaming platforms, responsive frontend challenges, and interactive applications with live code and demos.",
    'projects.filters.all': 'All',
    'projects.filters.ai': 'AI',
    'projects.filters.fullstack': 'Fullstack',
    'projects.filters.frontend': 'Frontend',

    // Project Detail Page
    'project.eyebrow': 'Case study · {idx} / {total} · {year}',
    'project.role': 'Role',
    'project.year': 'Year',
    'project.kind': 'Kind',
    'project.stack': 'Stack',
    'project.contents': '§ Contents',
    'project.problemTab': '01 Problem',
    'project.approachTab': '02 Approach',
    'project.outcomeTab': '03 Outcome',
    'project.numbersTab': '04 Numbers',
    'project.problemHeading': 'Where it started.',
    'project.approachHeading': 'What I built.',
    'project.outcomeHeading': 'What happened.',
    'project.numbersHeading': 'By the numbers.',
    'project.prev': '← Previous',
    'project.next': 'Next →',
    'project.visitWebsite': 'Visit Website',
    'project.viewGithub': 'GitHub Repository',
    'project.viewApp': 'Open in Google Play',

    // About Page
    'about.eyebrow': '§ About · Jose Quesada',
    'about.title': 'Engineer <em style="font-style: italic; color: var(--accent)">first</em>,<br /> designer by <em style="font-style: italic; color: var(--accent)">necessity</em>.',
    'about.lede': 'I build software products that <em>work on the first click</em> and hold up under real use.',
    'about.p1': "I’m Jose. I’ve been writing software professionally for five years, building web and mobile applications for international clients, from development through production deployment. I work mostly with JavaScript/TypeScript (React, Next.js, Node.js, NestJS, and React Native), plus Ionic, Angular, and Laravel. I’ve built real-time features with WebSockets and WebRTC, integrated Stripe payments, and automated deployments with CI/CD on Azure and Linux. I apply TDD, Clean Architecture, and Scrum. I obsess over the details users never notice when they work and always notice when they don’t: cache invalidation, loading states, error boundaries. That’s what turns a demo into a product people can trust. Right now I’m pursuing a Master’s in Big Data & Business Analytics and learning data engineering with PySpark and Microsoft Fabric, alongside Microsoft Foundry, to bring AI and data into the software products I build.",
    'about.p2': "Currently building <b>Finanzia</b>, a conversational AI agent for personal finance, along with interactive streaming platforms, responsive challenges, and open-source frontend architectures. Before that I contributed to mission-critical platforms with millions of users.",
    'about.p3': "I live in Madrid, Spain. I read fiction that's too long, run slowly, and cook.",
    'about.expEyebrow': '§ Experience',
    'about.expTitle': "Places I've <em>worked</em>.",
    'about.stackEyebrow': '§ Stack',
    'about.stackTitle': 'What I <em>ship</em> with.',

    // Footer CTA
    'footer.eyebrow': "§ Let's talk · Q4 2026 · Q1 2027",
    'footer.title': 'Have an <em>idea</em> worth <br /> shipping?',
    'footer.downloadCv': 'Download CV',
    'footer.localTime': 'Madrid · Local time',
    'footer.elsewhere': 'Elsewhere',
    'footer.meta': '© 2026 Jose Quesada · Built by hand in Madrid',
  },
  es: {
    // Nav
    'nav.home': '01 Inicio',
    'nav.projects': '02 Proyectos',
    'nav.about': '03 Sobre mí',
    'nav.available': 'Disponible Q4 · 2026',

    // Home - Hero
    'home.status': 'Disponible para trabajar · Q4 2026',
    'home.location': 'Madrid, España',
    'home.hero.title1': 'Jose <em>Quesada</em>',
    'home.hero.title2': 'Desarrollador <span class="stroke">Fullstack</span> e IA',
    'home.hero.title3': 'creando para <em>humanos</em>.',
    'home.hero.tagline': '5 años desarrollando software. Actualmente construyendo <em style="font-style: italic">Finanzia</em> — un agente de IA conversacional para finanzas personales.',
    'home.hero.focusKey': 'Enfoque',
    'home.hero.focusVal': 'FullStack <small>+ Datos</small> <small>+ IA</small>',
    'home.hero.sinceKey': 'Desde',
    'home.hero.sinceVal': '2020<small>5 años</small>',
    'home.hero.scrollCue': 'Desplaza para ver los proyectos',

    // Home - Featured
    'home.featured.eyebrow': '§ Destacados · 2023 — 2026',
    'home.featured.title': 'Dos proyectos de los que quiero <em>hablar</em>.',
    'home.featured.desc': 'No todo lo que desarrollo necesita una página. Estos dos sí: uno explora IA conversacional con agentes para finanzas personales y el otro resuelve la arquitectura de streaming multimedia.',
    'home.featured.read': 'Ver caso de estudio',

    // Home - Selected work
    'home.selected.eyebrow': '§ Trabajos seleccionados · Proyectos personales',
    'home.selected.title': 'Un <em>índice</em> más amplio.',
    'home.selected.desc': 'Desafíos frontend interactivos, plataformas de streaming fullstack y aplicaciones web responsivas. Haz clic para ver detalles.',
    'home.selected.seeAll': 'Ver todos los proyectos →',

    // Home - Stack
    'home.stack.eyebrow': '§ Stack · herramientas que uso',
    'home.stack.title': 'Herramientas con las que realmente <em>produzco</em>.',
    'home.stack.desc': 'Mantengo el conjunto acotado a propósito. Menos herramientas, mayor profundidad.',

    // Home - Experience
    'home.exp.eyebrow': '§ Experiencia · 2020 — actualidad',
    'home.exp.title': 'Dónde he <em>trabajado</em>.',
    'home.exp.desc': 'Cuatro años y medio en empresas de producto, consultoras y proyectos propios.',

    // Projects Page
    'projects.eyebrow': '§ Índice · {count} proyectos',
    'projects.title': 'Los <em>proyectos</em>, al completo.',
    'projects.desc': 'Un índice curado de proyectos personales y desarrollos de código abierto. Plataformas de streaming, retos frontend responsivos y aplicaciones interactivas con código y despliegues en vivo.',
    'projects.filters.all': 'Todos',
    'projects.filters.ai': 'IA',
    'projects.filters.fullstack': 'Fullstack',
    'projects.filters.frontend': 'Frontend',

    // Project Detail Page
    'project.eyebrow': 'Caso de estudio · {idx} / {total} · {year}',
    'project.role': 'Rol',
    'project.year': 'Año',
    'project.kind': 'Tipo',
    'project.stack': 'Stack',
    'project.contents': '§ Contenidos',
    'project.problemTab': '01 Problema',
    'project.approachTab': '02 Enfoque',
    'project.outcomeTab': '03 Resultado',
    'project.numbersTab': '04 Métricas',
    'project.problemHeading': 'Dónde comenzó.',
    'project.approachHeading': 'Qué construí.',
    'project.outcomeHeading': 'Qué sucedió.',
    'project.numbersHeading': 'En cifras.',
    'project.prev': '← Anterior',
    'project.next': 'Siguiente →',
    'project.visitWebsite': 'Visitar sitio web',
    'project.viewGithub': 'Repositorio GitHub',
    'project.viewApp': 'Ver en Google Play',

    // About Page
    'about.eyebrow': '§ Sobre mí · Jose Quesada',
    'about.title': 'Ingeniero <em style="font-style: italic; color: var(--accent)">primero</em>,<br /> diseñador por <em style="font-style: italic; color: var(--accent)">necesidad</em>.',
    'about.lede': 'Construyo productos web que <em>funcionan al primer clic</em> y resisten el uso real.',
    'about.p1': 'Soy Jose. Llevo cinco años desarrollando software de forma profesional, construyendo aplicaciones web y móviles para clientes internacionales, desde el desarrollo hasta el despliegue en producción. Trabajo principalmente con JavaScript/TypeScript (React, Next.js, Node.js, NestJS y React Native), además de Ionic, Angular y Laravel. He construido funcionalidades en tiempo real con WebSockets y WebRTC, integrado pagos con Stripe y automatizado despliegues con CI/CD en Azure y Linux. Aplico TDD, Clean Architecture y Scrum. Me obsesionan los detalles que los usuarios nunca notan cuando funcionan y siempre notan cuando fallan: la invalidación de caché, los estados de carga, los error boundaries. Eso es lo que convierte una demo en un producto en el que se puede confiar. Actualmente curso una maestría en Big Data & Business Analytics y aprendo ingeniería de datos con PySpark y Microsoft Fabric, junto con Microsoft Foundry, para integrar IA y datos en los productos de software que desarrollo.',
    'about.p2': 'Actualmente construyendo <b>Finanzia</b>, un agente de IA conversacional para finanzas personales, junto a plataformas de streaming interactivas, desafíos frontend y arquitecturas web de código abierto. Anteriormente colaboré en el desarrollo de aplicaciones críticas para millones de usuarios.',
    'about.p3': 'Vivo en Madrid, España. Leo ficción extensa, corro a mi ritmo y cocino.',
    'about.expEyebrow': '§ Experiencia',
    'about.expTitle': 'Lugares donde he <em>trabajado</em>.',
    'about.stackEyebrow': '§ Stack',
    'about.stackTitle': 'Herramientas con las que <em>produzco</em>.',

    // Footer CTA
    'footer.eyebrow': '§ Hablemos · Q4 2026 · Q1 2027',
    'footer.title': '¿Tienes una <em>idea</em> que valga la pena <br /> construir?',
    'footer.downloadCv': 'Descargar CV',
    'footer.localTime': 'Madrid · Hora local',
    'footer.elsewhere': 'En la red',
    'footer.meta': '© 2026 Jose Quesada · Hecho a mano en Madrid',
  },
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS.en;
