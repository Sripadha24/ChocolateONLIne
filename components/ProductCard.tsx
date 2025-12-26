
import React from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-darkChoco/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button className="bg-white p-3 rounded-full hover:bg-gold hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
            <Eye className="w-5 h-5" />
          </button>
          <button className="bg-white p-3 rounded-full hover:bg-gold hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gold font-bold text-[10px] uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h3 className="text-lg font-serif font-bold text-darkChoco group-hover:text-cocoa transition-colors mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-darkChoco/60 line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-darkChoco">
            ${product.price.toFixed(2)}
          </span>
          <button className="text-sm font-bold text-cocoa hover:text-gold transition-colors flex items-center">
            Add to Cart +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
