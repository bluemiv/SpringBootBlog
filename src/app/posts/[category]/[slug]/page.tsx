import Link from 'next/link';
import dayjs from 'dayjs';
import { getAllPosts, getPost } from '@/feature/posts/utils/posts';
import { ROUTE_PATH } from '@/constants/route';
import Tag from '@/feature/posts/components/Tag';
import MDXComponent from '@/feature/posts/components/MDXComponent';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export default async function Page(props: Props) {
  const { category, slug } = await props.params;
  const post = getPost(category, slug);
  return (
    <main className="mx-auto max-w-[1100px] w-full flex flex-col-reverse md:flex-row mt-xl">
      <article className="max-w-[800px] w-full p-md">
        <div className="flex flex-col gap-lg mb-3xl">
          <div className="flex flex-col gap-sm">
            <Link
              href={[ROUTE_PATH.POSTS, post.category].join('/')}
              className="text-primary hover:text-primary-hover active:text-primary-active"
            >
              {post.category}
            </Link>
            <h1 className="font-bold text-4xl">{post.meta.title}</h1>
          </div>
          <div className="rounded-full flex gap-md items-center flex-wrap">
            {Array.from(new Set(post.meta.tags)).map((tag) => (
              <Tag key={tag}>{tag.toLowerCase()}</Tag>
            ))}
          </div>
          <div className="leading-8">
            <div className="font-semibold">{post.meta.author} · 윙크개발팀</div>
            <div className="text-sm text-secondary">
              {dayjs(post.meta.date).format('YYYY년 M월 D일')}
            </div>
          </div>
        </div>
        <div id="main-content">
          <MDXComponent content={post.content} />
        </div>
      </article>
      <div className="w-full md:max-w-[300px] p-md">
        <div className="w-full h-auto md:sticky md:right-0 md:top-header">table of content</div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export const dynamicParams = false;
