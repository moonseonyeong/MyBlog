import styled from '@emotion/styled';
import { FlexBox, FlexColumnBox } from '../../../styles/common';
import { mobileMediaQuery } from '@/styles/mediaQuery';
import { css } from '@emotion/react';

export const Container = styled(FlexColumnBox)`
  width: min-content;
  padding: 0px 0px 0px 12px;
  border-right: 2px solid var(--grey300);
  height: 100%;

  ${mobileMediaQuery(css`
    display: none;
  `)}
`;

export const CategoryWrapper = styled(FlexColumnBox)`
  gap: 8px;
`;

export const Category = styled.div`
  cursor: pointer;
`;

export const Profile = styled.img`
  border-radius: 100px;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 12px;
`;

export const IconContainer = styled(FlexBox)`
  border-bottom: 2px solid var(--grey300);
  padding-bottom: 12px;
  gap: 16px;
`;
