import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto w-full px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* Left Side: CTA */}
        <div className="text-center md:text-left max-w-md">
           <h3 className="font-display font-bold text-3xl mb-4 text-kernel-black">Ready to build the future?</h3>
           <p className="text-kernel-grey mb-6">Join the Kernel community.</p>
           <button className="bg-kernel-blue text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors w-full md:w-auto">
             Join the Waitlist →
           </button>
           
           <div className="flex items-center justify-center md:justify-start gap-5 mt-8 text-kernel-grey font-medium text-sm">
              <a href="#" className="hover:text-kernel-black transition-colors">YouTube</a>
              <a href="#" className="hover:text-kernel-black transition-colors">Instagram</a>
              <a href="#" className="hover:text-kernel-black transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-kernel-black transition-colors">X</a>
              <a href="#" className="hover:text-kernel-black transition-colors">Discord</a>
           </div>
        </div>
        
        {/* Right Side: Building Illustration (Simplified) */}
        <div className="hidden md:flex opacity-20">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="80" y="80" width="80" height="120" stroke="currentColor" strokeWidth="2"/>
             <rect x="40" y="120" width="40" height="80" stroke="currentColor" strokeWidth="2"/>
             <rect x="160" y="100" width="30" height="100" stroke="currentColor" strokeWidth="2"/>
             <path d="M80 80L120 40L160 80" stroke="currentColor" strokeWidth="2"/>
             <circle cx="120" cy="65" r="8" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto w-full px-8 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-kernel-grey">
         <div></div>
         <div className="flex gap-4">
            <a href="#" className="hover:text-kernel-black">Terms</a>
            <a href="#" className="hover:text-kernel-black">Privacy</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
