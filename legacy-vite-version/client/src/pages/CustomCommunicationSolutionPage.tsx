import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircleIcon, ArrowRightIcon } from '@/lib/icons';

export function CustomCommunicationSolutionPage() {
  const features = [
    {
      title: "Dedicated Infrastructure",
      description: "Secure, isolated communication infrastructure built to your exact specifications."
    },
    {
      title: "End-to-End Encryption",
      description: "Enterprise-grade security with customizable encryption and compliance options."
    },
    {
      title: "Unlimited Scalability",
      description: "Handles millions of concurrent connections with consistent performance."
    },
    {
      title: "Custom Integrations",
      description: "Seamlessly integrate with your existing systems, workflows, and applications."
    },
    {
      title: "Advanced APIs",
      description: "Comprehensive APIs and SDKs for complete control over your communication platform."
    },
    {
      title: "Custom Branding",
      description: "White-label solution that fully aligns with your brand identity."
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Secure, compliant communication for financial institutions with strict regulatory requirements.",
      icon: "fa-landmark"
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant solutions for patient communication and healthcare team collaboration.",
      icon: "fa-hospital"
    },
    {
      title: "Enterprise Teams",
      description: "Dedicated communication infrastructure for large corporate environments.",
      icon: "fa-building"
    },
    {
      title: "Education",
      description: "Custom platforms for educational institutions to facilitate learning and collaboration.",
      icon: "fa-graduation-cap"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Custom Communication Solutions"
        description="Build your own communication infrastructure with RelayOS Connect™. Secure, scalable, and tailored to your exact business requirements."
      />
      
      {/* Hero section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-sm font-medium text-primary-100 bg-primary-700 px-3 py-1 rounded-full mb-4">
                RelayOS Solution
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Communication Infrastructure</h1>
              <p className="text-xl text-slate-300 mb-8">
                Build a communication platform tailored to your exact requirements with
                dedicated infrastructure, enterprise security, and unlimited scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/products/connect" className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-md shadow-lg transition duration-300">
                    Learn About RelayOS Connect™
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact" className="font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2">
                    Schedule Consultation
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
                <rect width="600" height="400" fill="#1E293B" rx="8" />
                
                {/* Network/server infrastructure illustration */}
                <g transform="translate(100, 50)">
                  {/* Central server */}
                  <rect x="150" y="100" width="100" height="200" rx="8" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="2" />
                  <rect x="160" y="120" width="80" height="20" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="160" y="150" width="80" height="20" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="160" y="180" width="80" height="20" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="160" y="210" width="80" height="20" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="160" y="240" width="80" height="20" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="160" y="270" width="80" height="20" rx="2" fill="#3B82F6" opacity="0.6" />
                  
                  {/* Left devices */}
                  <rect x="20" y="80" width="60" height="30" rx="4" fill="#64748B" />
                  <rect x="20" y="150" width="60" height="30" rx="4" fill="#64748B" />
                  <rect x="20" y="220" width="60" height="30" rx="4" fill="#64748B" />
                  <rect x="20" y="290" width="60" height="30" rx="4" fill="#64748B" />
                  
                  {/* Right devices */}
                  <rect x="320" y="80" width="60" height="30" rx="4" fill="#64748B" />
                  <rect x="320" y="150" width="60" height="30" rx="4" fill="#64748B" />
                  <rect x="320" y="220" width="60" height="30" rx="4" fill="#64748B" />
                  <rect x="320" y="290" width="60" height="30" rx="4" fill="#64748B" />
                  
                  {/* Connection lines */}
                  <line x1="80" y1="95" x2="150" y2="140" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="80" y1="165" x2="150" y2="165" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="80" y1="235" x2="150" y2="205" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="80" y1="305" x2="150" y2="260" stroke="#3B82F6" strokeWidth="2" />
                  
                  <line x1="250" y1="140" x2="320" y2="95" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="250" y1="165" x2="320" y2="165" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="250" y1="205" x2="320" y2="235" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="250" y1="260" x2="320" y2="305" stroke="#3B82F6" strokeWidth="2" />
                  
                  {/* Secure connection indicators */}
                  <circle cx="115" cy="95" r="5" fill="#10B981" />
                  <circle cx="115" cy="165" r="5" fill="#10B981" />
                  <circle cx="115" cy="235" r="5" fill="#10B981" />
                  <circle cx="115" cy="305" r="5" fill="#10B981" />
                  
                  <circle cx="285" cy="95" r="5" fill="#10B981" />
                  <circle cx="285" cy="165" r="5" fill="#10B981" />
                  <circle cx="285" cy="235" r="5" fill="#10B981" />
                  <circle cx="285" cy="305" r="5" fill="#10B981" />
                  
                  {/* Lock symbols for encryption */}
                  <rect x="110" cy="90" width="10" height="10" rx="2" fill="#10B981" opacity="0.6" />
                  <rect x="110" cy="160" width="10" height="10" rx="2" fill="#10B981" opacity="0.6" />
                  <rect x="110" cy="230" width="10" height="10" rx="2" fill="#10B981" opacity="0.6" />
                  <rect x="110" cy="300" width="10" height="10" rx="2" fill="#10B981" opacity="0.6" />
                  
                  <rect x="280" cy="90" width="10" height="10" rx="2" fill="#10B981" opacity="0.6" />
                  <rect x="280" cy="160" width="10" height="10" rx="2" fill="#10B981" opacity="0.6" />
                  <rect x="280" cy="230" width="10" height="10" rx="2" fill="#10B981" opacity="0.6" />
                  <rect x="280" cy="300" width="10" height="10" rx="2" fill="#10B981" opacity="0.6" />
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
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Key Features</h2>
            <p className="text-lg text-slate-600">
              RelayOS Connect™ provides enterprise-grade communication infrastructure
              with the security, scalability, and flexibility your organization needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Industry Solutions</h2>
            <p className="text-lg text-slate-600">
              Discover how RelayOS custom communication solutions serve the unique
              needs of different industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className={`fas ${useCase.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{useCase.title}</h3>
                <p className="text-slate-600 mb-6">
                  {useCase.description}
                </p>
                <Link href={`/solutions/custom-communication/${useCase.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Implementation Process</h2>
            <p className="text-lg text-slate-600">
              Our team works closely with you to design, develop, and deploy your
              custom communication infrastructure.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="text-center p-6 relative z-10">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Discovery</h3>
                <p className="text-slate-600">
                  We analyze your requirements and design a solution architecture.
                </p>
              </div>
              
              <div className="text-center p-6 relative z-10">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Development</h3>
                <p className="text-slate-600">
                  Our engineers build and configure your custom infrastructure.
                </p>
              </div>
              
              <div className="text-center p-6 relative z-10">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Deployment</h3>
                <p className="text-slate-600">
                  We securely deploy your solution with comprehensive testing.
                </p>
              </div>
              
              <div className="text-center p-6 relative z-10">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Support</h3>
                <p className="text-slate-600">
                  Ongoing maintenance, monitoring, and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <div className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-2">
                  CASE STUDY
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">DevSolutions Success</h3>
                <p className="text-slate-600 mb-4">
                  Software company DevSolutions built their collaboration platform on 
                  RelayOS Connect™ and achieved:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">99.99% uptime for mission-critical communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">5x faster message delivery compared to previous solution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">40% reduction in infrastructure costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">Successful scaling to over 1 million concurrent users</span>
                  </li>
                </ul>
              </div>
              
              <Link href="/case-studies/devsolutions" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                Read Full Case Study <ArrowRightIcon className="ml-1" />
              </Link>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Choose RelayOS for Custom Communication</h2>
              <p className="text-lg text-slate-600 mb-8">
                RelayOS Connect™ provides the reliability, security, and flexibility that
                organizations need for mission-critical communication infrastructure.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Enterprise Security</h3>
                    <p className="text-slate-600">Military-grade encryption and compliance with industry standards including SOC 2, GDPR, and HIPAA.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Proven Scalability</h3>
                    <p className="text-slate-600">Infrastructure that has been battle-tested to handle millions of concurrent connections with consistent performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Dedicated Support</h3>
                    <p className="text-slate-600">24/7 technical support and a dedicated account team to ensure your success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Custom Communication Products</h2>
            <p className="text-lg text-slate-600">
              RelayOS offers a range of products to build your custom communication infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-3 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">RelayOS Connect™</h3>
                <p className="text-slate-600 mb-4">
                  Managed communication infrastructure with dedicated server instances 
                  and comprehensive security features.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products/connect">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-3 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">RelayOS Integrate™</h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive APIs and SDKs for custom integration of RelayOS 
                  capabilities into your applications.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products/integrate">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-3 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">RelayOS Enterprise™</h3>
                <p className="text-slate-600 mb-4">
                  Complete enterprise solution with dedicated infrastructure, custom development, 
                  and premium support services.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products/enterprise">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your custom communication solution?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our experts will help you design the perfect infrastructure for your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/products/connect">Learn About RelayOS Connect™</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CustomCommunicationSolutionPage;
