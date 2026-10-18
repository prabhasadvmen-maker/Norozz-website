import React from 'react';
import { SeoHead } from '@/components/common/SeoHead';
import { Container } from '@/components/layout/Container';
import { analytics } from '@/core/services/AnalyticsService';
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    image: '/Nany_care.png',
    title: 'Nanycare',
    description: 'Safe, loving & professional childcare at your doorstep — so you can focus on what matters most.',
    tag: 'Most Trusted',
    tagColor: 'bg-pink-500',
    gradient: 'from-pink-100 via-pink-50 to-white',
    border: 'border-pink-200',
    glow: 'hover:shadow-pink-200',
    btn: 'bg-pink-500 hover:bg-pink-600',
  },
  {
    id: 2,
    image: '/Personal_care.png',
    title: 'Personal Care',
    description: 'Expert grooming, wellness & daily assistance — premium personal care delivered right at home.',
    tag: 'Top Rated',
    tagColor: 'bg-teal-500',
    gradient: 'from-teal-100 via-teal-50 to-white',
    border: 'border-teal-200',
    glow: 'hover:shadow-teal-200',
    btn: 'bg-teal-500 hover:bg-teal-600',
  },
  {
    id: 3,
    image: '/Driver care.png',
    title: 'Driver Care',
    description: 'Verified, experienced drivers on demand — safe rides & dedicated chauffeur service anytime.',
    tag: 'Verified Pro',
    tagColor: 'bg-blue-500',
    gradient: 'from-blue-100 via-blue-50 to-white',
    border: 'border-blue-200',
    glow: 'hover:shadow-blue-200',
    btn: 'bg-blue-500 hover:bg-blue-600',
  },
];

export const Services = () => {
  useEffect(() => {
    analytics.pageView('/services', 'Browse All Services — NOROZZ');
  }, []);

  return (
    <div className="min-h-screen bg-surface-soft/40 py-10 md:py-14">
      <SeoHead
        title="Browse All Services — NOROZZ"
        description="Transparent pricing. Trusted professionals. Hassle-free booking."
      />

      <Container>
        {/* Page Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            All Services
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
            Browse All Services
          </h1>
          <p className="text-base text-slate-muted mt-3 max-w-xl mx-auto">
            Transparent pricing. Trusted professionals. Hassle-free booking.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, image, title, description, tag, tagColor, gradient, border, glow, btn }) => (
            <div
              key={id}
              className={`group relative flex flex-col items-center text-center rounded-3xl border ${border} bg-gradient-to-b ${gradient} pt-10 pb-8 px-6 shadow-lg hover:shadow-2xl ${glow} hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
            >
              {/* Tag */}
              <span className={`absolute top-4 right-4 ${tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow`}>
                {tag}
              </span>

              {/* Image */}
              <div className="w-56 h-56 mb-6 flex items-center justify-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-extrabold text-navy font-heading mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{description}</p>

              <button className={`inline-flex items-center gap-2 px-6 py-2.5 ${btn} text-white text-sm font-bold rounded-full shadow-md group-hover:gap-3 transition-all duration-200`}>
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
