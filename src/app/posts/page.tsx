import { getPosts } from '@/api/post/getPosts';
import Posts from '@/components/blocks/Posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Posts`,
  description: 'Posts',
};

export default async function PostsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const categoryId = searchParams?.categoryId;
  const posts = await getPosts(categoryId);

  return <Posts posts={posts} />;
}
