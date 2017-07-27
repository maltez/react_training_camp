import {
	SEARCH_COUNTRY_START,
	SEARCH_COUNTRY_SUCCESS,
	SEARCH_COUNTRY_FAILURE
	} from '../actionTypes';

import {getWeatherByCountry as getWeatherByCountryApi} from '../api/api';

export const getWeatherByCountry = (city, country) => async dispatch => {
	dispatch({type: SEARCH_COUNTRY_START});

	try {
		const weather = await getWeatherByCountryApi(city, country);
		dispatch({
			type: SEARCH_COUNTRY_SUCCESS,
			payload: {weather1: weather[0].current_observation, weather2: weather[1]}
		})
	} catch (err) {
		dispatch({
			type: SEARCH_COUNTRY_FAILURE,
			payload: err,
			error: true
		})
	}
};