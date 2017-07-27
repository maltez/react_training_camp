import React, {Component} from 'react';

const WeatherTwo = ({name, tmp, wind}) => {
	return (
		<div className="country-block">
			<h1>Country Name: {name}</h1>
			<h2>Tmp: {tmp}</h2>
			<h3>Wind degrees: {wind}</h3>
		</div>
	)
};

export default WeatherTwo;