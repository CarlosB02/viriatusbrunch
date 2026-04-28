'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import DomeGallery from '@/components/DomeGallery';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AtSign, Camera, Heart } from 'lucide-react';

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>

        {/* Gallery Hero Section */}
        <section style={{
          height: '60vh',
          width: '100%',
          maxWidth: 'none',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: 0,
          margin: 0
        }}>
          <Image
            src="/assets/images/gallery/gallery-01.jpg"
            alt="Galeria Viriatus Brunch"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.3) grayscale(0.2)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent, var(--bg-dark))'
          }} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 20px' }}
          >
            <span style={{
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: 'clamp(2px, 1vw, 4px)',
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              fontWeight: '600',
              display: 'block',
              marginBottom: '10px'
            }}>
              Portfólio de Sabores
            </span>
            <h1 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 8vw, 4.5rem)',
              margin: 0,
              padding: '0 5px'
            }}>
              Momentos Viriatus
            </h1>
            <p style={{
              color: 'var(--text-gray)',
              maxWidth: '600px',
              margin: '15px auto 0',
              fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
              lineHeight: '1.5',
              padding: '0 10px'
            }}>
              Cada detalhe, cada ingrediente e cada sorriso capturado no nosso espaço. Explore a nossa essência através da lente.
            </p>
          </motion.div>
        </section>

        {/* Main Gallery Component */}
        <div className="container" style={{ paddingBottom: '50px' }}>
          <Gallery />
        </div>

        {/* Dome Gallery Immersive Section */}
        <section style={{ height: '80vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
          />
        </section>

        {/* Social Call to Action */}
        <section style={{
          padding: '100px 0',
          backgroundColor: 'rgba(208,168,75,0.03)',
          borderTop: '1px solid rgba(208,168,75,0.1)',
          textAlign: 'center'
        }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ display: 'grid', gap: '30px', justifyItems: 'center' }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '25px',
                backgroundColor: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                boxShadow: '0 15px 30px rgba(208,168,75,0.3)'
              }}>
                <AtSign size={40} />
              </div>

              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--primary)' }}>
                Partilha o teu Brunch
              </h2>
              <p style={{ color: 'var(--text-white)', maxWidth: '500px', opacity: 0.8, fontSize: '1.1rem' }}>
                Usa a hashtag <strong style={{ color: 'var(--primary)' }}>#viriatusbrunch</strong> e aparece na nossa galeria oficial. Queremos ver o teu momento!
              </p>

              <a
                href="https://instagram.com/viriatusbrunch.viseu"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: '10px',
                  padding: '15px 40px',
                  borderRadius: '50px',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--primary)',
                  color: 'var(--primary)',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary)';
                  e.currentTarget.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--primary)';
                }}
              >
                SEGUIR NO INSTAGRAM
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
