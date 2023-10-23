'use client';
import { useState } from 'react';
import { Container, TitleWrapper } from './styles';
import Preview from './Preview';
import { InputChangeEvent, PostDataType } from './types';
import { CategoryRes } from '@/api/category/getCategories';

interface MarkdownPreviewProps {
  categories: CategoryRes[];
}

const MarkdownPreview = ({ categories }: MarkdownPreviewProps) => {
  const [postData, setPostData] = useState<PostDataType>({
    title: '',
    subtitle: '',
    content: '',
    categoryId: 0,
    date: new Date(),
  });

  const handleInputChange = (e: InputChangeEvent) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <TitleWrapper>
        <input
          name='title'
          type='text'
          placeholder='제목'
          value={postData.title}
          onChange={handleInputChange}
        />
        <input
          name='subtitle'
          type='text'
          placeholder='부제목'
          value={postData.subtitle}
          onChange={handleInputChange}
        />
      </TitleWrapper>
      <Preview content={postData.content} onChange={handleInputChange} />
    </Container>
  );
};

export default MarkdownPreview;
