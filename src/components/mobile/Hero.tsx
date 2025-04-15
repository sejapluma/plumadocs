'use client';

import { motion } from 'framer-motion';

export default function HeroMobile() {
  return (
    <section className="relative w-full min-h-screen bg-[#FDF8F9] px-4 py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#C4A484] mb-6">
            Documentos Psicológicos Profissionais
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Crie documentos psicológicos profissionais em minutos.
            Modelos prontos e atualizados seguindo as normas do CFP.
          </p>
          <motion.a
            href="#preco"
            className="inline-block bg-[#C4A484] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39373] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar agora
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <img
            src="/hero-mobile.png"
            alt="PlumaDocs em ação"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
} 