export type FaceShape = 
  | 'Oval' 
  | 'Square' 
  | 'Round' 
  | 'Diamond' 
  | 'Heart' 
  | 'Oblong';

export interface FaceShapeAnalysis {
  id: FaceShape;
  name: string;
  subtitle: string;
  description: string;
  proportions: {
    faceLengthToWidth: string;
    widestPoint: string;
    jawlineDescription: string;
    foreheadRatio: string;
    goldenRatioScore: number;
  };
  aestheticGoal: string;
  recommendedLengths: string[];
  recommendedTextures: string[];
  stylesToAvoid: {
    title: string;
    reason: string;
  }[];
  idealStylingTip: string;
}

export type GenderFilter = 'All' | 'Men' | 'Women' | 'Gender-Neutral';
export type HairTextureFilter = 'All' | 'Straight' | 'Wavy' | 'Curly' | 'Coarse';
export type HairLengthFilter = 'All' | 'Short' | 'Medium' | 'Long';
export type MaintenanceLevel = 'Low' | 'Medium' | 'High';

export interface HairstyleMatch {
  score: number;
  label: 'Best Match' | 'Ideal Match' | 'Great Match' | 'Moderate Match' | 'Not Recommended';
  whyItWorks: string[];
}

export interface Hairstyle {
  id: string;
  name: string;
  categoryName: string;
  gender: 'Men' | 'Women' | 'Gender-Neutral';
  primaryTexture: 'Straight' | 'Wavy' | 'Curly' | 'Coarse';
  length: 'Short' | 'Medium' | 'Long';
  image: string;
  profileImage: string;
  maintenance: MaintenanceLevel;
  stylingTime: string;
  recommendedProducts: string[];
  howToStyleSteps: string[];
  shapeCompatibility: Record<FaceShape, HairstyleMatch>;
  salonServicePriceINR: number;
}

export interface ConsultationItem {
  hairstyle: Hairstyle;
  addedAt: string;
  userNotes?: string;
}

export interface SamplePortrait {
  id: string;
  name: string;
  gender: string;
  faceShape: FaceShape;
  image: string;
  landmarkDetails: {
    foreheadWidth: string;
    cheekboneWidth: string;
    jawlineAngle: string;
    faceLength: string;
  };
}
