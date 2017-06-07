import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import UserDreams from './UserThread/UserDreams';
import LoginPage from './LoginPage/component/LoginPage';
import RegistrationPage from './LoginPage/component/RegistrationPage';

const Routes = (props) => (
 <BrowserRouter {...props}>
   <div>
   	<Switch>
   		<Route exact path="/" component={App} />
   		<Route path="/dreams" component={UserDreams} />
   		<Route path="/login" component={LoginPage} />
   		<Route path="/register" component={RegistrationPage} />
   	</Switch>
   </div>
 </BrowserRouter>
);

export default Routes;