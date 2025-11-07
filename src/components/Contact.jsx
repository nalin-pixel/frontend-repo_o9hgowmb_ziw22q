export default function Contact() {
  return (
    <section id="contact" className="bg-[#0A2F28] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFD58A]">Contact</h2>
          <p className="mt-2 text-emerald-100/80">Have a question about sizing, shipping, or drops? Send us a message.</p>
          <div className="mt-6 space-y-2 text-emerald-100/80">
            <p>Email: support@pryzm.shop</p>
            <p>Instagram: @pryzm.studio</p>
          </div>
        </div>
        <form className="rounded-xl border border-emerald-800/50 bg-emerald-900/30 p-6 space-y-4">
          <input type="text" placeholder="Your name" className="w-full rounded-md border border-emerald-800/60 bg-emerald-900/40 px-4 py-3 text-emerald-50 placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-[#C07A3F]/60" />
          <input type="email" placeholder="you@example.com" className="w-full rounded-md border border-emerald-800/60 bg-emerald-900/40 px-4 py-3 text-emerald-50 placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-[#C07A3F]/60" />
          <textarea placeholder="Message" rows="4" className="w-full rounded-md border border-emerald-800/60 bg-emerald-900/40 px-4 py-3 text-emerald-50 placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-[#C07A3F]/60" />
          <button className="rounded-md bg-[#C07A3F] px-6 py-3 font-semibold text-emerald-950 hover:bg-[#d28a4b]">Send</button>
        </form>
      </div>
    </section>
  );
}
