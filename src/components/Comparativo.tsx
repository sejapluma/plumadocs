'use client';

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Comparativo() {
  const comparacoes = [
    {
      semPluma: 'Horas perdidas criando documentos do zero',
      comPluma: 'Modelos prontos e atualizados para usar'
    },
    {
      semPluma: 'Insegurança sobre estar seguindo as normas',
      comPluma: 'Documentos 100% alinhados com o CFP'
    },
    {
      semPluma: 'Documentação desorganizada',
      comPluma: 'Padrão profissional em todos os documentos'
    },
    {
      semPluma: 'Dúvidas sobre como preencher',
      comPluma: 'Exemplos práticos e manuais detalhados'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#C4A484] mb-4">
            Compare e escolha o melhor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja a diferença que a Pluma pode fazer na sua vida profissional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-500 mb-6 text-center">Sem a Pluma</h3>
              <div className="space-y-6">
                {comparacoes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <XMarkIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <p className="text-gray-600">{item.semPluma}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-500 mb-6 text-center">Com a Pluma</h3>
              <div className="space-y-6">
                {comparacoes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <p className="text-gray-600">{item.comPluma}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 