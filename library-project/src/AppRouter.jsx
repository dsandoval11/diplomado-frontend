import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />}></Route>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/*' element={<Navigate to='/' />}></Route>
    </Routes>
  )
}
