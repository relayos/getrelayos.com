import React from 'react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import Hero from '@/components/home/Hero';
import Cta from '@/components/home/Cta';

export default function Home() {
  return (
    <Layout>
      <SEOHead 
        title="RelayOS | Persistent IRC access"
        description="RelayOS is preparing RelayBNC: persistent IRC access with browser access through KiwiIRC."
      />
      
      <Hero />
      <Cta />
    </Layout>
  );
}
