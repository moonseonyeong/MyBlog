'use client';

import GithubIcon from '../@Icons/GithubIcon';
import BlogIcon from '../@Icons/BlogIcon';
import { Category, CategoryWrapper, Container, IconContainer, Profile } from './styles';
import { Category as CategoryType } from '@/api/category/getCategories';
import { usePathname, useSearchParams } from 'next/navigation';

interface SidebarProps {
  categories: CategoryType[];
  totalPostsCount: number;
}

const SidebarComponent = ({ categories, totalPostsCount }: SidebarProps) => {
  const params = useSearchParams();
  const categoryId = Number(params.get('categoryId'));
  const path = usePathname();

  const isSelected = (id: number) => {
    return path === '/posts' && categoryId === id;
  };

  return (
    <Container gap={24}>
      <Profile src='/assets/profile.png' alt='my_profile' />
      <IconContainer>
        <GithubIcon />
        <BlogIcon />
      </IconContainer>
      <CategoryWrapper>
        <Category selected={isSelected(0)} href={`/posts`}>
          전체보기 ({totalPostsCount})
        </Category>
        {categories.map((category) => (
          <Category
            selected={isSelected(category.id)}
            href={`/posts?categoryId=${category.id}`}
            key={category.id}
          >
            {category.name} ({category.count})
          </Category>
        ))}
      </CategoryWrapper>
    </Container>
  );
};

export default SidebarComponent;
