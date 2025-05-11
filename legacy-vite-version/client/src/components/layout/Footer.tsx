import { Link } from 'wouter';
import { 
  BroadcastIcon, 
  TwitterIcon, 
  LinkedInIcon, 
  GitHubIcon, 
  DiscordIcon 
} from '@/lib/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-primary-500 text-2xl">
                <BroadcastIcon />
              </div>
              <span className="text-xl font-semibold text-white">RelayOS</span>
            </div>
            <p className="mb-6">
              Advanced real-time communication infrastructure for businesses and communities.
              Built with security, scalability, and flexibility at its core.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <TwitterIcon className="text-lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <LinkedInIcon className="text-lg" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <GitHubIcon className="text-lg" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <DiscordIcon className="text-lg" />
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-white font-medium mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/embed" className="hover:text-white transition-colors">RelayOS Embed™</Link></li>
              <li><Link href="/products/connect" className="hover:text-white transition-colors">RelayOS Connect™</Link></li>
              <li><Link href="/products/integrate" className="hover:text-white transition-colors">RelayOS Integrate™</Link></li>
              <li><Link href="/products/persist" className="hover:text-white transition-colors">RelayOS Persist™</Link></li>
              <li><Link href="/products/communities" className="hover:text-white transition-colors">RelayOS Communities™</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/developers/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/developers/api-reference" className="hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="/developers/sdks" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/developers/status" className="hover:text-white transition-colors">Status</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/company" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/company#careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            &copy; {currentYear} RelayOS. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/legal/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="/legal/aup" className="hover:text-white transition-colors">AUP</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
