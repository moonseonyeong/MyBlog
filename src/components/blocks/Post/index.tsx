'use client';
import parse from 'html-react-parser';
import { PostCategory, PostContainer, PostDate, PostTitle, Content } from './styles';
import { FlexBox } from '@/styles/common';
import { formatDateYYYYMMDD } from '@/utils/date';
import { GetPostType } from '@/api/post/types';

type P = {
  post: GetPostType;
};

const Post = ({ post }: P) => {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <FlexBox>
        <PostDate>{formatDateYYYYMMDD(new Date(post.date))}</PostDate>
        <PostCategory>{post.category_id}</PostCategory>
      </FlexBox>

      <Content>{parse(post.content)}</Content>
    </PostContainer>
  );
};

export default Post;
