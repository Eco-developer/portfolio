import { DrTasMock } from "../components/DrTasMock";
import { MedicTasMock } from "../components/MedicTasMock";

function FinanziaMock() {
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
  githubUrl?: string;
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
    role: 'AI Product Engineer',
    tags: ['Next.js', 'TypeScript', 'NestJS', 'OpenAI', 'Postgres'],
    desc: 'A conversational AI agent that ingests bank feeds, categorises spend, and answers questions about your personal finances in natural language.',
    kind: 'AI · Fintech',
    githubUrl: 'https://github.com/Eco-developer/finanzia',
    stats: [
      { n: '42%', l: 'faster onboarding' },
      { n: '3.1s', l: 'avg agent latency' },
      { n: '18k', l: 'txns categorised' },
      { n: '4.8★', l: 'user rating' },
    ],
    problem: 'Personal-finance apps show you charts but rarely answer the question you actually have. Users churn because they don\'t want to hunt through five screens to find out "can I afford this?"',
    approach: 'I built Finanzia as an agent-first product: a NestJS backend orchestrating tool-use over an OpenAI function-calling loop, backed by a Postgres ledger and a rules engine for deterministic financial math. The Next.js frontend renders streaming responses as inspectable, editable cards — not a chat wall.',
    outcome: 'Shipped a private beta to 400 users in six weeks. Retention at week 4 sits at 62%, and the average session ends with the user taking a concrete action (moving money, cancelling a sub, adjusting a budget).',
    Viz: FinanziaMock,
  },
  {
    slug: 'medictas-global',
    idx: '02',
    year: '2025',
    title: 'Medic <em>Tas Global</em>',
    plain: 'Medic Tas Global',
    role: 'Fullstack Developer',
    tags: ['React', 'Next.js', 'Node.js', 'WebSockets', 'Stripe'],
    desc: 'Global healthcare and telemedicine portal featuring real-time virtual consultations, appointment scheduling, and multi-country payment gateway integration.',
    kind: 'Telemedicine · Global',
    url: 'https://www.medictasglobal.com/login',
    stats: [
      { n: '4+', l: 'countries reached' },
      { n: 'SSR/SSG', l: 'optimized SEO' },
      { n: 'WebRTC', l: 'live video calls' },
      { n: 'Stripe', l: 'subscriptions' },
    ],
    problem: 'Delivering low-latency virtual consultations, calendar synchronization, and flexible recurring subscriptions across international borders with diverse payment methods.',
    approach: 'Engineered with Next.js and Node.js implementing Server-Side Rendering (SSR) for fast load speeds and SEO. Integrated real-time WebSockets, automated Stripe subscription billing with webhooks, and WebRTC video consultations.',
    outcome: 'Operates stably across 4 countries with instant connection times during remote doctor-patient appointments.',
    Viz: MedicTasMock,
  },
  {
    slug: 'drtas-web',
    idx: '03',
    year: '2025',
    title: 'DrTas <em>Web</em>',
    plain: 'DrTas Web Services',
    role: 'Fullstack Developer',
    tags: ['Laravel', 'Livewire', 'Tailwind CSS', 'SQL Server', 'Azure'],
    desc: 'Medical services web platform for digital appointment management, patient tracking, and automated clinical reports with high availability.',
    kind: 'Healthcare · Web Platform',
    url: 'https://www.mydrtasservices.com/login',
    stats: [
      { n: '2', l: 'apps in production' },
      { n: '<250ms', l: 'API latency' },
      { n: '10k+', l: 'patient records' },
      { n: '99.9%', l: 'Azure uptime' },
    ],
    problem: 'Healthcare clinics and providers needed an integrated web ecosystem to handle patient triage, schedule specialist appointments, and generate verified PDF clinical reports without manual administrative bottlenecks.',
    approach: 'Led the complete lifecycle of 2 Full Stack applications with PHP/Laravel, Tailwind CSS, Livewire, and Alpine.js. Integrated secure payment gateways, transactional mailings, and microservices for asynchronous PDF reports. Optimized SQL Server queries and configured CI/CD pipelines across Linux, NGINX, and Azure.',
    outcome: 'Successfully deployed and active in production across multiple medical locations, streamlining administrative and consultation processes by more than 50%.',
    Viz: DrTasMock,
  },
  {
    slug: 'locatel-gold',
    idx: '04',
    year: '2024',
    title: 'Locatel <em>Gold</em>',
    plain: 'Locatel Gold Colombia',
    role: 'Frontend / Mobile Developer',
    tags: ['React Native', 'TypeScript', 'Redux', 'Jest', 'Android'],
    desc: 'Official mobile application for Locatel Colombia members, featuring medicine catalog browsing, digital prescription refills, and exclusive membership loyalty perks.',
    kind: 'Mobile · Pharmacy',
    url: 'https://play.google.com/store/apps/details?id=com.locatel.gold.colombia&hl=en-US&pli=1',
    stats: [
      { n: '+40%', l: 'perf boost' },
      { n: 'TDD', l: 'Jest testing' },
      { n: 'Offline', l: 'cache support' },
      { n: 'Google Play', l: 'store release' },
    ],
    problem: 'The legacy mobile experience suffered from performance bottlenecks, missing offline catalog navigation, and slow prescription ordering workflows.',
    approach: 'Led the architecture migration and modernization of the React Native app using TypeScript, implementing unit and integration testing with Jest & React Testing Library (TDD), and optimizing state management with Redux caching.',
    outcome: 'Boosted overall application speed and responsiveness by 40%, delivering a top-rated pharmaceutical catalog and delivery service on Google Play.',
    Viz: null,
  },
  {
    slug: 'drtas-app',
    idx: '05',
    year: '2024',
    title: 'DrTas <em>App</em>',
    plain: 'DrTas Mobile App',
    role: 'Mobile Developer',
    tags: ['React Native', 'TypeScript', 'WebRTC', 'Push Notifications'],
    desc: 'Mobile telehealth application connecting patients directly with certified doctors for video triage, rapid appointment scheduling, and digital prescription tracking.',
    kind: 'Mobile · Telehealth',
    url: 'https://play.google.com/store/apps/details?id=com.v1.mydrtas.app',
    stats: [
      { n: 'Android', l: 'Google Play' },
      { n: '<100ms', l: 'push alerts' },
      { n: 'WebRTC', l: 'encrypted calls' },
      { n: '100%', l: 'mobile first' },
    ],
    problem: 'Patients needed quick and accessible healthcare consultations on the go without waiting for physical clinical appointments.',
    approach: 'Built a clean, responsive React Native mobile app with real-time push notifications for appointment reminders and encrypted WebRTC video streaming.',
    outcome: 'Published on Google Play, providing thousands of patients direct access to telemedicine consultations with ease.',
    Viz: null,
  },
];

export const PROJECTS_ES: ProjectItem[] = [
  {
    slug: 'finanzia',
    idx: '01',
    year: '2026',
    title: '<em>Finanzia</em>',
    plain: 'Finanzia',
    role: 'AI Product Engineer',
    tags: ['Next.js', 'TypeScript', 'NestJS', 'OpenAI', 'Postgres'],
    desc: 'Un agente conversacional de IA que procesa extractos bancarios, categoriza gastos y responde preguntas sobre tus finanzas en lenguaje natural.',
    kind: 'IA · Fintech',
    githubUrl: 'https://github.com/Eco-developer/finanzia',
    stats: [
      { n: '42%', l: 'onboarding más rápido' },
      { n: '3.1s', l: 'latencia media agente' },
      { n: '18k', l: 'transacciones clasificadas' },
      { n: '4.8★', l: 'valoración usuarios' },
    ],
    problem: 'Las aplicaciones de finanzas personales muestran gráficos pero rara vez responden a tu pregunta real. Los usuarios abandonan porque no quieren navegar entre cinco pantallas para saber si pueden permitirse un gasto.',
    approach: 'Construí Finanzia como un producto centrado en agentes: un backend en NestJS que orquesta el uso de herramientas con function calling de OpenAI, respaldado por un ledger en Postgres y un motor de reglas para cálculos financieros deterministas. El frontend en Next.js renderiza respuestas en streaming como tarjetas interactivas y editables.',
    outcome: 'Lanzamiento de una beta privada a 400 usuarios en seis semanas. La retención en la semana 4 se situó en un 62%, y las sesiones terminan con acciones concretas del usuario (mover dinero, cancelar suscripciones, ajustar presupuestos).',
    Viz: FinanziaMock,
  },
  {
    slug: 'medictas-global',
    idx: '02',
    year: '2025',
    title: 'Medic <em>Tas Global</em>',
    plain: 'Medic Tas Global',
    role: 'Fullstack Developer',
    tags: ['React', 'Next.js', 'Node.js', 'WebSockets', 'Stripe'],
    desc: 'Portal global de salud y telemedicina con acceso a consultas en tiempo real, reserva de turnos e integración de pasarelas de pago para múltiples países.',
    kind: 'Telemedicina · Global',
    url: 'https://www.medictasglobal.com/login',
    stats: [
      { n: '4+', l: 'países alcanzados' },
      { n: 'SSR/SSG', l: 'SEO optimizado' },
      { n: 'WebRTC', l: 'videollamadas en vivo' },
      { n: 'Stripe', l: 'suscripciones' },
    ],
    problem: 'Brindar teleconsultas médicas de baja latencia y gestión de suscripciones entre distintos países con diferentes zonas horarias y métodos de pago.',
    approach: 'Desarrollado con Next.js, React y Node.js con renderizado del lado del servidor (SSR) para velocidad y SEO. Implementé WebSockets en tiempo real, pasarela de suscripciones recurrentes con Stripe y webhooks, y videollamadas con WebRTC.',
    outcome: 'Operativo en más de 4 países con alta estabilidad y conexión instantánea para citas médicas a distancia.',
    Viz: MedicTasMock,
  },
  {
    slug: 'drtas-web',
    idx: '03',
    year: '2025',
    title: 'DrTas <em>Web</em>',
    plain: 'DrTas Plataforma Web',
    role: 'Fullstack Developer',
    tags: ['Laravel', 'Livewire', 'Tailwind CSS', 'SQL Server', 'Azure'],
    desc: 'Plataforma web médica full stack para gestión de citas digitales, historial de pacientes y reportes clínicos automatizados de alta disponibilidad.',
    kind: 'Salud · Plataforma Web',
    url: 'https://www.mydrtasservices.com/login',
    stats: [
      { n: '2', l: 'apps en producción' },
      { n: '<250ms', l: 'respuesta API' },
      { n: '10k+', l: 'registros médicos' },
      { n: '99.9%', l: 'disponibilidad Azure' },
    ],
    problem: 'Clínicas y profesionales médicos necesitaban un ecosistema web centralizado para triaje, agendamiento de especialistas y emisión de reportes PDF automatizados sin procesos manuales lentos.',
    approach: 'Lideré el ciclo de vida de 2 aplicaciones Full Stack con PHP/Laravel, Tailwind CSS, Livewire y Alpine.js. Integré pasarelas de pago, microservicios asíncronos para generación de informes médicos en PDF, optimicé consultas en SQL Server y desplegué un pipeline de CI/CD sobre Linux, NGINX y Azure.',
    outcome: 'Desplegado con éxito en entornos de producción y utilizado activamente en centros clínicos, reduciendo los tiempos de gestión administrativa médica en más del 50%.',
    Viz: DrTasMock,
  },
  {
    slug: 'locatel-gold',
    idx: '04',
    year: '2024',
    title: 'Locatel <em>Gold</em>',
    plain: 'Locatel Gold Colombia',
    role: 'Frontend / Mobile Developer',
    tags: ['React Native', 'TypeScript', 'Redux', 'Jest', 'Android'],
    desc: 'App móvil oficial para miembros de Locatel Colombia con catálogo farmacéutico, pedidos de recetas y beneficios exclusivos de fidelización.',
    kind: 'Móvil · Farmacia',
    url: 'https://play.google.com/store/apps/details?id=com.locatel.gold.colombia&hl=en-US&pli=1',
    stats: [
      { n: '+40%', l: 'mejora rendimiento' },
      { n: 'TDD', l: 'tests con Jest' },
      { n: 'Offline', l: 'soporte de caché' },
      { n: 'Google Play', l: 'en producción' },
    ],
    problem: 'La app requería una modernización integral para superar cuellos de botella de rendimiento y garantizar soporte de navegación en zonas con baja conectividad.',
    approach: 'Lideré la modernización del código en React Native y TypeScript aplicando TDD con Jest y React Testing Library. Optimicé la gestión del estado global y caché local con Redux para navegación sin interrupciones.',
    outcome: 'Aumento del 40% en velocidad y fluidez de la app, publicada con éxito en Google Play Store con miles de usuarios activos.',
    Viz: null,
  },
  {
    slug: 'drtas-app',
    idx: '05',
    year: '2024',
    title: 'DrTas <em>App</em>',
    plain: 'DrTas App Móvil',
    role: 'Mobile Developer',
    tags: ['React Native', 'TypeScript', 'WebRTC', 'Push Notifications'],
    desc: 'Aplicación móvil de telemedicina que conecta a pacientes con médicos certificados para consultas inmediatas, recetas electrónicas y gestión de salud.',
    kind: 'Móvil · Telemedicina',
    url: 'https://play.google.com/store/apps/details?id=com.v1.mydrtas.app',
    stats: [
      { n: 'Android', l: 'Google Play' },
      { n: '<100ms', l: 'alertas push' },
      { n: 'WebRTC', l: 'llamadas cifradas' },
      { n: '100%', l: 'mobile first' },
    ],
    problem: 'Los pacientes requerían una vía rápida y segura desde sus teléfonos móviles para recibir atención médica sin esperas en centros físicos.',
    approach: 'Desarrollé la aplicación móvil en React Native con arquitectura modular, notificaciones push en tiempo real para alertas de turnos y videollamadas seguras con WebRTC.',
    outcome: 'Publicada y disponible en Google Play, facilitando la atención médica a distancia de forma ágil y confiable.',
    Viz: null,
  },
];

export const PROJECTS = PROJECTS_EN;