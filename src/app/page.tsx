import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Inseguranca from '@/components/Inseguranca';
import Dores from '@/components/Dores';
import Beneficios from '@/components/Beneficios';
import ParaQuem from '@/components/ParaQuem';
import Comparativo from '@/components/Comparativo';
import Presentes from '@/components/Presentes';
import Preco from '@/components/Preco';
import Sobre from '@/components/Sobre';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Inseguranca />
      <Dores />
      <Banner />
      <Beneficios />
      <ParaQuem />
      <Comparativo />
      <Presentes />
      <Preco />
      <Sobre />
      <FAQ />
      <Footer />
    </main>
  );
}
