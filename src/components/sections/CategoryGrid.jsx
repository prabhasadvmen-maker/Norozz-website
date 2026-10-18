import React from 'react';
import { Link } from 'react-router-dom';
import { analytics } from '@/core/services/AnalyticsService';
import { Container } from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';

const FEATURED_SERVICES = [
  {
    id: 1,
    slug: 'nanycare',
    name: 'Nanycare',
    image: '/Nany_care.png',
    description: 'Safe, loving & professional childcare at your doorstep — so you can focus on what matters.',
    tag: 'Most Trusted',
    tagColor: 'bg-pink-500',
    gradient: 'from-pink-100 via-pink-50 to-white',
    border: 'border-pink-200',
    glow: 'hover:shadow-pink-200',
    btn: 'bg-pink-500 hover:bg-pink-600',
  },
  {
    id: 2,
    slug: 'personal-care',
    name: 'Personal Care',
    image: '/Personal_care.png',
    description: 'Expert grooming, wellness & daily assistance — premium care delivered right at home.',
    tag: 'Top Rated',
    tagColor: 'bg-teal-500',
    gradient: 'from-teal-100 via-teal-50 to-white',
    border: 'border-teal-200',
    glow: 'hover:shadow-teal-200',
    btn: 'bg-teal-500 hover:bg-teal-600',
  },
  {
    id: 3,
    slug: 'driver-care',
    name: 'Driver Care',
    image: '/Driver care.png',
    description: 'Verified, experienced drivers on demand — safe rides & dedicated chauffeur service.',
    tag: 'Verified Pro',
    tagColor: 'bg-blue-500',
    gradient: 'from-blue-100 via-blue-50 to-white',
    border: 'border-blue-200',
    glow: 'hover:shadow-blue-200',
    btn: 'bg-blue-500 hover:bg-blue-600',
  },
];

export const CategoryTile = ({ category, onClick }) => {
  const handleClick = () => {
    analytics.serviceCategoryView(category.slug, category.name);
    if (onClick) onClick(category);
  };
  return (
    <Link
      to={`/services?category=${category.slug}`}
      onClick={handleClick}
      className="group flex flex-col items-center justify-center p-6 bg-white hover:bg-slate-50/80 border border-slate-200/80 rounded-2xl transition-all duration-200 hover:shadow-card hover:border-teal-200 text-center"
    >
      <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors">
        {category.name}
      </span>
    </Link>
  );
};

export const CategoryGrid = ({
  categories = [],
  title = 'What do you need help with?',
  subtitle = 'Explore our range of home services tailored for your convenience.',
  onCategoryClick,
}) => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
            {title}
          </h2>
          <p className="text-base text-slate-muted mt-3 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map(({ id, slug, name, image, description, tag, tagColor, gradient, border, glow, btn }) => (
            <Link
              key={id}
              to={`/services?category=${slug}`}
              className={`group relative flex flex-col items-center text-center rounded-3xl border ${border} bg-gradient-to-b ${gradient} pt-10 pb-8 px-6 shadow-lg hover:shadow-2xl ${glow} hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
            >
              {/* Tag Badge */}
              <span className={`absolute top-4 right-4 ${tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow`}>
                {tag}
              </span>

              {/* Image */}
              <div className="w-56 h-56 mb-6 flex items-center justify-center">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-navy font-heading mb-2">{name}</h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{description}</p>

              {/* CTA Button */}
              <span className={`inline-flex items-center gap-2 px-6 py-2.5 ${btn} text-white text-sm font-bold rounded-full shadow-md group-hover:gap-3 transition-all duration-200`}>
                Book Now <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
