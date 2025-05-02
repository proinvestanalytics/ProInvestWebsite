import React from 'react';

const TeamValue: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Value for Hockey Teams</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your existing platforms while creating new monetization opportunities and deeper fan connections
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M5 3 H12 V8 H5 Z" />
                      <path d="M14 3 H19 V8 H14 Z" />
                      <path d="M5 10 H10 V15 H5 Z" />
                      <path d="M12 10 H19 V15 H12 Z" />
                      <path d="M5 17 H19 V22 H5 Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Seamless Integration</h3>
                    <p className="text-gray-600">Connect to your existing website or app with zero development effort required.</p>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M18 20V10" />
                      <path d="M12 20V4" />
                      <path d="M6 20v-6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Fan Data Insights</h3>
                    <p className="text-gray-600">Gather actionable fan behavior data for targeted campaigns and activation.</p>
                  </div>
                </div>
                
                {/* Feature 3 */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">New Revenue Streams</h3>
                    <p className="text-gray-600">Create sponsorship opportunities and maximize your 50-50 and other engagement initiatives.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-primary/90 transition" onClick={() => window.location.href = 'contact'}>
                  Book Team Demo
                </button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              {/* Dashboard visualization showing metrics and ROI */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/team-insights.png" 
                  alt="Team analytics dashboard"
                  className="w-full h-auto"
                />
              </div>
              
              {/* ROI highlight */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-xl border border-green-100">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Average ROI</p>
                    <p className="text-2xl font-bold text-green-600">+30%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamValue;