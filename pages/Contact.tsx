
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <SectionTitle subtitle="Contact Us" title="We'd Love to Hear From You" />
          <p className="text-center text-darkChoco/60 max-w-2xl mx-auto -mt-8">
            Whether you have a question about our flavors, need help with an order, or just want to share your chocolate experience.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10">
              <h3 className="text-xl font-serif font-bold text-darkChoco mb-8">Store Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="bg-cream p-3 rounded-full text-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-darkChoco">Visit Our Boutique</h4>
                    <p className="text-sm text-darkChoco/60">123 Cocoa Lane, Sweets District, NY 10011</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="bg-cream p-3 rounded-full text-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-darkChoco">Call Us</h4>
                    <p className="text-sm text-darkChoco/60">+1 (555) 987-CHOC</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="bg-cream p-3 rounded-full text-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-darkChoco">Email Us</h4>
                    <p className="text-sm text-darkChoco/60">hello@velvetbean.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-darkChoco p-8 rounded-2xl shadow-sm text-cream">
              <h3 className="text-xl font-serif font-bold mb-6 text-gold">Boutique Hours</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-bold">9am - 8pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold">10am - 9pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">11am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-gold/10">
              <h3 className="text-2xl font-serif font-bold text-darkChoco mb-8">Send a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-darkChoco/50 ml-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-cream/50 border border-darkChoco/10 rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-darkChoco/50 ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-cream/50 border border-darkChoco/10 rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-darkChoco/50 ml-1">Subject</label>
                  <select className="w-full bg-cream/50 border border-darkChoco/10 rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Custom Gift Boxes</option>
                    <option>Wholesale/Corporate</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-darkChoco/50 ml-1">Your Message</label>
                  <textarea
                    rows={6}
                    className="w-full bg-cream/50 border border-darkChoco/10 rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your chocolate journey..."
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full md:w-auto bg-darkChoco hover:bg-darkChoco/90 text-cream px-12 py-4 rounded-full font-bold transition-all shadow-lg shadow-darkChoco/10">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
