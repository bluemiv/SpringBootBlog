import Image, { ImageProps } from 'next/image';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-bold text-5xl mb-10 text-text-accent">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="font-bold text-3xl mt-10 mb-7 text-text-accent">{children}</h2>
    ),
    // h3: ({ children }) => <h3 className="font-bold">{children}</h3>,
    // h4: ({ children }) => <h4 className="font-bold text-sm">{children}</h4>,
    strong: ({ children }) => <strong className="font-bold text-text-accent">{children}</strong>,
    p: ({ children }) => {
      if (typeof children === 'object') {
        const isImage = !!children?.props?.src && !children?.props?.children;
        if (isImage) {
          return <>{children}</>;
        }
      }
      return <p className="text-sm md:text-base lg:text-lg leading-8">{children}</p>;
    },
    img: (props) => (
      <figure>
        <Image width={768} height={300} {...(props as ImageProps)} className="w-full h-auto" />
        <figcaption>{props.alt}</figcaption>
      </figure>
    ),
    figure: ({ children }) => <figure>{children}</figure>,
    ...components,
  };
}
