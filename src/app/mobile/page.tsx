'use client';

import { useEffect } from 'react';
import { redirectToMobileVersion } from '@/utils/deviceDetection';
import Hero from '@/components/Hero';
import Dores from '@/components/Dores';
import Beneficios from '@/components/Beneficios';
import Preco from '@/components/Preco';
import Sobre from '@/components/Sobre';
import Footer from '@/components/Footer';

export default function MobilePage() {
  useEffect(() => {
    redirectToMobileVersion();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="mobile-optimized">
        <div>
          <section className="hero-section">
            <Hero />
          </section>

          <section className="dores-section">
            <Dores />
          </section>

          <section className="beneficios-section">
            <Beneficios />
          </section>

          <section className="preco-section">
            <Preco />
          </section>

          <section className="sobre-section">
            <Sobre />
          </section>

          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </div>
    </main>
  );
} 