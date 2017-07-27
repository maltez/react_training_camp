import React, {Component} from 'react';
import FormList from './Form';

class CommentList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			value: "",
			commentList:[]
		};
		this.onSave = this.onSave.bind(this);
	}

	onSave(value) {
		this.setState({value});
		this.state.commentList.push(value);
	}

	render() {
		return(
			<div className="container">
				<img src="https://s1-ssl.dmcdn.net/Sp5Gv/1280x720-l9x.jpg" alt="funny cat" />
				<h1>Drop me a line, please</h1>
				<FormList value={this.state.inputValue} onDOMChange={this.onSave}/>
				<ul>
					{this.state.commentList.map((item, index) => <li  key={index}>{item}</li>)}
				</ul>
			</div>
		)
	}

}
export default CommentList;
