import { NavLink } from 'components/Common';

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/register">Sign up</NavLink>
      <NavLink to="/login">Sign in</NavLink>
    </>
  );
};

export default AuthMenu;
