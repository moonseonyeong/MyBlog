import { getPosts } from '@/api/post/getPosts';
import { MetadataRoute } from 'next';

export const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

interface BlogData {
  id: number;
  title: string;
  date: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const _posts = await getPosts();
  console.log(BASE_URL);

  const _postsUrl = _posts.map((post: BlogData) => ({
    url: `${BASE_URL}/post/${post.id}`,
    lastModified: post.date,
  }));

  return _postsUrl;
}
