import { prisma } from '@/lib/prisma';

export const getAllPost = async () => {
  return await prisma.posts.findMany();
};
