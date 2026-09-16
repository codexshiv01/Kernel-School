import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeFoundation from './components/CodeFoundation';
import BrandPillars from './components/BrandPillars';
import Methodology from './components/Methodology';
import ProgramsOverview from './components/ProgramsOverview';
import Applications from './components/Applications';
import Photography from './components/Photography';
import Trust from './components/Trust';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CodeFoundation />
      <BrandPillars />
      <Methodology />
      <ProgramsOverview />
      <Applications />
      <Photography />
      <Trust />
      <Footer />
    </div>
  );
}

export default App;
