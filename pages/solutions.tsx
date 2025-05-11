import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { ArrowRightIcon } from '@/lib/icons';

export default function SolutionsPage() {
  // Solution cards data
  const solutions = [
    {
      title: "Business Chat Solutions",
      description: "Enhance your business communications with secure, scalable, and customizable chat infrastructure.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      link: "/solutions/business-chat"
    },
    {
      title: "Online Communities",
      description: "Build and grow vibrant online communities with our advanced moderation tools and engagement features.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      link: "/solutions/online-communities"
    },
    {
      title: "Custom Communication Solutions",
      description: "Tailored communication infrastructure designed to meet your organization's specific needs and requirements.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      link: "/solutions/custom-communication"
    }
  ];

  // Industry solutions
  const industries = [
    {
      name: "Technology",
      description: "Streamline developer collaboration and support with integrated chat solutions.",
      icon: "fa-microchip"
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant communication channels for healthcare providers and patients.",
      icon: "fa-heartbeat"
    },
    {
      name: "Education",
      description: "Create safe learning environments with moderated discussion spaces.",
      icon: "fa-graduation-cap"
    },
    {
      name: "Finance",
      description: "Secure and compliant communication for financial services and institutions.",
      icon: "fa-chart-line"
    },
    {
      name: "E-commerce",
      description: "Enhance customer support and build community around your products.",
      icon: "fa-shopping-cart"
    },
    {
      name: "Gaming",
      description: "Foster player communities and provide in-game communication channels.",
      icon: "fa-gamepad"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Solutions"
        description="Explore RelayOS solutions for business communication, online communities, and custom communication infrastructure."
      />
      
      {/* Hero section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Communication Solutions</h1>
            <p className="text-xl text-slate-300 mb-8">
              Powerful, flexible, and secure communication infrastructure for businesses and communities.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main solutions section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Our Solutions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              RelayOS provides tailored communication solutions to meet the unique needs of your business or community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl group">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {solution.description}
                  </p>
                  <Link 
                    href={solution.link} 
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition"
                  >
                    Learn more <ArrowRightIcon className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our solutions are tailored to meet the unique communication needs of various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition duration-300">
                <div className="text-primary-500 dark:text-primary-400 text-3xl mb-4">
                  <i className={`fas ${industry.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{industry.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">Why Choose RelayOS?</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Enterprise-Grade Security</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">
                        End-to-end encryption, compliance controls, and comprehensive audit capabilities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400">
                      <i className="fas fa-tachometer-alt"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Unmatched Scalability</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">
                        Handle millions of concurrent connections with low latency and high reliability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400">
                      <i className="fas fa-puzzle-piece"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Flexible Integration</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">
                        Comprehensive APIs and SDKs for seamless integration with your existing systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400">
                      <i className="fas fa-headset"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Dedicated Support</h3>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">
                        Expert technical support and guidance throughout implementation and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                <div className="relative">
                  {/* Benefits illustration */}
                  <svg 
                    viewBox="0 0 400 400" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                  >
                    <rect width="400" height="400" fill="transparent" />
                    
                    {/* Central hub */}
                    <circle cx="200" cy="200" r="60" fill="#3B82F6" opacity="0.1" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="200" cy="200" r="30" fill="#3B82F6" />
                    
                    {/* Connecting nodes */}
                    <circle cx="100" cy="100" r="25" fill="#3B82F6" opacity="0.1" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="100" cy="100" r="12" fill="#3B82F6" />
                    
                    <circle cx="300" cy="100" r="25" fill="#3B82F6" opacity="0.1" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="300" cy="100" r="12" fill="#3B82F6" />
                    
                    <circle cx="100" cy="300" r="25" fill="#3B82F6" opacity="0.1" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="100" cy="300" r="12" fill="#3B82F6" />
                    
                    <circle cx="300" cy="300" r="25" fill="#3B82F6" opacity="0.1" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="300" cy="300" r="12" fill="#3B82F6" />
                    
                    {/* Connection lines */}
                    <line x1="200" y1="200" x2="100" y2="100" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="200" y1="200" x2="300" y2="100" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="200" y1="200" x2="100" y2="300" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="200" y1="200" x2="300" y2="300" stroke="#3B82F6" strokeWidth="2" />
                    
                    {/* Security shield */}
                    <path d="M200,150 L170,170 L170,210 L200,230 L230,210 L230,170 Z" fill="none" stroke="#3B82F6" strokeWidth="2" />
                    <path d="M200,160 L180,175 L180,205 L200,220 L220,205 L220,175 Z" fill="#3B82F6" opacity="0.2" />
                    
                    {/* Animated data flow */}
                    <circle cx="150" cy="150" r="4" fill="#3B82F6">
                      <animate attributeName="cx" values="150;200;250" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="150;200;150" dur="3s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="250" cy="250" r="4" fill="#3B82F6">
                      <animate attributeName="cx" values="250;200;150" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="250;200;250" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your communication?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how RelayOS can provide the perfect solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-700 hover:bg-primary-50 font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300"
            >
              Contact Sales
            </Link>
            <Link 
              href="/products" 
              className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-md shadow transition duration-300"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
