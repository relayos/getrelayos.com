import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export function SEOHead({
  title,
  description,
  canonicalUrl = 'https://relayos.com',
  ogType = 'website',
  ogImage = 'https://relayos.com/og-image.jpg',
  twitterCard = 'summary_large_image'
}: SEOHeadProps) {
  const fullTitle = `${title} | RelayOS`;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="RelayOS" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional meta tags */}
      <meta name="theme-color" content="#3B82F6" />
      
      {/* External resources */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </Helmet>
  );
}

export default SEOHead;
