import api from '..';

type Category =
  | 'Frontend'
  | 'javascript'
  | 'typescript'
  | 'React'
  | 'Next.js'
  | 'React Native'
  | 'Library'
  | 'Server'
  | 'DB'
  | 'CS'
  | '책'
  | '코딩테스트'
  | 'ETC'
  | 'TIL'
  | 'AWS'
  | '회고';

export interface CategoryRes {
  id: number;
  name: Category;
}

export const getCategories = async () => {
  const { data } = await api.get<CategoryRes[]>(`/categories`);

  return data;
};
