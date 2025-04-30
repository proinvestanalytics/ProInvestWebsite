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
              Not gambling – a new category of fan engagement. Make real-time predictions, track favorite players, and earn rewards while watching live games.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#try-contest"
                className="btn-primary text-lg"
              >
                Try One Game Contest
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
              <p className="text-white/70 text-sm">October NHL pilots now open. Request your demo today.</p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Fixed width container to prevent stretching */}
            <div className="relative" style={{ width: '320px' }}>
              {/* Phone image container */}
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="/app-interface.png"
                  alt="One Game Contest mobile app interface"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Live prediction indicator - positioned like in Image 1 */}
              <div 
                className="absolute bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-lg shadow-lg z-20"
                style={{ top: '20px', right: '-120px' }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Live Predictions</span>
                </div>
              </div>
              
              {/* Excited fan image - positioned like in Image 1 */}
              <div 
                className="absolute bg-white rounded-lg overflow-hidden shadow-xl z-20 border-2 border-primary/20"
                style={{ bottom: '-20px', left: '-50px' }}
              >
                <img 
                  src="/excited-fan.png"
                  alt="Excited hockey fan"
                  className="w-24 h-24 object-cover"
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