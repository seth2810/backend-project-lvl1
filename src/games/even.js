import { createGame } from '../helpers/game.js';
import { randomInteger } from '../helpers/math.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const generateRoundData = () => {
  const number = randomInteger();
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};

export default createGame(rules, generateRoundData);
