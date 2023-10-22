'use client';

import GithubIcon from '../@Icons/GithubIcon';
import BlogIcon from '../@Icons/BlogIcon';
import { useRouter } from 'next/navigation';
import { Category, CategoryWrapper, Container, IconContainer, Profile } from './styles';

const Sidebar = () => {
  const { push } = useRouter();

  const handleCategoryClick = (category: string) => {
    push(`/category/${category}`);
  };

  return (
    <Container gap={24}>
      <Profile src='/assets/profile.png' alt='my_profile' />
      <IconContainer>
        <GithubIcon />
        <BlogIcon />
      </IconContainer>
      <CategoryWrapper>
        <Category>전체보기</Category>
        <Category>Web</Category>
        <Category>Java Script</Category>
        <Category>React-native</Category>
        <Category>Server</Category>
        <Category>Algorithm</Category>
        <Category>회고</Category>
        <Category>기타</Category>
        <Category>책</Category>
        <Category onClick={() => handleCategoryClick('play')}>놀이터</Category>
      </CategoryWrapper>
    </Container>
  );
};

export default Sidebar;
