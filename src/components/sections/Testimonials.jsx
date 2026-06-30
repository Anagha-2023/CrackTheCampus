import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'SDE-1 at Amazon',
    college: 'NIT Surathkal',
    content: 'The DSA course and mock interviews on CrackTheCampus were game-changers for me. The interviewers gave me feedback that exactly mirrored what I faced in my actual Amazon loops.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=b6e3f4',
  },
  {
    name: 'Priya Patel',
    role: 'Frontend Engineer at Meta',
    college: 'BITS Pilani',
    content: 'I switched from a non-CS background to a core tech role. The structured roadmap and project-based learning approach made complex concepts so much easier to grasp.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=c0aede',
  },
  {
    name: 'Amit Kumar',
    role: 'Analyst at Goldman Sachs',
    college: 'IIT Delhi',
    content: 'The quantitative aptitude test series is top-notch. It covers every single pattern asked by top finance and tech companies. Highly recommended for campus placements!',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit&backgroundColor=ffdfbf',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Success Stories</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Don't just take our word for it
          </p>
          <p className="mt-4 max-w-2xl text-xl text-foreground/60 mx-auto">
            Join thousands of students who have successfully launched their tech careers with CrackTheCampus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card bg-background/50 rounded-2xl p-8 relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-500/20" />
              
              <div className="flex-1 mb-8">
                <p className="text-foreground/80 italic leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-500/30 bg-card"
                />
                <div>
                  <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-brand-400 font-medium">{testimonial.role}</p>
                  <p className="text-xs text-foreground/50">{testimonial.college}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
