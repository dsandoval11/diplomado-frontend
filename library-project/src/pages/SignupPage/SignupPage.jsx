import { Button, TextField } from "@mui/material";
import { t } from "i18next";
import { AuthLayout } from "../../layouts/AuthLayout";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

export const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout title={t('signup-page.title')}>
      <form>
        <TextField
          fullWidth
          label="Nombre"
          variant="outlined"
          type="text"
          sx={{ pb: 1 }}
        />
        <TextField
          fullWidth
          label="Apellido"
          variant="outlined"
          type="text"
          sx={{ pb: 1 }}
        />
        <TextField
          fullWidth
          label="Correo"
          variant="outlined"
          type="email"
          sx={{ paddingBottom: 2 }}
        />
        <TextField
          fullWidth
          label={t("login-page.password")}
          variant="outlined"
          type="password"
          sx={{ paddingBottom: 2 }}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mb: 1 }}>
          Registrase
        </Button>
        <Button fullWidth variant="text" type="submit" onClick={() => navigate(ROUTES.LOGIN)}>
          Ya tengo una cuenta
        </Button>
      </form>
    </AuthLayout>
  );
};
