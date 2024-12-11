import React from 'react';
import { GeneratorConfig, QuestionType } from '../types';
import { FormSection } from './ui/FormSection';
import { FormField } from './ui/FormField';
import { QUESTION_TYPES } from '../constants/questionTypes';
import { OPERATORS } from '../constants/operators';

interface GeneratorFormProps {
  config: GeneratorConfig;
  onConfigChange: (config: GeneratorConfig) => void;
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({
  config,
  onConfigChange,
}) => {
  return (
    <FormSection title="题目设置">
      <FormField label="题型">
        <select
          value={config.questionType}
          onChange={(e) => onConfigChange({
            ...config,
            questionType: e.target.value as QuestionType
          })}
          className="form-select"
        >
          {QUESTION_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="最小值">
          <input
            type="number"
            value={config.numberRange.min}
            onChange={(e) => onConfigChange({
              ...config,
              numberRange: {
                ...config.numberRange,
                min: parseInt(e.target.value)
              }
            })}
            className="form-input"
          />
        </FormField>

        <FormField label="最大值">
          <input
            type="number"
            value={config.numberRange.max}
            onChange={(e) => onConfigChange({
              ...config,
              numberRange: {
                ...config.numberRange,
                max: parseInt(e.target.value)
              }
            })}
            className="form-input"
          />
        </FormField>
      </div>

      <FormField label="每套题数">
        <input
          type="number"
          value={config.questionCount}
          min="1"
          max="100"
          onChange={(e) => onConfigChange({
            ...config,
            questionCount: parseInt(e.target.value)
          })}
          className="form-input"
        />
      </FormField>

      <FormField label="运算符">
        <div className="flex gap-4">
          {OPERATORS.map((op) => (
            <label key={op} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={config.operators.includes(op)}
                onChange={(e) => {
                  const newOperators = e.target.checked
                    ? [...config.operators, op]
                    : config.operators.filter((o) => o !== op);
                  onConfigChange({
                    ...config,
                    operators: newOperators
                  });
                }}
                className="form-checkbox"
              />
              <span className="ml-2">{op}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={config.allowFractions}
            onChange={(e) => onConfigChange({
              ...config,
              allowFractions: e.target.checked
            })}
            className="form-checkbox"
          />
          <span className="ml-2">包含分数</span>
        </label>
      </FormField>
    </FormSection>
  );
};