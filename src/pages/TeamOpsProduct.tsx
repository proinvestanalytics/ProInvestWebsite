import React from 'react';
import { Link } from 'react-router-dom';
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
  Bell
} from 'lucide-react';

const TeamOpsProduct: React.FC = () => {
  return (
    <>
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
              Now in Beta
            </div>

            {/* Logo/Name */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#00B88A] via-[#00D4A0] to-[#008C8D] bg-clip-text text-transparent">
                TeamOps
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl text-gray-200 mb-4 font-light">
              From Chaos to Control
            </p>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              One app for managers, coaches, trainers, parents, and players
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Replace your spreadsheets, group chats, paper forms, and payment trackers.
              Everything your team needs—schedules, rosters, injuries, payments, communication—finally in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#17242C] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-white/20"
              >
                <Apple className="w-5 h-5 mr-2" />
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>iOS & Android</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B88A]" />
                <span>Free during beta</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Built for security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4 text-center">The Problem</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17242C] text-center mb-6 leading-tight">
              Sound familiar?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Managing a team shouldn't feel like a second job. But somehow, it does.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProblemCard
                title="Endless Texts & Calls"
                description="Parents calling about ice time. Again."
              />
              <ProblemCard
                title="Scattered Information"
                description="Forms, rosters, contacts. All over the place."
              />
              <ProblemCard
                title="No Single Source of Truth"
                description="Which schedule is the real one?"
              />
              <ProblemCard
                title="Manual Everything"
                description="Tracking payments, suspensions, attendance. By hand."
              />
              <ProblemCard
                title="Season-Long Firefighting"
                description="Tryouts to playoffs. Chaos the whole way."
              />
              <ProblemCard
                title="Zero Visibility"
                description="What's the team status? Nobody knows."
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">The Solution</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17242C] mb-6">
              One app. Everything connected.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              TeamOps replaces 5+ scattered tools with one platform. Information flows automatically. Everyone sees exactly what they need.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <SolutionCard
              icon={<ClipboardList className="w-6 h-6" />}
              title="Full Season Control"
              description="Tryouts to playoffs. Every phase organized in one place."
            />
            <SolutionCard
              icon={<Bell className="w-6 h-6" />}
              title="Structured Communication"
              description="No more calls and texts. One channel. Clear process."
            />
            <SolutionCard
              icon={<Calendar className="w-6 h-6" />}
              title="Smart Scheduling"
              description="Practices, games, events. Everything connected and tracked."
            />
            <SolutionCard
              icon={<Users className="w-6 h-6" />}
              title="Role-Based Access"
              description="Managers, coaches, trainers, parents, players. Each sees what they need."
            />
            <SolutionCard
              icon={<Activity className="w-6 h-6" />}
              title="Player Safety"
              description="Protocols and tracking built in. Nothing falls through the cracks."
            />
            <SolutionCard
              icon={<Shield className="w-6 h-6" />}
              title="Complete Oversight"
              description="Payments, compliance, status. Full visibility at a glance."
            />
          </div>
        </div>
      </section>

      {/* Five Roles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">Five User Roles</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C] mb-6">
              Everyone sees exactly what they need
            </h2>
            <p className="text-xl text-gray-600">
              Not everyone needs access to everything. Each role gets a tailored experience with role-specific permissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <RoleCard
              icon={<ClipboardList className="w-7 h-7" />}
              title="Manager"
              subtitle="The Administrator"
              items={[
                'Full roster & invite control',
                'Budget & payment tracking',
                'Compliance dashboard'
              ]}
            />
            <RoleCard
              icon={<Users className="w-7 h-7" />}
              title="Coach"
              subtitle="The Strategist"
              items={[
                'Lineups & practice plans',
                'Live shift tracking',
                'Player availability view'
              ]}
            />
            <RoleCard
              icon={<Activity className="w-7 h-7" />}
              title="Trainer"
              subtitle="The Caregiver"
              items={[
                'Injury reports (works offline)',
                'Return-to-play tracking',
                'Medical clearance uploads'
              ]}
            />
            <RoleCard
              icon={<UserCheck className="w-7 h-7" />}
              title="Parent"
              subtitle="The Supporter"
              items={[
                'Child\'s medical profile',
                'Payment & injury status',
                'RSVP for events'
              ]}
            />
            <RoleCard
              icon={<Smartphone className="w-7 h-7" />}
              title="Player"
              subtitle="The Participant"
              items={[
                'Schedule & lineups',
                'Practice plans & drills',
                'Team chat & rules'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Safety First */}
      <section className="py-24 bg-[#17242C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">Safety & Compliance</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Player safety, handled properly
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              When injuries happen, you need clear protocols and proper documentation—not paper forms in a binder.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00B88A]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-[#00B88A]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Digital Injury Reports</h3>
                <p className="text-gray-400 text-sm">Create reports instantly from the bench. Works offline, syncs later.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00B88A]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-[#00B88A]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Structured Recovery</h3>
                <p className="text-gray-400 text-sm">Return-to-play protocols with clear stages. Track progress. Require clearances.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00B88A]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-6 h-6 text-[#00B88A]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Coach Certification</h3>
                <p className="text-gray-400 text-sm">Coaches complete safety training before full app access. No exceptions.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00B88A]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-[#00B88A]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Complete Audit Trail</h3>
                <p className="text-gray-400 text-sm">Every incident documented. Every clearance tracked. If it happened, it's recorded.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Support */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">Multi-Sport</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C] mb-6">
              Built for hockey. Expanding to more sports.
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Core features—scheduling, rosters, attendance, payments, communication—work for any team sport.
              Sport-specific compliance modules are added per sport.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <SportPill sport="Hockey" available />
              <SportPill sport="More sports" />
            </div>
          </div>
        </div>
      </section>

      {/* Works Everywhere */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">Built for Trust</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C] mb-4">
                Built for the real world
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Arenas with no signal. Sensitive medical data. Strict compliance requirements.
                TeamOps is built to handle it all.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
              <TechCard
                icon={<Smartphone className="w-8 h-8" />}
                title="Native mobile"
                description="iOS and Android apps. Fast, responsive, feels like it belongs on your phone."
              />
              <TechCard
                icon={<Shield className="w-8 h-8" />}
                title="Secure by default"
                description="Encryption everywhere. Role-based access. Your data stays protected."
              />
            </div>

            {/* Compliance badges */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4 text-center">Compliance & Standards</p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">HIPAA</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">GDPR</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">COPPA</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">SOC 2</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">NIST CSF</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">ISO 27017</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">ISO 27018</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">PIPEDA</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">CASL</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">OWASP Top 10</span>
                <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700">MASVS</span>
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
              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">Join the Beta</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C] mb-6">
                Be part of building something great
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're working with teams like yours to make TeamOps the best it can be.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-[#00B88A]/10 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-5 h-5 text-[#00B88A]" />
                </div>
                <h3 className="font-semibold text-[#17242C] mb-2">Free during beta</h3>
                <p className="text-sm text-gray-600">No credit card required. Use all features at no cost while we're in beta.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-[#00B88A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-5 h-5 text-[#00B88A]" />
                </div>
                <h3 className="font-semibold text-[#17242C] mb-2">Direct input</h3>
                <p className="text-sm text-gray-600">Your feedback shapes the product. Tell us what's working and what needs improvement.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-[#00B88A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-[#00B88A]" />
                </div>
                <h3 className="font-semibold text-[#17242C] mb-2">Priority support</h3>
                <p className="text-sm text-gray-600">Get direct access to our team. We're here to help you get the most out of TeamOps.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-[#00B88A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-[#00B88A]" />
                </div>
                <h3 className="font-semibold text-[#17242C] mb-2">Early-adopter pricing</h3>
                <p className="text-sm text-gray-600">Lock in special pricing when we launch. Beta testers get the best deal.</p>
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
              Available on TestFlight
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready for a better way?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Stop juggling spreadsheets, group chats, and paper forms. Get your team on TeamOps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-10 py-5 bg-[#00B88A] text-white font-semibold rounded-xl hover:bg-[#00a37d] transition-all duration-300 text-lg"
              >
                Request Beta Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Limited beta spots available. Get in before your season starts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

// Problem Card
const ProblemCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all duration-300">
    <h3 className="text-xl font-bold text-[#17242C] mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Solution Card
interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#00B88A] hover:shadow-xl hover:shadow-[#00B88A]/5 transition-all duration-500">
    <div className="w-12 h-12 bg-[#00B88A]/10 rounded-xl flex items-center justify-center text-[#00B88A] mb-6 group-hover:bg-[#00B88A] group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#17242C] mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
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
const SportPill: React.FC<{ sport: string; available?: boolean }> = ({ sport, available }) => (
  <div className={`px-6 py-3 rounded-full flex items-center gap-2 ${
    available
      ? 'bg-[#00B88A]/10 border border-[#00B88A]/30 text-[#00B88A]'
      : 'bg-gray-100 border border-gray-200 text-gray-500'
  }`}>
    {available && <CheckCircle className="w-4 h-4" />}
    <span className="font-semibold">{sport}</span>
    {!available && <span className="text-sm ml-1">Coming soon</span>}
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
