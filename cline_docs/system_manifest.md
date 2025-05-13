# System: RelayOS Website

## Purpose
A Next.js website for RelayOS, showcasing products, solutions, and company information with a modern, responsive design.

## Architecture
[pages] <-> [components] <-> [lib] <-> [styles]
  |            |              |         |
  |            |              |         +-- [globals.css]
  |            |              +-- [data.ts]
  |            |              +-- [icons.tsx]
  |            |              +-- [utils.ts]
  |            |              +-- [wordpress-api.ts]
  |            +-- [home]
  |            +-- [layout]
  |            +-- [seo]
  |            +-- [shared]
  +-- [index.tsx]
  +-- [products.tsx]
  +-- [solutions.tsx]
  +-- [company.tsx]
  +-- [contact.tsx]

## Module Registry
- [pages (`pages/`)]: Next.js page components
- [components/home]: Home page components
- [components/layout]: Layout components (Header, Footer)
- [components/seo]: SEO components
- [components/shared]: Shared UI components
- [lib]: Utility functions, data, and API integrations
- [styles]: Global styles and Tailwind configuration
- [wordpress]: WordPress theme for headless CMS integration

## Development Workflow
1. Update documentation
2. Create task instructions
3. Implement features
4. Test and validate
5. Document changes

## Version: 0.1 | Status: Development
