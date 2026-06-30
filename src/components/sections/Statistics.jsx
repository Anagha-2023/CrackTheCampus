import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Active Students', value: '50K+' },
  { id: 2, name: 'Questions Solved', value: '2M+' },
  { id: 3, name: 'Placement Rate', value: '94%' },
  { id: 4, name: 'Hiring Partners', value: '250+' },
];

export function Statistics() {
  return (
    <section className="py-20 bg-brand-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/30 rounded-full blur-[80px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-brand-200">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
