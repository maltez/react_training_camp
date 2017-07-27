/**
 * Created by Eugen_EVK on 24-Jul-17.
 */
import React from 'react';
import Comment from './Comment';

import { COMMENTS, USERS } from '../data';


class CommentList extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			comments: COMMENTS.map( c => {
				const user = USERS.find( u => u.id === c.userId ) || USERS[0];
				
				return {
					avatar: user.avatar,
					name: user.name,
					commentText: c.cText,
					commentDate: c.cDate
				};
			})
		};
	}
	
	componentWillReceiveProps (nextProps) {
		const comments = [...this.state.comments];
		const user = USERS.find( u => u.name === nextProps.newComm.name ) || USERS[0];
		
		comments.push({
			avatar: user.avatar,
			name: nextProps.newComm.name,
			commentText: nextProps.newComm.commentText,
			commentDate: nextProps.newComm.commentDate
		});
		
		this.setState({ comments });
	}
	
	render () {
		return (
			<div>
				<ul>
					{
						this.state.comments.map( (c, i) => <Comment key={i} {...c} /> )
					}
				</ul>
				<hr/>
			</div>
		);
	}
}



export default CommentList;