'use client';
import parse from 'html-react-parser';
import { FlexColumnBox } from '@/styles/common';

type P = {
  post: any;
};

const Post = ({ post }: P) => {
  console.log(post);

  return (
    <Container>
      <div>{post.title}</div>
      {parse(post.content)}
    </Container>
  );
};

export default Post;

import styled from '@emotion/styled';

export const Container = styled(FlexColumnBox)`
  //
  flex-wrap: wrap;
  width: 100%;
  overflow-x: scroll;

  * img {
    width: 100%;
  }
`;
