import React from 'react';
import { Trophy, Target, Zap, BadgeDollarSign, Database, HeartHandshake } from 'lucide-react';

const FanEngagement: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Transform Your Game Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Teams monetize fan engagement through real-time contests and lifetime loyalty programs. Generate new digital inventory while building deeper fan relationships that last decades.
              </p>
              <div className="space-y-6">
                <Feature 
                  icon={<BadgeDollarSign className="h-6 w-6 text-secondary" />}
                  title="Revenue Generation"
                  description="Create new sponsorship inventory through contextual activations, achievement badges, and premium features during live games."
                />
                <Feature 
                  icon={<Database className="h-6 w-6 text-secondary" />}
                  title="Fan Data Ownership"
                  description="Capture valuable first-party fan data and behavior analytics through your own platform instead of losing it to external apps."
                />
                <Feature 
                  icon={<HeartHandshake className="h-6 w-6 text-secondary" />}
                  title="Loyalty Monetization"
                  description="Build lifetime fan relationships through career progression that drives premium subscriptions and repeat engagement."
                />
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/2screens.png"
                  alt="Fan engagement platform"
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center space-x-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-medium text-primary">Live Game</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Trophy className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Points Earned</p>
                    <p className="text-2xl font-bold text-secondary">2,450</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-secondary/10 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-primary mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FanEngagement;
