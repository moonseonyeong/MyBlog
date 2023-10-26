'use client';

import GithubIcon from '../@Icons/GithubIcon';
import BlogIcon from '../@Icons/BlogIcon';
import { useRouter } from 'next/navigation';
import { Category, CategoryWrapper, Container, IconContainer, Profile } from './styles';
import { CategoryRes } from '@/api/category/getCategories';

interface SidebarProps {
  categories: CategoryRes[];
}

const SidebarComponent = ({ categories }: SidebarProps) => {
  return (
    <Container gap={24}>
      <Profile src='/assets/profile.png' alt='my_profile' />
      <IconContainer>
        <GithubIcon />
        <BlogIcon />
      </IconContainer>
      <CategoryWrapper>
        <Category href={`/posts`}>전체보기</Category>
        {categories.map((category) => (
          <Category href={`/posts/${category.id}`} key={category.id}>
            {category.name}
          </Category>
        ))}
      </CategoryWrapper>
    </Container>
  );
};

export default SidebarComponent;
