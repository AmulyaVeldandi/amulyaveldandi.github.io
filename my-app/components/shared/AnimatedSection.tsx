"use client";

import { motion, useInView } from "framer-motion";
import { ComponentProps, useRef } from "react";

type AnimatedSectionProps = ComponentProps<typeof motion.section> & {
  delay?: number;
};

export function AnimatedSection({
  children,
  delay = 0,
  className,
  ...rest
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
