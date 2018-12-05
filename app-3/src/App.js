import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state ={ food:[
      'spagetti',
      'ice cream',
      'sushi',
      'bologna',
      'cheese'
    ],
    input: ''
  }
  }



  render() {
    return (
      <div className="App">
        <input onChange={e => this.setState({input: e.target.value})}></input>
      </div>
    );
  }
}

export default App;
