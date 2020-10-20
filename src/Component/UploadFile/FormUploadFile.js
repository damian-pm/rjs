import React from 'react';
import './../../Resources/css/index.scss';
import axios from 'axios';

class FormUploadFile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }
  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
      console.log(event.target.files[0])

  }
  onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.log(data)

        axios.post("123http://localhost:8000/upload", data, { 
          'Access-Control-Allow-Origin': '*'
            // receive two    parameter endpoint url ,form data
        })
        .then(res => { // then print response status
            // console.log(res.status);
            console.log('Status zaladowanego pliku:' + res.status)
        })
    }
  render(){
    return (
      <div className="about">
          UploadFile
          <input type="file" name="file" onChange={this.onChangeHandler}/>
          <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 

      </div>
    );
  }
}

export default FormUploadFile;
