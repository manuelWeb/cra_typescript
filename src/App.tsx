import React, { Component } from 'react';
import Keyboard from './Keyboard';

import './App.css';

// function hello() {
//   console.log('hello');
// }
class App extends Component {
  constructor (props:any) {
    super(props)
    this.hello = this.hello.bind(this)
  }
  hello(letter:string, idx: number) {
    // console.log('hello');
    console.log(letter, idx)
    return letter
  }

  render() {
    return (
      <div className="App">
        <Keyboard onClick={this.hello} />
        {/* <Keyboard /> */}
      </div>
    );
  }
}

export default App;
