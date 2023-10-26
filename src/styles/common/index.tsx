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

export const Tag = styled.p`
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s ease;
  display: flex;
  background-color: var(--tag-background-color);
  color: var(--tag-text-color);
  border: 1px solid var(--tag-border-color);
`;
