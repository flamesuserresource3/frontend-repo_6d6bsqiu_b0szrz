import React from 'react';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Sections from './components/Sections';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] font-inter">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Core sections: How it works, Use cases, Why, Integrations, Testimonials */}
      <Sections />

      {/* Autonomy demo */}
      <Demo />

      {/* Final CTA + Footer */}
      <CTA />
    </div>
  );
}

export default App;
