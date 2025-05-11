import React from 'react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { CheckIcon } from '@/lib/icons';

interface ProductFeature {
  name: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  features: ProductFeature[];
  cta: string;
  ctaLink: string;
}

const products: Product[] = [
  {
    id: 'connect',
    name: 'RelayOS Connect',
    description: 'Enterprise-grade IRC server with advanced security features, scalability, and reliability.',
    features: [
      { name: 'High Availability', description: 'Clustered servers for 99.99% uptime' },
      { name: 'Enterprise Security', description: 'TLS encryption, IP cloaking, and advanced authentication' },
      { name: 'Compliance Ready', description: 'Message logging and retention for regulatory requirements' },
      { name: 'Scalable Architecture', description: 'Support for millions of concurrent connections' },
    ],
    cta: 'Get Started',
    ctaLink: '/products/connect',
  },
  {
    id: 'embed',
    name: 'RelayOS Embed',
    description: 'Embed real-time chat directly into your website or application with our customizable widgets.',
    features: [
      { name: 'Customizable UI', description: 'Match your brand with custom themes and layouts' },
      { name: 'Lightweight', description: 'Minimal impact on page load times' },
      { name: 'Cross-Platform', description: 'Works on web, mobile, and desktop applications' },
      { name: 'Easy Integration', description: 'Simple JavaScript snippet or React component' },
    ],
    cta: 'Try Demo',
    ctaLink: '/products/embed',
  },
  {
    id: 'integrate',
    name: 'RelayOS Integrate',
    description: 'Connect your existing tools and services with our comprehensive API and webhooks.',
    features: [
      { name: 'RESTful API', description: 'Comprehensive API for all IRC operations' },
      { name: 'Webhooks', description: 'Real-time event notifications' },
      { name: 'SDKs', description: 'Libraries for popular programming languages' },
      { name: 'Custom Integrations', description: 'Connect with your existing tools and services' },
    ],
    cta: 'View Documentation',
    ctaLink: '/developers/api',
  },
  {
    id: 'persist',
    name: 'RelayOS Persist',
    description: 'Never miss a message with our persistent connection and message history services.',
    features: [
      { name: 'Message History', description: 'Access your chat history from any device' },
      { name: 'Offline Messaging', description: 'Receive messages when you reconnect' },
      { name: 'Multi-Device Sync', description: 'Seamless experience across all your devices' },
      { name: 'Search & Archive', description: 'Powerful search capabilities for your message history' },
    ],
    cta: 'Learn More',
    ctaLink: '/products/persist',
  },
  {
    id: 'communities',
    name: 'RelayOS Communities',
    description: 'Build and manage thriving communities with our comprehensive community management tools.',
    features: [
      { name: 'User Management', description: 'Roles, permissions, and moderation tools' },
      { name: 'Analytics', description: 'Insights into community engagement and growth' },
      { name: 'Automation', description: 'Bots and scripts for common tasks' },
      { name: 'Content Moderation', description: 'AI-powered content filtering and moderation' },
    ],
    cta: 'Start Building',
    ctaLink: '/products/communities',
  },
];

export default function ProductsPage() {
  return (
    <Layout>
      <SEOHead 
        title="Products | RelayOS"
        description="Explore RelayOS's suite of enterprise-grade communication products: Connect, Embed, Integrate, Persist, and Communities."
        canonical="https://getrelayos.com/products"
      />
      
      <div className="bg-slate-50 dark:bg-slate-900">
        {/* Hero section */}
        <div className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise-Grade Communication Infrastructure
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Our suite of products provides everything you need to build, manage, and scale your communication infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Products section */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Our Product Suite
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Each product is designed to work seamlessly together or independently, giving you the flexibility to build the communication infrastructure that meets your needs.
              </p>
            </div>

            <div className="space-y-16">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
                >
                  {/* Product image placeholder */}
                  <div className="w-full md:w-1/2 bg-primary-100 dark:bg-primary-900 rounded-lg aspect-video flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {product.name} Image
                    </span>
                  </div>

                  {/* Product details */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature.name} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <CheckIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div className="ml-3">
                            <h4 className="text-base font-medium text-slate-900 dark:text-white">
                              {feature.name}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {feature.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* CTA button */}
                    <a
                      href={product.ctaLink}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                    >
                      {product.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
