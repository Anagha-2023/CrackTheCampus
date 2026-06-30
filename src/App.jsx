import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Statistics } from './components/sections/Statistics';
import { Companies } from './components/sections/Companies';
import { Courses } from './components/sections/Courses';
import { Testimonials } from './components/sections/Testimonials';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Companies />
        <Features />
        <Statistics />
        <Courses />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
