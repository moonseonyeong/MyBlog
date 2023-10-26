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

  if (posts.length === 0) {
    return (
      <>
        <h1>Post</h1>
        <div>카테고리에 맞는 게시글이 없습니다.</div>
      </>
    );
  }

  return <Posts posts={posts} />;
}
