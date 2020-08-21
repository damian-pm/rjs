import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';
import { Link } from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Tools from './Component/Tools';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Project - Photo editor - testy
          </p>
          <img src={logo} className="App-logo" alt="logo" /> 
          <div className="container">
              <div className="row">
                <div className="col-sm-12">
                    <Link to="/home">Home</Link> - <Link to="/about">About</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <Tools />
                </div>
                <div className="col-6">
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </div>
              </div>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
