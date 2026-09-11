export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  samplePhrases: {
    en: string;
    context: string;
  }[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  details: string;
  icon: string;
}

export interface AppScreenshot {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

export interface TargetUserItem {
  id: string;
  title: string;
  description: string;
  suitableFor: string;
  icon: string;
}
