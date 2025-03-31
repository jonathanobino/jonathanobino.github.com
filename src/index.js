import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/home';
import './scss/style.scss';

const container = document.getElementById('app');

const root = createRoot(container);
root.render(<Home />)


