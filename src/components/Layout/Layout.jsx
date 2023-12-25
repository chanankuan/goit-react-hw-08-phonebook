import Snowfall from 'react-snowfall';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loader from '../Loader/Loader';
import LightRope from 'components/LightRope/LightRope';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <LightRope />

      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <Snowfall
        style={{
          background: 'transparent',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 999,
        }}
      />
    </>
  );
};

export default Layout;
