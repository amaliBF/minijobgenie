'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-amber-600" />
            <span className="font-bold text-xl">Minijobgenie</span>
          </Link>
          <div className="hidden md:flex items-center gap-5">
            <Link href="/minijobs" className="text-sm text-gray-600 hover:text-gray-900">
              Minijobs
            </Link>
            <Link href="/branchen" className="text-sm text-gray-600 hover:text-gray-900">
              Branchen
            </Link>
            <Link href="/fuer-jobsuchende" className="text-sm text-gray-600 hover:text-gray-900">
              F&uuml;r Jobsuchende
            </Link>
            <Link href="/fuer-arbeitgeber" className="text-sm text-gray-600 hover:text-gray-900">
              F&uuml;r Arbeitgeber
            </Link>
            <Link href="/ratgeber" className="text-sm text-gray-600 hover:text-gray-900">
              Ratgeber
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://dashboard.minijobgenie.de/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              href="https://dashboard.minijobgenie.de"
              className="rounded-full bg-amber-600 px-5 py-2 text-sm font-medium text-white hover:bg-amber-700 transition-colors"
            >
              F&uuml;r Arbeitgeber
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
