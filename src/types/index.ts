export interface StylePreset {
  name: string;
  prompt: string;
  negative: string;
  category: string;
  icon: string;
  description: string;
}

export interface StyleCategory {
  name: string;
  icon: string;
  order: number;
}

export interface ModelConfig {
  id: string;
  name: string;
  confirmed: boolean;
  category: string;
  description: string;
  max_size: number;
  supports_reference_images?: boolean;
  max_reference_images?: number;
  pricing?: {
    image_price: number;
    currency: string;
  };
  input_modalities?: string[];
  output_modalities?: string[];
}

export interface PresetSize {
  name: string;
  width: number;
  height: number;
}

export interface GenerationParams {
  prompt: string;
  model: string;
  width: number;
  height: number;
  style: string;
  quality_mode: string;
  seed: number;
  n: number;
  negative_prompt?: string;
  auto_optimize?: boolean;
  auto_hd?: boolean;
  reference_images?: string[];
  guidance_scale?: number;
  steps?: number;
  enhance?: boolean;
  nologo?: boolean;
  private?: boolean;
}

export interface GeneratedImage {
  url: string;
  model: string;
  seed: number;
  width: number;
  height: number;
  quality_mode: string;
  style: string;
  style_name: string;
  style_category?: string;
  generation_mode: string;
  timestamp?: string;
  prompt?: string;
  negative_prompt?: string;
  reference_images?: string[];
  authenticated?: boolean;
}

export interface HistoryItem extends GeneratedImage {
  id: string | number;
  timestamp: string;
}

export interface HealthStatus {
  status: string;
  version: string;
  timestamp: string;
  workers_ai: boolean;
  styles_count: number;
  api_auth: {
    enabled: boolean;
    method: string;
    has_token: boolean;
    endpoint: string;
  };
  models: ModelConfig[];
  style_categories: Array<{
    id: string;
    name: string;
    icon: string;
    count: number;
  }>;
}
