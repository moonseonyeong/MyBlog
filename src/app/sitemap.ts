import { getPosts } from '@/api/post/getPosts';
import { MetadataRoute } from 'next';

export const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

interface BlogData {
  id: number;
  title: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const _posts = await getPosts();

  return _posts.map((post: BlogData) => ({
    url: `${BASE_URL}/posts/${post.id}`,
  }));
}
