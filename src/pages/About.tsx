import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin } from 'lucide-react';

const About = () => {
  const { t } = useTranslation('about');

  const teamMembers = [
    {
      key: 'philippe',
      image: '/ptrop.png',
      linkedinUrl: 'https://www.linkedin.com/in/philippetrop/'
    },
    {
      key: 'blake',
      image: '/blake.png',
      linkedinUrl: 'https://www.linkedin.com/in/blake-nielsen-proinvest/'
    },
    {
      key: 'salvatore',
      image: '/sal.png',
      linkedinUrl: 'https://www.linkedin.com/in/salvatore-papia-72875b295/'
    },
    {
      key: 'martin',
      image: '/martin.png',
      linkedinUrl: 'https://www.linkedin.com/in/martin-villeneuve-65bb6444/'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/hockey-faceoff.png')] bg-cover bg-center opacity-10"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 184, 138, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(0, 184, 138, 0.05) 0%, transparent 50%)`
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00B88A]/20 border border-[#00B88A]/30 text-[#00B88A] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mb-6">
              🚀 {t('hero.badge')}
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('hero.title')} <span className="bg-gradient-to-r from-[#00B88A] to-[#008C8D] bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#F7F2F0] leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-8">{t('mission.title')}</h2>
            <div className="bg-gray-50 shadow-lg rounded-lg p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('mission.intro')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('mission.twoProducts')}
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg"><strong>{t('mission.teamops.name')}</strong> — {t('mission.teamops.description')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary font-bold mr-2 text-lg">•</span>
                  <span className="text-lg"><strong>{t('mission.proinvest.name')}</strong> — {t('mission.proinvest.description')}</span>
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('mission.together')}
              </p>
              <ul className="space-y-2 mb-6">
                {(t('mission.goals', { returnObjects: true }) as string[]).map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary font-bold mr-2 text-lg">•</span>
                    <span className="text-lg">{goal}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed font-semibold">
                {t('mission.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.key}
                name={t(`team.${member.key}.name`)}
                title={t(`team.${member.key}.title`)}
                image={member.image}
                description={t(`team.${member.key}.description`)}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Powered by NextAI Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center justify-center">
            <h3 className="text-3xl font-semibold text-gray-700 mr-6">{t('poweredBy')}</h3>
            <a
              href="https://www.nextcanada.com/next-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-auto transition-opacity duration-300 hover:opacity-80"
            >
              <img src="/next-ai-logo.png" alt="Next Canada Logo" className="w-full h-auto" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  description: string;
  linkedinUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, image, description, linkedinUrl }) => {
  return (
    <div className="group">
      <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:gap-8">
        <div className="mb-6 md:mb-0 relative">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl">
            <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 bg-white rounded-full shadow-lg hover:bg-secondary hover:text-white transition-colors duration-300 flex items-center justify-center"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="md:pt-4">
          <h3 className="text-2xl font-bold text-primary mb-2">{name}</h3>
          <p className="text-secondary font-semibold mb-4">{title}</p>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
