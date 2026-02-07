import { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Heart,
  MessageCircle,
  Brain,
  Shield,
  Star,
  ArrowRight,
  Check,
  X,
  Building2,
  BarChart3,
  Upload,
  Users,
  MapPin,
  Banknote,
  Zap,
  Clock,
  ChevronRight,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Minijobgenie Features – Alle Funktionen im Überblick',
  description:
    'Entdecke alle Features von Minijobgenie: Video-Einblicke, Swipe-Matching, Direkt-Chat, KI-Jobfinder, regionale Suche und mehr. Kostenlos für Jobsuchende.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Minijobgenie Features – Alle Funktionen im Überblick',
    description:
      'Video-Einblicke, Swipe-Matching, KI-Jobfinder und Direkt-Chat. Alle Features von Minijobgenie auf einen Blick.',
    url: 'https://minijobgenie.de/features',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minijobgenie Features – Alle Funktionen im Überblick',
    description:
      'Video-Einblicke, Swipe-Matching, KI-Jobfinder und Direkt-Chat. Entdecke alle Features.',
  },
};

const mainFeatures = [
  {
    icon: Video,
    title: 'Video-Einblicke',
    description:
      'Vergiss langweilige Stellenanzeigen mit Stockfotos. Bei Minijobgenie zeigen echte Arbeitgeber ihren Arbeitsalltag in authentischen Kurzvideos von 30 Sekunden. Du siehst, wie es wirklich ist, im Café zu arbeiten, Pakete zu sortieren oder an der Kasse zu stehen.',
    description2:
      'Der Feed funktioniert wie TikTok: Fullscreen, Autoplay, vertikale Videos. Einfach nach oben wischen und das nächste Video entdecken. Kein Lesen, kein Scrollen durch endlose Texte. Einfach schauen, fühlen und entscheiden.',
    description3:
      'Jedes Video wird von echten Arbeitgebern gedreht, die ihren Arbeitsplatz so zeigen, wie er wirklich ist. Keine Hochglanz-Werbung, keine leeren Versprechen. Du siehst den echten Arbeitsplatz, die echten Kollegen und die echten Aufgaben.',
    bullets: [
      'Fullscreen-Videos im Hochformat (9:16)',
      'Autoplay mit Ton beim Antippen',
      '30 Sekunden pro Video',
      'Echte Arbeitgeber, keine Schauspieler',
      'Neue Videos täglich im Feed',
      'Filterbar nach Branche, Region und Jobtyp',
    ],
  },
  {
    icon: Heart,
    title: 'Swipe-Matching',
    description:
      'Das Matching bei Minijobgenie funktioniert nach dem Tinder-Prinzip: Du schaust dir Videos und Profile von Arbeitgebern an. Gefällt dir, was du siehst? Swipe nach rechts oder tippe auf das Herz. Nicht interessiert? Swipe nach links und weiter geht es.',
    description2:
      'Das Besondere: Das Matching ist beidseitig. Nicht nur du likest Arbeitgeber, auch Arbeitgeber können dein Profil sehen und dich liken. Wenn beide Seiten Interesse zeigen, entsteht ein Match. Erst dann wird der direkte Kontakt freigeschaltet.',
    description3:
      'Durch dieses System bekommst du nur Nachrichten von Arbeitgebern, die wirklich an dir interessiert sind. Kein Spam, keine Massenanschreiben. Jedes Match ist ein echtes Signal, dass es von beiden Seiten passen könnte.',
    bullets: [
      'Swipe rechts = Like, Swipe links = Weiter',
      'Beidseitiges Matching (beide müssen liken)',
      'Match-Benachrichtigung in Echtzeit',
      'Match-Quote sichtbar im Profil',
      'Keine unerwünschten Nachrichten',
      'Unbegrenzte Likes für Jobsuchende',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Direkter Chat',
    description:
      'Nach einem Match öffnet sich der direkte Chat zwischen dir und dem Arbeitgeber. Kein Anschreiben formulieren, kein Bewerbungsformular ausfüllen. Einfach locker schreiben, wie du es von WhatsApp oder Instagram kennst.',
    description2:
      'Der Chat funktioniert in Echtzeit: Nachrichten werden sofort zugestellt, du siehst, ob der andere gerade tippt, und bekommst Push-Benachrichtigungen auf dein Handy. So verpasst du keine Nachricht und kannst schnell reagieren.',
    description3:
      'Im Chat könnt ihr alles besprechen: Fragen zum Job, zum Arbeitsplatz, zu den Arbeitszeiten oder zum Stundenlohn. Und wenn es passt, macht ihr direkt einen Termin für ein Probearbeiten oder Vorstellungsgespräch aus. Ohne Umwege.',
    bullets: [
      'Echtzeit-Nachrichten (WebSocket)',
      'Push-Benachrichtigungen',
      'Tipp-Indikator (Arbeitgeber tippt...)',
      'Chat-Verlauf bleibt gespeichert',
      'Direkt Termine vereinbaren',
      'Ohne formelles Anschreiben starten',
    ],
  },
  {
    icon: Brain,
    title: 'KI-Jobfinder',
    description:
      'Du weißt noch nicht, welcher Minijob zu dir passt? Kein Problem. Unser KI-Jobfinder stellt dir 5 bis 7 gezielte Fragen zu deinen Verfügbarkeiten, Interessen und Stärken. Basierend auf deinen Antworten schlägt die KI passende Minijobs vor.',
    description2:
      'Die künstliche Intelligenz analysiert nicht nur deine Antworten, sondern gleicht sie auch mit echten Jobprofilen ab. Du bekommst nicht einfach eine Liste, sondern erklärt, warum ein bestimmter Job zu dir passen könnte. Mit Stundenlohn, Arbeitszeiten und Anforderungen.',
    description3:
      'Das Beste: Du kannst den KI-Chat jederzeit neu starten und andere Antworten ausprobieren. So entdeckst du vielleicht Minijobs, an die du vorher nie gedacht hättest. Der Jobfinder ist wie ein kluger Freund, der sich wirklich mit Minijobs auskennt.',
    bullets: [
      '5-7 gezielte Fragen zu Verfügbarkeit und Interessen',
      'KI-gestützte Analyse deiner Antworten',
      'Personalisierte Jobvorschläge mit Erklärung',
      'Infos zu Stundenlohn, Zeiten und Anforderungen',
      'Quick-Reply-Buttons für schnelle Antworten',
      'Beliebig oft wiederholbar',
    ],
  },
  {
    icon: Shield,
    title: 'Kein Lebenslauf nötig',
    description:
      'Schluss mit dem Stress, einen perfekten Lebenslauf zu schreiben. Bei Minijobgenie erstellst du dein Profil in nur 2 Minuten. Du gibst deine Verfügbarkeit, Interessen und deinen Standort an. Formelle Qualifikationen spielen keine Rolle.',
    description2:
      'Wir glauben, dass Noten nicht alles sind. Viele Arbeitgeber suchen Aushilfen mit Motivation, Zuverlässigkeit und Teamgeist. Genau das zeigt dein Profil: Wer du bist, was dich begeistert und wann du verfügbar bist.',
    description3:
      'Dein Profil ist wie eine digitale Visitenkarte. Du präsentierst dich so, wie du bist: authentisch, direkt und ohne Formular-Stress. Arbeitgeber sehen auf einen Blick, ob ihr zusammenpasst.',
    bullets: [
      'Profil in 2 Minuten erstellen',
      'Verfügbarkeit und Interessen statt Noten',
      'Standort und Umkreis angeben',
      'Kein Anschreiben nötig',
      'Keine formellen Dokumente hochladen',
      'Profil jederzeit anpassbar',
    ],
  },
  {
    icon: Star,
    title: 'Regional First',
    description:
      'Dein Minijob sollte in deiner Nähe sein. Deshalb zeigt dir Minijobgenie zuerst Arbeitgeber aus deiner Region. Du stellst deinen Wunsch-Umkreis ein und siehst nur Videos und Profile von Arbeitgebern, die du auch wirklich erreichen kannst.',
    description2:
      'Wir zeigen dir sogar die geschätzte Fahrzeit mit ÖPNV an, damit du weißt, wie lange du täglich unterwegs wärst. Denn ein Minijob 60 Minuten entfernt macht wenig Sinn.',
    description3:
      'Natürlich kannst du den Radius jederzeit erweitern oder bestimmte Städte und Regionen gezielt durchsuchen. So findest du die perfekte Balance zwischen Traumjob und kurzer Fahrt.',
    bullets: [
      'Umkreissuche mit einstellbarem Radius',
      'Fahrzeitanzeige mit ÖPNV',
      'Standort-basierte Empfehlungen',
      'Regionale Arbeitgeber bevorzugt im Feed',
      'Städte- und Regionsfilter',
      'Kombi-Suche: Branche + Stadt',
    ],
  },
];

const companyFeatures = [
  {
    icon: Building2,
    title: 'Arbeitgeberprofil',
    description: 'Erstellen Sie ein ansprechendes Firmenprofil mit Fotos, Beschreibung und allen relevanten Informationen zu Ihrem Unternehmen.',
  },
  {
    icon: Upload,
    title: 'Video-Upload',
    description: 'Laden Sie authentische Kurzvideos hoch, in denen Ihr Arbeitsplatz und Team gezeigt werden. Automatische Konvertierung und Thumbnail-Erstellung.',
  },
  {
    icon: BarChart3,
    title: 'Analytics-Dashboard',
    description: 'Sehen Sie genau, wie viele Jobsuchende Ihre Videos gesehen, geliked und gematcht haben. Mit Trends und Vergleichswerten.',
  },
  {
    icon: Users,
    title: 'Team-Verwaltung',
    description: 'Fügen Sie Kollegen hinzu, vergeben Sie Rollen und arbeiten Sie gemeinsam an der Suche nach zuverlässigen Aushilfen.',
  },
  {
    icon: Heart,
    title: 'Kandidaten-Matching',
    description: 'Swipen Sie durch Profile interessierter Jobsuchender und matchen Sie mit motivierten Kandidaten.',
  },
  {
    icon: MessageCircle,
    title: 'Chat-System',
    description: 'Kommunizieren Sie direkt mit gematchten Kandidaten. Echtzeit-Nachrichten, ohne Umwege über externe Plattformen.',
  },
];

const comparisonRows = [
  {
    feature: 'Bewerbungsformat',
    minijobgenie: 'Profil in 2 Minuten, kein Lebenslauf',
    klassisch: 'Anschreiben, Lebenslauf, Formulare',
  },
  {
    feature: 'Einblicke in den Job',
    minijobgenie: 'Authentische Kurzvideos vom echten Arbeitsplatz',
    klassisch: 'Stockfotos und Textbeschreibungen',
  },
  {
    feature: 'Kontaktaufnahme',
    minijobgenie: 'Direkter Chat nach beidseitigem Match',
    klassisch: 'Formelles Anschreiben per E-Mail/Portal',
  },
  {
    feature: 'Wartezeit',
    minijobgenie: 'Sofortige Match-Benachrichtigung',
    klassisch: 'Tage bis Wochen auf Antwort warten',
  },
  {
    feature: 'Jobfinder',
    minijobgenie: 'KI-Jobfinder mit personalisierten Vorschlägen',
    klassisch: 'Eigenrecherche oder Zeitungsanzeigen',
  },
  {
    feature: 'Kosten für Jobsuchende',
    minijobgenie: '100% kostenlos, alle Features',
    klassisch: 'Oft kostenlos, aber Premium-Features kostenpflichtig',
  },
  {
    feature: 'Zielgruppe',
    minijobgenie: 'Speziell für Minijobs und 538-Euro-Jobs',
    klassisch: 'Allgemein, nicht auf Minijobs zugeschnitten',
  },
];

export default function FeaturesPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Features' },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Minijobgenie Features – Alle Funktionen im Überblick',
    description:
      'Entdecke alle Features von Minijobgenie: Video-Einblicke, Swipe-Matching, Direkt-Chat, KI-Jobfinder und mehr.',
    url: 'https://minijobgenie.de/features',
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
              <li className="text-white font-medium">Features</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="cash-badge mb-6 bg-white/15 border-white/25 text-white">
              <Banknote className="h-4 w-4" />
              <span>Alle Funktionen im Detail</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Alle <span className="euro-highlight">Features</span> auf einen Blick
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 mb-8 max-w-2xl">
              Minijobgenie verbindet das Beste aus Video-Einblicken, Swipe-Matching und KI zu einer
              Plattform, die die Minijob-Suche endlich so macht, wie sie sein sollte:
              schnell, visuell und direkt.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Video Feed', 'Matching', 'Chat', 'KI-Jobfinder', 'Regional', 'Kostenlos'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="quick-tag"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Features - Detailed Sections */}
      {mainFeatures.map((feature, index) => (
        <section
          key={feature.title}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F0FDF4]'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h2>
                <div className="speed-line">
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">{feature.description}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description2}</p>
                  <p className="text-gray-600 leading-relaxed mb-8">{feature.description3}</p>
                </div>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 sm:p-12 aspect-square max-w-md mx-auto flex items-center justify-center relative overflow-hidden shadow-xl shadow-emerald-500/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                  <div className="absolute inset-0 cash-dots opacity-5" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <feature.icon className="h-24 w-24 sm:h-32 sm:w-32 text-white/90" strokeWidth={1} />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white text-center">
                      <p className="font-semibold text-sm">{feature.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Features für Arbeitgeber */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 px-4 py-1.5 text-sm text-emerald-300 mb-6 border border-emerald-500/30">
              <Building2 className="h-4 w-4" />
              Für Arbeitgeber
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Leistungsstarke Features für{' '}
              <span className="gradient-text-cash">
                Arbeitgeber
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Unser Dashboard gibt Ihnen alle Werkzeuge an die Hand, um zuverlässige Minijobber zu finden
              und einzustellen. Effizient, modern und direkt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://dashboard.ausbildungsgenie.de/register"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3.5 text-base font-medium text-white hover:from-emerald-400 hover:to-green-500 transition-all shadow-lg shadow-emerald-500/25"
            >
              Arbeitgeber-Dashboard testen
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vergleichstabelle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">VERGLEICH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Minijobgenie vs. Klassische Stellenportale
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Warum Minijobgenie der bessere Weg zum Minijob ist? Hier der direkte Vergleich.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-emerald-200">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 w-1/3">
                    Kriterium
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold w-1/3">
                    <span className="inline-flex items-center gap-2 text-emerald-600">
                      <Banknote className="h-4 w-4" />
                      Minijobgenie
                    </span>
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 w-1/3">
                    Klassische Portale
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-white' : 'bg-emerald-50/30'}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <span className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {row.minijobgenie}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <span className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                        {row.klassisch}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div key={row.feature} className="glow-card rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-3">{row.feature}</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-emerald-600">Minijobgenie: </span>
                      <span className="text-gray-700">{row.minijobgenie}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-500">Klassisch: </span>
                      <span className="text-gray-500">{row.klassisch}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Feature Grid */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">MEHR FEATURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Und noch mehr Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Minijobgenie steckt voller durchdachter Details, die deine Minijob-Suche
              so einfach und angenehm wie möglich machen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: 'Schnelle Ladezeiten', text: 'Videos und Profile laden blitzschnell, auch bei langsamer Verbindung.' },
              { icon: Shield, title: 'Datenschutz', text: 'DSGVO-konform. Deine Daten gehören dir und werden nie verkauft.' },
              { icon: MapPin, title: 'Standort-Filter', text: 'Finde Arbeitgeber in deinem Umkreis mit einstellbarem Radius.' },
              { icon: Clock, title: 'Echtzeit-Updates', text: 'Neue Videos, Matches und Nachrichten sofort auf deinem Gerät.' },
              { icon: Star, title: 'Favoriten', text: 'Speichere Arbeitgeber und Videos, die dir besonders gefallen.' },
              { icon: Users, title: 'Community', text: 'Werde Teil einer Generation, die Minijob-Suche neu denkt.' },
              { icon: Brain, title: 'Smarte Vorschläge', text: 'Je mehr du swipest, desto besser werden die Empfehlungen.' },
              { icon: Heart, title: 'Kostenlos', text: 'Alle Features für Jobsuchende sind und bleiben 100% kostenlos.' },
            ].map((item) => (
              <div
                key={item.title}
                className="glow-card rounded-xl p-5"
              >
                <item.icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.text}</p>
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
            Bereit, die Zukunft der Minijob-Suche zu erleben?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Egal ob du einen 538-Euro-Job suchst oder als Arbeitgeber Minijobber finden willst:
            Minijobgenie macht es einfacher als je zuvor.
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
              href="/so-funktionierts"
              className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 hover:border-white/50 transition-colors flex items-center gap-2"
            >
              So funktioniert&apos;s
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div>
              <p className="text-3xl font-bold text-white">6+</p>
              <p className="text-sm text-white/70 mt-1">Kern-Features</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-white/70 mt-1">Kostenlos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">2 Min</p>
              <p className="text-sm text-white/70 mt-1">Setup</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
