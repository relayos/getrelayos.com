import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';

export default function TeamsPage() {
  return (
    <Layout>
      <SEOHead title="IRC environments for teams | RelayOS" description="A managed RelayOS IRC environment for organizations that need their own community space." canonical="https://getrelayos.com/teams" />
      <main className="bg-slate-50 py-20 dark:bg-slate-900">
        <section className="container mx-auto max-w-3xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">For organizations</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">IRC environments for your community</h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300">RelayOS can operate a dedicated IRC environment for an organization and its community.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"><h2 className="text-xl font-semibold text-slate-900 dark:text-white">A separated environment</h2><p className="mt-3 text-slate-600 dark:text-slate-300">Each tenant has its own WordPress site, IRC services, browser IRC, and BNC boundary.</p></article>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Operationally managed IRC</h2><p className="mt-3 text-slate-600 dark:text-slate-300">The service combines IRC operations with a WordPress sidecar for your community experience.</p></article>
          </div>
          <p className="mt-10 text-slate-600 dark:text-slate-300">Provisioning, commercial terms, and availability are discussed before an engagement. This page is not an automated signup or purchase flow.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-md bg-primary-600 px-6 py-3 font-medium text-white transition hover:bg-primary-700">Talk to RelayOS</Link>
        </section>
      </main>
    </Layout>
  );
}
