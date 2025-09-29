import React from 'react';

const AcceleratorProgramsSection = () => {
  return (
    <section className="py-8 md:py-12 bg-primary-baby-powder">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-gunmetal mb-10">Our Journey</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* NextAI Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-mint/10">
            {/* NextAI Logo */}
            <div className="w-full h-20 mx-auto mb-6 flex justify-center items-center">
              <img src="/next-ai-logo.png" alt="NextAI Logo" className="max-w-full max-h-full object-contain" />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-gunmetal mb-4">NextAI Cohort 8</h3>
              
              <div className="text-base text-primary-caribbean leading-relaxed mb-6">
                <p className="mb-4">
                  Completed NextAI's eighth cohort, Canada's premier AI accelerator program. Transformed from idea to complete enterprise platform with strategic guidance for AI development and partnership strategy.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary-mint/20">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-gunmetal mb-1">Cohort 8</div>
                  <div className="text-xs text-primary-caribbean">NextAI</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-gunmetal mb-1">Sept 2025</div>
                  <div className="text-xs text-primary-caribbean">Demo Day</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-gunmetal mb-1">Completed</div>
                  <div className="text-xs text-primary-caribbean">Status</div>
                </div>
              </div>
            </div>
          </div>

          {/* ZeroLabs Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-mint/10">
            {/* ZeroLabs Logo */}
            <div className="w-full h-20 mx-auto mb-6 flex justify-center items-center">
              <img src="/Zero_Labs_Logo.png" alt="ZeroLabs Logo" className="max-w-full max-h-full object-contain" />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-gunmetal mb-4">ZeroLabs Cohort 6</h3>
              
              <div className="text-base text-primary-caribbean leading-relaxed mb-6">
                <p className="mb-4">
                  Currently participating in ZeroLabs Innovation Launch Pad (starting October 2nd 2025). ZeroLabs provides commercialization guidance, compliance validation, and market entry strategy as we prepare for pilot deployment with professional sports organizations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary-mint/20">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-gunmetal mb-1">Cohort 6</div>
                  <div className="text-xs text-primary-caribbean">Launch Pad</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-gunmetal mb-1">Oct 2, 2025</div>
                  <div className="text-xs text-primary-caribbean">Start Date</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-gunmetal mb-1">In Progress</div>
                  <div className="text-xs text-primary-caribbean">Status</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorProgramsSection;