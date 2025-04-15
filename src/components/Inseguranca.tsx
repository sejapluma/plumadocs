'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Inseguranca() {
  return (
    <section className="w-full py-24 bg-[#F8F8F8]">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            <span className="text-black">Está trabalhando com </span>
            <span className="text-[#C4A484]">Insegurança?</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              O Pluma Docs oferece uma coleção de modelos práticos, atualizados e alinhados às normas do CFP. 
              Com ele, você pode criar documentos impecáveis em poucos minutos, adaptando cada modelo ao seu 
              estilo e às suas necessidades.
            </p>
            
            <p>
              Pare de arriscar com modelos que podem não seguir as normas{' '}
              <strong className="text-black">CFP 06/2019 e CFP 04/2020.</strong>
            </p>
            
            <p className="text-xl font-medium text-black">
              Tenha a tranquilidade de trabalhar com segurança e certeza.
            </p>
          </div>
        </motion.div>

        {/* Imagem à direita */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] w-full"
        >
          <Image
            src="/a4_foco.png"
            alt="Documento psicológico profissional"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
} 