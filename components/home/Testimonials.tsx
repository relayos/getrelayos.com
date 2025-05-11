import { testimonials } from '@/lib/data';
import TestimonialCard from '@/components/shared/TestimonialCard';

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Hear from the businesses and community leaders who rely on RelayOS
            for their mission-critical communication needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
