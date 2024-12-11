import React from 'react';
import { Question } from '../types';

interface WorksheetDisplayProps {
  worksheet: Question[];
  index: number;
}

export const WorksheetDisplay: React.FC<WorksheetDisplayProps> = ({ worksheet, index }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 print:shadow-none print:border print:border-gray-200" style={{ pageBreakBefore: 'always' }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">练习卷 #{index + 1}</h2>
      <ol className="list-decimal list-inside space-y-4">
        {worksheet.map((question, qIndex) => (
          <li key={qIndex} className="text-lg">
            {question.question}
            {question.choices && (
              <div className="ml-6 mt-2 space-y-1">
                {question.choices.map((choice, cIndex) => (
                  <div key={cIndex} className="text-gray-700">
                    {String.fromCharCode(65 + cIndex)}. {choice}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};