import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ProductFeature {
  icon: string;
  text: string;
  status: 'ready' | 'demo' | 'development';
}

interface Product {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  status: 'complete' | 'development';
  statusText: string;
  description: string;
  features: ProductFeature[];
  techSpecs: {
    title: string;
    items: string[];
    type: 'complete' | 'development';
  };
  imageUrl: string;
}

const ProductsShowcase: React.FC = () => {
  const products: Product[] = [
    {
      id: 'ogc',
      icon: '🎮',
      title: 'One-Game Contest',
      subtitle: 'Real-Time Skill-Based Gaming',
      status: 'complete',
      statusText: '✓ 85% Complete - Pilot Ready',
      description: 'Interactive skill-based game where fans manage 3-player lineups during live NHL games. Features complete digital sponsor asset catalog with six integrated activation types woven seamlessly into gameplay. Creates entirely new revenue streams through strategic sponsor integration at optimal engagement moments.',
      features: [
        { icon: '⚡', text: 'AI performance scoring engine (demo ready)', status: 'demo' },
        { icon: '🔄', text: 'Unlimited player swaps during live games', status: 'ready' },
        { icon: '🏆', text: 'Real-time leaderboards and competition', status: 'ready' },
        { icon: '💰', text: 'Complete digital sponsor asset catalog integration', status: 'ready' },
        { icon: '📱', text: 'WebView integration - proven via TestFlight', status: 'ready' },
        { icon: '🎨', text: 'Enhanced UX/UI design and user experience', status: 'development' }
      ],
      techSpecs: {
        title: 'Technical Capabilities',
        items: [
          'Cross-platform deployment ready',
          'Enterprise-grade architecture',
          'Real-time data processing',
          '2-3 week customization timeline'
        ],
        type: 'complete'
      },
      imageUrl: '/OGCActionShot.png'
    },
    {
      id: 'ssp',
      icon: '🏆',
      title: 'Seventh Skater Club',
      subtitle: 'Lifetime Loyalty Ecosystem',
      status: 'complete',
      statusText: '✓ 95% Complete - Pilot Ready',
      description: 'Multi-generational loyalty program where fans progress through 9 tiers from Prospect to Legend. Features family accounts with inheritance, achievement badges, premium subscriptions, and lifetime engagement across generations. Blockchain-powered infrastructure for secure point management and transferability.',
      features: [
        { icon: '🔄', text: 'Dual-point architecture system', status: 'ready' },
        { icon: '👨‍👩‍👧‍👦', text: 'Multi-generational family accounts', status: 'development' },
        { icon: '🏅', text: 'Achievement badges and progression tiers', status: 'ready' },
        { icon: '⛓️', text: 'Blockchain-powered loyalty infrastructure', status: 'development' },
        { icon: '🎮', text: 'Integrated with OGC gameplay rewards', status: 'ready' },
        { icon: '🎨', text: 'Enhanced UX/UI design and user experience', status: 'development' }
      ],
      techSpecs: {
        title: 'Development Achievements',
        items: [
          '95% platform completion in 3 months',
          'NextAI Cohort 8 validation',
          'Multi-tier loyalty system operational',
          'Family account architecture complete'
        ],
        type: 'complete'
      },
      imageUrl: '/SSPActionShot.png'
    },
    {
      id: 'proinsight',
      icon: '📊',
      title: 'ProInsight Analytics',
      subtitle: 'Enterprise Management Suite',
      status: 'development',
      statusText: '⚠ Core Platform Ready - AI Development Required',
      description: 'Complete ecosystem management platform controlling OGC contests, Seventh Skater loyalty programs, and enterprise analytics. Teams set sponsor portal permissions while sponsors get self-service campaign tools and ROI tracking.',
      features: [
        { icon: '🎮', text: 'OGC contest creation and management', status: 'ready' },
        { icon: '🏆', text: 'SSP loyalty program administration and rewards', status: 'ready' },
        { icon: '🤝', text: 'Sponsor portal access with team-controlled permissions', status: 'ready' },
        { icon: '📊', text: 'Sponsor campaign management and ROI tracking', status: 'ready' },
        { icon: '💰', text: 'Revenue optimization and attribution modeling', status: 'development' },
        { icon: '🧠', text: 'Advanced AI predictive analytics and automation', status: 'development' }
      ],
      techSpecs: {
        title: 'Platform Scale Potential',
        items: [
          'Built for enterprise deployment',
          'Scalable cloud architecture',
          'Multi-team deployment ready',
          'Co-development partnership required'
        ],
        type: 'development'
      },
      imageUrl: '/team-insights.png'
    }
  ];

  const getStatusStyles = (status: string) => {
    if (status === 'complete') {
      return {
        badge: 'bg-[#00B88A]/10 text-[#00B88A] border-[#00B88A]/30',
        icon: CheckCircle
      };
    }
    return {
      badge: 'bg-orange-500/10 text-orange-500 border-orange-500/30',
      icon: AlertCircle
    };
  };

  const getFeatureStatus = (status: string) => {
    switch (status) {
      case 'ready':
        return 'bg-[#00B88A]/10 text-[#00B88A] text-xs px-2 py-1 rounded-full font-semibold';
      case 'demo':
        return 'bg-blue-500/10 text-blue-500 text-xs px-2 py-1 rounded-full font-semibold';
      case 'development':
        return 'bg-orange-500/10 text-orange-500 text-xs px-2 py-1 rounded-full font-semibold';
      default:
        return '';
    }
  };

  const getFeatureStatusText = (status: string) => {
    switch (status) {
      case 'ready': return 'Ready';
      case 'demo': return 'Demo';
      case 'development': return 'In Dev';
      default: return '';
    }
  };

  return (
    <section className="py-20 bg-[#FDFDF9]">
      <div className="container mx-auto px-4">
        {products.map((product, index) => {
          const statusStyles = getStatusStyles(product.status);
          const StatusIcon = statusStyles.icon;
          const isReverse = index % 2 === 1;

          return (
            <div key={product.id} className="mb-32 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Product Info */}
                <div className={`${isReverse ? 'lg:col-start-2' : ''}`}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00B88A] to-[#008C8D] rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg">
                      {product.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[#17242C] mb-2">{product.title}</h2>
                      <p className="text-lg text-[#10605A] font-semibold">{product.subtitle}</p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6 ${statusStyles.badge}`}>
                    <StatusIcon className="w-4 h-4" />
                    {product.statusText}
                  </div>

                  {/* Description */}
                  <p className="text-lg text-[#10605A] mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{feature.icon}</span>
                          <span className="text-[#17242C]">{feature.text}</span>
                        </div>
                        <span className={getFeatureStatus(feature.status)}>
                          {getFeatureStatusText(feature.status)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Specs */}
                  <div className={`p-6 rounded-xl border-l-4 ${product.techSpecs.type === 'complete' ? 'bg-[#00B88A]/5 border-[#00B88A]' : 'bg-orange-500/5 border-orange-500'}`}>
                    <h4 className="text-[#17242C] font-bold mb-4">{product.techSpecs.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#10605A]">
                      {product.techSpecs.items.map((item, itemIndex) => (
                        <div key={itemIndex}>• {item}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Visual */}
                <div className={`${isReverse ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <div className="bg-[#D4EDEA] border-2 border-dashed border-[#00B88A] rounded-2xl overflow-hidden">
                      <img 
                        src={product.imageUrl} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsShowcase;