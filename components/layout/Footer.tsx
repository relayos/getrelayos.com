import React from 'react';
import Link from 'next/link';
import { 
  TwitterIcon, 
  LinkedInIcon, 
  GitHubIcon, 
  DiscordIcon 
} from '@/lib/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'RelayOS Connect', href: '/products/connect' },
        { name: 'RelayOS Embed', href: '/products/embed' },
        { name: 'RelayOS Integrate', href: '/products/integrate' },
        { name: 'RelayOS Persist', href: '/products/persist' },
        { name: 'RelayOS Communities', href: '/products/communities' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Business Chat', href: '/solutions/business-chat' },
        { name: 'Online Communities', href: '/solutions/online-communities' },
        { name: 'Custom Solutions', href: '/solutions/custom-communication' },
        { name: 'Enterprise', href: '/solutions/enterprise' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { name: 'Documentation', href: '/developers/documentation' },
        { name: 'API Reference', href: '/developers/api' },
        { name: 'SDKs', href: '/developers/sdks' },
        { name: 'GitHub', href: 'https://github.com/relayos' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/company' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Pricing', href: '/pricing' },
        { name: 'Support', href: '/support' },
        { name: 'Status', href: '/status' },
        { name: 'Security', href: '/security' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo and company info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">RelayOS</span>
            </Link>
            <p className="text-slate-400 mb-4">
              Enterprise-grade communication infrastructure for businesses and communities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/relayos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a 
                href="https://linkedin.com/company/relayos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="https://github.com/relayos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a 
                href="https://discord.gg/relayos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="Discord"
              >
                <DiscordIcon />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} RelayOS. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-slate-500 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-slate-500 hover:text-primary-400 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
