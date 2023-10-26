'use client';

import Link from 'next/link';
import DarkMode from './DarkMode';
import { HeaderContainer } from './styles';

interface HeaderProps {
  isDarkMode: boolean;
}

const Header = ({ isDarkMode }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Link href='/'>HOME</Link>
      <DarkMode isDarkMode={isDarkMode} />
    </HeaderContainer>
  );
};

export default Header;
