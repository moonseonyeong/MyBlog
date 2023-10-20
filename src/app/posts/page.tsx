export const metadata = {
  title: `'작성 글'`,
};
interface Params {
  params: {
    lang: any;
  };
}

import { getPosts } from '@/api/post/getPost';
import Post from '@/components/blocks/Post';
import { Metadata } from 'next';

// export async function generateMetadata({ params: { lang } }: Params): Promise<Metadata> {
//   const posts = await getPosts();

//   return {
//     title: `${posts[1].title}`,
//   };
// }

export default async function PostPage() {
  const posts = await getPosts();

  return <Post />;
}
