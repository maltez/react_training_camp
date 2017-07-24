/**
 * Created by Eugen_EVK on 24-Jul-17.
 */
import React from 'react';

class Comment extends React.Component {
	render () {
		return (
			<li>
				<div className="commenterImage">
					<img src={ this.props.avatar } />
				</div>
				<div className="commentText">
					<p className=""><em>{ this.props.name }</em></p>
					<p className="">{ this.props.commentText }</p>
					<span className="date sub-text">{ this.props.commentDate }</span>
				</div>
			</li>
		);
	}
}

Comment.propTypes = {
	avatar: React.PropTypes.string,
	name: React.PropTypes.string,
	commentText: React.PropTypes.string,
	commentDate: React.PropTypes.string,
};


export default Comment;