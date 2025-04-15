'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import Image from 'next/image';

export default function Banner() {
  const isMobile = useIsMobile();

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-[#C4A484] mb-4">
                Documentação psicológica simplificada
              </h2>
              <p className="text-gray-600">
                Modelos prontos e atualizados para você focar no que realmente importa: seus pacientes.
              </p>
              <a
                href="#"
                className="inline-block mt-6 bg-[#C4A484] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B39373] transition-colors"
              >
                Saiba mais
              </a>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/banner.jpg"
                alt="Documentação psicológica"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 