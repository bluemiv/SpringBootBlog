import createMDX from '@next/mdx';
import moonLightTheme from './assets/moonLight-ii.json' assert { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
};

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: moonLightTheme,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [['remark-gfm']],
    rehypePlugins: [['rehype-pretty-code', prettyCodeOptions], ['rehype-slug']],
  },
});

export default withMDX(nextConfig);
