const CONFIG = {
  PROJECT_NAME: 'Flux AI Pro',
  PROJECT_VERSION: '3.0.0',
  
  PROVIDERS: {
    pollinations: {
      name: 'Pollinations AI',
      endpoint: 'https://image.pollinations.ai',
      pathPrefix: '/prompt',
      models: [
        {
          id: 'zimage',
          name: 'Zimage (極速)',
          category: 'fast',
          speed: 'fast',
          parameters: '6B',
          pricing: { standard: '$0.0002' },
          description: '極快速度，適合快速測試'
        },
        {
          id: 'flux',
          name: 'Flux Pro',
          category: 'balanced',
          speed: 'medium',
          parameters: '12B',
          pricing: { standard: '$0.05' },
          description: '平衡質量與速度，推薦使用'
        },
        {
          id: 'flux-realism',
          name: 'Flux Realism',
          category: 'quality',
          speed: 'medium',
          parameters: '12B',
          pricing: { standard: '$0.05' },
          description: '專注寫實風格的高質量模型'
        },
        {
          id: 'flux-cablyai',
          name: 'Flux CablyAI',
          category: 'quality',
          speed: 'medium',
          parameters: '12B',
          pricing: { standard: '$0.05' },
          description: 'CablyAI 優化版本'
        },
        {
          id: 'flux-anime',
          name: 'Flux Anime',
          category: 'quality',
          speed: 'medium',
          parameters: '12B',
          pricing: { standard: '$0.05' },
          description: '動漫風格專用模型'
        },
        {
          id: 'flux-3d',
          name: 'Flux 3D',
          category: 'quality',
          speed: 'medium',
          parameters: '12B',
          pricing: { standard: '$0.05' },
          description: '3D 渲染風格模型'
        },
        {
          id: 'turbo',
          name: 'Turbo',
          category: 'fast',
          speed: 'fast',
          parameters: '8B',
          pricing: { standard: '$0.001' },
          description: '快速生成，質量較好'
        },
        {
          id: 'kontext',
          name: 'Kontext (圖生圖)',
          category: 'image-to-image',
          speed: 'medium',
          parameters: '10B',
          pricing: { standard: '$0.03' },
          description: '支持參考圖像的圖生圖模型'
        }
      ]
    }
  },
  
  POLLINATIONS_AUTH: {
    enabled: false,
    token: '',
    method: 'Bearer'
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
    'none': {
      name: '無風格',
      icon: '⚪',
      category: 'none',
      description: '不使用任何預設風格',
      prompt: '',
      negative: ''
    },
    'photorealistic': {
      name: '照片寫實',
      icon: '📷',
      category: 'realistic',
      description: '極致寫實的照片效果',
      prompt: 'photorealistic, highly detailed, 8k uhd, professional photography, realistic lighting',
      negative: 'cartoon, anime, painting, illustration, drawing'
    },
    'portrait': {
      name: '人像攝影',
      icon: '👤',
      category: 'realistic',
      description: '專業人像攝影風格',
      prompt: 'portrait photography, professional lighting, bokeh, sharp focus, high quality',
      negative: 'full body, landscape, wide angle'
    },
    'cinematic': {
      name: '電影質感',
      icon: '🎬',
      category: 'cinematic',
      description: '電影級畫面質感',
      prompt: 'cinematic lighting, film grain, dramatic atmosphere, movie scene, color grading',
      negative: 'amateur, low quality, snapshot'
    },
    'studio': {
      name: '攝影棚',
      icon: '💡',
      category: 'realistic',
      description: '專業攝影棚光效',
      prompt: 'studio lighting, professional setup, clean background, high key lighting',
      negative: 'outdoor, natural light, messy'
    },
    'anime': {
      name: '日系動漫',
      icon: '🎌',
      category: 'anime',
      description: '日本動漫畫風',
      prompt: 'anime style, manga, japanese animation, vibrant colors, cel shaded',
      negative: 'realistic, photorealistic, 3d'
    },
    'anime_portrait': {
      name: '動漫人物',
      icon: '👧',
      category: 'anime',
      description: '動漫角色肖像',
      prompt: 'anime character, detailed eyes, colorful hair, expressive face, manga style',
      negative: 'realistic, photographic'
    },
    'chibi': {
      name: 'Q版可愛',
      icon: '🧸',
      category: 'anime',
      description: '可愛 Q 版風格',
      prompt: 'chibi style, cute, kawaii, small body big head, adorable',
      negative: 'realistic, mature, serious'
    },
    'ghibli': {
      name: '吉卜力',
      icon: '🌿',
      category: 'anime',
      description: '宮崎駿吉卜力風格',
      prompt: 'studio ghibli style, hayao miyazaki, watercolor, dreamy atmosphere',
      negative: 'dark, horror, realistic'
    },
    'oil_painting': {
      name: '油畫',
      icon: '🎨',
      category: 'art',
      description: '古典油畫風格',
      prompt: 'oil painting, classical art, textured brushstrokes, rich colors, masterpiece',
      negative: 'digital, modern, photograph'
    },
    'watercolor': {
      name: '水彩畫',
      icon: '💧',
      category: 'art',
      description: '水彩藝術風格',
      prompt: 'watercolor painting, soft edges, transparent colors, artistic, delicate',
      negative: 'sharp, digital, photorealistic'
    },
    'impressionism': {
      name: '印象派',
      icon: '🌅',
      category: 'art',
      description: '印象派藝術',
      prompt: 'impressionism, monet style, loose brushwork, light effects, artistic',
      negative: 'realistic, detailed, sharp'
    },
    'van_gogh': {
      name: '梵高風格',
      icon: '🌻',
      category: 'art',
      description: '梵高的繪畫風格',
      prompt: 'van gogh style, starry night, swirling brushstrokes, expressive, vibrant',
      negative: 'realistic, modern, digital'
    },
    'ukiyo_e': {
      name: '浮世繪',
      icon: '🗾',
      category: 'traditional',
      description: '日本浮世繪',
      prompt: 'ukiyo-e, japanese woodblock print, hokusai style, traditional japanese art',
      negative: 'modern, realistic, western'
    },
    'digital_art': {
      name: '數位藝術',
      icon: '💻',
      category: 'digital',
      description: '現代數位繪畫',
      prompt: 'digital art, digital painting, concept art, artstation, detailed',
      negative: 'traditional, photograph, sketch'
    },
    'concept_art': {
      name: '概念設計',
      icon: '🎭',
      category: 'digital',
      description: '遊戲概念藝術',
      prompt: 'concept art, game design, detailed illustration, professional',
      negative: 'amateur, simple, sketch'
    },
    'vector': {
      name: '向量插畫',
      icon: '📐',
      category: 'digital',
      description: '扁平向量風格',
      prompt: 'vector art, flat design, clean lines, minimalist, geometric',
      negative: 'realistic, textured, 3d'
    },
    'pixel_art': {
      name: '像素藝術',
      icon: '🕹️',
      category: 'digital',
      description: '復古像素風格',
      prompt: 'pixel art, 8bit, retro game style, pixelated, nostalgic',
      negative: 'realistic, smooth, high resolution'
    },
    '3d_render': {
      name: '3D 渲染',
      icon: '🎲',
      category: 'digital',
      description: '3D 建模渲染',
      prompt: '3d render, octane render, blender, detailed model, ray tracing',
      negative: '2d, flat, sketch'
    },
    'low_poly': {
      name: '低多邊形',
      icon: '🔷',
      category: 'digital',
      description: '低面數 3D 風格',
      prompt: 'low poly, geometric, stylized 3d, minimal polygons, clean shapes',
      negative: 'realistic, high detail, organic'
    },
    'clay': {
      name: '黏土質感',
      icon: '🧱',
      category: 'digital',
      description: '黏土建模風格',
      prompt: 'clay render, claymation, soft shapes, tactile, playful',
      negative: 'realistic, sharp, metallic'
    },
    'fantasy': {
      name: '奇幻藝術',
      icon: '🧙',
      category: 'fantasy',
      description: '奇幻魔法世界',
      prompt: 'fantasy art, magical, ethereal, enchanted, mystical atmosphere',
      negative: 'realistic, modern, mundane'
    },
    'dark_fantasy': {
      name: '黑暗奇幻',
      icon: '🦇',
      category: 'fantasy',
      description: '黑暗哥特風格',
      prompt: 'dark fantasy, gothic, mysterious, dramatic lighting, ominous',
      negative: 'bright, cheerful, cute'
    },
    'fairy_tale': {
      name: '童話風格',
      icon: '🏰',
      category: 'fantasy',
      description: '童話故事風格',
      prompt: 'fairy tale, storybook illustration, whimsical, dreamy, magical',
      negative: 'realistic, dark, modern'
    },
    'cyberpunk': {
      name: '賽博朋克',
      icon: '🌃',
      category: 'scifi',
      description: '未來霓虹都市',
      prompt: 'cyberpunk, neon lights, futuristic city, high tech low life, dystopian',
      negative: 'nature, traditional, ancient'
    },
    'sci_fi': {
      name: '科幻未來',
      icon: '🚀',
      category: 'scifi',
      description: '科幻科技風格',
      prompt: 'sci-fi, futuristic, high tech, space age, advanced technology',
      negative: 'fantasy, medieval, traditional'
    },
    'steampunk': {
      name: '蒸汽朋克',
      icon: '⚙️',
      category: 'scifi',
      description: '維多利亞蒸汽時代',
      prompt: 'steampunk, victorian era, brass, gears, steam powered, retro futuristic',
      negative: 'modern, digital, clean'
    },
    'abstract': {
      name: '抽象藝術',
      icon: '🎨',
      category: 'abstract',
      description: '抽象表現主義',
      prompt: 'abstract art, non representational, expressive, bold colors, artistic',
      negative: 'realistic, detailed, photographic'
    },
    'geometric': {
      name: '幾何抽象',
      icon: '🔶',
      category: 'abstract',
      description: '幾何圖形藝術',
      prompt: 'geometric abstract, shapes, patterns, mathematical, clean lines',
      negative: 'organic, realistic, messy'
    },
    'psychedelic': {
      name: '迷幻藝術',
      icon: '🌈',
      category: 'abstract',
      description: '迷幻視覺效果',
      prompt: 'psychedelic art, trippy, vibrant colors, surreal, kaleidoscopic',
      negative: 'realistic, muted, simple'
    },
    'vintage': {
      name: '復古照片',
      icon: '📻',
      category: 'retro',
      description: '懷舊復古質感',
      prompt: 'vintage photography, retro, aged, nostalgic, film grain, faded colors',
      negative: 'modern, digital, clean'
    },
    'polaroid': {
      name: '寶麗來',
      icon: '📸',
      category: 'retro',
      description: '拍立得風格',
      prompt: 'polaroid style, instant camera, vintage look, soft focus, faded',
      negative: 'modern, sharp, digital'
    },
    'vaporwave': {
      name: '蒸汽波',
      icon: '🌸',
      category: 'retro',
      description: '80年代美學',
      prompt: 'vaporwave aesthetic, 80s 90s nostalgia, pastel colors, glitch art',
      negative: 'realistic, modern, natural'
    },
    'minimalist': {
      name: '極簡主義',
      icon: '⚪',
      category: 'minimal',
      description: '簡約設計',
      prompt: 'minimalist, simple, clean, negative space, elegant, less is more',
      negative: 'complex, detailed, busy'
    },
    'line_art': {
      name: '線條藝術',
      icon: '✏️',
      category: 'minimal',
      description: '簡潔線條畫',
      prompt: 'line art, simple lines, black and white, clean strokes, elegant',
      negative: 'colored, textured, complex'
    },
    'comic': {
      name: '漫畫風格',
      icon: '💥',
      category: 'other',
      description: '美式漫畫',
      prompt: 'comic book style, bold lines, halftone, pop art, graphic novel',
      negative: 'realistic, soft, watercolor'
    },
    'noir': {
      name: '黑色電影',
      icon: '🎩',
      category: 'other',
      description: '黑白電影風格',
      prompt: 'film noir, black and white, dramatic shadows, high contrast, mysterious',
      negative: 'colorful, bright, cheerful'
    },
    'horror': {
      name: '恐怖驚悚',
      icon: '👻',
      category: 'other',
      description: '恐怖氛圍',
      prompt: 'horror, creepy, dark atmosphere, unsettling, eerie, terrifying',
      negative: 'cute, bright, cheerful'
    },
    'surreal': {
      name: '超現實',
      icon: '🌀',
      category: 'other',
      description: '超現實主義',
      prompt: 'surrealism, dreamlike, bizarre, dali style, impossible, mind bending',
      negative: 'realistic, normal, logical'
    },
    'pop_art': {
      name: '波普藝術',
      icon: '🎪',
      category: 'other',
      description: '波普藝術風格',
      prompt: 'pop art, warhol style, bold colors, graphic, repetition, commercial',
      negative: 'subtle, realistic, classical'
    }
  },
  
  FETCH_TIMEOUT: 120000,
  MAX_HISTORY: 100,
  DEFAULT_QUALITY: 'standard'
};
const TRANSLATIONS = {
  'zh-TW': {
    title: 'Flux AI Pro',
    subtitle: '專業 AI 圖像生成平台',
    version: '版本',
    nav: {
      generate: '生成',
      history: '歷史',
      settings: '設置'
    },
    params: {
      title: '生成參數',
      modelSelection: '模型選擇',
      priceLabel: '價格',
      speedLabel: '速度',
      paramsLabel: '參數',
      sizePreset: '尺寸預設',
      artStyle: '藝術風格',
      styleCount: '種風格',
      categories: '大類別',
      qualityMode: '質量模式',
      economy: '經濟模式',
      economyDesc: '快速生成，適合測試',
      standard: '標準模式',
      standardDesc: '平衡質量與速度（推薦）',
      ultra: '超高清模式',
      ultraDesc: '極致質量，生成時間較長',
      advancedOptions: '進階選項',
      seed: '隨機種子',
      seedPlaceholder: '-1 為隨機',
      numOutputs: '生成數量',
      autoOptimize: '參數自動優化',
      autoHD: 'HD 自動增強',
      generateBtn: '開始生成'
    },
    results: {
      title: '生成結果',
      waiting: '尚未生成任何圖像',
      waitingDesc: '填寫左側參數並輸入提示詞後點擊生成按鈕',
      generating: 'AI 正在創作中',
      generatingDesc: '這可能需要幾秒鐘到一分鐘',
      timeElapsed: '已用時',
      seconds: '秒',
      success: '生成成功！',
      successDesc: '已生成',
      images: '張圖片',
      failed: '生成失敗',
      download: '下載圖像',
      regenerate: '再次生成',
      viewHistory: '查看歷史',
      reuse: '重用參數'
    },
    prompt: {
      title: '提示詞',
      positive: '正面提示詞',
      positivePlaceholder: '描述你想生成的圖像...\n\n例如：\n一隻可愛的橘色貓咪坐在窗邊，陽光灑在它身上，柔和的光影效果，高清攝影',
      negative: '負面提示詞',
      negativePlaceholder: '描述不想要的元素...\n\n例如：\n模糊、低質量、變形、多餘的肢體',
      negativeOptional: '（可選）',
      referenceImages: '參考圖像 URL',
      referenceImagesPlaceholder: 'https://example.com/image.jpg',
      referenceOptional: '（圖生圖 - 可選）',
      autoTranslate: '支持中文自動翻譯',
      supportImageToImage: '支持圖生圖的模型：Kontext',
      styleHints: '風格提示',
      hints: [
        '詳細的描述可以獲得更好的效果',
        '使用藝術風格可以增強視覺效果',
        '中文提示詞會自動翻譯為英文',
        '負面提示詞幫助排除不想要的元素',
        '參考圖像僅適用於 Kontext 模型'
      ],
      currentStyle: '當前風格',
      noStyle: '無風格',
      styleDescription: '風格描述'
    },
    history: {
      title: '生成歷史',
      count: '條記錄',
      total: '總共',
      noHistory: '暫無歷史記錄',
      noHistoryDesc: '你生成的圖像將會顯示在這裡',
      export: '匯出記錄',
      clear: '清空歷史',
      confirmClear: '確定要清空所有歷史記錄嗎？此操作不可撤銷。',
      delete: '刪除',
      viewImage: '查看大圖',
      close: '關閉'
    },
    styleCategories: {
      none: '無風格',
      realistic: '寫實風格',
      anime: '動漫風格',
      art: '藝術風格',
      digital: '數位藝術',
      cinematic: '電影風格',
      fantasy: '奇幻風格',
      scifi: '科幻風格',
      abstract: '抽象風格',
      traditional: '傳統藝術',
      modern: '現代風格',
      retro: '復古風格',
      minimal: '極簡風格',
      other: '其他風格'
    },
    status: {
      online: '系統正常',
      apiConfigured: 'API 已配置',
      ready: '就緒'
    },
    errors: {
      promptRequired: '請輸入提示詞',
      generationFailed: '生成失敗，請稍後重試',
      networkError: '網絡錯誤，請檢查連接',
      apiError: 'API 錯誤'
    }
  },
  'en': {
    title: 'Flux AI Pro',
    subtitle: 'Professional AI Image Generation',
    version: 'Version',
    nav: { generate: 'Generate', history: 'History', settings: 'Settings' },
    params: {
      title: 'Parameters',
      modelSelection: 'Model',
      priceLabel: 'Price',
      speedLabel: 'Speed',
      paramsLabel: 'Params',
      sizePreset: 'Size',
      artStyle: 'Style',
      styleCount: 'Styles',
      categories: 'Categories',
      qualityMode: 'Quality',
      economy: 'Economy',
      economyDesc: 'Fast generation',
      standard: 'Standard',
      standardDesc: 'Balanced quality',
      ultra: 'Ultra',
      ultraDesc: 'High quality',
      advancedOptions: 'Advanced',
      seed: 'Seed',
      seedPlaceholder: '-1 for random',
      numOutputs: 'Count',
      autoOptimize: 'Auto optimize',
      autoHD: 'Auto HD',
      generateBtn: 'Generate'
    },
    results: {
      title: 'Results',
      waiting: 'No images yet',
      waitingDesc: 'Fill parameters and click generate',
      generating: 'Generating',
      generatingDesc: 'Please wait',
      timeElapsed: 'Time',
      seconds: 's',
      success: 'Success!',
      successDesc: 'Generated',
      images: 'images',
      failed: 'Failed',
      download: 'Download',
      regenerate: 'Regenerate',
      viewHistory: 'History',
      reuse: 'Reuse'
    },
    prompt: {
      title: 'Prompt',
      positive: 'Positive',
      positivePlaceholder: 'Describe your image...\n\nExample:\nA cute orange cat sitting by the window, sunlight, soft lighting, high quality',
      negative: 'Negative',
      negativePlaceholder: 'Unwanted elements...\n\nExample:\nblurry, low quality, distorted, extra limbs',
      negativeOptional: '(Optional)',
      referenceImages: 'Reference',
      referenceImagesPlaceholder: 'https://example.com/image.jpg',
      referenceOptional: '(Optional)',
      autoTranslate: 'Auto translate',
      supportImageToImage: 'Image-to-Image: Kontext',
      styleHints: 'Hints',
      hints: [
        'Detailed descriptions work better',
        'Use art styles for enhanced visuals',
        'Auto translation supported',
        'Use negative prompts to exclude elements',
        'Reference images work with Kontext model'
      ],
      currentStyle: 'Style',
      noStyle: 'None',
      styleDescription: 'Description'
    },
    history: {
      title: 'History',
      count: 'records',
      total: 'Total',
      noHistory: 'No history',
      noHistoryDesc: 'Generated images appear here',
      export: 'Export',
      clear: 'Clear',
      confirmClear: 'Clear all history?',
      delete: 'Delete',
      viewImage: 'View',
      close: 'Close'
    },
    styleCategories: {
      none: 'None',
      realistic: 'Realistic',
      anime: 'Anime',
      art: 'Art',
      digital: 'Digital',
      cinematic: 'Cinematic',
      fantasy: 'Fantasy',
      scifi: 'Sci-Fi',
      abstract: 'Abstract',
      traditional: 'Traditional',
      modern: 'Modern',
      retro: 'Retro',
      minimal: 'Minimal',
      other: 'Other'
    },
    status: { online: 'Online', apiConfigured: 'Configured', ready: 'Ready' },
    errors: {
      promptRequired: 'Prompt required',
      generationFailed: 'Generation failed',
      networkError: 'Network error',
      apiError: 'API Error'
    }
  }
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

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

function getLanguage(request) {
  const url = new URL(request.url);
  const langParam = url.searchParams.get('lang');
  
  if (langParam && TRANSLATIONS[langParam]) {
    return langParam;
  }
  
  const acceptLang = request.headers.get('accept-language') || '';
  
  if (acceptLang.includes('zh-TW') || acceptLang.includes('zh-HK')) {
    return 'zh-TW';
  }
  
  if (acceptLang.includes('zh')) {
    return 'zh-TW';
  }
  
  return 'zh-TW';
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

function log(level, message, data = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...data
  };
  console.log(JSON.stringify(logEntry));
}
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const startTime = Date.now();
    const clientIP = getClientIP(request);
    const lang = getLanguage(request);
    
    if (env.POLLINATIONS_API_KEY) {
      CONFIG.POLLINATIONS_AUTH.enabled = true;
      CONFIG.POLLINATIONS_AUTH.token = env.POLLINATIONS_API_KEY;
    }
    
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }
    
    try {
      const path = url.pathname;
      
      if (path === '/' || path === '') {
        return new Response(getHTML(lang), {
          status: 200,
          headers: corsHeaders({
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
          })
        });
      }
      
      if (path === '/health' || path === '/api/health') {
        return handleHealthCheck(env);
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
      
      if (path === '/api/styles') {
        return handleGetStyles(lang);
      }
      
      return errorResponse('Not Found', 404);
      
    } catch (error) {
      log('error', 'Request failed', {
        error: error.message,
        stack: error.stack,
        path: url.pathname,
        ip: clientIP
      });
      
      return errorResponse('Internal server error: ' + error.message, 500);
    }
  }
};

function handleHealthCheck(env) {
  const health = {
    status: 'ok',
    version: CONFIG.PROJECT_VERSION,
    timestamp: new Date().toISOString(),
    api_auth: {
      enabled: CONFIG.POLLINATIONS_AUTH.enabled,
      has_token: !!CONFIG.POLLINATIONS_AUTH.token
    },
    features: {
      models: CONFIG.PROVIDERS.pollinations.models.length,
      styles: Object.keys(CONFIG.STYLE_PRESETS).length,
      sizes: Object.keys(CONFIG.PRESET_SIZES).length
    },
    endpoints: {
      generate: '/_internal/generate',
      config: '/api/config',
      models: '/api/models',
      styles: '/api/styles'
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

function handleGetStyles(lang = 'zh-TW') {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['zh-TW'];
  
  const stylesByCategory = {};
  
  Object.entries(CONFIG.STYLE_PRESETS).forEach(([key, style]) => {
    const category = style.category;
    if (!stylesByCategory[category]) {
      stylesByCategory[category] = {
        name: t.styleCategories[category] || category,
        styles: []
      };
    }
    
    stylesByCategory[category].styles.push({
      id: key,
      name: style.name,
      icon: style.icon,
      description: style.description
    });
  });
  
  return successResponse({
    total: Object.keys(CONFIG.STYLE_PRESETS).length,
    categories: Object.keys(stylesByCategory).length,
    styles: stylesByCategory
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
      n: body.n || 1,
      negative_prompt: body.negative_prompt || '',
      auto_optimize: body.auto_optimize !== false,
      auto_hd: body.auto_hd !== false,
      reference_images: body.reference_images || []
    };
    
    const currentSeed = params.seed === -1 
      ? Math.floor(Math.random() * 1000000) 
      : params.seed;
    
    let finalPrompt = params.prompt;
    let finalNegative = params.negative_prompt;
    
    if (params.style !== 'none' && CONFIG.STYLE_PRESETS[params.style]) {
      const styleConfig = CONFIG.STYLE_PRESETS[params.style];
      
      if (styleConfig.prompt) {
        finalPrompt = `${params.prompt}, ${styleConfig.prompt}`;
      }
      
      if (styleConfig.negative) {
        finalNegative = finalNegative 
          ? `${finalNegative}, ${styleConfig.negative}`
          : styleConfig.negative;
      }
    }
    
    if (params.auto_hd) {
      switch (params.quality_mode) {
        case 'ultra':
          finalPrompt += ', ultra high quality, 8k uhd, highly detailed, masterpiece';
          finalNegative += ', low quality, blurry, pixelated, low resolution';
          break;
        case 'standard':
          finalPrompt += ', high quality, detailed';
          finalNegative += ', low quality, blurry';
          break;
        case 'economy':
          break;
      }
    }
    
    const encodedPrompt = encodeURIComponent(finalPrompt);
    const apiUrl = `${CONFIG.PROVIDERS.pollinations.endpoint}${CONFIG.PROVIDERS.pollinations.pathPrefix}/${encodedPrompt}?model=${params.model}&width=${params.width}&height=${params.height}&seed=${currentSeed}&nologo=true&enhance=true`;
    
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'image/*,*/*',
      'Referer': 'https://pollinations.ai/',
      'Origin': 'https://pollinations.ai'
    };
    
    if (CONFIG.POLLINATIONS_AUTH.enabled && CONFIG.POLLINATIONS_AUTH.token) {
      headers['Authorization'] = `${CONFIG.POLLINATIONS_AUTH.method} ${CONFIG.POLLINATIONS_AUTH.token}`;
    }
    
    log('info', 'Generating image', {
      model: params.model,
      size: `${params.width}x${params.height}`,
      seed: currentSeed,
      style: params.style,
      ip: clientIP
    });
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CONFIG.FETCH_TIMEOUT);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`API returned status ${response.status}: ${response.statusText}`);
    }
    
    const imageBlob = await response.blob();
    const imageBuffer = await imageBlob.arrayBuffer();
    
    const generationTime = ((Date.now() - startTime) / 1000).toFixed(2);
    
    log('info', 'Image generated successfully', {
      model: params.model,
      seed: currentSeed,
      size: `${params.width}x${params.height}`,
      time: generationTime + 's',
      bytes: imageBuffer.byteLength,
      ip: clientIP
    });
    
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
        'X-Generation-Mode': params.reference_images.length > 0 ? '圖生圖' : '文生圖',
        'Cache-Control': 'public, max-age=31536000, immutable'
      })
    });
    
  } catch (error) {
    const generationTime = ((Date.now() - startTime) / 1000).toFixed(2);
    
    log('error', 'Image generation failed', {
      error: error.message,
      time: generationTime + 's',
      ip: clientIP
    });
    
    if (error.name === 'AbortError') {
      return errorResponse('Request timeout after ' + (CONFIG.FETCH_TIMEOUT / 1000) + ' seconds', 408);
    }
    
    return errorResponse('Generation failed: ' + error.message, 500);
  }
}
function getHTML(lang = 'zh-TW') {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['zh-TW'];
  
  return `<!DOCTYPE html>
<html lang="${lang}" class="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t.title} v${CONFIG.PROJECT_VERSION}</title>
<meta name="description" content="${t.subtitle}">
<meta name="keywords" content="AI, 圖像生成, Flux, Stable Diffusion, AI Art">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎨</text></svg>">

<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(240 10% 3.9%)",
        foreground: "hsl(0 0% 98%)",
        card: "hsl(240 10% 5%)",
        "card-foreground": "hsl(0 0% 98%)",
        primary: {
          DEFAULT: "hsl(142.1 76.2% 36.3%)",
          foreground: "hsl(355.7 100% 97.3%)"
        },
        secondary: {
          DEFAULT: "hsl(240 3.7% 15.9%)",
          foreground: "hsl(0 0% 98%)"
        },
        muted: {
          DEFAULT: "hsl(240 3.7% 15.9%)",
          foreground: "hsl(240 5% 64.9%)"
        },
        accent: {
          DEFAULT: "hsl(240 3.7% 15.9%)",
          foreground: "hsl(0 0% 98%)"
        },
        border: "hsl(240 3.7% 15.9%)",
        input: "hsl(240 3.7% 15.9%)",
        ring: "hsl(142.1 76.2% 36.3%)"
      }
    }
  }
};
</script>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: linear-gradient(135deg, #0a0f1e 0%, #1a1f3a 50%, #0f1419 100%);
  background-attachment: fixed;
  color: hsl(0 0% 98%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  overflow-x: hidden;
}

.glass-card {
  background: rgba(30, 35, 50, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: all 0.3s ease;
}

.glass-card:hover {
  border-color: rgba(34, 197, 94, 0.3);
  box-shadow: 0 12px 40px 0 rgba(34, 197, 94, 0.15);
}

.input-field {
  background: rgba(30, 35, 50, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: hsl(0 0% 98%);
  transition: all 0.3s ease;
}

.input-field:focus {
  background: rgba(30, 35, 50, 0.8);
  border-color: hsl(142.1 76.2% 36.3%);
  outline: none;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.btn-primary {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, hsl(142.1 76.2% 36.3%) 0%, hsl(142.1 76.2% 46.3%) 100%);
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid hsl(142.1 76.2% 36.3%);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.collapsible-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.collapsible-content.open {
  max-height: 2000px;
}

.style-option {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  background: rgba(30, 35, 50, 0.3);
}

.style-option:hover {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  transform: translateY(-1px);
}

.style-option.active {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.5);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.image-container img {
  transition: transform 0.5s ease;
  width: 100%;
  height: auto;
  display: block;
}

.image-container:hover img {
  transform: scale(1.05);
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(30, 35, 50, 0.3);
}

::-webkit-scrollbar-thumb {
  background: rgba(34, 197, 94, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 197, 94, 0.7);
}

@media (max-width: 1024px) {
  .glass-card {
    backdrop-filter: blur(15px) saturate(150%);
  }
}

.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 9999;
  padding: 1rem;
  overflow-y: auto;
}

.modal.show {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

::selection {
  background-color: rgba(34, 197, 94, 0.3);
  color: inherit;
}
</style>
</head>

<body>
  <header class="glass-card border-b border-gray-800 sticky top-0 z-50">
    <div class="px-4 py-3 flex items-center justify-between max-w-screen-2xl mx-auto">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl shadow-lg">
          🎨
        </div>
        <div>
          <h1 class="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            ${t.title}
          </h1>
          <p class="text-xs text-gray-400">${t.version} ${CONFIG.PROJECT_VERSION}</p>
        </div>
      </div>
      
      <div class="flex items-center gap-2">
        <button id="historyBtn" class="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-sm flex items-center gap-2 border border-gray-700">
          <span>📚</span>
          <span class="hidden sm:inline">${t.nav.history}</span>
          <span id="historyCount" class="px-2 py-0.5 rounded-full bg-green-500 text-white text-xs font-bold min-w-[20px] text-center">0</span>
        </button>
        
        <select id="langSwitch" class="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm cursor-pointer input-field">
          <option value="zh-TW" ${lang === 'zh-TW' ? 'selected' : ''}>🇹🇼 繁中</option>
          <option value="en" ${lang === 'en' ? 'selected' : ''}>🇬🇧 EN</option>
        </select>
      </div>
    </div>
  </header>

  <div class="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] max-w-screen-2xl mx-auto">
    
    <aside id="leftPanel" class="w-full lg:w-80 xl:w-96 glass-card border-r border-gray-800 overflow-y-auto">
      <div class="p-4 space-y-4">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
          <span class="text-2xl">⚙️</span>
          <h2 class="text-lg font-bold">${t.params.title}</h2>
        </div>

        <form id="generateForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2 flex items-center gap-2">
              <span>🤖</span>
              <span>${t.params.modelSelection}</span>
            </label>
            <select id="model" class="input-field w-full rounded-lg px-3 py-2.5 text-sm cursor-pointer font-medium">
              ${CONFIG.PROVIDERS.pollinations.models.map(m => {
                const emoji = m.category === 'fast' ? '⚡' : m.category === 'balanced' ? '⚖️' : m.category === 'image-to-image' ? '🎨' : '🖼️';
                return `<option value="${m.id}">${emoji} ${m.name}</option>`;
              }).join('')}
            </select>
            
            <div class="mt-2 grid grid-cols-3 gap-2 text-xs">
              <div class="flex items-center gap-1 text-gray-400">
                <span>💰</span>
                <span id="modelPrice" class="text-green-400 font-medium">$0.0002</span>
              </div>
              <div class="flex items-center gap-1 text-gray-400">
                <span>⚡</span>
                <span id="modelSpeed" class="text-blue-400 font-medium">極快</span>
              </div>
              <div class="flex items-center gap-1 text-gray-400">
                <span>📊</span>
                <span id="modelParams" class="text-purple-400 font-medium">6B</span>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2 flex items-center gap-2">
              <span>📐</span>
              <span>${t.params.sizePreset}</span>
            </label>
            <select id="size" class="input-field w-full rounded-lg px-3 py-2.5 text-sm cursor-pointer">
              ${Object.entries(CONFIG.PRESET_SIZES).map(([key, size]) => {
                return `<option value="${key}">${size.icon} ${size.name} (${size.width}×${size.height})</option>`;
              }).join('')}
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2 flex items-center gap-2">
              <span>🎨</span>
              <span>${t.params.artStyle}</span>
              <span class="text-xs text-gray-400 ml-auto">(45+ ${t.params.styleCount})</span>
            </label>
            <select id="style" class="input-field w-full rounded-lg px-3 py-2.5 text-sm cursor-pointer">
              ${Object.entries(CONFIG.STYLE_PRESETS).map(([key, style]) => {
                return `<option value="${key}">${style.icon} ${style.name}</option>`;
              }).join('')}
            </select>
            
            <div id="stylePreview" class="mt-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <div class="text-xs font-semibold mb-1 flex items-center gap-2">
                <span>${t.prompt.currentStyle}:</span>
                <span id="currentStyleName" class="text-green-400">無風格</span>
              </div>
              <div id="styleDescription" class="text-xs text-gray-400 leading-relaxed">
                不使用任何預設風格
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2 flex items-center gap-2">
              <span>💎</span>
              <span>${t.params.qualityMode}</span>
            </label>
            <select id="qualityMode" class="input-field w-full rounded-lg px-3 py-2.5 text-sm cursor-pointer">
              <option value="economy">⚡ ${t.params.economy}</option>
              <option value="standard" selected>⚖️ ${t.params.standard}</option>
              <option value="ultra">💎 ${t.params.ultra}</option>
            </select>
            <p class="text-xs text-gray-400 mt-1.5" id="qualityDesc">${t.params.standardDesc}</p>
          </div>

          <div class="border-t border-gray-700 pt-4">
            <button type="button" id="advancedToggle" class="w-full flex items-center justify-between text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-800/50 transition">
              <span class="flex items-center gap-2">
                <span>🔧</span>
                <span>${t.params.advancedOptions}</span>
              </span>
              <span id="advancedIcon" class="text-gray-400 transition-transform">▼</span>
            </button>
            
            <div id="advancedSection" class="collapsible-content mt-3 space-y-3">
              <div>
                <label class="block text-xs font-medium mb-1.5 flex items-center gap-2">
                  <span>🎲</span>
                  <span>${t.params.seed}</span>
                </label>
                <input 
                  type="number" 
                  id="seed" 
                  value="-1" 
                  class="input-field w-full rounded-lg px-3 py-2 text-sm"
                  placeholder="${t.params.seedPlaceholder}"
                >
              </div>
              
              <div>
                <label class="block text-xs font-medium mb-1.5 flex items-center gap-2">
                  <span>🔢</span>
                  <span>${t.params.numOutputs}</span>
                </label>
                <input 
                  type="number" 
                  id="numOutputs" 
                  value="1" 
                  min="1" 
                  max="4" 
                  class="input-field w-full rounded-lg px-3 py-2 text-sm"
                >
              </div>
              
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-400 transition">
                  <input type="checkbox" id="autoOptimize" checked class="rounded w-4 h-4 text-green-600 focus:ring-2 focus:ring-green-500">
                  <span>⚡ ${t.params.autoOptimize}</span>
                </label>
                
                <label class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-400 transition">
                  <input type="checkbox" id="autoHD" checked class="rounded w-4 h-4 text-green-600 focus:ring-2 focus:ring-green-500">
                  <span>🔍 ${t.params.autoHD}</span>
                </label>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            id="generateBtn"
            class="btn-primary w-full py-3.5 rounded-xl font-bold text-base shadow-lg flex items-center justify-center gap-3 group"
          >
            <span class="text-xl group-hover:scale-110 transition-transform">🎨</span>
            <span>${t.params.generateBtn}</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </form>
      </div>
    </aside>
`;
}
    <main id="mainPanel" class="flex-1 glass-card overflow-y-auto">
      <div class="p-4 lg:p-6">
        <div class="flex items-center gap-2 mb-6 pb-3 border-b border-gray-700">
          <span class="text-2xl">🖼️</span>
          <h2 class="text-lg font-bold">${t.results.title}</h2>
        </div>

        <div id="emptyState" class="flex flex-col items-center justify-center py-16 px-4">
          <div class="w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-6 shadow-2xl">
            <span class="text-6xl opacity-50">🎨</span>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-300">${t.results.waiting}</h3>
          <p class="text-gray-400 text-center max-w-md">${t.results.waitingDesc}</p>
        </div>

        <div id="loadingState" class="hidden flex-col items-center justify-center py-16 px-4">
          <div class="spinner mb-6"></div>
          <h3 class="text-xl font-bold mb-2 text-green-400">${t.results.generating}</h3>
          <p class="text-gray-400 mb-4">${t.results.generatingDesc}</p>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span>⏱️</span>
            <span>${t.results.timeElapsed}: </span>
            <span id="elapsedTime" class="font-mono text-green-400">0</span>
            <span>${t.results.seconds}</span>
          </div>
          
          <div class="w-full max-w-md mt-6">
            <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>
        </div>

        <div id="resultsContainer" class="hidden">
          <div class="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-xl">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">✅</span>
              <div>
                <h3 class="font-bold text-green-400">${t.results.success}</h3>
                <p class="text-sm text-gray-400">${t.results.successDesc} <span id="imageCount" class="text-green-400 font-bold">1</span> ${t.results.images}</p>
              </div>
            </div>
            
            <div class="mt-3 pt-3 border-t border-green-800/30 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div class="flex items-center gap-1.5">
                <span class="text-gray-400">🤖</span>
                <span class="text-gray-400">模型:</span>
                <span id="usedModel" class="text-white font-medium">-</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-gray-400">📐</span>
                <span class="text-gray-400">尺寸:</span>
                <span id="usedSize" class="text-white font-medium">-</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-gray-400">🎲</span>
                <span class="text-gray-400">Seed:</span>
                <span id="usedSeed" class="text-white font-mono font-medium">-</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-gray-400">⏱️</span>
                <span class="text-gray-400">耗時:</span>
                <span id="generationTime" class="text-green-400 font-medium">-</span>
              </div>
            </div>
          </div>

          <div id="imageGrid" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          </div>

          <div class="flex flex-wrap gap-3">
            <button id="downloadAllBtn" class="px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center gap-2 transition shadow-lg">
              <span>⬇️</span>
              <span>${t.results.download}</span>
            </button>
            
            <button id="regenerateBtn" class="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition shadow-lg">
              <span>🔄</span>
              <span>${t.results.regenerate}</span>
            </button>
            
            <button id="reuseBtn" class="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium flex items-center gap-2 transition shadow-lg">
              <span>♻️</span>
              <span>${t.results.reuse}</span>
            </button>
          </div>
        </div>

        <div id="errorState" class="hidden flex-col items-center justify-center py-16 px-4">
          <div class="w-32 h-32 rounded-full bg-gradient-to-br from-red-900 to-red-950 flex items-center justify-center mb-6 shadow-2xl">
            <span class="text-6xl">❌</span>
          </div>
          <h3 class="text-xl font-bold mb-2 text-red-400">${t.results.failed}</h3>
          <p id="errorMessage" class="text-gray-400 text-center max-w-md mb-6">發生未知錯誤</p>
          <button id="retryBtn" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium flex items-center gap-2 transition">
            <span>🔄</span>
            <span>重試</span>
          </button>
        </div>
      </div>
    </main>

    <aside id="rightPanel" class="w-full lg:w-80 xl:w-96 glass-card border-l border-gray-800 overflow-y-auto">
      <div class="p-4 space-y-4">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
          <span class="text-2xl">✍️</span>
          <h2 class="text-lg font-bold">${t.prompt.title}</h2>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2 flex items-center gap-2">
            <span>✨</span>
            <span>${t.prompt.positive}</span>
          </label>
          <textarea 
            id="prompt" 
            rows="6" 
            class="input-field w-full rounded-lg px-3 py-3 text-sm resize-none"
            placeholder="${t.prompt.positivePlaceholder}"
            required
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2 flex items-center gap-2">
            <span>🚫</span>
            <span>${t.prompt.negative}</span>
            <span class="text-xs text-gray-500 ml-auto">${t.prompt.negativeOptional}</span>
          </label>
          <textarea 
            id="negativePrompt" 
            rows="3" 
            class="input-field w-full rounded-lg px-3 py-3 text-sm resize-none"
            placeholder="${t.prompt.negativePlaceholder}"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2 flex items-center gap-2">
            <span>🖼️</span>
            <span>${t.prompt.referenceImages}</span>
            <span class="text-xs text-gray-500 ml-auto">${t.prompt.referenceOptional}</span>
          </label>
          <textarea 
            id="referenceImages" 
            rows="2" 
            class="input-field w-full rounded-lg px-3 py-3 text-sm resize-none"
            placeholder="${t.prompt.referenceImagesPlaceholder}"
          ></textarea>
          <p class="text-xs text-yellow-400 mt-1.5 flex items-center gap-1">
            <span>⚠️</span>
            <span>${t.prompt.supportImageToImage}</span>
          </p>
        </div>

        <div class="border-t border-gray-700 pt-4">
          <div class="text-sm font-medium mb-3 flex items-center gap-2">
            <span>💡</span>
            <span>${t.prompt.styleHints}</span>
          </div>
          <div class="space-y-2">
            ${t.prompt.hints.map((hint, idx) => `
              <div class="flex items-start gap-2 text-xs text-gray-400 bg-gray-800/30 p-2 rounded-lg">
                <span class="text-green-400 font-bold">${idx + 1}.</span>
                <span>${hint}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="border-t border-gray-700 pt-4">
          <div class="text-sm font-medium mb-3 flex items-center gap-2">
            <span>📝</span>
            <span>快速範例</span>
          </div>
          <div class="space-y-2">
            <button type="button" class="example-btn w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-xs transition border border-gray-700 hover:border-green-500/50" data-prompt="一隻可愛的橘色貓咪坐在窗邊，陽光灑在它身上，柔和的光影效果，高清攝影">
              🐱 可愛貓咪
            </button>
            <button type="button" class="example-btn w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-xs transition border border-gray-700 hover:border-green-500/50" data-prompt="賽博朋克城市夜景，霓虹燈光，未來感建築，下雨的街道，高細節，8k">
              🌃 賽博朋克城市
            </button>
            <button type="button" class="example-btn w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-xs transition border border-gray-700 hover:border-green-500/50" data-prompt="奇幻森林，魔法光芒，精靈，蘑菇，夢幻色彩，高清細節">
              🧚 奇幻森林
            </button>
            <button type="button" class="example-btn w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-xs transition border border-gray-700 hover:border-green-500/50" data-prompt="太空站內部，科幻風格，宇航員，地球窗外，高科技設備，電影級光效">
              🚀 太空站
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>

  <div id="historyModal" class="modal">
    <div class="glass-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
      <div class="p-4 border-b border-gray-700 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-2xl">📚</span>
          <h3 class="text-xl font-bold">${t.history.title}</h3>
          <span class="badge bg-green-600/20 text-green-400 border border-green-600/30">
            ${t.history.total} <span id="modalHistoryCount">0</span> ${t.history.count}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <button id="exportHistoryBtn" class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm flex items-center gap-2 transition">
            <span>📥</span>
            <span>${t.history.export}</span>
          </button>
          <button id="clearHistoryBtn" class="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm flex items-center gap-2 transition">
            <span>🗑️</span>
            <span>${t.history.clear}</span>
          </button>
          <button id="closeHistoryBtn" class="w-8 h-8 rounded-lg hover:bg-gray-700 flex items-center justify-center transition text-xl">
            ✖️
          </button>
        </div>
      </div>
      
      <div id="historyList" class="flex-1 overflow-y-auto p-4">
        <div id="historyEmpty" class="flex flex-col items-center justify-center py-16">
          <span class="text-6xl mb-4 opacity-50">📭</span>
          <p class="text-gray-400 text-center">${t.history.noHistoryDesc}</p>
        </div>
        
        <div id="historyGrid" class="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        </div>
      </div>
    </div>
  </div>

  <div id="imageViewerModal" class="modal">
    <div class="relative max-w-7xl w-full mx-auto">
      <button id="closeViewerBtn" class="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg hover:bg-black/70 flex items-center justify-center text-2xl transition border border-white/20">
        ✖️
      </button>
      <div id="viewerContent" class="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      </div>
    </div>
  </div>

  <script>
    const CONFIG = ${JSON.stringify(CONFIG)};
    const TRANSLATIONS = ${JSON.stringify(TRANSLATIONS)};
    let currentLang = '${lang}';
    let t = TRANSLATIONS[currentLang];
    let currentParams = {};
    let generationStartTime = 0;
    let timerInterval = null;
    let history = [];

    document.addEventListener('DOMContentLoaded', () => {
      initializeApp();
      loadHistory();
      updateHistoryCount();
    });

    function initializeApp() {
      document.getElementById('generateForm').addEventListener('submit', handleGenerate);
      document.getElementById('model').addEventListener('change', updateModelInfo);
      document.getElementById('style').addEventListener('change', updateStylePreview);
      document.getElementById('qualityMode').addEventListener('change', updateQualityDesc);
      document.getElementById('advancedToggle').addEventListener('click', toggleAdvanced);
      document.getElementById('historyBtn').addEventListener('click', showHistory);
      document.getElementById('closeHistoryBtn').addEventListener('click', hideHistory);
      document.getElementById('clearHistoryBtn').addEventListener('click', clearHistory);
      document.getElementById('exportHistoryBtn').addEventListener('click', exportHistory);
      document.getElementById('closeViewerBtn').addEventListener('click', hideImageViewer);
      document.getElementById('langSwitch').addEventListener('change', switchLanguage);
      document.getElementById('retryBtn').addEventListener('click', () => {
        showState('empty');
      });

      document.querySelectorAll('.example-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.getElementById('prompt').value = e.target.dataset.prompt;
        });
      });

      document.getElementById('historyModal').addEventListener('click', (e) => {
        if (e.target.id === 'historyModal') hideHistory();
      });
      document.getElementById('imageViewerModal').addEventListener('click', (e) => {
        if (e.target.id === 'imageViewerModal') hideImageViewer();
      });

      updateModelInfo();
      updateStylePreview();
      updateQualityDesc();
    }
    async function handleGenerate(e) {
      e.preventDefault();
      
      const prompt = document.getElementById('prompt').value.trim();
      if (!prompt) {
        alert(t.errors.promptRequired);
        return;
      }

      const sizeKey = document.getElementById('size').value;
      const sizeConfig = CONFIG.PRESET_SIZES[sizeKey];
      
      currentParams = {
        prompt: prompt,
        model: document.getElementById('model').value,
        width: sizeConfig.width,
        height: sizeConfig.height,
        seed: parseInt(document.getElementById('seed').value) || -1,
        style: document.getElementById('style').value,
        quality_mode: document.getElementById('qualityMode').value,
        n: parseInt(document.getElementById('numOutputs').value) || 1,
        negative_prompt: document.getElementById('negativePrompt').value.trim(),
        auto_optimize: document.getElementById('autoOptimize').checked,
        auto_hd: document.getElementById('autoHD').checked,
        reference_images: document.getElementById('referenceImages').value
          .split(',')
          .map(url => url.trim())
          .filter(url => url.length > 0)
      };

      showState('loading');
      startTimer();

      try {
        const response = await fetch('/_internal/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentParams)
        });

        stopTimer();

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error?.message || 'Generation failed');
        }

        const usedSeed = response.headers.get('X-Seed');
        const genTime = response.headers.get('X-Generation-Time');
        const usedModel = response.headers.get('X-Model');
        const styleName = response.headers.get('X-Style-Name');

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        displayResults([{
          url: imageUrl,
          seed: usedSeed,
          model: usedModel,
          size: sizeConfig.name,
          time: genTime,
          style: styleName
        }]);

        saveToHistory({
          timestamp: Date.now(),
          prompt: currentParams.prompt,
          params: currentParams,
          result: {
            url: imageUrl,
            seed: usedSeed,
            model: usedModel,
            size: \`\${sizeConfig.width}×\${sizeConfig.height}\`,
            time: genTime,
            style: styleName
          }
        });

      } catch (error) {
        stopTimer();
        showError(error.message);
        console.error('Generation error:', error);
      }
    }

    function displayResults(images) {
      showState('results');
      
      const imageGrid = document.getElementById('imageGrid');
      imageGrid.innerHTML = '';
      
      images.forEach((img, idx) => {
        const card = document.createElement('div');
        card.className = 'image-container group cursor-pointer';
        card.innerHTML = \`
          <img src="\${img.url}" alt="Generated \${idx + 1}" class="w-full h-auto">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button class="download-single px-4 py-2 bg-green-600 rounded-lg text-white font-medium flex items-center gap-2 transform scale-90 group-hover:scale-100 transition" data-url="\${img.url}" data-idx="\${idx}">
              <span>⬇️</span>
              <span>下載</span>
            </button>
          </div>
        \`;
        
        card.addEventListener('click', (e) => {
          if (!e.target.closest('.download-single')) {
            showImageViewer(img.url);
          }
        });
        
        imageGrid.appendChild(card);
      });

      document.querySelectorAll('.download-single').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          downloadImage(e.target.closest('button').dataset.url, e.target.closest('button').dataset.idx);
        });
      });

      document.getElementById('imageCount').textContent = images.length;
      document.getElementById('usedModel').textContent = images[0].model;
      document.getElementById('usedSize').textContent = images[0].size;
      document.getElementById('usedSeed').textContent = images[0].seed;
      document.getElementById('generationTime').textContent = images[0].time + 's';

      document.getElementById('downloadAllBtn').onclick = () => downloadAllImages(images);
      document.getElementById('regenerateBtn').onclick = () => document.getElementById('generateForm').dispatchEvent(new Event('submit'));
      document.getElementById('reuseBtn').onclick = () => reuseParameters();
    }

    function showState(state) {
      const states = ['empty', 'loading', 'results', 'error'];
      states.forEach(s => {
        document.getElementById(\`\${s}State\`).classList.toggle('hidden', s !== state);
        document.getElementById(\`\${s}State\`).classList.toggle('flex', s === state);
      });
      
      if (state === 'results') {
        document.getElementById('resultsContainer').classList.remove('hidden');
      } else {
        document.getElementById('resultsContainer').classList.add('hidden');
      }
    }

    function showError(message) {
      showState('error');
      document.getElementById('errorMessage').textContent = message;
    }

    function startTimer() {
      generationStartTime = Date.now();
      document.getElementById('elapsedTime').textContent = '0';
      
      timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - generationStartTime) / 1000);
        document.getElementById('elapsedTime').textContent = elapsed;
        
        const progress = Math.min(95, elapsed * 3);
        document.getElementById('progressBar').style.width = progress + '%';
      }, 1000);
    }

    function stopTimer() {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      document.getElementById('progressBar').style.width = '100%';
    }

    function updateModelInfo() {
      const modelId = document.getElementById('model').value;
      const model = CONFIG.PROVIDERS.pollinations.models.find(m => m.id === modelId);
      
      if (model) {
        document.getElementById('modelPrice').textContent = model.pricing?.standard || 'Free';
        document.getElementById('modelSpeed').textContent = model.speed === 'fast' ? '極快' : model.speed === 'medium' ? '中等' : '較慢';
        document.getElementById('modelParams').textContent = model.parameters || '-';
      }
    }

    function updateStylePreview() {
      const styleId = document.getElementById('style').value;
      const style = CONFIG.STYLE_PRESETS[styleId];
      
      if (style) {
        document.getElementById('currentStyleName').textContent = style.name;
        document.getElementById('styleDescription').textContent = style.description;
      } else {
        document.getElementById('currentStyleName').textContent = t.prompt.noStyle;
        document.getElementById('styleDescription').textContent = '不使用任何預設風格';
      }
    }

    function updateQualityDesc() {
      const mode = document.getElementById('qualityMode').value;
      const descriptions = {
        economy: t.params.economyDesc,
        standard: t.params.standardDesc,
        ultra: t.params.ultraDesc
      };
      document.getElementById('qualityDesc').textContent = descriptions[mode];
    }

    function toggleAdvanced() {
      const section = document.getElementById('advancedSection');
      const icon = document.getElementById('advancedIcon');
      section.classList.toggle('open');
      icon.style.transform = section.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
    }

    function loadHistory() {
      try {
        const saved = localStorage.getItem('flux_ai_history');
        history = saved ? JSON.parse(saved) : [];
      } catch (e) {
        console.error('Failed to load history:', e);
        history = [];
      }
    }

    function saveToHistory(item) {
      history.unshift(item);
      if (history.length > 100) history = history.slice(0, 100);
      
      try {
        localStorage.setItem('flux_ai_history', JSON.stringify(history));
        updateHistoryCount();
      } catch (e) {
        console.error('Failed to save history:', e);
      }
    }

    function updateHistoryCount() {
      const count = history.length;
      document.getElementById('historyCount').textContent = count;
      document.getElementById('modalHistoryCount').textContent = count;
    }

    function showHistory() {
      document.getElementById('historyModal').classList.add('show');
      renderHistory();
    }

    function hideHistory() {
      document.getElementById('historyModal').classList.remove('show');
    }

    function renderHistory() {
      const grid = document.getElementById('historyGrid');
      const empty = document.getElementById('historyEmpty');
      
      if (history.length === 0) {
        grid.classList.add('hidden');
        empty.classList.remove('hidden');
        return;
      }
      
      empty.classList.add('hidden');
      grid.classList.remove('hidden');
      grid.innerHTML = '';
      
      history.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'glass-card p-3 rounded-xl hover:scale-105 transition cursor-pointer';
        card.innerHTML = \`
          <div class="aspect-square rounded-lg overflow-hidden mb-2 bg-gray-900">
            <img src="\${item.result.url}" alt="History \${idx}" class="w-full h-full object-cover">
          </div>
          <div class="text-xs space-y-1">
            <p class="text-gray-400 truncate">\${item.prompt}</p>
            <div class="flex items-center justify-between text-gray-500">
              <span>🤖 \${item.result.model}</span>
              <span>📐 \${item.result.size}</span>
            </div>
            <div class="flex items-center justify-between text-gray-500">
              <span>⏱️ \${item.result.time}s</span>
              <span>\${new Date(item.timestamp).toLocaleDateString()}</span>
            </div>
          </div>
          <div class="mt-2 flex gap-2">
            <button class="reuse-history flex-1 px-2 py-1 bg-purple-600/20 hover:bg-purple-600/40 rounded text-xs transition" data-idx="\${idx}">
              ♻️ 重用
            </button>
            <button class="delete-history px-2 py-1 bg-red-600/20 hover:bg-red-600/40 rounded text-xs transition" data-idx="\${idx}">
              🗑️
            </button>
          </div>
        \`;
        
        card.querySelector('img').addEventListener('click', () => {
          showImageViewer(item.result.url);
        });
        
        card.querySelector('.reuse-history').addEventListener('click', (e) => {
          e.stopPropagation();
          reuseFromHistory(idx);
        });
        
        card.querySelector('.delete-history').addEventListener('click', (e) => {
          e.stopPropagation();
          deleteHistoryItem(idx);
        });
        
        grid.appendChild(card);
      });
    }

    function reuseFromHistory(idx) {
      const item = history[idx];
      if (!item) return;
      
      document.getElementById('prompt').value = item.prompt;
      if (item.params.negative_prompt) {
        document.getElementById('negativePrompt').value = item.params.negative_prompt;
      }
      if (item.params.seed !== -1) {
        document.getElementById('seed').value = item.params.seed;
      }
      if (item.params.style) {
        document.getElementById('style').value = item.params.style;
      }
      
      hideHistory();
      alert('✅ 參數已載入！');
    }

    function deleteHistoryItem(idx) {
      if (!confirm('確定要刪除這個歷史記錄嗎？')) return;
      
      history.splice(idx, 1);
      localStorage.setItem('flux_ai_history', JSON.stringify(history));
      updateHistoryCount();
      renderHistory();
    }

    function clearHistory() {
      if (!confirm(t.history.confirmClear)) return;
      
      history = [];
      localStorage.removeItem('flux_ai_history');
      updateHistoryCount();
      renderHistory();
    }

    function exportHistory() {
      const data = JSON.stringify(history, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = \`flux-ai-history-\${Date.now()}.json\`;
      a.click();
      URL.revokeObjectURL(url);
    }

    function showImageViewer(url) {
      const modal = document.getElementById('imageViewerModal');
      const content = document.getElementById('viewerContent');
      
      content.innerHTML = \`
        <img src="\${url}" alt="Full size" class="w-full h-auto max-h-[85vh] object-contain">
      \`;
      
      modal.classList.add('show');
    }

    function hideImageViewer() {
      document.getElementById('imageViewerModal').classList.remove('show');
    }

    function downloadImage(url, idx) {
      const a = document.createElement('a');
      a.href = url;
      a.download = \`flux-ai-\${Date.now()}-\${idx}.png\`;
      a.click();
    }

    function downloadAllImages(images) {
      images.forEach((img, idx) => {
        setTimeout(() => downloadImage(img.url, idx), idx * 500);
      });
    }

    function reuseParameters() {
      if (currentParams.seed !== -1) {
        document.getElementById('seed').value = currentParams.seed;
      }
      alert('✅ 參數已重用，您可以修改提示詞後再次生成！');
    }

    function switchLanguage(e) {
      const newLang = e.target.value;
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.location.href = url.toString();
    }
  </script>
</body>
</html>`;
}
