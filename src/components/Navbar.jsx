import { ShoppingBag, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A2F28]/70 border-b border-emerald-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2">
              <img
                src="/fab2ce56-b746-4648-b291-3773880b2b79.jpg"
                alt="PRYZM Logo"
                className="h-8 w-8 object-contain rounded-sm ring-1 ring-[#C07A3F]/40"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-lg font-semibold tracking-widest text-[#FFD58A]">PRYZM</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm text-emerald-50/90 hover:text-[#FFD58A] transition-colors">Shop</a>
            <a href="#about" className="text-sm text-emerald-50/90 hover:text-[#FFD58A] transition-colors">About</a>
            <a href="#newsletter" className="text-sm text-emerald-50/90 hover:text-[#FFD58A] transition-colors">Updates</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-md hover:bg-emerald-800/40 transition-colors" aria-label="Account">
              <User className="h-5 w-5 text-[#FFD58A]" />
            </button>
            <button className="p-2 rounded-md hover:bg-emerald-800/40 transition-colors" aria-label="Cart">
              <ShoppingBag className="h-5 w-5 text-[#FFD58A]" />
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-emerald-800/40 transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6 text-[#FFD58A]" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <a href="#products" className="text-emerald-50/90 hover:text-[#FFD58A]">Shop</a>
              <a href="#about" className="text-emerald-50/90 hover:text-[#FFD58A]">About</a>
              <a href="#newsletter" className="text-emerald-50/90 hover:text-[#FFD58A]">Updates</a>
              <div className="flex items-center gap-2 pt-2">
                <button className="p-2 rounded-md hover:bg-emerald-800/40 transition-colors" aria-label="Account">
                  <User className="h-5 w-5 text-[#FFD58A]" />
                </button>
                <button className="p-2 rounded-md hover:bg-emerald-800/40 transition-colors" aria-label="Cart">
                  <ShoppingBag className="h-5 w-5 text-[#FFD58A]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
