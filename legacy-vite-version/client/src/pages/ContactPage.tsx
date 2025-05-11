import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import ContactForm from '@/components/contact/ContactForm';

export function ContactPage() {
  return (
    <Layout>
      <SEOHead 
        title="Contact Us"
        description="Get in touch with the RelayOS team. We're here to help with your communication infrastructure needs."
      />
      
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Have questions about RelayOS or need help getting started? 
                Our team is here to help you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600 mb-3">For general inquiries and support</p>
                <a href="mailto:info@relayos.com" className="text-primary-600 font-medium">
                  info@relayos.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 mb-3">Monday-Friday, 9am-5pm ET</p>
                <a href="tel:+18005551234" className="text-primary-600 font-medium">
                  +1 (800) 555-1234
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
                <div className="text-primary-500 text-3xl mb-4">
                  <i className="fas fa-comment-dots"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Live Chat</h3>
                <p className="text-slate-600 mb-3">Chat with our support team</p>
                <button className="text-primary-600 font-medium">
                  Start a Chat
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 bg-primary-600 text-white">
                <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">How quickly will I receive a response?</h3>
                <p className="text-slate-600">
                  We typically respond to all inquiries within 24 business hours. For urgent matters, 
                  please call our support line for immediate assistance.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Can I schedule a demo of RelayOS?</h3>
                <p className="text-slate-600">
                  Absolutely! We offer personalized demos for businesses interested in our platform. 
                  Please fill out the contact form and mention you'd like a demo in the message.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Do you offer technical support for existing customers?</h3>
                <p className="text-slate-600">
                  Yes, all RelayOS customers have access to our technical support team. Enterprise customers 
                  receive priority support with dedicated account managers.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Where are RelayOS servers located?</h3>
                <p className="text-slate-600">
                  Our infrastructure is globally distributed with data centers in North America, Europe, and Asia-Pacific 
                  regions to ensure low latency and high availability for all users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
