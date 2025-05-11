import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircleIcon, ArrowRightIcon } from '@/lib/icons';

export function BusinessChatSolutionPage() {
  const features = [
    {
      title: "Easy Website Integration",
      description: "Add real-time chat to your website with just a few lines of code. No technical expertise required."
    },
    {
      title: "Customizable Interface",
      description: "Match the chat widget to your brand with extensive customization options for colors, positioning, and behavior."
    },
    {
      title: "Multi-Agent Routing",
      description: "Automatically route customer inquiries to the right department or agent based on availability and expertise."
    },
    {
      title: "AI-Powered Assistance",
      description: "Deploy intelligent chatbots to handle common questions and provide 24/7 customer support."
    },
    {
      title: "Visitor Analytics",
      description: "Gain insights into customer behavior and chat performance with comprehensive analytics."
    },
    {
      title: "Omnichannel Support",
      description: "Connect with customers across web, mobile, and social platforms from a single interface."
    }
  ];

  const benefits = [
    {
      title: "Increase Conversion Rates",
      description: "Convert more website visitors into customers by offering immediate assistance during the buying process.",
      icon: "fa-chart-line"
    },
    {
      title: "Reduce Support Costs",
      description: "Lower support costs by efficiently handling multiple chat conversations simultaneously.",
      icon: "fa-dollar-sign"
    },
    {
      title: "Improve Customer Satisfaction",
      description: "Provide faster, more personalized support to enhance overall customer experience.",
      icon: "fa-smile"
    },
    {
      title: "Gather Customer Insights",
      description: "Collect valuable feedback and insights directly from customer interactions.",
      icon: "fa-lightbulb"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Business Chat Solution"
        description="Enhance your customer support with RelayOS Embed™, our customizable business chat solution that integrates seamlessly with your website and applications."
      />
      
      {/* Hero section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-sm font-medium text-primary-100 bg-primary-700 px-3 py-1 rounded-full mb-4">
                RelayOS Solution
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Chat Solution</h1>
              <p className="text-xl text-slate-300 mb-8">
                Connect with your customers in real-time using our embeddable business chat solution.
                Provide instant support, increase conversions, and build stronger relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/products/embed" className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-md shadow-lg transition duration-300">
                    Learn About RelayOS Embed™
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact" className="font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2">
                    Schedule Demo
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
                {/* Website mockup */}
                <rect width="600" height="400" fill="#1E293B" rx="8" />
                
                {/* Website content */}
                <rect x="40" y="30" width="520" height="50" fill="#334155" rx="4" />
                <rect x="40" y="100" width="300" height="30" fill="#475569" rx="4" />
                <rect x="40" y="150" width="350" height="180" fill="#475569" rx="4" opacity="0.7" />
                <rect x="410" y="150" width="150" height="100" fill="#475569" rx="4" opacity="0.7" />
                <rect x="410" y="270" width="150" height="60" fill="#475569" rx="4" opacity="0.7" />
                
                {/* Chat widget */}
                <rect x="430" y="300" width="140" height="70" fill="#3B82F6" rx="8" />
                <rect x="430" y="300" width="140" height="25" fill="#2563EB" rx="8 8 0 0" />
                <text x="455" y="317" fontFamily="Arial" fontSize="12" fill="white">Customer Support</text>
                <circle cx="550" cy="312" r="7" fill="white" />
                <text x="550" y="315" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#2563EB">×</text>
                
                <text x="455" y="345" fontFamily="Arial" fontSize="10" fill="white">How can we help you today?</text>
                <rect x="440" y="355" width="120" height="8" rx="4" fill="white" opacity="0.3" />
                
                {/* Active chat bubble */}
                <g transform="translate(350, 200)">
                  <rect width="230" height="160" fill="#1E293B" rx="8" />
                  <rect width="230" height="30" fill="#2563EB" rx="8 8 0 0" />
                  <text x="15" y="20" fontFamily="Arial" fontSize="12" fill="white">Live Chat with Support</text>
                  
                  <rect x="10" y="40" width="150" height="30" rx="15" fill="#475569" />
                  <text x="20" y="60" fontFamily="Arial" fontSize="10" fill="white">Hi, I need help with my order</text>
                  
                  <rect x="70" y="80" width="150" height="30" rx="15" fill="#3B82F6" />
                  <text x="85" y="100" fontFamily="Arial" fontSize="10" fill="white">I'd be happy to help! What's your order number?</text>
                  
                  <rect x="10" y="120" width="210" height="25" rx="4" fill="white" opacity="0.1" />
                  <text x="20" y="137" fontFamily="Arial" fontSize="10" fill="white" opacity="0.6">Type your message...</text>
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
              Our business chat solution includes everything you need to deliver exceptional
              customer support and improve engagement on your website.
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
      
      {/* How It Works section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">
              Getting started with RelayOS business chat is simple. Follow these steps to
              integrate real-time chat support into your website or application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Sign Up</h3>
              <p className="text-slate-600">
                Create your RelayOS account and access the dashboard.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Configure</h3>
              <p className="text-slate-600">
                Customize your chat widget to match your brand.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Integrate</h3>
              <p className="text-slate-600">
                Add a simple code snippet to your website.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Launch</h3>
              <p className="text-slate-600">
                Start chatting with your customers in real-time.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Business Benefits</h2>
              <p className="text-lg text-slate-600 mb-8">
                Implementing RelayOS Business Chat provides tangible benefits for your organization, 
                from improved customer satisfaction to increased conversion rates.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-primary-500 text-xl mt-1">
                      <i className={`fas ${benefit.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-1">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <div className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-2">
                  CASE STUDY
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">E-Commerce Success</h3>
                <p className="text-slate-600 mb-4">
                  Online retailer TechCorp implemented RelayOS Business Chat and achieved:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">50% faster response times to customer inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">32% increase in conversion rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">28% reduction in support ticket volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">4.8/5 average customer satisfaction rating</span>
                  </li>
                </ul>
              </div>
              
              <Link href="/case-studies/techcorp" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                Read Full Case Study <ArrowRightIcon className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Business Chat Products</h2>
            <p className="text-lg text-slate-600">
              Explore our suite of business chat products designed to enhance your customer communication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-3 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">RelayOS Embed™</h3>
                <p className="text-slate-600 mb-4">
                  Embeddable chat widget for your website with customizable interface, 
                  visitor tracking, and multi-agent support.
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Starting at</p>
                    <p className="text-2xl font-bold text-slate-800">$49<span className="text-sm font-normal text-slate-600">/month</span></p>
                  </div>
                  <Button asChild variant="outline">
                    <Link href="/products/embed">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-3 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">RelayOS Embed™ Pro</h3>
                <p className="text-slate-600 mb-4">
                  Advanced features including AI-powered chatbots, advanced analytics, 
                  and omnichannel support across web, mobile, and social.
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Starting at</p>
                    <p className="text-2xl font-bold text-slate-800">$149<span className="text-sm font-normal text-slate-600">/month</span></p>
                  </div>
                  <Button asChild variant="outline">
                    <Link href="/products/embed-pro">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
              View All Pricing Options <ArrowRightIcon className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your customer communication?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BusinessChatSolutionPage;
