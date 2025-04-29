import React from 'react';
import Hero from '../components/Hero';
import FanEngagement from '../components/FanEngagement';
import ProductsSection from '../components/Products';
import Quality from '../components/Quality';

interface HomeProps {
  openModal: () => void;
}

const Home: React.FC<HomeProps> = ({ openModal }) => {
  return (
    <>
      <Hero openModal={openModal} />
      <FanEngagement />
      <ProductsSection />
      <Quality />
    </>
  );
};

export default Home;
