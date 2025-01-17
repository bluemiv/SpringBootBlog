import { getAllPosts } from '@/feature/posts/utils/posts';
import PostCard from '@/feature/posts/components/PostCard';

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[1100px] w-full flex flex-col md:flex-row mt-xl">
      <main className="max-w-[800px] w-full p-md flex flex-col gap-xl">
        {posts.map((post) => (
          <PostCard key={[post.category, post.slug].join('/')} post={post} />
        ))}
      </main>
      <aside className="max-w-[300px] w-full p-md">tags</aside>
    </div>
  );
}
