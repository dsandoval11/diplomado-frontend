import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss'
import { useFetch } from '../../hook/useFetch';
import Button from '@mui/material/Button';

export const LoginPage = () => {

  const { data, error, req } = useFetch('login');
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    req({
      body: form,
      method: 'POST'
    });

  };

  useEffect(()=> {
    if(data) {
      localStorage.setItem('jwt', data.jwt);
      navigate('/home', { replace: true });
    }
  }, [data, navigate]);

  const handleInput = ({ target }) => {
    setForm((form) => (
      {
        ...form,
        [target.name]: target.value
      }
    ));
  }

  return (
    <div className="login-container">
      { error && 'Error al iniciar' }
      { data && 'Iniciado correctamente' }
      <h4 className='title'>Iniciar sesion</h4>
      
      <form className="form" onSubmit={handleSubmit}>
        <label className='form-label' htmlFor="">Email</label>
        <input
          className='form-input'
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleInput}
        />
        <label className='form-label' htmlFor="">Contrasena</label>
        <input
          className='form-input'
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleInput}
        />
        <Button variant="contained" type="submit">Iniciar sesion</Button>
      </form>
    </div>
  )
}
