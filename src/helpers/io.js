import readline from 'readline-sync';

export const print = (text) => console.log(text);
export const ask = (text) => readline.question(text);

export const welcome = () => print('Welcome to the Brain Games!');
export const askName = () => ask('May I have your name? ');
export const greet = (name) => print(`Hello, ${name}!`);
export const printQuestion = (question) => print(`Question: ${question}`);
export const askAnswer = () => ask('Your answer: ');
export const congrats = (name) => print(`Congratulations, ${name}!`);
export const handleCorrect = () => print('Correct!');
export const handleWrong = (actual, expected) => print(`"${actual}" is wrong answer ;(. Correct answer was "${expected}".`);
export const tryAgain = (player) => print(`Let's try again, ${player}!`);
