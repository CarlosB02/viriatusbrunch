'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      aria-label={t('hero.aria_label') || "Secção principal Viriatus Brunch"}
      style={{
        height: '100vh',
        width: '100%',
        maxWidth: 'none',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 0,
        overflow: 'hidden',
      }}
    >
      {/* Background image via next/image for performance */}
      <Image
        src="/assets/images/hero-bg.jpeg"
        alt={t('hero.bg_alt') || "Viriatus Brunch Viseu - Mesa de brunch com pratos variados"}
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
        sizes="100vw"
      />
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.4) 50%, #000000 100%)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontSize: '1.2rem',
            color: 'var(--text-white)',
            marginBottom: '10px',
            fontWeight: '300',
            fontFamily: 'var(--font-body)',
          }}
        >
          {t('hero.subtitle')}
        </p>
        <h1
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)',
            color: 'var(--primary)',
          }}
        >
          Viseu
        </h1>
      </div>

      {/* Scroll hint */}
      <a
        href="#menu"
        aria-label={t('hero.aria_menu') || "Ir para o menu"}
        style={{
          position: 'absolute',
          bottom: '40px',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
        }}
      >
        <p
          style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--primary)',
          }}
        >
          {t('hero.cta_scroll') || 'Descobrir'}
        </p>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'var(--primary)',
          }}
        />
      </a>
    </section>
  );
}
