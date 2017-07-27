import {SEARCH_COUNTRY_SUCCESS} from '../actionTypes';

const init = {
	main: {
		temp: 0
	},
	wind: {
		speed: ''
	}
};

export default (state = init, {type, payload}) => {
	switch (type) {
		case SEARCH_COUNTRY_SUCCESS:
			return Object.assign({}, state, payload.weather2
			);
		default:
			return state;
	}
}
