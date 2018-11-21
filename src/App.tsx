import React, { Component } from 'react';
import Keyboard from './Keyboard';

import './App.css';

function handleKeyClick ( this: any, letter:string, idx: number ): void {
  const letters:string[] = this.state.letters
  const idxIsClicked:number[] = this.state.idxIsClicked
  // add clicked letter to letters and setstate
  letters.push(letter)
  console.log(`typeof letters:${typeof letters }`, `typeof letter:${typeof letter} letters:${letters} idx: ${idx}`);
  this.setState({letters: letters})
  this.setState({idxIsClicked: letters})
}

// interface ITestProps {
//   onClick: ( arg: any ) => void,
// }
function test(arg3:string,secArg?: App) {
  // console.log(`secArg: ${secArg}`);
  console.log(arg3);
  console.log(`secArg:`,secArg);
  // console.log(secArg.state);
  console.log({...secArg});
}

class App extends Component {
  state = {
    letters: [],
    idxIsClicked: [],
  }
  constructor (props:{}) {
    super(props)
    // this.handleKeyClick = this.handleKeyClick.bind(this)
    // this.handleKeyClick = handleKeyClick.bind(this)
  }

  render() {
    return (
      <div className="App">
        <Keyboard onClick={handleKeyClick.bind(this)} />
        <br />
        <div onClick={ () => test('___',this) }>Test</div>
        {/* <Keyboard /> */}
      </div>
    );
  }
}

export default App;
