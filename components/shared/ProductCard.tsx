import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';
import { CheckIcon } from '@/lib/icons';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl group">
      <div className="h-48 bg-primary-900 relative overflow-hidden">
        {/* Product image */}
        <img 
          src={product.image}
          alt={`${product.name} interface`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <p className="text-primary-100">{product.tagline}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {product.description}
        </p>
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="text-secondary-500 mt-1" />
              <span className="text-slate-700 dark:text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>
        <Link 
          href={product.link} 
          className="block text-center bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 font-medium py-2 px-4 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
