import React from 'react';
import { Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 184, 138, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(0, 184, 138, 0.05) 0%, transparent 50%)`
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00B88A]/20 border border-[#00B88A]/30 text-[#00B88A] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mb-6">
              🚀 Meet the Team
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Who <span className="bg-gradient-to-r from-[#00B88A] to-[#008C8D] bg-clip-text text-transparent">We Are</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#F7F2F0] leading-relaxed">
              We build technology for every level of the game. From youth teams managing their seasons to professional leagues engaging millions of fans—we're creating the complete sports technology ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-8">Our Mission</h2>
            <div className="bg-gray-50 shadow-lg rounded-lg p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We believe great sports technology should serve every level of the game — from the youth coach juggling practice schedules to the professional team engaging millions of fans on game night.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                That's why we're building two products:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg"><strong>TeamOps</strong> — Operations platform for youth and amateur teams. Scheduling, communication, compliance, player safety, and much more all in one place.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg"><strong>ProInvest Ecosystem</strong> — Complete fan engagement infrastructure for professional leagues. Full-stack team apps, in-app entertainment, Seventh Skater Club for lifetime loyalty, and ProInsight for analytics.</span>
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Together, we:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg">Empower youth teams with tools that simplify operations and prioritize safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg">Give professional teams new ways to engage and monetize their fanbase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg">Build technology that scales from a single team to an entire league</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg">Create lifelong connections between people and the game</span>
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                From first skate to sold-out arenas — we're building the technology that powers the full sports journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <TeamMember
              name="Philippe Trop"
              title="CEO & Founder"
              image="/ptrop.png"
              description="Hockey passion + entrepreneurial drive. Founded 360° Hockey Enterprises, developing hockey training solutions. Combines deep hockey knowledge with business strategy to drive fan engagement solutions."
              linkedinUrl="https://www.linkedin.com/in/philippetrop/"
            />
            
            <TeamMember
              name="Blake Nielsen"
              title="CBDO & Co-Founder"
              image="/blake.png"
              description="Combines a deep hockey passion with entrepreneurial drive. Sponsorship and partnership specialist skilled at bridging fans, brands, and leagues."
              linkedinUrl="https://www.linkedin.com/in/blake-nielsen-proinvest/"
            />
            
            <TeamMember
              name="Salvatore Papia"
              title="CTO & Co-Founder"
              image="/sal.png"
              description="Computer engineer and real-time systems architect. Leads the Hyperion sub-second scoring engine and AI/ML integrations. Ensures platform scalability and data security."
              linkedinUrl="https://www.linkedin.com/in/salvatore-papia-72875b295/"
            />
            
            <TeamMember
              name="Martin Villeneuve"
              title="CFO"
              image="/martin.png"
              description="Former COO at BMO Trust, responsible for managing CAD $65B in assets. Provides large-scale financial expertise, investor relations, and strategic growth focus. Ensures a sustainable runway with rigorous financial oversight."
              linkedinUrl="https://www.linkedin.com/in/martin-villeneuve-65bb6444/"
            />
          </div>
        </div>
      </section>

      {/* Powered by NextAI Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center justify-center">
            <h3 className="text-3xl font-semibold text-gray-700 mr-6">Powered by</h3>
            <a 
              href="https://www.nextcanada.com/next-ai/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-48 h-auto transition-opacity duration-300 hover:opacity-80"
            >
              <img src="/next-ai-logo.png" alt="Next Canada Logo" className="w-full h-auto" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  description: string;
  linkedinUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, image, description, linkedinUrl }) => {
  return (
    <div className="group">
      <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:gap-8">
        <div className="mb-6 md:mb-0 relative">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl">
            <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 bg-white rounded-full shadow-lg hover:bg-secondary hover:text-white transition-colors duration-300 flex items-center justify-center"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="md:pt-4">
          <h3 className="text-2xl font-bold text-primary mb-2">{name}</h3>
          <p className="text-secondary font-semibold mb-4">{title}</p>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;