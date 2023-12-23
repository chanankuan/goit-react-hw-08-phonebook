import { Flex } from '@chakra-ui/react';
import { NavLink } from 'components/Common';

const AuthMenu = () => {
  return (
    <Flex alignItems="center" columnGap={5}>
      <NavLink to="/register">Sign up</NavLink>
      <NavLink to="/login">Sign in</NavLink>
    </Flex>
  );
};

export default AuthMenu;
