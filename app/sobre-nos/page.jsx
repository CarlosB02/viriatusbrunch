import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a história e a essência do Viriatus Brunch em Viseu. A nossa paixão pelo brunch e compromisso com a qualidade.',
};

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
