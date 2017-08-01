import { createStore } from 'redux';
import weather from './reducer';

const store = createStore(weather,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;