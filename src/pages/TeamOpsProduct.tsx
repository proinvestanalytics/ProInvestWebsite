import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  Shield,
  CreditCard,
  Smartphone,
  Activity,
  ClipboardList,
  UserCheck,
  Apple,
  Wifi,
  FileText,
  Bell,
  AlertCircle
} from 'lucide-react';

const TeamOpsProduct: React.FC = () => {
  const { t } = useTranslation('teamops');
  const { t: tc } = useTranslation('common');

  const complianceStandards = ['HIPAA', 'GDPR', 'COPPA', 'SOC 2', 'NIST CSF', 'ISO 27017', 'ISO 27018', 'PIPEDA', 'CASL', 'OWASP Top 10', 'MASVS'];

  return (
    <>
      <SEO />
      {/* Hero */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953] text-white overflow-hidden flex items-center">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00B88A]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#008C8D]/20 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-[#00B88A] rounded-full animate-pulse" />
              {t('hero.badge')}
            </div>

            {/* Logo */}
            <div className="mb-6">
              <img
                src="/TeamOps_app_icon.png"
                alt="TeamOps"
                className="h-48 sm:h-56 lg:h-64 w-auto mx-auto rounded-3xl"
              />
            </div>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl text-gray-200 mb-4 font-light">
              {t('hero.tagline')}
            </p>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              {t('hero.subtitle')}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#17242C] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-white/20"
              >
                <Apple className="w-5 h-5 mr-2" />
                {tc('buttons.getEarlyAccess')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>{t('hero.trustSignals.iosAndroid')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B88A]" />
                <span>{t('hero.trustSignals.freeDuringBeta')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t('hero.trustSignals.builtForSecurity')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Combined */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">{t('problemSolution.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17242C] mb-6 leading-tight">
              {t('problemSolution.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('problemSolution.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProblemSolutionCard
              problem={t('problemSolution.cards.communication.problem')}
              problemDesc={t('problemSolution.cards.communication.problemDesc')}
              solution={t('problemSolution.cards.communication.solution')}
              solutionDesc={t('problemSolution.cards.communication.solutionDesc')}
              icon={<Bell className="w-6 h-6" />}
            />
            <ProblemSolutionCard
              problem={t('problemSolution.cards.scheduling.problem')}
              problemDesc={t('problemSolution.cards.scheduling.problemDesc')}
              solution={t('problemSolution.cards.scheduling.solution')}
              solutionDesc={t('problemSolution.cards.scheduling.solutionDesc')}
              icon={<Calendar className="w-6 h-6" />}
            />
            <ProblemSolutionCard
              problem={t('problemSolution.cards.singleSource.problem')}
              problemDesc={t('problemSolution.cards.singleSource.problemDesc')}
              solution={t('problemSolution.cards.singleSource.solution')}
              solutionDesc={t('problemSolution.cards.singleSource.solutionDesc')}
              icon={<Users className="w-6 h-6" />}
            />
            <ProblemSolutionCard
              problem={t('problemSolution.cards.manual.problem')}
              problemDesc={t('problemSolution.cards.manual.problemDesc')}
              solution={t('problemSolution.cards.manual.solution')}
              solutionDesc={t('problemSolution.cards.manual.solutionDesc')}
              icon={<Shield className="w-6 h-6" />}
            />
            <ProblemSolutionCard
              problem={t('problemSolution.cards.firefighting.problem')}
              problemDesc={t('problemSolution.cards.firefighting.problemDesc')}
              solution={t('problemSolution.cards.firefighting.solution')}
              solutionDesc={t('problemSolution.cards.firefighting.solutionDesc')}
              icon={<ClipboardList className="w-6 h-6" />}
            />
            <ProblemSolutionCard
              problem={t('problemSolution.cards.visibility.problem')}
              problemDesc={t('problemSolution.cards.visibility.problemDesc')}
              solution={t('problemSolution.cards.visibility.solution')}
              solutionDesc={t('problemSolution.cards.visibility.solutionDesc')}
              icon={<Activity className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Five Roles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">{t('roles.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C] mb-6">
              {t('roles.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('roles.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <RoleCard
              icon={<ClipboardList className="w-7 h-7" />}
              title={t('roles.manager.title')}
              subtitle={t('roles.manager.subtitle')}
              items={t('roles.manager.items', { returnObjects: true }) as string[]}
            />
            <RoleCard
              icon={<Users className="w-7 h-7" />}
              title={t('roles.coach.title')}
              subtitle={t('roles.coach.subtitle')}
              items={t('roles.coach.items', { returnObjects: true }) as string[]}
            />
            <RoleCard
              icon={<Activity className="w-7 h-7" />}
              title={t('roles.trainer.title')}
              subtitle={t('roles.trainer.subtitle')}
              items={t('roles.trainer.items', { returnObjects: true }) as string[]}
            />
            <RoleCard
              icon={<UserCheck className="w-7 h-7" />}
              title={t('roles.parent.title')}
              subtitle={t('roles.parent.subtitle')}
              items={t('roles.parent.items', { returnObjects: true }) as string[]}
            />
            <RoleCard
              icon={<Smartphone className="w-7 h-7" />}
              title={t('roles.player.title')}
              subtitle={t('roles.player.subtitle')}
              items={t('roles.player.items', { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      </section>

      {/* Safety First */}
      <section className="py-24 bg-[#17242C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">{t('safety.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('safety.title')}
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              {t('safety.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00B88A]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-[#00B88A]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('safety.cards.injuryReports.title')}</h3>
                <p className="text-gray-400 text-sm">{t('safety.cards.injuryReports.description')}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00B88A]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-[#00B88A]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('safety.cards.recovery.title')}</h3>
                <p className="text-gray-400 text-sm">{t('safety.cards.recovery.description')}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00B88A]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-6 h-6 text-[#00B88A]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('safety.cards.certification.title')}</h3>
                <p className="text-gray-400 text-sm">{t('safety.cards.certification.description')}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00B88A]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-[#00B88A]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('safety.cards.auditTrail.title')}</h3>
                <p className="text-gray-400 text-sm">{t('safety.cards.auditTrail.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Trust + Multi-Sport */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">{t('trust.eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C] mb-4">
                {t('trust.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('trust.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
              <TechCard
                icon={<Smartphone className="w-8 h-8" />}
                title={t('trust.nativeMobile.title')}
                description={t('trust.nativeMobile.description')}
              />
              <TechCard
                icon={<Shield className="w-8 h-8" />}
                title={t('trust.secureByDefault.title')}
                description={t('trust.secureByDefault.description')}
              />
            </div>

            {/* Compliance badges */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4 text-center">{t('trust.complianceTitle')}</p>
              <div className="flex justify-center gap-3 overflow-x-auto">
                {complianceStandards.map((standard) => (
                  <span key={standard} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 whitespace-nowrap flex-shrink-0">{standard}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Program */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">{t('beta.eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C] mb-6">
                {t('beta.title')}
              </h2>
              <p className="text-xl text-gray-600 mx-auto whitespace-nowrap">
                {t('beta.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-[#00B88A]/10 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-5 h-5 text-[#00B88A]" />
                </div>
                <h3 className="font-semibold text-[#17242C] mb-2">{t('beta.cards.free.title')}</h3>
                <p className="text-sm text-gray-600">{t('beta.cards.free.description')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-[#00B88A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-5 h-5 text-[#00B88A]" />
                </div>
                <h3 className="font-semibold text-[#17242C] mb-2">{t('beta.cards.directInput.title')}</h3>
                <p className="text-sm text-gray-600">{t('beta.cards.directInput.description')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-[#00B88A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-[#00B88A]" />
                </div>
                <h3 className="font-semibold text-[#17242C] mb-2">{t('beta.cards.prioritySupport.title')}</h3>
                <p className="text-sm text-gray-600">{t('beta.cards.prioritySupport.description')}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-[#00B88A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-[#00B88A]" />
                </div>
                <h3 className="font-semibold text-[#17242C] mb-2">{t('beta.cards.earlyPricing.title')}</h3>
                <p className="text-sm text-gray-600">{t('beta.cards.earlyPricing.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#17242C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Apple className="w-4 h-4" />
              {t('finalCta.badge')}
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
              {t('finalCta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-10 py-5 bg-[#00B88A] text-white font-semibold rounded-xl hover:bg-[#00a37d] transition-all duration-300 text-lg"
              >
                {tc('buttons.requestBetaAccess')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              {t('finalCta.limitedSpots')}
            </p>

            {/* Multi-Sport */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">{t('multiSport.eyebrow')}</p>
              <p className="text-gray-400 mb-6">
                {t('multiSport.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <SportPill sport={t('multiSport.hockey')} available />
                <SportPill sport={t('multiSport.moreSports')} comingSoonText={t('multiSport.comingSoon')} />
              </div>

              {/* Legal Links */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                <Link
                  to="/teamops/privacy"
                  className="text-gray-500 hover:text-gray-300 underline transition-colors"
                >
                  {t('multiSport.privacyPolicy')}
                </Link>
                <span className="text-gray-600">|</span>
                <Link
                  to="/teamops/terms"
                  className="text-gray-500 hover:text-gray-300 underline transition-colors"
                >
                  {t('multiSport.termsOfService')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Problem + Solution Card
interface ProblemSolutionCardProps {
  problem: string;
  problemDesc: string;
  solution: string;
  solutionDesc: string;
  icon: React.ReactNode;
}

const ProblemSolutionCard: React.FC<ProblemSolutionCardProps> = ({ problem, problemDesc, solution, solutionDesc, icon }) => (
  <div className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00B88A] hover:shadow-lg transition-all duration-300">
    {/* Problem */}
    <div className="mb-6 pb-6 border-b border-gray-200">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#17242C] mb-1">{problem}</h3>
          <p className="text-gray-500 text-sm">{problemDesc}</p>
        </div>
      </div>
    </div>
    {/* Solution */}
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-[#00B88A]/10 rounded-lg flex items-center justify-center text-[#00B88A] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-[#17242C] mb-1">{solution}</h4>
        <p className="text-gray-600 text-sm">{solutionDesc}</p>
      </div>
    </div>
  </div>
);

// Role Card
interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  items: string[];
}

const RoleCard: React.FC<RoleCardProps> = ({ icon, title, subtitle, items }) => (
  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00B88A]/30 hover:shadow-lg transition-all duration-300">
    <div className="w-14 h-14 bg-gradient-to-br from-[#00B88A] to-[#008C8D] rounded-xl flex items-center justify-center text-white mb-5">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-[#17242C] mb-1">{title}</h3>
    {subtitle && <p className="text-sm text-[#00B88A] font-medium mb-4">{subtitle}</p>}
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-[#00B88A] mt-0.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// Sport Pill
const SportPill: React.FC<{ sport: string; available?: boolean; comingSoonText?: string }> = ({ sport, available, comingSoonText }) => (
  <div className={`px-6 py-3 rounded-full flex items-center gap-2 ${
    available
      ? 'bg-[#00B88A]/10 border border-[#00B88A]/30 text-[#00B88A]'
      : 'bg-gray-100 border border-gray-200 text-gray-500'
  }`}>
    {available && <CheckCircle className="w-4 h-4" />}
    <span className="font-semibold">{sport}</span>
    {!available && comingSoonText && <span className="text-sm ml-1">{comingSoonText}</span>}
  </div>
);

// Tech Card
interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#00B88A] mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#17242C] mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default TeamOpsProduct;
