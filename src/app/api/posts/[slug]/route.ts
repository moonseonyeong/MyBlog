import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.pathname;
  const id = Number(params.split('/')[3]);

  const post = await prisma.posts.findFirst({
    where: {
      id: id,
    },
  });

  return NextResponse.json(post);
}
