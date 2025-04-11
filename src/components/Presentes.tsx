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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GiftIcon className="w-8 h-8 text-[#D1859D]" />
            <h2 className="text-4xl md:text-5xl font-medium">
              É como um presente exclusivo...
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Você vai ter acesso a:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Primeiro Card - 20 atividades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-video relative">
              <Image
                src="/bonus-1.jpg"
                alt="Atividades para clínica"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                mais de <span className="font-medium">20 atividades</span> que vão:
              </p>
              <p className="text-gray-500 mt-2">
                te ajudar a trabalhar com mais propósito, emocional em equilíbrio.
              </p>
            </div>
          </motion.div>

          {/* Segundo Card - Notion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-video relative">
              <Image
                src="/bonus-2.jpg"
                alt="Notion"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                E um <span className="font-medium">Notion</span> que te ajuda a:
              </p>
              <p className="text-gray-500 mt-2">
                organizar todos os seus ferramentas e documentos, de maneira SIMPLES e PRÁTICA.
              </p>
            </div>
          </motion.div>

          {/* Terceiro Card - Módulo Bônus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-video relative">
              <Image
                src="/bonus-3.jpg"
                alt="Módulo Bônus"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                E um <span className="font-medium">MÓDULO BÔNUS</span> recheado de:
              </p>
              <p className="text-gray-500 mt-2">
                conteúdo com aulas, abordando as principais dúvidas da nossa relacionadas a organização e burocracias da clínica!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Seção de Bônus Extras */}
        <div className="bg-[#FDF8F9] rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-medium text-center mb-12 text-[#D1859D]">
            Bônus Extras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* IA Consulta */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-xl font-medium text-gray-800">
                1. Tire suas dúvidas sobre o CFP com a Inteligência Artificial da Pluma
              </h4>
              <p className="text-gray-600">
                Tire todas as suas dúvidas com o Agente de Consulta da Pluma, 
                criado com Inteligência Artificial avançada e fundamentado de forma 
                precisa no CFP disponível 24 horas todos os 7 dias da semana.
              </p>
            </motion.div>

            {/* Assinatura Digital */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-xl font-medium text-gray-800">
                2. Guia passo-a-passo da Assinatura digital
              </h4>
              <p className="text-gray-600 font-medium">
                Assine seus documentos de forma prática e segura com o gov.br!
              </p>
              <p className="text-gray-600">
                Você pode usar o serviço de assinaturas digitais do gov.br para 
                garantir que seus documentos tenham validade jurídica, de acordo 
                com a Lei Federal nº 14.063/2020
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Porque eu quero te entregar mais do que documentos.
            <br />
            Eu quero caminhar junto com você e mostrar que
            <br />
            <span className="italic">nada disso precisa ser tão difícil!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
} 