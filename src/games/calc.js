import pairs from '@hexlet/pairs';

import { print } from '../helpers/io.js';
import { randomInteger } from '../helpers/math.js';
import { createGame, createIterativeGame, createQuestionAnswerStep } from '../helpers/game.js';

const rules = () => {
  print('What is the result of the expression?');
};

const operations = [
  pairs.cons('+', (a, b) => a + b),
  pairs.cons('-', (a, b) => a - b),
  pairs.cons('*', (a, b) => a * b),
];

const step = () => {
  const a = randomInteger();
  const b = randomInteger();
  const op = operations[randomInteger(0, operations.length - 1)];
  const sign = pairs.car(op);
  const fn = pairs.cdr(op);
  const question = `${a} ${sign} ${b}`;
  const answer = `${fn(a, b)}`;

  return [question, answer];
};

export default createGame(rules, createIterativeGame(createQuestionAnswerStep(step)));
