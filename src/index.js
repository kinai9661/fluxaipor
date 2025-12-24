const CONFIG = {
  PROJECT_NAME: 'Flux AI Pro',
  PROJECT_VERSION: '3.0.0',
  PROVIDERS: {
    pollinations: {
      endpoint: 'https://image.pollinations.ai',
      pathPrefix: '/prompt',
      models: [
        { id: 'zimage', name: 'Zimage (極速)', category: 'fast', speed: 'fast', parameters: '6B', pricing: { standard: '$0.0002' }, description: '極快速度，適合快速測試' },
        { id: 'flux', name: 'Flux Pro', category: 'balanced', speed: 'medium', parameters: '12B', pricing: { standard: '$0.05' }, description: '平衡質量與速度，推薦使用' },
        { id: 'flux-realism', name: 'Flux Realism', category: 'quality', speed: 'medium', parameters: '12B', pricing: { standard: '$0.05' }, description: '專注寫實風格的高質量模型' },
        { id: 'flux-cablyai', name: 'Flux CablyAI', category: 'quality', speed: 'medium', parameters: '12B', pricing: { standard: '$0.05' }, description: 'CablyAI 優化版本' },
        { id: 'flux-anime', name: 'Flux Anime', category: 'quality', speed: 'medium', parameters: '12B', pricing: { standard: '$0.05' }, description: '動漫風格專用模型' },
        { id: 'flux-3d', name: 'Flux 3D', category: 'quality', speed: 'medium', parameters: '12B', pricing: { standard: '$0.05' }, description: '3D 渲染風格模型' },
        { id: 'turbo', name: 'Turbo', category: 'fast', speed: 'fast', parameters: '8B', pricing: { standard: '$0.001' }, description: '快速生成，質量較好' },
        { id: 'kontext', name: 'Kontext (圖生圖)', category: 'image-to-image', speed: 'medium', parameters: '10B', pricing: { standard: '$0.03' }, description: '支持參考圖像的圖生圖模型' }
      ]
    }
  },
  PRESET_SIZES: {
    'square_1024': { name: '方形 1:1', width: 1024, height: 1024, icon: '⬛' },
    'portrait_768': { name: '豎屏 3:4', width: 768, height: 1024, icon: '📱' },
    'landscape_1024': { name: '橫屏 4:3', width: 1024, height: 768, icon: '🖥️' },
    'wide_1280': { name: '寬屏 16:9', width: 1280, height: 720, icon: '📺' },
    'ultrawide_1536': { name: '超寬 21:9', width: 1536, height: 640, icon: '🎬' },
    'instagram_1080': { name: 'Instagram', width: 1080, height: 1080, icon: '📷' },
    'story_1080': { name: 'Story 9:16', width: 1080, height: 1920, icon: '📲' },
    'custom': { name: '自定義', width: 1024, height: 1024, icon: '⚙️' }
  },
  STYLE_PRESETS: {
    'none': { name: '無風格', icon: '⚪', category: 'none', description: '不使用任何預設風格', prompt: '', negative: '' },
    'photorealistic': { name: '照片寫實', icon: '📷', category: 'realistic', description: '極致寫實的照片效果', prompt: 'photorealistic, highly detailed, 8k uhd, professional photography, realistic lighting', negative: 'cartoon, anime, painting, illustration, drawing' },
    'portrait': { name: '人像攝影', icon: '👤', category: 'realistic', description: '專業人像攝影風格', prompt: 'portrait photography, professional lighting, bokeh, sharp focus, high quality', negative: 'full body, landscape, wide angle' },
    'cinematic': { name: '電影質感', icon: '🎬', category: 'cinematic', description: '電影級畫面質感', prompt: 'cinematic lighting, film grain, dramatic atmosphere, movie scene, color grading', negative: 'amateur, low quality, snapshot' },
    'studio': { name: '攝影棚', icon: '💡', category: 'realistic', description: '專業攝影棚光效', prompt: 'studio lighting, professional setup, clean background, high key lighting', negative: 'outdoor, natural light, messy' },
    'anime': { name: '日系動漫', icon: '🎌', category: 'anime', description: '日本動漫畫風', prompt: 'anime style, manga, japanese animation, vibrant colors, cel shaded', negative: 'realistic, photorealistic, 3d' },
    'ghibli': { name: '吉卜力風格', icon: '🏯', category: 'anime', description: '宮崎駿動畫風格', prompt: 'studio ghibli style, anime, hayao miyazaki, painterly, detailed', negative: 'realistic, photograph' },
    'oil_painting': { name: '油畫', icon: '🎨', category: 'art', description: '古典油畫風格', prompt: 'oil painting, classical art, textured brushstrokes, rich colors, masterpiece', negative: 'digital, modern, photograph' },
    'watercolor': { name: '水彩畫', icon: '💧', category: 'art', description: '水彩藝術風格', prompt: 'watercolor painting, soft edges, transparent colors, artistic, delicate', negative: 'sharp, digital, photorealistic' },
    'impressionism': { name: '印象派', icon: '🌅', category: 'art', description: '印象派繪畫', prompt: 'impressionism, claude monet style, visible brushstrokes, light and color', negative: 'photorealistic, sharp details' },
    'digital_art': { name: '數位藝術', icon: '💻', category: 'digital', description: '現代數位繪畫', prompt: 'digital art, digital painting, concept art, artstation, detailed', negative: 'traditional, photograph, sketch' },
    'pixel_art': { name: '像素藝術', icon: '🕹️', category: 'digital', description: '復古像素風格', prompt: 'pixel art, 8bit, retro game style, pixelated, nostalgic', negative: 'realistic, smooth, high resolution' },
    'low_poly': { name: '低多邊形', icon: '🔷', category: 'digital', description: '低面數3D風格', prompt: 'low poly, 3d, geometric, faceted, minimalist 3d', negative: 'realistic, high detail, smooth' },
    '3d_render': { name: '3D 渲染', icon: '🎲', category: 'digital', description: '3D 建模渲染', prompt: '3d render, octane render, blender, detailed model, ray tracing', negative: '2d, flat, sketch' },
    'cyberpunk': { name: '賽博朋克', icon: '🌃', category: 'scifi', description: '未來霓虹都市', prompt: 'cyberpunk, neon lights, futuristic city, high tech low life, dystopian', negative: 'nature, traditional, ancient' },
    'steampunk': { name: '蒸汽朋克', icon: '⚙️', category: 'scifi', description: '維多利亞蒸汽科技', prompt: 'steampunk, victorian era, brass and copper, steam powered, industrial', negative: 'modern, minimalist, clean' },
    'sci_fi': { name: '科幻未來', icon: '🚀', category: 'scifi', description: '未來科技風格', prompt: 'sci-fi, futuristic, advanced technology, space age, sleek design', negative: 'medieval, fantasy, ancient' },
    'fantasy': { name: '奇幻藝術', icon: '🧙', category: 'fantasy', description: '奇幻魔法世界', prompt: 'fantasy art, magical, ethereal, enchanted, mystical atmosphere', negative: 'realistic, modern, mundane' },
    'dark_fantasy': { name: '黑暗奇幻', icon: '🌑', category: 'fantasy', description: '黑暗魔幻風格', prompt: 'dark fantasy, gothic, ominous atmosphere, dark magic, medieval', negative: 'bright, cheerful, modern' },
    'surrealism': { name: '超現實主義', icon: '👁️', category: 'abstract', description: '夢境般的超現實', prompt: 'surrealism, dreamlike, salvador dali style, impossible geometry, bizarre', negative: 'realistic, ordinary, mundane' },
    'abstract': { name: '抽象藝術', icon: '🎭', category: 'abstract', description: '抽象表現主義', prompt: 'abstract art, non-representational, shapes and colors, expressionist', negative: 'realistic, figurative, detailed' },
    'minimalist': { name: '極簡主義', icon: '⬜', category: 'minimal', description: '簡約設計風格', prompt: 'minimalist, simple, clean lines, negative space, less is more', negative: 'complex, detailed, ornate' },
    'vaporwave': { name: '蒸汽波', icon: '🌸', category: 'retro', description: '復古未來美學', prompt: 'vaporwave, retro futurism, 80s aesthetic, pastel colors, glitch art', negative: 'realistic, modern, professional' },
    'noir': { name: '黑色電影', icon: '🎞️', category: 'cinematic', description: '黑白電影質感', prompt: 'film noir, black and white, high contrast, dramatic shadows, 1940s', negative: 'colorful, bright, modern' },
    'comic_book': { name: '美式漫畫', icon: '💥', category: 'art', description: '美漫風格', prompt: 'comic book style, bold lines, halftone dots, dynamic composition, pop art', negative: 'realistic, photograph, subtle' }
  },
  FETCH_TIMEOUT: 120000,
  MAX_HISTORY: 100,
  DEFAULT_QUALITY: 'standard'
};

function corsHeaders(additionalHeaders = {}) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Max-Age': '86400',
    ...additionalHeaders
  };
}

function getClientIP(request) {
  return request.headers.get('cf-connecting-ip') || 
         request.headers.get('x-forwarded-for') || 
         request.headers.get('x-real-ip') || 
         'unknown';
}

function errorResponse(message, status = 400) {
  return new Response(JSON.stringify({ 
    error: { 
      message: message,
      status: status,
      timestamp: new Date().toISOString()
    } 
  }), {
    status: status,
    headers: corsHeaders({ 'Content-Type': 'application/json' })
  });
}

function successResponse(data) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: corsHeaders({ 'Content-Type': 'application/json' })
  });
}
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const startTime = Date.now();
    const clientIP = getClientIP(request);
    
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }
    
    try {
      const path = url.pathname;
      
      if (path === '/' || path === '') {
        return new Response(buildHTML(), {
          status: 200,
          headers: corsHeaders({
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
          })
        });
      }
      
      if (path === '/health' || path === '/api/health') {
        return handleHealthCheck();
      }
      
      if (path === '/api/config') {
        return handleGetConfig();
      }
      
      if (path === '/_internal/generate' || path === '/api/generate') {
        if (request.method !== 'POST') {
          return errorResponse('Method not allowed', 405);
        }
        return await handleGenerate(request, env, clientIP);
      }
      
      if (path === '/api/models') {
        return handleGetModels();
      }
      
      return errorResponse('Not Found', 404);
      
    } catch (error) {
      return errorResponse('Internal server error: ' + error.message, 500);
    }
  }
};

function handleHealthCheck() {
  const health = {
    status: 'ok',
    version: CONFIG.PROJECT_VERSION,
    timestamp: new Date().toISOString(),
    features: {
      models: CONFIG.PROVIDERS.pollinations.models.length,
      styles: Object.keys(CONFIG.STYLE_PRESETS).length,
      sizes: Object.keys(CONFIG.PRESET_SIZES).length
    }
  };
  
  return successResponse(health);
}

function handleGetConfig() {
  return successResponse({
    project: CONFIG.PROJECT_NAME,
    version: CONFIG.PROJECT_VERSION,
    providers: CONFIG.PROVIDERS,
    sizes: CONFIG.PRESET_SIZES,
    styles_count: Object.keys(CONFIG.STYLE_PRESETS).length,
    models_count: CONFIG.PROVIDERS.pollinations.models.length
  });
}

function handleGetModels() {
  return successResponse({
    models: CONFIG.PROVIDERS.pollinations.models
  });
}

async function handleGenerate(request, env, clientIP) {
  const startTime = Date.now();
  
  try {
    const body = await request.json();
    
    if (!body.prompt || !body.prompt.trim()) {
      return errorResponse('Prompt is required', 400);
    }
    
    const params = {
      prompt: body.prompt.trim(),
      model: body.model || 'zimage',
      width: body.width || 1024,
      height: body.height || 1024,
      seed: body.seed !== undefined ? parseInt(body.seed) : -1,
      style: body.style || 'none',
      quality_mode: body.quality_mode || 'standard',
      negative_prompt: body.negative_prompt || '',
      auto_optimize: body.auto_optimize !== false,
      auto_hd: body.auto_hd !== false
    };
    
    const currentSeed = params.seed === -1 
      ? Math.floor(Math.random() * 1000000) 
      : params.seed;
    
    let finalPrompt = params.prompt;
    let finalNegative = params.negative_prompt;
    
    if (params.style !== 'none' && CONFIG.STYLE_PRESETS[params.style]) {
      const styleConfig = CONFIG.STYLE_PRESETS[params.style];
      
      if (styleConfig.prompt) {
        finalPrompt = params.prompt + ', ' + styleConfig.prompt;
      }
      
      if (styleConfig.negative) {
        finalNegative = finalNegative 
          ? finalNegative + ', ' + styleConfig.negative
          : styleConfig.negative;
      }
    }
    
    if (params.auto_hd) {
      switch (params.quality_mode) {
        case 'ultra':
          finalPrompt += ', ultra high quality, 8k uhd, highly detailed, masterpiece';
          finalNegative += ', low quality, blurry, pixelated';
          break;
        case 'standard':
          finalPrompt += ', high quality, detailed';
          finalNegative += ', low quality, blurry';
          break;
      }
    }
    
    const encodedPrompt = encodeURIComponent(finalPrompt);
    const apiUrl = CONFIG.PROVIDERS.pollinations.endpoint + CONFIG.PROVIDERS.pollinations.pathPrefix + '/' + encodedPrompt + '?model=' + params.model + '&width=' + params.width + '&height=' + params.height + '&seed=' + currentSeed + '&nologo=true&enhance=true';
    
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'image/*,*/*',
      'Referer': 'https://pollinations.ai/',
      'Origin': 'https://pollinations.ai'
    };
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CONFIG.FETCH_TIMEOUT);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error('API returned status ' + response.status);
    }
    
    const imageBlob = await response.blob();
    const imageBuffer = await imageBlob.arrayBuffer();
    
    const generationTime = ((Date.now() - startTime) / 1000).toFixed(2);
    
    return new Response(imageBuffer, {
      status: 200,
      headers: corsHeaders({
        'Content-Type': 'image/png',
        'Content-Length': imageBuffer.byteLength.toString(),
        'X-Model': params.model,
        'X-Seed': currentSeed.toString(),
        'X-Width': params.width.toString(),
        'X-Height': params.height.toString(),
        'X-Style': params.style,
        'X-Style-Name': CONFIG.STYLE_PRESETS[params.style]?.name || params.style,
        'X-Quality-Mode': params.quality_mode,
        'X-Generation-Time': generationTime,
        'Cache-Control': 'public, max-age=31536000, immutable'
      })
    });
    
  } catch (error) {
    if (error.name === 'AbortError') {
      return errorResponse('Request timeout', 408);
    }
    
    return errorResponse('Generation failed: ' + error.message, 500);
  }
}
function buildHTML() {
  const modelOptions = CONFIG.PROVIDERS.pollinations.models.map(m => {
    const emoji = m.category === 'fast' ? '⚡' : m.category === 'balanced' ? '⚖️' : m.category === 'image-to-image' ? '🎨' : '🖼️';
    return '<option value="' + m.id + '">' + emoji + ' ' + m.name + '</option>';
  }).join('');
  
  const sizeOptions = Object.entries(CONFIG.PRESET_SIZES).map(([key, size]) => {
    return '<option value="' + key + '">' + size.icon + ' ' + size.name + ' (' + size.width + '×' + size.height + ')</option>';
  }).join('');
  
  const styleOptions = Object.entries(CONFIG.STYLE_PRESETS).map(([key, style]) => {
    return '<option value="' + key + '">' + style.icon + ' ' + style.name + '</option>';
  }).join('');
  
  let html = '';
  
  html += '<!DOCTYPE html>';
  html += '<html lang="zh-TW" class="dark">';
  html += '<head>';
  html += '<meta charset="UTF-8">';
  html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
  html += '<title>Flux AI Pro v' + CONFIG.PROJECT_VERSION + '</title>';
  html += '<meta name="description" content="專業 AI 圖像生成平台">';
  html += '<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎨</text></svg>">';
  
  html += '<script src="https://cdn.tailwindcss.com"></script>';
  html += '<script>';
  html += 'tailwind.config = {';
  html += '  darkMode: "class",';
  html += '  theme: {';
  html += '    extend: {';
  html += '      colors: {';
  html += '        background: "hsl(240 10% 3.9%)",';
  html += '        foreground: "hsl(0 0% 98%)",';
  html += '        primary: {';
  html += '          DEFAULT: "hsl(142.1 76.2% 36.3%)",';
  html += '          foreground: "hsl(355.7 100% 97.3%)"';
  html += '        },';
  html += '        border: "hsl(240 3.7% 15.9%)"';
  html += '      }';
  html += '    }';
  html += '  }';
  html += '};';
  html += '</script>';
  
  html += '<style>';
  html += '* { box-sizing: border-box; margin: 0; padding: 0; }';
  html += 'body {';
  html += '  background: linear-gradient(135deg, #0a0f1e 0%, #1a1f3a 50%, #0f1419 100%);';
  html += '  background-attachment: fixed;';
  html += '  color: hsl(0 0% 98%);';
  html += '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;';
  html += '  overflow-x: hidden;';
  html += '}';
  html += '.glass-card {';
  html += '  background: rgba(30, 35, 50, 0.7);';
  html += '  backdrop-filter: blur(20px) saturate(180%);';
  html += '  -webkit-backdrop-filter: blur(20px) saturate(180%);';
  html += '  border: 1px solid rgba(255, 255, 255, 0.1);';
  html += '  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);';
  html += '  transition: all 0.3s ease;';
  html += '}';
  html += '.glass-card:hover {';
  html += '  border-color: rgba(34, 197, 94, 0.3);';
  html += '  box-shadow: 0 12px 40px 0 rgba(34, 197, 94, 0.15);';
  html += '}';
  html += '.input-field {';
  html += '  background: rgba(30, 35, 50, 0.5);';
  html += '  border: 1px solid rgba(255, 255, 255, 0.1);';
  html += '  color: hsl(0 0% 98%);';
  html += '  transition: all 0.3s ease;';
  html += '}';
  html += '.input-field:focus {';
  html += '  background: rgba(30, 35, 50, 0.8);';
  html += '  border-color: hsl(142.1 76.2% 36.3%);';
  html += '  outline: none;';
  html += '  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);';
  html += '}';
  html += '.input-field::placeholder {';
  html += '  color: rgba(255, 255, 255, 0.4);';
  html += '}';
  html += '.btn-primary {';
  html += '  position: relative;';
  html += '  overflow: hidden;';
  html += '  background: linear-gradient(135deg, hsl(142.1 76.2% 36.3%) 0%, hsl(142.1 76.2% 46.3%) 100%);';
  html += '  color: white;';
  html += '  font-weight: 600;';
  html += '  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);';
  html += '  transition: all 0.3s ease;';
  html += '}';
  html += '.btn-primary:hover:not(:disabled) {';
  html += '  transform: translateY(-2px);';
  html += '  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);';
  html += '}';
  html += '.btn-primary:disabled {';
  html += '  opacity: 0.6;';
  html += '  cursor: not-allowed;';
  html += '}';
  html += '.spinner {';
  html += '  border: 3px solid rgba(255, 255, 255, 0.1);';
  html += '  border-top: 3px solid hsl(142.1 76.2% 36.3%);';
  html += '  border-radius: 50%;';
  html += '  width: 40px;';
  html += '  height: 40px;';
  html += '  animation: spin 1s linear infinite;';
  html += '}';
  html += '@keyframes spin {';
  html += '  0% { transform: rotate(0deg); }';
  html += '  100% { transform: rotate(360deg); }';
  html += '}';
  html += '.collapsible-content {';
  html += '  max-height: 0;';
  html += '  overflow: hidden;';
  html += '  transition: max-height 0.3s ease-out;';
  html += '}';
  html += '.collapsible-content.open {';
  html += '  max-height: 2000px;';
  html += '}';
  html += '.image-container {';
  html += '  position: relative;';
  html += '  overflow: hidden;';
  html += '  border-radius: 1rem;';
  html += '  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);';
  html += '}';
  html += '.image-container img {';
  html += '  transition: transform 0.5s ease;';
  html += '  width: 100%;';
  html += '  height: auto;';
  html += '  display: block;';
  html += '}';
  html += '.image-container:hover img {';
  html += '  transform: scale(1.05);';
  html += '}';
  html += '::-webkit-scrollbar {';
  html += '  width: 8px;';
  html += '  height: 8px;';
  html += '}';
  html += '::-webkit-scrollbar-track {';
  html += '  background: rgba(30, 35, 50, 0.3);';
  html += '}';
  html += '::-webkit-scrollbar-thumb {';
  html += '  background: rgba(34, 197, 94, 0.5);';
  html += '  border-radius: 4px;';
  html += '}';
  html += '::-webkit-scrollbar-thumb:hover {';
  html += '  background: rgba(34, 197, 94, 0.7);';
  html += '}';
  html += '.modal {';
  html += '  display: none;';
  html += '  position: fixed;';
  html += '  inset: 0;';
  html += '  background: rgba(0, 0, 0, 0.8);';
  html += '  backdrop-filter: blur(10px);';
  html += '  z-index: 9999;';
  html += '  padding: 1rem;';
  html += '  overflow-y: auto;';
  html += '}';
  html += '.modal.show {';
  html += '  display: flex;';
  html += '  align-items: center;';
  html += '  justify-content: center;';
  html += '  animation: fadeIn 0.3s ease;';
  html += '}';
  html += '@keyframes fadeIn {';
  html += '  from { opacity: 0; }';
  html += '  to { opacity: 1; }';
  html += '}';
  html += '</style>';
  html += '</head>';
  
  html += '<body>';
  html += '<header class="glass-card border-b border-gray-800 sticky top-0 z-50">';
  html += '  <div class="px-4 py-3 flex items-center justify-between max-w-screen-2xl mx-auto">';
  html += '    <div class="flex items-center gap-3">';
  html += '      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl shadow-lg">🎨</div>';
  html += '      <div>';
  html += '        <h1 class="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Flux AI Pro</h1>';
  html += '        <p class="text-xs text-gray-400">版本 ' + CONFIG.PROJECT_VERSION + '</p>';
  html += '      </div>';
  html += '    </div>';
  html += '    <div class="flex items-center gap-2">';
  html += '      <button id="historyBtn" class="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-sm flex items-center gap-2 border border-gray-700">';
  html += '        <span>📚</span>';
  html += '        <span class="hidden sm:inline">歷史</span>';
  html += '        <span id="historyCount" class="px-2 py-0.5 rounded-full bg-green-500 text-white text-xs font-bold min-w-[20px] text-center">0</span>';
  html += '      </button>';
  html += '    </div>';
  html += '  </div>';
  html += '</header>';
  
  html += '<div class="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] max-w-screen-2xl mx-auto">';
  
  html += '  <aside id="leftPanel" class="w-full lg:w-80 xl:w-96 glass-card border-r border-gray-800 overflow-y-auto">';
  html += '    <div class="p-4 space-y-4">';
  html += '      <div class="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">';
  html += '        <span class="text-2xl">⚙️</span>';
  html += '        <h2 class="text-lg font-bold">生成參數</h2>';
  html += '      </div>';
  
  html += '      <form id="generateForm" class="space-y-4">';
  html += '        <div>';
  html += '          <label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  html += '            <span>🤖</span>';
  html += '            <span>模型選擇</span>';
  html += '          </label>';
  html += '          <select id="model" class="input-field w-full rounded-lg px-3 py-2.5 text-sm cursor-pointer font-medium">';
  html += modelOptions;
  html += '          </select>';
  html += '          <div class="mt-2 grid grid-cols-3 gap-2 text-xs">';
  html += '            <div class="flex items-center gap-1 text-gray-400">';
  html += '              <span>💰</span>';
  html += '              <span id="modelPrice" class="text-green-400 font-medium">$0.0002</span>';
  html += '            </div>';
  html += '            <div class="flex items-center gap-1 text-gray-400">';
  html += '              <span>⚡</span>';
  html += '              <span id="modelSpeed" class="text-blue-400 font-medium">極快</span>';
  html += '            </div>';
  html += '            <div class="flex items-center gap-1 text-gray-400">';
  html += '              <span>📊</span>';
  html += '              <span id="modelParams" class="text-purple-400 font-medium">6B</span>';
  html += '            </div>';
  html += '          </div>';
  html += '        </div>';
  
  html += '        <div>';
  html += '          <label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  html += '            <span>📐</span>';
  html += '            <span>尺寸預設</span>';
  html += '          </label>';
  html += '          <select id="size" class="input-field w-full rounded-lg px-3 py-2.5 text-sm cursor-pointer">';
  html += sizeOptions;
  html += '          </select>';
  html += '        </div>';
  
  html += '        <div>';
  html += '          <label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  html += '            <span>🎨</span>';
  html += '            <span>藝術風格</span>';
  html += '          </label>';
  html += '          <select id="style" class="input-field w-full rounded-lg px-3 py-2.5 text-sm cursor-pointer">';
  html += styleOptions;
  html += '          </select>';
  html += '          <div id="stylePreview" class="mt-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700">';
  html += '            <div class="text-xs font-semibold mb-1 flex items-center gap-2">';
  html += '              <span>當前風格:</span>';
  html += '              <span id="currentStyleName" class="text-green-400">無風格</span>';
  html += '            </div>';
  html += '            <div id="styleDescription" class="text-xs text-gray-400 leading-relaxed">不使用任何預設風格</div>';
  html += '          </div>';
  html += '        </div>';
  
  html += '        <div>';
  html += '          <label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  html += '            <span>💎</span>';
  html += '            <span>質量模式</span>';
  html += '          </label>';
  html += '          <select id="qualityMode" class="input-field w-full rounded-lg px-3 py-2.5 text-sm cursor-pointer">';
  html += '            <option value="economy">⚡ 經濟模式</option>';
  html += '            <option value="standard" selected>⚖️ 標準模式</option>';
  html += '            <option value="ultra">💎 超高清模式</option>';
  html += '          </select>';
  html += '          <p class="text-xs text-gray-400 mt-1.5" id="qualityDesc">平衡質量與速度</p>';
  html += '        </div>';
  
  html += '        <div class="border-t border-gray-700 pt-4">';
  html += '          <button type="button" id="advancedToggle" class="w-full flex items-center justify-between text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-800/50 transition">';
  html += '            <span class="flex items-center gap-2">';
  html += '              <span>🔧</span>';
  html += '              <span>進階選項</span>';
  html += '            </span>';
  html += '            <span id="advancedIcon" class="text-gray-400 transition-transform">▼</span>';
  html += '          </button>';
  html += '          <div id="advancedSection" class="collapsible-content mt-3 space-y-3">';
  html += '            <div>';
  html += '              <label class="block text-xs font-medium mb-1.5 flex items-center gap-2">';
  html += '                <span>🎲</span>';
  html += '                <span>隨機種子</span>';
  html += '              </label>';
  html += '              <input type="number" id="seed" value="-1" class="input-field w-full rounded-lg px-3 py-2 text-sm" placeholder="-1 為隨機">';
  html += '            </div>';
  html += '            <div class="space-y-2">';
  html += '              <label class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-400 transition">';
  html += '                <input type="checkbox" id="autoOptimize" checked class="rounded w-4 h-4 text-green-600">';
  html += '                <span>⚡ 參數自動優化</span>';
  html += '              </label>';
  html += '              <label class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-400 transition">';
  html += '                <input type="checkbox" id="autoHD" checked class="rounded w-4 h-4 text-green-600">';
  html += '                <span>🔍 HD 自動增強</span>';
  html += '              </label>';
  html += '            </div>';
  html += '          </div>';
  html += '        </div>';
  
  html += '        <button type="submit" id="generateBtn" class="btn-primary w-full py-3.5 rounded-xl font-bold text-base shadow-lg flex items-center justify-center gap-3 group">';
  html += '          <span class="text-xl group-hover:scale-110 transition-transform">🎨</span>';
  html += '          <span>開始生成</span>';
  html += '        </button>';
  html += '      </form>';
  html += '    </div>';
  html += '  </aside>';
  
  return html;
}
function buildHTML_part2() {
  let html = '';
  
  html += '  <main id="mainPanel" class="flex-1 glass-card overflow-y-auto">';
  html += '    <div class="p-4 lg:p-6">';
  html += '      <div class="flex items-center gap-2 mb-6 pb-3 border-b border-gray-700">';
  html += '        <span class="text-2xl">🖼️</span>';
  html += '        <h2 class="text-lg font-bold">生成結果</h2>';
  html += '      </div>';
  
  html += '      <div id="emptyState" class="flex flex-col items-center justify-center py-16 px-4">';
  html += '        <div class="w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-6 shadow-2xl">';
  html += '          <span class="text-6xl opacity-50">🎨</span>';
  html += '        </div>';
  html += '        <h3 class="text-xl font-bold mb-2 text-gray-300">尚未生成任何圖像</h3>';
  html += '        <p class="text-gray-400 text-center max-w-md">填寫左側參數並輸入提示詞後點擊生成按鈕</p>';
  html += '      </div>';
  
  html += '      <div id="loadingState" class="hidden flex-col items-center justify-center py-16 px-4">';
  html += '        <div class="spinner mb-6"></div>';
  html += '        <h3 class="text-xl font-bold mb-2 text-green-400">AI 正在創作中</h3>';
  html += '        <p class="text-gray-400 mb-4">這可能需要幾秒鐘到一分鐘</p>';
  html += '        <div class="flex items-center gap-2 text-sm text-gray-500">';
  html += '          <span>⏱️</span>';
  html += '          <span>已用時: </span>';
  html += '          <span id="elapsedTime" class="font-mono text-green-400">0</span>';
  html += '          <span>秒</span>';
  html += '        </div>';
  html += '        <div class="w-full max-w-md mt-6">';
  html += '          <div class="h-2 bg-gray-800 rounded-full overflow-hidden">';
  html += '            <div id="progressBar" class="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300" style="width: 0%"></div>';
  html += '          </div>';
  html += '        </div>';
  html += '      </div>';
  
  html += '      <div id="resultsContainer" class="hidden">';
  html += '        <div class="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-xl">';
  html += '          <div class="flex items-center gap-3 mb-2">';
  html += '            <span class="text-2xl">✅</span>';
  html += '            <div>';
  html += '              <h3 class="font-bold text-green-400">生成成功！</h3>';
  html += '              <p class="text-sm text-gray-400">已生成 <span id="imageCount" class="text-green-400 font-bold">1</span> 張圖片</p>';
  html += '            </div>';
  html += '          </div>';
  html += '          <div class="mt-3 pt-3 border-t border-green-800/30 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">';
  html += '            <div class="flex items-center gap-1.5">';
  html += '              <span class="text-gray-400">🤖</span>';
  html += '              <span class="text-gray-400">模型:</span>';
  html += '              <span id="usedModel" class="text-white font-medium">-</span>';
  html += '            </div>';
  html += '            <div class="flex items-center gap-1.5">';
  html += '              <span class="text-gray-400">📐</span>';
  html += '              <span class="text-gray-400">尺寸:</span>';
  html += '              <span id="usedSize" class="text-white font-medium">-</span>';
  html += '            </div>';
  html += '            <div class="flex items-center gap-1.5">';
  html += '              <span class="text-gray-400">🎲</span>';
  html += '              <span class="text-gray-400">Seed:</span>';
  html += '              <span id="usedSeed" class="text-white font-mono font-medium">-</span>';
  html += '            </div>';
  html += '            <div class="flex items-center gap-1.5">';
  html += '              <span class="text-gray-400">⏱️</span>';
  html += '              <span class="text-gray-400">耗時:</span>';
  html += '              <span id="generationTime" class="text-green-400 font-medium">-</span>';
  html += '            </div>';
  html += '          </div>';
  html += '        </div>';
  
  html += '        <div id="imageGrid" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"></div>';
  
  html += '        <div class="flex flex-wrap gap-3">';
  html += '          <button id="downloadAllBtn" class="px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center gap-2 transition shadow-lg">';
  html += '            <span>⬇️</span>';
  html += '            <span>下載圖像</span>';
  html += '          </button>';
  html += '          <button id="regenerateBtn" class="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition shadow-lg">';
  html += '            <span>🔄</span>';
  html += '            <span>再次生成</span>';
  html += '          </button>';
  html += '          <button id="reuseBtn" class="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium flex items-center gap-2 transition shadow-lg">';
  html += '            <span>♻️</span>';
  html += '            <span>重用參數</span>';
  html += '          </button>';
  html += '        </div>';
  html += '      </div>';
  
  html += '      <div id="errorState" class="hidden flex-col items-center justify-center py-16 px-4">';
  html += '        <div class="w-32 h-32 rounded-full bg-gradient-to-br from-red-900 to-red-950 flex items-center justify-center mb-6 shadow-2xl">';
  html += '          <span class="text-6xl">❌</span>';
  html += '        </div>';
  html += '        <h3 class="text-xl font-bold mb-2 text-red-400">生成失敗</h3>';
  html += '        <p id="errorMessage" class="text-gray-400 text-center max-w-md mb-6">發生未知錯誤</p>';
  html += '        <button id="retryBtn" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium flex items-center gap-2 transition">';
  html += '          <span>🔄</span>';
  html += '          <span>重試</span>';
  html += '        </button>';
  html += '      </div>';
  html += '    </div>';
  html += '  </main>';
  
  html += '  <aside id="rightPanel" class="w-full lg:w-80 xl:w-96 glass-card border-l border-gray-800 overflow-y-auto">';
  html += '    <div class="p-4 space-y-4">';
  html += '      <div class="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">';
  html += '        <span class="text-2xl">✍️</span>';
  html += '        <h2 class="text-lg font-bold">提示詞</h2>';
  html += '      </div>';
  
  html += '      <div>';
  html += '        <label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  html += '          <span>✨</span>';
  html += '          <span>正面提示詞</span>';
  html += '        </label>';
  html += '        <textarea id="prompt" rows="6" class="input-field w-full rounded-lg px-3 py-3 text-sm resize-none" placeholder="描述你想生成的圖像..." required></textarea>';
  html += '      </div>';
  
  html += '      <div>';
  html += '        <label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  html += '          <span>🚫</span>';
  html += '          <span>負面提示詞</span>';
  html += '          <span class="text-xs text-gray-500 ml-auto">（可選）</span>';
  html += '        </label>';
  html += '        <textarea id="negativePrompt" rows="3" class="input-field w-full rounded-lg px-3 py-3 text-sm resize-none" placeholder="描述不想要的元素..."></textarea>';
  html += '      </div>';
  
  html += '      <div class="border-t border-gray-700 pt-4">';
  html += '        <div class="text-sm font-medium mb-3 flex items-center gap-2">';
  html += '          <span>💡</span>';
  html += '          <span>風格提示</span>';
  html += '        </div>';
  html += '        <div class="space-y-2">';
  html += '          <div class="flex items-start gap-2 text-xs text-gray-400 bg-gray-800/30 p-2 rounded-lg">';
  html += '            <span class="text-green-400 font-bold">1.</span>';
  html += '            <span>詳細的描述可以獲得更好的效果</span>';
  html += '          </div>';
  html += '          <div class="flex items-start gap-2 text-xs text-gray-400 bg-gray-800/30 p-2 rounded-lg">';
  html += '            <span class="text-green-400 font-bold">2.</span>';
  html += '            <span>使用藝術風格可以增強視覺效果</span>';
  html += '          </div>';
  html += '          <div class="flex items-start gap-2 text-xs text-gray-400 bg-gray-800/30 p-2 rounded-lg">';
  html += '            <span class="text-green-400 font-bold">3.</span>';
  html += '            <span>中文提示詞會自動翻譯為英文</span>';
  html += '          </div>';
  html += '          <div class="flex items-start gap-2 text-xs text-gray-400 bg-gray-800/30 p-2 rounded-lg">';
  html += '            <span class="text-green-400 font-bold">4.</span>';
  html += '            <span>負面提示詞幫助排除不想要的元素</span>';
  html += '          </div>';
  html += '        </div>';
  html += '      </div>';
  
  html += '      <div class="border-t border-gray-700 pt-4">';
  html += '        <div class="text-sm font-medium mb-3 flex items-center gap-2">';
  html += '          <span>📝</span>';
  html += '          <span>快速範例</span>';
  html += '        </div>';
  html += '        <div class="space-y-2">';
  html += '          <button type="button" class="example-btn w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-xs transition border border-gray-700 hover:border-green-500/50" data-prompt="一隻可愛的橘色貓咪坐在窗邊，陽光灑在它身上，柔和的光影效果，高清攝影">🐱 可愛貓咪</button>';
  html += '          <button type="button" class="example-btn w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-xs transition border border-gray-700 hover:border-green-500/50" data-prompt="賽博朋克城市夜景，霓虹燈光，未來感建築，下雨的街道，高細節，8k">🌃 賽博朋克城市</button>';
  html += '          <button type="button" class="example-btn w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-xs transition border border-gray-700 hover:border-green-500/50" data-prompt="奇幻森林，魔法光芒，精靈，蘑菇，夢幻色彩，高清細節">🧚 奇幻森林</button>';
  html += '          <button type="button" class="example-btn w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-xs transition border border-gray-700 hover:border-green-500/50" data-prompt="太空站內部，科幻風格，宇航員，地球窗外，高科技設備，電影級光效">🚀 太空站</button>';
  html += '        </div>';
  html += '      </div>';
  html += '    </div>';
  html += '  </aside>';
  html += '</div>';
  
  html += '<div id="historyModal" class="modal">';
  html += '  <div class="glass-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">';
  html += '    <div class="p-4 border-b border-gray-700 flex items-center justify-between">';
  html += '      <div class="flex items-center gap-3">';
  html += '        <span class="text-2xl">📚</span>';
  html += '        <h3 class="text-xl font-bold">生成歷史</h3>';
  html += '        <span class="bg-green-600/20 text-green-400 border border-green-600/30 px-3 py-1 rounded-full text-xs">總共 <span id="modalHistoryCount">0</span> 條記錄</span>';
  html += '      </div>';
  html += '      <div class="flex items-center gap-2">';
  html += '        <button id="clearHistoryBtn" class="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm flex items-center gap-2 transition">';
  html += '          <span>🗑️</span>';
  html += '          <span>清空歷史</span>';
  html += '        </button>';
  html += '        <button id="closeHistoryBtn" class="w-8 h-8 rounded-lg hover:bg-gray-700 flex items-center justify-center transition text-xl">✖️</button>';
  html += '      </div>';
  html += '    </div>';
  html += '    <div id="historyList" class="flex-1 overflow-y-auto p-4">';
  html += '      <div id="historyEmpty" class="flex flex-col items-center justify-center py-16">';
  html += '        <span class="text-6xl mb-4 opacity-50">📭</span>';
  html += '        <p class="text-gray-400 text-center">你生成的圖像將會顯示在這裡</p>';
  html += '      </div>';
  html += '      <div id="historyGrid" class="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>';
  html += '    </div>';
  html += '  </div>';
  html += '</div>';
  
  html += '<div id="imageViewerModal" class="modal">';
  html += '  <div class="relative max-w-7xl w-full mx-auto">';
  html += '    <button id="closeViewerBtn" class="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg hover:bg-black/70 flex items-center justify-center text-2xl transition border border-white/20">✖️</button>';
  html += '    <div id="viewerContent" class="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"></div>';
  html += '  </div>';
  html += '</div>';
  
  return html;
}
function buildHTML_part3() {
  let html = '';
  
  html += '<script>';
  html += 'const CONFIG=' + JSON.stringify(CONFIG) + ';';
  html += 'let currentParams={};';
  html += 'let generationStartTime=0;';
  html += 'let timerInterval=null;';
  html += 'let history=[];';
  
  html += 'document.addEventListener("DOMContentLoaded",()=>{';
  html += '  initializeApp();';
  html += '  loadHistory();';
  html += '  updateHistoryCount();';
  html += '});';
  
  html += 'function initializeApp(){';
  html += '  document.getElementById("generateForm").addEventListener("submit",handleGenerate);';
  html += '  document.getElementById("model").addEventListener("change",updateModelInfo);';
  html += '  document.getElementById("style").addEventListener("change",updateStylePreview);';
  html += '  document.getElementById("qualityMode").addEventListener("change",updateQualityDesc);';
  html += '  document.getElementById("advancedToggle").addEventListener("click",toggleAdvanced);';
  html += '  document.getElementById("historyBtn").addEventListener("click",showHistory);';
  html += '  document.getElementById("closeHistoryBtn").addEventListener("click",hideHistory);';
  html += '  document.getElementById("clearHistoryBtn").addEventListener("click",clearHistory);';
  html += '  document.getElementById("closeViewerBtn").addEventListener("click",hideImageViewer);';
  html += '  document.getElementById("retryBtn").addEventListener("click",()=>showState("empty"));';
  html += '  document.querySelectorAll(".example-btn").forEach(btn=>{';
  html += '    btn.addEventListener("click",(e)=>{document.getElementById("prompt").value=e.target.dataset.prompt;});';
  html += '  });';
  html += '  document.getElementById("historyModal").addEventListener("click",(e)=>{if(e.target.id==="historyModal")hideHistory();});';
  html += '  document.getElementById("imageViewerModal").addEventListener("click",(e)=>{if(e.target.id==="imageViewerModal")hideImageViewer();});';
  html += '  updateModelInfo();';
  html += '  updateStylePreview();';
  html += '  updateQualityDesc();';
  html += '}';
  
  html += 'async function handleGenerate(e){';
  html += '  e.preventDefault();';
  html += '  const prompt=document.getElementById("prompt").value.trim();';
  html += '  if(!prompt){alert("請輸入提示詞");return;}';
  html += '  const sizeKey=document.getElementById("size").value;';
  html += '  const sizeConfig=CONFIG.PRESET_SIZES[sizeKey];';
  html += '  currentParams={';
  html += '    prompt:prompt,';
  html += '    model:document.getElementById("model").value,';
  html += '    width:sizeConfig.width,';
  html += '    height:sizeConfig.height,';
  html += '    seed:parseInt(document.getElementById("seed").value)||-1,';
  html += '    style:document.getElementById("style").value,';
  html += '    quality_mode:document.getElementById("qualityMode").value,';
  html += '    negative_prompt:document.getElementById("negativePrompt").value.trim(),';
  html += '    auto_optimize:document.getElementById("autoOptimize").checked,';
  html += '    auto_hd:document.getElementById("autoHD").checked';
  html += '  };';
  html += '  showState("loading");';
  html += '  startTimer();';
  html += '  try{';
  html += '    const response=await fetch("/_internal/generate",{';
  html += '      method:"POST",';
  html += '      headers:{"Content-Type":"application/json"},';
  html += '      body:JSON.stringify(currentParams)';
  html += '    });';
  html += '    stopTimer();';
  html += '    if(!response.ok){';
  html += '      const error=await response.json();';
  html += '      throw new Error(error.error?.message||"生成失敗");';
  html += '    }';
  html += '    const usedSeed=response.headers.get("X-Seed");';
  html += '    const genTime=response.headers.get("X-Generation-Time");';
  html += '    const usedModel=response.headers.get("X-Model");';
  html += '    const styleName=response.headers.get("X-Style-Name");';
  html += '    const blob=await response.blob();';
  html += '    const imageUrl=URL.createObjectURL(blob);';
  html += '    displayResults([{url:imageUrl,seed:usedSeed,model:usedModel,size:sizeConfig.name,time:genTime,style:styleName}]);';
  html += '    saveToHistory({timestamp:Date.now(),prompt:currentParams.prompt,params:currentParams,result:{url:imageUrl,seed:usedSeed,model:usedModel,size:sizeConfig.width+"×"+sizeConfig.height,time:genTime,style:styleName}});';
  html += '  }catch(error){';
  html += '    stopTimer();';
  html += '    showError(error.message);';
  html += '    console.error("Generation error:",error);';
  html += '  }';
  html += '}';
  
  html += 'function displayResults(images){';
  html += '  showState("results");';
  html += '  const imageGrid=document.getElementById("imageGrid");';
  html += '  imageGrid.innerHTML="";';
  html += '  images.forEach((img,idx)=>{';
  html += '    const card=document.createElement("div");';
  html += '    card.className="image-container group cursor-pointer";';
  html += '    card.innerHTML=\'<img src="\'+img.url+\'" class="w-full h-auto"><div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"><button class="download-single px-4 py-2 bg-green-600 rounded-lg text-white font-medium flex items-center gap-2 transform scale-90 group-hover:scale-100 transition" data-url="\'+img.url+\'" data-idx="\'+idx+\'"><span>⬇️</span><span>下載</span></button></div>\';';
  html += '    card.addEventListener("click",(e)=>{if(!e.target.closest(".download-single"))showImageViewer(img.url);});';
  html += '    imageGrid.appendChild(card);';
  html += '  });';
  html += '  document.querySelectorAll(".download-single").forEach(btn=>{';
  html += '    btn.addEventListener("click",(e)=>{e.stopPropagation();downloadImage(e.target.closest("button").dataset.url,e.target.closest("button").dataset.idx);});';
  html += '  });';
  html += '  document.getElementById("imageCount").textContent=images.length;';
  html += '  document.getElementById("usedModel").textContent=images[0].model;';
  html += '  document.getElementById("usedSize").textContent=images[0].size;';
  html += '  document.getElementById("usedSeed").textContent=images[0].seed;';
  html += '  document.getElementById("generationTime").textContent=images[0].time+"s";';
  html += '  document.getElementById("downloadAllBtn").onclick=()=>downloadAllImages(images);';
  html += '  document.getElementById("regenerateBtn").onclick=()=>document.getElementById("generateForm").dispatchEvent(new Event("submit"));';
  html += '  document.getElementById("reuseBtn").onclick=()=>reuseParameters();';
  html += '}';
  
  html += 'function showState(state){';
  html += '  const states=["empty","loading","results","error"];';
  html += '  states.forEach(s=>{';
  html += '    const elem=document.getElementById(s+"State");';
  html += '    if(elem){';
  html += '      elem.classList.toggle("hidden",s!==state);';
  html += '      elem.classList.toggle("flex",s===state);';
  html += '    }';
  html += '  });';
  html += '  if(state==="results"){';
  html += '    document.getElementById("resultsContainer").classList.remove("hidden");';
  html += '  }else{';
  html += '    document.getElementById("resultsContainer").classList.add("hidden");';
  html += '  }';
  html += '}';
  
  html += 'function showError(message){';
  html += '  showState("error");';
  html += '  document.getElementById("errorMessage").textContent=message;';
  html += '}';
  
  html += 'function startTimer(){';
  html += '  generationStartTime=Date.now();';
  html += '  document.getElementById("elapsedTime").textContent="0";';
  html += '  timerInterval=setInterval(()=>{';
  html += '    const elapsed=Math.floor((Date.now()-generationStartTime)/1000);';
  html += '    document.getElementById("elapsedTime").textContent=elapsed;';
  html += '    const progress=Math.min(95,elapsed*3);';
  html += '    document.getElementById("progressBar").style.width=progress+"%";';
  html += '  },1000);';
  html += '}';
  
  html += 'function stopTimer(){';
  html += '  if(timerInterval){clearInterval(timerInterval);timerInterval=null;}';
  html += '  document.getElementById("progressBar").style.width="100%";';
  html += '}';
  
  html += 'function updateModelInfo(){';
  html += '  const modelId=document.getElementById("model").value;';
  html += '  const model=CONFIG.PROVIDERS.pollinations.models.find(m=>m.id===modelId);';
  html += '  if(model){';
  html += '    document.getElementById("modelPrice").textContent=model.pricing?.standard||"Free";';
  html += '    document.getElementById("modelSpeed").textContent=model.speed==="fast"?"極快":model.speed==="medium"?"中等":"較慢";';
  html += '    document.getElementById("modelParams").textContent=model.parameters||"-";';
  html += '  }';
  html += '}';
  
  html += 'function updateStylePreview(){';
  html += '  const styleId=document.getElementById("style").value;';
  html += '  const style=CONFIG.STYLE_PRESETS[styleId];';
  html += '  if(style){';
  html += '    document.getElementById("currentStyleName").textContent=style.name;';
  html += '    document.getElementById("styleDescription").textContent=style.description;';
  html += '  }else{';
  html += '    document.getElementById("currentStyleName").textContent="無風格";';
  html += '    document.getElementById("styleDescription").textContent="不使用任何預設風格";';
  html += '  }';
  html += '}';
  
  html += 'function updateQualityDesc(){';
  html += '  const mode=document.getElementById("qualityMode").value;';
  html += '  const descriptions={economy:"快速生成",standard:"平衡質量與速度",ultra:"極致質量"};';
  html += '  document.getElementById("qualityDesc").textContent=descriptions[mode];';
  html += '}';
  
  html += 'function toggleAdvanced(){';
  html += '  const section=document.getElementById("advancedSection");';
  html += '  const icon=document.getElementById("advancedIcon");';
  html += '  section.classList.toggle("open");';
  html += '  icon.style.transform=section.classList.contains("open")?"rotate(180deg)":"rotate(0)";';
  html += '}';
  
  html += 'function loadHistory(){';
  html += '  try{';
  html += '    const saved=localStorage.getItem("flux_ai_history");';
  html += '    history=saved?JSON.parse(saved):[];';
  html += '  }catch(e){';
  html += '    console.error("Failed to load history:",e);';
  html += '    history=[];';
  html += '  }';
  html += '}';
  
  html += 'function saveToHistory(item){';
  html += '  history.unshift(item);';
  html += '  if(history.length>100)history=history.slice(0,100);';
  html += '  try{';
  html += '    localStorage.setItem("flux_ai_history",JSON.stringify(history));';
  html += '    updateHistoryCount();';
  html += '  }catch(e){';
  html += '    console.error("Failed to save history:",e);';
  html += '  }';
  html += '}';
  
  html += 'function updateHistoryCount(){';
  html += '  const count=history.length;';
  html += '  document.getElementById("historyCount").textContent=count;';
  html += '  document.getElementById("modalHistoryCount").textContent=count;';
  html += '}';
  
  html += 'function showHistory(){';
  html += '  document.getElementById("historyModal").classList.add("show");';
  html += '  renderHistory();';
  html += '}';
  
  html += 'function hideHistory(){';
  html += '  document.getElementById("historyModal").classList.remove("show");';
  html += '}';
  
  html += 'function renderHistory(){';
  html += '  const grid=document.getElementById("historyGrid");';
  html += '  const empty=document.getElementById("historyEmpty");';
  html += '  if(history.length===0){';
  html += '    grid.classList.add("hidden");';
  html += '    empty.classList.remove("hidden");';
  html += '    return;';
  html += '  }';
  html += '  empty.classList.add("hidden");';
  html += '  grid.classList.remove("hidden");';
  html += '  grid.innerHTML="";';
  html += '  history.forEach((item,idx)=>{';
  html += '    const card=document.createElement("div");';
  html += '    card.className="glass-card p-3 rounded-xl hover:scale-105 transition cursor-pointer";';
  html += '    card.innerHTML=\'<div class="aspect-square rounded-lg overflow-hidden mb-2 bg-gray-900"><img src="\'+item.result.url+\'" class="w-full h-full object-cover"></div><div class="text-xs space-y-1"><p class="text-gray-400 truncate">\'+item.prompt+\'</p><div class="flex items-center justify-between text-gray-500"><span>🤖 \'+item.result.model+\'</span><span>📐 \'+item.result.size+\'</span></div></div>\';';
  html += '    card.addEventListener("click",()=>showImageViewer(item.result.url));';
  html += '    grid.appendChild(card);';
  html += '  });';
  html += '}';
  
  html += 'function clearHistory(){';
  html += '  if(!confirm("確定要清空所有歷史記錄嗎？"))return;';
  html += '  history=[];';
  html += '  localStorage.removeItem("flux_ai_history");';
  html += '  updateHistoryCount();';
  html += '  renderHistory();';
  html += '}';
  
  html += 'function showImageViewer(url){';
  html += '  const modal=document.getElementById("imageViewerModal");';
  html += '  const content=document.getElementById("viewerContent");';
  html += '  content.innerHTML=\'<img src="\'+url+\'" class="w-full h-auto max-h-[85vh] object-contain">\';';
  html += '  modal.classList.add("show");';
  html += '}';
  
  html += 'function hideImageViewer(){';
  html += '  document.getElementById("imageViewerModal").classList.remove("show");';
  html += '}';
  
  html += 'function downloadImage(url,idx){';
  html += '  const a=document.createElement("a");';
  html += '  a.href=url;';
  html += '  a.download="flux-ai-"+Date.now()+"-"+idx+".png";';
  html += '  a.click();';
  html += '}';
  
  html += 'function downloadAllImages(images){';
  html += '  images.forEach((img,idx)=>{';
  html += '    setTimeout(()=>downloadImage(img.url,idx),idx*500);';
  html += '  });';
  html += '}';
  
  html += 'function reuseParameters(){';
  html += '  if(currentParams.seed!==-1){';
  html += '    document.getElementById("seed").value=currentParams.seed;';
  html += '  }';
  html += '  alert("✅ 參數已重用，您可以修改提示詞後再次生成！");';
  html += '}';
  
  html += '</script>';
  html += '</body>';
  html += '</html>';
  
  return html;
}

function buildHTML() {
  return buildHTML() + buildHTML_part2() + buildHTML_part3();
}
