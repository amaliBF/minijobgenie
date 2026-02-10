import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Brain,
  Lightbulb,
  Share2,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Target,
  Clock,
  Check,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'KI-Berufsfinder – Finde den perfekten Minijob | Minijobgenie',
  description:
    'Der KI-Berufsfinder von Minijobgenie analysiert deine Persönlichkeit und empfiehlt dir passende Minijobs. 20 Fragen, 5 Minuten, deine Top 3 Berufe. Bald in der Genie App.',
  alternates: { canonical: '/berufsfinder' },
  openGraph: {
    title: 'KI-Berufsfinder – Finde den perfekten Minijob | Minijobgenie',
    description:
      'Beantworte 20 Fragen und erhalte personalisierte Minijob-Empfehlungen basierend auf deiner Persönlichkeit. Kostenlos in der Genie App.',
    url: 'https://minijobgenie.de/berufsfinder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KI-Berufsfinder – Finde den perfekten Minijob | Minijobgenie',
    description:
      'Beantworte 20 Fragen und erhalte personalisierte Minijob-Empfehlungen. Kostenlos in der Genie App.',
  },
};

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: '20 Fragen beantworten',
    duration: '~5 Minuten',
    description:
      'Beantworte 20 kurze Fragen zu deinen Interessen, Stärken und Vorlieben. Kein Wissen nötig – es gibt keine falschen Antworten. Einfach ehrlich sein.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Persönlichkeitsanalyse erhalten',
    duration: 'Sofort',
    description:
      'Unsere KI analysiert deine Antworten und erstellt ein detailliertes Persönlichkeitsprofil. Du erfährst, welcher Typ du bist und welche Stärken dich auszeichnen.',
  },
  {
    number: '03',
    icon: Target,
    title: 'Top 3 Berufsempfehlungen',
    duration: 'Sofort',
    description:
      'Basierend auf deinem Profil bekommst du deine persönlichen Top 3 Minijob-Bereiche – mit Erklärung, warum sie zu dir passen, plus Infos zu Verdienst und Arbeitszeiten.',
  },
];

const features = [
  {
    icon: Brain,
    title: 'Persönlichkeitstyp',
    description:
      'Erfahre, welcher Persönlichkeitstyp du bist. Die KI ordnet dich basierend auf deinen Antworten einem von mehreren Typen zu und erklärt deine Stärken.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Target,
    title: 'Berufsempfehlungen',
    description:
      'Erhalte deine persönlichen Top 3 Minijob-Bereiche mit detaillierten Infos zu Aufgaben, Verdienst und flexiblen Arbeitszeiten.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Sparkles,
    title: 'Passende Stellen',
    description:
      'Direkt nach der Analyse zeigen wir dir offene Minijobs, die zu deinen Empfehlungen passen – in deiner Nähe.',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    icon: Share2,
    title: 'Teilen-Funktion',
    description:
      'Teile dein Ergebnis mit Freunden oder Familie. Vergleicht eure Persönlichkeitstypen und entdeckt gemeinsam passende Nebenjobs.',
    color: 'bg-emerald-100 text-emerald-500',
  },
];

export default function BerufsinderPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'KI-Berufsfinder' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 via-green-600 to-green-700 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-emerald-200 mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">KI-Berufsfinder</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-emerald-100 mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span>KI-gestützte Berufsorientierung</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              KI-Berufsfinder
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 mb-4 max-w-2xl">
              Finde den perfekten Minijob – in nur 5 Minuten. Unsere KI analysiert deine
              Persönlichkeit und zeigt dir, welcher Nebenjob wirklich zu dir passt.
            </p>
            <p className="text-base text-emerald-200 mb-8 max-w-2xl">
              20 Fragen. Dein Persönlichkeitstyp. Dein Traum-Minijob.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/app"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-medium text-emerald-600 hover:bg-emerald-50 transition-colors shadow-lg"
              >
                <Sparkles className="h-4 w-4" />
                Bald in der Genie App verfügbar
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm text-emerald-700 mb-6">
              <Lightbulb className="h-4 w-4" />
              In 3 einfachen Schritten
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              So funktioniert&apos;s
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vom ersten Klick bis zur Jobempfehlung – der KI-Berufsfinder führt dich in
              drei einfachen Schritten zu deinem perfekten Minijob.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] border-t-2 border-dashed border-emerald-200" />
                )}
                <div className="bg-[#F0FDF4] rounded-2xl p-8 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Schritt {step.number}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        <span className="text-xs text-gray-500">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Was du vom KI-Berufsfinder bekommst
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mehr als nur eine Jobliste – der KI-Berufsfinder liefert dir ein
              vollständiges Persönlichkeitsprofil mit maßgeschneiderten Empfehlungen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Warum der KI-Berufsfinder?
            </h2>
            <div className="space-y-4">
              {[
                'Basierend auf wissenschaftlichen Persönlichkeitsmodellen',
                'Für alle geeignet – ob Schüler, Studierende oder Quereinsteiger',
                'Berücksichtigt über 300 Berufsfelder und Minijob-Bereiche',
                'Komplett kostenlos – keine versteckten Kosten',
                'Ergebnisse sofort verfügbar, kein Warten',
                'Beliebig oft wiederholbar – probiere verschiedene Antworten aus',
                'Datenschutzkonform nach DSGVO',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-[#F0FDF4] rounded-xl p-4 border border-emerald-100">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 via-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white mb-6 border border-white/20">
            <Sparkles className="h-4 w-4" />
            Bald verfügbar
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit, deinen Traum-Minijob zu finden?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Der KI-Berufsfinder ist bald in der Genie App verfügbar. 20 Fragen,
            5 Minuten, deine persönlichen Top 3 Minijob-Bereiche.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-medium text-emerald-600 hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Bald in der Genie App verfügbar
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div>
              <p className="text-3xl font-bold text-white">20</p>
              <p className="text-sm text-white/70 mt-1">Fragen</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">5 Min</p>
              <p className="text-sm text-white/70 mt-1">Dauer</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Top 3</p>
              <p className="text-sm text-white/70 mt-1">Berufe</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
