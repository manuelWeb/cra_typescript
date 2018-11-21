import React, { Component } from 'react';
import Keyboard from './Keyboard';

import './App.css';

// function handleKeyClick ( this:void, letter:string, idx: number ): void {
//   const letters:string[] = this.state.letters
//   const idxIsClicked:number[] = this.state.idxIsClicked
//   // add clicked letter to letters and setstate
//   letters.push(letter)
//   console.log(`typeof letters:${typeof letters }`, `typeof letter:${typeof letter} letters:${letters} idx: ${idx}`);
//   this.setState({letters: letters})
// }
interface ITestProps {
  onClick: ( arg: any ) => void,
}

function test(this: any, secArg?: any) {
  console.log(secArg);
  console.log(this);
}

class App extends Component {
  state = {
    letters: [],
    idxIsClicked: [],
  }
  constructor (props:{}) {
    super(props)
    this.handleKeyClick = this.handleKeyClick.bind(this)
  }
  handleKeyClick ( letter:string, idx: number ) {
    const letters:string[] = this.state.letters
    const idxIsClicked:number[] = this.state.idxIsClicked
    // add clicked letter to letters and setstate
    letters.push(letter)
    idxIsClicked.push(idx)
    console.log(`typeof letters:${typeof letters }`, `typeof letter:${typeof letter} letters:${letters} idx: ${idx}`);
    this.setState({letters: letters, idxIsClicked: idxIsClicked})
  }
  render() {
    return (
      <div className="App">
        <Keyboard onClick={this.handleKeyClick} />
        <div onClick={ () => test(this) }>Test</div>
        {/* <Keyboard /> */}
      </div>
    );
  }
}

export default App;
