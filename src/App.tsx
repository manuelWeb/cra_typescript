import React, { Component } from 'react';
import Keyboard from './Keyboard';

import './App.css';

// function handleKeyClick() {
//   console.log('handleKeyClick');
// }
class App extends Component {
  constructor (props:any) {
    super(props)
    this.handleKeyClick = this.handleKeyClick.bind(this)
  }
  handleKeyClick(letter:string, idx: number) {
    // console.log('handleKeyClick');
    console.log(letter, idx)
    // return letter
  }

  render() {
    return (
      <div className="App">
        <Keyboard onClick={this.handleKeyClick} />
        {/* <Keyboard /> */}
      </div>
    );
  }
}

export default App;
