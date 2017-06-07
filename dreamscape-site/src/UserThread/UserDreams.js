import React, { Component } from 'react';
import UserThread from './UserThread';
import firebase from 'firebase/app';
import 'firebase/database';

class UserDreams extends Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: "AIzaSyD-De4Lq6Ce_kwUU67aU1ez_vjVy9X3EHw",
      authDomain: "dreaming.firebaseapp.com",
      databaseURL: "https://dreaming.firebaseio.com",
      projectId: "project-8108278811351247858",
      storageBucket: "project-8108278811351247858.appspot.com",
      messagingSenderId: "124393910505" 
    };

    // create the config for the app then init and create database reference
    this.app = firebase.initializeApp(config);
    this.database = this.app.database();

    this.state = {
      path:props.path,
      database: this.database,
    };
  };

  render() {
    return (
      <div className="UserDreams">
        <UserThread database={this.database} />
      </div>
    );
  }
}

export default UserDreams;
