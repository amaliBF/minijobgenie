import { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Heart,
  MessageCircle,
  Brain,
  User,
  Building2,
  Upload,
  Users,
  Check,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Banknote,
  Zap,
  MapPin,
  Star,
  Shield,
  Clock,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'So funktioniert Minijobgenie – Schritt für Schritt erklärt',
  description:
    'Erfahre Schritt für Schritt, wie Minijobgenie funktioniert: Profil erstellen, Videos entdecken, Swipen, Matchen und direkt chatten. Für Jobsuchende und Arbeitgeber.',
  alternates: { canonical: '/so-funktionierts' },
  openGraph: {
    title: 'So funktioniert Minijobgenie – Schritt für Schritt erklärt',
    description:
      'In 5 einfachen Schritten zum Minijob: Profil erstellen, Videos schauen, Swipen, Matchen, Chatten. So einfach war es noch nie.',
    url: 'https://minijobgenie.de/so-funktionierts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'So funktioniert Minijobgenie – Schritt für Schritt',
    description:
      'Profil erstellen, Videos entdecken, Swipen, Matchen, Chatten. Minijob-Suche so einfach wie noch nie.',
  },
};

const youthSteps = [
  {
    number: '1',
    icon: User,
    title: 'Profil erstellen',
    description:
      'Der Einstieg bei Minijobgenie dauert nur 2 Minuten. Du erstellst ein Profil, das sich komplett von einer klassischen Bewerbung unterscheidet. Statt Lebenslauf und Zeugnisse gibst du deine Interessen, Stärken und deinen Standort an.',
    description2:
      'Wähle aus vordefinierten Kategorien, was dich begeistert: Gastronomie, Einzelhandel, Büro, Lager, Events oder Service. Gib an, welche Stärken du hast: Teamarbeit, Flexibilität, Zuverlässigkeit oder Kommunikation. Das war es schon.',
    bullets: [
      'E-Mail und Passwort reichen zum Start',
      'Interessen aus Kategorien wählen',
      'Stärken und Vorlieben angeben',
      'Standort für regionale Empfehlungen',
      'Kein Lebenslauf, keine Dokumente nötig',
    ],
  },
  {
    number: '2',
    icon: Video,
    title: 'Videos entdecken',
    description:
      'Dein Feed ist wie TikTok, aber für Minijobs. Du scrollst durch kurze Videos von 30 bis 90 Sekunden, in denen echte Mitarbeiter ihren Arbeitsalltag zeigen. Jedes Video gibt dir einen authentischen Einblick in einen Job und Arbeitgeber.',
    description2:
      'Der Feed lernt mit der Zeit, was dir gefällt. Je mehr du swipest und likest, desto besser werden die Empfehlungen. Du siehst zuerst Videos aus deiner Region und zu Jobs, die zu deinen Interessen passen.',
    bullets: [
      'Fullscreen-Videos im TikTok-Style',
      'Echte Mitarbeiter zeigen ihren Alltag',
      'Personalisierter Feed basierend auf deinen Interessen',
      'Regionale Videos bevorzugt',
      'Neue Inhalte täglich',
    ],
  },
  {
    number: '3',
    icon: Heart,
    title: 'Swipen und Liken',
    description:
      'Wenn dir ein Video oder Arbeitgeberprofil gefällt, swipest du nach rechts oder tippst auf das Herz-Symbol. Das signalisiert dem Arbeitgeber, dass du Interesse hast. Wenn dir etwas nicht zusagt, swipest du einfach nach links.',
    description2:
      'Es gibt keinen Druck und keine Verpflichtung. Du kannst so viele Arbeitgeber liken, wie du möchtest. Jeder Like ist anonym, bis ein beidseitiges Match entsteht. Arbeitgeber sehen erst dann dein Profil, wenn auch sie dich geliked haben.',
    bullets: [
      'Swipe rechts oder Herz-Button zum Liken',
      'Swipe links oder X-Button zum Weiterscrollen',
      'Likes sind kostenlos und unbegrenzt',
      'Anonym bis zum beidseitigen Match',
      'Kein Druck, keine Verpflichtung',
    ],
  },
  {
    number: '4',
    icon: Banknote,
    title: 'Match!',
    description:
      'Wenn du einen Arbeitgeber likest und der Arbeitgeber dich ebenfalls liked, entsteht ein Match. Du bekommst sofort eine Benachrichtigung auf dein Handy. Das Match zeigt: Beide Seiten haben Interesse. Das ist der erste Schritt zu deinem Minijob.',
    description2:
      'Ein Match öffnet den direkten Kommunikationskanal. Ab jetzt könnt ihr miteinander schreiben, ohne Umwege und ohne Formalitäten. Die meisten Matches führen innerhalb weniger Tage zu einem ersten Gespräch oder Probearbeiten.',
    bullets: [
      'Beidseitiges Like = Match',
      'Sofortige Push-Benachrichtigung',
      'Direkter Chat-Kanal wird freigeschaltet',
      'Match-Übersicht im Profil',
      'Von Match zu Gespräch in wenigen Tagen',
    ],
  },
  {
    number: '5',
    icon: MessageCircle,
    title: 'Chatten und Bewerben',
    description:
      'Nach dem Match startest du den Chat mit dem Arbeitgeber. Schreibe locker und direkt, wie du es von WhatsApp kennst. Stelle Fragen zum Job, zu den Arbeitszeiten, zum Team oder zum Stundenlohn. Es gibt kein festgelegtes Format.',
    description2:
      'Viele Arbeitgeber laden dich nach dem ersten Chat direkt zum Probearbeiten oder Vorstellungsgespräch ein. Der gesamte Prozess von Entdecken bis zum ersten Termin dauert oft nur wenige Tage statt Wochen wie bei klassischen Portalen.',
    bullets: [
      'Echtzeit-Chat nach dem Match',
      'Kein formelles Anschreiben nötig',
      'Fragen zum Job und Arbeitgeber stellen',
      'Termine direkt im Chat vereinbaren',
      'Push-Benachrichtigungen für neue Nachrichten',
    ],
  },
];

const companySteps = [
  {
    number: '1',
    icon: Building2,
    title: 'Registrieren und Profil anlegen',
    description:
      'Erstellen Sie in wenigen Minuten ein ansprechendes Firmenprofil. Beschreiben Sie Ihren Betrieb, Ihre offenen Minijob-Stellen und was Ihr Unternehmen besonders macht. Fügen Sie Ihr Logo hinzu und laden Sie Stellenanzeigen hoch.',
    description2:
      'Unser Dashboard führt Sie Schritt für Schritt durch den Prozess. In der Registrierung geben Sie zuerst Ihre Firmendaten ein und erstellen dann einen Benutzer-Account. Danach können Sie sofort loslegen.',
    bullets: [
      '2-Schritt-Registrierung (Firma + Benutzer)',
      'Firmenprofil mit Logo und Beschreibung',
      'Stellenanzeigen mit Anforderungen und Stundenlohn',
      'Kostenloser Free-Plan zum Testen',
    ],
  },
  {
    number: '2',
    icon: Upload,
    title: 'Kurzvideos hochladen',
    description:
      'Drehen Sie kurze Videos mit Ihren echten Mitarbeitern. Zeigen Sie den Arbeitsalltag, das Team, den Arbeitsplatz oder die Atmosphäre. Authentizität schlägt Hochglanz: Jobsuchende wollen sehen, wie es wirklich bei Ihnen ist.',
    description2:
      'Laden Sie die Videos einfach über das Dashboard hoch. Unsere Plattform konvertiert sie automatisch ins optimale Format, erstellt Thumbnails und macht sie im Feed sichtbar. Sie brauchen keine Video-Profis.',
    bullets: [
      '30-90 Sekunden im Hochformat (9:16)',
      'Automatische Konvertierung und Komprimierung',
      'Thumbnail wird automatisch erstellt',
      'Mit Smartphone gedreht reicht völlig',
    ],
  },
  {
    number: '3',
    icon: Users,
    title: 'Kandidaten matchen',
    description:
      'Swipen Sie durch Profile interessierter Jobsuchender. Sehen Sie deren Interessen, Stärken und Standort. Wenn ein Profil zu Ihrer Stelle passt, liken Sie es. Wenn beide Seiten Interesse zeigen, entsteht ein Match.',
    description2:
      'Das Matching-System spart Ihnen enorm viel Zeit. Statt hunderte Bewerbungen zu sichten, sehen Sie nur Profile von Jobsuchenden, die bereits Interesse an Ihrem Betrieb gezeigt haben. Jedes Match ist ein qualifizierter Lead.',
    bullets: [
      'Nur vorqualifizierte Kandidaten sehen',
      'Interessen und Stärken auf einen Blick',
      'Standort und Entfernung sichtbar',
      'Schnelle Entscheidung per Swipe',
    ],
  },
  {
    number: '4',
    icon: MessageCircle,
    title: 'Chatten und Einstellen',
    description:
      'Nach dem Match schreiben Sie direkt mit dem Kandidaten. Stellen Sie Fragen, laden Sie zum Probearbeiten ein oder vereinbaren Sie ein Vorstellungsgespräch. Der Chat ist informell und direkt, genau so, wie Jobsuchende es bevorzugen.',
    description2:
      'Im Dashboard sehen Sie alle Ihre Chats übersichtlich. Antworten Sie schnell und unkompliziert. Die besten Arbeitgeber antworten innerhalb weniger Stunden und haben deutlich höhere Einstellungsquoten.',
    bullets: [
      'Direkter Chat im Dashboard',
      'Push-Benachrichtigungen bei neuen Nachrichten',
      'Einladung zu Probearbeiten oder Gespräch',
      'Schnelle Reaktionszeit erhöht die Erfolgsquote',
    ],
  },
];

const faqs = [
  {
    question: 'Ist Minijobgenie wirklich kostenlos für Jobsuchende?',
    answer:
      'Ja, Minijobgenie ist und bleibt 100% kostenlos für Jobsuchende. Alle Features sind verfügbar: Video Feed, Matching, Chat, KI-Jobfinder. Es gibt keine versteckten Kosten und keine Premium-Features, die extra kosten.',
  },
  {
    question: 'Brauche ich einen Lebenslauf oder Bewerbungsunterlagen?',
    answer:
      'Nein, bei Minijobgenie brauchst du keinen Lebenslauf, kein Anschreiben und keine Zeugnisse. Du erstellst ein einfaches Profil mit deinen Interessen und Stärken. Der Rest läuft über Videos, Matching und Chat.',
  },
  {
    question: 'Wie funktioniert der KI-Jobfinder?',
    answer:
      'Der KI-Jobfinder stellt dir 5-7 Fragen zu deinen Interessen, Stärken und Vorlieben. Basierend auf deinen Antworten analysiert die künstliche Intelligenz, welche Minijobs am besten zu dir passen, und erklärt dir warum.',
  },
  {
    question: 'Was passiert nach einem Match?',
    answer:
      'Nach einem beidseitigen Match (du likest den Arbeitgeber und der Arbeitgeber liked dich) öffnet sich ein direkter Chat. Du kannst sofort mit dem Arbeitgeber schreiben, Fragen stellen und einen Termin für ein Probearbeiten oder Gespräch vereinbaren.',
  },
  {
    question: 'Können Arbeitgeber mich ohne Match kontaktieren?',
    answer:
      'Nein, erst nach einem beidseitigen Match ist der Chat freigeschaltet. Das schützt dich vor unerwünschten Nachrichten. Arbeitgeber können dein Profil erst sehen, wenn beide Seiten Interesse gezeigt haben.',
  },
  {
    question: 'Was kostet Minijobgenie für Arbeitgeber?',
    answer:
      'Arbeitgeber können mit dem kostenlosen Free-Plan starten (1 Stellenanzeige, Firmenprofil). Für mehr Stellenanzeigen, Videos, Analytics und Team-Zugang gibt es die Pläne Starter (49 EUR/Monat), Professional (149 EUR/Monat) und Enterprise (399 EUR/Monat).',
  },
  {
    question: 'Wie drehe ich als Arbeitgeber gute Videos?',
    answer:
      'Am besten filmen Sie mit dem Smartphone im Hochformat (9:16). Lassen Sie echte Mitarbeiter ihren Arbeitsalltag zeigen: Was machen sie täglich? Wie ist das Team? Warum gefällt ihnen der Job? Authentizität ist wichtiger als perfekte Qualität.',
  },
  {
    question: 'Sind meine Daten sicher?',
    answer:
      'Ja, Minijobgenie ist DSGVO-konform. Deine Daten werden auf deutschen Servern gespeichert, verschlüsselt übertragen und niemals an Dritte verkauft. Du kannst dein Profil und alle Daten jederzeit löschen.',
  },
];

export default function SoFunktioniertsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'So funktioniert\u0027s' },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'So funktioniert Minijobgenie – Schritt für Schritt erklärt',
    description:
      'Erfahre Schritt für Schritt, wie Minijobgenie funktioniert. Für Jobsuchende und Arbeitgeber.',
    url: 'https://minijobgenie.de/so-funktionierts',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Minijobgenie',
      url: 'https://minijobgenie.de',
    },
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 cash-dots opacity-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-emerald-100 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">So funktioniert&apos;s</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="cash-badge mb-6 bg-white/15 border-white/25 text-white">
              <Zap className="h-4 w-4" />
              <span>Schritt für Schritt erklärt</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              So funktioniert <span className="euro-highlight">Minijobgenie</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-50 mb-10 max-w-2xl">
              Von der Registrierung bis zum Match in wenigen Minuten. Wir zeigen dir
              Schritt für Schritt, wie du deinen Traum-Minijob findest oder als Arbeitgeber
              die besten Minijobber gewinnst.
            </p>

            {/* Quick jump */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#fuer-jobsuchende"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-emerald-700 font-medium text-sm hover:bg-emerald-50 transition-colors shadow-sm"
              >
                <User className="h-4 w-4" />
                Für Jobsuchende
                <ChevronDown className="h-3 w-3" />
              </a>
              <a
                href="#fuer-arbeitgeber"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white font-medium text-sm hover:bg-white/20 transition-colors"
              >
                <Building2 className="h-4 w-4" />
                Für Arbeitgeber
                <ChevronDown className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 bg-white border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '2 Min', label: 'Profil erstellen', icon: Clock },
              { value: '30-90s', label: 'Video-Länge', icon: Video },
              { value: '100%', label: 'Kostenlos für Jobsuchende', icon: Shield },
              { value: '5 Schritte', label: 'Bis zum ersten Match', icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für Jobsuchende */}
      <section id="fuer-jobsuchende" className="py-20 bg-[#F0FDF4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">FÜR JOBSUCHENDE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              In 5 Schritten zum Minijob
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              So findest du mit Minijobgenie deinen perfekten Minijob. Schneller und
              einfacher als du denkst.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {youthSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < youthSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full w-0.5 h-16 bg-gradient-to-b from-emerald-300 to-transparent -ml-px" />
                )}

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Text Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white text-xl font-bold flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <div className="speed-line">
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">{step.description2}</p>
                    </div>
                    <ul className="space-y-2.5">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl shadow-emerald-500/20">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
                      <div className="absolute inset-0 cash-dots opacity-5" />

                      <div className="relative z-10">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center">
                          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                            <step.icon className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-white font-bold text-xl mb-2">Schritt {step.number}</p>
                          <p className="text-white/80 text-sm">{step.title}</p>
                        </div>

                        {/* Progress indicator */}
                        <div className="flex justify-center mt-6 gap-2">
                          {youthSteps.map((_, i) => (
                            <div
                              key={i}
                              className={`h-1.5 rounded-full ${
                                i <= index ? 'bg-white w-8' : 'bg-white/30 w-4'
                              } transition-all`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trennlinie */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cash-divider">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">WEITER</span>
        </div>
      </div>

      {/* Für Arbeitgeber */}
      <section id="fuer-arbeitgeber" className="py-20 bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 px-4 py-1.5 text-sm text-emerald-300 mb-4 border border-emerald-500/30">
              <Building2 className="h-4 w-4" />
              Für Arbeitgeber
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              In 4 Schritten zum{' '}
              <span className="gradient-text-cash">
                perfekten Minijobber
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              So nutzen Arbeitgeber Minijobgenie, um motivierte Minijobber zu finden und
              einzustellen.
            </p>
          </div>

          <div className="space-y-12">
            {companySteps.map((step, index) => (
              <div
                key={step.number}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-emerald-500/30 transition-colors"
              >
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  {/* Step Number + Icon */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white text-2xl font-bold flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
                        {step.number}
                      </div>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400">
                        <step.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-6">{step.description2}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Progress bar */}
                {index < companySteps.length - 1 && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-green-500 h-1 rounded-full"
                        style={{ width: `${((index + 1) / companySteps.length) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://dashboard.ausbildungsgenie.de/register"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3.5 text-base font-medium text-white hover:from-emerald-400 hover:to-green-500 transition-all shadow-lg shadow-emerald-500/25"
            >
              Jetzt als Arbeitgeber registrieren
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Process Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">ÜBERBLICK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Der Weg zum Match auf einen Blick
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              So treffen Jobsuchende und Arbeitgeber bei Minijobgenie aufeinander.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: User, label: 'Profil', sublabel: 'erstellen' },
              { icon: Video, label: 'Videos', sublabel: 'entdecken' },
              { icon: Heart, label: 'Liken', sublabel: 'und Swipen' },
              { icon: Banknote, label: 'Match!', sublabel: 'Beidseitig' },
              { icon: MessageCircle, label: 'Chatten', sublabel: 'und Bewerben' },
            ].map((item, index) => (
              <div key={item.label} className="relative">
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-center text-white shadow-lg shadow-emerald-500/15 hover:shadow-xl hover:shadow-emerald-500/25 transition-all hover:-translate-y-1">
                  <item.icon className="h-8 w-8 mx-auto mb-3" />
                  <p className="font-bold text-lg">{item.label}</p>
                  <p className="text-white/70 text-sm">{item.sublabel}</p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-emerald-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-gray-600">
              Alles, was du über Minijobgenie wissen musst.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glow-card rounded-xl overflow-hidden"
              >
                <div className="px-6 py-5">
                  <h3 className="font-semibold text-gray-900 text-lg">{faq.question}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 cash-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Jetzt loslegen und Minijobs neu erleben
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Ob Jobsuchender auf der Suche nach dem perfekten Minijob oder Arbeitgeber auf der Suche nach
            motivierten Minijobbern: Minijobgenie bringt euch zusammen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.ausbildungsgenie.de/register"
              className="rounded-lg bg-white px-8 py-3.5 text-base font-medium text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
            <Link
              href="/features"
              className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 hover:border-white/50 transition-colors flex items-center gap-2"
            >
              Alle Features ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
