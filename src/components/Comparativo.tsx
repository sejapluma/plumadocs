'use client';

import { motion } from 'framer-motion';
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const semPluma = [
  'Sobrecarga e cansaço com tarefas que poderiam ser simples',
  'Insegurança sobre as normas, gerando ansiedade e preocupações',
  'Menos tempo para você, para a família ou para seus pacientes',
  'Risco de deslizes éticos ou legais que ninguém quer enfrentar'
];

const comPluma = [
  {
    title: 'Modelos Prontos e Atualizados',
    description: 'Templates lindos e novos pra você preencher e usar'
  },
  {
    title: 'Personalização Total',
    description: 'Mude as cores e elementos pra deixar com o seu estilo'
  },
  {
    title: 'Segurança Garantida',
    description: 'Feito para te dar paz de espírito, seguindo todas as regras'
  },
  {
    title: 'Praticidade e Eficiência',
    description: 'Economize horas com documentos já estruturados e testados'
  }
];

export default function Comparativo() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna Sem PlumaDocs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <XCircleIcon className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-medium">Sem PlumaDocs</h3>
            </div>
            <ul className="space-y-6 flex-grow">
              {semPluma.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <XCircleIcon className="w-5 h-5 shrink-0 mt-1 text-red-500" />
                  <span className="text-gray-600 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna Com PlumaDocs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#C4A484] p-8 rounded-2xl shadow-lg flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircleIcon className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-medium text-white">Com PlumaDocs</h3>
            </div>
            <ul className="space-y-6 flex-grow">
              {comPluma.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-1"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 shrink-0 text-white" />
                    <span className="text-white text-lg font-medium">{item.title}</span>
                  </div>
                  <p className="text-white/90 ml-8">{item.description}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 