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
