import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
global.jQuery = require('jquery');
require('bootstrap');

renderApp(window.location.pathname);

window.addEventListener('popstate', function (e) {
	renderApp(window.location.pathname);
});

function renderApp(path: string) {
	ReactDOM.render(
	  <Routes history={browserHistory} />,
	  document.getElementById('root')
	);	
}

