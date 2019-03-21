import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createPost } from '../react-redux/actions/postsActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // Call Action
        this.props.createPost(post);
    }
    render() {
        return (
            <div style={{ marginLeft: 10, textAlign: 'left' }}>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label> <br />
                        <input name="title" type="text" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <div>
                        <label>Body</label> <br />
                        <textarea name="body" id="" cols="30" rows="10" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);