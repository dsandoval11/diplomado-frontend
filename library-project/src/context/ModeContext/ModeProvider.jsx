import { useMemo, useState } from 'react';
import { ModeContext } from './ModeContext';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

export const ModeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  const preferMode = localStorage.getItem('theme-mode');
  const [mode, setMode] = useState(preferMode ? preferMode : prefersDarkMode);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: mode,
    },
  }), [mode]);

  const toggleMode = () => {
    setMode((prev) => {
      const currentMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme-mode', currentMode)
      return currentMode;
    });
  }

  const value = {
    toggleMode,
    mode
  }

  return (
    <ModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  )
}
