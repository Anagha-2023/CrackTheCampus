import React from 'react';
import { Rocket, MessageCircle, Link2, Hash, Camera } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Test Series', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Success Stories', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Interview Prep', href: '#' },
      { name: 'Coding Challenges', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]
  };

  return (
    <footer className="bg-card border-t border-card-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                CrackThe<span className="text-brand-500">Campus</span>
              </span>
            </div>
            <p className="text-foreground/70 text-sm mb-6 max-w-sm">
              The ultimate platform for students to prepare for placements, internships, and competitive aptitude tests. Launch your career with confidence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-foreground/50 hover:text-brand-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/50 hover:text-brand-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Link2 className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/50 hover:text-brand-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <Hash className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/50 hover:text-brand-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <Camera className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-foreground/70 hover:text-brand-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-foreground/70 hover:text-brand-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-foreground/70 hover:text-brand-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-foreground/70 hover:text-brand-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-card-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} CrackTheCampus. All rights reserved.
          </p>
          <p className="text-sm text-foreground/50 mt-4 md:mt-0 flex items-center gap-1">
            Made with <span className="text-brand-500">&hearts;</span> for students
          </p>
        </div>
      </div>
    </footer>
  );
}
