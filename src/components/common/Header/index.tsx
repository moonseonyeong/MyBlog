'use client';

import DarkMode from './DarkMode';
import { HeaderContainer } from './styles';

interface HeaderProps {
  isDarkMode: boolean;
}

const Header = ({ isDarkMode }: HeaderProps) => {
  return (
    <HeaderContainer>
      <div>HEADER</div>
      <DarkMode isDarkMode={isDarkMode} />
    </HeaderContainer>
  );
};

export default Header;
