import React, { useState } from 'react';
import { GeneratorConfig, BatchConfig, Question } from './types';
import { GeneratorForm } from './components/GeneratorForm';
import { BatchForm } from './components/BatchForm';
import { WorksheetDisplay } from './components/WorksheetDisplay';
import { generateBatchWorksheets } from './utils/batchGenerator';
import { Layout } from './components/Layout';
export default App;

const defaultGeneratorConfig: GeneratorConfig = {
  questionType: 'calculation',
  numberRange: { min: 1, max: 100 },
  questionCount: 10,
  allowFractions: false,
  operators: ['+'],
};

const defaultBatchConfig: BatchConfig = {
  worksheetCount: 1,
  incrementBy: 0,
};

export function App() {
  const [generatorConfig, setGeneratorConfig] = useState<GeneratorConfig>(defaultGeneratorConfig);
  const [batchConfig, setBatchConfig] = useState<BatchConfig>(defaultBatchConfig);
  const [worksheets, setWorksheets] = useState<Question[][]>([]);

  const handleGenerate = () => {
    const newWorksheets = generateBatchWorksheets(generatorConfig, batchConfig);
    setWorksheets(newWorksheets);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          口算题卡批量生成器
        </h1>
        
        <div className="space-y-6">
          <GeneratorForm
            config={generatorConfig}
            onConfigChange={setGeneratorConfig}
          />

          <BatchForm
            config={batchConfig}
            onConfigChange={setBatchConfig}
          />

          <div className="flex justify-center">
            <button
              onClick={handleGenerate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg 
                       shadow-md transition duration-200 ease-in-out transform hover:scale-105"
            >
              生成题目
            </button>
          </div>

          <div className="mt-8 space-y-8">
            {worksheets.map((worksheet, index) => (
              <WorksheetDisplay
                key={index}
                worksheet={worksheet}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}