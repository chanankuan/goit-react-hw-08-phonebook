import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex } from '@chakra-ui/react';
// import { Button } from '@chakra-ui/react';
import { LogoLink, NavLink, StyledHeader, Text } from './Header.styled';
import { Container } from 'components/Common';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import LightRope from 'components/LightRope/LightRope';
import ChristmasButton from 'components/Button/ChristmasButton';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogout = () => dispatch(logout());

  return (
    <>
      <LightRope />
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

            {isLoggedIn ? (
              <Flex alignItems="center" columnGap={5}>
                <Text>Welcome, {user.name}</Text>
                <ChristmasButton onClick={handleLogout}>Logout</ChristmasButton>
              </Flex>
            ) : (
              <Flex alignItems="center" columnGap={5}>
                <NavLink to="/register">Sign up</NavLink>
                <NavLink to="/login">Sign in</NavLink>
              </Flex>
            )}
          </nav>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
