import React, {Component} from 'react';

class InputField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};
	}

	render() {
		return (
			<div>
				<label htmlFor="input-field">Input number:</label>
				<input type="text" id="input-field" value={this.props.value} onChange={this.props.handleChange}/>
			</div>
		)
	}
}

export default InputField;
