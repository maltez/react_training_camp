import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({type, handleChange}) => {
	return (
		<select onChange={handleChange}>
			{type.map((item, index) => <option key={index}>{item}</option>)}
		</select>
	)
};

Filter.propTypes = {
	handleChange: PropTypes.func.isRequired,
	type: PropTypes.array.isRequired
};

export default Filter;