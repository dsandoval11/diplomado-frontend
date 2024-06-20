import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss'
import { useFetch } from '../../hook/useFetch';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form"
import { Alert, Fab, TextField, Typography } from '@mui/material';
import SunIcon from '@mui/icons-material/Brightness7';
import MoonIcon from '@mui/icons-material/ModeNight';
import { FORM_RULES } from '../../utils/formRules';
import { ModeContext } from '../../context/ModeContext/ModeContext';
import { Helmet } from 'react-helmet-async';
import { t } from 'i18next';

export const LoginPage = () => {
  const { toggleMode, mode } = useContext(ModeContext);
  const { data, error: errorReq, req } = useFetch('login');
  const navigate = useNavigate();
  const { register,
    handleSubmit,
    formState: { errors },
 } = useForm();

  useEffect(()=> {
    if(data) {
      localStorage.setItem('jwt', data.jwt);
      navigate('/home', { replace: true });
    }
  }, [data, navigate]);

  /**useEffect(()=> {
    document.title = 'Library'
  }, []);
  */

  const onSubmit = (form) => {
    req({
      body: form,
      method: 'POST'
    });
  }

  return (
    <div className="login-container">
      <Helmet>
        <title>Library | Login</title>
      </Helmet>
      <Typography variant="h4" align="center" sx={{ pb: 2 }}>
        Iniciar sesion
      </Typography>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          sx={{ pb: 1 }}
          {...register("email", FORM_RULES.EMAIL)}
        />
        <TextField
          label={t('login-page.password')}
          variant="outlined"
          type="password"
          sx={{ paddingBottom: 2 }}
          {...register("password", FORM_RULES.PASSWORD)}
        />
        {/* <label className='form-label' htmlFor="">Email</label>
        <input
          className='form-input'
          type="email"
          {...register('email', FORM_RULES.EMAIL)}
        /> */}
        {/* <label className='form-label' htmlFor="password">Contrasena</label>
        <input
          id='password'
          className='form-input'
          type="password"
          {...register('password', FORM_RULES.PASSWORD)}
        /> */}
        <Button variant="contained" type="submit">
          Iniciar sesion
        </Button>
        {(errors.email || errors.password) && (
          <Alert severity="error">
            {errors.email?.message || errors.password?.message}
          </Alert>
        )}
        {errorReq && <Alert severity="error">Error al iniciar sesion.</Alert>}
      </form>

      <Fab
        size="medium"
        aria-label="add"
        sx={{ position: "absolute", bottom: 30, right: 30 }}
        onClick={toggleMode}
      >
        {mode === 'light' ? <MoonIcon /> :  <SunIcon />}

      </Fab>
    </div>
  );
}
