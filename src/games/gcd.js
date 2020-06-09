import { buildGame } from '../engine.js';
import { randomInteger } from '../helpers/math.js';

const rulesDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const generateRoundData = () => {
  const a = randomInteger();
  const b = randomInteger();
  const question = `${a} ${b}`;
  const answer = String(gcd(a, b));

  return [question, answer];
};

export default buildGame(rulesDescription, generateRoundData);
