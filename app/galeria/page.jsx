import GaleriaClient from './GaleriaClient';

export async function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';
  
  return {
    title: isEn ? 'Gallery' : 'Galeria',
    description: isEn
      ? 'Explore our photo gallery and discover the delicious dishes and cozy atmosphere of Viriatus Brunch in Viseu.'
      : 'Explore a nossa galeria de fotos e descubra os pratos deliciosos e o ambiente acolhedor do Viriatus Brunch em Viseu.',
    alternates: {
      canonical: isEn ? 'https://viriatusbrunch.pt/en/gallery' : 'https://viriatusbrunch.pt/galeria',
      languages: {
        'pt-PT': 'https://viriatusbrunch.pt/galeria',
        'en': 'https://viriatusbrunch.pt/en/gallery',
      },
    },
  };
}

export default function GaleriaPage() {
  return <GaleriaClient />;
}
