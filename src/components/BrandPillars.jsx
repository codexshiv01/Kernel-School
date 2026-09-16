import React from 'react';
import { Sigma, Code, Cpu, Cuboid } from 'lucide-react';

const pillars = [
  {
    icon: <Sigma className="w-8 h-8 text-kernel-black" strokeWidth={1.5} />,
    title: 'Mathematics',
    description: 'The language of intelligence',
  },
  {
    icon: <Code className="w-8 h-8 text-kernel-blue" strokeWidth={1.5} />,
    title: 'Computer Science',
    description: 'The language of machines',
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-500" strokeWidth={1.5} />,
    title: 'Artificial Intelligence',
    description: 'The science of intelligent systems',
  },
  {
    icon: <Cuboid className="w-8 h-8 text-kernel-green" strokeWidth={1.5} />,
    title: 'Building',
    description: 'Where knowledge becomes capability',
  },
];

const BrandPillars = () => {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto w-full border-t border-gray-100" id="approach">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-default">
            <div className="mb-6 p-4 border border-gray-200 rounded-xl">
               {pillar.icon}
            </div>
            <h3 className="font-display font-bold text-lg mb-2 text-kernel-black">{pillar.title}</h3>
            <p className="text-sm text-kernel-grey">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandPillars;
