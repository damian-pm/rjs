import React from 'react';
import './../../Resources/css/index.scss';
import axios from 'axios';

class UploadFile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }

  render(){
    return (
      <div className="uuuu">
          UploadFile Z formularza

      </div>
    );
  }
}

export default UploadFile;