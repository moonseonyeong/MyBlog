import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.pathname;
  const id = Number(params.split('/')[3]);
  let post;

  if (id <= 170) {
    post = await prisma.old_posts.findFirst({
      where: {
        id: id,
      },
    });
  } else {
    post = await prisma.posts.findFirst({
      where: {
        id: id,
      },
    });
  }

  return NextResponse.json(post);
}
