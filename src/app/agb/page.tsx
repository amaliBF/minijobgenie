import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'AGB – Minijobgenie',
  description: 'Allgemeine Geschäftsbedingungen von Minijobgenie.de – Butterflies IT UG (haftungsbeschränkt).',
  alternates: {
    canonical: '/agb',
  },
};

export default function AgbPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minijobgenie.de' },
      { '@type': 'ListItem', position: 2, name: 'AGB' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 cash-dots opacity-10" />
        <div className="max-w-3xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">AGB</span>
          </nav>
          <div className="cash-badge mb-6 w-fit">
            <FileText className="h-4 w-4" />
            <span>Rechtliches</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Allgemeine Geschäftsbedingungen (AGB)</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="glow-card rounded-2xl p-8 sm:p-12">

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-2 mb-4">1. Geltungsbereich</h2>
          <p className="text-gray-700 mb-6">
            Diese AGB gelten für alle Verträge über die Nutzung der Plattform minijobgenie.de
            zwischen der Butterflies IT UG (haftungsbeschränkt), Hagenower Str. 73, 19061 Schwerin
            (nachfolgend &bdquo;Betreiber&ldquo;) und dem Nutzer. Es wird unterschieden zwischen
            jugendlichen Nutzern (Jobsuchende) und gewerblichen Nutzern (Arbeitgeber).
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">2. Leistungsbeschreibung</h2>
          <p className="text-gray-700 mb-2">
            Minijobgenie ist eine Vermittlungsplattform, die Jobsuchende und Arbeitgeber
            zusammenbringt. Die Plattform umfasst:
          </p>
          <ul className="list-disc list-inside mb-6 mt-2 text-gray-700 space-y-1">
            <li>Einen Video-Feed mit Kurzvideos von Arbeitgebern</li>
            <li>Ein Swipe-basiertes Matching-System zwischen Jobsuchenden und Arbeitgebern</li>
            <li>Eine Chat-Funktion nach erfolgtem Match</li>
            <li>Einen KI-gestützten Berufsfinder</li>
            <li>Ein Dashboard für Arbeitgeber zur Verwaltung von Stellenanzeigen, Videos und Kandidaten</li>
          </ul>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">3. Registrierung und Nutzerkonto</h2>
          <p className="text-gray-700 mb-2">
            Für die Nutzung ist eine Registrierung erforderlich. Bei der Registrierung sind wahrheitsgemäße
            Angaben zu machen. Minderjährige Nutzer unter 16 Jahren benötigen die Einwilligung eines
            Erziehungsberechtigten.
          </p>
          <p className="text-gray-700 mb-6">
            Jeder Nutzer darf nur ein Konto erstellen. Die Zugangsdaten sind vertraulich zu behandeln.
            Der Nutzer haftet für alle Aktivitäten, die über sein Konto vorgenommen werden.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">4. Kosten und Abonnements</h2>
          <div className="speed-line mb-4">
            <p className="text-gray-700">
              <strong>Für Jobsuchende:</strong> Die Nutzung der Plattform ist vollständig kostenlos.
            </p>
          </div>
          <div className="speed-line mb-4">
            <p className="text-gray-700">
              <strong>Für Arbeitgeber:</strong> Es stehen verschiedene Abonnement-Modelle zur Verfügung
              (Free, Starter, Professional, Enterprise). Die aktuellen Preise sind auf der{' '}
              <Link href="/preise" className="text-emerald-600 hover:underline">Preisseite</Link>{' '}
              einsehbar. Kostenpflichtige Abonnements werden monatlich abgerechnet.
            </p>
          </div>
          <p className="text-gray-700 mb-6">
            Die Zahlung erfolgt per PayPal (PayPal-Guthaben, Kreditkarte, SEPA-Lastschrift o.ä.) vor Leistungserbringung.
            Abonnements verlängern sich automatisch, sofern nicht vor Ablauf der Laufzeit gekündigt wird.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">5. Widerrufsbelehrung</h2>
          <p className="text-gray-700 mb-2">
            <strong>Widerrufsrecht:</strong> Gewerbliche Nutzer (Arbeitgeber) haben als Verbraucher das Recht,
            binnen 14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Widerrufsfrist beträgt
            14 Tage ab dem Tag des Vertragsschlusses.
          </p>
          <p className="text-gray-700 mb-2">
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Butterflies IT UG, Hagenower Str. 73,
            19061 Schwerin, E-Mail: kontakt@minijobgenie.de) mittels einer eindeutigen Erklärung
            über Ihren Entschluss informieren.
          </p>
          <p className="text-gray-700 mb-6">
            Das Widerrufsrecht erlischt bei digitalen Inhalten vorzeitig, wenn der Nutzer ausdrücklich
            zugestimmt hat, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen
            wird (§ 356 Abs. 5 BGB).
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">6. Pflichten der Nutzer</h2>
          <p className="text-gray-700 mb-2">Der Nutzer verpflichtet sich:</p>
          <ul className="list-disc list-inside mb-4 mt-2 text-gray-700 space-y-1">
            <li>Keine rechtswidrigen, beleidigenden oder jugendgefährdenden Inhalte zu veröffentlichen</li>
            <li>Keine falschen oder irreführenden Angaben zu machen</li>
            <li>Die Rechte Dritter (insbesondere Urheberrechte, Persönlichkeitsrechte) zu achten</li>
            <li>Die Plattform nicht für andere Zwecke als die bestimmungsgemäße Nutzung zu verwenden</li>
            <li>Keine automatisierten Zugriffe (Bots, Scraper) auf die Plattform durchzuführen</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Arbeitgeber stellen sicher, dass für alle in Videos gezeigten Personen eine Einwilligung
            zur Veröffentlichung vorliegt.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">7. Inhalte und Videos</h2>
          <p className="text-gray-700 mb-6">
            Arbeitgeber behalten die Urheberrechte an ihren hochgeladenen Videos. Mit dem Upload räumen sie
            dem Betreiber ein einfaches, nicht-exklusives Nutzungsrecht zur Anzeige der Videos auf der
            Plattform ein. Der Betreiber behält sich das Recht vor, Videos abzulehnen oder zu entfernen,
            die gegen diese AGB, geltendes Recht oder Jugendschutzbestimmungen verstoßen.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">8. Haftung</h2>
          <p className="text-gray-700 mb-2">
            Der Betreiber vermittelt lediglich den Kontakt zwischen Jobsuchenden und Arbeitgebern.
            Für das Zustandekommen eines Arbeitsvertrags wird keine Haftung übernommen.
          </p>
          <p className="text-gray-700 mb-2">
            Die Haftung des Betreibers ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit
            gesetzlich zulässig. Bei leichter Fahrlässigkeit haftet der Betreiber nur bei Verletzung
            wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den vorhersehbaren,
            vertragstypischen Schaden.
          </p>
          <p className="text-gray-700 mb-6">
            Der Betreiber übernimmt keine Haftung für die Richtigkeit der von Nutzern oder Arbeitgebern
            bereitgestellten Informationen. Die KI-gestützten Berufsempfehlungen sind unverbindlich
            und stellen keine Berufsberatung dar.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">9. Kündigung und Kontolöschung</h2>
          <p className="text-gray-700 mb-2">
            Jobsuchende können ihr Konto jederzeit löschen. Kostenpflichtige Arbeitgeber-Abonnements
            können zum Ende der jeweiligen Laufzeit gekündigt werden.
          </p>
          <p className="text-gray-700 mb-6">
            Der Betreiber behält sich das Recht vor, Nutzerkonten bei Verstoß gegen diese AGB zu sperren
            oder zu löschen. Bei Löschung werden personenbezogene Daten gemäß der{' '}
            <Link href="/datenschutz" className="text-emerald-600 hover:underline">Datenschutzerklärung</Link>{' '}
            behandelt.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">10. Jugendschutz</h2>
          <p className="text-gray-700 mb-6">
            Der Betreiber verpflichtet sich zu angemessenen Maßnahmen zum Schutz minderjähriger Nutzer.
            Dazu gehören die Moderation von Inhalten, die Meldung von unangemessenem Verhalten und
            die Möglichkeit, Nutzer zu blockieren. Chat-Nachrichten sind nur nach beidseitigem Match möglich.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">11. Datenschutz</h2>
          <p className="text-gray-700 mb-6">
            Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
            <Link href="/datenschutz" className="text-emerald-600 hover:underline">Datenschutzerklärung</Link>.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">12. Änderung der AGB</h2>
          <p className="text-gray-700 mb-6">
            Der Betreiber behält sich das Recht vor, diese AGB jederzeit anzupassen. Nutzer werden über
            Änderungen per E-Mail oder In-App-Benachrichtigung informiert. Die weitere Nutzung der Plattform
            nach Inkrafttreten der Änderungen gilt als Zustimmung.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">13. Anwendbares Recht und Gerichtsstand</h2>
          <p className="text-gray-700 mb-6">
            Es findet ausschließlich deutsches Recht Anwendung unter Ausschluss des UN-Kaufrechts.
            Gerichtsstand ist, soweit gesetzlich zulässig, Schwerin.
          </p>

          <p className="mt-10 text-sm text-gray-500 border-t border-emerald-100 pt-6">Stand: Februar 2026</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
