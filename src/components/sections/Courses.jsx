import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users } from 'lucide-react';
import { Button } from '../ui/Button';

const courses = [
  {
    title: 'SDE Core Prep',
    description: 'Complete data structures, algorithms, and system design for top product companies.',
    price: '₹2,999',
    originalPrice: '₹5,999',
    rating: '4.9',
    students: '12.5k',
    features: ['500+ Video Lectures', '1:1 Mentorship', 'MAANG Mock Tests', 'Resume Reviews'],
    popular: true,
  },
  {
    title: 'Aptitude Pro',
    description: 'Master quantitative aptitude, logical reasoning, and verbal ability for mass recruiters.',
    price: '₹1,499',
    originalPrice: '₹3,499',
    rating: '4.7',
    students: '25.2k',
    features: ['Topic-wise Tests', 'Shortcut Techniques', 'TCS/Infosys Patterns', 'Doubt Solving'],
    popular: false,
  },
  {
    title: 'Full Stack Web Dev',
    description: 'Build 5 production-ready projects and master MERN stack from scratch.',
    price: '₹3,499',
    originalPrice: '₹7,999',
    rating: '4.8',
    students: '8.4k',
    features: ['Live Project Building', 'Code Reviews', 'GitHub Portfolio', 'Placement Assistance'],
    popular: false,
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Preparation Paths</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Flagship test series and courses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-foreground/60 mx-auto">
            Structured learning paths designed by industry experts to guarantee your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-8 relative flex flex-col ${
                course.popular ? 'border-brand-500 shadow-brand-500/20 shadow-2xl scale-105 z-10' : 'border-card-border hover:border-brand-500/50'
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-foreground/60 text-sm mb-6 h-10">{course.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-sm font-medium text-brand-300">
                  <Star className="w-4 h-4 fill-current" /> {course.rating}
                </div>
                <div className="flex items-center gap-1 text-sm text-foreground/50">
                  <Users className="w-4 h-4" /> {course.students} students
                </div>
              </div>
              
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-foreground">{course.price}</span>
                <span className="text-sm font-medium text-foreground/40 line-through">{course.originalPrice}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-400 shrink-0 mr-3" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={course.popular ? 'primary' : 'outline'} className="w-full">
                Enroll Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
