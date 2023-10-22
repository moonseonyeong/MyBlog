import api from '..';

export const getPost = async (id: string) => {
  const { data } = await api.get(`/posts/${id}`);

  return data;

  // return await prisma.posts.findFirst({
  //   where: {
  //     id: Number(id),
  //   },
  // });
};
