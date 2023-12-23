import React from 'react';
import Snowfall from 'react-snowfall';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from 'components/Header/Header';
import Loader from '../Loader/Loader';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <>
      <Header />
      <Outlet />

      <Snowfall
        style={{
          background: 'transparent',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 999,
        }}
      />

      {(isLoading || isRefreshing) && <Loader />}
    </>
  );
};

export default Layout;
