import { Metadata } from 'next';
import Link from 'next/link';
import {
  Video,
  Heart,
  MessageCircle,
  Brain,
  Shield,
  ArrowRight,
  Check,
  Banknote,
  Zap,
  MapPin,
  ChevronRight,
  Clock,
  Star,
  Smartphone,
  Lock,
  Users,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Für Jobsuchende – Finde deinen Minijob per Swipe',
  description:
    'So findest du mit Minijobgenie deinen perfekten 538-Euro-Job: Video-Einblicke, Swipe-Matching, KI-Jobfinder und Direkt-Chat. 100% kostenlos für Jobsuchende.',
  alternates: { canonical: '/fuer-jobsuchende' },
  openGraph: {
    title: 'Für Jobsuchende | Minijobgenie',
    description: 'Finde deinen Minijob per Swipe. Kostenlos, ohne Anschreiben, mit Video-Einblicken.',
    url: 'https://minijobgenie.de/fuer-jobsuchende',
  },
};

export default function FuerJobsuchendePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'Für Jobsuchende' },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F0FDF4]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 pt-28 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 cash-dots opacity-10" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-emerald-100 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Für Jobsuchende</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="cash-badge mb-6 bg-white/15 border-white/25 text-white">
                <Banknote className="h-4 w-4" />
                <span>100% kostenlos für Jobsuchende</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Finde deinen <span className="euro-highlight">Minijob</span> per Swipe
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100 mb-8 max-w-2xl">
                Schluss mit langweiligen Stellenanzeigen. Schau kurze Videos von Arbeitgebern,
                swipe nach rechts und chatte direkt. Minijob-Suche, die Spaß macht.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="cash-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">VORTEILE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Warum Minijobgenie?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Die smarte Alternative zu klassischen Jobportalen – speziell für Minijobs und Nebenjobs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Video, title: 'Video-Einblicke', description: 'Schau dir in 30-Sekunden-Videos an, wie der Job wirklich aussieht. Echter Arbeitsplatz, echtes Team.' },
                { icon: Heart, title: 'Swipe-Matching', description: 'Swipe rechts bei Jobs, die dir gefallen. Matched der Arbeitgeber zurück, entsteht ein Kontakt.' },
                { icon: MessageCircle, title: 'Direkt-Chat', description: 'Nach dem Match chattest du direkt mit dem Arbeitgeber. Kein Anschreiben, keine Bewerbungsmappe.' },
                { icon: Brain, title: 'KI-Jobfinder', description: 'Weißt du nicht, welcher Minijob passt? Unsere KI stellt Fragen und schlägt passende Jobs vor.' },
                { icon: Shield, title: '100% kostenlos', description: 'Alle Features sind für Jobsuchende komplett kostenlos. Kein Abo, keine versteckten Kosten.' },
                { icon: MapPin, title: 'Jobs in deiner Nähe', description: 'Finde Minijobs in deinem Umkreis. Kein langer Arbeitsweg, ideal für Nebenjob und Studium.' },
              ].map((item) => (
                <div key={item.title} className="glow-card rounded-2xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-[#F0FDF4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="cash-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">SO GEHT&apos;S</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                So einfach geht&apos;s
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Profil erstellen', desc: 'Verfügbarkeit und Interessen angeben – in 2 Minuten erledigt.' },
                { step: '2', title: 'Videos schauen', desc: 'Scrolle durch Kurzvideos und sieh dir Arbeitsplätze live an.' },
                { step: '3', title: 'Swipen & Matchen', desc: 'Like Jobs, die dir gefallen. Matched der Arbeitgeber: Kontakt!' },
                { step: '4', title: 'Chatten & Loslegen', desc: 'Chatte direkt und starte deinen Minijob. Ohne Papierkram.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white text-2xl font-bold flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/25">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Feature Highlights */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="cash-divider mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">IM DETAIL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Was Minijobgenie besonders macht
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Zap, title: 'Blitzschnell', text: 'Vom Profil zum Match in Stunden. Videos und Profile laden sofort.' },
                { icon: Lock, title: 'Datenschutz', text: 'DSGVO-konform. Deine Daten gehören dir und werden nie verkauft.' },
                { icon: Smartphone, title: 'Mobile First', text: 'Optimiert für dein Smartphone. Swipe, schaue Videos, chatte – alles mobil.' },
                { icon: Clock, title: 'Echtzeit-Updates', text: 'Neue Videos, Matches und Nachrichten sofort auf deinem Gerät.' },
                { icon: Star, title: 'Favoriten', text: 'Speichere Arbeitgeber und Videos, die dir besonders gefallen.' },
                { icon: Users, title: 'Community', text: 'Werde Teil einer Generation, die Minijob-Suche neu denkt.' },
                { icon: Brain, title: 'Smarte Vorschläge', text: 'Je mehr du swipest, desto besser werden die Empfehlungen.' },
                { icon: Heart, title: 'Kein Spam', text: 'Nur Nachrichten von Arbeitgebern, die wirklich an dir interessiert sind.' },
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

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-600 relative overflow-hidden">
          <div className="absolute inset-0 cash-dots opacity-10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Bereit für deinen Minijob?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Die App kommt bald. Schau dich schon jetzt um und entdecke Minijobs in deiner Nähe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/branchen"
                className="rounded-lg bg-white px-8 py-3.5 text-base font-medium text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-lg"
              >
                Branchen entdecken
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ratgeber"
                className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white hover:border-white/60 hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                Minijob-Ratgeber
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
