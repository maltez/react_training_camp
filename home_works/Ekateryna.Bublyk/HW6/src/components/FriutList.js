import React, {Component} from 'react';
import PropTypes from 'prop-types';

const FruitList = ({list, removeFruit}) => {
	return (
		<ul>
			{list.map(item => <li key={item.id}><img src={item.img} /> {item.name} <button onClick={() => removeFruit(item.id)}>Remove</button></li>)}
		</ul>
	)
};

FruitList.propTypes = {
	removeFruit: PropTypes.func.isRequired,
	list: PropTypes.array.isRequired
};


export default FruitList;