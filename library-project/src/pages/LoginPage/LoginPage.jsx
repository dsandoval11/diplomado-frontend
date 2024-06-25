import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { Alert, TextField } from "@mui/material";
import { t } from "i18next";
import { useFetch } from "../../hook/useFetch";
import { FORM_RULES } from "../../utils/formRules";
import { AuthLayout } from "../../layouts/AuthLayout";
import { ROUTES } from '../../utils/routes';

export const LoginPage = () => {
  const { data, error: errorReq, req } = useFetch("login");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      localStorage.setItem("jwt", data.jwt);
      navigate("/home", { replace: true });
    }
  }, [data, navigate]);

  const onSubmit = (form) => {
    req({
      body: form,
      method: "POST",
    });
  };

  return (
    <AuthLayout title={t('login-page.title')}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          sx={{ pb: 1 }}
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", FORM_RULES.EMAIL)}
        />
        <TextField
          fullWidth
          label={t("login-page.password")}
          variant="outlined"
          type="password"
          sx={{ paddingBottom: 2 }}
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", FORM_RULES.PASSWORD)}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mb: 1}}>
          Iniciar sesion
        </Button>
        <Button fullWidth variant="outlined" onClick={() => navigate(ROUTES.SIGNUP)}>
          Registrarse
        </Button>
        {errorReq && <Alert severity="error">Error al iniciar sesion.</Alert>}
      </form>
    </AuthLayout>
  );
};
