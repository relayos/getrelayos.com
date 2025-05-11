import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'wouter';
import { useState } from 'react';
import { faqs } from '@/lib/data';

export function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  // Support categories with icons
  const supportCategories = [
    {
      title: "Getting Started",
      description: "Setup guides and tutorials",
      icon: "fa-rocket",
      link: "/support/getting-started"
    },
    {
      title: "Technical Documentation",
      description: "API references and guides",
      icon: "fa-book",
      link: "/developers/documentation"
    },
    {
      title: "Account & Billing",
      description: "Manage your subscription",
      icon: "fa-credit-card",
      link: "/support/billing"
    },
    {
      title: "Security",
      description: "Best practices and compliance",
      icon: "fa-shield-alt",
      link: "/support/security"
    },
    {
      title: "Integrations",
      description: "Connect with other platforms",
      icon: "fa-plug",
      link: "/support/integrations"
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      icon: "fa-wrench",
      link: "/support/troubleshooting"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Support Center"
        description="Find help and resources for RelayOS. Browse our documentation, FAQs, and troubleshooting guides."
      />
      
      {/* Hero section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">How can we help you?</h1>
            <p className="text-xl text-primary-100 mb-8">
              Search our knowledge base or browse support categories below
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search for help..."
                className="pl-10 py-6 text-black w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Browse Support Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition duration-300 h-full">
                  <div className="text-primary-500 text-3xl mb-4">
                    <i className={`fas ${category.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{category.title}</h3>
                  <p className="text-slate-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            {searchQuery && filteredFaqs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-slate-600">No results found for "{searchQuery}".</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-6 mt-8">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Contact options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Need More Help?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Our support team is available to assist you with any questions or issues.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-lg">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className="fas fa-ticket-alt"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Submit a Ticket</h3>
                <p className="text-slate-600 mb-4">Get help from our support team</p>
                <Button variant="outline" asChild>
                  <Link href="/support/new-ticket">Open Ticket</Link>
                </Button>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-lg">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Live Chat</h3>
                <p className="text-slate-600 mb-4">Chat with a support agent</p>
                <Button variant="outline">Start Chat</Button>
              </div>
              
              <div className="p-6 bg-slate-50 rounded-lg">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone Support</h3>
                <p className="text-slate-600 mb-4">For urgent assistance</p>
                <Button variant="outline" asChild>
                  <a href="tel:+18005551234">Call Support</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Documentation CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Looking for Technical Documentation?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our comprehensive developer documentation includes API references, 
            integration guides, and code examples.
          </p>
          <Button variant="secondary" asChild>
            <Link href="/developers/documentation">View Documentation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

export default SupportPage;
