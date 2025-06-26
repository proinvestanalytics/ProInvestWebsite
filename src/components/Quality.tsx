import React from 'react';
import { ShieldCheck, Award, GitBranch } from 'lucide-react';

const Quality: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Product Quality</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence ensures that ProInvest delivers reliable, secure, and innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <QualityCard 
            title="Industry Standards" 
            description="ProInvest follows ISO and GDPR standards to ensure data security and privacy protection for all our users and partners."
            icon={<ShieldCheck className="h-10 w-10 text-secondary" />}
          />
          
          <QualityCard 
            title="Certified Excellence" 
            description="Our products undergo rigorous testing and quality assurance to deliver the most reliable and accurate hockey analytics in the industry."
            icon={<Award className="h-10 w-10 text-secondary" />}
          />
          
          <QualityCard 
            title="Open Source Trust" 
            description="ProInvest uses trusted open-source practices like the MIT license, ensuring reliability and continuous innovation."
            icon={<GitBranch className="h-10 w-10 text-secondary" />}
          />
        </div>
      </div>
    </section>
  );
};

interface QualityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const QualityCard: React.FC<QualityCardProps> = ({ title, description, icon }) => {
  return (
    <div className="border border-gray-100 rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Quality;