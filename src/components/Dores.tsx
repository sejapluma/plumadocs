'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
  {
    title: 'Perda de Tempo',
    description: 'Não deixe a burocracia consumir seu tempo e sua energia.',
    image: '/perda-tempo.png'
  },
  {
    title: 'Desgaste',
    description: 'Falta estímulo e os erros ao criar documentos do zero.',
    image: '/desgaste.png'
  },
  {
    title: 'Desorganização',
    description: 'Documentos desorganizados refletem seu profissionalismo.',
    image: '/desorganizacao.png'
  },
  {
    title: 'Exaustão',
    description: 'Cansada de buscar modelos, sem poder de fazer saber tão na internet?',
    image: '/exaustao.png'
  }
];

export default function Dores() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            <span className="text-black">Você quer continuar </span>
            <span className="text-[#C4A484]">passando por isso?</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-48 h-48 mb-6 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[#C4A484] text-xl font-medium mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 