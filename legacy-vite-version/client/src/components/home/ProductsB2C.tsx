import { Link } from 'wouter';
import { b2cProducts } from '@/lib/data';
import { CheckCircleIcon, ArrowRightIcon } from '@/lib/icons';

export function ProductsB2C() {
  const persistFeatures = [
    {
      title: "Always Connected",
      description: "Stay present in all your channels even when offline"
    },
    {
      title: "Searchable History",
      description: "Find any conversation with powerful search tools"
    },
    {
      title: "Multi-Device Sync",
      description: "Seamlessly switch between devices"
    },
    {
      title: "Enhanced Notifications",
      description: "Never miss an important mention"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Premium Communication Services</h2>
          <p className="text-lg text-slate-600">
            Enhanced experiences for individuals and communities seeking reliable,
            feature-rich communication tools.
          </p>
        </div>
        
        {/* Featured Product: RelayOS Persist™ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
              Featured Product
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{b2cProducts[0].name}</h3>
            <p className="text-lg text-slate-600 mb-6">
              {b2cProducts[0].description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {persistFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-primary-500 text-lg mt-1">
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md shadow transition duration-300 text-center"
              >
                Get Started
              </Link>
              <Link 
                href="/products/persist" 
                className="text-primary-600 border border-primary-600 hover:bg-primary-50 font-medium py-2 px-6 rounded-md transition duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 relative">
            {/* SVG illustration of Persist interface */}
            <svg 
              viewBox="0 0 800 600" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <rect width="800" height="600" fill="#F8FAFC" />
              <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
              
              {/* Left sidebar */}
              <rect x="50" y="50" width="200" height="500" fill="#F1F5F9" rx="8 0 0 8" />
              
              {/* Channel list */}
              <rect x="70" y="90" width="160" height="30" rx="4" fill="#E2E8F0" />
              <rect x="70" y="130" width="160" height="30" rx="4" fill="#3B82F6" />
              <rect x="70" y="170" width="160" height="30" rx="4" fill="#E2E8F0" />
              <rect x="70" y="210" width="160" height="30" rx="4" fill="#E2E8F0" />
              <rect x="70" y="250" width="160" height="30" rx="4" fill="#E2E8F0" />
              
              {/* Message history */}
              <rect x="270" y="90" width="460" height="400" rx="4" fill="#F8FAFC" />
              
              {/* Messages */}
              <rect x="290" y="110" width="400" height="40" rx="4" fill="#F1F5F9" />
              <rect x="290" y="160" width="350" height="40" rx="4" fill="#F1F5F9" />
              <rect x="290" y="210" width="420" height="40" rx="4" fill="#F1F5F9" />
              <rect x="290" y="260" width="380" height="40" rx="4" fill="#F1F5F9" />
              <rect x="290" y="310" width="400" height="40" rx="4" fill="#F1F5F9" />
              <rect x="290" y="360" width="350" height="40" rx="4" fill="#F1F5F9" />
              <rect x="290" y="410" width="420" height="40" rx="4" fill="#F1F5F9" />
              
              {/* Message input */}
              <rect x="270" y="500" width="460" height="50" rx="4" fill="#F1F5F9" />
              
              {/* Status indicators */}
              <circle cx="80" cy="105" r="6" fill="#3B82F6" />
              <circle cx="80" cy="145" r="6" fill="#10B981" />
              <circle cx="80" cy="185" r="6" fill="#6B7280" />
              <circle cx="80" cy="225" r="6" fill="#6B7280" />
              <circle cx="80" cy="265" r="6" fill="#6B7280" />
              
              {/* Header */}
              <rect x="50" y="50" width="700" height="50" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
              <text x="270" y="80" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#0F172A">General Chat - History Available</text>
              <circle cx="700" cy="75" r="12" fill="#3B82F6" />
              <text x="700" y="80" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">P</text>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* RelayOS Communities™ */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="md:w-1/3">
              {/* Communities product SVG illustration */}
              <svg 
                viewBox="0 0 400 300" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto rounded-lg shadow-sm"
              >
                <rect width="400" height="300" rx="8" fill="#F8FAFC" />
                
                {/* Community members */}
                <circle cx="100" cy="80" r="30" fill="#3B82F6" opacity="0.2" />
                <circle cx="100" cy="80" r="20" fill="#3B82F6" />
                
                <circle cx="160" cy="120" r="30" fill="#10B981" opacity="0.2" />
                <circle cx="160" cy="120" r="20" fill="#10B981" />
                
                <circle cx="220" cy="80" r="30" fill="#F59E0B" opacity="0.2" />
                <circle cx="220" cy="80" r="20" fill="#F59E0B" />
                
                <circle cx="280" cy="120" r="30" fill="#8B5CF6" opacity="0.2" />
                <circle cx="280" cy="120" r="20" fill="#8B5CF6" />
                
                <circle cx="100" cy="160" r="30" fill="#EC4899" opacity="0.2" />
                <circle cx="100" cy="160" r="20" fill="#EC4899" />
                
                <circle cx="220" cy="200" r="30" fill="#14B8A6" opacity="0.2" />
                <circle cx="220" cy="200" r="20" fill="#14B8A6" />
                
                {/* Connection lines */}
                <line x1="100" y1="80" x2="160" y2="120" stroke="#3B82F6" strokeWidth="2" />
                <line x1="160" y1="120" x2="220" y2="80" stroke="#3B82F6" strokeWidth="2" />
                <line x1="220" y1="80" x2="280" y2="120" stroke="#3B82F6" strokeWidth="2" />
                <line x1="100" y1="160" x2="160" y2="120" stroke="#3B82F6" strokeWidth="2" />
                <line x1="220" y1="200" x2="160" y2="120" stroke="#3B82F6" strokeWidth="2" />
                <line x1="220" y1="200" x2="220" y2="80" stroke="#3B82F6" strokeWidth="2" />
                <line x1="100" y1="160" x2="100" y2="80" stroke="#3B82F6" strokeWidth="2" />
                
                {/* Community central node */}
                <circle cx="160" cy="120" r="40" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{b2cProducts[1].name}</h3>
              <p className="text-slate-600 mb-4">
                {b2cProducts[1].description}
              </p>
              <Link 
                href="/products/communities" 
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
              >
                Explore Communities <ArrowRightIcon className="ml-1" />
              </Link>
            </div>
          </div>
          
          {/* AI-Enhanced Tools */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="md:w-1/3">
              {/* AI-enhanced tools SVG illustration */}
              <svg 
                viewBox="0 0 400 300" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto rounded-lg shadow-sm"
              >
                <rect width="400" height="300" rx="8" fill="#F8FAFC" />
                
                {/* AI brain structure */}
                <path d="M200,70 C240,70 270,100 270,140 C270,180 240,210 200,210 C160,210 130,180 130,140 C130,100 160,70 200,70" 
                  fill="none" stroke="#8B5CF6" strokeWidth="3" />
                
                {/* Neural network connections */}
                <circle cx="200" cy="140" r="50" fill="#8B5CF6" opacity="0.1" />
                <circle cx="200" cy="140" r="15" fill="#8B5CF6" />
                
                <circle cx="150" cy="110" r="10" fill="#8B5CF6" />
                <circle cx="250" cy="110" r="10" fill="#8B5CF6" />
                <circle cx="150" cy="170" r="10" fill="#8B5CF6" />
                <circle cx="250" cy="170" r="10" fill="#8B5CF6" />
                
                <circle cx="120" cy="140" r="8" fill="#8B5CF6" />
                <circle cx="280" cy="140" r="8" fill="#8B5CF6" />
                <circle cx="180" cy="90" r="8" fill="#8B5CF6" />
                <circle cx="220" cy="90" r="8" fill="#8B5CF6" />
                <circle cx="180" cy="190" r="8" fill="#8B5CF6" />
                <circle cx="220" cy="190" r="8" fill="#8B5CF6" />
                
                {/* Connections */}
                <line x1="200" y1="140" x2="150" y2="110" stroke="#8B5CF6" strokeWidth="2" />
                <line x1="200" y1="140" x2="250" y2="110" stroke="#8B5CF6" strokeWidth="2" />
                <line x1="200" y1="140" x2="150" y2="170" stroke="#8B5CF6" strokeWidth="2" />
                <line x1="200" y1="140" x2="250" y2="170" stroke="#8B5CF6" strokeWidth="2" />
                
                <line x1="150" y1="110" x2="120" y2="140" stroke="#8B5CF6" strokeWidth="1" />
                <line x1="250" y1="110" x2="280" y2="140" stroke="#8B5CF6" strokeWidth="1" />
                <line x1="150" y1="110" x2="180" y2="90" stroke="#8B5CF6" strokeWidth="1" />
                <line x1="250" y1="110" x2="220" y2="90" stroke="#8B5CF6" strokeWidth="1" />
                <line x1="150" y1="170" x2="180" y2="190" stroke="#8B5CF6" strokeWidth="1" />
                <line x1="250" y1="170" x2="220" y2="190" stroke="#8B5CF6" strokeWidth="1" />
                
                {/* Data flow animation */}
                <circle cx="180" cy="115" r="3" fill="#3B82F6">
                  <animate attributeName="cx" values="180;200;220" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="115;140;115" dur="3s" repeatCount="indefinite" />
                </circle>
                
                <circle cx="220" cy="165" r="3" fill="#3B82F6">
                  <animate attributeName="cx" values="220;200;180" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="165;140;165" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-slate-800 mb-2">AI-Enhanced Interaction</h3>
              <p className="text-slate-600 mb-4">
                Intelligent assistants, content moderation, automated workflows, and contextual 
                help enhance your communication experience.
              </p>
              <Link 
                href="/features/ai" 
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
              >
                Discover AI Features <ArrowRightIcon className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsB2C;
