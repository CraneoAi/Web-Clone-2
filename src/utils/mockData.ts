import type { AnalysisResult } from '../types/analyzer';

export const generateMockAnalysis = (url: string): AnalysisResult => ({
  url,
  structuralAnalysis: {
    totalElements: 145,
    htmlStructure: {
      tags: ['div', 'p', 'span', 'a', 'img', 'h1', 'h2', 'nav', 'footer', 'header'],
      classes: ['container', 'header', 'main', 'footer', 'nav', 'flex', 'grid', 'card'],
      ids: ['root', 'header', 'main', 'footer', 'nav']
    },
    metadata: {
      title: 'Sample Website',
      description: 'A comprehensive web application for demonstration',
      keywords: ['web', 'analysis', 'SEO', 'performance'],
      author: 'BOLT Web Analyzer'
    },
    domDepth: 8,
    scriptCount: 4,
    styleCount: 2
  },
  performanceMetrics: {
    performance: {
      score: 92,
      label: 'Excellent',
      details: ['Fast load time', 'Optimized assets', 'Efficient caching']
    },
    accessibility: {
      score: 88,
      label: 'Good',
      details: ['ARIA labels present', 'Proper heading structure', 'Sufficient color contrast']
    },
    seo: {
      score: 95,
      label: 'Excellent',
      details: ['Meta tags optimized', 'Mobile friendly', 'Valid structured data']
    },
    security: {
      score: 90,
      label: 'Good',
      details: ['HTTPS enabled', 'Content Security Policy', 'No exposed sensitive data']
    }
  },
  timestamp: new Date().toISOString(),
  recommendations: [
    'Implement image lazy loading for better performance',
    'Add service worker for offline capabilities',
    'Optimize largest contentful paint',
    'Enhance security headers'
  ]
});