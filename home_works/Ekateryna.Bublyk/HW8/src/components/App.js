import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputField from './InputField';

import {getNextFactorial, getPreviousFactorial, getCurrentFactorial} from '../actions/getFactorial';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: 2
		};

		this.handleChange = this.handleChange.bind(this);
		this.setNextFactorial = this.setNextFactorial.bind(this);
		this.setPreviousFactorial = this.setPreviousFactorial.bind(this);
		this.setCurrentFactorial = this.setCurrentFactorial.bind(this);
	}

	handleChange(event) {
		this.setState({inputValue: event.target.value});
	}

	setNextFactorial() {
		this.props.getNextFactorial(this.state.inputValue);
	}

	setPreviousFactorial() {
		this.props.getPreviousFactorial(this.state.inputValue);
	}

	setCurrentFactorial() {
		this.props.getCurrentFactorial(this.state.inputValue);
	}

	render() {
		return (
			<div>
				<InputField value={this.state.inputValue} handleChange={this.handleChange}/>
				<div className="block">
					<button onClick={this.setCurrentFactorial}>Get factorial</button>
					<div>Factorial of current integer number: {this.props.currentValue}</div>
				</div>
				<div className="block">
					<button onClick={this.setNextFactorial}>Get factorial</button>
					<div>Factorial of next integer number: {this.props.nextValue}</div>
				</div>
				<div className="block">
					<button onClick={this.setPreviousFactorial}>Get factorial</button>
					<div>Factorial of previous integer number: {this.props.previousValue}</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = {
	getNextFactorial,
	getPreviousFactorial,
	getCurrentFactorial
};

const mapStateToProps = (state) => ({
	nextValue: state.factorial.nextValue,
	previousValue: state.factorial.previousValue,
	currentValue: state.factorial.currentValue
});

export default connect(mapStateToProps, mapDispatchToProps)(App);