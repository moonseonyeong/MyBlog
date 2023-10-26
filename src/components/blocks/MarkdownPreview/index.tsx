'use client';
import { useState } from 'react';
import { Container, Wrapper } from './styles';
import Preview from './Preview';
import { InputChangeEvent, PostDataType } from './types';
import { Category, CategoryRes } from '@/api/category/getCategories';
import Button from '@/components/common/Button';
import { useCreatePost } from '@/api/post/useCreatePost';

interface MarkdownPreviewProps {
  categories: Category[];
}

const MarkdownPreview = ({ categories }: MarkdownPreviewProps) => {
  const [postData, setPostData] = useState<PostDataType>({
    title: '',
    subtitle: '',
    content: '',
    categoryId: 0,
    date: new Date(),
  });
  const [secret, setSecret] = useState<string>('');

  const { mutate: createPost } = useCreatePost({
    onSuccess: (data) => {
      alert(`등록 성공 🎉 | ID : ${data.id}`);
    },
  });

  const handleInputChange = (e: InputChangeEvent) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Wrapper>
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
        <select name='categoryId' value={postData.categoryId} onChange={handleInputChange}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          name='secret'
          type='text'
          placeholder='secret'
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
      </Wrapper>
      <Preview content={postData.content} onChange={handleInputChange} />
      <Button onClick={() => createPost({ postData, secret })}>
        <span>작성</span>
      </Button>
    </Container>
  );
};

export default MarkdownPreview;
