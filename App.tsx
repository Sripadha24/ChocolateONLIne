
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-2xl font-serif font-bold tracking-tighter text-darkChoco">VELVET & BEAN</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gold">Master Chocolatiers</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide hover:text-gold transition-colors ${
                  location.pathname === link.path ? 'text-gold' : 'text-darkChoco'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="relative group p-2 rounded-full hover:bg-gold/10 transition-colors">
              <ShoppingBag className="w-5 h-5 text-darkChoco" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-white text-[10px] flex items-center justify-center rounded-full border border-cream group-hover:scale-110 transition-transform">0</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
             <button className="relative p-2 rounded-full hover:bg-gold/10 transition-colors">
              <ShoppingBag className="w-5 h-5 text-darkChoco" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-darkChoco">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-cream shadow-xl transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 max-h-64' : 'opacity-0 max-h-0 overflow-hidden'
      }`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-serif font-semibold text-darkChoco hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkChoco text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-tighter text-gold">VELVET & BEAN</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-cream/70">Master Chocolatiers</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Crafting exquisite moments of joy since 1994. Our passion for chocolate is reflected in every handmade piece we create.
            </p>
            <div className="flex space-x-4 pt-2">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Our Chocolates</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">The Story</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Store Details</h4>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>123 Cocoa Lane, Sweets District, NY 10011</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>+1 (555) 987-CHOC</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>hello@velvetbean.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-cream/70 mb-4">Join our community for seasonal specials and tasting invites.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-cocoa/30 border border-cocoa/50 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-gold text-sm"
              />
              <button className="bg-gold hover:bg-gold/90 text-darkChoco font-bold px-4 py-2 rounded-r-lg text-sm transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/50">
          <p>© 2024 Velvet & Bean. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
            <a href="#" className="hover:text-gold">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
