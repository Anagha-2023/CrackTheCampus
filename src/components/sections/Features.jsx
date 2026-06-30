import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Users, LineChart, FileText, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: '500+ Coding Problems',
    description: 'Practice DSA problems frequently asked by top tech companies, categorized by difficulty and topic.',
  },
  {
    icon: FileText,
    title: 'AI Resume Builder',
    description: 'Create ATS-friendly resumes that highlight your skills and projects, tailored for tech roles.',
  },
  {
    icon: Users,
    title: 'Mock Interviews',
    description: 'Schedule peer-to-peer or expert-led mock interviews to build confidence before the real day.',
  },
  {
    icon: BookOpen,
    title: 'Aptitude & Reasoning',
    description: 'Master quantitative aptitude and logical reasoning with our comprehensive test series.',
  },
  {
    icon: LineChart,
    title: 'Performance Analytics',
    description: 'Track your progress, identify weak areas, and compare your standing with peers.',
  },
  {
    icon: Briefcase,
    title: 'Job & Internship Board',
    description: 'Get exclusive access to off-campus drives, startup internships, and full-time opportunities.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Platform Capabilities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Everything you need to crack the campus code
          </p>
          <p className="mt-4 max-w-2xl text-xl text-foreground/60 mx-auto">
            A comprehensive suite of tools designed specifically for engineering students to land their dream jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:bg-card/90 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-100 border border-brand-200 dark:bg-brand-900/40 dark:border-brand-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
