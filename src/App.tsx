import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { AnalyzerForm } from './components/AnalyzerForm';
import { AnalysisResult } from './components/AnalysisResult';
import { generateMockAnalysis } from './utils/mockData';
import type { AnalysisResult as AnalysisResultType } from './types/analyzer';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResultType | null>(null);

  const handleAnalyze = async (url: string) => {
    setIsLoading(true);
    try {
      // Simulated API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1500));
      setResult(generateMockAnalysis(url));
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold">BOLT Web Analyzer</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Analyze any website's structure, performance, and technical details with our advanced web analysis tool.
            Get comprehensive insights and recommendations for improvement.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <AnalyzerForm onAnalyze={handleAnalyze} isLoading={isLoading} />
          {result && <AnalysisResult result={result} />}
        </div>
      </div>
    </div>
  );
}

export default App;