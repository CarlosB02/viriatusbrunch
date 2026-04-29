'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Leaf, MapPin, Coffee } from 'lucide-react';

const values = [
  {
    icon: <Heart size={32} />,
    title: 'Paixão pelo Sabor',
    description: 'Cada prato é uma obra de arte, criada com amor e dedicação.',
  },
  {
    icon: <Leaf size={32} />,
    title: 'Frescura Local',
    description: 'Privilegiamos ingredientes da nossa região de Viseu para garantir a máxima qualidade.',
  },
  {
    icon: <Coffee size={32} />,
    title: 'Experiência Brunch',
    description: 'Transformamos uma refeição num momento de puro prazer e descontração.',
  },
];

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const valuesData = [
    { icon: <Heart size={32} />, key: 0 },
    { icon: <Leaf size={32} />, key: 1 },
    { icon: <Coffee size={32} />, key: 2 },
  ];

  return (
    <section id="sobre" aria-label={t('about.aria_label')} style={{ padding: '100px 0 30px 0', overflow: 'hidden' }}>
      <h2 className="section-title">{t('about.title')}</h2>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: 'var(--primary)',
              marginBottom: '30px',
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.2'
            }}
          >
            {t('about.hero_title')}
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '25px', lineHeight: '1.8', opacity: 0.9 }}>
            {t('about.text1')}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--primary)' }}>
            <MapPin size={24} />
            <span style={{ fontWeight: '500', letterSpacing: '1px' }}>{t('about.location')}</span>
          </div>
        </motion.div>

        {/* Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            position: 'relative', 
            height: '400px', 
            borderRadius: '30px', 
            overflow: 'hidden', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            width: '100%'
          }}
        >
          <Image
            src="/assets/images/about.jpeg"
            alt={t('about.img_alt')}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.6))'
            }}
          />
        </motion.div>
      </div>

      {/* Values Grid / Carousel */}
      <div
        className="values-carousel"
        style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          padding: '0 5%'
        }}
      >
        {valuesData.map((item, index) => {
          const value = t(`about.values.${item.key}`);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                padding: '40px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                border: '1px solid rgba(208,168,75,0.1)',
                textAlign: 'center',
                scrollSnapAlign: 'center'
              }}
            >
              <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'inline-block' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '15px', fontFamily: 'var(--font-heading)' }}>
                {value.title}
              </h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
