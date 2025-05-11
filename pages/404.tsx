import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEOHead 
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
      />
      
      <section className="py-20 flex items-center min-h-[70vh]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">Page Not Found</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-md shadow transition duration-300"
            >
              Return Home
            </Link>
            <Link 
              href="/contact" 
              className="text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium py-3 px-8 rounded-md transition duration-300"
            >
              Contact Support
            </Link>
          </div>
          
          {/* 404 Illustration */}
          <div className="mt-16 max-w-lg mx-auto">
            <svg 
              viewBox="0 0 600 300" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <rect width="600" height="300" fill="transparent" />
              
              {/* Broken connection illustration */}
              <circle cx="150" cy="150" r="60" fill="#E2E8F0" className="dark:fill-slate-700" />
              <circle cx="450" cy="150" r="60" fill="#E2E8F0" className="dark:fill-slate-700" />
              
              <path d="M150,150 L270,150" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" />
              <path d="M330,150 L450,150" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" />
              
              <circle cx="300" cy="150" r="20" fill="#EF4444" />
              <path d="M290,140 L310,160 M310,140 L290,160" stroke="white" strokeWidth="4" strokeLinecap="round" />
              
              {/* Server icons */}
              <rect x="120" y="130" width="60" height="40" rx="4" fill="#3B82F6" />
              <rect x="130" y="140" width="40" height="5" rx="1" fill="white" />
              <rect x="130" y="150" width="40" height="5" rx="1" fill="white" />
              
              <rect x="420" y="130" width="60" height="40" rx="4" fill="#3B82F6" />
              <rect x="430" y="140" width="40" height="5" rx="1" fill="white" />
              <rect x="430" y="150" width="40" height="5" rx="1" fill="white" />
              
              {/* Animated searching effect */}
              <circle cx="300" cy="150" r="70" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="15,10" opacity="0.6">
                <animateTransform 
                  attributeName="transform" 
                  type="rotate" 
                  from="0 300 150" 
                  to="360 300 150" 
                  dur="8s" 
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle cx="300" cy="150" r="100" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="15,15" opacity="0.4">
                <animateTransform 
                  attributeName="transform" 
                  type="rotate" 
                  from="360 300 150" 
                  to="0 300 150" 
                  dur="12s" 
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>
      </section>
    </Layout>
  );
}
