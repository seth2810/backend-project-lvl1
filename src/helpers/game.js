import * as io from './io.js';
import { noop } from './function.js';


export const createGame = (rules = noop, engine = noop) => () => {
  io.welcome();

  const player = io.askName();

  io.greet(player);

  rules();

  engine(player);
};

export const createQuestionAnswerStep = (step) => () => {
  const [question, expected] = step();

  io.printQuestion(question);

  const answer = io.askAnswer();
  const isCorrect = answer === expected;

  if (isCorrect) {
    io.handleCorrect();
  } else {
    io.handleWrong(answer, expected);
  }

  return isCorrect;
};

export const createIterativeGame = (step, iterations = 3) => (player) => {
  for (let i = 0; i < iterations; i += 1) {
    const isStepCompleted = step();

    if (!isStepCompleted) {
      io.tryAgain(player);
      return;
    }
  }

  io.congrats(player);
};
