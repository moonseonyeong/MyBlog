import { prisma } from '@/lib/prisma';
import { getErrorResponse } from '@/utils/helpers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.pathname;
  const id = Number(params.split('/')[3]);
  let _post;

  _post = await prisma.posts.findFirst({
    where: {
      id: id,
    },
    include: {
      category: true,
    },
  });

  if (!_post) {
    return getErrorResponse(404, 'Post not found');
  }

  const post = {
    id: _post.id,
    title: _post.title,
    content: _post.content,
    category: _post.category?.name,
    date: _post.date,
    isPrev: _post.is_prev,
    like: _post.like,
    subTitle: _post.subtitle,
  };

  return NextResponse.json(post);
}
