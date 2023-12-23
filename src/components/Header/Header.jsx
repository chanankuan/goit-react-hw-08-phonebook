import { StyledContainer, StyledHeader, StyledNav } from './Header.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import { useAuth } from 'hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
