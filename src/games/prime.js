import { createGame } from '../helpers/game.js';
import { randomInteger } from '../helpers/math.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundData = () => {
  const number = randomInteger();
  const answer = isPrime(number) ? 'yes' : 'no';

  return [number, answer];
};

export default createGame(rules, generateRoundData);
