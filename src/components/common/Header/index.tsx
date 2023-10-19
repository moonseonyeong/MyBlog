'use client';

import DarkMode from './DarkMode';
import { HeaderContainer } from './styles';

interface HeaderProps {
  isDarkMode: boolean;
}

const Header = ({ isDarkMode }: HeaderProps) => {
  console.log('Header', isDarkMode);

  return (
    <HeaderContainer>
      <div>HEADER</div>
      <DarkMode isDarkMode={isDarkMode} />
    </HeaderContainer>
  );
};

export default Header;
