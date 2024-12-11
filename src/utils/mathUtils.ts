// Generate a random number within a range
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate a random fraction
export const getRandomFraction = (min: number, max: number): string => {
  const numerator = getRandomNumber(min, max);
  const denominator = getRandomNumber(2, 10);
  return `${numerator}/${denominator}`;
};

// Calculate the result of an expression
export const calculateResult = (num1: number, num2: number, operator: string): number => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '×': return num1 * num2;
    case '÷': return num1 / num2;
    default: return 0;
  }
};

// Format number (handle both integers and fractions)
export const formatNumber = (num: number | string): string => {
  return num.toString();
};