'use client';

import Image from 'next/image';

export default function Inseguranca() {
  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#C4A484] mb-4">
            Chega de insegurança
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tenha a certeza de que seus documentos estão corretos e seguindo todas as normas do CFP
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square">
              <Image
                src="/inseguranca.jpg"
                alt="Profissional inseguro com documentação"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                  Documentos Validados
                </h3>
                <p className="text-gray-600">
                  Todos os modelos foram revisados e estão de acordo com as normas do Conselho Federal de Psicologia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                  Exemplos Práticos
                </h3>
                <p className="text-gray-600">
                  Cada documento vem com um exemplo prático preenchido para você entender exatamente como usar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#C4A484] mb-2">
                  Suporte Contínuo
                </h3>
                <p className="text-gray-600">
                  Atualizamos os modelos sempre que houver mudanças nas normas do CFP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 