import React from 'react';
import { isArray } from 'util';

const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// typescript renommer alphabet rapport au type
const alphabet_: string[] = [...alphabet]

console.log(isArray( alphabet_ ), alphabet_);

const Keyboard = () => {
  const clavier: JSX.Element = (
    <div className="keyboard_container">
      {
        alphabet_.map( (letter,idx) =>
          (
            <span key={idx}>{letter}</span>
          )
        )
      }
    </div>
  )
  return clavier
}


export default Keyboard