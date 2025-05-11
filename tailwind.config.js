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
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7dcafb',
          400: '#38adf7',
          500: '#1390e8',
          600: '#0871c7',
          700: '#0759a1',
          800: '#084b85',
          900: '#0c406e',
          950: '#082a4a',
        },
        secondary: {
          50: '#f1f2f4',
          100: '#e2e5e9',
          200: '#caced8',
          300: '#a9b1c1',
          400: '#8490a6',
          500: '#67758d',
          600: '#515d73',
          700: '#434c5d',
          800: '#3a424f',
          900: '#343a45',
          950: '#21242b',
        },
        accent: {
          50: '#f3f9ec',
          100: '#e4f1d5',
          200: '#cce7b0',
          300: '#b0d781',
          400: '#9bca5c',
          500: '#7db33c',
          600: '#62902a',
          700: '#4b6f23',
          800: '#3c5921',
          900: '#324a20',
          950: '#19290e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
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
          },
        },
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft-sm': '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        'soft-md': '0 3px 8px 0 rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 5px 15px 0 rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}