'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer
      style={{
        background: 'linear-gradient(to top, #073523, #050505)',
        padding: '80px 5% 40px',
        borderTop: '1px solid rgba(208,168,75,0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px',
        }}
      >
        {/* Brand */}
        <div>
          <Image
            src="/assets/images/viriatus-brunch-logo.png"
            alt={t('footer.logo_alt') || "Viriatus Brunch Viseu - Logo Rodapé"}
            width={160}
            height={60}
            style={{ height: '60px', width: 'auto', marginBottom: '20px' }}
          />
          <p style={{ color: '#d1d1d1', fontSize: '0.95rem', lineHeight: '1.8' }}>
            {t('footer.tagline') || 'Inspirado em Viseu, criado para todos os dias. Sabores frescos, momentos simples.'}
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label={t('footer.nav_aria') || "Links do rodapé"}>
          <h3
            style={{
              fontSize: '1.2rem',
              marginBottom: '25px',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'var(--font-body)',
              fontWeight: '600',
              marginTop: '0px'
            }}
          >
            {t('footer.links_title') || 'Tudo sobre nós'}
          </h3>
          <ul style={{ display: 'grid', gap: '15px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Link href={language === 'en' ? "/en#menu" : "/#menu"} style={{ color: '#d1d1d1', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {t('footer.back_to_menu') || 'De volta ao Menu'} <ArrowUp size={14} style={{ color: 'var(--primary)' }} />
              </Link>
            </li>
            <li><Link href={language === 'en' ? "/en/about" : "/sobre-nos"} style={{ color: '#d1d1d1' }}>{t('navbar.sobre_nos')}</Link></li>
            <li><Link href={language === 'en' ? "/en/contacts" : "/contactos"} style={{ color: '#d1d1d1' }}>{t('navbar.contactos')}</Link></li>
            <li><Link href={language === 'en' ? "/en/gallery" : "/galeria"} style={{ color: '#d1d1d1' }}>{t('navbar.galeria')}</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <address
          id="contactos"
          aria-label={t('footer.contact_aria') || "Contactos e reservas"}
          style={{ fontStyle: 'normal' }}
        >
          <h3
            style={{
              fontSize: '1.2rem',
              marginBottom: '25px',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'var(--font-body)',
              fontWeight: '600',
              marginTop: '0px'
            }}
          >
            {t('footer.reserve_title') || 'Reserva já'}
          </h3>
          <ul style={{ display: 'grid', gap: '20px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#d1d1d1' }}>
              <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} aria-hidden="true" />
              <a href="tel:+351963546006">963 546 006</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#d1d1d1' }}>
              <Instagram size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} aria-hidden="true" />
              <a
                href="https://instagram.com/viriatusbrunch.viseu"
                target="_blank"
                rel="noopener noreferrer"
              >
                viriatusbrunch.viseu
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', color: '#d1d1d1' }}>
              <MapPin size={20} style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} aria-hidden="true" />
              <a
                href="https://maps.google.com/?q=Rua+Gaspar+Barreiros+24+Viseu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#d1d1d1' }}
              >
                Rua Gaspar Barreiros 24, Viseu 3500-222
              </a>
            </li>
          </ul>
        </address>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#d1d1d1', fontSize: '0.8rem' }}>
          © {year}{' '}
          <Link href={language === 'en' ? "/en#menu" : "#menu"} style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
            Viriatus Brunch
          </Link>
          . {t('footer.rights')} | {t('footer.developed_by') || 'Desenvolvido por'}{' '}
          <Link
            href="https://enimble.pt"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)', fontWeight: 'bold' }}
          >
            E-Nimble
          </Link>
        </p>
      </div>
    </footer>
  );
}
