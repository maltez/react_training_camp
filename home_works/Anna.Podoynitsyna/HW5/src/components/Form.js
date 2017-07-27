import React, {Component} from 'react';

class FormList extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		if ((this.inputVal.value).trim() != "") {
			this.props.onDOMChange(this.inputVal.value);
			this.inputVal.value = "";
		}
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input type="text" ref={(input) => this.inputVal = input}/>
				<button type="submit">Save</button>
			</form>
		)
	}
}

export default FormList;