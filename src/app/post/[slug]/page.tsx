import { getPost } from '@/api/post/getPost';
import Post from '@/components/blocks/Post';
import { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPost(params.slug);

    return {
      title: post.title,
      description: post.content,
      alternates: {
        canonical: `/post/${post.id}`,
      },
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The post is not found',
    };
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  return <Post post={post} />;
}
