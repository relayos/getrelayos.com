import { ReactNode } from 'react';

interface IconProps {
  className?: string;
}

// This component allows us to use FontAwesome icons seamlessly within our React components
export const Icon = ({ 
  icon, 
  className = "" 
}: { 
  icon: string; 
  className?: string;
}): JSX.Element => {
  return <i className={`fas ${icon} ${className}`}></i>;
};

// Collection of specific icons used throughout the application
export const BroadcastIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-broadcast-tower" className={className} />
);

export const ChevronDownIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-chevron-down" className={className} />
);

export const ArrowRightIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-arrow-right" className={className} />
);

export const PlayCircleIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-play-circle" className={className} />
);

export const CheckIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-check" className={className} />
);

export const CheckCircleIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-check-circle" className={className} />
);

export const CommentsIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-comments" className={className} />
);

export const ServerIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-server" className={className} />
);

export const UsersIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-users" className={className} />
);

export const CodeIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-code" className={className} />
);

export const NetworkIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-network-wired" className={className} />
);

export const PlugIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-plug" className={className} />
);

export const HistoryIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-history" className={className} />
);

export const GlobeIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-globe" className={className} />
);

export const ShieldIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-shield-alt" className={className} />
);

export const TachometerIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-tachometer-alt" className={className} />
);

export const PuzzleIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-puzzle-piece" className={className} />
);

export const RobotIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-robot" className={className} />
);

export const UserCheckIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-user-check" className={className} />
);

export const BookIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-book" className={className} />
);

export const QuoteLeftIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-quote-left" className={className} />
);

export const BarsIcon = ({ className }: IconProps): JSX.Element => (
  <Icon icon="fa-bars" className={className} />
);

// Social media icons
export const TwitterIcon = ({ className }: IconProps): JSX.Element => (
  <i className={`fab fa-twitter ${className}`}></i>
);

export const LinkedInIcon = ({ className }: IconProps): JSX.Element => (
  <i className={`fab fa-linkedin ${className}`}></i>
);

export const GitHubIcon = ({ className }: IconProps): JSX.Element => (
  <i className={`fab fa-github ${className}`}></i>
);

export const DiscordIcon = ({ className }: IconProps): JSX.Element => (
  <i className={`fab fa-discord ${className}`}></i>
);
