import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/feature/posts/types';
import { ROUTE_PATH } from '@/constants/route';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={[ROUTE_PATH.POSTS, post.category, post.slug].join('/')}
      className="h-auto md:h-[200px] group flex flex-col-reverse md:flex-row gap-lg cursor-pointer"
    >
      <div className="flex-1 flex flex-col gap-lg">
        <div className="flex flex-col gap-md">
          <div className="font-semibold text-xl group-hover:text-primary-hover transition-colors duration-150 ease-in-out">
            {post.meta.title}
          </div>
          <div className="text-text-secondary line-clamp-3 leading-8">{post.meta.description}</div>
        </div>
        <div className="text-text-secondary text-sm">
          {dayjs(post.meta.date).format('YYYY년 MM월 DD일')}
        </div>
      </div>
      <div className="md:max-w-[240px] max-h-[180px] w-full h-full rounded-xl overflow-hidden">
        {post.meta.image && (
          <Image
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-150 ease-in-out"
            width={240}
            height={180}
            src={post.meta.image}
            alt={post.meta.title}
          />
        )}
      </div>
    </Link>
  );
}
