'use client';

import GithubIcon from '../@Icons/GithubIcon';
import BlogIcon from '../@Icons/BlogIcon';
import { Category, CategoryWrapper, Container, IconContainer, Profile } from './styles';
import { Category as CategoryType, CategoryRes } from '@/api/category/getCategories';

interface SidebarProps {
  categories: CategoryType[];
  totalPostsCount: number;
}

const SidebarComponent = ({ categories, totalPostsCount }: SidebarProps) => {
  return (
    <Container gap={24}>
      <Profile src='/assets/profile.png' alt='my_profile' />
      <IconContainer>
        <GithubIcon />
        <BlogIcon />
      </IconContainer>
      <CategoryWrapper>
        <Category href={`/posts`}>전체보기 ({totalPostsCount})</Category>
        {categories.map((category) => (
          <Category href={`/posts/${category.id}`} key={category.id}>
            {category.name} ({category.count})
          </Category>
        ))}
      </CategoryWrapper>
    </Container>
  );
};

export default SidebarComponent;
