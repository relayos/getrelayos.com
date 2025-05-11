import Link from 'next/link';
import { features } from '@/lib/data';
import { ArrowRightIcon } from '@/lib/icons';
import FeatureCard from '@/components/shared/FeatureCard';

export function Features() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Enterprise-Grade Communication Infrastructure</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Built on IRCv3 with modern extensions, RelayOS delivers secure, 
            scalable real-time messaging for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/features" className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium gap-1 hover:text-primary-700 dark:hover:text-primary-300 transition">
            Explore all features <ArrowRightIcon className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Features;
