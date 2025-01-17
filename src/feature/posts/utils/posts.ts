import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import dayjs from 'dayjs';
import { PostMeta } from '@/feature/posts/types';

const postsDirectory = path.join(process.cwd(), 'src', '_posts');

export function getAllPosts() {
  const categories = fs.readdirSync(postsDirectory);
  return categories.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const slugs = fs.readdirSync(categoryPath);

    const posts = slugs.map((fileName) => {
      const fullPath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: meta, content } = matter(fileContents);
      const slug = fileName.replace(/\.mdx?$/, '');
      return {
        category,
        slug,
        content,
        meta: meta as PostMeta,
      };
    });

    return posts.sort((p, n) => dayjs(n.meta.date).unix() - dayjs(p.meta.date).unix());
  });
}

export function getPost(category: string, slug: string) {
  const fullPath = path.join(postsDirectory, category, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: meta, content } = matter(fileContents);
  return {
    category,
    slug,
    content,
    meta: meta as PostMeta,
  };
}
