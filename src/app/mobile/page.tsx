'use client';

import { useEffect } from 'react';
import { redirectToMobileVersion } from '@/utils/deviceDetection';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Dores from '@/components/Dores';
import Beneficios from '@/components/Beneficios';
import Preco from '@/components/Preco';
import Sobre from '@/components/Sobre';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function MobilePage() {
  useEffect(() => {
    redirectToMobileVersion();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="mobile-optimized">
        {/* Seções principais */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.section className="hero-section" variants={fadeInUp}>
            <Hero />
          </motion.section>

          <motion.section className="dores-section" variants={fadeInUp}>
            <Dores />
          </motion.section>

          <motion.section className="beneficios-section" variants={fadeInUp}>
            <Beneficios />
          </motion.section>

          <motion.section className="preco-section" variants={fadeInUp}>
            <Preco />
          </motion.section>

          <motion.section className="sobre-section" variants={fadeInUp}>
            <Sobre />
          </motion.section>

          <motion.footer className="footer" variants={fadeInUp}>
            <Footer />
          </motion.footer>
        </motion.div>

        {/* Botão flutuante de compra */}
        <motion.div
          className="floating-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a
            href="https://payment.ticto.app/O17F77F98"
            className="flex items-center gap-2"
          >
            <span>Comprar por R$37,00</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </main>
  );
} 