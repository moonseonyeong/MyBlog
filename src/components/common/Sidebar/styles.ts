import styled from '@emotion/styled';
import { FlexBox, FlexColumnBox } from '../../../styles/common';
import { mobileMediaQuery } from '@/styles/mediaQuery';
import { css } from '@emotion/react';
import Link from 'next/link';

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

export const Category = styled(Link)<{ selected: boolean }>`
  cursor: pointer;

  :hover {
    color: var(--primary-color);
    font-weight: 700;
  }

  ${({ selected }) =>
    selected &&
    css`
      color: var(--primary-color);
      font-weight: 700;
    `}
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
