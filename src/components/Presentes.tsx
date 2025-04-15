'use client';

import { useIsMobile } from '@/hooks/useIsMobile';

export default function Presentes() {
  const isMobile = useIsMobile();

  const recursos = [
    {
      title: 'Tabela de pacientes',
      description: 'Organize suas informações de pacientes de forma profissional e segura.'
    },
    {
      title: 'Agenda',
      description: 'Estruture sua agenda semanal e mantenha tudo em ordem.'
    },
    {
      title: 'Planejamentos',
      description: 'Organize suas faltas e lembretes de forma prática.'
    },
    {
      title: 'Central Financeira',
      description: 'Controle e planeje suas finanças com facilidade.'
    },
    {
      title: 'Muitos bônus!',
      description: 'Diversos recursos adicionais para facilitar sua vida.'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#C4A484] mb-4">
            Recursos que você vai receber
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