import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Disable browser scroll restoration and reset scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import TeamOpsProduct from './pages/TeamOpsProduct';
import TeamOpsPrivacy from './pages/TeamOpsPrivacy';
import TeamOpsTerms from './pages/TeamOpsTerms';
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
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openModal={openVideoModal} />} />
            <Route path="/products/proinvest-ecosystem" element={<Products />} />
            <Route path="/products/teamops" element={<TeamOpsProduct />} />
            <Route path="/teamops/privacy" element={<TeamOpsPrivacy />} />
            <Route path="/teamops/terms" element={<TeamOpsTerms />} />
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