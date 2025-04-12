'use client';

import { motion } from 'framer-motion';
import { GiftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Presentes() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#FDF8F9] rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#C4A484] rounded-full flex items-center justify-center mb-6">
              <GiftIcon className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-medium text-[#C4A484] mb-8">
              Bônus Especial
            </h2>
            
            <h3 className="text-2xl font-medium text-[#C4A484] mb-4">
              Guia passo-a-passo da Assinatura digital
            </h3>
            
            <p className="text-lg font-medium text-black mb-4">
              Assine seus documentos de forma prática e segura com o gov.br!
            </p>
            
            <p className="text-black/80 text-center max-w-2xl">
              Você pode usar o serviço de assinaturas digitais do gov.br para 
              garantir que seus documentos tenham validade jurídica, de acordo 
              com a Lei Federal nº 14.063/2020
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 