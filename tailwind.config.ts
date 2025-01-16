import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      height: {
        header: '50px',
      },
      inset: {
        header: '50px',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
      },
      fontSize: {
        desktop: '16px',
        mobile: '14px',
      },
      colors: {
        text: {
          DEFAULT: 'var(--text-default)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          disabled: 'var(--text-disabled)',
        },
        bg: {
          DEFAULT: 'var(--bg-default)',
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          hover: 'var(--bg-hover)',
          active: 'var(--bg-active)',
          disabled: 'var(--bg-disabled)',
          overlay: 'var(--bg-overlay)',
        },
        primary: {
          DEFAULT: 'var(--primary-500)',
          hover: 'var(--primary-600)',
          active: 'var(--primary-700)',
          focus: 'var(--primary-400)',
          disabled: 'var(--primary-300)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-500)',
          hover: 'var(--secondary-600)',
          active: 'var(--secondary-700)',
          focus: 'var(--secondary-400)',
          disabled: 'var(--secondary-300)',
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
        },
      },
      keyframes: {
        'icon-fade-in': {
          from: { opacity: '0', transform: 'translate(45%, 40%) rotate(45deg)' },
          to: { opacity: '1', transform: 'rotate(0deg)' },
        },
        'icon-fade-out': {
          from: { opacity: '1', transform: 'rotate(0deg)' },
          to: { opacity: '0', transform: 'translate(-45%, 40%) rotate(-45deg)' },
        },
      },
      animation: {
        'icon-fade-in': 'icon-fade-in 0.15s ease-in-out',
        'icon-fade-out': 'icon-fade-out 0.15s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
