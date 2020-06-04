export const isEven = (n) => n % 2 === 0;

export const randomInteger = (min = 1, max = 100) => {
  const n = min + Math.random() * (max + 1 - min);
  return Math.floor(n);
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export const progression = (start, diff, length) => {
  const sequence = Array.from({ length });
  return sequence.map((_, index) => start + (diff * index));
};

export const isPrime = (n) => {
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
