'use client';

import { useEffect, useState } from 'react';
import { redirectToMobileVersion } from '@/utils/deviceDetection';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import Dores from '@/components/Dores';
import Beneficios from '@/components/Beneficios';
import Preco from '@/components/Preco';
import Sobre from '@/components/Sobre';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function MobilePage() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    redirectToMobileVersion();
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <main className="min-h-screen bg-white">
      <div className="mobile-optimized">
        <AnimatePresence>
          {isNavVisible && (
            <motion.nav
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex justify-between items-center"
            >
              <motion.img
                src="/logo.png"
                alt="PlumaDocs"
                className="h-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.a
                href="https://payment.ticto.app/O17F77F98"
                className="button button-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comprar agora
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-[var(--spacing-xl)]"
        >
          <motion.section 
            className="hero-section"
            variants={fadeInUp}
          >
            <Hero />
          </motion.section>

          <motion.section 
            className="dores-section"
            variants={fadeInUp}
          >
            <div className="container">
              <Dores />
            </div>
          </motion.section>

          <motion.section 
            className="beneficios-section"
            variants={fadeInUp}
          >
            <div className="container">
              <Beneficios />
            </div>
          </motion.section>

          <motion.section 
            className="preco-section"
            variants={fadeInUp}
          >
            <div className="container">
              <Preco />
            </div>
          </motion.section>

          <motion.section 
            className="sobre-section"
            variants={fadeInUp}
          >
            <div className="container">
              <Sobre />
            </div>
          </motion.section>

          <motion.footer 
            className="footer"
            variants={fadeInUp}
          >
            <div className="container">
              <Footer />
            </div>
          </motion.footer>
        </motion.div>

        <motion.div
          className="floating-button"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <a
            href="https://payment.ticto.app/O17F77F98"
            className="flex items-center gap-3 text-white"
          >
            <span className="font-medium">Comprar por R$37,00</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
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