import React, { useEffect } from 'react';
import { Shield, TrendingUp, Calendar, Headphones, ArrowRight, Star, Users, IndianRupee, CheckCircle2 } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import { Container } from '@/components/layout/Container';
import { FaqAccordion } from '@/components/sections';
import { Button } from '@/components/ui';
import { analytics } from '@/core/services/AnalyticsService';
import { eventBus } from '@/core/services/EventBus';

export const ForPartners = () => {
  useEffect(() => {
    analytics.pageView('/for-partners', 'Partner With NOROZZ — Grow Your Service Business');
  }, []);

  const handlePartnerApply = () => {
    analytics.partnerSignupClick('for_partners_hero');
    window.open('https://play.google.com/store/apps/details?id=com.advmen.partnerApp', '_blank');
  };

  const stats = [
    { icon: Users, value: '25,000+', label: 'Active Partners' },
    { icon: IndianRupee, value: '₹65,000', label: 'Max Monthly Earning' },
    { icon: Star, value: '4.9★', label: 'Partner Satisfaction' },
  ];

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: 'Guaranteed Steady Earnings',
      description: 'Earn up to ₹40,000 - ₹65,000 monthly with transparent weekly bank payouts and top performance bonuses.',
      color: 'from-amber-50 to-orange-50',
      border: 'border-amber-200',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      stat: 'Up to ₹65K/month',
    },
    {
      icon: Calendar,
      title: 'Flexible Working Hours',
      description: 'You are your own boss. Turn on work mode whenever you want and accept slots near your area.',
      color: 'from-teal-50 to-emerald-50',
      border: 'border-teal-200',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      stat: 'Work on your terms',
    },
    {
      icon: Shield,
      title: 'Free Insurance & Safety Kit',
      description: 'Every partner receives an official branded kit, tools training, and accidental damage health coverage.',
      color: 'from-blue-50 to-indigo-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      stat: '100% Covered',
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Partner Desk',
      description: 'Get instant live support for navigation, job escalations, and customer slot adjustments.',
      color: 'from-purple-50 to-pink-50',
      border: 'border-purple-200',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      stat: 'Always Available',
    },
  ];

  const onboardingSteps = [
    { step: '01', title: 'Submit Documents', desc: 'Aadhaar, PAN, and address proof for fast police verification.', color: 'bg-amber-500' },
    { step: '02', title: 'Practical Skill Trial', desc: 'Complete our 1-day standard service skill check.', color: 'bg-teal-500' },
    { step: '03', title: 'Get NOROZZ Pro Kit', desc: 'Receive your uniform, digital app access, and toolkit.', color: 'bg-blue-500' },
    { step: '04', title: 'Start Taking Jobs', desc: 'Accept bookings in your city and get paid weekly.', color: 'bg-purple-500' },
  ];

  const perks = [
    'Zero commission on first 10 jobs',
    'Weekly direct bank payouts',
    'Free skill upgrade training',
    'Accidental damage insurance',
    'Official branded uniform & kit',
    'Dedicated partner support desk',
  ];

  return (
    <div className="min-h-screen bg-white">
      <SeoHead
        title="Partner With NOROZZ — Earn More With Zero Agency Commission"
        description="Join 25,000+ verified professionals on NOROZZ. Steady jobs, high monthly earnings, flexible schedules, and insurance coverage."
      />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
              Partner Acquisition Program
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight">
              Grow your business <br />
              <span className="text-primary">with Norozz care</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Connect directly with thousands of verified homeowners in your city. Get reliable daily bookings, instant bank payouts, and zero middlemen.
            </p>

            {/* Perks checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {perk}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={handlePartnerApply}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl hover:gap-3 transition-all duration-200"
              >
                Become a Norozz Partner <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 mt-14">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-3 backdrop-blur-sm">
                <Icon className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xl font-black text-white leading-none">{value}</div>
                  <div className="text-xs text-slate-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              Why Join Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
              Why 25,000+ Pros Choose Norozz
            </h2>
            <p className="text-base text-slate-muted mt-3">
              We provide the tech, customers, and training so you can focus on great craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map(({ icon: Icon, title, description, color, border, iconBg, iconColor, stat }, i) => (
              <div
                key={i}
                className={`relative bg-gradient-to-b ${color} border ${border} rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
              >
                <span className="absolute top-4 right-5 text-5xl font-black text-black/5 select-none leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-6 shadow-sm`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h3 className="text-lg font-extrabold text-navy mb-3 font-heading">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{description}</p>
                <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full border ${border} ${iconColor} bg-white`}>
                  ✓ {stat}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4-Step Onboarding */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="mb-14 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              Onboarding Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
              Get Started in 4 Simple Steps
            </h2>
            <p className="text-base text-slate-muted mt-3">Fast, simple, and completely free to join.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {onboardingSteps.map(({ step, title, desc, color }, i) => (
              <div key={step} className="relative bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 text-left overflow-hidden">
                {/* Connector line */}
                {i < onboardingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-slate-200 z-10" />
                )}
                <div className={`w-12 h-12 rounded-2xl ${color} text-white font-black text-lg flex items-center justify-center mb-6 shadow-md`}>
                  {step}
                </div>
                <h3 className="text-lg font-extrabold text-navy font-heading mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handlePartnerApply}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-full shadow-lg hover:gap-3 transition-all duration-200"
            >
              Apply Now — It's Free <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <SafeComponent name="PartnerFaq">
        <FaqAccordion title="Partner FAQs" />
      </SafeComponent>
    </div>
  );
};

export default ForPartners;
