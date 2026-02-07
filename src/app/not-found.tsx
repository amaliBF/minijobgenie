import Link from 'next/link';
import { Banknote, Home, Search, BookOpen, Building2, ArrowLeft, CircleDollarSign } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F0FDF4] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 cash-dots opacity-30" />

      <div className="max-w-lg w-full text-center relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 rotate-6">
            <Banknote className="w-12 h-12 text-white -rotate-6" />
          </div>
        </div>

        {/* Badge */}
        <div className="cash-badge mx-auto w-fit mb-4">
          <CircleDollarSign className="h-3.5 w-3.5" />
          Fehler 404
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Seite nicht gefunden
        </h1>

        <p className="text-lg text-gray-600 mb-2">
          Dieser Minijob ist leider nicht mehr verfügbar – die Stelle wurde schon besetzt.
        </p>
        <p className="text-gray-500 mb-8">
          Aber keine Sorge, es gibt noch jede Menge andere Minijobs für dich!
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg shadow-emerald-200 mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <div className="border-t border-emerald-200 pt-8">
          <p className="text-sm text-gray-500 mb-4 font-medium">Vielleicht suchst du das hier:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/minijobs"
              className="glow-card flex items-center gap-3 p-3 rounded-xl group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Search className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Minijobs</div>
                <div className="text-xs text-gray-500">Nach Stadt suchen</div>
              </div>
            </Link>

            <Link
              href="/branchen"
              className="glow-card flex items-center gap-3 p-3 rounded-xl group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Building2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Branchen</div>
                <div className="text-xs text-gray-500">Jobs nach Bereich</div>
              </div>
            </Link>

            <Link
              href="/ratgeber"
              className="glow-card flex items-center gap-3 p-3 rounded-xl group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <BookOpen className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Ratgeber</div>
                <div className="text-xs text-gray-500">Tipps & Artikel</div>
              </div>
            </Link>

            <Link
              href="/"
              className="glow-card flex items-center gap-3 p-3 rounded-xl group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Home className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Startseite</div>
                <div className="text-xs text-gray-500">Minijobgenie.de</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
