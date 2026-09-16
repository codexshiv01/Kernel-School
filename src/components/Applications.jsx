import React from 'react';

const Applications = () => {
  return (
    <section className="px-8 py-20 max-w-[1000px] mx-auto w-full border-t border-gray-100" id="applications">
      <div className="mb-12 text-center md:text-left">
        <h2 className="font-display font-bold text-sm tracking-widest text-kernel-blue uppercase mb-2">Kernel Identity & Merch</h2>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-kernel-black mb-4">The Kernel Builder Aesthetic</h3>
      </div>

      {/* Main Grid: 1 col on mobile, 3 cols on desktop matching the exact reference layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 items-start">
        
        {/* COLUMN 1: T-Shirt & Bottle */}
        <div className="flex flex-col gap-10">
          
          {/* T-Shirt */}
          <div className="relative mx-auto w-full max-w-[280px]">
             {/* Realistic T-Shirt Shape using SVG for better silhouette */}
             <svg viewBox="0 0 200 200" className="w-full h-auto drop-shadow-xl">
                <path d="M50 20 C60 20, 70 30, 100 30 C130 30, 140 20, 150 20 L190 60 L160 90 L150 70 L150 180 L50 180 L50 70 L40 90 L10 60 Z" fill="#1A1A1D" />
             </svg>
             
             {/* T-Shirt Graphic */}
             <div className="absolute inset-0 flex flex-col items-center justify-start pt-[35%]">
                 {/* Logo Dots */}
                 <div className="grid grid-cols-3 gap-0.5 mb-3">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 4 ? 'bg-kernel-blue' : 'bg-white'}`}></div>
                    ))}
                 </div>
                 {/* Text */}
                 <div className="text-white font-code font-bold text-[10px] uppercase tracking-widest text-center leading-tight">
                    BUILD<br/>FROM<br/>FIRST<br/>
                    <span className="text-kernel-green">PRINCIPLES.</span>
                 </div>
             </div>
          </div>

          {/* Bottle */}
          <div className="relative mx-auto mt-4 w-24 h-56 drop-shadow-2xl">
             {/* Cap */}
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-6 bg-[#111] rounded-t-lg border-b border-gray-700 z-10">
                <div className="w-full h-1 bg-gray-700 mt-2"></div>
             </div>
             {/* Body */}
             <div className="w-full h-full bg-gradient-to-r from-[#111] via-[#2A2A2A] to-[#0A0A0A] rounded-[30px] flex items-center justify-center relative overflow-hidden border border-gray-800">
                <div className="flex flex-col items-center gap-1.5 -rotate-90 origin-center absolute translate-x-[2px]">
                    <span className="text-white font-display font-bold tracking-[0.3em] text-sm opacity-90">KERNEL</span>
                    <div className="flex gap-1">
                       {[...Array(3)].map((_, i) => (
                         <div key={i} className={`w-1 h-1 rounded-full ${i===1?'bg-kernel-blue':'bg-white'}`}></div>
                       ))}
                    </div>
                </div>
             </div>
          </div>

        </div>

        {/* COLUMNS 2 & 3: Notebook, ID, Certificate */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
           
           {/* Top Row: Notebook (Left) and ID Badge (Right) */}
           {/* Notebook */}
           <div className="flex justify-center md:justify-end">
               <div className="bg-[#18181A] rounded-r-2xl rounded-l shadow-2xl w-full max-w-[240px] h-[320px] relative border-l-[6px] border-gray-900 flex flex-col items-center justify-center">
                  {/* Elastic Band */}
                  <div className="absolute right-5 top-0 bottom-0 w-3 bg-gray-950 opacity-80 shadow-md"></div>
                  
                  {/* Logo Dots */}
                  <div className="grid grid-cols-3 gap-1.5 mb-16">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === 4 ? 'bg-kernel-blue' : 'bg-gray-300'}`}></div>
                    ))}
                 </div>
                 
                 {/* Text */}
                 <div className="absolute bottom-8 left-0 right-0 text-center text-gray-400 font-code font-semibold text-[10px] tracking-widest uppercase">KERNEL_01</div>
               </div>
           </div>

           {/* ID Badge */}
           <div className="flex flex-col items-center justify-start h-[320px]">
              {/* Lanyard Clip */}
              <div className="flex flex-col items-center z-0 relative -mb-3">
                 <div className="w-8 h-10 border-x-4 border-t-4 border-[#222] rounded-t-lg bg-gray-100"></div>
                 <div className="absolute -bottom-1 w-3 h-5 bg-gray-300 rounded-sm shadow-md border border-gray-400"></div>
              </div>
              
              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xl w-[170px] relative z-10 flex flex-col items-center">
                 <div className="text-kernel-black text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-5 mt-2">
                    <div className="grid grid-cols-3 gap-[1px]">
                       {[...Array(9)].map((_, i) => (
                         <div key={i} className={`w-[2px] h-[2px] rounded-full ${i===4?'bg-kernel-blue':'bg-kernel-black'}`}></div>
                       ))}
                    </div>
                    KERNEL<br/>SCHOOL
                 </div>
                 
                 {/* ID Photo (Real Unsplash image) */}
                 <div className="w-16 h-16 rounded mb-3 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="Aarav" className="w-full h-full object-cover" />
                 </div>
                 
                 <h4 className="font-body font-bold text-sm text-kernel-black mb-0">Aarav</h4>
                 <p className="text-[9px] text-kernel-grey font-medium mb-1.5">Builder</p>
                 <p className="text-[7px] text-gray-500 font-code mb-3">ID: KS-1527</p>
                 
                 {/* Barcode */}
                 <div className="w-full h-3.5 flex justify-center gap-px px-2 opacity-70">
                    {[...Array(18)].map((_, i) => (
                      <div key={i} className="bg-black h-full" style={{ width: `${Math.floor(Math.random() * 3) + 1}px` }}></div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Bottom Row: Certificate (Spanning both columns) */}
           <div className="md:col-span-2 flex justify-center">
               <div className="bg-white border-[3px] border-[#E8E2D2] rounded p-8 shadow-md w-full max-w-[500px] relative">
                    <div className="text-kernel-grey text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-6">
                        <div className="grid grid-cols-3 gap-[1px]">
                           {[...Array(9)].map((_, i) => (
                             <div key={i} className={`w-[2px] h-[2px] rounded-full ${i===4?'bg-kernel-blue':'bg-kernel-grey'}`}></div>
                           ))}
                        </div>
                        KERNEL SCHOOL
                    </div>
                    <div>
                       <h4 className="font-code text-kernel-blue font-bold text-2xl uppercase tracking-wider mb-2">KERNEL BUILDER</h4>
                       <p className="text-kernel-black font-semibold text-sm mb-1">Arjun Mehta</p>
                       <p className="text-[10px] text-kernel-grey max-w-[200px]">Has successfully completed the Kernel AI Engineer Program.</p>
                    </div>
                    
                    {/* Signature & Year */}
                    <div className="flex justify-between items-end mt-8">
                        <div>
                            {/* Fake signature svg curve */}
                            <svg viewBox="0 0 100 40" className="w-20 h-8 opacity-60 mb-1">
                                <path d="M10 20 Q 30 5, 50 25 T 90 15" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M40 30 Q 50 15, 70 30" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round"/>
                            </svg>
                            <div className="border-t border-kernel-black w-24"></div>
                        </div>
                        <span className="text-[10px] text-kernel-grey font-code">2024</span>
                    </div>
                </div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default Applications;
