import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Trophy,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Smartphone,
  Apple,
  Play
} from 'lucide-react';

interface HomeProps {
  openModal: () => void;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      {/* Hero Section - Clean, confident, aspirational */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953] text-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B88A]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#008C8D]/20 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-[#00B88A] rounded-full animate-pulse" />
              Now in Beta on TestFlight
            </div>

            {/* Main headline - outcome focused */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Run your sports team
              <br />
              <span className="bg-gradient-to-r from-[#00B88A] via-[#00D4A0] to-[#008C8D] bg-clip-text text-transparent">
                like a pro
              </span>
            </h1>

            {/* Subheadline - specific value prop */}
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              The team management platform that replaces your spreadsheets, group chats, and paper forms.
              <span className="text-white font-normal"> One app for your entire organization.</span>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#17242C] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-white/20"
              >
                <Apple className="w-5 h-5 mr-2" />
                Join the Beta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products/teamops"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                See how it works
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B88A]" />
                <span>Free during beta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B88A]" />
                <span>iOS & Android</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00B88A]" />
                <span>HIPAA & GDPR compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Problem Statement - Emotional hook */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-[#00B88A] font-semibold mb-4">Sound familiar?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17242C] mb-8 leading-tight">
              Your roster's in Excel. Schedule's in Google Calendar.
              Medical forms are in a binder somewhere.
              And payments? <span className="text-gray-400">Don't ask.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Managing a youth sports team shouldn't require 6 different apps
              and a group chat that never stops buzzing.
            </p>
          </div>
        </div>
      </section>

      {/* Two Platforms Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">Our Platforms</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C] mb-4">
              Software for every level of sport
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From youth rec leagues to professional franchises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* TeamOps Card - Primary */}
            <Link
              to="/products/teamops"
              className="group relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-[#00B88A] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B88A]/10 overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1.5 bg-[#00B88A]/10 text-[#00B88A] px-3 py-1 rounded-full text-xs font-semibold">
                  <span className="w-1.5 h-1.5 bg-[#00B88A] rounded-full animate-pulse" />
                  Beta Available
                </span>
              </div>

              <div className="w-16 h-16 bg-gradient-to-br from-[#00B88A] to-[#008C8D] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-8 h-8" />
              </div>

              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-2">
                For Youth & Amateur Teams
              </p>
              <h3 className="text-3xl font-bold text-[#17242C] mb-4">TeamOps</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Everything your team needs in one app. Scheduling, rosters, medical compliance, payments, and communication—built for managers, coaches, trainers, parents, and players.
              </p>

              <div className="flex items-center text-[#00B88A] font-semibold group-hover:gap-4 gap-2 transition-all duration-300">
                Learn more
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

            {/* ProInvest Ecosystem Card - Secondary */}
            <Link
              to="/products/proinvest-ecosystem"
              className="group relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-[#00B88A] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B88A]/10 overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                  In Development
                </span>
              </div>

              <div className="w-16 h-16 bg-gradient-to-br from-[#00B88A] to-[#008C8D] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                <Trophy className="w-8 h-8" />
              </div>

              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-2">
                For Professional Organizations
              </p>
              <h3 className="text-3xl font-bold text-[#17242C] mb-4">ProInvest Ecosystem</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Enterprise fan engagement infrastructure. White-label mobile apps, real-time contests, lifetime loyalty programs, and first-party analytics for pro sports teams.
              </p>

              <div className="flex items-center text-[#00B88A] font-semibold group-hover:gap-4 gap-2 transition-all duration-300">
                Learn more
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TeamOps Feature Highlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">TeamOps</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17242C] mb-6">
                Finally, one app that does it all
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stop juggling tools. Start running your team.
              </p>
            </div>

            {/* Feature grid - Bento style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Clock className="w-6 h-6" />}
                title="Scheduling that syncs"
                description="Games, practices, and events. Everyone sees the same schedule. RSVP with one tap."
              />
              <FeatureCard
                icon={<Users className="w-6 h-6" />}
                title="Roster management"
                description="Player profiles, positions, jersey numbers. Invite parents with a link."
              />
              <FeatureCard
                icon={<Shield className="w-6 h-6" />}
                title="Medical compliance"
                description="HIPAA-compliant injury reports. CRT5 concussion protocols. Return-to-play tracking. Hockey Canada forms built-in."
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Instant attendance"
                description="No more 'who's coming?' group texts. Real-time headcounts for every event."
              />
              <FeatureCard
                icon={<Smartphone className="w-6 h-6" />}
                title="Works offline"
                description="At an arena with no signal? Injury reports sync when you're back online."
              />
              <FeatureCard
                icon={<CheckCircle className="w-6 h-6" />}
                title="Payment tracking"
                description="See who's paid, who hasn't, and how much is outstanding. No spreadsheets."
              />
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <Link
                to="/products/teamops"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#17242C] text-white font-semibold rounded-xl hover:bg-[#0f1a22] transition-all duration-300"
              >
                See all features
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Accelerators */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">Backed By</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C]">
                Canada's top accelerators believe in what we're building
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* NextAI */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="h-12 mb-6 flex items-center">
                  <img src="/next-ai-logo.png" alt="NextAI" className="h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-[#17242C] mb-2">NextAI Cohort 8</h3>
                <p className="text-gray-600 mb-4">
                  Canada's premier AI accelerator. We completed the program and presented at Demo Day September 2025.
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#00B88A]/10 text-[#00B88A] rounded-full text-sm font-semibold">
                    Completed
                  </span>
                </div>
              </div>

              {/* ZeroLabs */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="h-12 mb-6 flex items-center">
                  <img src="/Zero_Labs_Logo.png" alt="ZeroLabs" className="h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-[#17242C] mb-2">ZeroLabs Cohort 6</h3>
                <p className="text-gray-600 mb-4">
                  Innovation Launch Pad focused on commercialization and market entry. Currently in program.
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-sm font-semibold">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#00B88A] uppercase tracking-wider mb-4">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#17242C] mb-6">
              Built by coaches. For coaches.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We've spent years managing youth hockey teams—chasing RSVPs, tracking injuries on paper,
              and building lineup spreadsheets at midnight. We built TeamOps because we needed it ourselves.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-[#00B88A] font-semibold hover:gap-4 gap-2 transition-all duration-300 text-lg"
            >
              Meet the team
              <ArrowRight className="w-5 h-5" />
            </Link>
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
              Ready to simplify your season?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
              Join teams already using TeamOps to run smoother seasons. Free during beta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#00B88A] text-white font-semibold rounded-xl hover:bg-[#00a37d] transition-all duration-300"
              >
                Get early access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products/teamops"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 border border-transparent hover:border-gray-200">
    <div className="w-12 h-12 bg-[#00B88A]/10 rounded-xl flex items-center justify-center text-[#00B88A] mb-6 group-hover:bg-[#00B88A] group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#17242C] mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;
