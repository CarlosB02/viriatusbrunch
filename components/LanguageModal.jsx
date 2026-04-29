'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageModal() {
  const { showModal, toggleLanguage } = useLanguage();

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid rgba(208, 168, 75, 0.2)',
              borderRadius: '24px',
              padding: '40px',
              maxWidth: '450px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px var(--primary-glow)'
            }}
          >
            {/* Logo */}
            <div style={{ marginBottom: '30px' }}>
              <Image
                src="/assets/images/viriatus-brunch-logo.png"
                alt="Viriatus Brunch Logo"
                width={180}
                height={65}
                style={{ height: '65px', width: 'auto', margin: '0 auto' }}
                priority
              />
            </div>

            <h2 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '10px', 
              color: 'var(--text-white)',
              fontFamily: 'var(--font-heading)'
            }}>
              BEM-VINDO / WELCOME
            </h2>
            
            <p style={{ 
              color: 'var(--text-gray)', 
              marginBottom: '35px',
              fontSize: '0.9rem',
              letterSpacing: '1px'
            }}>
              Escolha o seu idioma para continuar<br/>
              Choose your language to continue
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '25px', 
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* PT Button */}
              <button
                onClick={() => toggleLanguage('pt')}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: '15px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  width: '140px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(208, 168, 75, 0.1)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ 
                  width: '60px', 
                  height: '40px', 
                  position: 'relative',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}>
                  <Image
                    src="/assets/images/flag-pt.png"
                    alt="Português"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span style={{ 
                  color: 'var(--text-white)', 
                  fontWeight: '600', 
                  fontSize: '0.85rem',
                  letterSpacing: '1px'
                }}>PORTUGUÊS</span>
              </button>

              {/* EN Button */}
              <button
                onClick={() => toggleLanguage('en')}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: '15px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  width: '140px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(208, 168, 75, 0.1)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ 
                  width: '60px', 
                  height: '40px', 
                  position: 'relative',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}>
                  <Image
                    src="/assets/images/flag-en.png"
                    alt="English"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <span style={{ 
                  color: 'var(--text-white)', 
                  fontWeight: '600', 
                  fontSize: '0.85rem',
                  letterSpacing: '1px'
                }}>ENGLISH</span>
              </button>
            </div>

            <div style={{ 
              marginTop: '40px', 
              fontSize: '0.7rem', 
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Viriatus Brunch &copy; {new Date().getFullYear()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
