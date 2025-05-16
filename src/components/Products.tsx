// Products.tsx - Fixed number line positioning
import React from 'react';
import { Trophy, Layers, Cpu } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From fan engagement to team analytics, we're revolutionizing the hockey experience
          </p>
        </div>
        
        {/* Visual flow connector - FIXED POSITIONING */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="relative w-4/5 h-2 bg-gray-200 rounded-full">
            <div className="absolute top-0 left-0 w-1/3 h-2 bg-secondary rounded-l-full"></div>
            <div className="absolute top-0 left-1/3 w-1/3 h-2 bg-primary"></div>
            <div className="absolute top-0 right-0 w-1/3 h-2 bg-tertiary rounded-r-full"></div>
            
            {/* Fixed positioning of numbers with explicit percentages */}
            <div className="absolute -top-4 left-[16.67%] w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold" style={{ transform: 'translateX(-50%)' }}>1</div>
            <div className="absolute -top-4 left-[50%] w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold" style={{ transform: 'translateX(-50%)' }}>2</div>
            <div className="absolute -top-4 left-[83.33%] w-8 h-8 bg-tertiary rounded-full flex items-center justify-center text-white font-bold" style={{ transform: 'translateX(-50%)' }}>3</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            title="One Game Contest" 
            description="Engage with live NHL games in real-time. Make predictions, track your favorite players, and earn rewards while watching the game unfold."
            icon={<Trophy className="h-12 w-12 text-secondary" />}
            image="/fan-app.png" // Image of a fan using the app during a game
          />
          
          <ProductCard 
            title="ProInsight Suite" 
            description="Maximize value from your digital platforms. AI-powered fan segmentation, customizable activations, and data-driven insights to enhance team loyalty."
            icon={<Layers className="h-12 w-12 text-secondary" />}
            image="/team-insights.png" // Image of dashboard with engagement metrics
          />
          
          <ProductCard 
            title="Hyperion Engine" 
            description="Advanced analytics and AI-powered metrics tracking player performance in real-time, enhancing both fan engagement and team insights."
            icon={<Cpu className="h-12 w-12 text-secondary" />}
            image="/player-analytics.png" // Image of player performance analysis
          />
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              {icon}
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Products;