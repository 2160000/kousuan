import React from 'react';
import { BatchConfig } from '../types';
import { FormSection } from './ui/FormSection';
import { FormField } from './ui/FormField';

interface BatchFormProps {
  config: BatchConfig;
  onConfigChange: (config: BatchConfig) => void;
}

export const BatchForm: React.FC<BatchFormProps> = ({ config, onConfigChange }) => {
  return (
    <FormSection title="批量生成设置">
      <FormField label="生成套数">
        <input
          type="number"
          value={config.worksheetCount}
          min="1"
          max="100"
          onChange={(e) => onConfigChange({
            ...config,
            worksheetCount: parseInt(e.target.value)
          })}
          className="form-input rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="数字范围递增">
        <input
          type="number"
          value={config.incrementBy}
          min="0"
          max="100"
          onChange={(e) => onConfigChange({
            ...config,
            incrementBy: parseInt(e.target.value)
          })}
          className="form-input rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>
    </FormSection>
  );
};