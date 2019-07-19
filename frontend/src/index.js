import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';
import Register from './Register'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
const routing = (
  <Router>
    <div>
      <Route  path="/" exact = {true} component={App} />
      <Route path='/signin' exact ={true} component={SignIn} />
      <Route path='/register' exact ={true} component={Register} />
    </div>
  </Router>);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 