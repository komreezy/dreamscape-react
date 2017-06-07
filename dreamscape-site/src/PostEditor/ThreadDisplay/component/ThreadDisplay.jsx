import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Post from '../../../Post/component/Post';
import UserProfile from '../../../UserProfile/UserProfile';
import '../styles/ThreadDisplay.css';

/**
 *	passed in the firebase database reference into props
 */
class ThreadDisplay extends Component {
	constructor(props) {
	    super(props);

	    // make database reference the posts feed + bind functions
	    this.databaseRef = this.props.database.ref().child('feed');
	    this.addPost = this.addPost.bind(this);
	    this.updateLocalState = this.updateLocalState.bind(this);
	    this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleModalInputChange = this.handleModalInputChange.bind(this);
        this.createPost = this.createPost.bind(this);

	    // state to hold the posts we want to display
	    this.state = {
	      posts: [],
	      modalIsOpen: false,
	      newPostBody: ''
	    };
	}

	componentWillMount() {
		const {updateLocalState} = this;
		this.databaseRef.on('child_added', snapshot => {
			const response = snapshot.val();
			updateLocalState(response);
		});
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.refs.subtitle.style.color = '#f00';
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	/**
	 * pass in text and create JSON to pass to firebase database 
	 */
	addPost(postBody) {
		this.databaseRef.push().set({
			author: "Komran Ghahremani",
			text: postBody,
			title: "Floating City",
			date: "March 26, 2020",
			upvotes: 0,
			downvotes: 0,
		});
	}

	createPost() {
		this.addPost(this.state.newPostBody);
		this.setState({
		  	newPostBody: '',
		});
	}

	handleModalInputChange(ev) {
		this.setState({
		  	newPostBody: ev.target.value
		});
	}

	/** 
	 * local state needs to change to display new post
	 * take in response from firebase and break down the post then add it to the current posts
	 */
	updateLocalState(response) {
		const posts = this.state.posts;
		const name = response.author.split(/[\r\n]/g);
		const text = response.text.split(/[\r\n]/g);
		const date = response.date.split(/[\r\n]/g);
		const title = response.title.split(/[\r\n]/g);
		const post = {
			name: name,
			text: text,
			title: title,
			date: date,
		};

		posts.push(post);
		this.setState({
			posts: posts,
		});
	}

	/**
	 * return div with all of the posts - map over the posts in current state
	 * create Post component for each - passing in the text to each
	 * have PostEditor after that passes in the addPost function to have as callback
	 */
	render() {
		const customStyles = {
			overlay : {
				position          : 'fixed',
				backgroundColor   : 'rgba(0, 0, 0, 0.75)'
			},
			content : {
				top: '30%',
				left: '50%',
				right: 'auto',
				bottom: 'auto',
				marginRight: '-50%',
				transform: 'translate(-50%, -50%)',
				width: 850,
				height: 400,
				backgroundColor: '#222326',
				borderColor: 'rgba(0, 0, 0, 0.75)',
			}
		};

		return (
			<div>
				<Modal
				isOpen={this.state.modalIsOpen}
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.closeModal}
				style={customStyles}
				contentLabel="Example Modal"
				>
					<h4 id="compose-header">What were you dreaming?</h4>
					<textarea id="new-post-text" value={this.state.newPostBody} onChange={this.handleModalInputChange}>
					</textarea>
					<button className="btn btn-success post-editor-button" id="submit-dream" onClick={this.createPost}>Submit</button>
				</Modal>
				<div className="header">
					<div id="spacer"></div>
					<div className="row">
						<div className="col-xs-3" id="nav-button">
							<a><Link to="/">Home</Link></a>
						</div>
						<div className="col-xs-4" id="nav-button">
							<a><Link to="/dreams">Dreams</Link></a>
						</div>
						<div className="col-xs-5" id="nav-button">
							<a><Link to="/upvotes">Upvotes</Link></a>
						</div>
						<button id="submit-dream" className="btn btn-success post-editor-button" onClick={this.openModal}>Post</button>
					</div>
				</div>
				<div className="layout">
					<div className="user">
						<UserProfile />
					</div>
					<div className="thread">
				    { 
				      this.state.posts.map((postBody, idx) => {
				        return (
				          <Post key={idx} postBody={postBody} />
				        )
				      })
				    }
				  	</div>
				</div>
			</div>
		);
	}	
}

export default ThreadDisplay;