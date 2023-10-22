import { getAllPost } from '@/utils/sitemap';
import { MetadataRoute } from 'next';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const _posts = await getAllPost();

  const _postsUrl = _posts.map((post) => ({
    url: `${BASE_URL}/post/${post.id}`,
    lastModified: post.date?.toString(),
  }));

  return _postsUrl;
}
