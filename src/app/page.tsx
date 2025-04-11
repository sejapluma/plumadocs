import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Inseguranca from '@/components/Inseguranca';
import Dores from '@/components/Dores';
import Beneficios from '@/components/Beneficios';
import ParaQuem from '@/components/ParaQuem';
import Comparativo from '@/components/Comparativo';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Inseguranca />
      <Banner />
      <Dores />
      <Beneficios />
      <ParaQuem />
      <Comparativo />
    </main>
  );
}
