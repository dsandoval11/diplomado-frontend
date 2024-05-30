import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';

export const AppRouter = () => {


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


  return (
    <Routes>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/*' element={
        <PrivateRoute>
          <Route path='/home' element={<HomePage />}></Route>
        </PrivateRoute>
      }></Route>
    </Routes>
  )
}
