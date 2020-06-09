import { buildGame } from '../engine.js';
import { randomInteger } from '../helpers/math.js';

const rulesDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const generateRoundData = () => {
  const number = randomInteger();
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};

export default buildGame(rulesDescription, generateRoundData);
