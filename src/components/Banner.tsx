'use client';

import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <section className="w-full bg-[#C4A484] py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1400px] mx-auto px-4 text-center"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed max-w-4xl mx-auto">
          Simplifique sua rotina e ganhe produtividade com modelos de documentos
          oficiais padronizados e pré-configurados
        </h2>
      </motion.div>
    </section>
  );
} 