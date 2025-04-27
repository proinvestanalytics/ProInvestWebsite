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
            Meet the team behind ProInvest's innovative hockey technology solutions
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <TeamMember
              name="Philippe Trop"
              title="CEO & Founder"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              description="Hockey passion + entrepreneurial drive. Founded 360° Hockey Enterprises, developing hockey training solutions."
              linkedinUrl="https://ca.linkedin.com/"
            />
            
            <TeamMember
              name="Blake Nielsen"
              title="CBDO & Co-Founder"
              image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
              description="Combines a deep hockey passion with entrepreneurial drive. Sponsorship and partnership specialist skilled at bridging fans, brands, and leagues."
              linkedinUrl="https://ca.linkedin.com/"
            />
            
            <TeamMember
              name="Salvatore Papia"
              title="CTO & Co-Founder"
              image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              description="Computer engineer and real-time systems architect. Leads the Hyperion sub-second scoring engine and AI/ML integrations. Ensures platform scalability and data security."
              linkedinUrl="https://ca.linkedin.com/"
            />
            
            <TeamMember
              name="Martin Villeneuve"
              title="CFO"
              image="https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg"
              description="Former COO at BMO Trust, responsible for managing CAD $65B in assets. Provides large-scale financial expertise, investor relations, and strategic growth focus. Ensures a sustainable runway with rigorous financial oversight."
              linkedinUrl="https://ca.linkedin.com/"
            />
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
