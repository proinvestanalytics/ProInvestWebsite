// Hero.tsx - Combined version with best elements from both
import React from 'react';
import { Play, ArrowDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 184, 138, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(0, 184, 138, 0.05) 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Hockey Background Image */}
      <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            {/* Badge 
            <div className="inline-flex items-center gap-2 bg-[#00B88A]/20 border border-[#00B88A]/30 text-[#00B88A] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              🏒 NHL Pilot Program - Limited Spots Available
            </div>*/}

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transform How{' '}
              <span className="bg-gradient-to-r from-[#00B88A] to-[#008C8D] bg-clip-text text-transparent">
                Fans Experience
              </span>{' '}
              Hockey
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Enable NHL teams to generate new revenue during live games through real-time fan engagement and lifetime loyalty programs. Seamlessly integrates into existing team apps.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg rounded-2xl border border-[#00B88A]/40 p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#33FFC7] to-[#00B88A] bg-clip-text text-transparent mb-2">85%</div>
                <div className="text-sm text-gray-300">Platform Complete</div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg rounded-2xl border border-[#00B88A]/40 p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#33FFC7] to-[#00B88A] bg-clip-text text-transparent mb-2">Proven</div>
                <div className="text-sm text-gray-300">WebView Integration</div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg rounded-2xl border border-[#00B88A]/40 p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#33FFC7] to-[#00B88A] bg-clip-text text-transparent mb-2">Jan 2026</div>
                <div className="text-sm text-gray-300">Pilot Timeline</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00B88A] to-[#008C8D] text-white font-semibold rounded-lg hover:from-[#00A378] hover:to-[#007A7B] transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Request Demo Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              {/*<button
                onClick={openModal}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-[#00B88A]/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>*/}
            </div>

            {/* Bottom Notice */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-gray-400 text-sm">Limited NHL pilot spots available for January 2026. Request your demo today.</p>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight">
            {/* Large screens: expanded container with space for Live Predictions */}
            <div className="relative hidden lg:block" style={{ width: '390px', paddingRight: '100px' }}>
              {/* Phone image container */}
              <div className="relative z-10" style={{ width: '290px' }}>
                <img
                  src="/offpostscreen.png"
                  alt="One Game Contest mobile app interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Live prediction indicator */}
              <div 
                className="absolute bg-white/90 backdrop-blur-sm text-[#004953] px-4 py-2 rounded-lg shadow-lg z-20 animate-pulse"
                style={{ top: '20px', right: '0px' }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#00B88A] rounded-full animate-pulse"></div>
                  <span className="font-semibold">Live Predictions</span>
                </div>
                {/* Glow effect behind the indicator */}
                <div className="absolute inset-0 bg-[#00B88A]/30 rounded-lg blur-md opacity-60 -z-10"></div>
              </div>
              
              {/* Excited fan image */}
              <div 
                className="absolute bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl z-20 border border-[#00B88A]/20"
                style={{ bottom: '-40px', left: '-50px' }}
              >
                <img 
                  src="/excited-fan.png"
                  alt="Excited hockey fan"
                  className="w-32 h-32 object-cover"
                />
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B88A]/20 to-transparent rounded-2xl blur-xl opacity-50 -z-10"></div>
            </div>

            {/* Small screens: original centered container */}
            <div className="relative lg:hidden" style={{ width: '290px' }}>
              {/* Phone image container */}
              <div className="relative z-10">
                <img
                  src="/offpostscreen.png"
                  alt="One Game Contest mobile app interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Live prediction indicator - positioned safely on small screens */}
              <div 
                className="absolute bg-white/90 backdrop-blur-sm text-[#004953] px-4 py-2 rounded-lg shadow-lg z-20 animate-pulse"
                style={{ top: '20px', right: '-80px' }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#00B88A] rounded-full animate-pulse"></div>
                  <span className="font-semibold">Live Predictions</span>
                </div>
                {/* Glow effect behind the indicator */}
                <div className="absolute inset-0 bg-[#00B88A]/30 rounded-lg blur-md opacity-60 -z-10"></div>
              </div>
              
              {/* Excited fan image */}
              <div 
                className="absolute bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl z-20 border border-[#00B88A]/20"
                style={{ bottom: '-40px', left: '-50px' }}
              >
                <img 
                  src="/excited-fan.png"
                  alt="Excited hockey fan"
                  className="w-32 h-32 object-cover"
                />
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B88A]/20 to-transparent rounded-2xl blur-xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-[#00B88A]" />
      </div>
    </section>
  );
};

export default Hero;