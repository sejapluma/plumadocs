'use client';

import { motion } from 'framer-motion';
import { ClockIcon, DocumentTextIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const criterios = [
  {
    Icon: ClockIcon,
    description: 'Querem mais tempo e menos burocracia na rotina'
  },
  {
    Icon: DocumentTextIcon,
    description: 'Valorizam organização e cuidado com a documentação'
  },
  {
    Icon: RocketLaunchIcon,
    description: 'Buscam uma forma mais rápida e eficiente de elaborar'
  }
];

export default function ParaQuem() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Este produto é para psicólogas que:
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {criterios.map((criterio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border border-[#C4A484] hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#C4A484] rounded-full flex items-center justify-center mb-4 mx-auto">
                <criterio.Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-black text-center text-xl">
                {criterio.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 