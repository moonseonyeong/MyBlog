import { getPosts } from '@/api/post/getPosts';
import Posts from '@/components/blocks/Posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Posts`,
  description: 'Posts',
};

export default async function PostsPage() {
  const posts = await getPosts();
  const res = await fetch('http://localhost:3000/api/posts');

  return <Posts posts={res} />;
}
