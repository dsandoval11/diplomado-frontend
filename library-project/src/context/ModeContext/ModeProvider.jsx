import { useMemo, useState } from 'react';
import { ModeContext } from './ModeContext';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

export const ModeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(() => createTheme({
    palette: {
      mode: mode,
    },
  }), [mode]);

  const toggleMode = () => {
    setMode((prev)=> (prev === 'dark' ? 'light' : 'dark'));
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
