'use client';

import { motion } from 'framer-motion';
import { HeartIcon, SparklesIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const valores = [
  {
    icon: HeartIcon,
    title: 'Propósito',
    description: 'Acreditamos que a psicologia pode transformar vidas, e queremos facilitar essa jornada para cada profissional.'
  },
  {
    icon: SparklesIcon,
    title: 'Qualidade',
    description: 'Cada documento é cuidadosamente elaborado seguindo as normas do CFP e as melhores práticas da área.'
  },
  {
    icon: DocumentTextIcon,
    title: 'Simplicidade',
    description: 'Transformamos processos complexos em soluções práticas e intuitivas para o seu dia a dia.'
  }
];

export default function Sobre() {
  return (
    <section className="w-full py-24 bg-[#FDF8F9]">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-[#C4A484]">
            Sobre a Pluma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa dedicada a simplificar a vida dos profissionais de psicologia,
            unindo tecnologia e conhecimento técnico para criar soluções que realmente fazem
            a diferença na sua prática clínica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#C4A484] rounded-full flex items-center justify-center mx-auto mb-6">
                <valor.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-[#C4A484]">
                {valor.title}
              </h3>
              <p className="text-gray-600">
                {valor.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 text-center shadow-lg"
        >
          <h3 className="text-3xl font-medium mb-6 text-[#C4A484]">
            Nossa Missão
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Queremos ser a ponte entre a excelência profissional e a praticidade,
            fornecendo ferramentas que permitam aos psicólogos focarem no que realmente
            importa: o cuidado com seus pacientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 