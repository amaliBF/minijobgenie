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
  Briefcase,
  UtensilsCrossed,
  ShoppingCart,
  Package,
  Bike,
  Monitor,
  PartyPopper,
  BookOpen,
  HeartPulse,
  Dumbbell,
  Wrench,
  Factory,
  Banknote,
  Clock,
  TrendingUp,
  Euro,
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
    'Die innovative Minijob-Plattform mit Video-Einblicken, Swipe-Matching und KI-Jobfinder. Finde deinen 538-Euro-Job per Swipe – kostenlos für Jobsuchende.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Kostenlos für Jobsuchende',
  },
  creator: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschränkt)',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hagenower Str. 73',
      addressLocality: 'Schwerin',
      postalCode: '19061',
      addressCountry: 'DE',
    },
  },
};

const jsonLdSearch = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Minijobgenie',
  url: 'https://minijobgenie.de',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://minijobgenie.de/minijobs?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSearch) }}
      />

      <Header />

      {/* Hero Section – Quick Cash Style */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cash-dots opacity-40" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="cash-badge mb-6">
                <Zap className="h-3.5 w-3.5" />
                <span>538€-Jobs per Swipe finden</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Finde deinen{' '}
                <span className="euro-highlight">Minijob</span>{' '}
                – schnell & einfach
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Die innovative Minijob-Plattform mit 30-Sekunden-Videos, Swipe-Matching
                und KI-Jobfinder. Lerne Arbeitgeber authentisch kennen und starte sofort.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#so-funktionierts"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-7 py-3.5 text-base font-semibold text-white hover:from-emerald-400 hover:to-green-500 transition-all shadow-lg shadow-emerald-500/20"
                >
                  App kommt bald
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="https://dashboard.genieportal.de/register"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-200 px-7 py-3.5 text-base font-semibold text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 transition-all"
                >
                  <Building2 className="h-4 w-4" />
                  Als Arbeitgeber starten
                </Link>
              </div>
            </div>

            {/* Right side – Quick Cash Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glow-card rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
                    <Video className="h-5 w-5 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">30s</p>
                  <p className="text-sm text-gray-500 mt-0.5">Video-Einblicke</p>
                </div>
                <div className="glow-card rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-3">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">Swipe</p>
                  <p className="text-sm text-gray-500 mt-0.5">Match & los</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glow-card rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-lime-100 flex items-center justify-center mb-3">
                    <Banknote className="h-5 w-5 text-lime-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">538€</p>
                  <p className="text-sm text-gray-500 mt-0.5">Steuerfrei verdienen</p>
                </div>
                <div className="glow-card rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-3">
                    <Shield className="h-5 w-5 text-teal-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">0 €</p>
                  <p className="text-sm text-gray-500 mt-0.5">Kostenlos für dich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features – Glow Cards */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Minijob-Suche, die <span className="euro-highlight">Spaß macht</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Schluss mit langweiligen Stellenanzeigen. Erlebe Arbeitgeber live in kurzen Videos und finde deinen Nebenjob per Swipe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Video,
                title: 'Video-Einblicke',
                description: 'Arbeitgeber zeigen sich in 30-Sekunden-Videos: Arbeitsalltag, Team, Atmosphäre. Echt statt Floskeln.',
                color: 'bg-emerald-100 text-emerald-600',
              },
              {
                icon: Heart,
                title: 'Swipe-Matching',
                description: 'Swipe rechts, wenn ein Job dich anspricht. Matched es auch, entsteht eine direkte Verbindung.',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: Brain,
                title: 'KI-Jobfinder',
                description: 'Unsere KI lernt deine Vorlieben und schlägt dir passende Minijobs in deiner Nähe vor.',
                color: 'bg-lime-100 text-lime-600',
              },
              {
                icon: MessageCircle,
                title: 'Direkt-Chat',
                description: 'Nach dem Match chattest du direkt mit dem Arbeitgeber. Kein Anschreiben, sofort loslegen.',
                color: 'bg-teal-100 text-teal-600',
              },
            ].map((feature) => (
              <div key={feature.title} className="glow-card rounded-xl p-7">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial – Speed Line Quote */}
      <section className="py-16 bg-[#F0FDF4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="speed-line pl-6">
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed italic">
              „Ich brauchte schnell einen Nebenjob neben dem Studium. Bei Minijobgenie habe ich nach 3 Tagen
              als Barista angefangen – das Video vom Café hat mich sofort überzeugt. Kein Lebenslauf,
              kein Anschreiben, einfach swipen und chatten.&ldquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                LM
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Lisa M.</p>
                <p className="text-sm text-gray-500">Studentin, Barista-Minijob in Hamburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="so-funktionierts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">So einfach geht&apos;s</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              In 4 Schritten zum <span className="euro-highlight">Minijob</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Profil erstellen', description: 'Verfügbarkeit, Wunschbranche und Standort angeben – in 2 Minuten.', icon: Clock },
              { step: '02', title: 'Videos entdecken', description: 'Scrolle durch Kurzvideos von Arbeitgebern in deiner Nähe.', icon: Video },
              { step: '03', title: 'Swipen & Matchen', description: 'Like Jobs, die zu dir passen. Bei gegenseitigem Interesse: Match!', icon: Heart },
              { step: '04', title: 'Loslegen', description: 'Chatte direkt mit dem Arbeitgeber und starte deinen Minijob.', icon: Zap },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <span className="block text-sm font-black text-emerald-300 tracking-widest mb-2">{item.step}</span>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 mx-auto mb-5 group-hover:scale-105 transition-transform">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers – Dark Green Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 cash-dots" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="cash-badge !bg-emerald-900/50 !text-emerald-300 !border-emerald-700/50 mb-6">
                <Building2 className="h-3.5 w-3.5" />
                <span>Für Arbeitgeber</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Finden Sie die{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                  perfekte Aushilfe
                </span>{' '}
                per Video & Swipe
              </h2>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Klassische Jobportale sind zu langsam für Minijobs. Mit Minijobgenie finden Sie
                flexible Aushilfen, die wirklich zu Ihrem Team passen – per Kurzvideo und Matching.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  '30-Sekunden-Teamvideos hochladen',
                  'Flexible Aushilfen per Swipe matchen',
                  'Direkter Chat nach erfolgreichem Match',
                  'Analytics-Dashboard mit Bewerber-Insights',
                  'Mehrere Standorte verwalten',
                  'Schnellbesetzung in unter 48 Stunden',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://dashboard.genieportal.de/register"
                className="inline-flex items-center gap-2 mt-10 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3.5 text-base font-semibold text-white hover:from-emerald-400 hover:to-green-500 transition-all shadow-lg shadow-emerald-500/20"
              >
                Jetzt kostenlos starten
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Bewerber', value: 'Sofort sichtbar', color: 'from-emerald-500/20 to-emerald-600/10' },
                { icon: Video, label: 'Videos', value: 'Bis zu 10 Videos', color: 'from-green-500/20 to-green-600/10' },
                { icon: MessageCircle, label: 'Chat', value: 'Direktnachrichten', color: 'from-teal-500/20 to-teal-600/10' },
                { icon: Star, label: 'Analytics', value: 'Volle Insights', color: 'from-lime-500/20 to-lime-600/10' },
                { icon: Briefcase, label: 'Stellenanzeigen', value: 'Unbegrenzt', color: 'from-cyan-500/20 to-cyan-600/10' },
                { icon: TrendingUp, label: 'Besetzung', value: 'Unter 48h möglich', color: 'from-blue-500/20 to-blue-600/10' },
              ].map((card) => (
                <div
                  key={card.label}
                  className={`bg-gradient-to-br ${card.color} backdrop-blur rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-colors`}
                >
                  <card.icon className="h-7 w-7 text-emerald-400 mb-3" />
                  <p className="font-semibold">{card.label}</p>
                  <p className="text-sm text-gray-400 mt-1">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branchen */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="cash-divider mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Branchen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Minijobs in <span className="euro-highlight">allen Branchen</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ob Gastro, Einzelhandel, Logistik oder Nachhilfe – finde den Minijob, der zu dir passt.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { emoji: '🍽️', name: 'Gastronomie', slug: 'gastronomie-service' },
              { emoji: '🛍️', name: 'Einzelhandel', slug: 'einzelhandel-verkauf' },
              { emoji: '📦', name: 'Lager & Logistik', slug: 'lager-logistik' },
              { emoji: '🚲', name: 'Lieferung & Kurier', slug: 'lieferung-kurier' },
              { emoji: '💼', name: 'Büro & Verwaltung', slug: 'buero-verwaltung' },
              { emoji: '🎪', name: 'Events & Promotion', slug: 'events-promotion' },
              { emoji: '🧹', name: 'Reinigung', slug: 'reinigung-haushalt' },
              { emoji: '📚', name: 'Nachhilfe', slug: 'nachhilfe-betreuung' },
              { emoji: '🏥', name: 'Pflege', slug: 'pflege-gesundheit' },
              { emoji: '💪', name: 'Fitness & Sport', slug: 'fitness-sport' },
            ].map((branche) => (
              <Link
                key={branche.slug}
                href={`/branchen/${branche.slug}`}
                className="glow-card flex flex-col items-center p-5 rounded-xl text-center hover:-translate-y-0.5"
              >
                <span className="text-3xl mb-2">{branche.emoji}</span>
                <h3 className="font-semibold text-gray-900 text-sm">{branche.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Mehr entdecken</h2>
            <p className="mt-4 text-lg text-gray-600">Alles rund um deinen Minijob bei Minijobgenie</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Für Jobsuchende',
                description: 'So findest du deinen 538€-Job per Swipe. Kostenlos, ohne Anschreiben, mit echten Video-Einblicken.',
                href: '/fuer-jobsuchende',
                icon: Heart,
              },
              {
                title: 'Alle Branchen',
                description: 'Gastro, Einzelhandel, Logistik, Nachhilfe und mehr. Entdecke Minijobs in deiner Branche.',
                href: '/branchen',
                icon: Briefcase,
              },
              {
                title: 'Minijob-Ratgeber',
                description: '538€-Grenze, Steuern, Krankenversicherung, Rechte & Pflichten – alles was du wissen musst.',
                href: '/ratgeber',
                icon: BookOpen,
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group glow-card rounded-xl p-8 hover:-translate-y-1"
              >
                <card.icon className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold mt-4 text-sm group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 via-green-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Banknote className="h-10 w-10 text-white/60 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bereit für deinen Minijob?
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Die App kommt bald. Arbeitgeber können sich jetzt schon registrieren
            und per Video die besten Aushilfen finden.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://dashboard.genieportal.de/register"
              className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-emerald-700 hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Building2 className="h-4 w-4" />
              Als Arbeitgeber registrieren
            </Link>
            <a
              href="#features"
              className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:border-white/60 transition-colors flex items-center gap-2"
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
