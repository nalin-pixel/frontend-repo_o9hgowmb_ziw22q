import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      // Local demo only — backend will be wired later
      await new Promise((res) => setTimeout(res, 700));
      setStatus('success');
      setEmail('');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="newsletter" className="bg-[#0A2F28] py-20 border-t border-emerald-800/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#FFD58A]">Join the PRYZM circle</h3>
        <p className="mt-2 text-emerald-100/80">Get early access to drops, exclusive offers, and culture notes.</p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full sm:w-96 rounded-md border border-emerald-800/60 bg-emerald-900/40 px-4 py-3 text-emerald-50 placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-[#C07A3F]/60"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-md bg-[#C07A3F] px-6 py-3 font-semibold text-emerald-950 hover:bg-[#d28a4b] disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}
