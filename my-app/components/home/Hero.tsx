"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { Button } from "../shared/Button";
import { Badge } from "../shared/Badge";

type TypewriterPhase = "typing" | "pausing" | "deleting";

function useTypewriter(words: string[], typeSpeed = 70, pauseDuration = 1400) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [phase, setPhase] = useState<TypewriterPhase>("typing");
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = window.setInterval(() => setBlink((value) => !value), 400);
    return () => window.clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (words.length === 0) return undefined;
    const word = words[index % words.length];

    if (phase === "typing") {
      if (subIndex === word.length) {
        setPhase("pausing");
        return undefined;
      }
      const timeout = window.setTimeout(() => setSubIndex((value) => value + 1), typeSpeed);
      return () => window.clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (subIndex === 0) {
        setPhase("typing");
        setIndex((value) => (value + 1) % words.length);
        return undefined;
      }

      const timeout = window.setTimeout(() => setSubIndex((value) => value - 1), typeSpeed * 0.6);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => setPhase("deleting"), pauseDuration);
    return () => window.clearTimeout(timeout);
  }, [index, subIndex, phase, words, typeSpeed, pauseDuration]);

  const text = words.length === 0 ? "" : words[index % words.length].slice(0, subIndex);

  return { text, phase, blink };
}

export function Hero() {
  const { descriptors, headline, subheadline, location, resumeUrl } = profile;

  const { text, blink } = useTypewriter(descriptors, 50, 2400);

  const staggerChildren = useMemo(
    () => ({
      initial: { opacity: 0, y: 28 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    }),
    [],
  );

  return (
    <section
      id="hero"
      data-nav-section
      className="relative flex min-h-[90vh] flex-col justify-center gap-8 pb-12 pt-20 lg:gap-10 lg:pb-20"
    >
      <motion.div
        className="max-w-prose space-y-5 lg:space-y-6"
        initial="initial"
        animate="animate"
        variants={{
          initial: {},
          animate: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.div variants={staggerChildren} className="mb-4">
          <Badge variant="outline">{location}</Badge>
        </motion.div>
        <motion.h1
          variants={staggerChildren}
          className="text-fluid-4xl font-semibold text-[var(--foreground)] sm:text-fluid-5xl lg:text-fluid-6xl mb-6"
        >
          {headline}
        </motion.h1>
        <motion.p
          variants={staggerChildren}
          className="text-fluid-lg text-[var(--muted)] sm:text-fluid-xl mb-4"
        >
          {subheadline}
        </motion.p>
        <motion.div
          variants={staggerChildren}
          className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-blue-600 mb-8 min-h-[32px]"
          aria-live="polite"
        >
          <span>{text}</span>
          <span className={blink ? "opacity-100" : "opacity-20"}>|</span>
        </motion.div>
        <motion.div variants={staggerChildren} className="flex flex-wrap gap-4">
          <Button href="/work" variant="primary" size="lg">
            View My Work
          </Button>
          <Button href={resumeUrl} variant="outline" size="lg" target="_blank" rel="noreferrer" download>
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-wider text-gray-500 sm:flex mt-12"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: [0, 0.9, 0.4, 0.9], y: [12, 0, 8, 0] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1.2,
        }}
      >
        <span>Scroll</span>
        <span className="block h-10 w-[1px] bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
      </motion.div>
    </section>
  );
}
