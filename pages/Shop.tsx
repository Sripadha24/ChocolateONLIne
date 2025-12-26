
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Category } from '../types';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <SectionTitle subtitle="The Collection" title="Discover Your Flavor" />
          <p className="text-center text-darkChoco/60 max-w-2xl mx-auto -mt-8">
            Explore our artisanal range from intense dark bars to delicate seasonal truffles.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${
              activeCategory === 'All'
                ? 'bg-gold border-gold text-white shadow-lg shadow-gold/20'
                : 'bg-white border-white text-darkChoco hover:border-gold/30'
            }`}
          >
            All Collections
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${
                activeCategory === cat
                  ? 'bg-gold border-gold text-white shadow-lg shadow-gold/20'
                  : 'bg-white border-white text-darkChoco hover:border-gold/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-darkChoco/50 font-serif">No products found in this category yet.</p>
            </div>
          )}
        </div>

        {/* Help / Gifting Box */}
        <div className="mt-24 bg-darkChoco rounded-3xl p-10 md:p-16 text-center text-cream relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10">
             <h3 className="text-3xl font-serif font-bold mb-6">Need a Bespoke Selection?</h3>
             <p className="text-cream/70 mb-10 max-w-xl mx-auto">
               Planning an event or looking for a custom corporate gift? Our gifting concierge can help you curate the perfect box.
             </p>
             <button className="bg-gold text-darkChoco px-10 py-4 rounded-full font-bold hover:bg-gold/90 transition-all">
               Talk to an Expert
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
