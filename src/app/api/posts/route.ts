import { PostDataType } from '@/components/blocks/MarkdownPreview/types';
import { prisma } from '@/lib/prisma';
import { getErrorResponse } from '@/utils/helpers';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await prisma.posts.findMany();

  return NextResponse.json(posts);
}

type BodyType = {
  post: PostDataType;
};

export async function POST(req: Request) {
  const { post } = (await req.json()) as BodyType;

  try {
    await prisma.posts.create({
      data: {
        category_id: post.categoryId,
        title: post.title,
        content: post.content,
        subtitle: post.subtitle,
        date: post.date,
        is_prev: 0,
      },
    });

    console.log(post);

    const response = {
      status: true,
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
