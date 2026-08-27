import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold text-white">RelayOS</Link>
          <p className="mt-2 text-sm text-slate-400">Persistent IRC access, being prepared for release.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/products" className="hover:text-primary-400">RelayBNC</Link>
          <Link href="/solutions" className="hover:text-primary-400">Capabilities</Link>
          <Link href="/company" className="hover:text-primary-400">About</Link>
          <Link href="/contact" className="hover:text-primary-400">Contact</Link>
          <a href="https://github.com/relayos" className="hover:text-primary-400">GitHub</a>
        </nav>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">&copy; {currentYear} RelayOS.</div>
    </footer>
  );
}
