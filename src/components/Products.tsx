import React from 'react';
import { Trophy, Layers, Cpu } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From fan engagement to team analytics, we're revolutionizing the hockey experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            title="One Game Contest" 
            description="Engage with live NHL games in real-time. Make predictions, track your favorite players, and earn rewards while watching the game unfold."
            icon={<Trophy className="h-12 w-12 text-secondary" />}
          />
          
          <ProductCard 
            title="ProInsight Suite" 
            description="A powerful platform for NHL teams to create custom fan experiences, analyze engagement metrics, and drive team loyalty."
            icon={<Layers className="h-12 w-12 text-secondary" />}
          />
          
          <ProductCard 
            title="Hyperion Engine" 
            description="Advanced analytics and AI-powered insights for teams, tracking player performance and generating real-time game analysis."
            icon={<Cpu className="h-12 w-12 text-secondary" />}
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
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md transition-transform duration-300 hover:-translate-y-2">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Products;
