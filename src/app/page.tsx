'use client';

import { useEffect } from 'react';
import { redirectToMobileVersion } from '@/utils/deviceDetection';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Inseguranca from '@/components/Inseguranca';
import Dores from '@/components/Dores';
import Beneficios from '@/components/Beneficios';
import ParaQuem from '@/components/ParaQuem';
import Comparativo from '@/components/Comparativo';
import Presentes from '@/components/Presentes';
import Preco from '@/components/Preco';
import Depoimentos from '@/components/Depoimentos';
import Sobre from '@/components/Sobre';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    redirectToMobileVersion();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Inseguranca />
      <Dores />
      <Banner />
      <Beneficios />
      <ParaQuem />
      <Comparativo />
      <Presentes />
      <Preco />
      <Depoimentos />
      <Sobre />
      <FAQ />
      <Footer />
    </main>
  );
}
