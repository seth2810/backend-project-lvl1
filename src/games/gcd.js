import { print } from '../helpers/io.js';
import { randomInteger, gcd } from '../helpers/math.js';
import { createGame, createIterativeGame, createQuestionAnswerStep } from '../helpers/game.js';

const rules = () => {
  print('Find the greatest common divisor of given numbers.');
};

const step = () => {
  const a = randomInteger();
  const b = randomInteger();
  const question = `${a} ${b}`;
  const answer = `${gcd(a, b)}`;

  return [question, answer];
};

export default createGame(rules, createIterativeGame(createQuestionAnswerStep(step)));
