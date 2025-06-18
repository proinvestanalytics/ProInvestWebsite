import React from 'react';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const DevelopmentStatus: React.FC = () => {
  const developmentItems = [
    {
      title: "One-Game Contest (OGC)",
      description: "Real-time skill-based gameplay with complete UI/UX, player management, scoring display, and team integration ready for deployment.",
      status: "complete",
      progress: 95,
      icon: "🎮",
      statusText: "COMPLETE"
    },
    {
      title: "Seventh Skater Loyalty",
      description: "Multi-generational loyalty system with progression tiers, family accounts, badge achievements, and premium subscription architecture.",
      status: "complete",
      progress: 85,
      icon: "🏆",
      statusText: "COMPLETE"
    },
    {
      title: "ProInsight Analytics Suite",
      description: "Integrated enterprise platform with real-time dashboards, fan analytics, and administrative controls. Advanced AI workflows for sponsor optimization and fan behavior prediction require co-development partnership.",
      status: "development",
      progress: 70,
      icon: "📊",
      statusText: "Core Platform Ready - AI Development Required"
    },
    {
      title: "WebView Integration",
      description: "Complete integration model demonstrated through ProInvest app. Both OGC and SSP function seamlessly within mobile applications.",
      status: "proven",
      progress: 100,
      icon: "📱",
      statusText: "PROVEN"
    },
    {
      title: "Hyperion AI System",
      description: "Computer vision and automated scoring system for real-time player performance evaluation. Co-development partnership required for full implementation.",
      status: "development",
      progress: 20,
      icon: "🤖",
      statusText: "IN DEVELOPMENT"
    },
    {
      title: "Production Infrastructure",
      description: "AWS migration, load balancing for 10,000+ concurrent users, monitoring systems, and enhanced security measures for enterprise deployment.",
      status: "planned",
      progress: 15,
      icon: "⚡",
      statusText: "PLANNED"
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'complete':
      case 'proven':
        return {
          border: 'border-l-4 border-[#00B88A]',
          badge: 'bg-[#00B88A]/10 text-[#00B88A]',
          progress: 'bg-gradient-to-r from-[#00B88A] to-[#008C8D]'
        };
      case 'development':
        return {
          border: 'border-l-4 border-orange-500',
          badge: 'bg-orange-500/10 text-orange-500',
          progress: 'bg-gradient-to-r from-orange-500 to-orange-600'
        };
      case 'planned':
        return {
          border: 'border-l-4 border-gray-500',
          badge: 'bg-gray-500/10 text-gray-500',
          progress: 'bg-gradient-to-r from-gray-500 to-gray-600'
        };
      default:
        return {
          border: 'border-l-4 border-gray-300',
          badge: 'bg-gray-300/10 text-gray-300',
          progress: 'bg-gray-300'
        };
    }
  };

  return (
    <section id="development" className="py-20 bg-[#FDFDF9]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#00B88A] to-[#008C8D] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Technical Development Status
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#17242C] mb-6">
            Platform Progress
          </h2>
          <p className="text-xl text-[#10605A] max-w-3xl mx-auto leading-relaxed">
            Complete enterprise platform with proven WebView integration. AI systems and workflows in active development with co-development partners for full production deployment.
          </p>
        </div>

        {/* Development Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {developmentItems.map((item, index) => {
            const styles = getStatusStyles(item.status);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 ${styles.border}`}
              >
                {/* Status Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 ${styles.badge}`}>
                  {item.status === 'complete' || item.status === 'proven' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : item.status === 'development' ? (
                    <AlertCircle className="w-4 h-4" />
                  ) : (
                    <Clock className="w-4 h-4" />
                  )}
                  {item.statusText}
                </div>

                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#17242C]">{item.title}</h3>
                </div>

                {/* Description */}
                <p className="text-[#10605A] mb-6 leading-relaxed">{item.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full ${styles.progress} transition-all duration-1000 ease-out`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>

                {/* Progress Text */}
                <p className="text-sm font-semibold text-[#00B88A]">
                  {item.status === 'complete' ? `${item.progress}% Complete - Pilot Ready` :
                   item.status === 'proven' ? 'Integration Model Proven' :
                   item.status === 'development' && item.title.includes('Hyperion') ? '4-5 Months Development Timeline' :
                   item.status === 'development' && item.title.includes('ProInsight Analytics Suite') ? 'Core Platform Ready - AI Development Required' :
                   item.status === 'development' ? '4-5 Months Development Timeline' :
                   '3-4 Months Parallel Development'}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStatus; 