import {
  Video,
  Heart,
  MessageCircle,
  Brain,
  Building2,
  Users,
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  ChevronRight,
  Quote,
  Briefcase,
  UtensilsCrossed,
  ShoppingCart,
  Package,
  Bike,
  Monitor,
  PartyPopper,
  Sparkles as SparklesIcon,
  BookOpen,
  HeartPulse,
  Dumbbell,
  Wrench,
  Factory,
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Minijobgenie',
  url: 'https://minijobgenie.de',
  description:
    'Die innovative Minijob-Plattform mit Video-Einblicken, Swipe-Matching und KI-Jobfinder. Finde deinen 538-Euro-Job per Swipe - kostenlos fuer Jobsuchende.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Kostenlos fuer Jobsuchende',
  },
  creator: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschraenkt)',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hagenower Str. 73',
      addressLocality: 'Schwerin',
      postalCode: '19061',
      addressCountry: 'DE',
    },
  },
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Minijobgenie',
  url: 'https://minijobgenie.de',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://minijobgenie.de/jobs?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm text-amber-700 mb-8">
            <Zap className="h-4 w-4" />
            <span>Die neue Art, Minijobs zu finden</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 max-w-5xl mx-auto">
            Finde deinen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
              Minijob
            </span>{' '}
            &ndash; per Swipe!
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Die smarte Plattform f&uuml;r 538-Euro-Jobs, Nebenjobs und Aushilfst&auml;tigkeiten.
            Kurze Videos von echten Arbeitgebern, Swipe-Matching und direkter Chat.
            So einfach war die Minijob-Suche noch nie.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#so-funktionierts"
              className="rounded-full bg-gray-900 px-8 py-3.5 text-base font-medium text-white hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              App kommt bald
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="https://dashboard.minijobgenie.de/login"
              className="rounded-full border-2 border-gray-200 px-8 py-3.5 text-base font-medium text-gray-700 hover:border-gray-300 transition-colors flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
          </div>

          {/* Stats with Icons */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-2">
                <Video className="h-5 w-5 text-amber-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">30s</p>
              <p className="text-sm text-gray-500 mt-1">Arbeitgeber-Videos</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center mb-2">
                <Briefcase className="h-5 w-5 text-yellow-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">100.000+</p>
              <p className="text-sm text-gray-500 mt-1">Minijobs deutschlandweit</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">0&euro;</p>
              <p className="text-sm text-gray-500 mt-1">Kostenlos f&uuml;r Jobsuchende</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Minijob-Suche, die Spa&szlig; macht
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Schluss mit langweiligen Stellenanzeigen. Erlebe Arbeitgeber in kurzen Videos und finde per Swipe deinen perfekten Nebenjob.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Video,
                title: 'Video-Einblicke',
                description:
                  'Arbeitgeber zeigen sich in 30-Sekunden-Videos: Arbeitsplatz, Team, Aufgaben. Authentisch statt anonyme Stellenanzeige.',
                color: 'bg-amber-100 text-amber-600',
              },
              {
                icon: Heart,
                title: 'Swipe-Matching',
                description:
                  'Swipe rechts, wenn ein Job dich anspricht. Matched der Arbeitgeber zur&uuml;ck, entsteht sofort eine Verbindung.',
                color: 'bg-yellow-100 text-yellow-600',
              },
              {
                icon: Brain,
                title: 'KI-Jobfinder',
                description:
                  'Unsere KI fragt nach deinen Verf&uuml;gbarkeiten, Interessen und St&auml;rken und findet die passenden Minijobs f&uuml;r dich.',
                color: 'bg-orange-100 text-orange-600',
              },
              {
                icon: MessageCircle,
                title: 'Direkt-Chat',
                description:
                  'Nach dem Match chattest du direkt mit dem Arbeitgeber. Kein Anschreiben, keine Bewerbungsmappe.',
                color: 'bg-amber-100 text-amber-700',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-5`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 sm:p-12 border border-amber-100">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-amber-200" />
            <div className="relative text-center">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;Neben dem Studium einen Minijob zu finden war immer nervig &ndash; ewig Stellenanzeigen
                durchscrollen und Bewerbungen schreiben. Bei Minijobgenie habe ich einfach ein paar Videos
                geschaut, nach rechts geswipt und zwei Tage sp&auml;ter im Caf&eacute; angefangen.
                Genau so sollte das laufen!&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200 text-amber-700 font-bold text-sm">
                  LM
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-sm">Lena M.</p>
                  <p className="text-sm text-gray-500">Studentin, jobbt nebenbei in der Gastro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="so-funktionierts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              So funktioniert&apos;s
            </h2>
            <p className="mt-4 text-lg text-gray-600">In 4 einfachen Schritten zum Minijob</p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Connecting line (lg only) */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200" />

            {[
              {
                step: '1',
                title: 'Profil erstellen',
                description: 'Verf&uuml;gbarkeit, Interessen und Standort angeben &ndash; in 2 Minuten erledigt.',
              },
              {
                step: '2',
                title: 'Videos schauen',
                description: 'Scrolle durch Kurzvideos von Arbeitgebern und sieh dir den Job live an.',
              },
              {
                step: '3',
                title: 'Swipen & Matchen',
                description: 'Like Jobs, die dir gefallen. Wenn der Arbeitgeber dich auch mag: Match!',
              },
              {
                step: '4',
                title: 'Chatten & Loslegen',
                description: 'Chatte direkt mit dem Arbeitgeber und starte deinen Minijob. Ohne Papierkram.',
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-white text-2xl font-bold flex items-center justify-center mx-auto relative z-10">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section id="fuer-arbeitgeber" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-amber-300 mb-6">
                <Building2 className="h-4 w-4" />
                F&uuml;r Arbeitgeber
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Finden Sie{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  zuverl&auml;ssige Aushilfen
                </span>{' '}
                per Video & Matching
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                Minijobber &uuml;ber Zeitungsanzeigen oder Aush&auml;nge suchen? Das war gestern.
                Mit Minijobgenie zeigen Sie Ihren Arbeitsplatz in kurzen Videos und finden
                motivierte Aushilfen, Sch&uuml;ler, Studenten und Teilzeitkr&auml;fte per Swipe-Matching.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  '30-Sekunden-Videos von Ihrem Arbeitsplatz hochladen',
                  'Passende Kandidaten per Swipe-Matching finden',
                  'Direkter Chat nach erfolgreichem Match',
                  'Analytics-Dashboard mit Bewerber-Insights',
                  'Mehrere Standorte und Jobs verwalten',
                  'Schnelle Besetzung offener Minijob-Stellen',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://dashboard.minijobgenie.de/login"
                className="inline-flex items-center gap-2 mt-10 rounded-full bg-amber-600 px-8 py-3.5 text-base font-medium text-white hover:bg-amber-500 transition-colors"
              >
                Jetzt kostenlos starten
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Kandidaten', value: 'Unbegrenzt sichtbar' },
                { icon: Video, label: 'Videos', value: 'Bis zu 10 Videos' },
                { icon: MessageCircle, label: 'Chat', value: 'Direktnachrichten' },
                { icon: Star, label: 'Analytics', value: 'Vollst&auml;ndige Insights' },
                { icon: Briefcase, label: 'Stellenanzeigen', value: 'Unbegrenzt schalten' },
                { icon: Zap, label: 'Schnelligkeit', value: 'Besetzung in Tagen' },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
                >
                  <card.icon className="h-8 w-8 text-amber-400 mb-3" />
                  <p className="font-semibold">{card.label}</p>
                  <p className="text-sm text-gray-400 mt-1" dangerouslySetInnerHTML={{ __html: card.value }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branchen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Minijobs in allen Branchen
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ob Gastro, Einzelhandel, Lager oder B&uuml;ro &ndash; finde 538-Euro-Jobs und Nebenjobs in der Branche, die zu dir passt.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: UtensilsCrossed, name: 'Gastronomie & Hotel', jobs: '25.000+ Minijobs', color: 'bg-amber-50 text-amber-600 border-amber-100' },
              { icon: ShoppingCart, name: 'Einzelhandel & Verkauf', jobs: '20.000+ Minijobs', color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
              { icon: Package, name: 'Lager & Logistik', jobs: '18.000+ Minijobs', color: 'bg-orange-50 text-orange-600 border-orange-100' },
              { icon: Bike, name: 'Lieferung & Kurier', jobs: '12.000+ Minijobs', color: 'bg-lime-50 text-lime-600 border-lime-100' },
              { icon: Monitor, name: 'B\u00fcro & Verwaltung', jobs: '10.000+ Minijobs', color: 'bg-blue-50 text-blue-600 border-blue-100' },
              { icon: PartyPopper, name: 'Events & Promotion', jobs: '8.000+ Minijobs', color: 'bg-pink-50 text-pink-600 border-pink-100' },
              { icon: SparklesIcon, name: 'Reinigung & Haushalt', jobs: '15.000+ Minijobs', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
              { icon: BookOpen, name: 'Nachhilfe & Betreuung', jobs: '7.000+ Minijobs', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
              { icon: HeartPulse, name: 'Pflege & Gesundheit', jobs: '9.000+ Minijobs', color: 'bg-red-50 text-red-600 border-red-100' },
              { icon: Dumbbell, name: 'Fitness & Sport', jobs: '5.000+ Minijobs', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
              { icon: Wrench, name: 'Handwerk & Technik', jobs: '6.000+ Minijobs', color: 'bg-slate-50 text-slate-600 border-slate-100' },
              { icon: Factory, name: 'Produktion & Fertigung', jobs: '11.000+ Minijobs', color: 'bg-violet-50 text-violet-600 border-violet-100' },
            ].map((branche) => (
              <Link
                key={branche.name}
                href={`/branchen/${branche.name.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-').replace(/\u00fc/g, 'ue')}`}
                className={`flex flex-col items-center p-6 rounded-2xl border ${branche.color} hover:shadow-md transition-all hover:-translate-y-0.5 group`}
              >
                <branche.icon className="h-8 w-8 mb-3" />
                <h3 className="font-semibold text-gray-900 text-sm text-center">{branche.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{branche.jobs}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Mehr entdecken
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Alles rund um Minijobs, Nebenjobs und 538-Euro-Jobs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'F\u00fcr Jobsuchende',
                description: 'So findest du deinen Minijob per Swipe. Kostenlos, ohne Anschreiben, mit Video-Einblicken in echte Arbeitspl\u00e4tze.',
                href: '/fuer-jobsuchende',
                icon: Heart,
                gradient: 'from-amber-500 to-yellow-500',
              },
              {
                title: 'Alle Branchen',
                description: 'Gastro, Einzelhandel, Lager, Lieferung und mehr. Entdecke Minijobs in deiner Branche.',
                href: '/branchen',
                icon: Briefcase,
                gradient: 'from-yellow-500 to-amber-600',
              },
              {
                title: 'Minijob-Ratgeber',
                description: 'Alles \u00fcber 538-Euro-Grenze, Steuern, Sozialversicherung und Rechte im Minijob.',
                href: '/ratgeber',
                icon: BookOpen,
                gradient: 'from-orange-500 to-amber-600',
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} text-white mb-5`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-amber-600 font-medium mt-4 text-sm group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bereit f&uuml;r deinen Minijob?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Die App kommt bald. Arbeitgeber k&ouml;nnen sich jetzt schon registrieren und ihre Minijob-Angebote mit Videos einstellen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.minijobgenie.de/login"
              className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-amber-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
            <a
              href="#features"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white hover:border-white/60 transition-colors flex items-center gap-2"
            >
              Mehr erfahren
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
