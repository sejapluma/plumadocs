'use client';

import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

const cards = [
  {
    title: 'Perda de tempo',
    description: 'Horas desperdiçadas tentando criar documentos do zero ou adaptando modelos desatualizados.',
    image: '/perda-tempo.png'
  },
  {
    title: 'Desgaste',
    description: 'Estresse e ansiedade por não ter certeza se seus documentos estão corretos e seguindo as normas.',
    image: '/desgaste.png'
  },
  {
    title: 'Desorganização',
    description: 'Dificuldade em manter um padrão profissional na documentação do seu trabalho.',
    image: '/desorganizacao.png'
  },
  {
    title: 'Exaustão',
    description: 'Cansaço de ter que pesquisar e estudar normas técnicas complexas para cada documento.',
    image: '/exaustao.png'
  }
];

export default function Dores() {
  const isMobile = useIsMobile();

  // Configurações de animação condicionais
  const titleAnimation = !isMobile ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  } : {};

  const cardAnimation = !isMobile ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  } : {};

  return (
    <section className="w-full py-24 bg-[#FDF8F9]">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          {...titleAnimation}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#C4A484] mb-4">
            Você quer continuar passando por isso?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Documentação psicológica não precisa ser um pesadelo.
            Transforme suas dores em produtividade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              {...cardAnimation}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#C4A484] mb-2 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 