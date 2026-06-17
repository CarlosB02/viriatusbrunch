'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const getNavLinks = (t, language) => [
  { name: t('navbar.inicio') || 'Início', href: language === 'en' ? '/en' : '/' },
  { name: t('navbar.menu') || 'Menu', href: language === 'en' ? '/en#menu' : '/#menu' },
  { name: t('navbar.galeria') || 'Galeria', href: language === 'en' ? '/en/gallery' : '/galeria' },
  { name: t('navbar.sobre_nos') || 'Sobre Nós', href: language === 'en' ? '/en/about' : '/sobre-nos' },
  { name: t('navbar.contactos') || 'Contactos', href: language === 'en' ? '/en/contacts' : '/contactos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const navLinks = getNavLinks(t, language);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Lock for Mobile Menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const LanguageSwitcher = () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginLeft: '10px' }}>
      <button 
        onClick={() => toggleLanguage('pt')}
        style={{ 
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '2px',
          borderRadius: '4px',
          transition: 'all 0.3s',
          opacity: language === 'pt' ? 1 : 0.5,
          transform: language === 'pt' ? 'scale(1.1)' : 'scale(1)',
          filter: language === 'pt' ? 'none' : 'grayscale(100%)',
          display: 'flex',
          alignItems: 'center'
        }}
        title="Português"
      >
        <Image 
          src="/assets/images/flag-pt.png" 
          alt="Português" 
          width={24} 
          height={16}
          style={{ borderRadius: '2px', objectFit: 'cover' }}
        />
      </button>
      
      <button 
        onClick={() => toggleLanguage('en')}
        style={{ 
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '2px',
          borderRadius: '4px',
          transition: 'all 0.3s',
          opacity: language === 'en' ? 1 : 0.5,
          transform: language === 'en' ? 'scale(1.1)' : 'scale(1)',
          filter: language === 'en' ? 'none' : 'grayscale(100%)',
          display: 'flex',
          alignItems: 'center'
        }}
        title="English"
      >
        <Image 
          src="/assets/images/flag-en.png" 
          alt="English" 
          width={24} 
          height={16}
          style={{ borderRadius: '2px', objectFit: 'cover' }}
        />
      </button>
    </div>
  );

  return (
    <nav
      aria-label="Navegação principal"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: isScrolled ? '16px' : '24px',
        paddingBottom: isScrolled ? '16px' : '24px',
        backgroundColor: isScrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(208,168,75,0.1)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Logo */}
      <div>
        <Link href="/" aria-label="Viriatus Brunch - Página Inicial">
          <Image
            src="/assets/images/viriatus-brunch-logo.png"
            alt="Viriatus Brunch Viseu - Logo"
            width={140}
            height={50}
            style={{ height: '50px', width: 'auto' }}
            priority
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul
        className="desktop-menu"
        style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              style={{
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '500',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <LanguageSwitcher />
        </li>
      </ul>

      {/* Mobile Toggle & Language Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div className="mobile-only" style={{ display: 'none' }}>
           <LanguageSwitcher />
        </div>
        <button
          className="mobile-toggle"
          style={{ 
            color: 'var(--primary)', 
            zIndex: 60, // Above the overlay
            position: 'relative'
          }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t('navbar.fechar_menu') || 'Fechar menu' : t('navbar.abrir_menu') || 'Abrir menu'}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(0,0,0,0.98)',
              backdropFilter: 'blur(15px)',
              zIndex: 55,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    fontSize: '1.8rem', 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-white)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Language Switcher in Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navLinks.length }}
              style={{ marginTop: '20px' }}
            >
              <LanguageSwitcher />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

