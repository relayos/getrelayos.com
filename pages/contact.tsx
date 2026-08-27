import { FormEvent, useState } from 'react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  async function submitInterest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState('submitting');

    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch('/wp-json/relayos/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: 'RelayBNC release interest',
          interest_source: 'relayos_release_interest',
          website: form.get('website'),
        }),
      });

      if (response.ok) {
        event.currentTarget.reset();
        setSubmitState('success');
        return;
      }
    } catch {
      // Surface a recoverable error without exposing transport details.
    }

    setSubmitState('error');
  }

  return (
    <Layout>
      <SEOHead title="RelayBNC release interest | RelayOS" description="Register interest in the forthcoming RelayBNC consumer offering." />
      <main className="bg-slate-50 py-20 dark:bg-slate-900">
        <section className="container mx-auto max-w-2xl px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">RelayBNC</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Register your release interest</h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300">RelayBNC keeps an IRC connection available while you are away, with browser access through KiwiIRC. Leave your name and email to hear when the consumer offering has a concrete release update.</p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">This is not a purchase, account, reservation, or promise of eligibility.</p>

          <form className="mt-10 space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800" onSubmit={submitInterest}>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="name">Name</label>
              <input className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white" id="name" name="name" required autoComplete="name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">Email</label>
              <input className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white" id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <button className="rounded-md bg-primary-600 px-6 py-3 font-medium text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60" disabled={submitState === 'submitting'} type="submit">
              {submitState === 'submitting' ? 'Sending...' : 'Register interest'}
            </button>
            <p aria-live="polite" className="text-sm text-slate-600 dark:text-slate-300">
              {submitState === 'success' && 'Thanks. We recorded your release interest.'}
              {submitState === 'error' && 'We could not record your interest. Please try again later.'}
            </p>
          </form>
        </section>
      </main>
    </Layout>
  );
}
