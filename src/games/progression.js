import { createGame } from '../helpers/game.js';
import { randomInteger } from '../helpers/math.js';

const rules = 'What number is missing in the progression?';

const progression = (start, diff, length) => {
  const sequence = Array.from({ length });
  return sequence.map((_, index) => start + (diff * index));
};

const generateRoundData = () => {
  const sequence = progression(randomInteger(), randomInteger(), 10);
  const index = randomInteger(1, sequence.length - 1);
  const [number] = sequence.splice(index, 1, '..');
  const question = sequence.join(' ');
  const answer = `${number}`;

  return [question, answer];
};

export default createGame(rules, generateRoundData);
