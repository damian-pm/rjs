import React from 'react';
import './../Resources/css/App.css';

class Home extends React.Component {
  constructor(){
    super();
  
  }
  render(){
    console.log(this.props)
    return (
      <div className="home">
          Home {this.props.slug}
      </div>
    );
  }
}

export default Home;