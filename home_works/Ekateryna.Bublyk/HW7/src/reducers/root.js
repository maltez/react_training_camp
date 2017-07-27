import {combineReducers} from 'redux';

import getWeatherOne from './getWeatherOne';
import getWeatherTwo from './getWeatherTwo';

export default combineReducers({
	getWeatherOne,
	getWeatherTwo
})