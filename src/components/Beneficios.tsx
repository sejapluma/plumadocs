'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DocumentMagnifyingGlassIcon, QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const documentosPsicologicos = [
  'Modelo de Acompanhamento psicológico',
  'Modelo de prontuário',
  'Modelo de laudo',
  'Modelo de relatório',
  'Modelo de parecer',
  'Modelo de anamnese infantil',
  'Modelo de anamnese adulto'
];

export default function Beneficios() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            <span className="text-black">Por dentro do </span>
            <span className="text-[#C4A484]">produto</span>
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            O Pacote de Documentos Psicológicos oferece 8 modelos de documentos lindos e prontos para uso, 
            cada um acompanhado de um manual detalhado e um modelo fictício preenchido. 
            Desenvolvido para trazer mais tempo, segurança e tranquilidade para a sua vida profissional, 
            permitindo que você foque no que realmente importa: o cuidado com seus pacientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/2] md:aspect-[2/1] lg:aspect-square">
              <Image
                src="/pasta-documentos.png"
                alt="Pasta com documentos psicológicos"
                fill
                className="object-contain scale-125 transform hover:scale-[1.3] transition-transform duration-300"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-medium text-[#C4A484] mb-4">
              Você vai ter acesso a:
            </h3>
            <ul className="space-y-3">
              {documentosPsicologicos.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-black"
                >
                  <span className="text-[#C4A484]">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Nova seção do App CFP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#FDF8F9] rounded-3xl p-12 md:p-16 shadow-xl mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-medium text-[#C4A484]">
                Acesso Exclusivo ao PlumaCFP
              </h3>
              <p className="text-lg text-[#C4A484]/80">
                Como bônus especial, você terá acesso a um aplicativo exclusivo onde poderá:
              </p>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-[#C4A484] rounded-full flex items-center justify-center shrink-0">
                    <DocumentMagnifyingGlassIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#C4A484]/80">Consultar a resolução CFP em tempo real</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-[#C4A484] rounded-full flex items-center justify-center shrink-0">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#C4A484]/80">Tirar dúvidas sobre o preenchimento dos documentos</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-[#C4A484] rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#C4A484]/80">Garantir que seus documentos estejam sempre em conformidade</span>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <Image
                src="/app-cfp.jpg"
                alt="Aplicativo de consulta CFP"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 