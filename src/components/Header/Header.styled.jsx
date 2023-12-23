import styled from '@emotion/styled';
import { Container } from 'components/Common';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

export const StyledContainer = styled(Container)`
  padding-top: 40px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 100%;
  text-decoration: none;
  padding: 10px 5px;
`;
