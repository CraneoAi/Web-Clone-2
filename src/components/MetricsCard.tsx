import React from 'react';
import type { MetricScore } from '../types/analyzer';

interface MetricsCardProps {
  metric: MetricScore;
  title: string;
  icon: React.ReactNode;
}

export function MetricsCard({ metric, title, icon }: MetricsCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-600">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(metric.score)}`}>
            {metric.score}
          </span>
        </div>
        <div className="text-sm text-gray-500">{metric.label}</div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Details</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {metric.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}