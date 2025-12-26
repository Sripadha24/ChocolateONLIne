
import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-darkChoco leading-tight">
        {title}
      </h2>
      <div className={`mt-4 h-1.5 w-20 bg-gold rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;
