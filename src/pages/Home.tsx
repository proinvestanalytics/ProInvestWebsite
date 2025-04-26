import React from 'react';
import Hero from '../components/Hero';
import ProductsSection from '../components/Products';
import Quality from '../components/Quality';

interface HomeProps {
  openModal: () => void;
}

const Home: React.FC<HomeProps> = ({ openModal }) => {
  return (
    <>
      <Hero openModal={openModal} />
      <ProductsSection />
      <Quality />
    </>
  );
};

export default Home;