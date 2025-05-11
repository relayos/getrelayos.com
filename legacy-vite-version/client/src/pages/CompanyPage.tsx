import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@/lib/icons';
import { Link } from 'wouter';

export function CompanyPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      title: "Founder & CEO",
      bio: "Alex has over 15 years of experience in building communication platforms and infrastructure systems."
    },
    {
      name: "Sarah Miller",
      title: "Chief Technology Officer",
      bio: "Sarah leads our engineering teams and guides the technical vision for RelayOS."
    },
    {
      name: "Michael Chang",
      title: "Head of Product",
      bio: "Michael oversees product strategy and ensures our solutions meet the needs of our diverse customer base."
    },
    {
      name: "Linda Park",
      title: "VP of Customer Success",
      bio: "Linda ensures our customers receive exceptional support and achieve their communication goals."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="About RelayOS"
        description="Learn about RelayOS, our mission to transform communication infrastructure, and the team behind our platform."
      />
      
      {/* Hero section */}
      <section className="pt-20 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Mission</h1>
            <p className="text-xl text-slate-600 mb-8">
              We're building the next generation of communication infrastructure that enables 
              businesses and communities to connect, collaborate, and communicate with 
              security, scalability, and flexibility at its core.
            </p>
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About RelayOS</h2>
              <p className="text-slate-600 mb-4">
                Founded in 2021, RelayOS emerged from a simple observation: despite the proliferation of communication 
                tools, businesses and communities still struggled with fragmented, insecure, and inflexible solutions.
              </p>
              <p className="text-slate-600 mb-4">
                We saw an opportunity to build a robust communication infrastructure that leverages the battle-tested
                reliability of IRCv3 while adding modern capabilities like AI integration, persistent messaging, and 
                enterprise-grade security.
              </p>
              <p className="text-slate-600">
                Today, RelayOS powers communication for businesses of all sizes, from startups to enterprises, 
                providing them with the tools they need to connect effectively with their teams, customers, and communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Security First</h4>
                    <p className="text-slate-600">We build with security and privacy as foundational principles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-code"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Developer Empowerment</h4>
                    <p className="text-slate-600">We create tools that developers love to work with.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Scalable Solutions</h4>
                    <p className="text-slate-600">Our infrastructure grows with your needs, from startups to enterprises.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary-500 text-xl mt-1">
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Customer Success</h4>
                    <p className="text-slate-600">We're dedicated to helping our customers achieve their goals.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16 bg-white" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-slate-600">
              Meet the experienced team behind RelayOS who are passionate about building 
              the future of communication infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400 text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-3">{member.title}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Careers section */}
      <section className="py-16 bg-slate-50" id="careers">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Join Our Team</h2>
            <p className="text-slate-600 mb-8">
              We're looking for talented individuals who are passionate about building 
              the future of communication technology.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-left mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Work at RelayOS?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-primary-500 mt-1"></i>
                  <span className="text-slate-600">Work on cutting-edge communication infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-primary-500 mt-1"></i>
                  <span className="text-slate-600">Flexible remote-first work environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-primary-500 mt-1"></i>
                  <span className="text-slate-600">Competitive compensation and benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-primary-500 mt-1"></i>
                  <span className="text-slate-600">Collaborative and supportive team culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-primary-500 mt-1"></i>
                  <span className="text-slate-600">Opportunity to impact businesses and communities worldwide</span>
                </li>
              </ul>
            </div>
            
            <Button asChild>
              <Link href="/careers" className="inline-flex items-center gap-2">
                View Open Positions <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have questions about RelayOS?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you learn more about how RelayOS can transform 
            your communication infrastructure.
          </p>
          <Button asChild variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

export default CompanyPage;
