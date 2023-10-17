import { getPosts } from '@/api/post/getPost';
import Post from '@/components/blocks/Post';

export default async function PostPage() {
  const posts = await getPosts();

  return <Post />;
}
