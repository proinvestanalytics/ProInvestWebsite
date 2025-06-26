import React, { useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import CustomModal from './CustomModal'; // Make sure this import path is correct

const CTASection: React.FC = () => {
  const [modalType, setModalType] = useState<'access' | 'demo' | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-[#00B88A] to-[#008C8D] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience the Platform
            </h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
            Request access to OffPost to experience our integrated platform through proven WebView technology. See how the complete ecosystem works for NHL team deployment and co-development opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setModalType('access')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#17242C] font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                Request OffPost App Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setModalType('demo')}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-[#17242C] transition-all duration-300 transform hover:scale-105 group"
              >
                Schedule Platform Demo
                <Calendar className="w-5 h-5 ml-2" />
              </button>
            </div>

            <p className="text-sm mt-8 opacity-75">
              NextAI-validated • Enterprise Platform • Co-development Opportunities • January 2026 Pilot Timeline
            </p>
          </div>
        </div>
      </section>

      {/* Modal for App Access Request - UPDATED */}
      <CustomModal
        isOpen={modalType === 'access'}
        onClose={closeModal}
        title="OffPost Platform Access"
        contactPath="/contact" // Changed from contactEmail
      >
        <p className="mb-4">An enterprise platform demonstration is available for qualified teams and partners. Access includes:</p>
        <ul className="space-y-3">
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>Complete OGC and Seventh Skater experience</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>Proven WebView integration model</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>Full administrative platform capabilities</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>NHL team deployment ready environment</span></li>
        </ul>
        <p className="mt-4 text-sm opacity-80">Access will be coordinated within 24 hours.</p>
      </CustomModal>

      {/* Modal for Demo Request - UPDATED */}
      <CustomModal
        isOpen={modalType === 'demo'}
        onClose={closeModal}
        title="Schedule a Platform Demo"
        contactPath="/contact" // Changed from contactEmail
      >
        <p className="mb-4">Schedule a technical demonstration with our team for a detailed overview. The demo covers:</p>
        <ul className="space-y-3">
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>Complete platform walkthrough</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>WebView integration demonstration</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>Overview of enterprise capabilities</span></li>
          <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#00B88A] flex-shrink-0" /><span>Live Q&A with our technical team</span></li>
        </ul>
        <p className="mt-4 text-sm opacity-80">Scheduling will be confirmed within 24 hours.</p>
      </CustomModal>
    </>
  );
};

export default CTASection;