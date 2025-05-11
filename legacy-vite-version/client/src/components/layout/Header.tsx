import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { BroadcastIcon, ChevronDownIcon, BarsIcon } from '@/lib/icons';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-primary-600 text-2xl">
              <BroadcastIcon />
            </div>
            <span className="text-xl font-semibold text-slate-800">RelayOS</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-700 hover:text-primary-600 transition">
              Solutions <ChevronDownIcon className="text-xs ml-1" />
            </button>
            <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0">
              <Link href="/solutions/business-chat" className="block p-2 hover:bg-slate-50 rounded-md flex items-center gap-2">
                <i className="fas fa-comments text-primary-500"></i>
                <div>
                  <div className="font-medium">Business Chat</div>
                  <div className="text-xs text-slate-500">Seamless customer support</div>
                </div>
              </Link>
              <Link href="/solutions/custom-communication" className="block p-2 hover:bg-slate-50 rounded-md flex items-center gap-2 mt-1">
                <i className="fas fa-server text-primary-500"></i>
                <div>
                  <div className="font-medium">Custom Communication</div>
                  <div className="text-xs text-slate-500">Tailored to your needs</div>
                </div>
              </Link>
              <Link href="/solutions/online-communities" className="block p-2 hover:bg-slate-50 rounded-md flex items-center gap-2 mt-1">
                <i className="fas fa-users text-primary-500"></i>
                <div>
                  <div className="font-medium">Online Communities</div>
                  <div className="text-xs text-slate-500">Build engaging spaces</div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-700 hover:text-primary-600 transition">
              Products <ChevronDownIcon className="text-xs ml-1" />
            </button>
            <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0">
              <Link href="/products/embed" className="block p-2 hover:bg-slate-50 rounded-md flex items-center gap-2">
                <i className="fas fa-code text-primary-500"></i>
                <div>
                  <div className="font-medium">RelayOS Embed™</div>
                  <div className="text-xs text-slate-500">Embeddable chat for websites</div>
                </div>
              </Link>
              <Link href="/products/connect" className="block p-2 hover:bg-slate-50 rounded-md flex items-center gap-2 mt-1">
                <i className="fas fa-network-wired text-primary-500"></i>
                <div>
                  <div className="font-medium">RelayOS Connect™</div>
                  <div className="text-xs text-slate-500">Managed communication</div>
                </div>
              </Link>
              <Link href="/products/integrate" className="block p-2 hover:bg-slate-50 rounded-md flex items-center gap-2 mt-1">
                <i className="fas fa-plug text-primary-500"></i>
                <div>
                  <div className="font-medium">RelayOS Integrate™</div>
                  <div className="text-xs text-slate-500">Developer APIs & SDKs</div>
                </div>
              </Link>
              <Link href="/products/persist" className="block p-2 hover:bg-slate-50 rounded-md flex items-center gap-2 mt-1">
                <i className="fas fa-history text-primary-500"></i>
                <div>
                  <div className="font-medium">RelayOS Persist™</div>
                  <div className="text-xs text-slate-500">Never miss a message</div>
                </div>
              </Link>
              <Link href="/products/communities" className="block p-2 hover:bg-slate-50 rounded-md flex items-center gap-2 mt-1">
                <i className="fas fa-globe text-primary-500"></i>
                <div>
                  <div className="font-medium">RelayOS Communities™</div>
                  <div className="text-xs text-slate-500">Next-gen community platforms</div>
                </div>
              </Link>
            </div>
          </div>
          
          <Link href="/pricing" className={`text-slate-700 hover:text-primary-600 transition ${isActive('/pricing') ? 'text-primary-600' : ''}`}>
            Pricing
          </Link>
          <Link href="/developers" className={`text-slate-700 hover:text-primary-600 transition ${isActive('/developers') ? 'text-primary-600' : ''}`}>
            Developers
          </Link>
          <Link href="/blog" className={`text-slate-700 hover:text-primary-600 transition ${isActive('/blog') ? 'text-primary-600' : ''}`}>
            Blog
          </Link>
          <Link href="/company" className={`text-slate-700 hover:text-primary-600 transition ${isActive('/company') ? 'text-primary-600' : ''}`}>
            Company
          </Link>
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/login" className="text-slate-700 hover:text-primary-600 transition font-medium">
            Login
          </Link>
          <Link href="/signup" className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md shadow-sm transition duration-300 font-medium">
            Get Started
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden text-slate-700 focus:outline-none"
        >
          <BarsIcon className="text-xl" />
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="container mx-auto px-4 py-3 space-y-3">
          <Link href="/solutions" className="block py-2 text-slate-700">Solutions</Link>
          <Link href="/products" className="block py-2 text-slate-700">Products</Link>
          <Link href="/pricing" className="block py-2 text-slate-700">Pricing</Link>
          <Link href="/developers" className="block py-2 text-slate-700">Developers</Link>
          <Link href="/blog" className="block py-2 text-slate-700">Blog</Link>
          <Link href="/company" className="block py-2 text-slate-700">Company</Link>
          
          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-3">
            <Link href="/login" className="text-slate-700 font-medium py-2">
              Login
            </Link>
            <Link href="/signup" className="bg-primary-600 text-white py-2 px-4 rounded-md shadow-sm text-center font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
