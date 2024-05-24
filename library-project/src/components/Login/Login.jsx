import { useState } from "react";
import "./Login.css";
import { useEffect } from 'react';

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handleInput = ({ target }) => {
    setForm((form) => (
      {
        ...form,
        [target.name]: target.value
      }
    ));
  }

  useEffect(()=> {
    console.log('Primer render');
  }, []);

  useEffect(() => {
    console.log("Estado del formulario", form);
  }, [form]);

  return (
    <div className="login-container">
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
        <button className="form-button" type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
};
