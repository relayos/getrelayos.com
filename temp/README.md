# RelayOS Marketing Website

This repository contains the marketing website for RelayOS, a communication platform that offers B2B and B2C solutions.

## Technology Stack

- Next.js 14 (with TypeScript)
- Tailwind CSS for styling
- Headless WordPress for content management
- Nginx for caching and load balancing

## Project Structure

- `pages/` - Next.js pages and routes
- `components/` - Reusable React components
- `lib/` - Utility functions and API clients
- `public/` - Static assets
- `styles/` - Global styles and Tailwind configuration
- `wordpress/` - WordPress configuration and custom API endpoints

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## WordPress Headless CMS Integration

This project uses WordPress as a headless CMS. The frontend is built with Next.js, which fetches content from the WordPress REST API. This provides the benefits of a modern frontend with the content management capabilities of WordPress.

## Legacy Version

The previous version of the site (built with Vite) is preserved in the `legacy-vite-version/` directory for reference.