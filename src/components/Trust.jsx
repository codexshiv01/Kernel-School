import React from 'react';

const Trust = () => {
  return (
    <section className="px-8 py-16 max-w-7xl mx-auto w-full border-t border-gray-100 bg-white" id="trust">
      <div className="text-center mb-12">
         <h2 className="font-display font-bold text-sm tracking-widest text-kernel-blue uppercase mb-2">Trust & Credibility</h2>
         <p className="text-kernel-grey text-sm">Backed by industry mentors and partners who care about the future.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-2xl mx-auto transition-all duration-500 items-center justify-items-center">
        {/* Google */}
        <svg viewBox="0 0 256 84" xmlns="http://www.w3.org/2000/svg" className="h-8"><path d="M30.76 56.41c-11.75 0-21.43-9.52-21.43-21.57 0-11.97 9.53-21.49 21.35-21.49 6.54 0 11.97 2.39 16.03 6.3l-5.61 5.4c-2.48-2.39-6.3-4.16-10.42-4.16-8.52 0-15.58 7.06-15.58 15.86 0 8.87 7.06 15.93 15.58 15.93 10.06 0 13.9-7.22 14.52-10.98H30.76v-7.37h22.28c.23 1.15.31 2.38.31 3.99 0 12.21-8.13 21.43-21.57 21.43m40.54-.53c-11.37 0-20.66-8.87-20.66-21.04 0-12.06 9.29-21.04 20.66-21.04 11.45 0 20.66 8.98 20.66 21.04 0 12.17-9.21 21.04-20.66 21.04m0-17.13c-6.68 0-12.59 5.3-12.59 13.43 0 8.06 5.91 13.5 12.59 13.5 6.76 0 12.67-5.45 12.67-13.5 0-8.14-5.91-13.43-12.67-13.43m43.7 17.13c-11.36 0-20.66-8.87-20.66-21.04 0-12.06 9.3-21.04 20.66-21.04 11.45 0 20.66 8.98 20.66 21.04 0 12.17-9.21 21.04-20.66 21.04m0-17.13c-6.68 0-12.59 5.3-12.59 13.43 0 8.06 5.91 13.5 12.59 13.5 6.76 0 12.67-5.45 12.67-13.5 0-8.14-5.91-13.43-12.67-13.43m42.15 16.59v4.92c0 8.06-4.6 11.83-11.6 11.83-6.68 0-10.74-4.53-12.36-8.21l7.14-2.92c.92 2.22 3.3 4.15 5.3 4.15 3.38 0 5.61-2.07 5.61-6.14v-4.53h-.23c-1.61 1.99-4.76 3.69-8.68 3.69-10.82 0-20.04-9.06-20.04-21.04s9.22-21.04 20.04-21.04c3.92 0 7.07 1.69 8.68 3.61h.23v-2.99h7.75c-.07 1.61-.15 3.61-.15 6.07v17.43zM153 30.63c-6.45 0-11.98 5.45-11.98 13.52 0 7.91 5.53 13.36 11.98 13.36 6.3 0 11.82-5.45 11.82-13.36 0-8.07-5.52-13.52-11.82-13.52m22.42-16.12h8.06v41.38h-8.06V14.51zm36.85 41.38c-8.22 0-15.13-6.22-15.13-16.05 0-10.14 6.84-15.82 14.75-15.82 8.06 0 13.06 5.84 14.44 11.6l-20.12 8.29c1.38 2.69 3.69 4.38 6.53 4.38 3.15 0 5.15-1.54 6.53-3.76l6.37 4.22c-2.46 3.69-6.38 7.14-13.37 7.14M205.8 40l12.75-5.29c-.84-1.92-2.92-3.3-5.38-3.3-3 0-7.3 3.07-7.37 8.59z" fill="currentColor"/></svg>
        {/* Microsoft */}
        <svg viewBox="0 0 256 55" xmlns="http://www.w3.org/2000/svg" className="h-6"><path d="M0 0h24v24H0zm26 0h24v24H26zM0 26h24v24H0zm26 0h24v24H26z" fill="#000"/><path d="M96.79 31.9h-8.32V49h-9.35V6.8h11.23q6.43 0 9.87 3.32t3.44 9.17q0 4.2-2.3 6.94t-6.38 3.9v.35q3.17.65 4.8 2.5T102 38l1.45 11H93.1l-1.34-10.74q-.2-1.9-.96-2.92t-2.58-1.02h-4.38v-4.14zm0-17.2h-8.32v9.75h8.32q2.8 0 4.28-1.4t1.48-4.05q0-2.3-1.46-3.3t-4.3-1zM116.5 49V6.8h9.33V49h-9.32zM151.7 49.6q-5.1 0-8.5-2.65t-4.9-7.44h9.13q.84 2.1 2.2 3t3.2 1q1.7 0 2.52-.7t.83-2q0-2-3-3.23l-3.3-1.3q-4-.8-6.05-3t-2.1-6.1q0-4.34 3.4-6.95t9-2.62q4.9 0 7.93 2.1t4.3 6.55H157q-.6-1.5-1.9-2.4t-3.3-.9q-1.9 0-2.73.65t-.83 1.83q0 2.05 3 3.12l4 1.54q3.36.96 5.3 3.18t1.93 6.13q0 4.54-3.4 7.27T151.7 49.6M186.84 49.6q-7.4 0-11.85-4.52t-4.45-12.28q0-7.85 4.45-12.4T186.8 15.9q7.37 0 11.83 4.5t4.46 12.3q0 7.85-4.43 12.4t-11.83 4.52zm0-7.48q3.54 0 5.43-2.6t1.9-7.25q0-4.53-1.85-7.14t-5.48-2.6q-3.66 0-5.55 2.6t-1.9 7.14q0 4.65 1.9 7.25t5.55 2.6z" fill="currentColor"/></svg>
        {/* OpenAI (Text approximation as exact svg is complex) */}
        <div className="font-display font-bold text-2xl tracking-tighter">OpenAI</div>
        {/* Stanford */}
        <div className="font-body font-bold text-xl uppercase tracking-widest text-[#8C1515]">Stanford</div>
        {/* MIT */}
        <div className="font-display font-bold text-3xl tracking-tighter text-black">MIT</div>
        {/* DeepMind */}
        <div className="font-display font-bold text-xl tracking-tight text-[#4285F4] flex items-center gap-2">
           <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
           DeepMind
        </div>
      </div>
    </section>
  );
};

export default Trust;
