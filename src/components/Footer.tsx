import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 text-white mb-3">
              <Sparkles className="h-5 w-5 text-amber-400" />
              <span className="font-bold">Minijobgenie</span>
            </div>
            <p className="text-sm mb-4">
              Die Plattform f&uuml;r Minijobs, 538&euro;-Jobs und Nebenjobs. Finde per Swipe-Matching den perfekten Nebenjob oder die ideale Aushilfe f&uuml;r dein Unternehmen.
            </p>
            <p className="text-sm mb-4">
              <a href="mailto:kontakt@minijobgenie.de" className="hover:text-white transition-colors">kontakt@minijobgenie.de</a>
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/minijobgenie" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://tiktok.com/@minijobgenie" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.44V13a8.27 8.27 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z"/></svg>
              </a>
              <a href="https://youtube.com/@minijobgenie" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Beliebte Branchen */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Beliebte Branchen</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/branchen/gastronomie" className="hover:text-white transition-colors">Gastronomie</Link></li>
              <li><Link href="/branchen/einzelhandel" className="hover:text-white transition-colors">Einzelhandel</Link></li>
              <li><Link href="/branchen/lager-logistik" className="hover:text-white transition-colors">Lager &amp; Logistik</Link></li>
              <li><Link href="/branchen/lieferung-kurier" className="hover:text-white transition-colors">Lieferung &amp; Kurier</Link></li>
              <li><Link href="/branchen/buero-verwaltung" className="hover:text-white transition-colors">B&uuml;ro &amp; Verwaltung</Link></li>
              <li><Link href="/branchen/events-promotion" className="hover:text-white transition-colors">Events &amp; Promotion</Link></li>
              <li><Link href="/branchen/reinigung" className="hover:text-white transition-colors">Reinigung</Link></li>
              <li><Link href="/branchen/nachhilfe" className="hover:text-white transition-colors">Nachhilfe</Link></li>
              <li><Link href="/branchen/pflege" className="hover:text-white transition-colors">Pflege</Link></li>
              <li><Link href="/branchen/fitness-sport" className="hover:text-white transition-colors">Fitness &amp; Sport</Link></li>
              <li><Link href="/branchen" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">Alle Branchen &rarr;</Link></li>
            </ul>
          </div>

          {/* Ratgeber */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Ratgeber &amp; Tipps</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/ratgeber/minijob-steuern" className="hover:text-white transition-colors">Minijob Steuern</Link></li>
              <li><Link href="/ratgeber/538-euro-grenze" className="hover:text-white transition-colors">538&euro; Grenze erkl&auml;rt</Link></li>
              <li><Link href="/ratgeber/krankenversicherung-minijob" className="hover:text-white transition-colors">Krankenversicherung Minijob</Link></li>
              <li><Link href="/ratgeber/minijob-neben-studium" className="hover:text-white transition-colors">Minijob neben Studium</Link></li>
              <li><Link href="/ratgeber/minijob-neben-hauptjob" className="hover:text-white transition-colors">Minijob neben Hauptjob</Link></li>
              <li><Link href="/ratgeber/minijob-rechte-pflichten" className="hover:text-white transition-colors">Rechte &amp; Pflichten</Link></li>
              <li><Link href="/ratgeber/minijob-vertrag" className="hover:text-white transition-colors">Minijob Arbeitsvertrag</Link></li>
              <li><Link href="/ratgeber/minijob-kuendigung" className="hover:text-white transition-colors">K&uuml;ndigung Minijob</Link></li>
              <li><Link href="/ratgeber" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">Alle Ratgeber &rarr;</Link></li>
            </ul>
          </div>

          {/* Minijobs nach Stadt */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Minijobs nach Stadt</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/minijobs/berlin" className="hover:text-white transition-colors">Jobs Berlin</Link></li>
              <li><Link href="/minijobs/hamburg" className="hover:text-white transition-colors">Jobs Hamburg</Link></li>
              <li><Link href="/minijobs/muenchen" className="hover:text-white transition-colors">Jobs M&uuml;nchen</Link></li>
              <li><Link href="/minijobs/koeln" className="hover:text-white transition-colors">Jobs K&ouml;ln</Link></li>
              <li><Link href="/minijobs/frankfurt" className="hover:text-white transition-colors">Jobs Frankfurt</Link></li>
              <li><Link href="/minijobs/stuttgart" className="hover:text-white transition-colors">Jobs Stuttgart</Link></li>
              <li><Link href="/minijobs/duesseldorf" className="hover:text-white transition-colors">Jobs D&uuml;sseldorf</Link></li>
              <li><Link href="/minijobs/leipzig" className="hover:text-white transition-colors">Jobs Leipzig</Link></li>
              <li><Link href="/minijobs/dortmund" className="hover:text-white transition-colors">Jobs Dortmund</Link></li>
              <li><Link href="/minijobs/hannover" className="hover:text-white transition-colors">Jobs Hannover</Link></li>
              <li><Link href="/minijobs" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">Alle St&auml;dte &rarr;</Link></li>
            </ul>
          </div>

          {/* Minijobgenie */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Minijobgenie</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/so-funktionierts" className="hover:text-white transition-colors">So funktioniert&apos;s</Link></li>
              <li><Link href="/fuer-arbeitgeber" className="hover:text-white transition-colors">F&uuml;r Arbeitgeber</Link></li>
              <li><Link href="/fuer-jobsuchende" className="hover:text-white transition-colors">F&uuml;r Jobsuchende</Link></li>
              <li><Link href="/preise" className="hover:text-white transition-colors">Preise</Link></li>
              <li><Link href="/vorteile" className="hover:text-white transition-colors">Vorteile</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link href="https://dashboard.minijobgenie.de/login" className="hover:text-white transition-colors">Arbeitgeber-Login</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
            </div>
            <div className="text-sm text-center">
              &copy; {new Date().getFullYear()} Minijobgenie &ndash; Butterflies IT UG (haftungsbeschr&auml;nkt). Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
