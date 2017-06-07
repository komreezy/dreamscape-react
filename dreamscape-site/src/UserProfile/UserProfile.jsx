import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			"name": "Komran Ghahremani",
			"dreams": 12,
			"upvotes": 2,
		};
	}

	render() {
		return (
			<div className="master">
				<div className="container">
					<div class="row" id="row">
						<div class="panel panel-default">
							<div class="panel-body">
								<div className="user-color"></div>
								<div class="row">
									<div class="col-xs-3" id="col">
										<h5>
											<small>DREAMS</small>
											<a href="#" id="link">1,545</a>
										</h5>
									</div>
									<div class="col-xs-4" id="col">
										<h5>
											<small>UPVOTES</small>
											<a href="#" id="link">251</a>
										</h5>
									</div>
									<div class="col-xs-5" id="col">
										<h5>
											<small>FOLLOWERS</small>
											<a href="#" id="link">153</a>
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default UserProfile;