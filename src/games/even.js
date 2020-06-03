import { print } from '../helpers/io.js';
import { randomInteger, isEven } from '../helpers/math.js';
import { createGame, createIterativeGame, createQuestionAnswerStep } from '../helpers/game.js';

const rules = () => {
  print('Answer "yes" if the number is even, otherwise answer "no".');
};

const step = () => {
  const number = randomInteger();
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};

export default createGame(rules, createIterativeGame(createQuestionAnswerStep(step)));
