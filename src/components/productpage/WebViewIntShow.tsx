import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import CustomModal from '../CustomModal'; // Make sure this import path is correct

const WebViewIntegration: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#17242C] to-[#10605A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00B88A]/20 border border-[#00B88A]/30 text-[#00B88A] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mb-8">
              ✓ Full App Deployment Proven
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold mb-6">
              Seamless App Deployment for Teams & Leagues
            </h2>

            {/* Description */}
            <p className="text-xl text-[#F7F2F0] mb-12 leading-relaxed">
            We build and ship complete white-label league + team mobile apps. The OffPost demo shows the exact deployment model, de-risking rollout and proving production readiness.
            </p>

            {/* Integration Demo */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-[#00B88A]/20 p-8 mb-12">
              <h3 className="text-[#00B88A] text-xl font-bold mb-4">Experience It Live</h3>
              <p className="text-[#F7F2F0] mb-8">
                The OffPost demo app shows both paths in action, proving functionality and eliminating technical risk for new deployments.
              </p>

              {/* Demo Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#00B88A]/10 p-6 rounded-xl border-l-4 border-[#00B88A] text-left">
                  <h4 className="text-[#00B88A] font-bold mb-2">Complete Integration</h4>
                  <p className="text-[#F7F2F0] text-sm">Both OGC and SSP fully functional within WebView environment</p>
                </div>
                <div className="bg-[#00B88A]/10 p-6 rounded-xl border-l-4 border-[#00B88A] text-left">
                  <h4 className="text-[#00B88A] font-bold mb-2">Enterprise Performance</h4>
                  <p className="text-[#F7F2F0] text-sm">Real-time updates, smooth interactions, production-grade reliability</p>
                </div>
                <div className="bg-[#00B88A]/10 p-6 rounded-xl border-l-4 border-[#00B88A] text-left">
                  <h4 className="text-[#00B88A] font-bold mb-2">Rapid Deployment</h4>
                  <p className="text-[#F7F2F0] text-sm">2-3 week customization with team branding and SSO integration</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 bg-white text-[#17242C] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Request TestFlight Access
              <span>→</span>
            </button>

            <p className="text-sm mt-6 opacity-75">
            NextAI-validated • Enterprise platform • Co-development opportunities • Pilot timeline: late 2025
            </p>
          </div>
        </div>
      </section>

      {/* Modal for TestFlight Access Request */}
      <CustomModal
        isOpen={modalOpen}
        onClose={closeModal}
        title="ProInvest TestFlight Access"
        contactPath="/contact"
      >
        <p className="mb-4">Experience the complete integrated platform through TestFlight access. This includes:</p>
        <ul className="space-y-3">
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>OGC real-time gaming (95% complete)</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>Seventh Skater loyalty system (95% complete)</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>ProInsight analytics overview (core platform ready)</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>WebView integration demonstration</span></li>
        </ul>
        <p className="mt-4 text-sm opacity-80">TestFlight access coordinated within 24 hours for qualified teams and co-development partners.</p>
      </CustomModal>
    </>
  );
};

export default WebViewIntegration;