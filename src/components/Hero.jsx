import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A2F28]" id="hero">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Copper gradient overlay with pointer-events disabled so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2F28] via-[#0A2F28]/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-center text-center">
        <motion.img
          src="/fab2ce56-b746-4648-b291-3773880b2b79.jpg"
          alt="PRYZM Logo"
          className="h-24 w-24 object-contain drop-shadow-[0_0_20px_rgba(192,122,63,0.35)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        <motion.h1
          className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FFD58A] via-[#C07A3F] to-[#FFD58A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Redefine Streetwear. Own the Culture.
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-emerald-50/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Premium, sustainable pieces engineered for the next generation. Minimal silhouette, maximal impact.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-md bg-[#C07A3F] px-6 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-[#C07A3F]/20 hover:bg-[#d28a4b] transition-colors"
          >
            Shop Collection
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-md border border-[#C07A3F]/60 bg-emerald-900/40 px-6 py-3 text-sm font-semibold text-[#FFD58A] hover:bg-emerald-800/60 transition-colors"
          >
            Our Ethos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
