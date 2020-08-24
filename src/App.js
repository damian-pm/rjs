import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './Resources/css/App.css'
import './Resources/css/index.scss'

import logo from './Resources/svg/logo.svg'
import About from './Component/About'
import Home from './Component/Home'
import Tools from './Component/Tools';
import UploadFile from './Component/UploadFile/UploadFile';

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
                    <Link to="/home">Home</Link> -
                    <Link to="/about">About</Link> -
                    <Link to="/upload">UploadFile</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <Tools />
                </div>
                <div className="col-6">
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/upload" component={UploadFile} />
                </div>
              </div>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
