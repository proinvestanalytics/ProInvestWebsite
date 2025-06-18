import React from 'react';
import ProductHero from '../components/productpage/ProductHero';
import ProductsShowcase from '../components/productpage/ProductsShowcase';
import WebViewIntegration from '../components/productpage/WebViewIntShow';

const Products: React.FC = () => {
  return (
    <>
      <ProductHero />
      <ProductsShowcase />
      <WebViewIntegration />
    </>
  );
};

export default Products;