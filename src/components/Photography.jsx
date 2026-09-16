import React from 'react';

const Photography = () => {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto w-full" id="photography">
      <div className="mb-12 text-center md:text-left">
        <h2 className="font-display font-bold text-sm tracking-widest text-kernel-blue uppercase mb-2">Student Life</h2>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-kernel-black mb-4">Real students. Real thinking. Real building.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
           <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" 
            alt="Students coding" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
           />
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
           <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
            alt="Student thinking" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
           />
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
           <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
            alt="Students building" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
           />
        </div>
      </div>
      
      <div className="text-center mt-8">
         <p className="text-kernel-grey font-medium text-sm">Real students. Real thinking. Real building.</p>
      </div>
    </section>
  );
};

export default Photography;
