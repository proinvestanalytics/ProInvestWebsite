import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { seoConfig, BASE_URL, OG_IMAGE } from '../seo/config';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title: titleOverride,
  description: descOverride,
  image = OG_IMAGE,
  type = 'website',
  noindex = false,
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lang = (i18n.language?.startsWith('fr') ? 'fr' : 'en') as 'en' | 'fr';
  const path = location.pathname;

  // Get SEO config for current path, fallback to homepage
  const pageConfig = seoConfig[path] || seoConfig['/'];
  const pageSEO = pageConfig?.[lang] || pageConfig?.['en'] || {
    title: 'ProInvest',
    description: 'Sports technology platform',
    keywords: '',
  };

  const title = titleOverride || pageSEO.title;
  const description = descOverride || pageSEO.description;
  const keywords = pageSEO.keywords;
  const canonicalUrl = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang - simplified for localStorage-based language */}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="ProInvest" />
      <meta property="og:locale" content={lang === 'fr' ? 'fr_CA' : 'en_US'} />
      <meta property="og:locale:alternate" content={lang === 'fr' ? 'en_US' : 'fr_CA'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="ProInvest" />
      <meta name="publisher" content="ProInvest" />
      <meta name="copyright" content="ProInvest 2025" />
      <meta name="application-name" content="ProInvest" />

      {/* Geo Tags (for local SEO) */}
      <meta name="geo.region" content="CA-QC" />
      <meta name="geo.placename" content="Montreal" />
    </Helmet>
  );
};

export default SEO;
