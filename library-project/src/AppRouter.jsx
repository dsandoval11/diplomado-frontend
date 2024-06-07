import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { BookDetailPage } from './pages/BookDetailPage/BookDetailPage';

const LoginRoute = () => {
  const isLogged = localStorage.getItem('jwt');
  return !isLogged ? <LoginPage /> : <Navigate to='/home' />;
}

const PrivateRoute = ({children}) => {
  if(localStorage.getItem('jwt')) {
    return <Routes>
      { children }
      <Route path='/*' element={ <Navigate to='home' /> }></Route>
    </Routes>
  } else {
    return <Navigate to="login" />
  }
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginRoute />}></Route>
      <Route path='/*' element={
        <PrivateRoute>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/book/:id' element={<BookDetailPage />}></Route>
        </PrivateRoute>
      }></Route>
    </Routes>
  )
}
