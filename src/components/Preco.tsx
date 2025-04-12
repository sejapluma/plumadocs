'use client';

import { motion } from 'framer-motion';
import { DocumentTextIcon, DocumentCheckIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const beneficios = [
  {
    icon: DocumentTextIcon,
    text: 'Documentos Administrativos'
  },
  {
    icon: DocumentCheckIcon,
    text: 'Documentos de Registro'
  },
  {
    icon: ClipboardDocumentListIcon,
    text: 'Documentos de Acompanhamento'
  }
];

export default function Preco() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          {/* Imagem do Produto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/a4_sozinha.png"
                alt="Pacote de Documentos Psicológicos"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
              />
            </div>
          </motion.div>

          {/* Informações de Preço */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-400">
                Pacote de{' '}
              </h2>
              <h2 className="text-4xl md:text-5xl font-medium text-[#4F46E5]">
                Documentos<br />
                Psicológicos
              </h2>
            </div>

            <p className="text-lg text-gray-600">
              O pacote reúne tudo o que você precisa para gerir, registrar e 
              acompanhar atendimentos, facilitando sua rotina com documentos 
              prontos para cada etapa do atendimento psicológico.
            </p>

            <div className="space-y-2">
              <p className="text-gray-500 line-through">De: R$147,00</p>
              <p className="text-4xl font-bold text-[#4F46E5]">
                Por: R$97,00
              </p>
            </div>

            <div className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <beneficio.icon className="w-6 h-6 text-[#4F46E5]" />
                  <span className="text-gray-700">{beneficio.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6">
              <button className="w-full bg-[#4F46E5] text-white py-4 px-8 rounded-full font-medium text-lg hover:opacity-90 transition-opacity">
                Adicionar ao carrinho
              </button>
              <button className="w-full border border-[#4F46E5] text-[#4F46E5] py-4 px-8 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors">
                Ver mais detalhes
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 