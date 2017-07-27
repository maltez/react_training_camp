import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getWeatherByCountry} from '../actions/searchCountry';

class SearchField extends Component {
	constructor(props) {
		super(props);

		this.sendComment = this.sendComment.bind(this);
	}

	sendComment(e) {
		e.preventDefault();
		if (this.cityInput.value != "" && this.countryInput.value != "") {
			this.props.getWeatherByCountry(this.cityInput.value, this.countryInput.value);
			this.cityInput.value = "";
			this.countryInput.value = "";
		}
	}

	render() {
		return (
			<form className="inputCmnt" onSubmit={this.sendComment}>
				<p><lable>Country (UA, AT)<input type="text" ref={(input) => this.countryInput = input}/></lable></p>
				<p><lable>City (Odessa, Vienna)<input type="text" ref={(input) => this.cityInput = input}/></lable></p>
				<button type="submit">Send Comment</button>
			</form>
		)
	}
}


const mapDispatchToProps = {
	getWeatherByCountry
};

export default connect(null, mapDispatchToProps)(SearchField);