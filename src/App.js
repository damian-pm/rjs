import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Project - Photo editor - testy
          </p>
          <img src={logo} className="App-logo" alt="logo" /> 
          
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {/* < About /> */}
        <div className="container">
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>

        </header>
      </div>
    );
  }
}

export default App;
