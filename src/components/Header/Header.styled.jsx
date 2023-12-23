import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

export const Text = styled.h2`
  font-weight: 700;
`;

export const LogoLink = styled(Link)`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 100%;
  text-decoration: none;
  padding: 10px 5px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  padding: 10px 5px;
  cursor: pointer;
  transition: color 200ms ease-in-out, font-weight 200ms ease-in-out;
  &:hover {
    font-weight: 700;
    color: #c21010;
  }
`;
