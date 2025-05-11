import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export default function SEOHead({
  title,
  description,
  canonicalUrl = 'https://getrelayos.com',
  ogType = 'website',
  ogImage = 'https://getrelayos.com/images/og-image.jpg',
  twitterCard = 'summary_large_image'
}: SEOHeadProps) {
  const fullTitle = `${title} | RelayOS`;
  
  return (
    <Head>
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
    </Head>
  );
}