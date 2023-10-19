'use client';
import { setCookie } from '@/utils/cookie';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';

interface DarkModeProps {
  isDarkMode: boolean;
}

const DarkMode = ({ isDarkMode }: DarkModeProps) => {
  const [isDark, setIsDark] = useState(isDarkMode);

  const toggleDarkMode = () => {
    setIsDark(!isDark);

    setCookie({ key: 'isDarkMode', value: String(!isDark), days: 1 });

    if (isDark) {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <Container isDark={isDark}>
      {isDark ? (
        <Image
          src={'/assets/light_sun.png'}
          width={24}
          height={24}
          alt='dark mode'
          onClick={toggleDarkMode}
        />
      ) : (
        <Image
          src={'/assets/dark_moon.png'}
          width={24}
          height={24}
          alt='light mode'
          onClick={toggleDarkMode}
        />
      )}
    </Container>
  );
};

export default DarkMode;

const Container = styled.div<{ isDark: boolean }>`
  position: relative;
  width: fit-content;
  position: absolute;
  cursor: pointer;
  right: 0;
  margin-right: 16px;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  background-color: var(--home-bg);

  > span {
    position: unset !important;
    > img {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;
