'use client';

import { motion } from 'framer-motion';
import { DocumentTextIcon, RocketLaunchIcon, GiftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { trackEvent } from '@/services/analytics';

const beneficios = [
  {
    icon: DocumentTextIcon,
    text: 'Documentos psicológicos prontos para uso'
  },
  {
    icon: RocketLaunchIcon,
    text: 'Acesso exclusivo ao aplicativo da Pluma para consultar e tirar dúvidas com o CFP com Inteligência Artificial'
  },
  {
    icon: GiftIcon,
    text: 'Bônus especial'
  }
];

export default function Preco() {
  return (
    <section className="w-full py-24 bg-[#FDF8F9]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 bg-white rounded-3xl p-8 md:p-16 shadow-2xl hover:shadow-3xl transition-shadow">
          {/* Imagem do Produto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/tela.png"
                alt="Pacote de Documentos Psicológicos"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="rounded-lg scale-110"
                priority
              />
            </div>
          </motion.div>

          {/* Informações de Preço */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8 flex flex-col justify-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#C4A484]">
                Pacote de{' '}
                Documentos<br />
                Psicológicos
              </h2>
            </div>

            <p className="text-lg text-black">
              Transforme sua prática clínica com documentos profissionais, 
              padronizados e em conformidade com as normas do CFP. 
              Economize tempo precioso e mantenha seus registros 
              impecáveis com modelos prontos para uso.
            </p>

            <div className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <beneficio.icon className="w-6 h-6 text-[#C4A484]" />
                  <span className="text-black">{beneficio.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-8 border-t border-[#C4A484]/20">
              <p className="text-[#C4A484]/70 line-through">De: R$67,00</p>
              <p className="text-4xl font-bold text-[#C4A484]">
                Por: R$37,00
              </p>
            </div>

            <div className="pt-6">
              <motion.a
                href="https://payment.ticto.app/O17F77F98"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent.beginCheckout()}
                className="bg-[#C4A484] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#B39474] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comprar agora
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 