import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './pages/Dashboard'; // Update this line
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard /> {/* Update this line */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();