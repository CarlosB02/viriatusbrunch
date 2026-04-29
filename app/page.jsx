// Server Component (no 'use client') — rendered on server for SEO
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import MenuAccordion from '@/components/MenuAccordion';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Viriatus Brunch Viseu | O Puro Prazer do Brunch',
  description: 'Descubra o melhor brunch em Viseu no Viriatus Brunch. Menu completo com ovos benedict, panquecas, tostas e café de especialidade.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Schedule />
        <MenuAccordion />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
