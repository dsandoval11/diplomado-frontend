import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { Counter } from './components/Counter/Counter.jsx';
// import { Cover } from './components/Cover/Cover.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter title='Prop example'/>
  </React.StrictMode>,
)

