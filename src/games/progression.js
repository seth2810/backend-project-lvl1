import { print } from '../helpers/io.js';
import { randomInteger, progression } from '../helpers/math.js';
import { createGame, createIterativeGame, createQuestionAnswerStep } from '../helpers/game.js';

const rules = () => {
  print('What number is missing in the progression?');
};

const step = () => {
  const sequence = progression(randomInteger(), randomInteger(), 10);
  const index = randomInteger(1, sequence.length - 1);
  const [number] = sequence.splice(index, 1, '..');
  const question = sequence.join(' ');
  const answer = `${number}`;

  return [question, answer];
};

export default createGame(rules, createIterativeGame(createQuestionAnswerStep(step)));
