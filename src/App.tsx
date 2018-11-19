import React, { Component } from 'react';
import Keyboard from './Keyboard';

import './App.css';

// function handleKeyClick() {
//   console.log('handleKeyClick');
// }
class App extends Component {
  state = {
    letters: [],
    idxIsClicked: [],
  }
  constructor (props:any) {
    super(props)
    this.handleKeyClick = this.handleKeyClick.bind(this)
  }
  handleKeyClick(letter:string, idx: number) {
    const letters:string[] = this.state.letters
    const idxIsClicked:number[] = this.state.idxIsClicked
    // add clicked letter to letters and setstate
    letters.push(letter)
    console.log(typeof letters, typeof letter);
    this.setState({letters: letters})
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
