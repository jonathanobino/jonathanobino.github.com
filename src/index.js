import React from 'react';
import { render, hydrate } from 'react-dom';
import Home from './pages/home';
import './scss/style.scss';

render(<Home />, document.getElementById('app'));
