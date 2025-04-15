'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Depoimentos() {
  return (
    <section className="w-full py-24 bg-[#FDF8F9]">
      <div className="max-w-[900px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="flex flex-col items-center text-center">
            {/* Foto e Nome */}
            <div className="mb-8 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden relative mb-6 flex items-center justify-center">
                <Image
                  src="/dra-tatiane.jpg"
                  alt="Dra. Tatiane"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 128px) 100vw, 128px"
                />
              </div>
              <h3 className="text-4xl font-medium text-black">
                Dra. Tatiane
              </h3>
            </div>

            {/* Estrelas */}
            <div className="flex gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-8 h-8 text-[#C4A484]" />
              ))}
            </div>

            {/* Depoimento */}
            <p className="text-xl md:text-2xl text-black leading-relaxed max-w-3xl">
              Sou psicóloga clínica há mais de 10 anos e sempre senti a sobrecarga da 
              documentação. Elaborar relatórios, laudos, prontuários manualmente, tudo do zero, 
              consumia um tempo precioso que eu poderia dedicar aos meus pacientes ou aos 
              meus estudos. Desde que comecei a usar Pluma Docs, me apaixonei! Os modelos são 
              incríveis: completos, seguindo as normas do CFP (o que me dá uma segurança enorme!) 
              e ainda posso personalizar com as cores e a identidade da minha clínica.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 