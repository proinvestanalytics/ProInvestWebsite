import React from 'react';
import { Trophy, Layers, Cpu, ArrowRight } from 'lucide-react';

const Products = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-gradient-to-br from-[#1F3B4D] to-[#152A38] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">Our Products</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions that revolutionize how fans interact with professional hockey
            through cutting-edge technology and real-time analytics.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            <ProductSection
              title="One Game Contest"
              description="A revolutionary fan engagement platform that transforms how viewers interact with live NHL games. Make real-time predictions, track your favorite players, and earn rewards based on actual game performance. Our transparent AI-powered system processes live game data to provide instant, fair feedback and scoring, keeping fans engaged during breaks when they would typically be distracted by competing apps."
              features={[
                "Sub-second, real-time scoring",
                "Live game integration",
                "Reward system based on accuracy - not gambling",
                "Loyalty program integration",
                "Sponsor integration opportunities"
              ]}
              icon={<Trophy className="w-12 h-12 text-secondary" />}
              imageUrl="/fan-app.png"
              reverse={false}
            />

            <ProductSection
              title="ProInsight Suite"
              description="A comprehensive management platform empowering NHL teams to maximize fan engagement value throughout the season. This AI-powered dashboard transforms fan data into actionable insights, designs promotional campaigns with measurable ROI, and optimizes revenue through both sponsorships and direct fan monetization. Teams can seamlessly customize OGC's fan journey while integrating with existing loyalty programs."
              features={[
                "Design custom fan experiences",
                "First-party fan data analytics",
                "Revenue-generating promotional campaigns",
                "Team-specific branding and customization",
                "Seamless integration with existing systems"
              ]}
              icon={<Layers className="w-12 h-12 text-secondary" />}
              imageUrl="/team-insights.png"
              reverse={true}
            />

            <ProductSection
              title="Hyperion Engine"
              description="ProInvest's proprietary computer vision model and AI game engine delivers real-time player performance insights with role-specific normalization and transparency. Hyperion transforms the viewing experience by providing context-rich metrics fans can understand. Our engine creates a fair, skill-based engagement platform that powers OGC while enhancing fan-game connection. Teams benefit from increased engagement during typically lost moments and diverse sponsor activation opportunities throughout the fan experience."
              features={[
                "Sub-second performance analysis",
                "Contextual player evaluation",
                "Role-normalized scoring system",
                "Machine learning optimization",
                "Enterprise-grade reliability for NHL scale"
              ]}
              icon={<Cpu className="w-12 h-12 text-secondary" />}
              imageUrl="/player-analytics.png"
              reverse={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProductSectionProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imageUrl: string;
  reverse: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  description,
  features,
  icon,
  imageUrl,
  reverse
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
      <div className="md:w-1/2">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-secondary/10 rounded-xl">
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
        </div>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <ArrowRight className="w-5 h-5 text-secondary" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2">
        <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;