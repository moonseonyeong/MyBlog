import { FlexBox, FlexColumnBox } from '@/styles/common';
import styled from '@emotion/styled';

export const Container = styled(FlexBox)`
  height: 100%;
  width: 100%;
  align-items: flex-start;
  gap: 24px;
`;

export const TextareaWrapper = styled(FlexBox)`
  height: 100%;
`;

export const Textarea = styled.textarea`
  height: 100%;
  flex: 1;
  width: 100%;
  border: none;
  border-radius: 0;
  padding: 12px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const MarkdownWrapper = styled(FlexColumnBox)`
  border: 1px solid #ddd;
  height: 100%;
`;
