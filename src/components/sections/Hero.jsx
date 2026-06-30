import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Trophy, Target } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-900/30 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 border border-brand-200 text-brand-700 dark:bg-brand-900/30 dark:border-brand-500/30 dark:text-brand-300 text-xs font-medium mb-6 animate-[fade-in-up_0.8s_ease-out_both]"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
            Join 50,000+ students landing top tech jobs
          </div>
          
          <h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4 animate-[fade-in-up_0.8s_ease-out_0.15s_both]"
          >
            Crack your dream <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
              campus placement
            </span>
          </h1>
          
          <p
            className="text-base md:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto animate-[fade-in-up_0.8s_ease-out_0.3s_both]"
          >
            The all-in-one platform for coding practice, aptitude tests, and interview preparation. Master the skills top tech companies are looking for.
          </p>
          
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-[fade-in-up_0.8s_ease-out_0.45s_both]"
          >
            <Button size="lg" className="w-full sm:w-auto group">
              Start Preparing for Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Test Series
            </Button>
          </div>
        </div>

        {/* Hero Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="glass-card rounded-2xl p-4 md:p-8 aspect-video relative flex items-center justify-center bg-card/40 border-brand-500/20 overflow-hidden">
            {/* Abstract visual representation instead of a static image */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full p-4 relative z-10">
              <div className="glass-card bg-card/60 rounded-xl flex flex-col overflow-hidden border-brand-500/10 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="h-32 w-full relative">
                  <img src="/images/dsa.png" alt="DSA Mastery" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181b]/90 to-transparent"></div>
                  <Code className="absolute bottom-2 left-6 h-8 w-8 text-brand-400 drop-shadow-md" />
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col justify-end">
                  <h3 className="font-semibold text-lg mb-1">DSA Mastery</h3>
                  <p className="text-sm text-foreground/60">500+ curated coding problems with solutions.</p>
                </div>
              </div>
              
              <div className="glass-card bg-card/80 rounded-xl flex flex-col overflow-hidden border-brand-500/30 transform scale-105 shadow-brand-500/10 shadow-2xl z-10">
                <div className="h-32 w-full relative">
                  <img src="/images/company.png" alt="Company Specific" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181b]/95 to-transparent"></div>
                  <Target className="absolute bottom-2 left-6 h-8 w-8 text-brand-400 drop-shadow-md" />
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col justify-end">
                  <h3 className="font-semibold text-lg mb-1">Company Specific</h3>
                  <p className="text-sm text-foreground/60">Mock tests tailored for MAANG and top startups.</p>
                </div>
              </div>
              
              <div className="glass-card bg-card/60 rounded-xl flex flex-col overflow-hidden border-brand-500/10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="h-32 w-full relative">
                  <img src="/images/aptitude.png" alt="Aptitude Prep" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181b]/90 to-transparent"></div>
                  <Trophy className="absolute bottom-2 left-6 h-8 w-8 text-brand-400 drop-shadow-md" />
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col justify-end">
                  <h3 className="font-semibold text-lg mb-1">Aptitude Prep</h3>
                  <p className="text-sm text-foreground/60">Comprehensive logical and quantitative reasoning.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
