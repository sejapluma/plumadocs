'use client';

import { motion } from 'framer-motion';
import { DocumentTextIcon, RocketLaunchIcon, GiftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { trackEvent } from '@/services/analytics';
import { useEffect } from 'react';

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
  useEffect(() => {
    trackEvent.viewContent();
  }, []);

  const handlePurchase = () => {
    trackEvent.beginCheckout();
    trackEvent.conversion('https://payment.ticto.app/O17F77F98');
  };

  return (
    <section className="w-full py-24 bg-[#FDF8F9]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#C4A484] mb-4">Invista no seu profissionalismo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acesso imediato a todos os modelos e recursos. Sem mensalidade, pague uma única vez.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#C4A484] mb-4">Pacote Completo</h3>
                <ul className="space-y-4">
                  {beneficios.map((beneficio, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <DocumentTextIcon className="w-6 h-6 text-[#C4A484] flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{beneficio.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#C4A484]">R$ 37,00</span>
                  <span className="text-gray-500 block">pagamento único</span>
                </div>
                <motion.a
                  href="https://payment.ticto.app/O17F77F98"
                  onClick={handlePurchase}
                  className="inline-block bg-[#C4A484] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39373] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comprar agora
                </motion.a>
                <p className="text-sm text-gray-500 mt-4">
                  Acesso vitalício • Atualizações gratuitas • Suporte por email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 