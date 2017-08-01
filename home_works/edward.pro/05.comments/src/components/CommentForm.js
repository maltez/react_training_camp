import React, { Component } from 'react';

export class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            avatarUrl: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAvatar = this.onChangeAvatar.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }

    onChangeName(event) {
        event.preventDefault();
        this.setState({name: event.target.value});
    }

    onChangeAvatar(event) {
        event.preventDefault();
        this.setState({avatarUrl: event.target.value});
    }

    onChangeMessage(event) {
        event.preventDefault();
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="six columns">
                        <div className="row">
                            <label htmlFor="nameInput">Your name</label>
                            <input className="u-full-width" type="text" name="name" onChange={this.onChangeName} placeholder="Name" id="nameInput" />
                        </div>
                        <div className="row">
                            <label htmlFor="avatarUrl">Avatar url</label>
                            <input className="u-full-width" type="url" name="avatarUrl" onChange={this.onChangeAvatar} placeholder="http://..." id="avatarUrl" />
                        </div>
                        <div className="row">
                            <label htmlFor="message">Message</label>
                            <textarea className="u-full-width" placeholder="Message..." onChange={this.onChangeMessage} id="message"></textarea>
                        </div>
                        <div className="row">
                            <input className="button-primary" type="submit" onClick={this.handleSubmit} value="Submit" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}