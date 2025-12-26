
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Hand, Gift, Heart, Star } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, FEATURES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-8 h-8 text-gold" />;
      case 'Hand': return <Hand className="w-8 h-8 text-gold" />;
      case 'Gift': return <Gift className="w-8 h-8 text-gold" />;
      case 'Heart': return <Heart className="w-8 h-8 text-gold" />;
      default: return null;
    }
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover scale-105"
            alt="Premium Chocolate Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkChoco/90 via-darkChoco/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-gold font-bold text-sm tracking-[0.4em] uppercase mb-4 block animate-fade-in">
              Crafting Excellence Since 1994
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream mb-6 leading-[1.1]">
              Handcrafted <br />
              <span className="text-gold italic">Chocolates</span> <br />
              Made with Love
            </h1>
            <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Experience the pinnacle of artisanal confectionery. We blend pure, single-origin cocoa with rare ingredients to create moments of pure bliss.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/shop"
                className="bg-gold hover:bg-gold/90 text-darkChoco px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Shop Collection <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/shop"
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-cream px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center"
              >
                Explore Gift Boxes
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-gold to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Experience" title="Why We're Different" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:rotate-6 transition-all duration-300">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-serif font-bold text-darkChoco mb-4">{feature.title}</h3>
                <p className="text-darkChoco/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle subtitle="Favorites" title="Our Best Sellers" centered={false} />
            <Link to="/shop" className="mb-12 md:mb-16 text-gold font-bold flex items-center hover:underline">
              View All Products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video / Visual Promo */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Artisan Process"
          />
          <div className="absolute inset-0 bg-darkChoco/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <SectionTitle subtitle="Our Passion" title="The Art of The Temper" />
          <p className="text-cream/90 text-lg mb-10 leading-relaxed italic font-serif">
            "Chocolate is not just a treat; it's a sensory journey. We spend weeks perfecting each recipe, adjusting percentages and temperatures to find that perfect snap and melt-in-your-mouth texture."
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
                <span className="text-gold font-serif text-3xl font-bold italic">Jean-Pierre Beaumont</span>
                <span className="text-cream/60 text-xs uppercase tracking-[0.2em] font-bold">Master Chocolatier</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Reviews" title="What Our Connoisseurs Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm relative pt-16">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                   <img src={t.avatar} className="w-16 h-16 rounded-full border-4 border-cream shadow-md" alt={t.name} />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-darkChoco/70 italic text-center leading-relaxed mb-6">"{t.content}"</p>
                <p className="text-center font-bold text-darkChoco">{t.name}</p>
                <p className="text-center text-[10px] uppercase tracking-widest text-gold mt-1">Verified Buyer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-darkChoco mb-6">Ready for a Taste of Luxury?</h2>
            <p className="text-darkChoco/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Browse our seasonal collections and find the perfect gift for yourself or your loved ones today.
            </p>
            <Link to="/shop" className="bg-darkChoco text-cream px-10 py-4 rounded-full font-bold hover:bg-darkChoco/90 transition-all transform hover:scale-105 shadow-xl">
              Shop Now
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
