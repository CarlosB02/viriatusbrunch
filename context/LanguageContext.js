'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { translations } from '@/constants/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Load saved language or detect browser language
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hasEnParam = params.get('lang') === 'en' || window.location.pathname.startsWith('/en');

    if (hasEnParam) {
      setLanguage('en');
      localStorage.setItem('viriatus_lang', 'en');
      document.documentElement.lang = 'en-US';
      setShowModal(false);
      return;
    }

    const savedLang = localStorage.getItem('viriatus_lang');
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
      setLanguage(savedLang);
      setShowModal(false);
    } else {
      setShowModal(true);
      // Optional: detect browser language but still show modal
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLanguage('en');
      }
    }
  }, []);

  const toggleLanguage = (lang) => {
    const newLang = lang || (language === 'pt' ? 'en' : 'pt');
    if (newLang === language) {
      setShowModal(false);
      return;
    }
    
    setLanguage(newLang);
    localStorage.setItem('viriatus_lang', newLang);
    document.documentElement.lang = newLang === 'pt' ? 'pt-PT' : 'en-US';
    setShowModal(false);

    let newPath = pathname;
    if (newLang === 'en') {
      if (pathname === '/') newPath = '/en';
      else if (pathname === '/galeria') newPath = '/en/gallery';
      else if (pathname === '/sobre-nos') newPath = '/en/about';
      else if (pathname === '/contactos') newPath = '/en/contacts';
    } else {
      if (pathname === '/en') newPath = '/';
      else if (pathname === '/en/gallery') newPath = '/galeria';
      else if (pathname === '/en/about') newPath = '/sobre-nos';
      else if (pathname === '/en/contacts') newPath = '/contactos';
    }
    
    if (newPath !== pathname) {
      router.push(newPath);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to PT if key missing in EN
        let fallbackValue = translations['pt'];
        for (const fk of keys) {
            if (fallbackValue && fallbackValue[fk]) {
                fallbackValue = fallbackValue[fk];
            } else {
                return key; // Return the key as last resort
            }
        }
        return fallbackValue;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, showModal, setShowModal }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
