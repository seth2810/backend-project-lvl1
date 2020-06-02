import readline from 'readline-sync';

export const print = (text) => console.log(text);
export const ask = (text) => readline.question(text);

export const greet = (name) => print(`Hello, ${name}!`);
export const askName = () => ask('May I have your name? ');
export const welcome = () => print('Welcome to the Brain Games!');
export const congrats = (name) => print(`Congratulations, ${name}!`);
