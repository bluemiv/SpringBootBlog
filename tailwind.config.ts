import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        desktop: '16px',
        mobile: '14px',
      },
      colors: {
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          disabled: 'var(--text-disabled)',
          error: 'var(--text-error)',
          highlight: 'var(--text-highlight)',
        },
        background: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          accent: 'var(--bg-accent)',
          hover: 'var(--bg-hover)',
          error: 'var(--bg-error)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          active: 'var(--color-secondary-active)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
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
