import React from 'react';
import { isArray } from 'util';

const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const alphabet_: srting[] = [...alphabet]
// const alphabet_: string[] = alphabet.split('')
const alphabet_: any = [...alphabet]
// alphabet_.push(alphabet)

console.log(isArray( alphabet_ ), alphabet_);

const Keyboard = () => (
  <span>{alphabet}</span>
)

export default Keyboard