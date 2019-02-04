import React, { Component } from 'react';

import {Route, NavLink} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-links">
          <NavLink exact to="/story-form">Share Your Story</NavLink>
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/login">Admin Login</NavLink>
        </div>
        
      </div>
    );
  }
}

export default App;
