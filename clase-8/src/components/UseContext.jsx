import { createContext, useContext } from 'react';

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Crear un proveedor del contexto
const ThemeProvider = ({ children }) => {
  const theme = {
    color: 'blue',
    backgroundColor: 'lightgray'
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Consumir el contexto usando useContext
const SomeComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
      Este es un componente que usa el tema del contexto.
    </div>
  );
};

// 4. Usar el componente envuelto con el proveedor del contexto
const App = () => {
  return (
    <ThemeProvider>
      <SomeComponent />
    </ThemeProvider>
  );
};

export default App;


