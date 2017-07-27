export const getWeatherOne = state => {
	return {name: state.getWeatherOne.display_location.city, tmp: state.getWeatherOne.temp_f, wind: state.getWeatherOne.wind_degrees};
};
export const getWeatherTwo = state =>{
	return {name: state.getWeatherTwo.name, tmp: state.getWeatherTwo.main.temp, wind : state.getWeatherTwo.wind.speed};
};
