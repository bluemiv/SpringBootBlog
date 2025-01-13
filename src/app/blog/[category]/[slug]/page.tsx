import { getAllPosts } from '@/feature/blog/utils/posts';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { category, slug } = params;
  const { default: Article } = await import(`@/_posts/${category}/${slug}.mdx`);
  return (
    <main className="mx-auto max-w-[1100px] w-full flex flex-col-reverse md:flex-row">
      <article className="max-w-[800px] w-full p-md">
        <Article />
      </article>
      <div className="w-full md:max-w-[300px] p-md">
        <div className="w-full h-auto md:sticky md:right-0 md:top-header">table of content</div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(({ category, slug }) => ({
    category,
    slug,
  }));
}

export const dynamicParams = false;
