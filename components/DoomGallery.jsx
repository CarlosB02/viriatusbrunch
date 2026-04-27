'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const doomImages = [
  '/assets/images/gallery/gallery-01.jpg',
  '/assets/images/gallery/gallery-02.jpg',
  '/assets/images/gallery/gallery-03.jpg',
  '/assets/images/gallery/gallery-04.jpg',
  '/assets/images/gallery/gallery-05.jpg',
  '/assets/images/gallery/gallery-06.jpg',
];

export default function DoomGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      style={{ 
        padding: '150px 0', 
        overflow: 'hidden', 
        backgroundColor: '#050505',
        perspective: '1500px'
      }}
    >
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '100px' }}>Imersão Viriatus</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          transformStyle: 'preserve-3d'
        }}>
          {doomImages.map((src, index) => {
            // Cada imagem terá uma rotação e profundidade ligeiramente diferente baseada no scroll
            const rotateX = (index % 2 === 0 ? 1 : -1) * 15;
            const y = (index % 3 === 0 ? 50 : -50);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, z: -500, rotateY: index % 2 === 0 ? 45 : -45 }}
                whileInView={{ 
                  opacity: 1, 
                  z: 0, 
                  rotateY: 0,
                  transition: { duration: 1, delay: index * 0.1 }
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: index % 2 === 0 ? 5 : -5,
                  z: 100,
                  transition: { duration: 0.3 }
                }}
                style={{
                  position: 'relative',
                  height: '400px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                  cursor: 'pointer',
                  border: '1px solid rgba(208,168,75,0.2)'
                }}
              >
                <Image
                  src={src}
                  alt={`Viriatus Moment ${index}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent, rgba(208,168,75,0.2))',
                  mixBlendMode: 'overlay'
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
