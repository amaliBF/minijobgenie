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
  Banknote,
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
    'Entdecke die Vorteile von Minijobgenie für Jobsuchende und Arbeitgeber: Kostenlos, kein Lebenslauf, echte Video-Einblicke, KI-Jobfinder, direkter Chat und regionale Suche.',
  alternates: { canonical: '/vorteile' },
  openGraph: {
    title: 'Vorteile von Minijobgenie – Warum unsere Plattform?',
    description:
      'Kostenlos für Jobsuchende, günstiger für Arbeitgeber, schneller zum Match. Alle Vorteile von Minijobgenie im Überblick.',
    url: 'https://minijobgenie.de/vorteile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vorteile von Minijobgenie – Warum unsere Plattform?',
    description:
      'Kostenlos, authentisch, schnell. Alle Vorteile von Minijobgenie für Jobsuchende und Arbeitgeber.',
  },
};

const youthBenefits = [
  {
    icon: Wallet,
    title: '100% kostenlos',
    description:
      'Alle Features sind und bleiben für Jobsuchende kostenlos. Kein Abo, keine versteckten Kosten, kein Premium-Modell. Du zahlst nichts, nie.',
  },
  {
    icon: Shield,
    title: 'Kein Lebenslauf nötig',
    description:
      'Vergiss den Stress mit Lebenslauf und Anschreiben. Erstelle in 2 Minuten ein Profil mit deinen Interessen und Stärken. Mehr braucht es nicht.',
  },
  {
    icon: Video,
    title: 'Echte Video-Einblicke',
    description:
      'Sieh in authentischen Kurzvideos, wie der Arbeitsalltag wirklich aussieht. Keine Stockfotos, keine Marketing-Texte. Echte Mitarbeiter, echte Einblicke.',
  },
  {
    icon: Brain,
    title: 'KI-Jobfinder',
    description:
      'Weißt du nicht, welcher Minijob zu dir passt? Unsere KI stellt dir ein paar Fragen und schlägt Jobs vor, an die du vielleicht nie gedacht hättest.',
  },
  {
    icon: MessageCircle,
    title: 'Direkt chatten',
    description:
      'Nach einem Match schreibst du direkt mit dem Arbeitgeber. Wie bei WhatsApp, locker und ohne Formalitäten. Kein Anschreiben, kein Warten.',
  },
  {
    icon: MapPin,
    title: 'Jobs in deiner Nähe',
    description:
      'Finde Minijobs in deinem Umkreis. Mit Fahrzeitanzeige, damit du weißt, wie lange du täglich unterwegs wärst.',
  },
  {
    icon: Lock,
    title: 'Datenschutz garantiert',
    description:
      'DSGVO-konform, deutsche Server, verschlüsselte Übertragung. Deine Daten gehören dir und werden niemals an Dritte verkauft.',
  },
  {
    icon: Smartphone,
    title: 'Einfach zu bedienen',
    description:
      'Die App funktioniert wie TikTok und Tinder. Wenn du ein Smartphone bedienen kannst, kannst du auch Minijobgenie nutzen. Ohne Anleitung.',
  },
  {
    icon: Zap,
    title: 'Schnelle Ergebnisse',
    description:
      'Vom Profil zum ersten Match oft in wenigen Stunden. Vom Match zum Vorstellungsgespräch in wenigen Tagen. Nicht Wochen oder Monate.',
  },
  {
    icon: Heart,
    title: 'Kein Spam',
    description:
      'Erst nach einem beidseitigen Match ist der Chat freigeschaltet. Du bekommst nur Nachrichten von Arbeitgebern, die wirklich an dir interessiert sind.',
  },
];

const companyBenefits = [
  {
    icon: Users,
    title: 'Jobsuchende direkt erreichen',
    description:
      'Millionen Menschen suchen Minijobs. Erreichen Sie die Zielgruppe, die auf klassische Stellenanzeigen nicht mehr reagiert.',
  },
  {
    icon: Video,
    title: 'Authentisch präsentieren',
    description:
      'Zeigen Sie mit Kurzvideos, wie der Arbeitsalltag bei Ihnen wirklich aussieht. Echte Mitarbeiter überzeugen mehr als jede Stellenanzeige.',
  },
  {
    icon: ThumbsUp,
    title: 'Motivierte Bewerber',
    description:
      'Durch das Matching-System sehen Sie nur Kandidaten, die bereits Interesse an Ihrem Betrieb gezeigt haben. Jeder Match ist ein qualifizierter Lead.',
  },
  {
    icon: Zap,
    title: 'Schnelles Matching',
    description:
      'Vom Video-Upload bis zum ersten Match vergehen oft nur Stunden. Vom Match zum Vorstellungsgespräch nur Tage. Besetzen Sie Stellen schneller.',
  },
  {
    icon: Wallet,
    title: 'Günstiger als klassische Portale',
    description:
      'Schon ab 49 EUR pro Monat mit dem Starter-Plan. Deutlich günstiger als Stellenausschreibungen auf klassischen Jobportalen oder in Zeitungen.',
  },
  {
    icon: BarChart3,
    title: 'Detaillierte Analytics',
    description:
      'Sehen Sie genau, wie viele Jobsuchende Ihre Videos gesehen und geliked haben. Verfolgen Sie Trends und optimieren Sie Ihre Präsenz.',
  },
  {
    icon: Users,
    title: 'Team-Verwaltung',
    description:
      'Fügen Sie Kollegen hinzu und arbeiten Sie gemeinsam an der Minijobber-Gewinnung. Mit Rollen und Berechtigungen für strukturierte Zusammenarbeit.',
  },
  {
    icon: Shield,
    title: 'Persönlicher Support',
    description:
      'Bei Fragen sind wir für Sie da. Persönlicher Support per Chat und E-Mail. Wir helfen Ihnen, die Plattform optimal zu nutzen.',
  },
  {
    icon: Target,
    title: 'Regionale Sichtbarkeit',
    description:
      'Ihre Videos und Stellenanzeigen werden bevorzugt Jobsuchenden in Ihrer Region angezeigt. Zielgenau und ohne Streuverluste.',
  },
  {
    icon: TrendingUp,
    title: 'Employer Branding',
    description:
      'Positionieren Sie sich als moderner Arbeitgeber. Authentische Videos bauen Ihre Arbeitgebermarke bei Jobsuchenden auf.',
  },
];

const comparisonPoints = [
  {
    category: 'Präsentationsformat',
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
    category: 'Zeitaufwand bis zum Gespräch',
    minijobgenie: 'Wenige Tage vom Match zum Termin',
    klassisch: 'Wochen bis Monate von Bewerbung bis Einladung',
  },
  {
    category: 'Zielgruppe',
    minijobgenie: 'Speziell für Minijob-Suchende, mobile-first',
    klassisch: 'Allgemein, oft Desktop-orientiert',
  },
  {
    category: 'Berufsorientierung',
    minijobgenie: 'KI-Jobfinder mit personalisierten Vorschlägen',
    klassisch: 'Suchmaske mit Filtern, keine Beratung',
  },
];

const testimonials = [
  {
    name: 'Lena M.',
    role: 'Minijobberin im Einzelhandel',
    age: 22,
    text: 'Ich hab wochenlang auf Jobportalen gesucht und nie was Passendes gefunden. Bei Minijobgenie hab ich nach 2 Tagen ein Match mit einem Laden in meiner Nähe gehabt. Der Chat war super locker und nach einer Woche hatte ich den Job.',
  },
  {
    name: 'Max K.',
    role: 'Werkstudent mit Minijob',
    age: 24,
    text: 'Der KI-Jobfinder hat mir Gastronomie vorgeschlagen, obwohl ich vorher nur an Büro gedacht hab. Das Video vom Café hat mich dann überzeugt. Beste Entscheidung – tolle Atmosphäre und super Team.',
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
    text: 'Das Dashboard ist super übersichtlich und die Analytics helfen uns zu verstehen, was bei Jobsuchenden ankommt. Wir haben unsere Minijob-Stellen dieses Quartal alle innerhalb von 3 Wochen besetzt.',
  },
  {
    name: 'Michael B.',
    role: 'Inhaber, Lieferservice',
    age: null,
    text: 'Mein Mitarbeiter hat ein Video gedreht, in dem er zeigt, wie ein typischer Arbeitstag bei uns aussieht. Das Video hat über 500 Views bekommen und wir hatten innerhalb einer Woche 8 Matches. So einfach war Minijobber-Suche noch nie.',
  },
];

const stats = [
  { value: '30-90s', label: 'Videolänge', sublabel: 'Kurz, knackig, authentisch' },
  { value: '100%', label: 'Kostenlos für Jobsuchende', sublabel: 'Alle Features inklusive' },
  { value: '2 Min', label: 'Profil erstellen', sublabel: 'Schneller als jeder Lebenslauf' },
  { value: '< 48h', label: 'Durchschnittliche Match-Zeit', sublabel: 'Vom Like zum Match' },
  { value: '5-7', label: 'KI-Fragen', sublabel: 'Für personalisierte Jobvorschläge' },
  { value: '84+', label: 'Städte', sublabel: 'Regionale Abdeckung deutschlandweit' },
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
      'Alle Vorteile von Minijobgenie für Jobsuchende und Arbeitgeber im Überblick.',
    url: 'https://minijobgenie.de/vorteile',
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
              <li className="text-white font-medium">Vorteile</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="cash-badge mb-6 bg-white/15 border-white/25 text-white">
              <Award className="h-4 w-4" />
              <span>Warum Minijobgenie?</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Die Vorteile von{' '}
              <span className="euro-highlight">Minijobgenie</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-50 mb-8 max-w-2xl">
              Minijob-Suche muss nicht kompliziert, langweilig oder stressig sein. Wir machen
              sie schnell, visuell und direkt. Für Jobsuchende und Arbeitgeber.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#fuer-jobsuchende"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg text-emerald-700 font-medium text-sm hover:bg-emerald-50 transition-colors shadow-sm"
              >
                Vorteile für Jobsuchende
              </a>
              <a
                href="#fuer-arbeitgeber"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white font-medium text-sm hover:bg-white/20 transition-colors"
              >
                Vorteile für Arbeitgeber
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile für Jobsuchende */}
      <section id="fuer-jobsuchende" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">FÜR JOBSUCHENDE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              10 Gründe, warum Jobsuchende Minijobgenie lieben
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entwickelt für alle, die einen Minijob suchen. So sollte Jobsuche im Jahr 2026 funktionieren.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youthBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`glow-card rounded-2xl p-6 ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile für Arbeitgeber */}
      <section id="fuer-arbeitgeber" className="py-20 bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 px-4 py-1.5 text-sm text-emerald-300 mb-4 border border-emerald-500/30">
              <Building2 className="h-4 w-4" />
              Für Arbeitgeber
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              10 Gründe, warum Arbeitgeber auf{' '}
              <span className="gradient-text-cash">
                Minijobgenie
              </span>{' '}
              setzen
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Finden Sie motivierte Minijobber schneller, günstiger und gezielter als je zuvor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://dashboard.ausbildungsgenie.de/register"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3.5 text-base font-medium text-white hover:from-emerald-400 hover:to-green-500 transition-all shadow-lg shadow-emerald-500/25"
            >
              Jetzt kostenlos starten
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Warum nicht klassische Portale? */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">VERGLEICH</span>
            </div>
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
                className="glow-card rounded-2xl overflow-hidden"
              >
                <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100">
                  <h3 className="font-semibold text-gray-900">{point.category}</h3>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-emerald-100">
                  <div className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-emerald-600 mb-1">Minijobgenie</p>
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
              Überzeugt? Dann starte jetzt und erlebe den Unterschied.
            </p>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
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
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">ZAHLEN & FAKTEN</span>
            </div>
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
                className="glow-card rounded-2xl p-8 text-center"
              >
                <p className="text-4xl sm:text-5xl font-bold gradient-text-cash mb-2">
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
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">STIMMEN</span>
            </div>
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
                className="glow-card rounded-2xl p-6"
              >
                <Quote className="h-8 w-8 text-emerald-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-emerald-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
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
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">TOP 5</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Die Top 5 Vorteile zusammengefasst
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                number: '01',
                title: 'Authentizität statt Marketing',
                text: 'Echte Kurzvideos von echten Mitarbeitern geben dir einen ehrlichen Einblick in den Arbeitsalltag. Keine gestellten Fotos, keine übertriebenen Beschreibungen.',
              },
              {
                number: '02',
                title: 'Einfachheit statt Bürokratie',
                text: 'Profil in 2 Minuten, kein Lebenslauf, kein Anschreiben, kein Warten. Minijob-Suche so einfach wie Social Media nutzen.',
              },
              {
                number: '03',
                title: 'Qualität statt Quantität',
                text: 'Beidseitiges Matching sorgt dafür, dass du nur mit Arbeitgebern in Kontakt kommst, die wirklich an dir interessiert sind. Und umgekehrt.',
              },
              {
                number: '04',
                title: 'Geschwindigkeit statt Wartezeit',
                text: 'Vom Profil zum Match in Stunden, vom Match zum Gespräch in Tagen. Nicht Wochen oder Monate wie bei klassischen Bewerbungen.',
              },
              {
                number: '05',
                title: 'Innovation statt Tradition',
                text: 'KI-Jobfinder, Video Feed, Echtzeit-Chat. Minijobgenie nutzt moderne Technologie, um ein altes Problem neu zu lösen.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="speed-line flex gap-6 items-start p-6 rounded-2xl glow-card"
              >
                <span className="text-3xl font-bold gradient-text-cash flex-shrink-0">
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
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 cash-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit, die Vorteile selbst zu erleben?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Schließe dich Tausenden Jobsuchenden und Arbeitgebern an, die Minijob-Suche bereits
            neu denken. Kostenlos, einfach und direkt.
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

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4" />
              Kostenlos für Jobsuchende
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
              Kein Lebenslauf nötig
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
