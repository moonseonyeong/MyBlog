import api from '..';

export const getPosts = async (categoryId: string | undefined) => {
  const { data } = await api.get(`/posts?categoryId=${categoryId}`);
  return data;
};
