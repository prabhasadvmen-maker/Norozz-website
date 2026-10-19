import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/core/repositories/ExtendedRepositories';
import { Container } from '@/components/layout/Container';

const avatarColors = [
  { bg: 'bg-pink-100', text: 'text-pink-600', ring: 'ring-pink-200' },
  { bg: 'bg-teal-100', text: 'text-teal-600', ring: 'ring-teal-200' },
  { bg: 'bg-blue-100', text: 'text-blue-600', ring: 'ring-blue-200' },
];

export const TestimonialsCarousel = ({ items = testimonials }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
      <Container>

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
            Loved by homes across India
          </h2>
          <p className="text-base text-slate-muted mt-3 max-w-xl mx-auto">
            Real experiences from real customers — see why thousands trust Norozz care every day.
          </p>

          {/* Overall Rating Bar */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white border border-slate-200 rounded-2xl px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-black text-navy">4.9</span>
            <span className="text-sm text-slate-muted">from 5,000+ reviews</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const color = avatarColors[idx % avatarColors.length];
            return (
              <div
                key={item.id}
                className="relative bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between text-left overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-5 right-6 opacity-10">
                  <Quote className="w-14 h-14 text-primary fill-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-1">
                  "{item.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className={`w-11 h-11 rounded-full ${color.bg} ${color.text} font-extrabold text-base flex items-center justify-center shrink-0 ring-2 ${color.ring}`}>
                    {item.avatarInitial || item.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{item.name}</div>
                    <div className="text-xs text-slate-muted">{item.city || item.role}</div>
                  </div>
                  <span className="ml-auto text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    ✓ Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> 100% Verified Reviews</span>
          <span className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> No Fake Testimonials</span>
          <span className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Real Customers Only</span>
        </div>

      </Container>
    </section>
  );
};
