'use client';
import parse from 'html-react-parser';
import {
  PostCategory,
  PostContainer,
  PostDate,
  PostTitle,
  Content,
  PostInfoWrapper,
} from './styles';
import { formatDateYYYYMMDD } from '@/utils/date';
import { GetPostType } from '@/api/post/types';
import Markdown from 'react-markdown';

type PostProps = {
  post: GetPostType;
};

const Post = ({ post }: PostProps) => {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostInfoWrapper>
        <PostDate>{formatDateYYYYMMDD(new Date(post.date))}</PostDate>
        <PostCategory>{post.category}</PostCategory>
      </PostInfoWrapper>

      {post.isPrev ? <Content>{parse(post.content)}</Content> : <Markdown>{post.content}</Markdown>}
    </PostContainer>
  );
};

export default Post;
