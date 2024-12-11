import { GeneratorConfig, BatchConfig, Question } from '../types';
import { generateSingleWorksheet } from './worksheetGenerator';

export const generateBatchWorksheets = (
  baseConfig: GeneratorConfig,
  batchConfig: BatchConfig
): Question[][] => {
  const worksheets: Question[][] = [];
  
  for (let i = 0; i < batchConfig.worksheetCount; i++) {
    // Modify number ranges based on batch settings
    const modifiedConfig = {
      ...baseConfig,
      numberRange: {
        min: baseConfig.numberRange.min + (i * batchConfig.incrementBy),
        max: baseConfig.numberRange.max + (i * batchConfig.incrementBy)
      }
    };
    
    worksheets.push(generateSingleWorksheet(modifiedConfig));
  }
  
  return worksheets;
};