import { Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import ChristmasButton from 'components/Button/ChristmasButton';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => dispatch(logout());

  return (
    <>
      <Heading size="sm">Welcome, {user.email}</Heading>
      <ChristmasButton onClick={handleLogout}>Logout</ChristmasButton>
    </>
  );
};

export default UserMenu;
