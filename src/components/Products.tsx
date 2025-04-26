import React from 'react';
import { Trophy, Layers, Cpu } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions that connect fans with professional hockey
            through cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            title="One Game Contest" 
            description="A fan game that lets users interact with live NHL games. Predict plays, track favorite players, and earn rewards based on real-time performance."
            icon={<Trophy className="h-12 w-12 text-secondary" />}
          />
          
          <ProductCard 
            title="ProInsight Suite" 
            description="A comprehensive tool for NHL teams to customize and manage OGC games. Analyze player metrics, create fan engagement opportunities, and drive team loyalty."
            icon={<Layers className="h-12 w-12 text-secondary" />}
          />
          
          <ProductCard 
            title="Hyperion Engine" 
            description="Our powerful computer vision AI model that gives live analysis of player performance. Track movements, analyze plays, and generate insights in real-time."
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