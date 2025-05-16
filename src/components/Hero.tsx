// Hero.tsx - Fixed with condensed layout that won't stretch
import React from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-[#1F3B4D] to-[#152A38]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform How Fans Experience Hockey
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
              Not gambling – a new category of fan engagement. Manage your lineup in real time, track favorite players, and earn rewards while watching live games.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="contact"
                className="btn-primary text-lg"
              >
                Request Demo Access
              </a>
              <button
                onClick={openModal}
                className="btn-secondary text-lg flex items-center justify-center"
              >
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
            </div>
            <div className="mt-8 pt-4 border-t border-white/20">
              <p className="text-white/70 text-sm">Limited NHL pilot spots available for October 2025. Request your demo today.</p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Fixed width container to prevent stretching */}
            <div className="relative" style={{ width: '290px' }}>
              {/* Phone image container */}
              <div>
                <img
                  src="/app-interface.png"
                  alt="One Game Contest mobile app interface"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Live prediction indicator - positioned like in Image 1 */}
              <div 
                className="absolute bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-lg shadow-lg z-20"
                style={{ top: '20px', right: '-100px' }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Live Predictions</span>
                </div>
              </div>
              
              {/* Excited fan image - positioned like in Image 1 */}
              <div 
                className="absolute bg-white rounded-lg overflow-hidden shadow-xl z-20 border-2 border-primary/20"
                style={{ bottom: '-40px', left: '-50px' }}
              >
                <img 
                  src="/excited-fan.png"
                  alt="Excited hockey fan"
                  className="w-32 h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;