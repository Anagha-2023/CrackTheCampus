import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Test Series', href: '#courses' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-1.5 rounded-lg">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              CrackThe<span className="text-brand-500">Campus</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-brand-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-foreground/80 hover:bg-card-border hover:text-brand-400 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <a href="#login" className="text-sm font-medium text-foreground hover:text-brand-400 transition-colors">
                Log in
              </a>
              <Button variant="primary">Start Free Trial</Button>
            </div>
          </div>
          
          <div className="-mr-2 flex items-center md:hidden gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-foreground/80 hover:bg-card-border hover:text-brand-400 focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-brand-400 hover:bg-card-border focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-card-border absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-brand-400 hover:bg-card-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3 flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-center">Log in</Button>
              <Button variant="primary" className="w-full justify-center">Start Free Trial</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
