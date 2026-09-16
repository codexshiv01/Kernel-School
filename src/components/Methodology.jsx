import React from 'react';
import { Lightbulb, FlaskConical, Box, MessageSquare } from 'lucide-react';

const Methodology = () => {
  const steps = [
    { icon: <Lightbulb className="w-6 h-6 text-kernel-blue" />, title: 'Understand', desc: 'Learn the core idea from first principles.' },
    { icon: <FlaskConical className="w-6 h-6 text-kernel-black" />, title: 'Experiment', desc: 'Test, explore and ask better questions.' },
    { icon: <Box className="w-6 h-6 text-kernel-green" />, title: 'Build', desc: 'Create projects that solve real problems.' },
    { icon: <MessageSquare className="w-6 h-6 text-purple-500" />, title: 'Explain', desc: 'Teach it simply. Truly understand it.' }
  ];

  return (
    <section className="px-8 py-20 max-w-7xl mx-auto w-full" id="approach">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-sm tracking-widest text-kernel-blue uppercase mb-2">The Kernel Method™</h2>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-kernel-black mb-4">How we build the future</h3>
        <p className="text-kernel-grey">Our teaching methodology</p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between relative max-w-5xl mx-auto">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-8 left-16 right-16 h-px bg-gray-200 -z-10"></div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full md:w-1/4 px-4 mb-10 md:mb-0">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center mb-6 shadow-sm relative">
                {step.icon}
                {index < steps.length - 1 && (
                     <div className="hidden md:block absolute -right-[calc(50%+2rem)] top-1/2 -translate-y-1/2 text-gray-300">
                         →
                     </div>
                )}
            </div>
            <h3 className="font-display font-bold text-lg mb-2 text-kernel-black">{step.title}</h3>
            <p className="text-sm text-kernel-grey leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;
