import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const categoriesWithPosts = await prisma.categories.findMany({
    include: {
      posts: true,
      old_posts: true,
    },
  });
  9;
  const categories = categoriesWithPosts.map((category) => {
    const allPosts = [...category.posts, ...category.old_posts];
    const filteredPosts = allPosts.filter((post) => post.category_id === category.id);

    return {
      id: category.id,
      name: category.name,
      count: filteredPosts.length,
    };
  });

  const totalPostsCount = (await prisma.posts.count()) + (await prisma.old_posts.count());

  const response = {
    categories,
    totalPostsCount,
  };

  return NextResponse.json(response);
}
