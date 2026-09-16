import React from 'react';
import { Box, Code, Sigma, Bot, MessageSquare, Blocks, FlaskConical, Sun } from 'lucide-react';

const programs = [
  { icon: <Box className="w-8 h-8 text-kernel-green" strokeWidth={1.5} />, name: 'Kernel Foundations', age: 'Ages 9-11' },
  { icon: <Code className="w-8 h-8 text-kernel-blue" strokeWidth={1.5} />, name: 'Kernel Code', age: 'Ages 10+' },
  { icon: <Sigma className="w-8 h-8 text-purple-600" strokeWidth={1.5} />, name: 'Kernel Math', age: 'Ages 11+' },
  { icon: <Bot className="w-8 h-8 text-kernel-green" strokeWidth={1.5} />, name: 'Kernel AI', age: 'Ages 12+' },
  { icon: <MessageSquare className="w-8 h-8 text-purple-600" strokeWidth={1.5} />, name: 'Kernel LLM', age: 'Ages 13+' },
  { icon: <Box className="w-8 h-8 text-kernel-blue" strokeWidth={1.5} />, name: 'Kernel Labs', age: 'Ages 12+' },
  { icon: <FlaskConical className="w-8 h-8 text-purple-600" strokeWidth={1.5} />, name: 'Kernel Research', age: 'Ages 15+' },
  { icon: <Sun className="w-8 h-8 text-kernel-green" strokeWidth={1.5} />, name: 'Kernel Summer', age: 'Ages 10-17' },
];

const ProgramsOverview = () => {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto w-full bg-kernel-paper rounded-3xl my-10" id="programs">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-sm tracking-widest text-kernel-blue uppercase mb-2">Programs Overview</h2>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-kernel-black mb-4">Pathways designed for every stage of learning</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {programs.map((prog, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center cursor-pointer border border-gray-100 min-h-[160px]">
            <div className="mb-4">
              {prog.icon}
            </div>
            <h3 className="font-body font-bold text-sm mb-1 text-kernel-black">{prog.name}</h3>
            <p className="text-xs text-kernel-grey font-medium">{prog.age}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsOverview;
