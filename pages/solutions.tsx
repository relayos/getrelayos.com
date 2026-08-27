import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';

export default function SolutionsPage() {
  return (
    <Layout>
      <SEOHead title="RelayOS capabilities" description="Verified RelayOS capabilities for persistent IRC access." />
      <main className="bg-slate-50 py-20 dark:bg-slate-900">
        <section className="container mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Built around IRC continuity</h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300">RelayOS is preparing a consumer path for persistent IRC access. The current implementation combines a persistent connection, browser access through KiwiIRC, and entitlement-gated offline direct messages.</p>
          <Link href="/products" className="mt-8 inline-flex rounded-md bg-primary-600 px-6 py-3 font-medium text-white transition hover:bg-primary-700">Explore RelayBNC</Link>
        </section>
      </main>
    </Layout>
  );
}
