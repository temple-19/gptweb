import React from 'react';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

// const container = document.getElementById('root');
const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<App />);
