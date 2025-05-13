/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderColor: {
        border: 'hsl(var(--border))',
      },
      colors: {
        // RelayOS Brand Colors
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5', // Primary Blue
          700: '#4338ca', // Secondary Blue
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#f9fafb', // Light Gray
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Medium Gray
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937', // Dark Gray
          900: '#111827',
          950: '#030712',
        },
        accent: {
          green: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981', // Accent Green
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22',
          },
          orange: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b', // Accent Orange
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
          },
        },
        error: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'h1': '2.5rem',
        'h2': '2rem',
        'h3': '1.75rem',
        'h4': '1.5rem',
        'h5': '1.25rem',
        'h6': '1rem',
        'body-large': '1.125rem',
        'body': '1rem',
        'body-small': '0.875rem',
        'body-xs': '0.75rem',
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.5',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              fontSize: '2.5rem',
              lineHeight: 1.2,
              fontWeight: 700,
            },
            h2: {
              fontSize: '2rem',
              lineHeight: 1.2,
              fontWeight: 700,
            },
            h3: {
              fontSize: '1.75rem',
              lineHeight: 1.2,
              fontWeight: 700,
            },
            h4: {
              fontSize: '1.5rem',
              lineHeight: 1.2,
              fontWeight: 700,
            },
            h5: {
              fontSize: '1.25rem',
              lineHeight: 1.2,
              fontWeight: 700,
            },
            h6: {
              fontSize: '1rem',
              lineHeight: 1.2,
              fontWeight: 700,
            },
          },
        },
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft-sm': '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        'soft-md': '0 3px 8px 0 rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 5px 15px 0 rgba(0, 0, 0, 0.08)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
        'btn': '4px',
        'card': '8px',
        'input': '4px',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        'xxl': '3rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
