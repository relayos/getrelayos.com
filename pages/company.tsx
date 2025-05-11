import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';

export default function CompanyPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      title: "CEO & Co-Founder",
      bio: "Alex has over 15 years of experience in communication technology and previously founded two successful startups.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Chen",
      title: "CTO & Co-Founder",
      bio: "Sarah is a systems architect with expertise in scalable infrastructure and real-time communication protocols.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Rodriguez",
      title: "VP of Engineering",
      bio: "Michael leads our engineering team with a focus on performance, security, and developer experience.",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      name: "Priya Patel",
      title: "VP of Product",
      bio: "Priya shapes our product strategy with deep insights into user needs and market trends.",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      name: "David Kim",
      title: "VP of Sales",
      bio: "David brings enterprise sales expertise and a customer-centric approach to our growth strategy.",
      image: "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
      name: "Emma Wilson",
      title: "Head of Customer Success",
      bio: "Emma ensures our customers achieve their goals through effective implementation and support.",
      image: "https://randomuser.me/api/portraits/women/24.jpg"
    }
  ];

  // Company values
  const values = [
    {
      title: "Security First",
      description: "We prioritize the security and privacy of our users' data in everything we build."
    },
    {
      title: "Reliability",
      description: "Our infrastructure is designed for 99.99% uptime, because communication can't wait."
    },
    {
      title: "User-Centered Design",
      description: "We create intuitive, accessible experiences that put users' needs first."
    },
    {
      title: "Continuous Innovation",
      description: "We're constantly pushing the boundaries of what's possible in communication technology."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="About Our Company"
        description="Learn about RelayOS, our mission, values, and the team behind our communication infrastructure."
      />
      
      {/* Hero section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RelayOS</h1>
            <p className="text-xl text-slate-300 mb-8">
              Building the future of real-time communication infrastructure.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">Our Mission</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  At RelayOS, we're on a mission to revolutionize how people and organizations communicate in real-time. 
                  We believe that reliable, secure, and scalable communication infrastructure should be accessible to everyone.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  Founded in 2020, RelayOS has grown from a small team of passionate engineers to a global company 
                  serving businesses and communities of all sizes. Our platform processes millions of messages daily, 
                  connecting people across the world.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  We're committed to building technology that brings people together, fosters collaboration, 
                  and enables meaningful connections in an increasingly digital world.
                </p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
                <div className="relative">
                  {/* Mission illustration */}
                  <svg 
                    viewBox="0 0 400 300" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                  >
                    <rect width="400" height="300" fill="transparent" />
                    
                    {/* World map background */}
                    <path d="M50,150 Q125,100 200,150 Q275,200 350,150" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
                    <path d="M50,180 Q125,130 200,180 Q275,230 350,180" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
                    <path d="M50,120 Q125,70 200,120 Q275,170 350,120" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
                    
                    {/* Connection points */}
                    <circle cx="100" cy="150" r="8" fill="#3B82F6" />
                    <circle cx="150" cy="120" r="8" fill="#3B82F6" />
                    <circle cx="200" cy="160" r="8" fill="#3B82F6" />
                    <circle cx="250" cy="130" r="8" fill="#3B82F6" />
                    <circle cx="300" cy="170" r="8" fill="#3B82F6" />
                    
                    {/* Connection lines */}
                    <line x1="100" y1="150" x2="150" y2="120" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="150" y1="120" x2="200" y2="160" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="200" y1="160" x2="250" y2="130" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="250" y1="130" x2="300" y2="170" stroke="#3B82F6" strokeWidth="2" />
                    
                    {/* Pulse animations */}
                    <circle cx="100" cy="150" r="15" fill="#3B82F6" opacity="0.2">
                      <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="200" cy="160" r="15" fill="#3B82F6" opacity="0.2">
                      <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" begin="1s" />
                    </circle>
                    <circle cx="300" cy="170" r="15" fill="#3B82F6" opacity="0.2">
                      <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" begin="2s" />
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" begin="2s" />
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              These core principles guide everything we do at RelayOS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Our Team</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Meet the talented individuals behind RelayOS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{member.title}</p>
                  <p className="text-slate-600 dark:text-slate-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The story of RelayOS from inception to today.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-700"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 z-10"></div>
                <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">2020</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      RelayOS is founded with a mission to revolutionize real-time communication infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 z-10"></div>
                <div className="ml-8 md:ml-auto md:mr-0 md:w-1/2 md:pl-8">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">2021</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Launch of our first product, RelayOS Connect, and securing of seed funding.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 z-10"></div>
                <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">2022</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Expansion of product line with RelayOS Embed and RelayOS Integrate. Team grows to 25 employees.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 z-10"></div>
                <div className="ml-8 md:ml-auto md:mr-0 md:w-1/2 md:pl-8">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">2023</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Series A funding round. Launch of RelayOS Communities and RelayOS Persist.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 z-10"></div>
                <div className="ml-auto mr-8 md:mr-0 md:ml-0 md:mr-auto md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">2024</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Global expansion with offices in San Francisco, London, and Singapore. Team grows to 75 employees.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 z-10"></div>
                <div className="ml-8 md:ml-auto md:mr-0 md:w-1/2 md:pl-8">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">2025</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Launch of AI-enhanced features and enterprise solutions. Processing over 1 billion messages daily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our mission of revolutionizing communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers" 
              className="bg-white text-primary-700 hover:bg-primary-50 font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300"
            >
              View Open Positions
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-md shadow transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
