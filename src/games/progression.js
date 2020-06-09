import { buildGame } from '../engine.js';
import { randomInteger } from '../helpers/math.js';

const progressionLength = 10;

const rulesDescription = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const sequence = Array.from({ length });
  return sequence.map((_, index) => start + (step * index));
};

const generateRoundData = () => {
  const progressionFrom = randomInteger();
  const progressionStep = randomInteger();
  const progression = makeProgression(progressionFrom, progressionStep, progressionLength);
  const maskedItemIndex = randomInteger(0, progression.length - 1);
  const [number] = progression.splice(maskedItemIndex, 1, '..');
  const question = progression.join(' ');
  const answer = String(number);

  return [question, answer];
};

export default buildGame(rulesDescription, generateRoundData);
