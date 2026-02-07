'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Banknote, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/minijobs', label: 'Minijobs' },
  { href: '/branchen', label: 'Branchen' },
  { href: '/fuer-jobsuchende', label: 'Für Jobsuchende' },
  { href: '/fuer-arbeitgeber', label: 'Für Arbeitgeber' },
  { href: '/ratgeber', label: 'Ratgeber' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Cash accent bar */}
      <div className="cash-bar fixed top-0 w-full z-[60]" />

      <nav className="fixed top-1 w-full bg-[#F0FDF4]/95 backdrop-blur-md z-50 border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <Banknote className="h-5 w-5 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">
                <span className="text-gray-900">Minijob</span>
                <span className="gradient-text-cash">genie</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="https://dashboard.ausbildungsgenie.de/login"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2"
              >
                Login
              </Link>
              <Link
                href="https://dashboard.ausbildungsgenie.de/register"
                className="rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2 text-sm font-semibold text-white hover:from-emerald-400 hover:to-green-500 transition-all shadow-sm hover:shadow-md"
              >
                Kostenlos starten
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#F0FDF4] border-t border-emerald-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2.5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-emerald-100" />
              <Link
                href="https://dashboard.ausbildungsgenie.de/login"
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-gray-600 px-3 py-2.5 font-medium"
              >
                Login
              </Link>
              <Link
                href="https://dashboard.ausbildungsgenie.de/register"
                onClick={() => setMobileOpen(false)}
                className="block text-center rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2.5 text-sm font-semibold text-white mt-2"
              >
                Kostenlos starten
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
