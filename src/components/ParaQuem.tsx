'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { UserGroupIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

export default function ParaQuem() {
  const isMobile = useIsMobile();

  const perfis = [
    {
      icon: UserGroupIcon,
      title: 'Psicólogos Clínicos',
      description: 'Ideal para profissionais que atendem em consultório e precisam manter documentação organizada.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Recém-formados',
      description: 'Perfeito para quem está começando e quer iniciar com documentação profissional.'
    },
    {
      icon: BriefcaseIcon,
      title: 'Psicólogos Organizacionais',
      description: 'Excelente para profissionais que atuam em empresas e precisam de documentação padronizada.'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#C4A484] mb-4">
            Para quem é a Pluma?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossos modelos são ideais para diversos perfis de profissionais
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perfis.map((perfil, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-[#C4A484] rounded-full flex items-center justify-center mb-4">
                  <perfil.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                  {perfil.title}
                </h3>
                <p className="text-gray-600">
                  {perfil.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 