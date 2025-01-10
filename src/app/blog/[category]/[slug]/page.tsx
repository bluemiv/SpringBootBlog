import { getAllPosts } from '@/feature/blog/utils/posts';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { category, slug } = params;
  const { default: Post } = await import(`@/posts/${category}/${slug}.mdx`);
  return <Post />;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(({ category, slug }) => ({
    category,
    slug,
  }));
}

export const dynamicParams = false;
