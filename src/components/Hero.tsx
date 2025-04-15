'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import Image from 'next/image';

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="w-full min-h-screen bg-[#FAFAFA] flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#C4A484]">Documentação</span> psicológica simplificada
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Modelos prontos e atualizados para você focar no que realmente importa: seus pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-block bg-[#C4A484] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39373] transition-colors text-center"
              >
                Começar agora
              </a>
              <a
                href="#"
                className="inline-block border-2 border-[#C4A484] text-[#C4A484] px-8 py-4 rounded-lg font-semibold hover:bg-[#C4A484] hover:text-white transition-colors text-center"
              >
                Saiba mais
              </a>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/hero.jpg"
              alt="Documentação psicológica"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 