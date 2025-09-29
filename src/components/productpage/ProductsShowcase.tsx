import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Play } from 'lucide-react';
import VideoModal from '../VideoModal';

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
  const [ogcModalOpen, setOgcModalOpen] = useState(false);
  const [sscModalOpen, setSscModalOpen] = useState(false);
  const products: Product[] = [
    {
      id: 'fullstack',
      icon: '📱',
      title: 'Full-Stack League & Team Apps',
      subtitle: 'Complete Mobile Experience',
      status: 'complete',
      statusText: 'Built & Demo-Ready',
      description: 'Deliver a complete mobile experience; league hub + team views with your branding, SSO, and governance. OGC and SSC run as native screens; ProInsight provides administration and reporting.',
      features: [
        { icon: '🎨', text: 'White-label UI/UX with multi-team theming', status: 'ready' },
        { icon: '🔐', text: 'Identity & SSO with role-based access', status: 'ready' },
        { icon: '🧭', text: 'League ↔ team navigation architecture', status: 'ready' },
        { icon: '📰', text: 'Content feeds, notifications, deep links', status: 'ready' },
        { icon: '🔗', text: 'WebView hosts for OGC / SSC', status: 'ready' },
        { icon: '📊', text: 'First-party fan ID capture (flows into ProInsight)', status: 'ready' }
      ],
      techSpecs: {
        title: 'Deployment',
        items: [
          'Full-stack app (we ship the app), or',
          'In-app embedding (WebView inside your current app)',
          'Pilot branding/SSO: ~2–3 weeks'
        ],
        type: 'complete'
      },
      imageUrl: '/appShowcase.png'
    },
    {
      id: 'ssp',
      icon: '🏆',
      title: 'Seventh Skater Club',
      subtitle: 'Lifetime Loyalty Ecosystem',
      status: 'complete',
      statusText: '95% Complete - Pilot Ready',
      description: 'Multi-generational loyalty program where fans progress through nine tiers from Prospect to Legend. Dual-point system (Status + Spendable) powers both long-term career progression and real-world rewards. Fully operational in OffPost demo.',
      features: [
        { icon: '🔄', text: 'Dual-point architecture: Status + Spendable', status: 'ready' },
        { icon: '🏅', text: 'Nine-tier career journey with automatic badge unlocks', status: 'ready' },
        { icon: '🎁', text: 'Rewards marketplace: merchandise, experiences, perks', status: 'ready' },
        { icon: '🎮', text: 'OGC integration: points credited directly from contests', status: 'ready' },
        { icon: '💎', text: 'Premium subscriptions + family account framework', status: 'ready' }
      ],
      techSpecs: {
        title: 'Development roadmap',
        items: [
          'Multi-generational accounts (inheritance/sharing)',
          'Blockchain ledger for secure, cross-team portability',
          'Enhanced UX/UI refinements'
        ],
        type: 'complete'
      },
      imageUrl: '/SSPActionShot.png'
    },
    {
      id: 'ogc',
      icon: '🎮',
      title: 'One-Game Contest',
      subtitle: 'Real-Time Skill-Based Gaming',
      status: 'development',
      statusText: '70% Complete',
      description: 'Interactive skill-based game where fans manage 3-player lineups during live NHL games. Features complete digital sponsor asset catalog with six integrated activation types woven seamlessly into gameplay. Creates entirely new revenue streams through strategic sponsor integration at optimal engagement moments.',
      features: [
        { icon: '⚡', text: 'Real-time UI with lineup manager & leaderboards (rules-based/manual scoring demo)', status: 'ready' },
        { icon: '🔄', text: 'Unlimited in-game swaps (configurable)', status: 'ready' },
        { icon: '🏆', text: 'Loyalty linkage: automatic point crediting into SSC', status: 'ready' },
        { icon: '📱', text: 'WebView embedding proven in OffPost demo', status: 'ready' },
        { icon: '💰', text: 'Full sponsor asset catalog (six activation types)', status: 'development' },
        { icon: '⚙️', text: 'Team customization via ProInsight', status: 'development' },
        { icon: '📊', text: 'Engagement & ROI analytics', status: 'development' }
      ],
      techSpecs: {
        title: 'Technical',
        items: [
          'Automated scoring via computer vision',
          'Real-time WebSockets',
          'Cross-platform',
          '2–3-week branding + SSO once pilot scope is set'
        ],
        type: 'development'
      },
      imageUrl: '/OGCActionShot.png'
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
        { icon: '🏆', text: 'SSC loyalty program administration and rewards', status: 'ready' },
        { icon: '🤝', text: 'Sponsor portal access with team-controlled permissions', status: 'ready' },
        { icon: '📊', text: 'Basic data ingest & reporting', status: 'ready' },
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

          // Video button logic
          let showVideoButton = false;
          let videoButton = null;
          if (product.id === 'ogc') {
            showVideoButton = true;
            videoButton = (
              <>
                <button
                  onClick={() => setOgcModalOpen(true)}
                  className="mb-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#00B88A] to-[#008C8D] text-white font-semibold shadow-md hover:from-[#00A378] hover:to-[#007A7B] transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  Watch OGC Demo
                </button>
                <VideoModal
                  isOpen={ogcModalOpen}
                  onClose={() => setOgcModalOpen(false)}
                  videoUrl="https://www.youtube.com/watch?v=L3PnHq9e9jk"
                  title="OGC Demo"
                />
              </>
            );
          } else if (product.id === 'ssp') {
            showVideoButton = true;
            videoButton = (
              <>
                <button
                  onClick={() => setSscModalOpen(true)}
                  className="mb-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#00B88A] to-[#008C8D] text-white font-semibold shadow-md hover:from-[#00A378] hover:to-[#007A7B] transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  Watch SSC Demo
                </button>
                <VideoModal
                  isOpen={sscModalOpen}
                  onClose={() => setSscModalOpen(false)}
                  videoUrl="https://www.youtube.com/watch?v=da-8ziq-jeA"
                  title="SSC Demo"
                />
              </>
            );
          }

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
                  {showVideoButton && videoButton}
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