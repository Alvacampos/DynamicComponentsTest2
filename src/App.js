import React, { Component } from 'react';
import Validation from './Validation';
import CharComponent from './CharComponent';
import './App.css';

class App extends Component {
  state = {
    userInput: '',
    power: 0
  }

  lengthInput = (event) => {
    let word = event.target.value;
    let wordLength = word.length;
    this.setState({userInput: word});
    this.setState({power: wordLength});
  }

  deleteItem = (index) => {
    let newItem = this.state.userInput.split('');
    newItem.splice(index,1);    
    this.setState({userInput: newItem.join('')});    
  }

  render() {
    let component = this.state.userInput.split('').map((element,index) => {
      return(
        <CharComponent 
          item = {element} 
          click = {() => this.deleteItem(index)}
        />
      );
    })
    return (
      <div className="App">
        <h1>You input a password, the app will tell you if its strong or weak depending on the length, 
        then that password will be turned into an array of individual components and you can dynamically change it</h1>
        <Validation power = {this.state.power}>
          <input 
            type="text" onChange = { (event) => this.lengthInput(event) } 
            value = {this.state.userInput}
          />
          <p>{this.state.userInput}</p>       
        </Validation>
        {component}
      </div>
    );
  }
}

export default App;
