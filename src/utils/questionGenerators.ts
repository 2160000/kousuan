import { QuestionType, Question, NumberRange } from '../types';
import { getRandomNumber, calculateResult, formatNumber } from './mathUtils';

// Generate calculation question (算一算)
export const generateCalculationQuestion = (
  range: NumberRange,
  operator: string,
  allowFractions: boolean
): Question => {
  const num1 = getRandomNumber(range.min, range.max);
  const num2 = getRandomNumber(range.min, range.max);
  const result = calculateResult(num1, num2, operator);

  return {
    type: 'calculation',
    question: `${formatNumber(num1)} ${operator} ${formatNumber(num2)} = `,
    answer: result
  };
};

// Generate choice question (选一选)
export const generateChoiceQuestion = (
  range: NumberRange,
  operator: string,
  allowFractions: boolean
): Question => {
  const num1 = getRandomNumber(range.min, range.max);
  const num2 = getRandomNumber(range.min, range.max);
  const correctResult = calculateResult(num1, num2, operator);
  
  // Generate wrong answers for choices
  const choices = [
    correctResult,
    correctResult + getRandomNumber(1, 5),
    correctResult - getRandomNumber(1, 5)
  ].sort(() => Math.random() - 0.5);

  return {
    type: 'choice',
    question: `${formatNumber(num1)} ${operator} ${formatNumber(num2)} = ()`,
    answer: correctResult,
    choices: choices.map(c => c.toString())
  };
};

// Generate true/false question (判对错)
export const generateTrueFalseQuestion = (
  range: NumberRange,
  operator: string,
  allowFractions: boolean
): Question => {
  const num1 = getRandomNumber(range.min, range.max);
  const num2 = getRandomNumber(range.min, range.max);
  const correctResult = calculateResult(num1, num2, operator);
  const wrongResult = correctResult + getRandomNumber(-5, 5);
  
  return {
    type: 'truefalse',
    question: `${formatNumber(num1)} ${operator} ${formatNumber(num2)} = ${wrongResult} ()`,
    answer: correctResult === wrongResult
  };
};

// Generate estimation question (估算)
export const generateEstimateQuestion = (
  range: NumberRange,
  operator: string,
  allowFractions: boolean
): Question => {
  const num1 = getRandomNumber(range.min, range.max);
  const num2 = getRandomNumber(range.min, range.max);
  const result = calculateResult(num1, num2, operator);

  return {
    type: 'estimate',
    question: `${formatNumber(num1)} ${operator} ${formatNumber(num2)} ≈`,
    answer: Math.round(result / 10) * 10
  };
};