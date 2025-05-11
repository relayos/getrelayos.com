import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRightIcon, CommentsIcon, ServerIcon, UsersIcon } from '@/lib/icons';

export function SolutionsPage() {
  const solutions = [
    {
      title: "Business Chat",
      description: "Seamless customer support and communication solutions for your business website and applications.",
      icon: "fa-comments",
      iconComponent: <CommentsIcon className="text-primary-500" />,
      benefits: [
        "Improve customer satisfaction with real-time support",
        "Reduce response times and increase efficiency",
        "Integrate seamlessly with your existing website or app",
        "Access comprehensive analytics and insights"
      ],
      link: "/solutions/business-chat"
    },
    {
      title: "Custom Communication",
      description: "Tailored real-time messaging infrastructure built to your specific business requirements.",
      icon: "fa-server",
      iconComponent: <ServerIcon className="text-primary-500" />,
      benefits: [
        "Dedicated infrastructure that scales with your needs",
        "Enterprise-grade security and compliance features",
        "Customizable to match your exact business processes",
        "Full control over data and messaging flows"
      ],
      link: "/solutions/custom-communication"
    },
    {
      title: "Online Communities",
      description: "Build and manage thriving digital communities with powerful moderation and engagement tools.",
      icon: "fa-users",
      iconComponent: <UsersIcon className="text-primary-500" />,
      benefits: [
        "Foster deeper engagement with your audience",
        "Powerful moderation tools to maintain healthy interactions",
        "Detailed analytics to understand community dynamics",
        "Rich customization options for branded experiences"
      ],
      link: "/solutions/online-communities"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Solutions"
        description="RelayOS provides tailored communication solutions for businesses of all sizes. Explore our business chat, custom infrastructure, and community management solutions."
      />
      
      {/* Hero section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Communication Solutions for Every Business Need
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              From customer service to team collaboration and community building, RelayOS
              offers tailored solutions to enhance your communication infrastructure.
            </p>
            <Button asChild>
              <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md shadow-lg transition duration-300">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Solutions Overview section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Solutions</h2>
            <p className="text-lg text-slate-600">
              RelayOS provides adaptable communication infrastructure to support your
              specific business requirements, from customer engagement to internal collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-md transition duration-300">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className={`fas ${solution.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{solution.title}</h3>
                <p className="text-slate-600 mb-6">{solution.description}</p>
                <Link href={solution.link} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Solution Cards */}
      {solutions.map((solution, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 !== 0 ? 'order-2' : ''}`}>
                <div className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
                  RelayOS Solution
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{solution.title}</h3>
                <p className="text-lg text-slate-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="text-primary-500 text-lg mt-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href={solution.link}>
                      Explore {solution.title}
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      Talk to Sales
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className={`bg-slate-100 p-10 rounded-xl flex items-center justify-center ${index % 2 !== 0 ? 'order-1' : ''}`}>
                {/* SVG illustration related to the solution */}
                <svg 
                  viewBox="0 0 400 300" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto max-w-md"
                >
                  <rect width="400" height="300" fill="#F8FAFC" rx="8" />
                  
                  {index === 0 && (
                    <>
                      {/* Business Chat illustration */}
                      <rect x="50" y="40" width="300" height="220" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                      <rect x="50" y="40" width="300" height="50" rx="8 8 0 0" fill="#3B82F6" />
                      <text x="70" y="70" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#FFFFFF">Customer Support</text>
                      
                      {/* Chat messages */}
                      <rect x="70" y="110" width="180" height="40" rx="8" fill="#F1F5F9" />
                      <rect x="150" y="160" width="180" height="40" rx="8" fill="#3B82F6" opacity="0.2" />
                      <rect x="70" y="210" width="180" height="40" rx="8" fill="#F1F5F9" />
                      
                      {/* Agent avatar */}
                      <circle cx="300" cy="65" r="12" fill="#FFFFFF" />
                      <text x="300" y="70" fontSize="12" textAnchor="middle" fill="#3B82F6">A</text>
                    </>
                  )}
                  
                  {index === 1 && (
                    <>
                      {/* Custom Communication illustration */}
                      <rect x="70" y="60" width="260" height="180" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                      
                      {/* Server icon */}
                      <rect x="100" y="80" width="80" height="140" rx="4" fill="#3B82F6" opacity="0.1" stroke="#3B82F6" strokeWidth="2" />
                      <line x1="100" y1="100" x2="180" y2="100" stroke="#3B82F6" strokeWidth="1" />
                      <line x1="100" y1="120" x2="180" y2="120" stroke="#3B82F6" strokeWidth="1" />
                      <line x1="100" y1="140" x2="180" y2="140" stroke="#3B82F6" strokeWidth="1" />
                      <line x1="100" y1="160" x2="180" y2="160" stroke="#3B82F6" strokeWidth="1" />
                      <line x1="100" y1="180" x2="180" y2="180" stroke="#3B82F6" strokeWidth="1" />
                      
                      {/* Connection lines */}
                      <line x1="180" y1="130" x2="220" y2="100" stroke="#3B82F6" strokeWidth="2" />
                      <line x1="180" y1="150" x2="220" y2="150" stroke="#3B82F6" strokeWidth="2" />
                      <line x1="180" y1="170" x2="220" y2="200" stroke="#3B82F6" strokeWidth="2" />
                      
                      {/* Devices */}
                      <rect x="220" y="80" width="60" height="40" rx="4" fill="#E2E8F0" />
                      <rect x="220" y="130" width="60" height="40" rx="4" fill="#E2E8F0" />
                      <rect x="220" y="180" width="60" height="40" rx="4" fill="#E2E8F0" />
                    </>
                  )}
                  
                  {index === 2 && (
                    <>
                      {/* Online Communities illustration */}
                      <circle cx="200" cy="150" r="100" fill="#3B82F6" opacity="0.1" />
                      
                      {/* Community members */}
                      <circle cx="160" cy="100" r="25" fill="#3B82F6" opacity="0.3" />
                      <circle cx="160" cy="100" r="15" fill="#3B82F6" />
                      
                      <circle cx="240" cy="100" r="25" fill="#3B82F6" opacity="0.3" />
                      <circle cx="240" cy="100" r="15" fill="#3B82F6" />
                      
                      <circle cx="130" cy="170" r="25" fill="#3B82F6" opacity="0.3" />
                      <circle cx="130" cy="170" r="15" fill="#3B82F6" />
                      
                      <circle cx="200" cy="190" r="25" fill="#3B82F6" opacity="0.3" />
                      <circle cx="200" cy="190" r="15" fill="#3B82F6" />
                      
                      <circle cx="270" cy="170" r="25" fill="#3B82F6" opacity="0.3" />
                      <circle cx="270" cy="170" r="15" fill="#3B82F6" />
                      
                      {/* Connection lines */}
                      <line x1="160" y1="100" x2="240" y2="100" stroke="#3B82F6" strokeWidth="2" />
                      <line x1="160" y1="100" x2="130" y2="170" stroke="#3B82F6" strokeWidth="2" />
                      <line x1="130" y1="170" x2="200" y2="190" stroke="#3B82F6" strokeWidth="2" />
                      <line x1="200" y1="190" x2="270" y2="170" stroke="#3B82F6" strokeWidth="2" />
                      <line x1="270" y1="170" x2="240" y2="100" stroke="#3B82F6" strokeWidth="2" />
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Case Studies */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600">
              See how organizations like yours have transformed their communication capabilities with RelayOS solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-40 bg-primary-900 relative overflow-hidden">
                <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="400" height="160" fill="#1E40AF" />
                  <circle cx="350" cy="30" r="100" fill="#3B82F6" opacity="0.3" />
                  <circle cx="50" cy="140" r="80" fill="#3B82F6" opacity="0.2" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-xl">TechCorp</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">50% Faster Response Times</h3>
                <p className="text-slate-600 mb-4">
                  TechCorp implemented RelayOS Business Chat to improve their customer support efficiency, 
                  resulting in dramatically reduced response times and higher satisfaction scores.
                </p>
                <Link href="/case-studies/techcorp" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Read Case Study <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-40 bg-primary-900 relative overflow-hidden">
                <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="400" height="160" fill="#1E40AF" />
                  <circle cx="350" cy="30" r="100" fill="#3B82F6" opacity="0.3" />
                  <circle cx="50" cy="140" r="80" fill="#3B82F6" opacity="0.2" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-xl">DevSolutions</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Custom Infrastructure at Scale</h3>
                <p className="text-slate-600 mb-4">
                  DevSolutions built their entire collaboration platform on RelayOS Connect™, handling
                  millions of messages daily with 99.99% uptime and enterprise-grade security.
                </p>
                <Link href="/case-studies/devsolutions" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Read Case Study <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-40 bg-primary-900 relative overflow-hidden">
                <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="400" height="160" fill="#1E40AF" />
                  <circle cx="350" cy="30" r="100" fill="#3B82F6" opacity="0.3" />
                  <circle cx="50" cy="140" r="80" fill="#3B82F6" opacity="0.2" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-xl">CreatorSpace</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">30% Growth in Community Engagement</h3>
                <p className="text-slate-600 mb-4">
                  CreatorSpace used RelayOS Communities™ to revitalize their online platform, resulting in
                  significantly higher engagement and a more vibrant community experience.
                </p>
                <Link href="/case-studies/creatorspace" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Read Case Study <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Communication Infrastructure?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our team of experts will help you identify the right RelayOS solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SolutionsPage;
