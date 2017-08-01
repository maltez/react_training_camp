import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './style/style.css';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import root from './reducers/root';

const store = createStore(root, composeWithDevTools(
	applyMiddleware(thunk)
));

const rootElement = document.getElementById('root');

render(
	<Provider store={store}>
		<App />
	</Provider>, rootElement);