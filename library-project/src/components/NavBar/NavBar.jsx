import { useNavigate } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  const navigate = useNavigate();


  const logout = () => {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <nav className='navbar'>
      <h4>Libreria</h4>
      <button className='logout' onClick={logout}>Salir</button>
    </nav>
  )
}
