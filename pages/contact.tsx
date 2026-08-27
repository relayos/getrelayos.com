import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';

export default function ContactPage() {
  return (
    <Layout>
      <SEOHead title="Contact RelayOS" description="Contact RelayOS about the forthcoming RelayBNC offering." />
      <main className="bg-slate-50 py-20 dark:bg-slate-900">
        <section className="container mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Contact RelayOS</h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300">Ask about RelayBNC or the current release boundary.</p>
          <p className="mt-8 text-slate-600 dark:text-slate-300">Contact channels and commercial availability will be published with the consumer release. This page does not submit a form or create a support case.</p>
        </section>
      </main>
    </Layout>
  );
}
