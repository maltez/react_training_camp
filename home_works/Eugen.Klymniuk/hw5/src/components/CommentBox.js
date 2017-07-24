/**
 * Created by Eugen_EVK on 24-Jul-17.
 */
import React, { Component } from 'react';
import CommentList from './CommentList';
import NewComment from './NewComment';


class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.name,
			description: 'Let\'s discuss our cool course "React - Redux - Grommet"',
			newComm: null
		};
	}
	
	addNewComment ({ comment, name }) {
		const newComm = {
			name,
			commentText: comment,
			commentDate: new Date().toUTCString()
		};
		this.setState({ newComm });
	}
	
	render () {
		return (
			<div className="detailBox">
				<div className="titleBox">
					<p>{ this.state.title }</p>
				</div>
				
				<div className="commentBox">
					<label className="taskDescription">{ this.state.description }</label>
				</div>
				<div className="actionBox">
					<CommentList newComm={ this.state.newComm } />
					<NewComment add={ this.addNewComment.bind(this) } />
				</div>
			</div>
		);
	}
}


export default CommentBox;