import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import TeamOpsProduct from './pages/TeamOpsProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import FeatureRequest from './pages/FeatureRequest';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import './styles/globals.css';

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openModal={openVideoModal} />} />
            <Route path="/products/proinvest-ecosystem" element={<Products />} />
            <Route path="/products/teamops" element={<TeamOpsProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feature-request" element={<FeatureRequest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} videoUrl="https://www.youtube.com/watch?v=P-iNO2u3Ee0" title="ProInvest Demo" />
      </div>
    </Router>
  );
}

export default App;