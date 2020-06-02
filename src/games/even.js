import { createGame } from '../helpers/game.js';
import { ask, print, congrats } from '../helpers/io.js';
import { randomInteger, isEven } from '../helpers/math.js';

const scoresToWin = 3;

const rules = () => {
  print('Answer "yes" if the number is even, otherwise answer "no".');
};

const showQuestion = (question) => print(`Question: ${question}`);
const askAnswer = () => ask('Your answer: ');
const handleCorrect = () => print('Correct!');
const handleWrong = (actual, expected) => print(`"${actual}" is wrong answer ;(. Correct answer was "${expected}".`);
const tryAgain = (player) => print(`Let's try again, ${player}!`);

const engine = (player) => {
  for (let score = 0; score < scoresToWin; score += 1) {
    const number = randomInteger();
    const expected = isEven(number) ? 'yes' : 'no';

    showQuestion(number);

    const answer = askAnswer();

    if (answer === expected) {
      handleCorrect();
    } else {
      handleWrong(answer, expected);
      tryAgain(player);
      return;
    }
  }

  congrats(player);
};

export default createGame(rules, engine);
