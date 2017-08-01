import React, { Component } from 'react';

import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

export class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentList: []
        };

        this.onPostComment = this.onPostComment.bind(this);
    }

    onPostComment(comment) {
        if (!comment)
            return;

        this.state.commentList.push(comment);
        this.setState({commentList: this.state.commentList});
    }

    render() {
        return (
            <div>
                <h2>CommentList</h2>
                <div className="six columns">
                    <CommentForm onSubmit={this.onPostComment} />
                </div>
                <div className="six columns">
                        {this.state.commentList.map(comment => <Comment comment={comment} />)}
                </div>
            </div>
        );
    }
}