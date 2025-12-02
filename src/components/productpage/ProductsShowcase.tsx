import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, AlertCircle, Play } from 'lucide-react';
import VideoModal from '../VideoModal';

interface ProductFeature {
  icon: string;
  text: string;
  status: 'ready' | 'demo' | 'development';
}

interface Product {
  id: string;
  translationKey: string;
  icon: string;
  status: 'complete' | 'development';
  featureIcons: string[];
  featureStatuses: ('ready' | 'demo' | 'development')[];
  techSpecsType: 'complete' | 'development';
  imageUrl: string;
}

const ProductsShowcase: React.FC = () => {
  const { t } = useTranslation('products');
  const [ogcModalOpen, setOgcModalOpen] = useState(false);
  const [sscModalOpen, setSscModalOpen] = useState(false);

  // Product metadata (non-translatable parts)
  const productsMeta: Product[] = [
    {
      id: 'fullstack',
      translationKey: 'fullstack',
      icon: '📱',
      status: 'complete',
      featureIcons: ['🎨', '🔐', '🧭', '📰', '🔗', '📊'],
      featureStatuses: ['ready', 'ready', 'ready', 'ready', 'ready', 'ready'],
      techSpecsType: 'complete',
      imageUrl: '/appShowcase.png'
    },
    {
      id: 'ssp',
      translationKey: 'ssc',
      icon: '🏆',
      status: 'complete',
      featureIcons: ['🔄', '🏅', '🎁', '🎮', '💎'],
      featureStatuses: ['ready', 'ready', 'ready', 'ready', 'ready'],
      techSpecsType: 'complete',
      imageUrl: '/SSPActionShot.png'
    },
    {
      id: 'ogc',
      translationKey: 'ogc',
      icon: '🎮',
      status: 'development',
      featureIcons: ['⚡', '🔄', '🏆', '📱', '💰', '⚙️', '📊'],
      featureStatuses: ['ready', 'ready', 'ready', 'ready', 'development', 'development', 'development'],
      techSpecsType: 'development',
      imageUrl: '/OGCActionShot.png'
    },
    {
      id: 'proinsight',
      translationKey: 'proinsight',
      icon: '📊',
      status: 'development',
      featureIcons: ['🎮', '🏆', '🤝', '📊', '💰', '🧠'],
      featureStatuses: ['ready', 'ready', 'ready', 'ready', 'development', 'development'],
      techSpecsType: 'development',
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
      case 'ready': return t('showcase.featureStatus.ready');
      case 'demo': return t('showcase.featureStatus.demo');
      case 'development': return t('showcase.featureStatus.development');
      default: return '';
    }
  };

  return (
    <section className="py-20 bg-[#FDFDF9]">
      <div className="container mx-auto px-4">
        {productsMeta.map((product, index) => {
          const statusStyles = getStatusStyles(product.status);
          const StatusIcon = statusStyles.icon;
          const isReverse = index % 2 === 1;

          // Get translated content
          const title = t(`showcase.${product.translationKey}.title`);
          const subtitle = t(`showcase.${product.translationKey}.subtitle`);
          const statusText = t(`showcase.${product.translationKey}.status`);
          const description = t(`showcase.${product.translationKey}.description`);
          const features = t(`showcase.${product.translationKey}.features`, { returnObjects: true }) as string[];
          const techSpecsTitle = t(`showcase.${product.translationKey}.techSpecs.title`);
          const techSpecsItems = t(`showcase.${product.translationKey}.techSpecs.items`, { returnObjects: true }) as string[];

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
                  {t('showcase.watchOgcDemo')}
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
                  {t('showcase.watchSscDemo')}
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
                      <h2 className="text-3xl font-bold text-[#17242C] mb-2">{title}</h2>
                      <p className="text-lg text-[#10605A] font-semibold">{subtitle}</p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6 ${statusStyles.badge}`}>
                    <StatusIcon className="w-4 h-4" />
                    {statusText}
                  </div>

                  {/* Description */}
                  <p className="text-lg text-[#10605A] mb-8 leading-relaxed">
                    {description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {features.map((featureText, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{product.featureIcons[featureIndex]}</span>
                          <span className="text-[#17242C]">{featureText}</span>
                        </div>
                        <span className={getFeatureStatus(product.featureStatuses[featureIndex])}>
                          {getFeatureStatusText(product.featureStatuses[featureIndex])}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Specs */}
                  <div className={`p-6 rounded-xl border-l-4 ${product.techSpecsType === 'complete' ? 'bg-[#00B88A]/5 border-[#00B88A]' : 'bg-orange-500/5 border-orange-500'}`}>
                    <h4 className="text-[#17242C] font-bold mb-4">{techSpecsTitle}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#10605A]">
                      {techSpecsItems.map((item, itemIndex) => (
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
                        alt={title}
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