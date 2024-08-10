import { PostDataType } from '@/components/blocks/MarkdownPreview/types';
import { prisma } from '@/lib/prisma';
import { getErrorResponse } from '@/utils/helpers';
import { NextRequest, NextResponse } from 'next/og';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const categoryId = params.get('categoryId');

  const _categorizedPosts = await prisma.posts.findMany({
    where: {
      category_id: Number(categoryId) || undefined,
    },
  });

  const categorizedPosts = _categorizedPosts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      date: post.date,
      like: post.like,
      subTitle: post.subtitle,
    };
  });

  return NextResponse.json(categorizedPosts);
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
        is_prev: false,
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
