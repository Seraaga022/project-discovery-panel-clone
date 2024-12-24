export type TemplatesTypesT = {
  critical: number;
  medium: number;
  high: number;
  unreleased: number;
  low: number;
};

export type TemplateFeedChartItemT = {
  day: string;
  templates: templatesTypesT;
}[];
