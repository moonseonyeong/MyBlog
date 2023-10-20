import { getPosts } from '@/api/post/getPosts';
import Posts from '@/components/blocks/Posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `'Posts'`,
  description: 'Posts',
};

export default async function PostsPage() {
  const posts = await getPosts();

  return <Posts />;
}
