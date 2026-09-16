import React from 'react';
import { Sigma, Code } from 'lucide-react';

const CodeFoundation = () => {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto w-full border-t border-gray-100" id="foundation">
      
      <div className="text-center mb-16">
         <h2 className="font-display font-bold text-sm tracking-widest text-kernel-blue uppercase mb-2">Core Foundations</h2>
         <h3 className="font-display text-3xl md:text-4xl font-bold text-kernel-black mb-4">Built on Math and Code.</h3>
         <p className="text-kernel-grey max-w-2xl mx-auto">We don't just teach you how to use tools. We teach the fundamental principles that power modern technology from the ground up.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Mathematics Feature */}
        <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full relative overflow-hidden group">
           <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sigma className="w-64 h-64 text-kernel-black" />
           </div>
           
           <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8 border border-gray-100 relative z-10">
              <Sigma className="w-6 h-6 text-kernel-black" />
           </div>
           
           <h4 className="font-body font-bold text-xl text-kernel-black mb-3 relative z-10">Rigorous Mathematics</h4>
           <p className="text-kernel-grey mb-8 relative z-10 flex-grow">
             Master the language of the universe. We build a rock-solid foundation in linear algebra, calculus, and probability—the mathematical engines driving modern Artificial Intelligence and computation.
           </p>

           <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-6 font-display text-4xl text-kernel-black/80 font-normal mt-auto pt-8 border-t border-gray-100 relative z-10">
               <span>∑</span>
               <span>∫</span>
               <span>∇</span>
               <span>λ</span>
               <span>θ</span>
               <span>π</span>
           </div>
        </div>

        {/* Coding Feature */}
        <div className="bg-[#1A1A1D] rounded-3xl p-10 shadow-lg flex flex-col h-full relative overflow-hidden">
           <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8 border border-white/5">
              <Code className="w-6 h-6 text-white" />
           </div>
           
           <h4 className="font-body font-bold text-xl text-white mb-3">First Principles Coding</h4>
           <p className="text-gray-400 mb-8 flex-grow">
             Write clean, efficient, and production-ready code. We teach computer science from the metal up, ensuring you understand exactly how and why your software works.
           </p>
           
           <div className="bg-black/50 p-6 rounded-xl border border-white/10 mt-auto shadow-inner w-full overflow-x-auto">
             <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
             </div>
             <pre className="font-code text-sm leading-relaxed text-gray-300 min-w-max">
               <span className="text-purple-400">def</span> <span className="text-kernel-blue">learn</span>(kernel):<br/>
               {'    '}understand()<br/>
               {'    '}experiment()<br/>
               {'    '}build()<br/>
               {'    '}explain()<br/>
               {'    '}<span className="text-purple-400">return</span> mastery
             </pre>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodeFoundation;
