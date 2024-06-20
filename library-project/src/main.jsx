import ReactDOM from 'react-dom/client'
import { AppRouter } from './AppRouter.jsx';
import { AppContext } from './context/AppContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <AppRouter />
  </AppContext>
)
