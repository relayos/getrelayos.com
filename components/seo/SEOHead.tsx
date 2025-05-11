import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = 'RelayOS - Enterprise-grade Communication Infrastructure',
  description = 'RelayOS provides enterprise-grade communication infrastructure for businesses and communities. Connect, embed, integrate, and persist your communications with our suite of products.',
  canonical = 'https://getrelayos.com',
  ogImage = '/images/og-image.jpg',
}: SEOHeadProps) {
  const siteTitle = title.includes('RelayOS') ? title : `${title} | RelayOS`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  );
}
