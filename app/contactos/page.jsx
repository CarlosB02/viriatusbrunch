import ContactosClient from './ContactosClient';

export async function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  return {
    title: isEn ? 'Contacts' : 'Contactos',
    description: isEn
      ? 'Get in touch with Viriatus Brunch in Viseu. Make your reservation by phone or Instagram and see how to get to the best brunch in town.'
      : 'Entre em contacto com o Viriatus Brunch em Viseu. Faça a sua reserva por telefone ou Instagram e veja como chegar ao melhor brunch da cidade.',
    alternates: {
      canonical: isEn ? 'https://viriatusbrunch.pt/en/contacts' : 'https://viriatusbrunch.pt/contactos',
      languages: {
        'pt-PT': 'https://viriatusbrunch.pt/contactos',
        'en': 'https://viriatusbrunch.pt/en/contacts',
      },
    },
  };
}

export default function ContactosPage() {
  return <ContactosClient />;
}
