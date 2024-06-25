import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { BookDetailPage } from './pages/BookDetailPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { ROUTES } from './utils/routes';

const PublicRoutes = ({ children }) => {
  const isLogged = localStorage.getItem('jwt');
  return !isLogged ? children
    : <Navigate to={ROUTES.HOME} />;
};

const PrivateRoute = ({children}) => {
  const isLogged = localStorage.getItem('jwt');

  return isLogged ? 
    <Routes>
      { children }
      <Route path='/*' element={ <Navigate to={ROUTES.HOME} /> }></Route>
    </Routes>
    : <Navigate to={ROUTES.LOGIN} />
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<PublicRoutes><LoginPage/></PublicRoutes>}></Route>
      <Route path={ROUTES.SIGNUP} element={<PublicRoutes><SignupPage /></PublicRoutes>}></Route>
      <Route path='/*' element={
        <PrivateRoute>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.DETAIL} element={<BookDetailPage />} />
        </PrivateRoute>
      }></Route>
    </Routes>
  )
}
