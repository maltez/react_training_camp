import React, { Component } from 'react';

export class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return (
            <div className="row">
                <img src={this.state.comment.avatarUrl} style={{borderRadius: 50 + '%', maxWidth: 50 + 'px', marginRight: 20 + 'px', verticalAlign: 'middle'}} alt="" />
                <span style={{verticalAlign: 'middle'}}>{this.state.comment.name}</span><br />
                <p style={{fontSize: 18 + 'px', marginTop: 10 + 'px', marginLeft: 10 + 'px'}}>{this.state.comment.message}</p>
            </div>
        );
    }
}