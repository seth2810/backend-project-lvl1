import { createGame } from '../helpers/game.js';
import { randomInteger } from '../helpers/math.js';

const rules = 'Find the greatest common divisor of given numbers.';

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
  const answer = `${gcd(a, b)}`;

  return [question, answer];
};

export default createGame(rules, generateRoundData);
