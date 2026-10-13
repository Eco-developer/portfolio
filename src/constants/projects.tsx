import { FinanziaMock } from "../components/FinanziaMock";
import { YoutubeMock } from "../components/YoutubeMock";
import { DisneyMock } from "../components/DisneyMock";
import { SpaceTourismMock } from "../components/SpaceTourismMock";

export interface ProjectItem {
  slug: string;
  idx: string;
  year: string;
  title: string;
  plain: string;
  role: string;
  tags: string[];
  desc: string;
  kind: string;
  url?: string;
  githubUrl: string;
  stats: { n: string; l: string }[];
  problem: string;
  approach: string;
  outcome: string;
  Viz: any;
}

export const PROJECTS_EN: ProjectItem[] = [
  {
    slug: 'finanzia',
    idx: '01',
    year: '2026',
    title: '<em>Finanzia</em>',
    plain: 'Finanzia',
    role: 'Fullstack & AI Engineer',
    tags: ['Next.js', 'TypeScript', 'NestJS', 'OpenAI', 'Postgres'],
    desc: 'A conversational AI agent that ingests bank feeds, categorises spend, and answers questions about your personal finances in natural language.',
    kind: 'AI · Fintech',
    githubUrl: 'https://github.com/Eco-developer/finanzia',
    stats: [
      { n: 'OpenAI', l: 'function calling loop' },
      { n: '<2.5s', l: 'agent response latency' },
      { n: 'PostgreSQL', l: 'deterministic ledger' },
      { n: '100%', l: 'self-hosted & private' },
    ],
    problem: 'Traditional personal-finance apps show static charts but rarely answer the questions you actually have, forcing you to hunt through multiple screens and spreadsheets just to find out "can I afford this?"',
    approach: 'I built Finanzia as an agent-first product: a NestJS backend orchestrating tool-use over an OpenAI function-calling loop, backed by a Postgres ledger and a rules engine for deterministic financial math. The Next.js frontend renders streaming responses as inspectable, editable cards — not a chat wall.',
    outcome: 'Built as a self-hosted personal tool for automated expense tracking and deep financial analysis. It successfully operates as a private financial copilot with deterministic mathematical guarantees, serving as a reliable personal assistant and testing ground for production-grade agentic architectures.',
    Viz: FinanziaMock,
  },
  {
    slug: 'youtube-clone',
    idx: '02',
    year: '2023',
    title: 'Youtube <em>Clone</em>',
    plain: 'Youtube Clone',
    role: 'Frontend Developer',
    tags: ['React', 'TypeScript', 'Redux', 'Styled Components', 'YouTube API'],
    desc: 'A responsive YouTube web client powered by the YouTube Data API v3, featuring video streaming, instant search, categories, and custom player controls.',
    kind: 'Frontend · Media',
    url: 'https://youtube-clone-ecodev.netlify.app/',
    githubUrl: 'https://github.com/Eco-developer/youtube-app',
    stats: [
      { n: '100%', l: 'responsive layout' },
      { n: '<500ms', l: 'search & video load' },
      { n: 'v3', l: 'YouTube Data API' },
      { n: 'Redux', l: 'global state cache' },
    ],
    problem: 'The goal of this project was to learn how to integrate third-party APIs, such as the YouTube API, and to practice mobile-first responsive web design, starting with the smallest screens and progressively enhancing the layout for tablets and desktops.',
    approach: 'Architected with React and TypeScript, leveraging Redux for centralized state management and API query caching. Styled with Styled Components for modular design, and integrated YouTube Data API v3 for live search, category browsing, and video playback.',
    outcome: 'Deployed to Netlify with immediate load times, fluid video playback, and a mobile-friendly design closely mirroring YouTube\'s native desktop and mobile experience.',
    Viz: YoutubeMock,
  },
  {
    slug: 'disney-plus-clone',
    idx: '03',
    year: '2023',
    title: 'Disney+ <em>Clone</em>',
    plain: 'Disney+ Clone',
    role: 'Fullstack Developer',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Styled Components', 'TMDB API'],
    desc: 'Fullstack streaming platform clone inspired by Disney+, featuring TMDB movie catalog integration, user authentication, trailer playback, and dynamic sliders.',
    kind: 'Fullstack · Streaming',
    url: 'https://disney-plus-clone-ecodev.netlify.app/',
    githubUrl: 'https://github.com/Eco-developer/disney-plus-front',
    stats: [
      { n: 'MERN', l: 'Fullstack architecture' },
      { n: 'TMDB', l: 'movie catalog integration' },
      { n: 'JWT', l: 'session management' },
      { n: 'Slick', l: 'animated carousels' },
    ],
    problem: 'Replicating a premium SVOD platform like Disney+ requires rich visual discovery, smooth carousel animations, branded category portals, trailer playback, and secure user data storage.',
    approach: 'Engineered a fullstack solution with React, Redux, and Styled Components on the frontend, powered by a Node.js and MongoDB backend. Synchronized with the TMDB API for live movies, series metadata, and backdrop art, with custom CSS hover interactions replicating Disney+ brands.',
    outcome: 'Fully operational web app on Netlify with seamless video modal trailers, dynamic content feeds, and a polished dark-mode cinematic interface.',
    Viz: DisneyMock,
  },
  {
    slug: 'space-tourism',
    idx: '04',
    year: '2023',
    title: 'Space <em>Tourism</em>',
    plain: 'Space Tourism Website',
    role: 'Frontend Developer',
    tags: ['React', 'TypeScript', 'CSS3', 'Responsive Design'],
    desc: 'Multi-page interactive space tourism experience with fluid tabbed navigation across destinations, crew member bios, and spacecraft technology specs.',
    kind: 'Frontend · Interactive',
    url: 'https://space-ecodev.netlify.app/',
    githubUrl: 'https://github.com/Eco-developer/space-tourism-website',
    stats: [
      { n: '100%', l: 'pixel-perfect fidelity' },
      { n: '0', l: 'external UI frameworks' },
      { n: '100/100', l: 'Lighthouse score' },
      { n: 'Tabbed', l: 'smooth state transitions' },
    ],
    problem: 'Delivering a multi-page interactive web experience that strictly adheres to design specifications across mobile, tablet, and widescreen viewports with custom tabbed navigation.',
    approach: 'Built with React and TypeScript without UI libraries, using clean custom CSS variables, responsive typography clamp functions, and accessible ARIA tab patterns for destinations, crew members, and tech specs.',
    outcome: 'Completed Frontend Mentor challenge with perfect responsive fidelity, blazing fast page loads, and intuitive space exploration tabs.',
    Viz: SpaceTourismMock,
  },
];

export const PROJECTS_ES: ProjectItem[] = [
  {
    slug: 'finanzia',
    idx: '01',
    year: '2026',
    title: '<em>Finanzia</em>',
    plain: 'Finanzia',
    role: 'Desarrollador Fullstack & IA',
    tags: ['Next.js', 'TypeScript', 'NestJS', 'OpenAI', 'Postgres'],
    desc: 'Un agente conversacional de IA que procesa extractos bancarios, categoriza gastos y responde preguntas sobre tus finanzas en lenguaje natural.',
    kind: 'IA · Fintech',
    githubUrl: 'https://github.com/Eco-developer/finanzia',
    stats: [
      { n: 'OpenAI', l: 'bucle de function calling' },
      { n: '<2.5s', l: 'latencia de respuesta' },
      { n: 'PostgreSQL', l: 'ledger determinista' },
      { n: '100%', l: 'privado y autoalojado' },
    ],
    problem: 'Las aplicaciones tradicionales de finanzas personales muestran gráficos estáticos pero rara vez responden a las preguntas que uno realmente tiene, obligando a navegar entre múltiples pantallas para saber si un gasto es viable.',
    approach: 'Construí Finanzia como un producto centrado en agentes: un backend en NestJS que orquesta el uso de herramientas con function calling de OpenAI, respaldado por un ledger en Postgres y un motor de reglas para cálculos financieros deterministas. El frontend en Next.js renderiza respuestas en streaming como tarjetas interactivas y editables.',
    outcome: 'Desarrollado como una herramienta personal y autoalojada para automatizar el seguimiento de gastos y el análisis financiero privado. Funciona con éxito como un copiloto financiero personal con cálculos deterministas garantizados, sirviendo como asistente personal y laboratorio de experimentación para arquitecturas de agentes.',
    Viz: FinanziaMock,
  },
  {
    slug: 'youtube-clone',
    idx: '02',
    year: '2023',
    title: 'Youtube <em>Clone</em>',
    plain: 'Youtube Clone',
    role: 'Frontend Developer',
    tags: ['React', 'TypeScript', 'Redux', 'Styled Components', 'YouTube API'],
    desc: 'Cliente web interactivo inspirado en YouTube impulsado por la API de YouTube v3, con streaming de video, búsqueda instantánea, categorías y reproductor personalizado.',
    kind: 'Frontend · Multimedia',
    url: 'https://youtube-clone-ecodev.netlify.app/',
    githubUrl: 'https://github.com/Eco-developer/youtube-app',
    stats: [
      { n: '100%', l: 'diseño responsive' },
      { n: '<500ms', l: 'búsqueda y carga' },
      { n: 'v3', l: 'YouTube Data API' },
      { n: 'Redux', l: 'gestión de estado' },
    ],
    problem: 'El objetivo de este proyecto fue aprender a integrar APIs de terceros, como la API de YouTube, y practicar el diseño web responsive con enfoque mobile-first, partiendo de las pantallas más pequeñas y mejorando progresivamente el diseño para tabletas y escritorio.',
    approach: 'Desarrollado con React y TypeScript, utilizando Redux para la gestión centralizada del estado y almacenamiento en caché de peticiones a la API. Diseñado con Styled Components e integrado con la API v3 de YouTube para streaming, categorías dinámicas y reproducción fluida.',
    outcome: 'Publicado en Netlify con tiempos de respuesta inmediatos, interfaz interactiva y una experiencia fiel a la plataforma oficial tanto en escritorio como en dispositivos móviles.',
    Viz: YoutubeMock,
  },
  {
    slug: 'disney-plus-clone',
    idx: '03',
    year: '2023',
    title: 'Disney+ <em>Clone</em>',
    plain: 'Disney+ Clone',
    role: 'Fullstack Developer',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Styled Components', 'TMDB API'],
    desc: 'Plataforma de streaming full stack inspirada en Disney+, con catálogo dinámico de películas con la API de TMDB, trailers y sliders interactivos.',
    kind: 'Fullstack · Streaming',
    url: 'https://disney-plus-clone-ecodev.netlify.app/',
    githubUrl: 'https://github.com/Eco-developer/disney-plus-front',
    stats: [
      { n: 'MERN', l: 'arquitectura fullstack' },
      { n: 'TMDB', l: 'integración catálogo cine' },
      { n: 'JWT', l: 'autenticación segura' },
      { n: 'Slick', l: 'carruseles animados' },
    ],
    problem: 'Replicar una plataforma de entretenimiento como Disney+ demanda una navegación visual envolvente, carruseles interactivos, portales temáticos de marcas, reproducción de trailers y gestión de usuarios.',
    approach: 'Construí una solución Full Stack con frontend en React, Redux y Styled Components, respaldada por un backend en Node.js y MongoDB. Integré la API de TMDB para información de estrenos y arte gráfico, replicando las interacciones y animaciones de marca (Disney, Pixar, Marvel, Star Wars, NatGeo).',
    outcome: 'Aplicación completamente funcional desplegada en Netlify con modales de trailers, navegación dinámica y una interfaz cinematográfica oscura de alta fidelidad.',
    Viz: DisneyMock,
  },
  {
    slug: 'space-tourism',
    idx: '04',
    year: '2023',
    title: 'Space <em>Tourism</em>',
    plain: 'Space Tourism Website',
    role: 'Frontend Developer',
    tags: ['React', 'TypeScript', 'CSS3', 'Responsive Design'],
    desc: 'Experiencia web interactiva multi-página sobre turismo espacial con navegación fluida por destinos planetarios, tripulación y especificaciones técnicas.',
    kind: 'Frontend · Interactivo',
    url: 'https://space-ecodev.netlify.app/',
    githubUrl: 'https://github.com/Eco-developer/space-tourism-website',
    stats: [
      { n: '100%', l: 'fidelidad pixel-perfect' },
      { n: '0', l: 'librerías UI externas' },
      { n: '100/100', l: 'puntuación Lighthouse' },
      { n: 'Pestañas', l: 'transición fluida' },
    ],
    problem: 'Crear una experiencia web interactiva multipágina que cumpla rigurosamente con las especificaciones de diseño en dispositivos móviles, tablets y monitores ultrawide.',
    approach: 'Desarrollado con React y TypeScript desde cero sin librerías externas de UI, implementando variables CSS puras, tipografía fluida y navegación accesible por pestañas para destinos, tripulación y tecnologías espaciales.',
    outcome: 'Reto de Frontend Mentor completado con diseño pixel-perfect, máxima puntuación de rendimiento y una experiencia inmersiva de exploración espacial.',
    Viz: SpaceTourismMock,
  },
];

export const PROJECTS = PROJECTS_EN;