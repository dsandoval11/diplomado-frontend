import { useContext, useState } from "react";
import { Alert, Button, Divider, Fab, Grid, Snackbar, Typography } from "@mui/material";
import SunIcon from "@mui/icons-material/Brightness7";
import MoonIcon from "@mui/icons-material/ModeNight";
import { Helmet } from "react-helmet-async";
import { ModeContext } from "../context/ModeContext/ModeContext";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { signInGithub, signInGoogle } from '../firebase/firebaseAuth';
import { useNavigate } from 'react-router-dom';

export const AuthLayout = ({ children, title = "" }) => {
  const { toggleMode, mode } = useContext(ModeContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const signinSocial = async (provider) => {
    try {
      let user;
      if(provider === 'Google') {
        user = await signInGoogle();
      } else {
        user = await signInGithub();
      }
      localStorage.setItem("jwt", JSON.stringify(user));
      navigate("/home", { replace: true });
    } catch (error) {
      console.log(error);
      setOpen(true);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Helmet>
        <title>Library | {title}</title>
      </Helmet>

      <Grid container justifyContent="center">
        <Grid lg={3} md={6} sm={8} xs={11} item sx={{ boxShadow: 8, p: 4 }}>
          <Typography variant="h4" align="center" sx={{ pb: 2 }}>
            {title}
          </Typography>
          <Grid container sx={{ mb: 2 }} gap={2}>
            <Grid flex={1}>
              <Button
                fullWidth
                variant="outlined"
                color="inherit"
                startIcon={<GoogleIcon />}
                onClick={() => signinSocial('Google')}
              >
                Google
              </Button>
            </Grid>
            <Grid flex={1}>
              <Button
                fullWidth
                variant="outlined"
                color="inherit"
                startIcon={<GitHubIcon />}
                onClick={() => signinSocial('Github')}
              >
                Github
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{mb: 2}}>o</Divider>
          {children}
        </Grid>
      </Grid>
      <Fab
        size="medium"
        aria-label="add"
        sx={{ position: "absolute", bottom: 30, right: 30 }}
        onClick={toggleMode}
      >
        {mode === "light" ? <MoonIcon /> : <SunIcon />}
      </Fab>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Error al autenticar con el servicio.
        </Alert>
      </Snackbar>
    </Grid>
  );
};
