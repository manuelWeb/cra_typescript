import React, { Component } from 'react';
import Keyboard from './Keyboard';

import './App.css';

class App extends Component {
  // constructor (props:any) {
  //   super(props)
  //   this.hello = this.hello.bind(this)
  // }

  hello() {
    console.log('hello');
  }
  render() {
    return (
      <div className="App">
        {/* <Keyboard onClick={this.hello} /> */}
        <Keyboard maProp={this.hello} />
      </div>
    );
  }
}

export default App;
