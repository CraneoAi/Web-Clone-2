export interface MetricScore {
  score: number;
  label: string;
  details: string[];
}

export interface PerformanceMetrics {
  performance: MetricScore;
  accessibility: MetricScore;
  seo: MetricScore;
  security: MetricScore;
}

export interface HtmlStructure {
  tags: string[];
  classes: string[];
  ids: string[];
}

export interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  author?: string;
  robots?: string;
}

export interface StructuralAnalysis {
  totalElements: number;
  htmlStructure: HtmlStructure;
  metadata: Metadata;
  domDepth: number;
  scriptCount: number;
  styleCount: number;
}

export interface AnalysisResult {
  url: string;
  structuralAnalysis: StructuralAnalysis;
  performanceMetrics: PerformanceMetrics;
  timestamp: string;
  recommendations: string[];
}