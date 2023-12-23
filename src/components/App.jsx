import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/auth/operations';
import { PublicRoute } from '../PublicRoute';
import { PrivateRoute } from '../PrivateRoute';
import { selectToken } from '../redux/auth/selectors';

const Layout = lazy(() => import('components/Layout/Layout'));
const Home = lazy(() => import('Pages/Home'));
const Register = lazy(() => import('Pages/Register'));
const Login = lazy(() => import('Pages/Login'));
const Contacts = lazy(() => import('Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [token, dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
