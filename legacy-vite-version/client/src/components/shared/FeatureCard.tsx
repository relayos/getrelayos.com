import { Icon } from '@/lib/icons';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition duration-300">
      <div className="text-primary-500 text-3xl mb-4">
        <Icon icon={icon} />
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
