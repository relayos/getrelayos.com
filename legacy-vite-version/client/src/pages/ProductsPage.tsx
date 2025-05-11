import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/seo/SEOHead';
import { Link } from 'wouter';
import { allProducts, b2bProducts, b2cProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@/lib/icons';
import ProductCard from '@/components/shared/ProductCard';

export function ProductsPage() {
  return (
    <Layout>
      <SEOHead 
        title="Products"
        description="Explore RelayOS products for business communication and community building. From embeddable chat widgets to advanced communication infrastructure and persistent messaging."
      />
      
      {/* Hero section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">RelayOS Product Suite</h1>
            <p className="text-xl text-slate-300 mb-8">
              Our comprehensive product portfolio provides communication solutions
              for businesses and communities of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="#b2b-products" className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-md shadow-lg transition duration-300">
                  Business Solutions
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="#b2c-products" className="font-medium py-3 px-6 rounded-md transition duration-300">
                  Consumer Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* B2B Products section */}
      <section id="b2b-products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
              FOR BUSINESSES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Business Communication Solutions</h2>
            <p className="text-lg text-slate-600">
              Enterprise-grade infrastructure and tools to enhance your business communications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {b2bProducts.map((product, index) => (
              <ProductCard 
                key={index}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Enterprise Call-out section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
                  ENTERPRISE SOLUTION
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">RelayOS Enterprise</h3>
                <p className="text-lg text-slate-600 mb-6">
                  A complete communication solution tailored to your organization's specific needs with 
                  dedicated infrastructure, custom development, and premium support.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Custom implementation based on your requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Dedicated support team and account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Enterprise-grade security and compliance features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-primary-500 mt-1"></i>
                    <span className="text-slate-700">Unlimited scale with guaranteed SLAs</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
              <div className="bg-slate-100 p-8 flex items-center justify-center">
                <svg 
                  viewBox="0 0 400 300" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto max-w-md"
                >
                  <rect width="400" height="300" fill="#F8FAFC" rx="8" />
                  
                  {/* Enterprise architecture illustration */}
                  <rect x="50" y="50" width="300" height="200" rx="8" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="2" />
                  
                  {/* Server cluster */}
                  <rect x="100" y="80" width="60" height="140" rx="4" fill="#3B82F6" opacity="0.1" stroke="#3B82F6" strokeWidth="2" />
                  <rect x="110" y="100" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="110" y="120" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="110" y="140" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="110" y="160" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="110" y="180" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  
                  {/* Server cluster 2 */}
                  <rect x="240" y="80" width="60" height="140" rx="4" fill="#3B82F6" opacity="0.1" stroke="#3B82F6" strokeWidth="2" />
                  <rect x="250" y="100" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="250" y="120" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="250" y="140" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="250" y="160" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="250" y="180" width="40" height="10" rx="2" fill="#3B82F6" opacity="0.6" />
                  
                  {/* Connection lines */}
                  <line x1="160" y1="130" x2="240" y2="130" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="160" y1="150" x2="240" y2="150" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="160" y1="170" x2="240" y2="170" stroke="#3B82F6" strokeWidth="2" />
                  
                  {/* Lock icon */}
                  <circle cx="200" cy="100" r="25" fill="#3B82F6" opacity="0.2" />
                  <rect x="190" y="95" width="20" height="15" rx="2" fill="#3B82F6" />
                  <rect x="195" y="85" width="10" height="10" rx="2" fill="#3B82F6" />
                  
                  {/* Shield icon */}
                  <path d="M200,220 L180,200 L200,180 L220,200 Z" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* B2C Products section */}
      <section id="b2c-products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
              FOR INDIVIDUALS & COMMUNITIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Premium Communication Services</h2>
            <p className="text-lg text-slate-600">
              Enhanced experiences for individuals and communities seeking reliable,
              feature-rich communication tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {b2cProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl group">
                <div className="h-48 bg-primary-900 relative overflow-hidden">
                  {/* Product image */}
                  <img 
                    src={product.image}
                    alt={`${product.name} interface`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <p className="text-primary-100">{product.tagline}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 mb-6">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <i className="fas fa-check-circle text-primary-500 mt-1"></i>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href={product.link}>
                        Learn More
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/signup">
                        Start Free Trial
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Product Comparison</h2>
            <p className="text-lg text-slate-600">
              Compare our products to find the right solution for your needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">Feature</th>
                  {allProducts.map((product, index) => (
                    <th key={index} className="px-6 py-4 text-center text-sm font-medium text-slate-600">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">Type</td>
                  {allProducts.map((product, index) => (
                    <td key={index} className="px-6 py-4 text-center text-sm text-slate-700">
                      {product.type === 'b2b' ? 'Business' : 'Consumer'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">Scalability</td>
                  {allProducts.map((product, index) => (
                    <td key={index} className="px-6 py-4 text-center text-sm text-slate-700">
                      {product.name.includes('Embed') ? 'Medium' : 
                       product.name.includes('Connect') ? 'Unlimited' : 
                       product.name.includes('Integrate') ? 'High' : 
                       product.name.includes('Persist') ? 'Medium' : 'High'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">Customization</td>
                  {allProducts.map((product, index) => (
                    <td key={index} className="px-6 py-4 text-center text-sm text-slate-700">
                      {product.name.includes('Embed') ? 'Moderate' : 
                       product.name.includes('Connect') ? 'Extensive' : 
                       product.name.includes('Integrate') ? 'Extensive' : 
                       product.name.includes('Persist') ? 'Basic' : 'Advanced'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">Setup Complexity</td>
                  {allProducts.map((product, index) => (
                    <td key={index} className="px-6 py-4 text-center text-sm text-slate-700">
                      {product.name.includes('Embed') ? 'Easy' : 
                       product.name.includes('Connect') ? 'Complex' : 
                       product.name.includes('Integrate') ? 'Moderate' : 
                       product.name.includes('Persist') ? 'Easy' : 'Moderate'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">Actions</td>
                  {allProducts.map((product, index) => (
                    <td key={index} className="px-6 py-4 text-center text-sm text-slate-700">
                      <Link 
                        href={product.link} 
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center justify-center gap-1"
                      >
                        Details <ArrowRightIcon className="ml-1" />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Integrations section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Works With Your Tools</h2>
            <p className="text-lg text-slate-600">
              RelayOS integrates seamlessly with your existing tools and workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Integration logos as SVGs */}
            <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-32">
              <rect width="120" height="60" rx="4" fill="transparent" />
              <text x="60" y="35" fontSize="16" fontWeight="500" textAnchor="middle" fill="#64748B">Slack</text>
            </svg>
            
            <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-32">
              <rect width="120" height="60" rx="4" fill="transparent" />
              <text x="60" y="35" fontSize="16" fontWeight="500" textAnchor="middle" fill="#64748B">Microsoft Teams</text>
            </svg>
            
            <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-32">
              <rect width="120" height="60" rx="4" fill="transparent" />
              <text x="60" y="35" fontSize="16" fontWeight="500" textAnchor="middle" fill="#64748B">Salesforce</text>
            </svg>
            
            <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-32">
              <rect width="120" height="60" rx="4" fill="transparent" />
              <text x="60" y="35" fontSize="16" fontWeight="500" textAnchor="middle" fill="#64748B">Zendesk</text>
            </svg>
            
            <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-32">
              <rect width="120" height="60" rx="4" fill="transparent" />
              <text x="60" y="35" fontSize="16" fontWeight="500" textAnchor="middle" fill="#64748B">Zapier</text>
            </svg>
            
            <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-32">
              <rect width="120" height="60" rx="4" fill="transparent" />
              <text x="60" y="35" fontSize="16" fontWeight="500" textAnchor="middle" fill="#64748B">GitHub</text>
            </svg>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/developers/documentation#integrations">View All Integrations</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started with RelayOS?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Find the right product for your needs and start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link href="/signup">Start Free Trial</Link>
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

export default ProductsPage;
