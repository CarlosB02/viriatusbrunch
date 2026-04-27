// Server Component
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, AtSign, ArrowUp } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'linear-gradient(to top, #073523, #050505)',
        padding: '80px 5% 40px',
        borderTop: '1px solid rgba(208,168,75,0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px',
        }}
      >
        {/* Brand */}
        <div>
          <Image
            src="/assets/images/viriatus-brunch-logo.png"
            alt="Viriatus Brunch Viseu - Logo Rodapé"
            width={160}
            height={60}
            style={{ height: '60px', width: 'auto', marginBottom: '20px' }}
          />
          <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: '1.8' }}>
            Inspirado em Viseu, criado para todos os dias. Sabores frescos, momentos simples.
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Links do rodapé">
          <h3
            style={{
              fontSize: '1.2rem',
              marginBottom: '25px',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'var(--font-body)',
              fontWeight: '600',
            }}
          >
            Tudo sobre nós
          </h3>
          <ul style={{ display: 'grid', gap: '15px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <a href="/#menu" style={{ color: 'var(--text-gray)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                De volta ao Menu <ArrowUp size={14} style={{ color: 'var(--primary)' }} />
              </a>
            </li>
            <li><a href="/sobre-nos" style={{ color: 'var(--text-gray)' }}>Sobre Nós</a></li>
            <li><a href="/contactos" style={{ color: 'var(--text-gray)' }}>Contactos</a></li>
            <li><a href="/#galeria" style={{ color: 'var(--text-gray)' }}>Galeria</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <address
          id="contactos"
          aria-label="Contactos e reservas"
          style={{ fontStyle: 'normal' }}
        >
          <h3
            style={{
              fontSize: '1.2rem',
              marginBottom: '25px',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'var(--font-body)',
              fontWeight: '600',
            }}
          >
            Reserva já
          </h3>
          <ul style={{ display: 'grid', gap: '20px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-gray)' }}>
              <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} aria-hidden="true" />
              <a href="tel:+351963546006">963 546 006</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-gray)' }}>
              <AtSign size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} aria-hidden="true" />
              <a
                href="https://instagram.com/viriatusbrunch.viseu"
                target="_blank"
                rel="noopener noreferrer"
              >
                @viriatusbrunch.viseu
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', color: 'var(--text-gray)' }}>
              <MapPin size={20} style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} aria-hidden="true" />
              <a
                href="https://maps.google.com/?q=Rua+Gaspar+Barreiros+24+Viseu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-gray)' }}
              >
                Rua Gaspar Barreiros 24, Viseu 3500-222
              </a>
            </li>
          </ul>
        </address>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'var(--text-gray)', fontSize: '0.8rem' }}>
          © {year}{' '}
          <a href="#menu" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
            Viriatus Brunch
          </a>
          . Todos os direitos reservados. | Desenvolvido por{' '}
          <Link
            href="https://enimble.pt"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)', fontWeight: 'bold' }}
          >
            E-Nimble
          </Link>
        </p>
      </div>
    </footer>
  );
}
