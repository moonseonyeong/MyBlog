import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  visible?: boolean;
  isFullWidth?: boolean;
}

const Button = ({
  disabled = false,
  visible = true,
  children,
  isFullWidth,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type='button'
      disabled={disabled}
      visible={visible}
      isFullWidth={isFullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

interface ButtonStyleProps {
  disabled?: boolean;
  visible?: boolean;
  isFullWidth?: boolean;
}

const StyledButton = styled.button<ButtonStyleProps>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  padding: 8px;
  border-radius: 8px;
  white-space: nowrap;
  border: 1px solid var(--grey900);
  cursor: pointer;
  ${(props) =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    cursor: not-allowed;
    border: none;
    opacity: 0.3;
    background-color: var(--grey300);
    color: var(--grey900);
  }
`;
