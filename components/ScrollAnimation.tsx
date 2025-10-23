'use client'; // Es un componente interactivo
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Definimos el tipo de los "props"
interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number; // Hacemos el delay opcional
}

export default function ScrollAnimation({ children, delay = 0.2 }: ScrollAnimationProps) {
  const ref = useRef(null);
  // useInView detecta cuándo el componente está en la pantalla
  const isInView = useInView(ref, { once: true }); // 'once: true' hace que la animación ocurra solo 1 vez
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Si está en la pantalla, inicia la animación
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    // Usamos 'motion.div' de Framer Motion
    <motion.div
      ref={ref}
      // Definimos los estados de la animación
      variants={{
        hidden: { opacity: 0, y: 75 }, // Estado inicial: invisible y 75px más abajo
        visible: { opacity: 1, y: 0 },  // Estado final: visible y en su posición original
      }}
      initial="hidden" // Empieza "hidden"
      animate={mainControls} // Se anima cuando 'mainControls.start("visible")' es llamado
      transition={{ duration: 0.5, delay: delay }} // Duración de 0.5s con un pequeño delay
    >
      {children}
    </motion.div>
  );
}