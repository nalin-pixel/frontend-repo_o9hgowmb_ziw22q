export default function Collection() {
  const sections = [
    {
      title: 'Shirts',
      image:
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1600&auto=format&fit=crop',
      link: '#products',
    },
    {
      title: 'Hoodies',
      image:
        'https://images.unsplash.com/photo-1580654712603-eb3d4b6c26df?q=80&w=1600&auto=format&fit=crop',
      link: '#products',
    },
    {
      title: 'Accessories',
      image:
        'https://images.unsplash.com/photo-1503341733017-1901578f9b1f?q=80&w=1600&auto=format&fit=crop',
      link: '#products',
    },
  ];

  return (
    <section className="bg-[#0A2F28] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#FFD58A]">Explore Collections</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((s) => (
            <a key={s.title} href={s.link} className="group relative overflow-hidden rounded-xl border border-emerald-800/50">
              <img src={s.image} alt={s.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F28] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-semibold text-[#FFD58A]">{s.title}</h3>
                <p className="text-emerald-100/80 text-sm">Shop now →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
