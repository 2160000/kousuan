import { GeneratorConfig, Question } from '../types';
import {
  generateCalculationQuestion,
  generateChoiceQuestion,
  generateTrueFalseQuestion,
  generateEstimateQuestion
} from './questionGenerators';

export const generateSingleWorksheet = (config: GeneratorConfig): Question[] => {
  const questions: Question[] = [];
  const { questionType, numberRange, questionCount, allowFractions, operators } = config;

  for (let i = 0; i < questionCount; i++) {
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let question: Question;

    switch (questionType) {
      case 'calculation':
        question = generateCalculationQuestion(numberRange, operator, allowFractions);
        break;
      case 'choice':
        question = generateChoiceQuestion(numberRange, operator, allowFractions);
        break;
      case 'truefalse':
        question = generateTrueFalseQuestion(numberRange, operator, allowFractions);
        break;
      case 'estimate':
        question = generateEstimateQuestion(numberRange, operator, allowFractions);
        break;
      default:
        question = generateCalculationQuestion(numberRange, operator, allowFractions);
    }

    questions.push(question);
  }

  return questions;
};