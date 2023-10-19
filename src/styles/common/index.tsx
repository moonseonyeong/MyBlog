import styled from '@emotion/styled';

export const FlexBox = styled.div<{ gap?: number; center?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${({ gap }) => (gap ? `${gap}px` : '0')};
  justify-content: ${({ center }) => (center ? `center` : 'flex-start')};
`;

export const FlexColumnBox = styled.div<{ gap?: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: ${({ gap }) => (gap ? `${gap}px` : '0')};
`;
