'use client';

import { GetPostsRes } from '@/api/post/getPosts';
import { PostsContainer, Header } from './styles';
import Card from './Card';

type PostsProps = {
  posts: GetPostsRes[];
};

const Posts = ({ posts }: PostsProps) => {
  return (
    <PostsContainer gap={24}>
      <Header>Post</Header>
      {posts.map((post) => (
        <Card key={post.id} date={post.date} like={post.like} title={post.title} id={post.id} />
      ))}
    </PostsContainer>
  );
};

export default Posts;
