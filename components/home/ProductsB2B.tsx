import Link from 'next/link';
import { b2bProducts } from '@/lib/data';
import ProductCard from '@/components/shared/ProductCard';

export function ProductsB2B() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Business Solutions</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive communication tools designed for businesses of all sizes,
            from startups to enterprise organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {b2bProducts.map((product, index) => (
            <ProductCard 
              key={index}
              product={product}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/products" 
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md shadow transition duration-300"
          >
            View All Business Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsB2B;
