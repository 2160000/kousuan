import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const renderChoices = () => {
    if (!question.choices) return null;
    return (
      <div className="mt-2">
        {question.choices.map((choice, index) => (
          <div key={index} className="ml-4">
            {String.fromCharCode(65 + index)}. {choice}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm mb-4 bg-white">
      <div className="text-lg font-medium">{question.question}</div>
      {renderChoices()}
    </div>
  );
};