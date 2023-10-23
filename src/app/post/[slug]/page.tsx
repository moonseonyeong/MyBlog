import { getPost } from '@/api/post/getPost';
import Post from '@/components/blocks/Post';
import { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post)
    return {
      title: 'Not Found',
      description: 'The page is not found',
    };

  return {
    title: post.title,
    description: post.content,
    alternates: {
      canonical: `/post/${post.id}`,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) return <div>Not Found</div>;

  return <Post post={post} />;
}
