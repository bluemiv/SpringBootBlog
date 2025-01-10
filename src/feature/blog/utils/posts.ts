import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getAllPosts() {
  const categories = fs.readdirSync(postsDirectory);
  return categories.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const slugs = fs.readdirSync(categoryPath);
    return slugs.map((slug) => ({
      category,
      slug: slug.replace(/\.mdx$/, ''),
    }));
  });
}

export function getPostBySlug(category: string, slug: string) {
  const fullPath = path.join(postsDirectory, category, `${slug}.mdx`);
  const content = fs.readFileSync(fullPath, 'utf8');
  return content;
}
