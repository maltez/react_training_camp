/**
 * Created by Eugen_EVK on 20-Jul-17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// const p = React.createElement(
// 	'p',
// 	{ id: 'id_002'},
// 	'This is paragraph'
// );
//
// const h1 = React.createElement(
// 	'h1',
// 	{ id: 'id_001' },
// 	'Hello, REACT!'
// );
//
// const div = React.createElement(
// 	'div',
// 	{ id: 'id_003' },
// 	p, h1
// );

// ReactDOM.render(
// 	div,
// 	document.getElementById('app'),
// 	()=> console.log('Rendered!')
// );

// function tick () {
// 	const date = new Date();
// 	const  root = React.createElement(
// 		'h1',
// 		null,
// 		`${date}`
// 	);
//
// 	ReactDOM.render(
// 		root,
// 		document.getElementById('app'),
// 		()=> console.log('Rendered!')
// 	);
// }
//
// setInterval(tick, 1000);

const render = function () {
	const data = new Date();
	
	const root = <div>
		<h1>Hello!</h1>
		<p>This is JSX</p>
		<p>{data.toString()}</p>
	</div>;
	
	ReactDOM.render(
		root,
		document.getElementById('app'),
		()=> console.log('Rendered!')
	);
};

setInterval(render, 1000);
