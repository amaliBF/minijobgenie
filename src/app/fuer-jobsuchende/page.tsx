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
  Sparkles,
  Zap,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fuer Jobsuchende – Finde deinen Minijob per Swipe',
  description:
    'So findest du mit Minijobgenie deinen perfekten 538-Euro-Job: Video-Einblicke, Swipe-Matching, KI-Jobfinder und Direkt-Chat. 100% kostenlos fuer Jobsuchende.',
  alternates: { canonical: '/fuer-jobsuchende' },
  openGraph: {
    title: 'Fuer Jobsuchende | Minijobgenie',
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
      { '@type': 'ListItem', position: 2, name: 'Fuer Jobsuchende' },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-amber-100 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Fuer Jobsuchende</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-amber-100 mb-6 border border-white/20">
                <Sparkles className="h-4 w-4" />
                <span>100% kostenlos fuer Jobsuchende</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Finde deinen Minijob per Swipe
              </h1>
              <p className="text-lg sm:text-xl text-amber-100 mb-8 max-w-2xl">
                Schluss mit langweiligen Stellenanzeigen. Schau kurze Videos von Arbeitgebern,
                swipe nach rechts und chatte direkt. Minijob-Suche, die Spass macht.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Warum Minijobgenie?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Die smarte Alternative zu klassischen Jobportalen - speziell fuer Minijobs und Nebenjobs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Video, title: 'Video-Einblicke', description: 'Schau dir in 30-Sekunden-Videos an, wie der Job wirklich aussieht. Echter Arbeitsplatz, echtes Team.', color: 'bg-amber-100 text-amber-600' },
                { icon: Heart, title: 'Swipe-Matching', description: 'Swipe rechts bei Jobs, die dir gefallen. Matched der Arbeitgeber zurueck, entsteht ein Kontakt.', color: 'bg-yellow-100 text-yellow-600' },
                { icon: MessageCircle, title: 'Direkt-Chat', description: 'Nach dem Match chattest du direkt mit dem Arbeitgeber. Kein Anschreiben, keine Bewerbungsmappe.', color: 'bg-orange-100 text-orange-600' },
                { icon: Brain, title: 'KI-Jobfinder', description: 'Weisst du nicht, welcher Minijob passt? Unsere KI stellt Fragen und schlaegt passende Jobs vor.', color: 'bg-amber-100 text-amber-700' },
                { icon: Shield, title: '100% kostenlos', description: 'Alle Features sind fuer Jobsuchende komplett kostenlos. Kein Abo, keine versteckten Kosten.', color: 'bg-green-100 text-green-600' },
                { icon: MapPin, title: 'Jobs in deiner Naehe', description: 'Finde Minijobs in deinem Umkreis. Kein langer Arbeitsweg, ideal fuer Nebenjob und Studium.', color: 'bg-blue-100 text-blue-600' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.color} mb-4`}>
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                So einfach geht&apos;s
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Profil erstellen', desc: 'Verfuegbarkeit und Interessen angeben - in 2 Minuten erledigt.' },
                { step: '2', title: 'Videos schauen', desc: 'Scrolle durch Kurzvideos und sieh dir Arbeitsplaetze live an.' },
                { step: '3', title: 'Swipen & Matchen', desc: 'Like Jobs, die dir gefallen. Matched der Arbeitgeber: Kontakt!' },
                { step: '4', title: 'Chatten & Loslegen', desc: 'Chatte direkt und starte deinen Minijob. Ohne Papierkram.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-white text-2xl font-bold flex items-center justify-center mx-auto">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-amber-500 to-yellow-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Bereit fuer deinen Minijob?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Die App kommt bald. Schau dich schon jetzt um und entdecke Minijobs in deiner Naehe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/branchen"
                className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-amber-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Branchen entdecken
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ratgeber"
                className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-medium text-white hover:border-white/60 transition-colors flex items-center gap-2"
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
