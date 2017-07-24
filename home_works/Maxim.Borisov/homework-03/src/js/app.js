import React from 'react';
import ReactDOM from 'react-dom';

const text = React.createElement(
	'h1',
	{
		'className': 'hello'
	},
	'Hello World!'
),
wrapper = React.createElement(
	'div',
	{
		'className': 'wrapper'
	},
	text
);

ReactDOM.render(wrapper, getElementById('app'));
