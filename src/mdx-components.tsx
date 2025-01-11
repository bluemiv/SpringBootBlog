import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 className="font-semibold text-lg">{children}</h2>,
    h3: ({ children }) => <h3 className="font-semibold">{children}</h3>,
    p: ({ children }) => <p className="leading-8">{children}</p>,
    img: (props) => (
      <Image width={768} height={300} {...(props as ImageProps)} className="w-full h-auto" />
    ),
    ...components,
  };
}
