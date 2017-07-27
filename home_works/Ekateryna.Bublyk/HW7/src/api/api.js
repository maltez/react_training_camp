import config from '../helpers/config';

export const getWeatherByCountry = (cityName, countryName) => {
	let urls = [`${config.url1}${countryName}/${cityName}.json`, `${config.url2}/${cityName}`];

	return Promise.all(urls.map(url => fetch(url)
		.then(res => res.ok ? res.json() : Promise.reject(res.statusText))))
		.catch((error) => {
			return Promise.reject(error.message)
		});
};
