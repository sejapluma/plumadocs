'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-4 py-16 bg-white text-black">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-xl font-medium tracking-wide">PLUMA DOCS</h2>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto w-full text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Crie Documentos Psicológicos Oficiais em Minutos
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl mb-16"
        >
          Mais tempo, segurança e tranquilidade na sua rotina
        </motion.p>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full aspect-[2] mb-16 mx-auto max-w-[1200px]"
        >
          <Image
            src="/a4-mockup.png"
            alt="Documentos profissionais do Pluma Docs"
            fill
            style={{ 
              objectFit: 'contain',
              transform: 'scale(1.2)',
              objectPosition: 'center 45%'
            }}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
} 