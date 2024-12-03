import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface AnalyzerFormProps {
  onAnalyze: (url: string) => void;
  isLoading: boolean;
}

export function AnalyzerForm({ onAnalyze, isLoading }: AnalyzerFormProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onAnalyze(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL to analyze..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 flex items-center gap-2"
        >
          <Search size={18} />
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
    </form>
  );
}