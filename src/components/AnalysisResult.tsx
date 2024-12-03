import React from 'react';
import { BarChart, Code, Layout, Zap, Shield, Search, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import type { AnalysisResult } from '../types/analyzer';
import { MetricsCard } from './MetricsCard';

interface AnalysisResultProps {
  result: AnalysisResult;
}

export function AnalysisResult({ result }: AnalysisResultProps) {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Analysis Results</h2>
          <span className="text-sm text-gray-500">
            {format(new Date(result.timestamp), 'PPpp')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricsCard
            metric={result.performanceMetrics.performance}
            title="Performance"
            icon={<Zap />}
          />
          <MetricsCard
            metric={result.performanceMetrics.accessibility}
            title="Accessibility"
            icon={<AlertCircle />}
          />
          <MetricsCard
            metric={result.performanceMetrics.seo}
            title="SEO"
            icon={<Search />}
          />
          <MetricsCard
            metric={result.performanceMetrics.security}
            title="Security"
            icon={<Shield />}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Structure Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<Layout />}
            title="Total Elements"
            value={result.structuralAnalysis.totalElements.toString()}
          />
          <StatCard
            icon={<Code />}
            title="DOM Depth"
            value={result.structuralAnalysis.domDepth.toString()}
          />
          <StatCard
            icon={<BarChart />}
            title="Resource Count"
            value={`${result.structuralAnalysis.scriptCount + result.structuralAnalysis.styleCount} files`}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
        <div className="grid gap-4">
          {result.recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="p-4 bg-blue-50 rounded-lg border border-blue-100"
            >
              <p className="text-blue-800">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-blue-600">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}