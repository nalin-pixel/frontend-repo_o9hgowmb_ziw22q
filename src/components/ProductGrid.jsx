import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from './data';

function formatINR(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

export default function ProductGrid() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="products" className="relative bg-[#0A2F28] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFD58A]">Featured Drops</h2>
          <div className="hidden md:flex items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm transition-colors border ${
                  active === c
                    ? 'bg-[#C07A3F] border-[#C07A3F] text-emerald-950'
                    : 'bg-emerald-900/40 border-[#C07A3F]/40 text-[#FFD58A] hover:bg-emerald-800/60'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile filters */}
        <div className="mt-4 md:hidden flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors border ${
                active === c
                  ? 'bg-[#C07A3F] border-[#C07A3F] text-emerald-950'
                  : 'bg-emerald-900/40 border-[#C07A3F]/40 text-[#FFD58A] hover:bg-emerald-800/60'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.id}
              className="group overflow-hidden rounded-xl border border-emerald-800/50 bg-emerald-900/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F28] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-emerald-50 font-semibold">{p.name}</h3>
                  <span className="text-[#FFD58A] font-bold">{formatINR(p.price)}</span>
                </div>
                <p className="text-xs text-emerald-200/70 mt-1">{p.color}</p>
                <button className="mt-4 w-full rounded-md bg-[#C07A3F] py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-[#C07A3F]/20 hover:bg-[#d28a4b] transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
