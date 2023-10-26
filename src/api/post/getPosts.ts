import api from '..';

export interface GetPostsRes {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  like: number;
}

export const getPosts = async (categoryId: string | undefined) => {
  const { data } = await api.get<GetPostsRes[]>(`/posts?categoryId=${categoryId}`);
  return data;
};
