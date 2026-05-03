'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

// Placeholder gallery images — substituir pelos caminhos reais em /public/assets/images/gallery/
const images = [
  { id: 1, src: '/assets/images/gallery/BOWL ACAI 2.jpg', alt: 'Bowl de Açaí', category: 'MENUS' },
  { id: 2, src: '/assets/images/gallery/CHIPS BATATA DOCE.jpg', alt: 'Chips de Batata Doce', category: 'MENUS' },
  { id: 3, src: '/assets/images/gallery/ENGLISH BREAKFAST.jpg', alt: 'English Breakfast', category: 'MENUS' },
  { id: 4, src: '/assets/images/gallery/GAMBAS A BRAS.jpg', alt: 'Gambas à Brás', category: 'MENUS' },
  { id: 5, src: '/assets/images/gallery/HAMBURGER VIRIATUS (1).jpg', alt: 'Hambúrguer Viriatus', category: 'MENUS' },
  { id: 6, src: '/assets/images/gallery/LATTE.jpg', alt: 'Latte Art', category: 'BEBIDAS' },
  { id: 7, src: '/assets/images/gallery/MASSA NERO.jpg', alt: 'Massa Nero', category: 'MENUS' },
  { id: 8, src: '/assets/images/gallery/MASSA VIRIATUS.jpg', alt: 'Massa Viriatus', category: 'MENUS' },
  { id: 9, src: '/assets/images/gallery/MENU BRUNCH ROSSIO.jpg', alt: 'Menu Brunch Rossio', category: 'MENUS' },
  { id: 10, src: '/assets/images/gallery/MENU BRUNCH VIRIATUS.jpg', alt: 'Menu Brunch Viriatus', category: 'MENUS' },
  { id: 11, src: '/assets/images/gallery/OVOS ROTOS 2.jpg', alt: 'Ovos Rotos', category: 'MENUS' },
  { id: 12, src: '/assets/images/gallery/PANQUECA PISTACHIO.jpg', alt: 'Panqueca de Pistachio', category: 'SOBREMESAS' },
  { id: 13, src: '/assets/images/gallery/SALADA CESAR.jpg', alt: 'Salada César', category: 'MENUS' },
  { id: 14, src: '/assets/images/gallery/SALADA GAMBAS.jpg', alt: 'Salada de Gambas', category: 'MENUS' },
  { id: 15, src: '/assets/images/gallery/SOPA.jpg', alt: 'Sopa do Dia', category: 'MENUS' },
  { id: 16, src: '/assets/images/gallery/SUMO DO DIA (1).jpg', alt: 'Sumo do Dia', category: 'BEBIDAS' },
  { id: 17, src: '/assets/images/gallery/SUMO DO DIA 2.jpg', alt: 'Sumo Natural', category: 'BEBIDAS' },
  { id: 18, src: '/assets/images/gallery/TOSTA MISTA.jpg', alt: 'Tosta Mista', category: 'MENUS' },
  { id: 25, src: '/assets/images/gallery/image00001.jpeg', alt: 'Espaço 1', category: 'ESPAÇO' },
  { id: 26, src: '/assets/images/gallery/image00002.jpeg', alt: 'Espaço 2', category: 'ESPAÇO' },
  { id: 27, src: '/assets/images/gallery/image00003.jpeg', alt: 'Espaço 3', category: 'ESPAÇO' },
  { id: 28, src: '/assets/images/gallery/image00004.jpeg', alt: 'Espaço 4', category: 'ESPAÇO' },
  { id: 29, src: '/assets/images/gallery/image00005.jpeg', alt: 'Espaço 5', category: 'ESPAÇO' },
  { id: 30, src: '/assets/images/gallery/image00006.jpeg', alt: 'Espaço 6', category: 'ESPAÇO' },
  { id: 31, src: '/assets/images/gallery/image00007.jpeg', alt: 'Espaço 7', category: 'ESPAÇO' },
  { id: 32, src: '/assets/images/gallery/image00008.jpeg', alt: 'Espaço 8', category: 'ESPAÇO' },
  { id: 33, src: '/assets/images/gallery/image00009.jpeg', alt: 'Espaço 9', category: 'ESPAÇO' },
  { id: 34, src: '/assets/images/gallery/image00521.jpeg', alt: 'Espaço 10', category: 'ESPAÇO' },
];

import { useLanguage } from '@/context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('TODAS');
  const [visibleCount, setVisibleCount] = useState(6);

  const tabs = [
    { name: t('gallery.tabs.todas'), value: 'TODAS' },
    { name: t('gallery.tabs.menus'), value: 'MENUS' },
    { name: t('gallery.tabs.bebidas'), value: 'BEBIDAS' },
    { name: t('gallery.tabs.sobremesas'), value: 'SOBREMESAS' },
    { name: t('gallery.tabs.espaco'), value: 'ESPAÇO' },
  ];

  const filtered =
    activeTab === 'TODAS' ? images : images.filter((img) => img.category === activeTab);

  const displayedImages = filtered.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Reset count when tab changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeTab]);

  return (
    <section id="galeria" aria-label={t('gallery.aria_label')} style={{ paddingTop: '20px' }}>
      <h2 className="section-title">{t('gallery.title')}</h2>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label={t('gallery.aria_tabs') || "Categorias da galeria"}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '40px',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={activeTab === tab.value}
            onClick={() => setActiveTab(tab.value)}
            style={{
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '0.8rem',
              fontWeight: '600',
              letterSpacing: '1px',
              backgroundColor:
                activeTab === tab.value
                  ? 'rgba(208,168,75,0.2)'
                  : 'rgba(255,255,255,0.05)',
              color: activeTab === tab.value ? 'var(--primary)' : 'var(--text-white)',
              border:
                activeTab === tab.value
                  ? '1px solid var(--primary)'
                  : '1px solid transparent',
              transition: 'all 0.3s',
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        role="tabpanel"
        className="gallery-grid"
      >
        <AnimatePresence mode="popLayout">
          {displayedImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load more */}
      {visibleCount < filtered.length && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={loadMore}
            aria-label={t('gallery.aria_more')}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(208,168,75,0.1)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Plus size={24} aria-hidden="true" />
          </motion.button>
          <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginTop: '10px' }}>
            {t('gallery.load_more')}
          </p>
        </div>
      )}
    </section>
  );
}
