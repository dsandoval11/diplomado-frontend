import { BrowserRouter } from "react-router-dom";
import { ModeProvider } from './ModeContext/ModeProvider';
import { HelmetProvider } from 'react-helmet-async';
import '../translate';

export const AppContext = ({ children }) => {
  return (
    <BrowserRouter>
      <ModeProvider>
        <HelmetProvider>
          {children}
        </HelmetProvider>
      </ModeProvider>
    </BrowserRouter>
  );
};
