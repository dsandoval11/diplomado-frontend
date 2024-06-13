import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { BookDetailPage } from './pages/BookDetailPage';

const LoginRoute = () => {
  const isLogged = localStorage.getItem('jwt');
  return !isLogged ? <LoginPage />
    : <Navigate to="/home" />;
};

const PrivateRoute = ({children}) => {
  const isLogged = localStorage.getItem('jwt');

  return isLogged ? 
    <Routes>
      { children }
      <Route path='/*' element={ <Navigate to='home' /> }></Route>
    </Routes>
    : <Navigate to="login" />
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginRoute />}></Route>
      <Route path='/*' element={
        <PrivateRoute>
          <Route path='/home' element={<HomePage />} />
          <Route path='/book/:id' element={<BookDetailPage />} />
        </PrivateRoute>
      }></Route>
    </Routes>
  )
}
