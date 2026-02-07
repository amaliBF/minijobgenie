import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Minijobgenie',
  description: 'Datenschutzerklärung von Minijobgenie.de – Informationen zum Umgang mit personenbezogenen Daten.',
  alternates: {
    canonical: '/datenschutz',
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#F0FDF4]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 cash-dots opacity-10" />
        <div className="max-w-3xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">Datenschutz</span>
          </nav>
          <div className="cash-badge mb-6 w-fit">
            <Shield className="h-4 w-4" />
            <span>DSGVO-konform</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Datenschutzerklärung</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="glow-card rounded-2xl p-8 sm:p-12">
          <p className="mb-6 text-lg text-gray-700">
            <strong>minijobgenie.de</strong> ist eine Marke der Butterflies IT UG (haftungsbeschränkt).
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">1. Verantwortlicher</h2>
          <div className="speed-line mb-6">
            <p className="text-gray-700">
              Butterflies IT UG (haftungsbeschränkt)<br />
              Vertreten durch: Andreas Mali<br />
              Hagenower Str. 73, 19061 Schwerin<br />
              E-Mail: <a href="mailto:kontakt@minijobgenie.de" className="text-emerald-600 hover:underline">kontakt@minijobgenie.de</a>
            </p>
          </div>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">2. Übersicht der Verarbeitungen</h2>
          <p className="text-gray-700 mb-2">
            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung
            zusammen und verweist auf die betroffenen Personen.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Arten der verarbeiteten Daten:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 mt-1 text-gray-700 space-y-1">
            <li>Bestandsdaten (z.B. Namen, Adressen, Geburtsdatum)</li>
            <li>Inhaltsdaten (z.B. Profilinformationen, Videos, Chat-Nachrichten)</li>
            <li>Kontaktdaten (z.B. E-Mail-Adressen)</li>
            <li>Standortdaten (z.B. PLZ, Stadt für regionale Suche)</li>
            <li>Meta-/Kommunikationsdaten (z.B. IP-Adressen)</li>
            <li>Nutzungsdaten (z.B. besuchte Seiten, Swipe-Verhalten, Zugriffszeit)</li>
            <li>Zahlungsdaten (z.B. bei PayPal-Transaktionen, nur für Betriebe)</li>
          </ul>
          <p className="text-gray-700">
            <strong>Kategorien betroffener Personen:</strong> Jobsuchende, Arbeitgeber, Interessenten.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Zwecke der Verarbeitung:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 mt-1 text-gray-700 space-y-1">
            <li>Erbringung der Matching-Plattform und Kundenservice</li>
            <li>Bereitstellung des Video-Feeds und Matching-Systems</li>
            <li>Chat-Kommunikation zwischen gematchten Nutzern und Arbeitgebern</li>
            <li>KI-gestützte Berufsempfehlungen</li>
            <li>Kontaktanfragen und Kommunikation</li>
            <li>Sicherheitsmaßnahmen und Jugendschutz</li>
          </ul>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">3. Rechtsgrundlagen</h2>
          <p className="text-gray-700 mb-2">
            Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir
            personenbezogene Daten verarbeiten:
          </p>
          <ul className="list-disc list-inside mb-4 mt-2 text-gray-700 space-y-1">
            <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung gegeben.</li>
            <li><strong>Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</strong> – Verarbeitung ist für die Erfüllung eines Vertrags erforderlich.</li>
            <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c DSGVO)</strong> – Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.</li>
            <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</strong> – Verarbeitung ist zur Wahrung berechtigter Interessen erforderlich.</li>
          </ul>
          <p className="text-gray-700 mb-6">
            <strong>Besonderer Hinweis zu minderjährigen Nutzern:</strong> Bei Nutzern unter 16 Jahren ist die
            Einwilligung der Erziehungsberechtigten gemäß Art. 8 DSGVO erforderlich. Wir fordern diese
            Einwilligung bei der Registrierung ein.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">4. Sicherheitsmaßnahmen</h2>
          <p className="text-gray-700 mb-2">
            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik,
            der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
            sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und
            Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem
            Risiko angemessenes Schutzniveau zu gewährleisten.
          </p>
          <p className="text-gray-700 mb-6">
            Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit
            von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs,
            der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Die personenbezogenen
            Daten werden über eine SSL-verschlüsselte Verbindung übertragen. Passwörter werden ausschließlich
            verschlüsselt (gehasht) gespeichert.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">5. Datenverarbeitung bei Registrierung und Nutzung</h2>
          <div className="speed-line mb-4">
            <p className="text-gray-700">
              <strong>Für Jugendliche (Jobsuchende):</strong><br />
              Bei der Registrierung werden folgende Daten erhoben: E-Mail-Adresse, Passwort (verschlüsselt gespeichert),
              Geburtsdatum, Standort (PLZ/Stadt). Optional: Name, Interessen, Stärken, bevorzugte Berufsfelder,
              Profilbild/Video.
            </p>
          </div>
          <div className="speed-line mb-4">
            <p className="text-gray-700">
              <strong>Für Betriebe:</strong><br />
              Firmenname, Ansprechpartner, E-Mail-Adresse, Passwort (verschlüsselt), Firmenadresse,
              Branche, Logo. Optional: Beschreibungstexte, Videos von Mitarbeitern, Stellenanzeigen.
            </p>
          </div>
          <p className="text-gray-700 mb-2">
            <strong>Zweck:</strong> Bereitstellung des Benutzerkontos, Matching zwischen Jobsuchenden und Arbeitgebern,
            Anzeige im Video-Feed, Chat-Kommunikation nach erfolgtem Match.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Speicherdauer:</strong> Bis zur Löschung des Kontos durch den Nutzer oder auf Anfrage.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">6. Video-Inhalte</h2>
          <p className="text-gray-700 mb-2">
            Betriebe können Kurzvideos (30–90 Sekunden) hochladen, die echte Mitarbeiter bei der Arbeit zeigen.
            Diese Videos werden auf unseren Servern gespeichert und im Feed der Nutzer angezeigt.
            Videos werden vor der Veröffentlichung auf Qualitäts- und Jugendschutzkriterien geprüft.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. a DSGVO
            (Einwilligung der im Video gezeigten Personen).
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">7. Matching und Swipe-Daten</h2>
          <p className="text-gray-700 mb-2">
            Wir speichern Swipe-Entscheidungen (Like/Pass) und daraus resultierende Matches, um die
            Kernfunktionalität der Plattform bereitzustellen. Diese Daten werden zur Verbesserung
            der Empfehlungen verwendet.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">8. KI-Berufsfinder</h2>
          <p className="text-gray-700 mb-2">
            Unser KI-gestützter Berufsfinder stellt Nutzern Fragen zu Interessen und Stärken und
            schlägt passende Minijobs vor. Die Eingaben werden zur Erstellung der Empfehlung
            verarbeitet und im Nutzerkonto gespeichert.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
          </p>
          <p className="text-gray-700 mb-6">
            Es findet keine automatisierte Entscheidungsfindung im Sinne des Art. 22 DSGVO statt.
            Die KI gibt lediglich unverbindliche Empfehlungen.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">9. Zahlungsabwicklung</h2>
          <p className="text-gray-700 mb-2">
            Die Zahlungsabwicklung für Betriebe-Abonnements erfolgt über PayPal. Bei Nutzung von PayPal werden
            Zahlungsdaten direkt an PayPal übermittelt. Es gelten die{' '}
            <a href="https://www.paypal.com/de/legalhub/privacy-full" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
              Datenschutzbestimmungen von PayPal
            </a>.
            Für Nutzer ist die Plattform kostenlos; es werden keine Zahlungsdaten erhoben.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">10. Kontaktformular und E-Mail-Kontakt</h2>
          <p className="text-gray-700 mb-2">
            Bei Nutzung des Kontaktformulars werden Ihre Daten (Name, E-Mail, Nachricht) ausschließlich zur
            Bearbeitung Ihrer Anfrage verarbeitet.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Speicherdauer:</strong> Anfragen werden nach Abschluss der Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">11. Hosting und Serverlogfiles</h2>
          <p className="text-gray-700 mb-2">
            Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
            die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann
            es sich v.a. um IP-Adressen, Meta- und Kommunikationsdaten, Websitezugriffe und sonstige Daten handeln.
          </p>
          <p className="text-gray-700 mb-6">
            Der Einsatz des Hosters erfolgt zum Zweck der Vertragserfüllung gegenüber unseren potenziellen und
            bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
            effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">12. Cookies</h2>
          <p className="text-gray-700 mb-2">
            Wir setzen technisch notwendige Cookies ein, um die Funktionalität der Website zu gewährleisten
            (z.B. Session-Cookies für den Login-Bereich, JWT-Tokens für die Authentifizierung).
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
          <p className="text-gray-700 mb-6">
            Tracking-Cookies oder Marketing-Cookies werden nur mit ausdrücklicher Einwilligung gesetzt.
          </p>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">13. Ihre Rechte als betroffene Person</h2>
          <p className="text-gray-700 mb-2">Ihnen stehen folgende Rechte zu:</p>
          <ul className="list-disc list-inside mb-4 mt-2 text-gray-700 space-y-1">
            <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten.</li>
            <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht auf Berichtigung unrichtiger Daten.</li>
            <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie haben das Recht auf Löschung Ihrer Daten (&bdquo;Recht auf Vergessenwerden&ldquo;).</li>
            <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen.</li>
            <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem gängigen Format zu erhalten.</li>
            <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung zu widersprechen.</li>
            <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
            <li><strong>Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
          </ul>
          <div className="speed-line mb-6">
            <p className="text-gray-700">
              Zuständige Aufsichtsbehörde für Mecklenburg-Vorpommern:<br />
              Der Landesbeauftragte für Datenschutz und Informationsfreiheit Mecklenburg-Vorpommern<br />
              Werderstraße 74a, 19055 Schwerin<br />
              <a href="https://www.datenschutz-mv.de" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">www.datenschutz-mv.de</a>
            </p>
          </div>

          <h2 className="cash-divider text-xl font-bold text-gray-900 mt-10 mb-4">14. Änderung dieser Datenschutzerklärung</h2>
          <p className="text-gray-700 mb-6">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
            Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch
            gilt dann die neue Datenschutzerklärung.
          </p>

          <p className="mt-10 text-sm text-gray-500 border-t border-emerald-100 pt-6">Stand: Februar 2026</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
