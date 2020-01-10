import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';
import Register from './Register'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamPage from './TeamPage';
import PowerPlayer from './PowerPlayer';
import Dashboard from './Dashboard';
const routing = (
  <Router>
    <div>
      <Route  path="/" exact = {true} component={App} />
      <Route path='/signin' exact ={true} component={SignIn} />
      <Route path='/register' exact ={true} component={Register} />
      <Route path='/home' exact ={false} component={Home} />
      <Route path = '/playing11' exact = {false} component = {TeamPage}/>
      <Route path = '/powerplayer' exact = {false} component = {PowerPlayer}/>
      <Route path = '/dashboard' exact = {true} component = {Dashboard}/>
    </div>
  </Router>);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 