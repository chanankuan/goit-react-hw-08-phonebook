import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 768px;
`;

export const Section = styled.section``;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
`;

export const Player = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Icon = styled.img``;

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
