import React from 'react';
import { Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-gradient-to-br from-[#1F3B4D] to-[#152A38] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">Who We Are</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet the team behind ProInvest's innovative hockey technology solutions, combining deep sports expertise with cutting-edge AI development to transform the fan experience.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-8">Our Mission</h2>
            <div className="bg-gray-50 shadow-lg rounded-lg p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At ProInvest Analytics, we transform passive spectators into active participants during the moments that matter most. By embedding real-time gamification and advanced analytics directly into team applications, we capture fan attention during typically lost moments and convert it into measurable value.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Through our integrated platform, we:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg">Deepen fan engagement during commercial breaks and game pauses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg">Create new revenue streams for teams through both sponsorships and direct fan monetization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg">Deliver actionable first-party data for teams and partners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg">Strengthen the connection between fans and the game they love</span>
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                We're not just creating another app - we're revolutionizing how hockey is experienced by everyone in the ecosystem: teams, sponsors, and most importantly, fans.
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