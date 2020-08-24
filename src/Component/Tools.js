import React from 'react';
import './../Resources/css/App.css';

import icon from './../Resources/svg/icon1.svg'
import binocularsfill from './../Resources/svg/binoculars-fill.svg'

class Tools extends React.Component {

  render(){
    return (
      <div className="home">
          Tools :<br/>
          <a href="#" className="icon-link">
            <img src={icon} className="icon-tool" alt="Costam"/>
          </a>
          <a href="#" className="icon-link">
            <img src={binocularsfill} className="icon-tool" alt="Costam"/>
          </a>
          <a href="#" className="icon-link">
            <img src={icon} className="icon-tool" alt="Costam"/>
          </a>
          <a href="#" className="icon-link">
            <img src={binocularsfill} className="icon-tool" alt="Costam"/>
          </a>
          <a href="#" className="icon-link">
            <img src={icon} className="icon-tool" alt="Costam"/>
          </a>
          <a href="#" className="icon-link">
            <img src={binocularsfill} className="icon-tool" alt="Costam"/>
          </a>


      </div>
    );
  }
}

export default Tools;