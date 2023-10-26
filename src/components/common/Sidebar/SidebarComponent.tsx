'use client';

import GithubIcon from '../@Icons/GithubIcon';
import BlogIcon from '../@Icons/BlogIcon';
import { Category, CategoryWrapper, Container, IconContainer, Profile } from './styles';
import { Category as CategoryType } from '@/api/category/getCategories';

interface SidebarProps {
  categories: CategoryType[];
  totalPostsCount: number;
}

const SidebarComponent = ({ categories, totalPostsCount }: SidebarProps) => {
  const categoryId = Number(new URLSearchParams(location.search).get('categoryId')) || 0;

  return (
    <Container gap={24}>
      <Profile src='/assets/profile.png' alt='my_profile' />
      <IconContainer>
        <GithubIcon />
        <BlogIcon />
      </IconContainer>
      <CategoryWrapper>
        <Category isSelected={categoryId === 0} href={`/posts`}>
          전체보기 ({totalPostsCount})
        </Category>
        {categories.map((category) => (
          <Category
            isSelected={Number(categoryId) === category.id}
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
