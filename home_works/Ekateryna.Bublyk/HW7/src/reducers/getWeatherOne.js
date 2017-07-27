import {SEARCH_COUNTRY_SUCCESS} from '../actionTypes';

const init = {
	display_location: {
		city: ''
	},
	main:{
		temp: {}
	}
};

export default (state = init, {type, payload}) => {
	switch (type) {
		case SEARCH_COUNTRY_SUCCESS:
			return Object.assign({}, state, payload.weather1);
		default:
			return state;
	}
}
