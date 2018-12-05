import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      response: '',
      list: []
    }
    
  }
  onChange = (event) =>{
    this.setState({response: event.target.value});
  }
  onSubmit =(event) =>{
    event.preventDefault();
    this.setState({
      response: '',
      list: [...this.state.list, this.state.response]
    });
  }

  
  render() {
    return (
      <div>
      <form className="App" onSubmit={this.onSubmit}>
      <h1>To Do List</h1>
        <input value={this.state.response} onChange={this.onChange}></input>
        <button>Add</button>
      </form>
      <List response={this.state.response}/>
      </div>
    );
  }
}

export default App;
