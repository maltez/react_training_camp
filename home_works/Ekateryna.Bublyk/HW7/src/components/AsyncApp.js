import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchField from './SearchField';

import WeatherOne from './WeatherOne';
import WeatherTwo from './WeatherTwo';
import Difference from './Difference';

import {getWeatherOne, getWeatherTwo} from '../../selectors';

class AsyncApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ""
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(country) {
		this.setState({country});
	}

	countDifference(value1 = 0, value2 = 0) {
		return value1 - value2;
	}

	render() {
		let {getWeatherOne, getWeatherTwo} = this.props;
		return(
			<div>
				<SearchField inputValue={this.state.inputValue} onDOMChange={this.onSubmit}/>
				<div className="container">
					<WeatherOne name={getWeatherOne.name || 'name'} tmp={getWeatherOne.tmp || 0} wind={getWeatherOne.wind || 0}/>
					<WeatherTwo name={getWeatherTwo.name || 'name'} tmp={getWeatherTwo.tmp || 0} wind={getWeatherTwo.wind || 0}/>
				</div>
				<Difference value={this.countDifference(getWeatherOne.wind, getWeatherTwo.wind)}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	getWeatherOne: getWeatherOne(state),
	getWeatherTwo: getWeatherTwo(state)
});

export default connect(mapStateToProps)(AsyncApp);