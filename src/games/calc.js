import { buildGame } from '../engine.js';
import { randomInteger } from '../helpers/math.js';

const rulesDescription = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const signs = Object.keys(operations);

const generateRoundData = () => {
  const a = randomInteger();
  const b = randomInteger();
  const sign = signs[randomInteger(0, signs.length - 1)];
  const operation = operations[sign];
  const question = `${a} ${sign} ${b}`;
  const answer = String(operation(a, b));

  return [question, answer];
};

export default buildGame(rulesDescription, generateRoundData);
