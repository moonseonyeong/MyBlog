import { FlexBox, FlexColumnBox, Tag } from '@/styles/common';
import styled from '@emotion/styled';

export const PostContainer = styled(FlexColumnBox)`
  flex-wrap: wrap;
  width: 100%;

  img {
    width: 90%;
  }

  a {
    color: var(--grey700);
    text-decoration: underline;
  }

  hr {
    border: none;
    height: 1px;
    width: 100%;
    background: var(--grey300);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const PostTitle = styled.h1`
  border-bottom: 1px solid var(--grey700);
  width: 100%;
  padding-bottom: 4px;
  margin: 0;
`;

export const PostDate = styled(Tag)``;

export const PostCategory = styled(Tag)``;

export const Content = styled.div``;

export const PostInfoWrapper = styled(FlexBox)`
  gap: 8px;
`;
