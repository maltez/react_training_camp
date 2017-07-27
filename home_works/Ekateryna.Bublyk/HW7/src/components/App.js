import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import AsyncApp from './AsyncApp';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AsyncApp />
			</Provider>
		)
	}
}

export default App;