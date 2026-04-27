// Server Component (no 'use client') — rendered on server for SEO
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import MenuAccordion from '@/components/MenuAccordion';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

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
