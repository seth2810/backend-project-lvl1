import { print } from '../helpers/io.js';
import { randomInteger, isPrime } from '../helpers/math.js';
import { createGame, createIterativeGame, createQuestionAnswerStep } from '../helpers/game.js';

const rules = () => {
  print('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const step = () => {
  const number = randomInteger();
  const answer = isPrime(number) ? 'yes' : 'no';

  return [number, answer];
};

export default createGame(rules, createIterativeGame(createQuestionAnswerStep(step)));
