"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PHOTOS } from "../lib/photos";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-black text-white"
      style={{ minHeight: "100svh" }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,5,5,0.35) 0%, rgba(15,5,5,0.40) 45%, rgba(0,0,0,0.85) 92%, rgba(0,0,0,0.95) 100%), url('${PHOTOS.hero}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Corner brand line */}
      <div className="absolute top-20 md:top-28 left-5 md:left-10 z-10 flex items-center gap-2 md:gap-3 text-white/80">
        <span className="rule-brand" />
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.20em] md:tracking-[0.24em]">
          Boris Cucka Sport · Kenn
        </span>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-6 pt-32 pb-24 md:pt-48 md:pb-32"
      >
        <h1 className="h-display text-[56px] sm:text-[80px] md:text-[128px] lg:text-[152px] max-w-[1000px]">
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
              className="inline-block will-change-transform"
            >
              Sportcenter
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.28 }}
              className="inline-block will-change-transform text-brand-onDark"
            >
              Kenn.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.55 }}
          className="mt-6 md:mt-10 max-w-[640px] text-[16px] md:text-[22px] leading-[1.4] md:leading-[1.35] tracking-[-0.01em] text-white/85"
        >
          Fußball, Tennis, BattleKart, Billard und Pizza-Bar. Ein Ort zum
          Abschalten, Schwitzen und Lachen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.7 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-[380px] sm:max-w-none sm:w-auto"
        >
          <motion.a
            href="#angebot"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay: 0.78 }}
            className="btn btn-primary w-full sm:w-auto"
          >
            Angebot ansehen
          </motion.a>
          <motion.a
            href="tel:+4965028811"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay: 0.86 }}
            className="btn btn-onDark-secondary w-full sm:w-auto"
          >
            06502 8811
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/60"
      >
        <span>scroll</span>
        <span aria-hidden className="h-6 w-[1px] bg-white/40" />
      </motion.div>
    </section>
  );
}
