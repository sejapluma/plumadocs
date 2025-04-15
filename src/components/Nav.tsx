import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => {
      if (scrollY.get() > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 }
  };

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Pluma Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
      </motion.div>

      <motion.a
        href="https://payment.ticto.app/O17F77F98"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="button-primary"
      >
        Comprar agora
      </motion.a>
    </motion.nav>
  );
} 