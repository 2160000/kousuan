export const OPERATORS = ['+', '-', '×', '÷'] as const;
export type Operator = typeof OPERATORS[number];