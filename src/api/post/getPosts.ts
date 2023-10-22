import { prisma } from '@/lib/prisma';
import api from '..';

// export const getPosts = async () => {
//   return await prisma.posts.findMany();
// };

export const getPosts = async () => {
  const { data } = await api.get(`/posts`);

  return data;
};
