import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export async function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';

  return {
    title: isEn ? 'About Us' : 'Sobre Nós',
    description: isEn
      ? 'Discover the history and essence of Viriatus Brunch in Viseu. Our passion for brunch and commitment to quality.'
      : 'Conheça a história e a essência do Viriatus Brunch em Viseu. A nossa paixão pelo brunch e compromisso com a qualidade.',
    alternates: {
      canonical: isEn ? 'https://viriatusbrunch.pt/en/about' : 'https://viriatusbrunch.pt/sobre-nos',
      languages: {
        'pt-PT': 'https://viriatusbrunch.pt/sobre-nos',
        'en': 'https://viriatusbrunch.pt/en/about',
      },
    },
  };
}

export default function SobreNos() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <About />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
