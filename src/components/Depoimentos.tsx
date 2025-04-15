'use client';

import Image from 'next/image';

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: 'Ana Clara',
      cargo: 'Psicóloga Clínica',
      texto: 'Os modelos são incríveis! Me ajudaram muito a manter minha documentação organizada e profissional.',
      foto: '/ana.jpg'
    },
    {
      nome: 'Pedro Santos',
      cargo: 'Psicólogo Organizacional',
      texto: 'Excelente material. Economizei muito tempo e agora tenho mais segurança na elaboração dos documentos.',
      foto: '/pedro.jpg'
    },
    {
      nome: 'Maria Luiza',
      cargo: 'Psicóloga Recém-formada',
      texto: 'Perfeito para quem está começando! Os exemplos práticos me ajudaram muito a entender como fazer.',
      foto: '/maria.jpg'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#C4A484] mb-4">
            O que dizem sobre a Pluma
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja a experiência de quem já está usando nossos modelos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image
                      src={depoimento.foto}
                      alt={depoimento.nome}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#C4A484]">
                      {depoimento.nome}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {depoimento.cargo}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  {depoimento.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 