
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Story Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle subtitle="Our Journey" title="A Passion for The Perfect Bean" centered={false} />
            <div className="space-y-6 text-darkChoco/70 leading-relaxed text-lg">
              <p>
                Founded in 1994, Velvet & Bean began in a small boutique kitchen with a singular goal: to create chocolates that tell a story. What started as a local obsession has grown into a world-renowned name in luxury confectionery.
              </p>
              <p>
                Our founder, Jean-Pierre Beaumont, believed that true excellence lies in the details. From the specific temperature of the tempering room to the humidity of the storage, every variable is meticulously controlled.
              </p>
              <p className="font-serif italic text-darkChoco">
                "We don't just sell sweets; we provide an escape from the ordinary."
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558961363-fa4f23232805?q=80&w=1000&auto=format&fit=crop"
                alt="Chocolatier at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
              <span className="text-darkChoco text-5xl font-serif font-bold block">30+</span>
              <span className="text-darkChoco/70 text-sm font-bold uppercase tracking-wider">Years of Mastery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Philosophy" title="Our Core Principles" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                 <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-darkChoco">Sustainability</h3>
              <p className="text-darkChoco/60">We work directly with farming cooperatives to ensure fair wages and ethical environmental practices.</p>
            </div>
            <div className="text-center">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                 <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-darkChoco">Precision</h3>
              <p className="text-darkChoco/60">Balance is everything. We test our ganaches repeatedly to achieve the perfect ratio of fats and solids.</p>
            </div>
            <div className="text-center">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                 <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-darkChoco">Artistry</h3>
              <p className="text-darkChoco/60">Every truffle is a canvas. Our artists hand-paint and decorate each piece using natural extracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Visuals */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600" className="rounded-xl aspect-square object-cover" />
          <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600" className="rounded-xl aspect-square object-cover mt-8" />
          <img src="https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600" className="rounded-xl aspect-square object-cover" />
          <img src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600" className="rounded-xl aspect-square object-cover mt-8" />
        </div>
      </section>
    </div>
  );
};

export default About;
