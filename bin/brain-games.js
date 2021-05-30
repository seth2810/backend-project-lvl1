#!/usr/bin/env node

import readline from 'readline-sync';

console.log('Welcome to the Brain Games!');

const player = readline.question('May I have your name? ');

console.log(`Hello, ${player}!`);
