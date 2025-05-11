import { Link } from 'wouter';
import { PlayCircleIcon } from '@/lib/icons';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background with Gradient */}
      <div className="absolute inset-0 gradient-bg bg-gradient-to-br from-slate-800 to-slate-900"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-24 lg:pt-32 lg:pb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Next-Gen Communication Infrastructure
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              RelayOS provides robust, developer-friendly, and scalable solutions for real-time communication. 
              Built on advanced technology for businesses and communities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/signup" className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition duration-300 text-center">
                Start Free Trial
              </Link>
              <Link href="#" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2">
                <PlayCircleIcon /> Watch Demo
              </Link>
            </div>
            <div className="mt-10 text-slate-400 text-sm">
              Trusted by forward-thinking teams at
              <div className="mt-4 flex flex-wrap gap-8 justify-center lg:justify-start items-center">
                <span className="text-white/80 font-medium">TechCorp</span>
                <span className="text-white/80 font-medium">DevSolutions</span>
                <span className="text-white/80 font-medium">InnovateX</span>
                <span className="text-white/80 font-medium">PlatformY</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="bg-slate-800 p-6 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                {/* Platform interface illustration */}
                <svg 
                  viewBox="0 0 800 500" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <rect width="800" height="500" fill="#1E293B" />
                  <g fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.3">
                    <path d="M0,100 Q400,150 800,100" />
                    <path d="M0,200 Q400,250 800,200" />
                    <path d="M0,300 Q400,350 800,300" />
                    <path d="M0,400 Q400,450 800,400" />
                  </g>
                  <g fill="#3B82F6" opacity="0.1">
                    <circle cx="200" cy="150" r="100" />
                    <circle cx="600" cy="300" r="150" />
                  </g>
                  <rect x="100" y="100" width="600" height="300" rx="10" fill="#0F172A" />
                  <rect x="120" y="130" width="200" height="250" rx="5" fill="#1E293B" />
                  <rect x="340" y="130" width="340" height="250" rx="5" fill="#1E293B" />
                  <g fill="#4B5563">
                    <rect x="140" y="150" width="160" height="20" rx="3" />
                    <rect x="140" y="190" width="160" height="20" rx="3" />
                    <rect x="140" y="230" width="160" height="20" rx="3" />
                    <rect x="140" y="270" width="160" height="20" rx="3" />
                    <rect x="140" y="310" width="160" height="20" rx="3" />
                    <rect x="140" y="350" width="160" height="20" rx="3" />
                  </g>
                  <g fill="#4B5563">
                    <rect x="360" y="150" width="300" height="20" rx="3" />
                    <rect x="360" y="190" width="300" height="20" rx="3" />
                    <rect x="360" y="230" width="300" height="20" rx="3" />
                    <rect x="360" y="270" width="300" height="20" rx="3" />
                    <rect x="360" y="310" width="300" height="20" rx="3" />
                    <rect x="360" y="350" width="300" height="20" rx="3" />
                  </g>
                  <g fill="#3B82F6">
                    <circle cx="120" cy="150" r="5" />
                    <circle cx="120" cy="190" r="5" />
                    <circle cx="120" cy="230" r="5" />
                    <circle cx="120" cy="270" r="5" />
                    <circle cx="120" cy="310" r="5" />
                    <circle cx="120" cy="350" r="5" />
                  </g>
                  <g fill="#3B82F6">
                    <circle cx="340" cy="150" r="5" />
                    <circle cx="340" cy="190" r="5" />
                    <circle cx="340" cy="230" r="5" />
                    <circle cx="340" cy="270" r="5" />
                    <circle cx="340" cy="310" r="5" />
                    <circle cx="340" cy="350" r="5" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
