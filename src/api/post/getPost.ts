import api from '..';

export const getPosts = async () => {
  const { data } = await api.get(`/post`);
  return data;
};
