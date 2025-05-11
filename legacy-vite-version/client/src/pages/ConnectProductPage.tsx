import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon, ArrowRightIcon } from '@/lib/icons';

export function ConnectProductPage() {
  const features = [
    {
      title: "Dedicated Infrastructure",
      description: "Secure, isolated communication infrastructure built for your enterprise needs.",
      icon: "fa-server"
    },
    {
      title: "End-to-End Encryption",
      description: "Military-grade security with customizable encryption options for sensitive data.",
      icon: "fa-shield-alt"
    },
    {
      title: "Unlimited Scalability",
      description: "Handle millions of connections with consistent performance as your needs grow.",
      icon: "fa-tachometer-alt"
    },
    {
      title: "High Availability",
      description: "99.99% uptime guarantee with redundant systems and automatic failover.",
      icon: "fa-heartbeat"
    },
    {
      title: "Global Distribution",
      description: "Data centers across multiple regions ensure low latency for users worldwide.",
      icon: "fa-globe"
    },
    {
      title: "Advanced Monitoring",
      description: "Comprehensive dashboards and real-time alerts for system performance.",
      icon: "fa-chart-line"
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Secure, compliant messaging infrastructure for banks, fintech, and investment firms."
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant communication systems for healthcare providers and telemedicine."
    },
    {
      name: "Enterprise Technology",
      description: "Scalable solutions for large tech organizations with complex infrastructure needs."
    },
    {
      name: "Government",
      description: "Secure communication platforms for government agencies with strict compliance requirements."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="RelayOS Connect™ - Managed Communication Infrastructure"
        description="Fully managed, dedicated communication infrastructure built on advanced IRCv3 technology with enterprise-grade security, scalability, and reliability."
      />
      
      {/* Hero section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-sm font-medium text-primary-100 bg-primary-700 px-3 py-1 rounded-full mb-4">
                B2B PRODUCT
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">RelayOS Connect™</h1>
              <p className="text-2xl font-medium text-primary-200 mb-4">Managed Communication Infrastructure</p>
              <p className="text-xl text-slate-300 mb-8">
                Fully managed, dedicated communication infrastructure built on advanced IRCv3
                technology with enterprise-grade security, scalability, and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact" className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-md shadow-lg transition duration-300">
                    Request a Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/solutions/custom-communication" className="font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2">
                    Learn More About Solutions
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
              <svg 
                viewBox="0 0 600 400" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                {/* Infrastructure illustration */}
                <rect width="600" height="400" fill="#1E293B" rx="8" />
                
                {/* Server racks */}
                <g transform="translate(50, 50)">
                  {/* Server cluster 1 */}
                  <rect x="0" y="0" width="120" height="300" rx="4" fill="#334155" stroke="#475569" strokeWidth="2" />
                  
                  {/* Servers */}
                  <rect x="10" y="20" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="20" y="30" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="95" cy="35" r="3" fill="#10B981" />
                  
                  <rect x="10" y="60" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="20" y="70" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="95" cy="75" r="3" fill="#10B981" />
                  
                  <rect x="10" y="100" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="20" y="110" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="95" cy="115" r="3" fill="#10B981" />
                  
                  <rect x="10" y="140" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="20" y="150" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="95" cy="155" r="3" fill="#10B981" />
                  
                  <rect x="10" y="180" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="20" y="190" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="95" cy="195" r="3" fill="#10B981" />
                  
                  <rect x="10" y="220" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="20" y="230" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="95" cy="235" r="3" fill="#10B981" />
                  
                  <rect x="10" y="260" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="20" y="270" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="95" cy="275" r="3" fill="#10B981" />
                  
                  {/* Server cluster 2 */}
                  <rect x="140" y="0" width="120" height="300" rx="4" fill="#334155" stroke="#475569" strokeWidth="2" />
                  
                  {/* Servers */}
                  <rect x="150" y="20" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="160" y="30" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="235" cy="35" r="3" fill="#10B981" />
                  
                  <rect x="150" y="60" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="160" y="70" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="235" cy="75" r="3" fill="#10B981" />
                  
                  <rect x="150" y="100" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="160" y="110" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="235" cy="115" r="3" fill="#10B981" />
                  
                  <rect x="150" y="140" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="160" y="150" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="235" cy="155" r="3" fill="#10B981" />
                  
                  <rect x="150" y="180" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="160" y="190" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="235" cy="195" r="3" fill="#10B981" />
                  
                  <rect x="150" y="220" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="160" y="230" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="235" cy="235" r="3" fill="#10B981" />
                  
                  <rect x="150" y="260" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="160" y="270" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="235" cy="275" r="3" fill="#10B981" />
                  
                  {/* Server cluster 3 */}
                  <rect x="280" y="0" width="120" height="300" rx="4" fill="#334155" stroke="#475569" strokeWidth="2" />
                  
                  {/* Servers */}
                  <rect x="290" y="20" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="300" y="30" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="375" cy="35" r="3" fill="#10B981" />
                  
                  <rect x="290" y="60" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="300" y="70" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="375" cy="75" r="3" fill="#10B981" />
                  
                  <rect x="290" y="100" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="300" y="110" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="375" cy="115" r="3" fill="#10B981" />
                  
                  <rect x="290" y="140" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="300" y="150" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="375" cy="155" r="3" fill="#10B981" />
                  
                  <rect x="290" y="180" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="300" y="190" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="375" cy="195" r="3" fill="#10B981" />
                  
                  <rect x="290" y="220" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="300" y="230" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="375" cy="235" r="3" fill="#10B981" />
                  
                  <rect x="290" y="260" width="100" height="30" rx="2" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="300" y="270" width="15" height="10" rx="1" fill="#3B82F6" />
                  <circle cx="375" cy="275" r="3" fill="#10B981" />
                  
                  {/* Network connections */}
                  <line x1="120" y1="35" x2="140" y2="35" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="120" y1="75" x2="140" y2="75" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="120" y1="115" x2="140" y2="115" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="120" y1="155" x2="140" y2="155" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="120" y1="195" x2="140" y2="195" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="120" y1="235" x2="140" y2="235" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="120" y1="275" x2="140" y2="275" stroke="#3B82F6" strokeWidth="2" />
                  
                  <line x1="260" y1="35" x2="280" y2="35" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="260" y1="75" x2="280" y2="75" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="260" y1="115" x2="280" y2="115" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="260" y1="155" x2="280" y2="155" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="260" y1="195" x2="280" y2="195" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="260" y1="235" x2="280" y2="235" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="260" y1="275" x2="280" y2="275" stroke="#3B82F6" strokeWidth="2" />
                  
                  {/* Network flow */}
                  <circle cx="130" cy="35" r="3" fill="#10B981" opacity="0.8">
                    <animate attributeName="cx" values="120;140;120" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="270" cy="115" r="3" fill="#10B981" opacity="0.8">
                    <animate attributeName="cx" values="260;280;260" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="130" cy="195" r="3" fill="#10B981" opacity="0.8">
                    <animate attributeName="cx" values="120;140;120" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="270" cy="275" r="3" fill="#10B981" opacity="0.8">
                    <animate attributeName="cx" values="260;280;260" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Enterprise-Grade Infrastructure</h2>
            <p className="text-lg text-slate-600">
              RelayOS Connect™ provides the security, scalability, and reliability
              that organizations need for mission-critical communications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition duration-300">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Overview section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Advanced Technology Stack</h2>
              <p className="text-lg text-slate-600 mb-8">
                RelayOS Connect™ is built on a foundation of proven technologies, enhanced with
                our proprietary extensions for enterprise-grade performance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">IRCv3 Foundation</h3>
                    <p className="text-slate-600">Built on the battle-tested IRC protocol with modern extensions for enhanced functionality and security.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Multi-Layer Security</h3>
                    <p className="text-slate-600">End-to-end encryption, robust authentication, and comprehensive access controls.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-database"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Distributed Architecture</h3>
                    <p className="text-slate-600">Highly available distributed systems with automatic failover and geographic redundancy.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">API-First Design</h3>
                    <p className="text-slate-600">Comprehensive APIs for seamless integration with your existing systems and workflows.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Technical Specifications</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Protocol Support</h4>
                    <p className="text-slate-600 text-sm">IRCv3.2+, WebSockets, REST API, XMPP (bridge), Matrix (bridge)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Security Certifications</h4>
                    <p className="text-slate-600 text-sm">SOC 2 Type II, ISO 27001, GDPR Compliant, HIPAA Ready</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Encryption</h4>
                    <p className="text-slate-600 text-sm">TLS 1.3, AES-256, Perfect Forward Secrecy, Optional E2EE</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">SLA</h4>
                    <p className="text-slate-600 text-sm">99.99% Uptime Guarantee, 24/7 Monitoring, &lt;1s Message Delivery</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Scalability</h4>
                    <p className="text-slate-600 text-sm">10M+ Concurrent Connections, Auto-scaling Infrastructure</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Data Centers</h4>
                    <p className="text-slate-600 text-sm">North America, Europe, Asia-Pacific, Multi-Region Availability</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="w-full">
                <Link href="/developers/documentation/connect">View Technical Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Solutions section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Industry Solutions</h2>
            <p className="text-lg text-slate-600">
              RelayOS Connect™ serves the unique needs of various industries with
              specialized infrastructure solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{industry.name}</h3>
                <p className="text-slate-600 mb-6">
                  {industry.description}
                </p>
                <Link href={`/solutions/industries/${industry.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Study section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
                  CASE STUDY
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">How DevSolutions Transformed Their Infrastructure</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Software company DevSolutions needed a scalable, secure platform for their communication needs. 
                  RelayOS Connect™ delivered exceptional results.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <div>
                      <span className="text-slate-900 font-semibold">99.99% uptime achievement</span>
                      <p className="text-slate-600 text-sm">Zero downtime during critical business operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <div>
                      <span className="text-slate-900 font-semibold">5x faster message delivery</span>
                      <p className="text-slate-600 text-sm">Enhanced performance compared to their previous solution.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <div>
                      <span className="text-slate-900 font-semibold">40% reduction in infrastructure costs</span>
                      <p className="text-slate-600 text-sm">Lower TCO with managed infrastructure and reduced maintenance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <div>
                      <span className="text-slate-900 font-semibold">Scaled to 1M+ concurrent users</span>
                      <p className="text-slate-600 text-sm">Seamless scaling during peak demand periods.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/case-studies/devsolutions" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Read Full Case Study <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl">
                <blockquote className="text-lg text-slate-700 italic mb-6">
                  "RelayOS Connect™ has been a game-changer for our business. The dedicated infrastructure delivers the performance and security we need, while the managed service model has freed our team to focus on our core product instead of infrastructure maintenance."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-600">
                    MR
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Michael Rodriguez</div>
                    <div className="text-slate-600">Lead Developer, DevSolutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Implementation Process</h2>
            <p className="text-lg text-slate-600">
              Our team of experts will guide you through every step of the implementation process.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Discovery</h3>
                <p className="text-slate-600">
                  We analyze your requirements and design a solution architecture.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Development</h3>
                <p className="text-slate-600">
                  Our engineers build and configure your custom infrastructure.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Deployment</h3>
                <p className="text-slate-600">
                  We securely deploy your solution with comprehensive testing.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Support</h3>
                <p className="text-slate-600">
                  Ongoing maintenance, monitoring, and optimization.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/contact?product=connect">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Pricing section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Pricing</h2>
            <p className="text-lg text-slate-600">
              Custom pricing based on your specific infrastructure requirements.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Enterprise Custom Pricing</h3>
              <p className="text-lg text-slate-600 mb-8">
                RelayOS Connect™ offers tailored pricing based on your organization's specific 
                needs and scale. Our solutions typically include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Infrastructure Components</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Dedicated server instances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Geographic distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Storage and bandwidth allocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Security and compliance features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Redundancy and failover systems</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Services & Support</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Implementation consulting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Custom development services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Premium support package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Dedicated account team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-primary-500 mt-1"></i>
                      <span className="text-slate-600">Regular performance reviews</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Price Range Guidance</h4>
                <p className="text-slate-600 mb-2">
                  While every solution is custom-tailored, typical RelayOS Connect™ implementations range from:
                </p>
                <p className="text-xl font-bold text-slate-900">$5,000 - $50,000+ per month</p>
                <p className="text-slate-500 text-sm mt-2">
                  Depending on scale, features, and support requirements
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="flex-1">
                  <Link href="/contact?product=connect">Request Custom Quote</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/solutions/custom-communication">Learn More About Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Common questions about RelayOS Connect™ and our enterprise infrastructure solutions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What makes RelayOS Connect™ different from other communication platforms?</h3>
              <p className="text-slate-600">
                RelayOS Connect™ differentiates itself through its foundation in IRCv3 technology, which provides 
                unmatched scalability and reliability. Our platform offers dedicated infrastructure (not multi-tenant), 
                extensive customization options, and enterprise-grade security features. Additionally, our managed 
                service approach means your team can focus on your core business while we handle the infrastructure maintenance.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">How long does implementation typically take?</h3>
              <p className="text-slate-600">
                Implementation timelines vary based on the complexity of your requirements, but most 
                standard deployments are completed within 4-8 weeks. This includes the discovery phase, 
                infrastructure setup, customization, testing, and deployment. More complex implementations 
                with extensive custom development may take longer. Our team will provide a detailed timeline 
                during the initial consultation.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Can RelayOS Connect™ integrate with our existing systems?</h3>
              <p className="text-slate-600">
                Yes, RelayOS Connect™ is designed for seamless integration with your existing infrastructure. 
                Our platform offers comprehensive APIs and pre-built connectors for popular enterprise systems 
                including CRM platforms, ticketing systems, authentication providers, and more. Our team can 
                also develop custom integrations for specialized systems unique to your organization.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">How does RelayOS ensure data security and compliance?</h3>
              <p className="text-slate-600">
                RelayOS Connect™ implements multiple layers of security, including end-to-end encryption, 
                advanced authentication mechanisms, and comprehensive access controls. Our platform is 
                compliant with major regulations including SOC 2 Type II, ISO 27001, GDPR, and can be 
                configured for HIPAA compliance. We offer data residency options to meet regional requirements 
                and conduct regular security audits and penetration testing.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/support">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your communication infrastructure?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our team of experts will help you design the perfect solution for your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link href="/contact?product=connect">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/solutions/custom-communication">Learn More About Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ConnectProductPage;
