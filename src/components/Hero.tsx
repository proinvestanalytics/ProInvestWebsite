import React from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#1F3B4D] to-[#152A38]">
      <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-10"></div>
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of Hockey Analytics
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
              Connect with your favorite professional players through cutting-edge technology and real-time analytics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#book-demo"
                className="btn-primary text-lg"
              >
                Book a Demo
              </a>
              <button
                onClick={openModal}
                className="btn-secondary text-lg flex items-center justify-center"
              >
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/hockey-faceoff.png"
                alt="Hockey players at face-off"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-6 py-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Live Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;