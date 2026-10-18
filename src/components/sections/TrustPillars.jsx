import React from 'react';
import { BadgeIndianRupee, ShieldCheck, CalendarCheck, Star, Users, ThumbsUp } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const pillars = [
  {
    icon: BadgeIndianRupee,
    title: 'Transparent Pricing',
    description: 'See exact pricing before you book. Zero hidden charges, zero surprise spikes — what you see is what you pay.',
    stat: '0 Hidden Fees',
    color: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    statColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Professionals',
    description: 'Every professional is background-checked, ID-verified & skill-tested before they step into your home.',
    stat: '100% Background Checked',
    color: 'from-teal-50 to-emerald-50',
    border: 'border-teal-200',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    statColor: 'text-teal-600 bg-teal-50 border-teal-200',
  },
  {
    icon: CalendarCheck,
    title: 'Hassle-free Booking',
    description: 'Book in under 60 seconds. Pick your time slot, schedule recurring jobs & pay instantly — all in one tap.',
    stat: 'Book in 60 Seconds',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    statColor: 'text-blue-600 bg-blue-50 border-blue-200',
  },
];

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: Star, value: '4.9★', label: 'Average Rating' },
  { icon: ThumbsUp, value: '98%', label: 'Satisfaction Rate' },
];

export const TrustPillars = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-100">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
            Why Norozz care?
          </h2>
          <p className="text-base text-slate-muted mt-3">
            We don't just provide services — we deliver trust, quality & peace of mind every single time.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-3 shadow-sm">
              <Icon className="w-5 h-5 text-primary" />
              <div>
                <div className="text-lg font-extrabold text-navy leading-none">{value}</div>
                <div className="text-xs text-slate-muted">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, description, stat, color, border, iconBg, iconColor, statColor }, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-b ${color} border ${border} rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left overflow-hidden`}
            >
              {/* Step Number */}
              <span className="absolute top-5 right-6 text-6xl font-black text-black/5 select-none leading-none">
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-6 shadow-sm`}>
                <Icon className={`w-7 h-7 ${iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-navy mb-3 font-heading">{title}</h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{description}</p>

              {/* Stat Pill */}
              <span className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full border ${statColor}`}>
                ✓ {stat}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
