import { createStore, compose, applyMiddleware } from 'redux';
import root from './reducers/root';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// export default compose(applyMiddleware(thunk))(createStore)(root);
export default createStore(root, composeWithDevTools(
	applyMiddleware(thunk)
));
