import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import { Counter } from './components/Counter/Counter.jsx';
// import { Detail } from './components/Detail/Detail.jsx';
import App from './App.jsx';

// const book = {title: 'Strange tools', genre: 'artistic', publisher: 'Macmillan', author: 'Alva Noë', year: 2015};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

