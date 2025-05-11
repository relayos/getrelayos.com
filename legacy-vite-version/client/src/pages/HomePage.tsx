import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import Hero from '@/components/home/Hero';
import ClientLogos from '@/components/home/ClientLogos';
import Features from '@/components/home/Features';
import ProductsB2B from '@/components/home/ProductsB2B';
import ProductsB2C from '@/components/home/ProductsB2C';
import ApiDemo from '@/components/home/ApiDemo';
import Testimonials from '@/components/home/Testimonials';
import Cta from '@/components/home/Cta';

export function HomePage() {
  return (
    <Layout>
      <SEOHead 
        title="Advanced Real-Time Communication Infrastructure"
        description="RelayOS provides robust, developer-friendly, and scalable solutions for real-time communication. Built on advanced technology for businesses and communities."
      />
      
      <Hero />
      <ClientLogos />
      <Features />
      <ProductsB2B />
      <ProductsB2C />
      <ApiDemo />
      <Testimonials />
      <Cta />
    </Layout>
  );
}

export default HomePage;
