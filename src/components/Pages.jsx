import { useEffect } from 'react';

export default function Pages() {
  useEffect(() => {
    if (window.location.hash.startsWith('#/')) {
      const target = window.location.hash.slice(2);
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="pages" className="bg-[#0A2F28] pt-24 pb-16 border-t border-emerald-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#FFD58A]">Quick Links</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="#about" className="rounded-lg border border-emerald-800/50 bg-emerald-900/30 p-4 text-emerald-100/90 hover:bg-emerald-800/40">About</a>
          <a href="#products" className="rounded-lg border border-emerald-800/50 bg-emerald-900/30 p-4 text-emerald-100/90 hover:bg-emerald-800/40">Shop</a>
          <a href="#newsletter" className="rounded-lg border border-emerald-800/50 bg-emerald-900/30 p-4 text-emerald-100/90 hover:bg-emerald-800/40">Newsletter</a>
          <a href="#contact" className="rounded-lg border border-emerald-800/50 bg-emerald-900/30 p-4 text-emerald-100/90 hover:bg-emerald-800/40">Contact</a>
        </div>
      </div>
    </section>
  );
}
