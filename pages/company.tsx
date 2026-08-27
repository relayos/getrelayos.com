import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';

export default function CompanyPage() {
  return (
    <Layout>
      <SEOHead title="About RelayOS" description="RelayOS builds persistent IRC access and supporting communication infrastructure." />
      <main className="bg-slate-50 py-20 dark:bg-slate-900">
        <section className="container mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">About RelayOS</h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300">RelayOS builds persistent IRC access and the operational infrastructure behind it.</p>
          <p className="mt-6 text-slate-600 dark:text-slate-300">Our public offering information is intentionally limited to capabilities that are implemented and verified. We publish commercial details when they are ready to support a real customer commitment.</p>
        </section>
      </main>
    </Layout>
  );
}
