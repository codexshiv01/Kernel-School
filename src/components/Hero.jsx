import React from 'react';
import { Play } from 'lucide-react';
import heroImage from '../assets/image.png';

const Hero = () => {
  return (
    <section className="px-8 py-16 md:py-24 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div className="max-w-xl">
        <div className="text-kernel-blue font-bold tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
           A SCHOOL FOR THE AI GENERATION
        </div>
        <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-6">
          <span className="text-kernel-black">Learn the </span>
          <span className="text-kernel-blue">Core.</span>
          <br />
          <span className="text-kernel-black">Build the </span>
          <span className="text-kernel-green">Future.</span>
        </h1>
        <p className="text-kernel-grey text-lg mb-10 leading-relaxed max-w-md">
          We teach mathematics, computer science and artificial intelligence foundations to help students understand, build and shape the technology of tomorrow.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-kernel-blue text-white px-8 py-3.5 rounded font-medium hover:bg-blue-700 transition-colors">
            Explore Programs
          </button>
          <button className="flex items-center gap-2 px-6 py-3.5 rounded font-medium text-kernel-black hover:bg-gray-50 transition-colors border border-transparent">
            <Play size={18} fill="currentColor" />
            Watch Intro
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
           {/* Placeholder for the boy image requested by user */}
          <img 
            src={heroImage}
            alt="Student coding" 
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        
        {/* Decorative Floating Elements (Simulated based on design) */}
        <div className="absolute top-10 -left-10 bg-white p-3 rounded-lg shadow-lg z-20 font-code text-sm text-kernel-blue flex items-center gap-2">
            def f(x): <br/> return x*2
        </div>
        <div className="absolute bottom-20 -right-8 bg-white p-4 rounded-xl shadow-lg z-20">
             <div className="flex flex-col items-center">
                <span className="font-display font-bold text-xl">∑</span>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
