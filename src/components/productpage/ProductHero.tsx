import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductHero: React.FC = () => {
  const { t } = useTranslation('products');

  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-10"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 184, 138, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(0, 184, 138, 0.05) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#00B88A]/20 border border-[#00B88A]/30 text-[#00B88A] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mb-6">
            🏒 {t('hero.badge')}
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t('hero.title')} <span className="bg-gradient-to-r from-[#00B88A] to-[#008C8D] bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-[#F7F2F0] leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;