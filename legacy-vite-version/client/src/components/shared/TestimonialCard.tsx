import { QuoteLeftIcon } from '@/lib/icons';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <div className="text-primary-500 text-3xl mb-4">
        <QuoteLeftIcon />
      </div>
      <blockquote className="text-slate-700 mb-6">
        {quote}
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden flex items-center justify-center text-slate-600">
          {/* Display initial of the person's name */}
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-medium text-slate-800">{name}</div>
          <div className="text-slate-500 text-sm">{title}, {company}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
