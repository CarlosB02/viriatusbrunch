// Server Component
import { Clock } from 'lucide-react';

const hours = [
  { day: 'Segunda-Feira', status: 'Encerrado', isOpen: true },
  { day: 'Terça a Sábado', status: '10h às 18.30h', isOpen: true },
  { day: 'Domingo e Feriados', status: '10h às 15h', isOpen: true },
];

export default function Schedule() {
  return (
    <section
      id="horario"
      aria-label="Horário de funcionamento"
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
          <Clock size={16} aria-hidden="true" /> HORÁRIO
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
          *Informamos que a cozinha encerra 1h antes do fecho do estabelecimento
        </p>
      </div>
    </section>
  );
}
