import React from 'react';

const NextAISection = () => {
  return (
    <section className="py-8 md:py-12 bg-primary-baby-powder">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-primary-mint/10">
          {/* NextAI Logo */}
          <div className="w-full h-auto mx-auto mb-8 flex justify-center items-center">
            <img src="/next-ai-logo.png" alt="NextAI Logo" className="max-w-full h-auto object-contain" />
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary-gunmetal mb-6">NextAI Cohort 8</h3>
            
            <div className="space-y-6 text-lg text-primary-caribbean leading-relaxed mb-8">
              <p>
                We're halfway through NextAI's eighth cohort, Canada's premier AI accelerator program. After being accepted in February 2025 following intensive interviews, we've transformed from having just an idea to building a complete enterprise platform during the program.
              </p>
              
              <p>
                NextAI provided the framework and support needed to assemble our technical team and execute rapid development. With strategic guidance for AI development and NHL partnership strategy, we're on track for January 2026 pilot deployment.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-mint/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-gunmetal mb-2">Cohort 8</div>
                <div className="text-sm text-primary-caribbean">NextAI Program</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-gunmetal mb-2">Sept 2025</div>
                <div className="text-sm text-primary-caribbean">Demo Day</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-gunmetal mb-2">Halfway</div>
                <div className="text-sm text-primary-caribbean">Through Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextAISection; 