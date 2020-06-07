import readline from 'readline-sync';

const maxSteps = 3;

export const createGame = (rules, generateRoundData) => () => {
  console.log('Welcome to the Brain Games!');

  const player = readline.question('May I have your name? ');

  console.log(`Hello, ${player}!`);

  console.log(rules);

  for (let i = 0; i < maxSteps; i += 1) {
    const [question, expected] = generateRoundData();

    console.log(`Question: ${question}`);

    const answer = readline.question('Your answer: ');
    const isCorrect = answer === expected;

    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expected}".`);
      console.log(`Let's try again, ${player}!`);
      return;
    }
  }

  console.log(`Congratulations, ${player}!`);
};

export default { createGame };
