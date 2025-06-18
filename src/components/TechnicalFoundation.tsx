import React from 'react';

const PlatformArchitecture: React.FC = () => {
  const architectureFeatures = [
    {
      icon: "🏗️",
      title: "Enterprise Platform",
      description: "Complete three-product ecosystem with professional UI/UX, real-time functionality, and team-specific customization capabilities ready for immediate deployment."
    },
    {
      icon: "🔧",
      title: "WebView Integration",
      description: "Proven integration model demonstrated through ProInvest app. Teams can experience exact deployment method eliminating technical risk and concerns."
    },
    {
      icon: "📡",
      title: "Real-time Systems",
      description: "Live game data integration, 2-second score updates, player swap tracking, and real-time leaderboards with enterprise-grade performance."
    },
    {
      icon: "🛡️",
      title: "Skill-Based Design",
      description: "Hockey knowledge and strategic decision-making platform with no gambling elements. Completely legal for team operation and fan engagement."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#00B88A] to-[#008C8D] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Enterprise Architecture
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical Foundation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade platform architecture built for NHL teams with proven WebView deployment and comprehensive fan engagement ecosystem
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {architectureFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-[#00B88A]/20 p-6 text-center hover:transform hover:scale-105 hover:border-[#00B88A]/40 transition-all duration-300"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#00B88A] mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformArchitecture; 