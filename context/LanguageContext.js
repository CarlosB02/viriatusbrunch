'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/constants/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt');
  const [showModal, setShowModal] = useState(false);

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
    setLanguage(newLang);
    localStorage.setItem('viriatus_lang', newLang);
    document.documentElement.lang = newLang === 'pt' ? 'pt-PT' : 'en-US';
    setShowModal(false);
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
