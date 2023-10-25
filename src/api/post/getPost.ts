import api from '..';
import { GetPostType } from './types';

export const getPost = async (id: string) => {
  const { data } = await api.get<GetPostType>(`/posts/${id}`);

  return data;
};
