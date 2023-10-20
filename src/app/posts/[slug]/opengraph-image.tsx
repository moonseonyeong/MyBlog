import { getPost } from '@/api/post/getPost';
import { ImageResponse } from 'next/server';

export const size = {
  width: 900,
  height: 450,
};

export const contentType = 'image/png';

interface Props {
  params: {
    slug: string;
  };
}

export default async function og({ params }: Props) {
  const post = await getPost(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          backgroundColor: 'black',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            fontSize: 14,
          }}
        >
          moon_develog
        </div>
      </div>
    ),
    size
  );
}
