import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './style/style.css';

const rootElement = document.getElementById('root');

render(<App />, rootElement);