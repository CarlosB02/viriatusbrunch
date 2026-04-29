'use client';

import { Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Schedule() {
  const { t } = useLanguage();

  const hours = [
    { day: t('schedule.days.mon') || 'Segunda-Feira', status: t('schedule.closed') || 'Encerrado', isOpen: true },
    { day: t('schedule.days.tue_sat') || 'Terça a Sábado', status: '10h às 18.30h', isOpen: true },
    { day: t('schedule.days.sun_holidays') || 'Domingo e Feriados', status: '10h às 15h', isOpen: true },
  ];

  return (
    <section
      id="horario"
      aria-label={t('schedule.aria_label') || "Horário de funcionamento"}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div
        style={{
          border: '1px solid var(--primary)',
          padding: '40px 60px',
          textAlign: 'center',
          borderRadius: '20px',
          position: 'relative',
          maxWidth: '500px',
          width: '100%',
          backgroundColor: 'var(--bg-card)',
          boxShadow: '0 0 30px var(--primary-glow)',
        }}
      >
        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--primary)',
            color: 'black',
            padding: '5px 20px',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
          }}
        >
          <Clock size={16} aria-hidden="true" /> {t('schedule.badge') || 'HORÁRIO'}
        </div>

        {/* Hours */}
        <div style={{ marginTop: '20px' }}>
          {hours.map((item, i) => (
            <div key={i} style={{ marginBottom: '20px' }}>
              <h3
                style={{
                  fontSize: '1.1rem',
                  marginBottom: '5px',
                  color: 'var(--text-white)',
                  opacity: 0.8,
                  fontFamily: 'var(--font-body)',
                  fontWeight: '400',
                }}
              >
                {item.day}
              </h3>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: item.isOpen ? 'var(--primary)' : 'var(--text-gray)',
                  fontWeight: '500',
                }}
              >
                {item.status}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: '0.7rem',
            color: 'var(--text-gray)',
            fontStyle: 'italic',
            marginTop: '20px',
          }}
        >
          *{t('schedule.note') || 'Informamos que a cozinha encerra 1h antes do fecho do estabelecimento'}
        </p>
      </div>
    </section>
  );
}
