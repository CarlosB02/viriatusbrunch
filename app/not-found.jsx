'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/constants/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  const { language } = useLanguage();

  // Bulletproof extraction from translations with safe default fallback
  const lang = language === 'en' ? 'en' : 'pt';
  const notFoundData = translations[lang]?.not_found || translations['pt'].not_found;

  const badge = notFoundData?.badge || (lang === 'en' ? 'ERROR 404' : 'ERRO 404');
  const title = notFoundData?.title || (lang === 'en' ? "This page isn't on the menu!" : 'Esta página não está no menu!');
  const subtitle = notFoundData?.subtitle || (lang === 'en' ? "Maybe we changed the recipe or the page was removed. Don’t stay hungry, go back to the homepage." : 'Talvez tenhamos mudado a receita ou a página foi removida. Não fiques com fome, volta para o início.');
  const ctaHome = notFoundData?.cta_home || (lang === 'en' ? 'BACK TO HOME' : 'VOLTAR AO INÍCIO');
  const ctaMenu = notFoundData?.cta_menu || (lang === 'en' ? 'VIEW MENU' : 'VER O MENU');

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '160px 20px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-dark)',
        }}
      >
        {/* Abstract creative background elements */}
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
            top: '20%',
            left: '10%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '650px', position: 'relative', zIndex: 2 }}>
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '0.9rem',
              letterSpacing: '3px',
              color: 'var(--primary)',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '15px',
            }}
          >
            {badge}
          </motion.span>

          {/* Golden Big 404 Number */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 100 }}
            style={{
              fontSize: 'clamp(6rem, 15vw, 11rem)',
              fontFamily: 'var(--font-heading)',
              color: 'var(--primary)',
              lineHeight: 0.8,
              marginBottom: '20px',
              textShadow: '0 0 30px var(--primary-glow)',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
            }}
          >
            404
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-white)',
              marginBottom: '20px',
              letterSpacing: '1px',
              lineHeight: 1.2,
            }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--text-gray)',
              fontFamily: 'var(--font-body)',
              marginBottom: '45px',
              lineHeight: 1.6,
              maxWidth: '520px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {subtitle}
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '16px 35px',
                backgroundColor: 'var(--primary)',
                color: 'var(--bg-dark)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                letterSpacing: '2px',
                borderRadius: '4px',
                fontWeight: '600',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid var(--primary)',
                textTransform: 'uppercase',
                boxShadow: '0 4px 15px rgba(208, 168, 75, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-white)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--bg-dark)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(208, 168, 75, 0.25)';
              }}
            >
              {ctaHome}
            </Link>

            <Link
              href="/#menu"
              style={{
                display: 'inline-block',
                padding: '16px 35px',
                backgroundColor: 'transparent',
                color: 'var(--text-white)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                letterSpacing: '2px',
                borderRadius: '4px',
                fontWeight: '600',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = 'var(--text-white)';
              }}
            >
              {ctaMenu}
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
