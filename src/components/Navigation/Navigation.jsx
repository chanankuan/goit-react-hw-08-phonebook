import { Flex } from '@chakra-ui/react';
import { LogoLink } from './Navigation.styled';
import { NavLink } from 'components/Common';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex alignItems="center" columnGap={5}>
      <LogoLink to="/">Phonebook</LogoLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Flex>
  );
};

export default Navigation;
