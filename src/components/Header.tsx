import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const NAV_LINKS = [
  { label: 'Como funciona', href: '#solucao' },
  { label: 'Para quem', href: '#prova-social' },
  { label: 'Dúvidas', href: '#faq' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold text-brand-800">
          Servi<span className="text-whatsapp">Zap</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-brand-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lista-espera"
            onClick={() => trackEvent({ name: 'cta_click', properties: { location: 'header' } })}
            className="rounded-full bg-whatsapp px-5 py-2 text-sm font-semibold text-white hover:bg-whatsapp-dark transition-colors"
          >
            Entrar na lista
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-brand-700"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lista-espera"
            onClick={() => {
              setMenuOpen(false);
              trackEvent({ name: 'cta_click', properties: { location: 'header_mobile' } });
            }}
            className="rounded-full bg-whatsapp px-5 py-2.5 text-center font-semibold text-white"
          >
            Entrar na lista
          </a>
        </nav>
      )}
    </header>
  );
}
