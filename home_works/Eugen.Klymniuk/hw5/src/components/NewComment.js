/**
 * Created by Eugen_EVK on 24-Jul-17.
 */
import React from 'react';

class NewComment extends React.Component {
	
	addComment (e) {
		e.preventDefault();
		
		const comment = this.comment.value;
		const name = this.name.value;
		
		if (comment.length) {
			this.props.add({ comment, name });
			this.comment.value = '';
			this.name.value = '';
		}
	}
	
	render () {
		return (
			<form className="form-inline" role="form">
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="Your comments"
					    ref={ input => this.comment = input } />
				</div>
				<div className="form-group">
					<button
						className="btn btn-default"
						onClick={ this.addComment.bind(this) }>
						Add
					</button>
				</div>
				<br/><br/>
				<input
					className="form-control"
					type="text"
					placeholder="Your name"
					ref={ input => this.name = input } />
			</form>
			
		);
	}
}


export default NewComment;
