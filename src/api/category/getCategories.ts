import api from '..';

type CategoryList =
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
  categories: Category[];
  totalPostsCount: number;
}

export interface Category {
  id: number;
  name: CategoryList;
  count: number;
}

export const getCategories = async () => {
  const { data } = await api.get<CategoryRes>(`/categories`);

  return data;
};
