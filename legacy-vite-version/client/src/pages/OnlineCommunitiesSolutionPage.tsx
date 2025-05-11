import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircleIcon, ArrowRightIcon } from '@/lib/icons';

export function OnlineCommunitiesSolutionPage() {
  const features = [
    {
      title: "Powerful Moderation Tools",
      description: "Advanced tools to manage members, content, and maintain a healthy community environment."
    },
    {
      title: "Custom Spaces",
      description: "Create dedicated channels, groups, and areas for different topics and user segments."
    },
    {
      title: "Rich Media Support",
      description: "Share images, videos, files, and other content formats to enhance engagement."
    },
    {
      title: "Community Analytics",
      description: "Comprehensive insights into member activity, engagement patterns, and growth metrics."
    },
    {
      title: "Integration Capabilities",
      description: "Connect your community with other tools and platforms in your tech stack."
    },
    {
      title: "Customizable Permissions",
      description: "Granular control over roles, permissions, and access levels for different user groups."
    }
  ];

  const benefits = [
    {
      title: "Increase Member Engagement",
      description: "Foster meaningful connections that keep members active and engaged.",
      icon: "fa-users"
    },
    {
      title: "Build Brand Loyalty",
      description: "Create a space where your audience feels connected to your brand and each other.",
      icon: "fa-heart"
    },
    {
      title: "Gather Valuable Feedback",
      description: "Learn directly from your community to improve products and services.",
      icon: "fa-comments"
    },
    {
      title: "Reduce Support Costs",
      description: "Enable community-based support where members help each other.",
      icon: "fa-life-ring"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Online Communities Solution"
        description="Build and manage thriving digital communities with RelayOS Communities™. Powerful moderation tools, engagement features, and analytics for community managers."
      />
      
      {/* Hero section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-sm font-medium text-primary-100 bg-primary-700 px-3 py-1 rounded-full mb-4">
                RelayOS Solution
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Online Communities Solution</h1>
              <p className="text-xl text-slate-300 mb-8">
                Build vibrant, engaged communities with powerful moderation tools,
                rich interaction features, and comprehensive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/products/communities" className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-md shadow-lg transition duration-300">
                    Learn About RelayOS Communities™
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact" className="font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2">
                    Talk to an Expert
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
                
                {/* Community platform illustration */}
                <circle cx="300" cy="200" r="150" fill="#3B82F6" opacity="0.1" />
                
                {/* Members */}
                <g>
                  {/* Member 1 */}
                  <circle cx="220" cy="120" r="40" fill="#3B82F6" opacity="0.2" />
                  <circle cx="220" cy="120" r="25" fill="#3B82F6" />
                  <text x="220" y="125" fontSize="14" textAnchor="middle" fill="white">M1</text>
                  
                  {/* Member 2 */}
                  <circle cx="380" cy="120" r="40" fill="#3B82F6" opacity="0.2" />
                  <circle cx="380" cy="120" r="25" fill="#3B82F6" />
                  <text x="380" y="125" fontSize="14" textAnchor="middle" fill="white">M2</text>
                  
                  {/* Member 3 */}
                  <circle cx="180" cy="240" r="40" fill="#3B82F6" opacity="0.2" />
                  <circle cx="180" cy="240" r="25" fill="#3B82F6" />
                  <text x="180" y="245" fontSize="14" textAnchor="middle" fill="white">M3</text>
                  
                  {/* Member 4 */}
                  <circle cx="300" cy="280" r="40" fill="#3B82F6" opacity="0.2" />
                  <circle cx="300" cy="280" r="25" fill="#3B82F6" />
                  <text x="300" y="285" fontSize="14" textAnchor="middle" fill="white">M4</text>
                  
                  {/* Member 5 */}
                  <circle cx="420" cy="240" r="40" fill="#3B82F6" opacity="0.2" />
                  <circle cx="420" cy="240" r="25" fill="#3B82F6" />
                  <text x="420" y="245" fontSize="14" textAnchor="middle" fill="white">M5</text>
                </g>
                
                {/* Connections */}
                <line x1="220" y1="120" x2="380" y2="120" stroke="#3B82F6" strokeWidth="2" />
                <line x1="220" y1="120" x2="180" y2="240" stroke="#3B82F6" strokeWidth="2" />
                <line x1="180" y1="240" x2="300" y2="280" stroke="#3B82F6" strokeWidth="2" />
                <line x1="300" y1="280" x2="420" y2="240" stroke="#3B82F6" strokeWidth="2" />
                <line x1="420" y1="240" x2="380" y2="120" stroke="#3B82F6" strokeWidth="2" />
                <line x1="220" y1="120" x2="300" y2="280" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />
                <line x1="380" y1="120" x2="180" y2="240" stroke="#3B82F6" strokeWidth="2" opacity="0.5" />
                
                {/* Chat bubbles */}
                <g>
                  <rect x="250" y="170" width="100" height="40" rx="20" fill="white" opacity="0.2" />
                  <rect x="180" y="320" width="90" height="30" rx="15" fill="white" opacity="0.2" />
                  <rect x="330" y="330" width="80" height="30" rx="15" fill="white" opacity="0.2" />
                </g>
                
                {/* Activity indicators */}
                <circle cx="220" cy="120" r="5" fill="#10B981" />
                <circle cx="380" cy="120" r="5" fill="#10B981" />
                <circle cx="180" cy="240" r="5" fill="#10B981" />
                <circle cx="300" cy="280" r="5" fill="#10B981" />
                <circle cx="420" cy="240" r="5" fill="#10B981" />
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
              RelayOS Communities™ provides everything you need to build and manage
              thriving online communities.
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
      
      {/* Community Types section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Community Types</h2>
            <p className="text-lg text-slate-600">
              RelayOS Communities™ is flexible enough to support various community types and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="p-6">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Brand Communities</h3>
                <p className="text-slate-600 mb-4">
                  Create dedicated spaces for your brand enthusiasts to connect, share experiences, 
                  and provide valuable feedback for product development.
                </p>
                <Link href="/solutions/online-communities/brand" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="p-6">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Learning Communities</h3>
                <p className="text-slate-600 mb-4">
                  Build educational spaces where knowledge sharing, mentorship, and
                  collaborative learning thrive among students and instructors.
                </p>
                <Link href="/solutions/online-communities/learning" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="p-6">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Professional Networks</h3>
                <p className="text-slate-600 mb-4">
                  Foster industry connections, facilitate knowledge exchange, and create
                  networking opportunities for professionals in your field.
                </p>
                <Link href="/solutions/online-communities/professional" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Learn More <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Benefits of Online Communities</h2>
              <p className="text-lg text-slate-600 mb-8">
                Building a thriving online community creates substantial value for your
                organization and your audience.
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
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm order-1 lg:order-2">
              <div className="mb-6">
                <div className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-2">
                  CASE STUDY
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">CreatorSpace Success</h3>
                <p className="text-slate-600 mb-4">
                  Content creation platform CreatorSpace implemented RelayOS Communities™ and achieved:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">30% increase in overall community engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">25% reduction in member churn rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">45% faster issue resolution through community support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <span className="text-slate-700">3.5x increase in user-generated content</span>
                  </li>
                </ul>
              </div>
              
              <Link href="/case-studies/creatorspace" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                Read Full Case Study <ArrowRightIcon className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">
              Building your community with RelayOS is a straightforward process
              designed to get you up and running quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Setup</h3>
              <p className="text-slate-600">
                Define your community structure, create channels, and configure your branding.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Customize</h3>
              <p className="text-slate-600">
                Set up roles, permissions, and configure moderation settings to match your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Invite</h3>
              <p className="text-slate-600">
                Invite your audience through email, social media, or by embedding community widgets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Grow</h3>
              <p className="text-slate-600">
                Foster engagement, analyze community health, and implement improvements.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/signup">Start Building Your Community</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Products section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Community Solutions</h2>
            <p className="text-lg text-slate-600">
              Choose the right RelayOS community solution for your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-3 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">RelayOS Communities™ Basic</h3>
                <p className="text-slate-600 mb-4">
                  Essential features for small communities, including basic moderation tools
                  and engagement features.
                </p>
                <div className="mt-4">
                  <p className="text-sm text-slate-500 mb-1">Starting at</p>
                  <p className="text-2xl font-bold text-slate-800">$99<span className="text-sm font-normal text-slate-600">/month</span></p>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/products/communities-basic">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-3 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">RelayOS Communities™ Pro</h3>
                <p className="text-slate-600 mb-4">
                  Advanced features for growing communities, including comprehensive analytics,
                  advanced moderation, and custom branding.
                </p>
                <div className="mt-4">
                  <p className="text-sm text-slate-500 mb-1">Starting at</p>
                  <p className="text-2xl font-bold text-slate-800">$249<span className="text-sm font-normal text-slate-600">/month</span></p>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/products/communities-pro">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-3 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">RelayOS Communities™ Enterprise</h3>
                <p className="text-slate-600 mb-4">
                  Complete solution for large organizations with custom development,
                  dedicated support, and advanced security features.
                </p>
                <div className="mt-4">
                  <p className="text-sm text-slate-500 mb-1">Custom pricing</p>
                  <p className="text-2xl font-bold text-slate-800">Contact us</p>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/contact">Request Quote</Link>
                </Button>
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
          <h2 className="text-3xl font-bold mb-6">Ready to build your thriving community?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial of RelayOS Communities™ and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default OnlineCommunitiesSolutionPage;
