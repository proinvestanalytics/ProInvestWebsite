import React from 'react';

const PlatformArchitecture: React.FC = () => {
  const architectureFeatures = [
    {
      icon: "🏗️",
      title: "Platform Infrastructure",
      description: "Complete three-product ecosystem with professional UI/UX, real-time capability, and team-level customization. "
    },
    {
      icon: "🔧",
      title: "Deployment Options",
      description: "Build complete standalone mobile apps or embed via WebView when existing infrastructure must be retained. OffPost demo proves both deployment paths."
    },
    {
      icon: "🛡️",
      title: "Data Governance",
      description: "Unified fan-ID foundation ensures first-party attribution. Encryption in transit/at rest with GDPR-aware practices. Skill-based, non-gambling design for family-friendly operation."
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
            Enterprise-grade platform for professional teams and leagues with flexible deployment and complete first-party data control.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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