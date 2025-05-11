import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon, ArrowRightIcon } from '@/lib/icons';

export function EmbedProductPage() {
  const features = [
    {
      title: "No-Code Installation",
      description: "Add chat to your website with a simple code snippet. No development expertise required."
    },
    {
      title: "Custom Branding",
      description: "Match the chat widget to your brand with extensive customization options."
    },
    {
      title: "Visitor Analytics",
      description: "Gain insights into customer behavior, popular topics, and chat performance."
    },
    {
      title: "Multi-Agent Support",
      description: "Route conversations to the right team members based on skills and availability."
    },
    {
      title: "Smart Responses",
      description: "Save time with canned responses and AI-suggested answers to common questions."
    },
    {
      title: "File Sharing",
      description: "Share documents, images, and other files securely within the chat interface."
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Provide real-time assistance to customers browsing your website."
    },
    {
      title: "Lead Generation",
      description: "Engage website visitors and convert them into qualified leads."
    },
    {
      title: "Pre-Sales Consultation",
      description: "Answer product questions and guide customers towards purchase."
    },
    {
      title: "Technical Assistance",
      description: "Help users navigate complex products or troubleshoot issues."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="RelayOS Embed™ - Embeddable Business Chat"
        description="Add customizable, real-time chat to your website, app, or product in minutes with RelayOS Embed™. Increase conversions, improve customer support, and gather valuable insights."
      />
      
      {/* Hero section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-sm font-medium text-primary-100 bg-primary-700 px-3 py-1 rounded-full mb-4">
                B2B PRODUCT
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">RelayOS Embed™</h1>
              <p className="text-2xl font-medium text-primary-200 mb-4">Embeddable Business Chat</p>
              <p className="text-xl text-slate-300 mb-8">
                Add customizable, real-time chat to your website, app, or product in minutes with
                our easy-to-integrate widget. Boost conversions and provide exceptional customer support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/signup" className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-md shadow-lg transition duration-300">
                    Start Free Trial
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact" className="font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2">
                    Request Demo
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
              RelayOS Embed™ comes with everything you need to provide exceptional
              customer support and increase website conversions.
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
              Getting started with RelayOS Embed™ is simple. Follow these steps to
              add real-time chat to your website or application.
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
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Install</h3>
              <p className="text-slate-600">
                Add a simple code snippet to your website.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Chat</h3>
              <p className="text-slate-600">
                Start chatting with your website visitors in real-time.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Installation Code Snippet:</h3>
            <pre className="bg-slate-800 text-slate-300 p-4 rounded-md font-mono text-sm overflow-x-auto">
              {`<script>
  (function(w, d, s, o){
    var j = d.createElement(s);
    j.async = true;
    j.src = 'https://cdn.relayos.com/embed/v1/widget.js';
    j.onload = function(){
      w.RelayOSEmbed.init({
        widgetId: 'YOUR_WIDGET_ID',
        containerId: 'relayos-chat-container'
      });
    };
    d.head.appendChild(j);
  })(window, document, 'script');
</script>
<div id="relayos-chat-container"></div>`}
            </pre>
          </div>
        </div>
      </section>
      
      {/* Use Cases section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Use Cases</h2>
            <p className="text-lg text-slate-600">
              Discover how businesses are using RelayOS Embed™ to improve their customer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-primary-500 text-3xl">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{useCase.title}</h3>
                  <p className="text-slate-600">{useCase.description}</p>
                </div>
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
                <h3 className="text-2xl font-bold text-slate-800 mb-4">How TechCorp Improved Customer Support</h3>
                <p className="text-lg text-slate-600 mb-6">
                  TechCorp implemented RelayOS Embed™ on their e-commerce website and achieved impressive results in just 30 days.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <div>
                      <span className="text-slate-900 font-semibold">50% faster response times</span>
                      <p className="text-slate-600 text-sm">Their team could handle multiple chat sessions simultaneously.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <div>
                      <span className="text-slate-900 font-semibold">32% increase in conversion rate</span>
                      <p className="text-slate-600 text-sm">Visitors who engaged with chat were more likely to purchase.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-500 mt-1" />
                    <div>
                      <span className="text-slate-900 font-semibold">28% reduction in support tickets</span>
                      <p className="text-slate-600 text-sm">Many issues were resolved in chat before becoming tickets.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/case-studies/techcorp" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                  Read Full Case Study <ArrowRightIcon className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl">
                <blockquote className="text-lg text-slate-700 italic mb-6">
                  "RelayOS Embed™ has transformed how we support our customers. The implementation was easy, and the results have been outstanding. Our team is more efficient, and our customers are happier with the immediate support."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-600">
                    SJ
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Sarah Johnson</div>
                    <div className="text-slate-600">CTO, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Pricing</h2>
            <p className="text-lg text-slate-600">
              Choose the right plan for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-2 bg-slate-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Starter</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">$49</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="text-slate-600 mb-6">Perfect for small businesses and startups.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">1 chat widget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Up to 5 agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Basic customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">10,000 chat sessions/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Email support</span>
                  </li>
                </ul>
                
                <Button asChild className="w-full">
                  <Link href="/signup?plan=embed-starter">Start Free Trial</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-primary-500 relative">
              <div className="h-2 bg-primary-500"></div>
              <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Professional</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">$149</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="text-slate-600 mb-6">For growing businesses with multiple websites.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Up to 5 chat widgets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Up to 20 agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Advanced customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">50,000 chat sessions/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Priority email & chat support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Smart responses</span>
                  </li>
                </ul>
                
                <Button asChild className="w-full">
                  <Link href="/signup?plan=embed-professional">Start Free Trial</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-2 bg-slate-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">Custom</span>
                </div>
                <p className="text-slate-600 mb-6">For large organizations with advanced needs.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Unlimited chat widgets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Unlimited agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Full customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Unlimited chat sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Enterprise analytics & BI integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Custom AI integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">SLA guarantees</span>
                  </li>
                </ul>
                
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact?product=embed-enterprise">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
            <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
              See Full Pricing Details <ArrowRightIcon className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Have questions about RelayOS Embed™? Find answers to common questions below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">How does RelayOS Embed™ impact website performance?</h3>
              <p className="text-slate-600">
                RelayOS Embed™ is designed to have minimal impact on your website's load time and performance. 
                The widget loads asynchronously and is optimized for speed. It typically adds less than 100ms 
                to your page load time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I customize the appearance of the chat widget?</h3>
              <p className="text-slate-600">
                Yes, RelayOS Embed™ offers extensive customization options. You can change colors, fonts, 
                and positioning to match your brand. The Professional and Enterprise plans offer even more 
                advanced customization options, including custom CSS and templates.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Does RelayOS Embed™ work on mobile devices?</h3>
              <p className="text-slate-600">
                Absolutely. The chat widget is fully responsive and optimized for all device types including 
                smartphones and tablets. Your customers can engage with your team no matter what device they're using.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Can I integrate with my existing CRM or help desk?</h3>
              <p className="text-slate-600">
                Yes, RelayOS Embed™ integrates with popular CRM and help desk solutions including Salesforce, 
                Zendesk, HubSpot, and more. Custom integrations are available on the Enterprise plan.
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
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your customer experience?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial of RelayOS Embed™ today and see the difference it makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link href="/signup?product=embed">Start Free Trial</Link>
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

export default EmbedProductPage;
