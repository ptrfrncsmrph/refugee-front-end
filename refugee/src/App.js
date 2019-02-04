import React, { Component } from 'react';

import {Route, NavLink} from 'react-router-dom';

import LoginView from './Views/LoginView';
import StoryFormView from './Views/StoryFormView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">Home</NavLink>

            <NavLink exact to="/story-form">Share Your Story</NavLink>
            
            <NavLink exact to="/login">Admin Login</NavLink>
          </div>
        </nav>

        <Route exact path="/login"
          render={props => <LoginView {...props} /> }
        />
        
        <Route exact path="/story-form"
          render={props => <StoryFormView {...props} />}
        />

      </div>
    );
  }
}

export default App;
