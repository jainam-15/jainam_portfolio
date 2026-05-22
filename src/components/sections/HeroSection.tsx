"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();
  
  // Slow scroll-driven parallax translations and fades
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.96]);
  const imageY = useTransform(scrollY, [0, 400], [0, 80]);
  const textY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden select-none"
    >
      {/* Delicate, atmospheric central spotlight (low-opacity white/gray) */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[60vw] w-[60vw] max-w-[800px] rounded-full bg-white/[0.015] blur-[140px]" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-between py-24 sm:py-28"
      >
        {/* Top Spacer / Layout Alignment */}
        <div className="h-4" />

        {/* Cinematic Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 flex-1 w-full">
          
          {/* Typographic Art Column */}
          <div className="lg:col-span-8 z-20 flex flex-col justify-center text-left pointer-events-none">
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-1 sm:gap-2"
            >
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.35em] text-muted-foreground/30 uppercase mb-4 sm:mb-6 block">
                {"// System Initializing"}
              </span>
              
              {/* MassiveStacked Headline */}
              <h1 className="text-[clamp(3.5rem,10.5vw,8.5rem)] font-extrabold tracking-[-0.05em] leading-[0.82] text-white uppercase flex flex-col">
                <span className="block overflow-hidden py-1">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    I Don&apos;t
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-foreground/80"
                  >
                    Build
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
                    className="block bg-gradient-to-r from-white via-white/70 to-white/10 bg-clip-text text-transparent"
                  >
                    Average.
                  </motion.span>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Asymmetrical Visual Column (Overlapping backdrop crop) */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] lg:col-span-4 z-10 flex items-center justify-end pointer-events-none opacity-40 lg:opacity-75">
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full flex items-center justify-end overflow-hidden"
            >
              {/* Radial Fade-out mask to ensure smooth bleed into black */}
              <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-black/40 to-black pointer-events-none" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

              <div className="relative w-full h-[80vh] max-h-[800px] aspect-[4/5] sm:aspect-square lg:aspect-auto select-none">
                <Image
                  src="/hero_signature.png"
                  alt="Founder visual sculpture"
                  fill
                  priority
                  className="object-cover lg:object-contain object-right opacity-80 mix-blend-screen scale-105 pointer-events-none select-none"
                />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Lower Metadata Counterweight & Scroll Prompt */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full z-20 pointer-events-none">
          
          {/* Asymmetric Metadata */}
          <div className="md:col-span-8 flex flex-col gap-1 text-[10px] font-mono tracking-[0.25em] text-muted-foreground/40 text-left">
            <span className="font-extrabold text-foreground/80 uppercase tracking-[0.3em]">Jainam Shah</span>
            <span>Founder // Engineer</span>
            <span>Intent AI & LeadsArk</span>
          </div>

          {/* Quiet Scroll Indicator */}
          <div className="md:col-span-4 flex md:justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.6, duration: 1.2 }}
              className="text-[9px] font-mono tracking-[0.35em] text-muted-foreground uppercase py-1 border-b border-white/10"
            >
              [ Scroll to enter ]
            </motion.div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
