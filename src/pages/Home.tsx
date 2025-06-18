import React from 'react';
import Hero from '../components/Hero';
import FanEngagement from '../components/FanEngagement';
import ProductsSection from '../components/Products';
import Quality from '../components/Quality';
import TeamValue from '../components/TeamValue';
import DevelopmentStatus from '../components/PlatformProgress';
import PlatformArchitecture from '../components/TechnicalFoundation';
import NextAISection from '../components/NextAIHomeSection';
import CTASection from '../components/CTASection'

interface HomeProps {
  openModal: () => void;
}

const Home: React.FC<HomeProps> = ({ openModal }) => {
  return (
    <>
      <Hero openModal={openModal} />
      <FanEngagement />
      <PlatformArchitecture />
      <DevelopmentStatus />
      <NextAISection />
      <Quality />
      <CTASection />
    </>

  );
};

export default Home;
