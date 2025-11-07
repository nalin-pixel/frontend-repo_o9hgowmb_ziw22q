export default function Footer() {
  return (
    <footer className="bg-[#0A2F28] border-t border-emerald-800/50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-emerald-100/70 text-sm">© {new Date().getFullYear()} PRYZM. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-emerald-100/70 hover:text-[#FFD58A]">Privacy</a>
          <a href="#" className="text-emerald-100/70 hover:text-[#FFD58A]">Terms</a>
          <a href="#" className="text-emerald-100/70 hover:text-[#FFD58A]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
