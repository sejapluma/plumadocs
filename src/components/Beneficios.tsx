'use client';

import { useIsMobile } from '@/hooks/useIsMobile';

export default function Beneficios() {
  const isMobile = useIsMobile();

  const recursos = [
    {
      title: 'Facilidade',
      description: 'Cada modelo acompanha exemplos prontos e manuais de uso, eliminando dúvidas e simplificando sua rotina.'
    },
    {
      title: 'Produtividade e Ganho de tempo',
      description: 'Modelos prontos garantem mais tempo para o que importa: o desenvolvimento do seu profissionalismo.'
    },
    {
      title: 'Desenvolvimento e Profissionalismo',
      description: 'Documentação em dia é o máximo do profissionalismo. Suba o próximo patamar com facilidade.'
    },
    {
      title: 'Modelos Editáveis e Atualizados',
      description: 'Documentos totalmente editáveis e atualizados conforme o CFP para atender todas as suas necessidades.'
    },
    {
      title: 'Sem Riscos',
      description: 'Garantia total e reembolso. Se não gostar, devolvemos seu dinheiro. Simples assim.'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#C4A484] mb-4">
            Benefícios que você vai ter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para uma documentação profissional e organizada
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {recursos.map((recurso, index) => (
              <div
                key={index}
                className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                    {recurso.title}
                  </h3>
                  <p className="text-gray-600">{recurso.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 