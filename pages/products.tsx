import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';

export default function ProductsPage() {
  return (
    <Layout>
      <SEOHead
        title="RelayBNC | RelayOS"
        description="RelayBNC is RelayOS's forthcoming persistent IRC access offering."
        canonical="https://getrelayos.com/products"
      />
      <main className="bg-slate-50 py-20 dark:bg-slate-900">
        <section className="container mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">RelayOS consumer offering</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">RelayBNC</h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300">A persistent IRC connection designed to keep your session available while you are away.</p>
        </section>
        <section className="container mx-auto mt-16 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Persistent connection</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Return to an IRC connection that remains available when you detach.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Browser access</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Use KiwiIRC for browser access to your IRC network.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Offline direct messages</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Entitled users can send offline direct messages for delivery when the recipient reconnects.</p>
          </article>
        </section>
        <section className="container mx-auto mt-16 max-w-3xl px-4 text-center">
          <p className="text-slate-600 dark:text-slate-300">Commercial packaging, pricing, and account eligibility will be announced with the release.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-md bg-primary-600 px-6 py-3 font-medium text-white transition hover:bg-primary-700">Contact RelayOS</Link>
        </section>
      </main>
    </Layout>
  );
}
