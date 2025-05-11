/* 
  This file contains all the data for the RelayOS website.
  We centralize data here to make it easier to maintain and update.
*/

// Types for the data structures
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  link: string;
  type: 'b2b' | 'b2c';
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

// Main features shown on the homepage
export const features: Feature[] = [
  {
    icon: "fa-shield-alt",
    title: "Enterprise Security",
    description: "End-to-end encryption, compliance controls, and auditing capabilities keep your communications secure and compliant."
  },
  {
    icon: "fa-tachometer-alt",
    title: "Unmatched Scalability",
    description: "Handle millions of concurrent connections with low latency. Our infrastructure scales effortlessly with your needs."
  },
  {
    icon: "fa-puzzle-piece",
    title: "Flexible Integration",
    description: "Comprehensive APIs and SDKs for easy integration with your existing systems, websites, and applications."
  },
  {
    icon: "fa-robot",
    title: "AI-Ready Platform",
    description: "Built with AI integration in mind. Add intelligent agents, assistants, and automation to your communication workflows."
  },
  {
    icon: "fa-history",
    title: "Message Persistence",
    description: "Never lose important communications with full searchable history, offline access, and synchronized multi-device support."
  },
  {
    icon: "fa-user-check",
    title: "Verification Systems",
    description: "Advanced authentication and proof-of-humanity verification ensures secure and legitimate user interactions."
  }
];

// Products for B2B offerings
export const b2bProducts: Product[] = [
  {
    name: "RelayOS Embed™",
    tagline: "Embeddable Business Chat",
    description: "Add customizable, real-time chat to your website, app, or product in minutes with our easy-to-integrate widget.",
    image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      "No-code installation option",
      "Full customization to match your brand",
      "Visitor insights and analytics"
    ],
    link: "/products/embed",
    type: 'b2b'
  },
  {
    name: "RelayOS Connect™",
    tagline: "Managed Communication Infrastructure",
    description: "Fully managed, dedicated communication infrastructure built on advanced IRCv3 technology with enterprise features.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      "Dedicated server instances",
      "99.99% uptime SLA",
      "Enterprise-grade security & compliance"
    ],
    link: "/products/connect",
    type: 'b2b'
  },
  {
    name: "RelayOS Integrate™",
    tagline: "Developer Platform & APIs",
    description: "Comprehensive suite of APIs and SDKs for custom integration of RelayOS capabilities into your applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      "RESTful and WebSocket APIs",
      "Libraries for major programming languages",
      "Comprehensive documentation"
    ],
    link: "/products/integrate",
    type: 'b2b'
  }
];

// Products for B2C offerings
export const b2cProducts: Product[] = [
  {
    name: "RelayOS Persist™",
    tagline: "Advanced IRC Client Suite",
    description: "Never miss a message again. Stay connected to your communities and conversations 24/7, even when you're offline.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    features: [
      "Always Connected",
      "Searchable History",
      "Multi-Device Sync",
      "Enhanced Notifications"
    ],
    link: "/products/persist",
    type: 'b2c'
  },
  {
    name: "RelayOS Communities™",
    tagline: "Next-Gen Community Platform",
    description: "Create and manage vibrant online communities with advanced moderation tools, customizable spaces, and seamless interaction.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    features: [
      "Advanced Moderation Tools",
      "Customizable Community Spaces",
      "Engagement Analytics",
      "IRCv3 Integration"
    ],
    link: "/products/communities",
    type: 'b2c'
  }
];

// All products combined
export const allProducts = [...b2bProducts, ...b2cProducts];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    quote: "RelayOS Connect™ has transformed how our engineering teams collaborate. The reliability and security features have been game-changing for our distributed workflow.",
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechSolutions Inc."
  },
  {
    quote: "The API integration was seamless. We were able to add RelayOS to our product in just a few hours, and our customers love the enhanced communication features.",
    name: "Michael Rodriguez",
    title: "Lead Developer",
    company: "AppWorks"
  },
  {
    quote: "Our community members are thrilled with the persistent connection features. Message history and multi-device sync have dramatically improved engagement.",
    name: "Jaime Chen",
    title: "Community Manager",
    company: "CreatorSpace"
  }
];

// Pricing plans
export const pricingPlans: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for startups and small businesses",
    features: [
      "Up to 10 users",
      "Basic chat functionality",
      "Standard support",
      "7-day message history",
      "Basic analytics"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Business",
    price: "$149",
    description: "Ideal for growing businesses",
    features: [
      "Up to 50 users",
      "Advanced chat features",
      "Priority support",
      "30-day message history",
      "Advanced analytics",
      "Custom integrations"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs",
    features: [
      "Unlimited users",
      "Dedicated infrastructure",
      "24/7 premium support",
      "Unlimited history",
      "Custom security features",
      "SLA guarantees",
      "Dedicated account manager"
    ],
    cta: "Contact Sales"
  }
];

// FAQ questions
export const faqs: FAQ[] = [
  {
    question: "What makes RelayOS different from other communication platforms?",
    answer: "RelayOS is built on advanced IRCv3 technology, offering enterprise-grade security, unmatched scalability, and flexible integration options. Our platform combines the reliability of established protocols with modern features like AI integration and verification systems."
  },
  {
    question: "Is RelayOS suitable for small businesses?",
    answer: "Absolutely! RelayOS scales to businesses of all sizes. Our Starter plan provides affordable access to essential features, while our Business and Enterprise plans offer additional capabilities as your needs grow."
  },
  {
    question: "Can I integrate RelayOS with my existing tools?",
    answer: "Yes, RelayOS is designed for seamless integration. Our comprehensive APIs and SDKs make it easy to connect with your existing systems, and our dedicated integration team can assist with custom requirements."
  },
  {
    question: "How secure is RelayOS for sensitive communications?",
    answer: "Security is a core pillar of RelayOS. We offer end-to-end encryption, compliance controls, advanced authentication, and comprehensive audit capabilities to ensure your communications are secure and compliant with industry standards."
  },
  {
    question: "What kind of support does RelayOS provide?",
    answer: "We offer tiered support based on your plan. All customers receive standard support, while Business and Enterprise customers get priority and 24/7 premium support respectively. Enterprise customers also benefit from a dedicated account manager."
  }
];

// Sample blog posts
export const blogPosts: BlogPost[] = [
  {
    id: "scaling-realtime-communication",
    title: "Scaling Real-Time Communication for Enterprise",
    excerpt: "Learn how RelayOS infrastructure handles millions of concurrent connections with minimal latency.",
    date: "2023-10-15",
    author: "Dr. Eliza Montgomery",
    category: "Technology"
  },
  {
    id: "ai-communication-future",
    title: "The Future of AI in Business Communication",
    excerpt: "Explore how AI is transforming business communication and how RelayOS is leading the way.",
    date: "2023-09-28",
    author: "James Wilson",
    category: "Industry Trends"
  },
  {
    id: "irc-modern-business",
    title: "Why IRCv3 is the Unsung Hero of Modern Business Communication",
    excerpt: "Discover how this battle-tested protocol provides the foundation for today's most reliable communication systems.",
    date: "2023-09-10",
    author: "Sarah Thompson",
    category: "Technology"
  },
  {
    id: "secure-communication-compliance",
    title: "Secure Communication in a Compliance-Heavy World",
    excerpt: "How businesses can maintain security while meeting regulatory requirements in their communications.",
    date: "2023-08-22",
    author: "Michael Chen",
    category: "Security"
  }
];
