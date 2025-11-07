export default function About() {
  return (
    <section className="bg-[#0A2F28] pt-28 pb-20 min-h-[70vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#FFD58A]">About PRYZM</h1>
          <p className="mt-4 text-emerald-100/90 leading-relaxed">
            We craft premium, sustainable streetwear with a minimal silhouette and maximal impact. Our pieces are built
            to move with you, made with ethically sourced materials, and finished in our signature emerald and copper
            palette. Designed for Gen Z, inspired by global street culture.
          </p>
          <ul className="mt-6 space-y-3 text-emerald-100/80">
            <li>• Ethically sourced fabrics and eco-friendly dyes</li>
            <li>• Limited drops with enduring quality</li>
            <li>• Designed in India, for the world</li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-emerald-800/50">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            alt="PRYZM studio"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A2F28] via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
}
