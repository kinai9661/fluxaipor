import { GenerationParams, GeneratedImage, HealthStatus } from '@/types';

export async function generateImage(params: GenerationParams): Promise<GeneratedImage[]> {
  const response = await fetch('/_internal/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Generation failed');
  }

  const contentType = response.headers.get('content-type');

  // 單張圖片：直接返回圖片
  if (contentType?.startsWith('image/')) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    
    return [{
      url,
      model: response.headers.get('X-Model') || params.model,
      seed: parseInt(response.headers.get('X-Seed') || String(params.seed)),
      width: parseInt(response.headers.get('X-Width') || String(params.width)),
      height: parseInt(response.headers.get('X-Height') || String(params.height)),
      quality_mode: response.headers.get('X-Quality-Mode') || params.quality_mode,
      style: response.headers.get('X-Style') || params.style,
      style_name: response.headers.get('X-Style-Name') || params.style,
      style_category: response.headers.get('X-Style-Category') || 'unknown',
      generation_mode: response.headers.get('X-Generation-Mode') || '文生圖',
      authenticated: response.headers.get('X-Authenticated') === 'true',
    }];
  }

  // 多張圖片：JSON 格式
  const data = await response.json();
  return data.data || [];
}

export async function getHealthStatus(): Promise<HealthStatus> {
  const response = await fetch('/health');
  if (!response.ok) {
    throw new Error('Failed to fetch health status');
  }
  return response.json();
}
