'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
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

export default function ContactosClient() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <h1 className="section-title">{t('contactos.reserva_titulo')}</h1>
            <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              {t('contactos.reserva_sub')}
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', marginBottom: '60px' }}>
            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'grid', alignContent: 'center', gap: '40px' }}
            >
              <div>
                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '25px' }}>{t('contactos.onde_estamos')}</h2>
                <div style={{ display: 'flex', gap: '20px', color: 'var(--text-white)' }}>
                  <div style={{ backgroundColor: 'rgba(208,168,75,0.1)', padding: '15px', borderRadius: '15px', color: 'var(--primary)', height: 'fit-content' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Rua Gaspar Barreiros 24</p>
                    <p style={{ color: 'var(--text-gray)' }}>3500-222 Viseu, Portugal</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '25px' }}>{t('contactos.faca_reserva')}</h2>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <a href="tel:+351963546006" style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-white)' }}>
                    <div style={{ backgroundColor: 'rgba(208,168,75,0.1)', padding: '15px', borderRadius: '15px', color: 'var(--primary)' }}>
                      <Phone size={24} />
                    </div>
                    <span style={{ fontSize: '1.1rem' }}>963 546 006</span>
                  </a>
                  <a href="https://instagram.com/viriatusbrunch.viseu" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-white)' }}>
                    <div style={{ backgroundColor: 'rgba(208,168,75,0.1)', padding: '15px', borderRadius: '15px', color: 'var(--primary)' }}>
                      <Instagram size={24} />
                    </div>
                    <span style={{ fontSize: '1.1rem' }}>viriatusbrunch.viseu</span>
                  </a>
                  <a href="mailto:geral.viriatus@hotmail.com" style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-white)' }}>
                    <div style={{ backgroundColor: 'rgba(208,168,75,0.1)', padding: '15px', borderRadius: '15px', color: 'var(--primary)' }}>
                      <Mail size={24} />
                    </div>
                    <span style={{ fontSize: '1.1rem' }}>geral.viriatus@hotmail.com</span>
                  </a>
                </div>
              </div>

              <div style={{ padding: '30px', border: '1px solid rgba(208,168,75,0.2)', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={18} /> {t('contactos.horario_brunch')}
                </h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{t('schedule.days.tue_sat')}: 10h às 18.30h</p>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{t('schedule.days.sun_holidays')}: 10h às 15h</p>
                <p style={{ color: 'var(--primary)', fontSize: '0.8rem', marginTop: '10px', fontStyle: 'italic' }}>{t('contactos.segunda_fechada')}</p>
              </div>
            </motion.div>

            {/* Image/Visual Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hide-mobile"
              style={{
                position: 'relative',
                height: '450px',
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                backgroundImage: 'url("/assets/images/contactos.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))' }} />
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '100px' }}
          >
            <h2 className="section-title">{t('contactos.localizacao')}</h2>
            <div style={{ width: '100%', height: '450px', borderRadius: '30px', overflow: 'hidden', border: '1px solid rgba(208,168,75,0.2)' }}>
              <iframe
                src="https://maps.google.com/maps?q=Rua%20Gaspar%20Barreiros%2024%2C%20Viseu%203500-222&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Viriatus Brunch Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
