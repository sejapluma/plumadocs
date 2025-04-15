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
      </div>
    </main>
  );
} 