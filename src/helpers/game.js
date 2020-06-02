import { noop } from './function.js';
import { welcome, askName, greet } from './io.js';

export const createGame = (rules = noop, engine = noop) => () => {
  welcome();

  const player = askName();

  greet(player);

  rules();

  engine(player);
};

export default {};
