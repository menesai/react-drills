import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      user:'',
      pasword:'',
    }
  }

  handleLogin(){
    alert( `user:${this.state.user} pasword:${this.state.pasword}`)
  }

  render() {
    return (
      <div className="App">
      <input onChange={e => this.setState({user: e.target.value})}></input>
      <input onChange={e => this.setState({password: e.target.value})}></input>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default App;
