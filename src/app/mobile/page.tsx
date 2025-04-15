import HeroMobile from '@/components/mobile/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PlumaDocs Mobile | Documentos Psicológicos",
  description: "Versão mobile otimizada para criar documentos psicológicos profissionais em minutos. Modelos prontos e atualizados seguindo as normas do CFP.",
  keywords: "documentos psicológicos, laudos psicológicos, relatórios psicológicos, prontuários, CFP, psicologia, modelos de documentos, documentação psicológica, mobile",
};

export default function MobileHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroMobile />
      {/* Adicione aqui os outros componentes mobile */}
    </main>
  );
} 