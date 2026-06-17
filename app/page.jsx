// Server Component (no 'use client') — rendered on server for SEO
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import MenuAccordion from '@/components/MenuAccordion';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export async function generateMetadata({ searchParams }) {
  const isEn = searchParams?.lang === 'en';
  
  return {
    title: isEn ? 'Viriatus Brunch Viseu | The Pure Pleasure of Brunch' : 'Viriatus Brunch Viseu | O Puro Prazer do Brunch',
    description: isEn 
      ? 'Discover the best brunch in Viseu at Viriatus Brunch. Full menu with eggs benedict, pancakes, toasts, and specialty coffee.' 
      : 'Descubra o melhor brunch em Viseu no Viriatus Brunch. Menu completo com ovos benedict, panquecas, tostas e café de especialidade.',
    alternates: {
      canonical: isEn ? 'https://viriatusbrunch.pt/en' : 'https://viriatusbrunch.pt',
      languages: {
        'pt-PT': 'https://viriatusbrunch.pt',
        'en': 'https://viriatusbrunch.pt/en',
      },
    },
  };
}

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
