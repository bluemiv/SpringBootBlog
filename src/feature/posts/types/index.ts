export type PostMeta = {
  title: string;
  description: string;
  date: string;
  lastModifiedAt?: string;
  tags: string[];
  draft?: false;
  image?: string;
};

export type Post = { category: string; slug: string; content: string; meta: PostMeta };
