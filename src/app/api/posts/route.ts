import { PostDataType } from '@/components/blocks/MarkdownPreview/types';
import { prisma } from '@/lib/prisma';
import { getErrorResponse } from '@/utils/helpers';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await prisma.posts.findMany();

  return NextResponse.json(posts);
}

type BodyType = {
  postData: PostDataType;
  secret: string;
};

export async function POST(req: Request) {
  const { postData, secret } = (await req.json()) as BodyType;

  const SECRET = process.env.NEXT_PUBLIC_SECRET;

  if (secret !== SECRET) {
    return getErrorResponse(401, 'unauthorized');
  }

  try {
    const post = await prisma.posts.create({
      data: {
        category_id: postData.categoryId,
        title: postData.title,
        content: postData.content,
        subtitle: postData.subtitle,
        date: postData.date,
      },
    });

    const response = {
      status: true,
      id: post.id,
    };

    return new NextResponse(JSON.stringify(response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
    getErrorResponse(500, 'server error');
  }
}
