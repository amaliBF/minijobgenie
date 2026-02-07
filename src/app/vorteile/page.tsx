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
  Users,
  Sparkles,
  Zap,
  Clock,
  MapPin,
  Smartphone,
  Lock,
  BarChart3,
  Wallet,
  ThumbsUp,
  ChevronRight,
  Target,
  TrendingUp,
  Award,
  Quote,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vorteile von Minijobgenie – Warum unsere Plattform?',
  description:
    'Entdecke die Vorteile von Minijobgenie fuer Jobsuchende und Arbeitgeber: Kostenlos, kein Lebenslauf, echte Video-Einblicke, KI-Jobfinder, direkter Chat und regionale Suche.',
  alternates: { canonical: '/vorteile' },
  openGraph: {
    title: 'Vorteile von Minijobgenie – Warum unsere Plattform?',
    description:
      'Kostenlos fuer Jobsuchende, guenstiger fuer Arbeitgeber, schneller zum Match. Alle Vorteile von Minijobgenie im Ueberblick.',
    url: 'https://minijobgenie.de/vorteile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vorteile von Minijobgenie – Warum unsere Plattform?',
    description:
      'Kostenlos, authentisch, schnell. Alle Vorteile von Minijobgenie fuer Jobsuchende und Arbeitgeber.',
  },
};

const youthBenefits = [
  {
    icon: Wallet,
    title: '100% kostenlos',
    description:
      'Alle Features sind und bleiben fuer Jobsuchende kostenlos. Kein Abo, keine versteckten Kosten, kein Premium-Modell. Du zahlst nichts, nie.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Shield,
    title: 'Kein Lebenslauf noetig',
    description:
      'Vergiss den Stress mit Lebenslauf und Anschreiben. Erstelle in 2 Minuten ein Profil mit deinen Interessen und Staerken. Mehr braucht es nicht.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Video,
    title: 'Echte Video-Einblicke',
    description:
      'Sieh in authentischen Kurzvideos, wie der Arbeitsalltag wirklich aussieht. Keine Stockfotos, keine Marketing-Texte. Echte Mitarbeiter, echte Einblicke.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Brain,
    title: 'KI-Jobfinder',
    description:
      'Weisst du nicht, welcher Minijob zu dir passt? Unsere KI stellt dir ein paar Fragen und schlaegt Jobs vor, an die du vielleicht nie gedacht haettest.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: MessageCircle,
    title: 'Direkt chatten',
    description:
      'Nach einem Match schreibst du direkt mit dem Arbeitgeber. Wie bei WhatsApp, locker und ohne Formalitaeten. Kein Anschreiben, kein Warten.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: MapPin,
    title: 'Jobs in deiner Naehe',
    description:
      'Finde Minijobs in deinem Umkreis. Mit Fahrzeitanzeige, damit du weisst, wie lange du taeglich unterwegs waerst.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Lock,
    title: 'Datenschutz garantiert',
    description:
      'DSGVO-konform, deutsche Server, verschluesselte Uebertragung. Deine Daten gehoeren dir und werden niemals an Dritte verkauft.',
    color: 'bg-slate-100 text-slate-600',
  },
  {
    icon: Smartphone,
    title: 'Einfach zu bedienen',
    description:
      'Die App funktioniert wie TikTok und Tinder. Wenn du ein Smartphone bedienen kannst, kannst du auch Minijobgenie nutzen. Ohne Anleitung.',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: Zap,
    title: 'Schnelle Ergebnisse',
    description:
      'Vom Profil zum ersten Match oft in wenigen Stunden. Vom Match zum Vorstellungsgespraech in wenigen Tagen. Nicht Wochen oder Monate.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Heart,
    title: 'Kein Spam',
    description:
      'Erst nach einem beidseitigen Match ist der Chat freigeschaltet. Du bekommst nur Nachrichten von Arbeitgebern, die wirklich an dir interessiert sind.',
    color: 'bg-red-100 text-red-600',
  },
];

const companyBenefits = [
  {
    icon: Users,
    title: 'Jobsuchende direkt erreichen',
    description:
      'Millionen Menschen suchen Minijobs. Erreichen Sie die Zielgruppe, die auf klassische Stellenanzeigen nicht mehr reagiert.',
    color: 'bg-amber-500/20 text-amber-400',
  },
  {
    icon: Video,
    title: 'Authentisch praesentieren',
    description:
      'Zeigen Sie mit Kurzvideos, wie der Arbeitsalltag bei Ihnen wirklich aussieht. Echte Mitarbeiter ueberzeugen mehr als jede Stellenanzeige.',
    color: 'bg-orange-500/20 text-orange-400',
  },
  {
    icon: ThumbsUp,
    title: 'Motivierte Bewerber',
    description:
      'Durch das Matching-System sehen Sie nur Kandidaten, die bereits Interesse an Ihrem Betrieb gezeigt haben. Jeder Match ist ein qualifizierter Lead.',
    color: 'bg-green-500/20 text-green-400',
  },
  {
    icon: Zap,
    title: 'Schnelles Matching',
    description:
      'Vom Video-Upload bis zum ersten Match vergehen oft nur Stunden. Vom Match zum Vorstellungsgespraech nur Tage. Besetzen Sie Stellen schneller.',
    color: 'bg-amber-500/20 text-amber-400',
  },
  {
    icon: Wallet,
    title: 'Guenstiger als klassische Portale',
    description:
      'Schon ab 49 EUR pro Monat mit dem Starter-Plan. Deutlich guenstiger als Stellenausschreibungen auf klassischen Jobportalen oder in Zeitungen.',
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    icon: BarChart3,
    title: 'Detaillierte Analytics',
    description:
      'Sehen Sie genau, wie viele Jobsuchende Ihre Videos gesehen und geliked haben. Verfolgen Sie Trends und optimieren Sie Ihre Praesenz.',
    color: 'bg-blue-500/20 text-blue-400',
  },
  {
    icon: Users,
    title: 'Team-Verwaltung',
    description:
      'Fuegen Sie Kollegen hinzu und arbeiten Sie gemeinsam an der Minijobber-Gewinnung. Mit Rollen und Berechtigungen fuer strukturierte Zusammenarbeit.',
    color: 'bg-cyan-500/20 text-cyan-400',
  },
  {
    icon: Shield,
    title: 'Persoenlicher Support',
    description:
      'Bei Fragen sind wir fuer Sie da. Persoenlicher Support per Chat und E-Mail. Wir helfen Ihnen, die Plattform optimal zu nutzen.',
    color: 'bg-slate-500/20 text-slate-400',
  },
  {
    icon: Target,
    title: 'Regionale Sichtbarkeit',
    description:
      'Ihre Videos und Stellenanzeigen werden bevorzugt Jobsuchenden in Ihrer Region angezeigt. Zielgenau und ohne Streuverluste.',
    color: 'bg-orange-500/20 text-orange-400',
  },
  {
    icon: TrendingUp,
    title: 'Employer Branding',
    description:
      'Positionieren Sie sich als moderner Arbeitgeber. Authentische Videos bauen Ihre Arbeitgebermarke bei Jobsuchenden auf.',
    color: 'bg-rose-500/20 text-rose-400',
  },
];

const comparisonPoints = [
  {
    category: 'Praesentationsformat',
    minijobgenie: 'Kurzvideos von echten Mitarbeitern, TikTok-Style',
    klassisch: 'Textbasierte Stellenanzeigen mit Stockfotos',
  },
  {
    category: 'Bewerbungsprozess',
    minijobgenie: 'Profil in 2 Min, kein Lebenslauf, Matching per Swipe',
    klassisch: 'Anschreiben, Lebenslauf, Zeugnisse, Online-Formular',
  },
  {
    category: 'Kontaktaufnahme',
    minijobgenie: 'Direkter Chat nach beidseitigem Match',
    klassisch: 'E-Mail oder Portal-Nachricht, wochenlange Wartezeit',
  },
  {
    category: 'Zeitaufwand bis zum Gespraech',
    minijobgenie: 'Wenige Tage vom Match zum Termin',
    klassisch: 'Wochen bis Monate von Bewerbung bis Einladung',
  },
  {
    category: 'Zielgruppe',
    minijobgenie: 'Speziell fuer Minijob-Suchende, mobile-first',
    klassisch: 'Allgemein, oft Desktop-orientiert',
  },
  {
    category: 'Berufsorientierung',
    minijobgenie: 'KI-Jobfinder mit personalisierten Vorschlaegen',
    klassisch: 'Suchmaske mit Filtern, keine Beratung',
  },
];

const testimonials = [
  {
    name: 'Lena M.',
    role: 'Minijobberin im Einzelhandel',
    age: 22,
    text: 'Ich hab wochenlang auf Jobportalen gesucht und nie was Passendes gefunden. Bei Minijobgenie hab ich nach 2 Tagen ein Match mit einem Laden in meiner Naehe gehabt. Der Chat war super locker und nach einer Woche hatte ich den Job.',
  },
  {
    name: 'Max K.',
    role: 'Werkstudent mit Minijob',
    age: 24,
    text: 'Der KI-Jobfinder hat mir Gastronomie vorgeschlagen, obwohl ich vorher nur an Buero gedacht hab. Das Video vom Cafe hat mich dann ueberzeugt. Beste Entscheidung - tolle Atmosphaere und super Team.',
  },
  {
    name: 'Sarah T.',
    role: 'Minijobberin im Service',
    age: 19,
    text: 'Endlich mal eine App, die nicht wie ein langweiliges Jobportal aussieht. Die Videos sind so viel besser als Stellenanzeigen. Man sieht richtig, wie es bei den Arbeitgebern ist.',
  },
  {
    name: 'Thomas H.',
    role: 'Restaurantbesitzer',
    age: null,
    text: 'Wir haben jahrelang auf klassischen Portalen inseriert und kaum Bewerbungen bekommen. Seit wir bei Minijobgenie Videos hochladen, haben wir mehr qualifizierte Anfragen als je zuvor. Die Jobsuchenden, die uns matchen, sind wirklich motiviert.',
  },
  {
    name: 'Julia R.',
    role: 'HR-Managerin, Einzelhandelskette',
    age: null,
    text: 'Das Dashboard ist super uebersichtlich und die Analytics helfen uns zu verstehen, was bei Jobsuchenden ankommt. Wir haben unsere Minijob-Stellen dieses Quartal alle innerhalb von 3 Wochen besetzt.',
  },
  {
    name: 'Michael B.',
    role: 'Inhaber, Lieferservice',
    age: null,
    text: 'Mein Mitarbeiter hat ein Video gedreht, in dem er zeigt, wie ein typischer Arbeitstag bei uns aussieht. Das Video hat ueber 500 Views bekommen und wir hatten innerhalb einer Woche 8 Matches. So einfach war Minijobber-Suche noch nie.',
  },
];

const stats = [
  { value: '30-90s', label: 'Videolaenge', sublabel: 'Kurz, knackig, authentisch' },
  { value: '100%', label: 'Kostenlos fuer Jobsuchende', sublabel: 'Alle Features inklusive' },
  { value: '2 Min', label: 'Profil erstellen', sublabel: 'Schneller als jeder Lebenslauf' },
  { value: '< 48h', label: 'Durchschnittliche Match-Zeit', sublabel: 'Vom Like zum Match' },
  { value: '5-7', label: 'KI-Fragen', sublabel: 'Fuer personalisierte Jobvorschlaege' },
  { value: '84+', label: 'Staedte', sublabel: 'Regionale Abdeckung deutschlandweit' },
];

export default function VorteilePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Vorteile' },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Vorteile von Minijobgenie – Warum unsere Plattform?',
    description:
      'Alle Vorteile von Minijobgenie fuer Jobsuchende und Arbeitgeber im Ueberblick.',
    url: 'https://minijobgenie.de/vorteile',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Minijobgenie',
      url: 'https://minijobgenie.de',
    },
  };

  return (
    <div className="min-h-screen bg-white">
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
      <section className="bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-amber-100 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">Vorteile</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-amber-100 mb-6 border border-white/20">
              <Award className="h-4 w-4" />
              <span>Warum Minijobgenie?</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Die Vorteile von{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
                Minijobgenie
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-50 mb-8 max-w-2xl">
              Minijob-Suche muss nicht kompliziert, langweilig oder stressig sein. Wir machen
              sie schnell, visuell und direkt. Fuer Jobsuchende und Arbeitgeber.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#fuer-jobsuchende"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-amber-600 font-medium text-sm hover:bg-amber-50 transition-colors"
              >
                Vorteile fuer Jobsuchende
              </a>
              <a
                href="#fuer-arbeitgeber"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full text-white font-medium text-sm hover:bg-white/20 transition-colors"
              >
                Vorteile fuer Arbeitgeber
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile fuer Jobsuchende */}
      <section id="fuer-jobsuchende" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm text-amber-700 mb-4">
              <Sparkles className="h-4 w-4" />
              Fuer Jobsuchende
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              10 Gruende, warum Jobsuchende Minijobgenie lieben
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entwickelt fuer alle, die einen Minijob suchen. So sollte Jobsuche im Jahr 2026 funktionieren.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youthBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${benefit.color} mb-4`}
                >
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile fuer Arbeitgeber */}
      <section id="fuer-arbeitgeber" className="py-20 bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-amber-300 mb-4">
              <Building2 className="h-4 w-4" />
              Fuer Arbeitgeber
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              10 Gruende, warum Arbeitgeber auf{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Minijobgenie
              </span>{' '}
              setzen
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Finden Sie motivierte Minijobber schneller, guenstiger und gezielter als je zuvor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-amber-500/50 transition-colors"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${benefit.color} mb-4`}
                >
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://dashboard.minijobgenie.de/login"
              className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-8 py-3.5 text-base font-medium text-white hover:bg-amber-500 transition-colors"
            >
              Jetzt kostenlos starten
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Warum nicht klassische Portale? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Warum nicht einfach ein klassisches Stellenportal?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Klassische Stellenportale funktionieren mit langen Texten, formellen Bewerbungen
              und endlosen Wartezeiten. Minijobgenie macht es anders.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {comparisonPoints.map((point) => (
              <div
                key={point.category}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900">{point.category}</h3>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  <div className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-amber-600 mb-1">Minijobgenie</p>
                        <p className="text-sm text-gray-700">{point.minijobgenie}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="h-3.5 w-3.5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Klassische Portale</p>
                        <p className="text-sm text-gray-500">{point.klassisch}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Ueberzeugt? Dann starte jetzt und erlebe den Unterschied.
            </p>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors"
            >
              Alle Features im Detail ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Zahlen und Fakten */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Minijobgenie in Zahlen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Die wichtigsten Fakten auf einen Blick. Schnell, kostenlos und effektiv.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500 mb-2">
                  {stat.value}
                </p>
                <p className="font-semibold text-gray-900 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Das sagen unsere Nutzer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Echte Stimmen von Jobsuchenden und Arbeitgebern, die mit Minijobgenie
              zusammengefunden haben.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <Quote className="h-8 w-8 text-amber-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                        {testimonial.age ? `, ${testimonial.age} Jahre` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zusammenfassung der Top-Vorteile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Die Top 5 Vorteile zusammengefasst
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                number: '01',
                title: 'Authentizitaet statt Marketing',
                text: 'Echte Kurzvideos von echten Mitarbeitern geben dir einen ehrlichen Einblick in den Arbeitsalltag. Keine gestellten Fotos, keine uebertriebenen Beschreibungen.',
              },
              {
                number: '02',
                title: 'Einfachheit statt Buerokratie',
                text: 'Profil in 2 Minuten, kein Lebenslauf, kein Anschreiben, kein Warten. Minijob-Suche so einfach wie Social Media nutzen.',
              },
              {
                number: '03',
                title: 'Qualitaet statt Quantitaet',
                text: 'Beidseitiges Matching sorgt dafuer, dass du nur mit Arbeitgebern in Kontakt kommst, die wirklich an dir interessiert sind. Und umgekehrt.',
              },
              {
                number: '04',
                title: 'Geschwindigkeit statt Wartezeit',
                text: 'Vom Profil zum Match in Stunden, vom Match zum Gespraech in Tagen. Nicht Wochen oder Monate wie bei klassischen Bewerbungen.',
              },
              {
                number: '05',
                title: 'Innovation statt Tradition',
                text: 'KI-Jobfinder, Video Feed, Echtzeit-Chat. Minijobgenie nutzt moderne Technologie, um ein altes Problem neu zu loesen.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="flex gap-6 items-start p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all"
              >
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500 flex-shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit, die Vorteile selbst zu erleben?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schliesse dich Tausenden Jobsuchenden und Arbeitgebern an, die Minijob-Suche bereits
            neu denken. Kostenlos, einfach und direkt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.minijobgenie.de/login"
              className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-amber-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
            <Link
              href="/so-funktionierts"
              className="rounded-full border-2 border-white px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              So funktioniert&apos;s
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4" />
              Kostenlos fuer Jobsuchende
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4" />
              DSGVO-konform
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4" />
              Deutsche Server
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4" />
              Kein Lebenslauf noetig
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
