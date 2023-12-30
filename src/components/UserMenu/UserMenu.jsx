import { Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import ChristmasButton from 'components/Button/ChristmasButton';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => dispatch(logout());

  return (
    <Flex alignItems="center" columnGap={5}>
      <Heading size="sm">Welcome, {user.name}</Heading>
      <ChristmasButton onClick={handleLogout}>Logout</ChristmasButton>
    </Flex>
  );
};

export default UserMenu;
