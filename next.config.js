/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['getrelayos.com', 'wordpress', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  output: 'standalone',
  // Exclude legacy code from the build
  webpack: (config, { isServer }) => {
    // Exclude legacy-vite-version directory from the build
    if (config.watchOptions) {
      config.watchOptions.ignored = config.watchOptions.ignored || [];
      if (Array.isArray(config.watchOptions.ignored)) {
        config.watchOptions.ignored.push('**/legacy-vite-version/**');
      }
    } else {
      config.watchOptions = {
        ignored: ['**/legacy-vite-version/**'],
      };
    }
    return config;
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL || 'http://localhost:8080/wp-json/wp/v2',
    WORDPRESS_GRAPHQL_URL: process.env.WORDPRESS_GRAPHQL_URL || 'http://localhost:8080/graphql',
    SITE_URL: process.env.SITE_URL || 'https://getrelayos.com',
  },
  // Enable CORS for API routes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
