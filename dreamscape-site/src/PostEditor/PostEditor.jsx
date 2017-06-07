import React, { Component } from 'react';
import '../styles/PostEditor.css';

class PostEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newPostBody: '',
		};

		this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
		this.createPost = this.createPost.bind(this);
	}

	handlePostEditorInputChange(ev) {
		this.setState({
		  	newPostBody: ev.target.value
		});
	}

	createPost() {
		this.props.addPost(this.state.newPostBody);
		this.setState({
			newPostBody: '',
		});
	}

	/**
	 * put text from textarea in newPostBody in state onChange
	 * have addPost passed in from props for button onClick
	 * reset post body after post added
	 */
	render() {
		return (
			<div className="panel panel-default post-editor">
	          <div className="panel-body">
	            Whats UP
	          </div>
	        </div>
		)
	}
}

export default PostEditor;