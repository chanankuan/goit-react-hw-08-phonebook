import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import { LogoLink, StyledHeader } from './Header.styled';
import { Container, NavLink } from 'components/Common';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <StyledHeader>
        <Container
          style={{
            paddingTop: 40,
          }}
        >
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Flex alignItems="center" columnGap={5}>
              <LogoLink to="/">Phonebook</LogoLink>
              {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            </Flex>

            <Flex alignItems="center" columnGap={5}>
              {isLoggedIn ? <UserMenu /> : <AuthMenu />}
            </Flex>
          </nav>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
