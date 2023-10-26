import styled from '@emotion/styled';

export const CardContainer = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 16px;
  width: 100%;

  &:hover {
    background: #e6e6e6;
    opacity: 1;
    transition: background-color 0.3s ease-in-out;
  }
`;

export const Title = styled.div`
  color: var(--primary-color);
  font-size: 17px;
  font-weight: 700;
`;

export const Description = styled.div`
  color: var(--secondary-color);
  font-weight: 400;
  font-size: 14px;
  white-space: nowrap;
`;
