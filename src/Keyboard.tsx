import React, { ClassType } from 'react';
import { isArray } from 'util';

const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// typescript renommer alphabet rapport au type
const alphabet_: string[] = [...alphabet]

console.log(isArray( alphabet_ ), alphabet_);

interface IPropsKeyboard {
  // si ret num + string // onClick: (props:string, idx: number) => number | string,
  onClick: ( letter: string, idx: number ) => void,
}

const Keyboard = ({onClick}: IPropsKeyboard) => {
  const clavier: JSX.Element = (
    <div className="keyboard_container">
      {
        alphabet_.map( (letter,idx) =>
          (
            <span key={idx} onClick={() => onClick(letter, idx)}>{letter}</span>
          )
        )
      }
    </div>
  )
  return clavier
}


export default Keyboard