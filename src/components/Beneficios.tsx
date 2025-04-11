'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const documentosAdministrativos = [
  'Modelos de Fichas de Cadastro',
  'Modelos de Contratos',
  'Modelo de Autorização de Atendimento',
  'Modelo de Controle de Presença e de Pagamento',
  'Modelos de Cartas',
  'Modelos de Recibos',
  'Modelo de Declarações',
  'Modelo de TCLE',
  'Manuais de uso e instruções',
  'Exemplos ficticios preenchidos',
  '4 Templates personalizáveis para cada documento'
];

export default function Produto() {
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
            Veja o que tem dentro do{' '}
            <span className="text-[#4F46E5]">
              Pacote de Documentos Psicológicos
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O Pacote de Documentos Psicológicos oferece 12 modelos de documentos (com
            mais de 128 templates diferentes), cada um acompanhado de um manual de uso
            e um modelo fictício preenchido, para a melhor gestão, registro e monitoramento
            dos seus atendimentos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
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
            <h3 className="text-2xl font-medium text-[#4F46E5] mb-4">
              Documentos Administrativos
            </h3>
            <p className="text-gray-600 mb-6">
              Documentos essenciais para gestão e controle,
              organizando dados, formalizando vínculos e
              simplificando o trabalho administrativo.
            </p>
            <ul className="space-y-3">
              {documentosAdministrativos.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-[#4F46E5]">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 