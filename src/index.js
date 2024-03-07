// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

// Replace ReactDOM.render with createRoot
const root = createRoot(document.getElementById('root'));
root.render(<App />);