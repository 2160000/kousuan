export type QuestionType = 'calculation' | 'choice' | 'truefalse' | 'estimate';

export interface QuestionTypeOption {
  value: QuestionType;
  label: string;
}

export interface NumberRange {
  min: number;
  max: number;
}

export interface GeneratorConfig {
  questionType: QuestionType;
  numberRange: NumberRange;
  questionCount: number;
  allowFractions: boolean;
  operators: string[];
}

export interface BatchConfig {
  worksheetCount: number;
  incrementBy: number;
}

export interface Question {
  type: QuestionType;
  question: string;
  answer: string | number;
  choices?: string[];
}
