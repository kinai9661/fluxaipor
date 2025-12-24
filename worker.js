const CONFIG = {
  PROJECT_NAME: 'Flux AI Pro',
  PROJECT_VERSION: '3.4.0',
  PROVIDERS: {
    pollinations: {
      endpoint: 'https://gen.pollinations.ai',
      pathPrefix: '/image',
      apiKey: '',
      models: [
        { 
          id: 'flux', 
          name: 'Flux', 
          description: 'Fast and high-quality image generation',
          category: 'balanced', 
          speed: 'fast',
          pricing: { pollen: 0.00012 },
          icon: '⚡'
        },
        { 
          id: 'kontext', 
          name: 'Kontext', 
          description: 'Context-aware image generation',
          category: 'quality', 
          speed: 'medium',
          pricing: { pollen: 0.04 },
          icon: '🎨'
        },
        { 
          id: 'zimage', 
          name: 'Z-Image Turbo', 
          description: 'Fast 6B parameter image generation (alpha)',
          category: 'fast', 
          speed: 'ultra-fast',
          pricing: { pollen: 0.0002 },
          icon: '🚀'
        }
      ]
    }
  },
  PRESET_SIZES: {
    'square_1024': { name: 'Square 1:1 (1K)', width: 1024, height: 1024, icon: '⬛', category: 'standard' },
    'portrait_768': { name: 'Portrait 3:4', width: 768, height: 1024, icon: '📱', category: 'standard' },
    'landscape_1024': { name: 'Landscape 4:3', width: 1024, height: 768, icon: '🖥️', category: 'standard' },
    'wide_1280': { name: 'Wide 16:9', width: 1280, height: 720, icon: '📺', category: 'standard' },
    'square_2k': { name: 'Square 1:1 (2K)', width: 2048, height: 2048, icon: '🔲', category: '2k' },
    'portrait_2k': { name: 'Portrait 3:4 (2K)', width: 1536, height: 2048, icon: '📲', category: '2k' },
    'landscape_2k': { name: 'Landscape 4:3 (2K)', width: 2048, height: 1536, icon: '🖼️', category: '2k' },
    'wide_2k': { name: 'Wide 16:9 (2K)', width: 2048, height: 1152, icon: '📽️', category: '2k' },
    'ultrawide_2k': { name: 'Ultra Wide 21:9 (2K)', width: 2048, height: 878, icon: '🎬', category: '2k' },
    'square_4k': { name: 'Square 1:1 (4K)', width: 2048, height: 2048, icon: '💎', category: '4k' },
    'portrait_4k': { name: 'Portrait 9:16 (4K)', width: 1152, height: 2048, icon: '📱', category: '4k' },
    'landscape_4k': { name: 'Landscape 16:9 (4K)', width: 2048, height: 1152, icon: '🖥️', category: '4k' },
    'cinema_4k': { name: 'Cinema 2.39:1 (4K)', width: 2048, height: 858, icon: '🎥', category: '4k' },
    'instagram_square': { name: 'Instagram Square', width: 1080, height: 1080, icon: '📷', category: 'social' },
    'instagram_portrait': { name: 'Instagram Portrait', width: 1080, height: 1350, icon: '📸', category: 'social' },
    'twitter_card': { name: 'Twitter Card', width: 1200, height: 675, icon: '🐦', category: 'social' },
    'facebook_cover': { name: 'Facebook Cover', width: 1640, height: 924, icon: '👥', category: 'social' },
    'youtube_thumb': { name: 'YouTube Thumbnail', width: 1280, height: 720, icon: '▶️', category: 'social' }
  },
  STYLE_PRESETS: {
    'none': { name: { zh: '🔲 無風格', en: '🔲 None' }, prompt: '', negative: '' },
    'photorealistic': { name: { zh: '📷 照片寫實', en: '📷 Photorealistic' }, prompt: 'photorealistic, 8k uhd, high detail, professional photography, sharp focus', negative: 'cartoon, anime, illustration, painting, drawing, 3d render' },
    'hyperrealistic': { name: { zh: '🔍 超級寫實', en: '🔍 Hyperrealistic' }, prompt: 'hyperrealistic, ultra detailed, lifelike textures, sharp clarity, professional lighting', negative: 'stylized, artistic, low detail, blur' },
    'portrait_photography': { name: { zh: '👤 人像攝影', en: '👤 Portrait Photo' }, prompt: 'portrait photography, professional studio lighting, bokeh background, 85mm lens, f/1.8', negative: 'full body, landscape, multiple people, bad lighting' },
    'street_photography': { name: { zh: '🏙️ 街拍攝影', en: '🏙️ Street Photo' }, prompt: 'street photography, candid moment, urban environment, natural lighting, documentary style', negative: 'staged, studio, artificial, posed' },
    'macro_photography': { name: { zh: '🔬 微距攝影', en: '🔬 Macro Photo' }, prompt: 'macro photography, extreme close-up, shallow depth of field, intricate details, 100mm macro lens', negative: 'wide angle, landscape, distant, blurry' },
    'oil_painting': { name: { zh: '🖼️ 油畫', en: '🖼️ Oil Painting' }, prompt: 'oil painting, classical art style, rich colors, textured brush strokes, canvas texture', negative: 'digital, modern, photograph, 3d' },
    'watercolor': { name: { zh: '💧 水彩畫', en: '💧 Watercolor' }, prompt: 'watercolor painting, soft edges, flowing colors, paper texture, transparent layers', negative: 'digital, sharp edges, photorealistic, oil painting' },
    'acrylic_painting': { name: { zh: '🎨 丙烯畫', en: '🎨 Acrylic' }, prompt: 'acrylic painting, bold colors, thick paint texture, modern art style, vibrant', negative: 'watercolor, digital, photograph, pencil' },
    'impressionism': { name: { zh: '🌅 印象派', en: '🌅 Impressionism' }, prompt: 'impressionist painting, visible brush strokes, light and color emphasis, Monet style', negative: 'photorealistic, sharp details, modern, digital' },
    'expressionism': { name: { zh: '😱 表現主義', en: '😱 Expressionism' }, prompt: 'expressionist art, emotional distortion, bold colors, exaggerated forms, intense mood', negative: 'realistic, calm, balanced, traditional' },
    'abstract': { name: { zh: '🔷 抽象藝術', en: '🔷 Abstract' }, prompt: 'abstract art, geometric shapes, bold colors, non-representational, modern composition', negative: 'realistic, detailed, figurative, portrait' },
    'cubism': { name: { zh: '📐 立體主義', en: '📐 Cubism' }, prompt: 'cubist style, geometric shapes, multiple perspectives, fragmented forms, Picasso inspired', negative: 'realistic, smooth, traditional, photographic' },
    'surrealism': { name: { zh: '🌀 超現實主義', en: '🌀 Surrealism' }, prompt: 'surrealist art, dreamlike imagery, impossible scenes, Salvador Dali style, symbolic', negative: 'realistic, logical, ordinary, documentary' },
    'anime': { name: { zh: '⭐ 日本動漫', en: '⭐ Anime' }, prompt: 'anime style, manga art, cel shading, vibrant colors, expressive eyes, Japanese animation', negative: 'realistic, western cartoon, 3d, photograph' },
    'manga': { name: { zh: '📚 日本漫畫', en: '📚 Manga' }, prompt: 'manga style, black and white, screentone, dynamic composition, Japanese comic art', negative: 'color, realistic, western comic, 3d' },
    'cartoon': { name: { zh: '🎭 卡通風格', en: '🎭 Cartoon' }, prompt: 'cartoon style, simplified forms, bold outlines, exaggerated features, colorful', negative: 'realistic, detailed, photographic, serious' },
    'comic_book': { name: { zh: '💥 美式漫畫', en: '💥 Comic Book' }, prompt: 'comic book style, bold inking, halftone dots, dynamic poses, superhero art', negative: 'realistic, soft, painterly, photograph' },
    'disney': { name: { zh: '🏰 迪士尼風格', en: '🏰 Disney Style' }, prompt: 'Disney animation style, magical atmosphere, rounded features, expressive characters, colorful', negative: 'realistic, dark, gritty, anime' },
    'pixar': { name: { zh: '🎬 皮克斯 3D', en: '🎬 Pixar 3D' }, prompt: 'Pixar style 3D render, smooth surfaces, vibrant colors, appealing characters, cinematic lighting', negative: 'realistic, 2d, flat, low quality' },
    'studio_ghibli': { name: { zh: '🌿 吉卜力工作室', en: '🌿 Studio Ghibli' }, prompt: 'Studio Ghibli style, hand-drawn animation, soft colors, nature themes, whimsical atmosphere', negative: 'realistic, 3d, dark, modern digital' },
    'art_nouveau': { name: { zh: '🌺 新藝術運動', en: '🌺 Art Nouveau' }, prompt: 'Art Nouveau style, flowing organic lines, floral motifs, decorative borders, elegant curves', negative: 'geometric, minimalist, modern, industrial' },
    'art_deco': { name: { zh: '💎 裝飾藝術', en: '💎 Art Deco' }, prompt: 'Art Deco style, geometric patterns, luxury aesthetic, gold accents, 1920s glamour', negative: 'organic, messy, rustic, modern minimalism' },
    'pop_art': { name: { zh: '🎨 普普藝術', en: '🎨 Pop Art' }, prompt: 'pop art style, bold colors, halftone dots, Roy Lichtenstein inspired, commercial aesthetic', negative: 'realistic, muted colors, classical, subtle' },
    'minimalist': { name: { zh: '⬜ 極簡主義', en: '⬜ Minimalist' }, prompt: 'minimalist art, simple shapes, clean lines, negative space, limited color palette', negative: 'detailed, complex, ornate, busy' },
    'graffiti': { name: { zh: '🎨 塗鴉藝術', en: '🎨 Graffiti' }, prompt: 'graffiti art, urban street style, spray paint effect, bold letters, vibrant colors', negative: 'clean, traditional, formal, classical' },
    'digital_art': { name: { zh: '💻 數位藝術', en: '💻 Digital Art' }, prompt: 'digital art, modern illustration, clean lines, vibrant colors, trending on ArtStation', negative: 'traditional media, messy, low resolution, amateur' },
    'concept_art': { name: { zh: '🎮 概念設計', en: '🎮 Concept Art' }, prompt: 'concept art, game design, detailed environment, professional illustration, cinematic composition', negative: 'final render, photograph, simple, minimal' },
    'cyberpunk': { name: { zh: '🌃 賽博朋克', en: '🌃 Cyberpunk' }, prompt: 'cyberpunk style, neon lights, futuristic city, dark atmosphere, high-tech dystopia', negative: 'nature, traditional, bright daylight, rustic' },
    'vaporwave': { name: { zh: '🌸 蒸氣波', en: '🌸 Vaporwave' }, prompt: 'vaporwave aesthetic, retro 80s-90s, pastel colors, glitch effects, nostalgic technology', negative: 'modern, realistic, dark, muted' },
    'synthwave': { name: { zh: '🌆 合成波', en: '🌆 Synthwave' }, prompt: 'synthwave style, neon grids, sunset gradients, 80s retro futurism, glowing outlines', negative: 'realistic, modern, muted colors, daylight' },
    'low_poly': { name: { zh: '🔺 低多邊形', en: '🔺 Low Poly' }, prompt: 'low poly 3D art, geometric facets, flat shading, minimalist 3D, angular shapes', negative: 'high detail, smooth, realistic, organic' },
    'isometric': { name: { zh: '📦 等距視角', en: '📦 Isometric' }, prompt: 'isometric view, architectural style, clean lines, game asset style, balanced perspective', negative: 'perspective view, realistic, distorted, messy' },
    'cinematic': { name: { zh: '🎬 電影感', en: '🎬 Cinematic' }, prompt: 'cinematic lighting, film grain, movie still, dramatic atmosphere, anamorphic lens, color grading', negative: 'amateur, flat lighting, snapshot, low quality' },
    'film_noir': { name: { zh: '🎞️ 黑色電影', en: '🎞️ Film Noir' }, prompt: 'film noir style, high contrast black and white, dramatic shadows, 1940s aesthetic, moody', negative: 'color, bright, cheerful, modern' },
    'sci_fi': { name: { zh: '🚀 科幻風格', en: '🚀 Sci-Fi' }, prompt: 'science fiction, futuristic technology, space age, high-tech environment, cinematic sci-fi', negative: 'historical, natural, low-tech, medieval' },
    'fantasy': { name: { zh: '🧙 奇幻風格', en: '🧙 Fantasy' }, prompt: 'fantasy art, magical atmosphere, epic scenery, mystical creatures, enchanted environment', negative: 'modern, realistic, urban, technological' },
    'horror': { name: { zh: '👻 恐怖風格', en: '👻 Horror' }, prompt: 'horror atmosphere, dark and eerie, ominous lighting, disturbing imagery, suspenseful mood', negative: 'bright, cheerful, cute, calming' },
    'renaissance': { name: { zh: '🖼️ 文藝復興', en: '🖼️ Renaissance' }, prompt: 'Renaissance art, classical painting, realistic proportions, chiaroscuro lighting, masterful technique', negative: 'modern, abstract, digital, simplified' },
    'baroque': { name: { zh: '👑 巴洛克風格', en: '👑 Baroque' }, prompt: 'Baroque style, dramatic lighting, rich colors, ornate details, grandeur and drama', negative: 'minimalist, modern, simple, flat' },
    'ukiyo_e': { name: { zh: '🗾 浮世繪', en: '🗾 Ukiyo-e' }, prompt: 'Japanese ukiyo-e woodblock print, flat colors, bold outlines, traditional Japanese art', negative: 'realistic, 3d, western, photographic' },
    'neon': { name: { zh: '💡 霓虹發光', en: '💡 Neon Glow' }, prompt: 'neon glow effect, vibrant fluorescent colors, glowing edges, dark background, electric aesthetic', negative: 'muted, natural, daylight, realistic' },
    'glitch_art': { name: { zh: '📺 故障藝術', en: '📺 Glitch Art' }, prompt: 'glitch art, digital corruption, RGB shift, pixelated distortion, cybernetic aesthetic', negative: 'clean, perfect, traditional, analog' },
    'holographic': { name: { zh: '✨ 全息投影', en: '✨ Holographic' }, prompt: 'holographic effect, iridescent colors, rainbow shimmer, futuristic display, transparent glow', negative: 'matte, flat, opaque, dull' },
    'psychedelic': { name: { zh: '🌀 迷幻藝術', en: '🌀 Psychedelic' }, prompt: 'psychedelic art, swirling patterns, vibrant colors, hallucinatory imagery, trippy visuals', negative: 'realistic, muted, orderly, conservative' },
    'steampunk': { name: { zh: '⚙️ 蒸汽朋克', en: '⚙️ Steampunk' }, prompt: 'steampunk style, Victorian era, brass and copper, mechanical gears, industrial revolution aesthetic', negative: 'modern, digital, clean, minimalist' }
  },
  FETCH_TIMEOUT: 120000
};

const LANG = {
  'zh': {
    title: 'Flux AI Pro', version: '版本', history: '歷史', records: '條記錄', settings: '生成參數', model: '模型選擇', size: '尺寸預設', style: '藝術風格', quality: '質量模式',
    qEconomy: '⚡ 經濟模式', qStandard: '⚖️ 標準模式', qUltra: '💎 超高清模式', qDescEco: '快速生成', qDescStd: '平衡質量與速度', qDescUlt: '極致質量',
    advanced: '進階選項', seed: '隨機種子', seedPh: '-1 為隨機', autoOpt: '⚡ 參數自動優化', autoHD: '🔍 HD 自動增強', generate: '開始生成',
    results: '生成結果', empty: '尚未生成任何圖像', emptyDesc: '填寫左側參數並輸入提示詞後點擊生成按鈕', loading: 'AI 正在創作中', loadDesc: '這可能需要幾秒鐘到一分鐘',
    elapsed: '已用時', sec: '秒', success: '生成成功！', generated: '已生成', images: '張圖片', modelLabel: '模型', sizeLabel: '尺寸', timeLabel: '耗時',
    download: '下載圖像', regenerate: '再次生成', reuse: '重用參數', failed: '生成失敗', error: '發生未知錯誤', retry: '重試',
    prompt: '提示詞', positive: '正面提示詞', posPh: '描述你想生成的圖像...', negative: '負面提示詞', negOpt: '（可選）', negPh: '描述不想要的元素...',
    tips: '風格提示', tip1: '詳細的描述可以獲得更好的效果', tip2: '使用藝術風格可以增強視覺效果', tip3: '中文提示詞會自動翻譯為英文', tip4: '負面提示詞幫助排除不想要的元素',
    examples: '快速範例', ex1: '🐱 可愛貓咪', ex1p: '一隻可愛的橘色貓咪坐在窗邊，陽光灑在它身上，柔和的光影效果，高清攝影',
    ex2: '🌃 賽博朋克城市', ex2p: '賽博朋克城市夜景，霓虹燈光，未來感建築，下雨的街道，高細節，8k',
    ex3: '🧚 奇幻森林', ex3p: '奇幻森林，魔法光芒，精靈，蘑菇，夢幻色彩，高清細節',
    ex4: '🚀 太空站', ex4p: '太空站內部，科幻風格，宇航員，地球窗外，高科技設備，電影級光效',
    histTitle: '生成歷史', total: '總共', clear: '清空歷史', histEmpty: '你生成的圖像將會顯示在這裡', reuseBtn: '♻️ 重用', deleteBtn: '🗑️',
    confirmClear: '確定要清空所有歷史記錄嗎？', confirmDel: '確定要刪除這個歷史記錄嗎？', loaded: '✅ 參數已載入！', reused: '✅ 參數已重用，您可以修改提示詞後再次生成！', needPrompt: '請輸入提示詞',
    sizeStandard: '📐 標準尺寸 (1K)', size2k: '🔥 2K 高清', size4k: '💎 4K 超高清', sizeSocial: '🌐 社交媒體', highRes: '高分辨率圖像生成時間較長（約 30-60 秒）'
  },
  'en': {
    title: 'Flux AI Pro', version: 'Version', history: 'History', records: 'Records', settings: 'Settings', model: 'Model', size: 'Size', style: 'Style', quality: 'Quality',
    qEconomy: '⚡ Economy', qStandard: '⚖️ Standard', qUltra: '💎 Ultra HD', qDescEco: 'Fast generation', qDescStd: 'Balanced', qDescUlt: 'Ultimate quality',
    advanced: 'Advanced', seed: 'Seed', seedPh: '-1 for random', autoOpt: '⚡ Auto Optimize', autoHD: '🔍 Auto HD', generate: 'Generate',
    results: 'Results', empty: 'No images yet', emptyDesc: 'Fill in parameters and prompt, then generate', loading: 'AI Creating', loadDesc: 'This may take a few seconds',
    elapsed: 'Elapsed', sec: 'sec', success: 'Success!', generated: 'Generated', images: 'image(s)', modelLabel: 'Model', sizeLabel: 'Size', timeLabel: 'Time',
    download: 'Download', regenerate: 'Regenerate', reuse: 'Reuse', failed: 'Failed', error: 'Unknown error', retry: 'Retry',
    prompt: 'Prompt', positive: 'Positive', posPh: 'Describe the image...', negative: 'Negative', negOpt: '(Optional)', negPh: 'Unwanted elements...',
    tips: 'Tips', tip1: 'Detailed descriptions yield better results', tip2: 'Art styles enhance visual effects', tip3: 'Chinese prompts auto-translated', tip4: 'Negative prompts exclude unwanted elements',
    examples: 'Examples', ex1: '🐱 Cute Cat', ex1p: 'A cute orange cat sitting by window, sunlight, soft lighting, HD photography',
    ex2: '🌃 Cyberpunk', ex2p: 'Cyberpunk city night, neon lights, futuristic buildings, rain, 8k',
    ex3: '🧚 Fantasy Forest', ex3p: 'Fantasy forest, magical glow, elves, mushrooms, dreamy colors, HD',
    ex4: '🚀 Space Station', ex4p: 'Space station interior, sci-fi, astronaut, Earth view, cinematic',
    histTitle: 'History', total: 'Total', clear: 'Clear', histEmpty: 'Your images will appear here', reuseBtn: '♻️ Reuse', deleteBtn: '🗑️',
    confirmClear: 'Clear all history?', confirmDel: 'Delete this record?', loaded: '✅ Loaded!', reused: '✅ Reused! Modify prompt and generate.', needPrompt: 'Please enter prompt',
    sizeStandard: '📐 Standard (1K)', size2k: '🔥 2K HD', size4k: '💎 4K Ultra HD', sizeSocial: '🌐 Social Media', highRes: 'High resolution takes longer (30-60s)'
  }
};

function corsHeaders(add = {}) {
  return { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', ...add };
}

function errorResponse(msg, status = 400) {
  return new Response(JSON.stringify({ error: { message: msg, status: status } }), { status: status, headers: corsHeaders({ 'Content-Type': 'application/json' }) });
}

function detectLang(request) {
  const accept = request.headers.get('Accept-Language') || '';
  return accept.includes('zh') ? 'zh' : 'en';
}

function containsChinese(text) {
  return /[\u4e00-\u9fa5]/.test(text);
}

async function translateText(text) {
  if (!text || !text.trim()) return text;
  if (!containsChinese(text)) return text;
  
  try {
    const encodedText = encodeURIComponent(text);
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=en&dt=t&q=' + encodedText;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      console.error('Translation failed:', response.status);
      return text;
    }
    
    const data = await response.json();
    
    if (data && data[0] && Array.isArray(data[0])) {
      let translated = '';
      for (let i = 0; i < data[0].length; i++) {
        if (data[0][i][0]) {
          translated += data[0][i][0];
        }
      }
      return translated.trim() || text;
    }
    
    return text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}

async function smartTranslate(text) {
  if (!text || !text.trim()) return text;
  if (!containsChinese(text)) return text;
  
  const segments = text.split(/([a-zA-Z0-9\s,.:;!?'"()-]+)/);
  const translatedSegments = [];
  
  for (const segment of segments) {
    if (containsChinese(segment)) {
      const translated = await translateText(segment);
      translatedSegments.push(translated);
    } else {
      translatedSegments.push(segment);
    }
  }
  
  return translatedSegments.join(' ').replace(/\s+/g, ' ').trim();
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }
    
    try {
      const path = url.pathname;
      
      if (path === '/' || path === '') {
        const lang = url.searchParams.get('lang') || detectLang(request);
        return new Response(buildHTML(lang), {
          status: 200,
          headers: corsHeaders({ 'Content-Type': 'text/html; charset=utf-8' })
        });
      }
      
      if (path === '/_internal/generate') {
        if (request.method !== 'POST') return errorResponse('Method not allowed', 405);
        return await handleGen(request);
      }
      
      return errorResponse('Not Found', 404);
    } catch (e) {
      console.error('Server error:', e);
      return errorResponse('Server error: ' + e.message, 500);
    }
  }
};

async function handleGen(request) {
  const start = Date.now();
  try {
    const body = await request.json();
    if (!body.prompt?.trim()) return errorResponse('Prompt required', 400);
    
    let prompt = body.prompt.trim();
    let negativePrompt = body.negative_prompt?.trim() || '';
    
    let wasTranslated = false;
    let originalPrompt = prompt;
    
    if (containsChinese(prompt)) {
      console.log('🔤 Original prompt:', prompt);
      const translatedPrompt = await smartTranslate(prompt);
      console.log('✅ Translated prompt:', translatedPrompt);
      prompt = translatedPrompt;
      wasTranslated = true;
    }
    
    if (containsChinese(negativePrompt)) {
      console.log('🔤 Original negative:', negativePrompt);
      const translatedNeg = await smartTranslate(negativePrompt);
      console.log('✅ Translated negative:', translatedNeg);
      negativePrompt = translatedNeg;
      wasTranslated = true;
    }
    
    const p = {
      prompt: prompt,
      model: body.model || 'zimage',
      width: body.width || 1024,
      height: body.height || 1024,
      seed: body.seed !== undefined ? parseInt(body.seed) : -1,
      style: body.style || 'none',
      quality_mode: body.quality_mode || 'standard',
      negative_prompt: negativePrompt
    };
    
    const seed = p.seed === -1 ? Math.floor(Math.random() * 1000000) : p.seed;
    let finalPrompt = p.prompt;
    let finalNeg = p.negative_prompt;
    
    if (p.style !== 'none' && CONFIG.STYLE_PRESETS[p.style]) {
      const s = CONFIG.STYLE_PRESETS[p.style];
      if (s.prompt) finalPrompt = p.prompt + ', ' + s.prompt;
      if (s.negative) finalNeg = finalNeg ? finalNeg + ', ' + s.negative : s.negative;
    }
    
    if (p.quality_mode === 'ultra') {
      finalPrompt += ', ultra high quality, 8k uhd, detailed';
      finalNeg += ', low quality, blurry';
    }
    
    console.log('🎨 Final prompt:', finalPrompt);
    if (finalNeg) console.log('🚫 Final negative:', finalNeg);
    
    const enc = encodeURIComponent(finalPrompt);
    const apiUrl = CONFIG.PROVIDERS.pollinations.endpoint + 
                   CONFIG.PROVIDERS.pollinations.pathPrefix + '/' + enc + 
                   '?model=' + p.model + 
                   '&width=' + p.width + 
                   '&height=' + p.height + 
                   '&seed=' + seed + 
                   '&nologo=true&enhance=true';
    
    console.log('🌐 API URL:', apiUrl);
    
    const headers = {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'image/*'
    };
    
    if (CONFIG.PROVIDERS.pollinations.apiKey) {
      headers['Authorization'] = 'Bearer ' + CONFIG.PROVIDERS.pollinations.apiKey;
      console.log('🔑 Using API Key authentication');
    } else {
      console.log('🆓 Using free service (no API Key)');
    }
    
    const res = await fetch(apiUrl, { headers: headers });
    
    if (!res.ok) throw new Error('API error ' + res.status);
    
    const blob = await res.blob();
    const buf = await blob.arrayBuffer();
    const time = ((Date.now() - start) / 1000).toFixed(2);
    
    return new Response(buf, {
      status: 200,
      headers: corsHeaders({
        'Content-Type': 'image/png',
        'X-Model': p.model,
        'X-Seed': seed.toString(),
        'X-Generation-Time': time,
        'X-Translated': wasTranslated ? 'true' : 'false',
        'X-Original-Prompt': wasTranslated ? encodeURIComponent(originalPrompt) : '',
        'X-Translated-Prompt': wasTranslated ? encodeURIComponent(prompt) : '',
        'X-API-Endpoint': 'gen.pollinations.ai'
      })
    });
  } catch (e) {
    console.error('❌ Generation error:', e);
    return errorResponse('Generation failed: ' + e.message, 500);
  }
}

function buildHTML(lang) {
  const t = LANG[lang] || LANG['zh'];
  
  const models = CONFIG.PROVIDERS.pollinations.models.map(m => {
    const selected = m.id === 'zimage' ? ' selected' : '';
    return '<option value="' + m.id + '"' + selected + '>' + m.icon + ' ' + m.name + ' - ' + m.description + '</option>';
  }).join('');
  
  const sizeGroups = {
    standard: { zh: '📐 標準尺寸 (1K)', en: '📐 Standard (1K)' },
    '2k': { zh: '🔥 2K 高清', en: '🔥 2K HD' },
    '4k': { zh: '💎 4K 超高清', en: '💎 4K Ultra HD' },
    social: { zh: '🌐 社交媒體', en: '🌐 Social Media' }
  };
  
  let sizes = '';
  Object.entries(sizeGroups).forEach(([category, labels]) => {
    const groupLabel = labels[lang] || labels.zh;
    sizes += '<optgroup label="' + groupLabel + '">';
    
    Object.entries(CONFIG.PRESET_SIZES).forEach(([k, s]) => {
      if (s.category === category) {
        sizes += '<option value="' + k + '">' + s.icon + ' ' + s.name + ' (' + s.width + '×' + s.height + ')</option>';
      }
    });
    
    sizes += '</optgroup>';
  });
  
  const styleGroups = {
    zh: {
      none: '基本',
      realistic: '📸 寫實風格',
      painting: '🎨 繪畫風格',
      illustration: '🖌️ 插畫風格',
      stylized: '🎭 風格化藝術',
      digital: '🌃 數位藝術',
      cinematic: '🎬 電影風格',
      classical: '🏛️ 古典藝術',
      effects: '🌈 特殊效果'
    },
    en: {
      none: 'Basic',
      realistic: '📸 Realistic',
      painting: '🎨 Painting',
      illustration: '🖌️ Illustration',
      stylized: '🎭 Stylized',
      digital: '🌃 Digital',
      cinematic: '🎬 Cinematic',
      classical: '🏛️ Classical',
      effects: '🌈 Effects'
    }
  };

  const styleCategories = {
    none: ['none'],
    realistic: ['photorealistic', 'hyperrealistic', 'portrait_photography', 'street_photography', 'macro_photography'],
    painting: ['oil_painting', 'watercolor', 'acrylic_painting', 'impressionism', 'expressionism', 'abstract', 'cubism', 'surrealism'],
    illustration: ['anime', 'manga', 'cartoon', 'comic_book', 'disney', 'pixar', 'studio_ghibli'],
    stylized: ['art_nouveau', 'art_deco', 'pop_art', 'minimalist', 'graffiti'],
    digital: ['digital_art', 'concept_art', 'cyberpunk', 'vaporwave', 'synthwave', 'low_poly', 'isometric'],
    cinematic: ['cinematic', 'film_noir', 'sci_fi', 'fantasy', 'horror'],
    classical: ['renaissance', 'baroque', 'ukiyo_e'],
    effects: ['neon', 'glitch_art', 'holographic', 'psychedelic', 'steampunk']
  };

  let styles = '';
  Object.entries(styleCategories).forEach(([category, styleKeys]) => {
    const groupLabel = styleGroups[lang][category];
    styles += '<optgroup label="' + groupLabel + '">';
    styleKeys.forEach(key => {
      const s = CONFIG.STYLE_PRESETS[key];
      const styleName = typeof s.name === 'object' ? s.name[lang] : s.name;
      styles += '<option value="' + key + '">' + styleName + '</option>';
    });
    styles += '</optgroup>';
  });
  
  let h = '<!DOCTYPE html><html lang="' + lang + '" class="dark"><head>';
  h += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">';
  h += '<title>' + t.title + ' v' + CONFIG.PROJECT_VERSION + '</title>';
  h += '<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎨</text></svg>">';
  h += '<script src="https://cdn.tailwindcss.com"></script>';
  h += '<style>';
  h += '*{box-sizing:border-box;margin:0;padding:0}';
  h += 'body{background:linear-gradient(135deg,#0a0f1e 0%,#1a1f3a 50%,#0f1419 100%);background-attachment:fixed;color:#fff;font-family:system-ui,sans-serif;overflow-x:hidden}';
  h += '.glass-card{background:rgba(17,24,39,0.7);backdrop-filter:blur(12px);border:1px solid rgba(75,85,99,0.3)}';
  h += '.btn-primary{background:linear-gradient(135deg,#10b981 0%,#059669 100%);box-shadow:0 4px 12px rgba(16,185,129,0.3)}';
  h += '.btn-primary:hover{background:linear-gradient(135deg,#059669 0%,#047857 100%);box-shadow:0 6px 16px rgba(16,185,129,0.4)}';
  h += '.modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.8);backdrop-filter:blur(8px);z-index:9999;align-items:center;justify-content:center;padding:1rem}';
  h += '.modal.show{display:flex}';
  h += '.modal-content{background:linear-gradient(135deg,#1f2937 0%,#111827 100%);border:1px solid rgba(75,85,99,0.5);border-radius:1rem;max-width:90vw;max-height:90vh;overflow:auto;box-shadow:0 25px 50px rgba(0,0,0,0.5)}';
  h += '.spinner{border:3px solid rgba(255,255,255,0.1);border-top-color:#10b981;border-radius:50%;width:40px;height:40px;animation:spin 0.8s linear infinite}';
  h += '@keyframes spin{to{transform:rotate(360deg)}}';
  h += '.result-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem}';
  h += '.history-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem}';
  h += '@media(max-width:1024px){.history-grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}}';
  h += 'select,input,textarea{background:rgba(31,41,55,0.8);border:1px solid rgba(75,85,99,0.5);color:#fff;border-radius:0.5rem;padding:0.5rem;width:100%}';
  h += 'select:focus,input:focus,textarea:focus{outline:none;border-color:#10b981;box-shadow:0 0 0 3px rgba(16,185,129,0.1)}';
  h += 'optgroup{background:rgba(17,24,39,0.95);color:#10b981;font-weight:bold;font-size:0.85em;padding:0.5rem 0}';
  h += 'option{background:rgba(31,41,55,0.9);color:#fff;padding:0.4rem 0.5rem}';
  h += 'button{cursor:pointer;transition:all 0.2s}';
  h += 'img{max-width:100%;height:auto;display:block}';
  h += '</style></head><body>';
  
  h += '<header class="glass-card border-b border-gray-800 sticky top-0 z-50">';
  h += '<div class="px-4 py-3 flex items-center justify-between max-w-screen-2xl mx-auto">';
  h += '<div class="flex items-center gap-3">';
  h += '<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl shadow-lg">🎨</div>';
  h += '<div><h1 class="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">' + t.title + '</h1>';
  h += '<p class="text-xs text-gray-400">' + t.version + ' ' + CONFIG.PROJECT_VERSION + '</p></div></div>';
  h += '<div class="flex items-center gap-2">';
  h += '<div class="flex items-center gap-1 bg-gray-800 rounded-lg p-1 border border-gray-700">';
  h += '<button onclick="changeLang(\'zh\')" class="lang-btn px-3 py-1 rounded text-xs transition ' + (lang === 'zh' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white') + '">中文</button>';
  h += '<button onclick="changeLang(\'en\')" class="lang-btn px-3 py-1 rounded text-xs transition ' + (lang === 'en' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white') + '">EN</button>';
  h += '</div>';
  h += '<button onclick="showHist()" class="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-sm flex items-center gap-2 border border-gray-700">';
  h += '<span>📚</span><span class="hidden sm:inline">' + t.history + '</span>';
  h += '<span id="histCount" class="px-2 py-0.5 rounded-full bg-green-500 text-white text-xs font-bold min-w-[20px] text-center">0</span>';
  h += '</button></div></div></header>';
  
  h += '<div class="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] max-w-screen-2xl mx-auto">';
  
  h += '<aside class="w-full lg:w-80 xl:w-96 glass-card border-r border-gray-800 overflow-y-auto">';
  h += '<div class="p-4 space-y-4">';
  h += '<div class="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">';
  h += '<span class="text-2xl">⚙️</span><h2 class="text-lg font-bold">' + t.settings + '</h2></div>';
  h += '<form id="genForm" class="space-y-4">';
  h += '<div><label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  h += '<span>🤖</span><span>' + t.model + '</span></label>';
  h += '<select id="model" name="model" class="w-full">' + models + '</select></div>';
  h += '<div><label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  h += '<span>📐</span><span>' + t.size + '</span></label>';
  h += '<select id="sizePreset" class="w-full">' + sizes + '</select>';
  h += '<p class="text-xs text-yellow-400 mt-1">⚡ ' + t.highRes + '</p></div>';
  h += '<div><label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  h += '<span>🎨</span><span>' + t.style + '</span></label>';
  h += '<select id="style" name="style" class="w-full">' + styles + '</select></div>';
  h += '<div><label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  h += '<span>💎</span><span>' + t.quality + '</span></label>';
  h += '<div class="grid grid-cols-3 gap-2">';
  h += '<button type="button" onclick="setQuality(\'economy\')" id="qEco" class="quality-btn px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-xs text-center border border-gray-600">';
  h += '<div class="font-bold">' + t.qEconomy + '</div><div class="text-gray-400 text-[10px]">' + t.qDescEco + '</div></button>';
  h += '<button type="button" onclick="setQuality(\'standard\')" id="qStd" class="quality-btn px-3 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition text-xs text-center border-2 border-green-400">';
  h += '<div class="font-bold">' + t.qStandard + '</div><div class="text-gray-200 text-[10px]">' + t.qDescStd + '</div></button>';
  h += '<button type="button" onclick="setQuality(\'ultra\')" id="qUlt" class="quality-btn px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-xs text-center border border-gray-600">';
  h += '<div class="font-bold">' + t.qUltra + '</div><div class="text-gray-400 text-[10px]">' + t.qDescUlt + '</div></button>';
  h += '</div><input type="hidden" id="qualityMode" name="quality_mode" value="standard"></div>';
  h += '<details class="glass-card p-3 rounded-lg border border-gray-700"><summary class="cursor-pointer font-medium text-sm flex items-center gap-2">';
  h += '<span>🔧</span><span>' + t.advanced + '</span></summary>';
  h += '<div class="mt-3 space-y-3"><div><label class="block text-xs text-gray-400 mb-1">' + t.seed + '</label>';
  h += '<input type="number" id="seed" name="seed" value="-1" placeholder="' + t.seedPh + '" class="w-full text-sm"></div>';
  h += '<label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="autoOpt" checked class="w-4 h-4">';
  h += '<span class="text-xs">' + t.autoOpt + '</span></label>';
  h += '<label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="autoHD" checked class="w-4 h-4">';
  h += '<span class="text-xs">' + t.autoHD + '</span></label></div></details>';
  h += '<button type="submit" class="btn-primary w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 text-base">';
  h += '<span>✨</span><span>' + t.generate + '</span></button>';
  h += '</form></div></aside>';
  
  h += '<main class="flex-1 overflow-y-auto"><div class="p-4 lg:p-6 space-y-6">';
  h += '<div class="flex items-center gap-2 pb-3 border-b border-gray-700">';
  h += '<span class="text-2xl">🖼️</span><h2 class="text-lg font-bold">' + t.results + '</h2></div>';
  h += '<div id="resultArea">';
  h += '<div id="emptyState" class="text-center py-16">';
  h += '<div class="text-6xl mb-4">🎨</div>';
  h += '<h3 class="text-xl font-bold mb-2">' + t.empty + '</h3>';
  h += '<p class="text-gray-400 text-sm">' + t.emptyDesc + '</p></div>';
  h += '<div id="loadingState" class="hidden text-center py-16">';
  h += '<div class="spinner mx-auto mb-4"></div>';
  h += '<h3 class="text-xl font-bold mb-2">' + t.loading + '</h3>';
  h += '<p class="text-gray-400 text-sm mb-4">' + t.loadDesc + '</p>';
  h += '<p class="text-green-400 text-sm">' + t.elapsed + ': <span id="elapsedTime">0</span>' + t.sec + '</p></div>';
  h += '<div id="successState" class="hidden"><div class="glass-card p-4 rounded-xl border border-green-500/30 bg-green-500/5 mb-4">';
  h += '<div class="flex items-center gap-2 mb-2"><span class="text-2xl">✅</span><h3 class="text-lg font-bold text-green-400">' + t.success + '</h3></div>';
  h += '<p class="text-sm text-gray-300 mb-2"><span id="resultSummary"></span></p>';
  h += '<div class="flex flex-wrap gap-2 text-xs"><span class="px-2 py-1 rounded bg-gray-800 border border-gray-700">🤖 ' + t.modelLabel + ': <span id="resultModel"></span></span>';
  h += '<span class="px-2 py-1 rounded bg-gray-800 border border-gray-700">📐 ' + t.sizeLabel + ': <span id="resultSize"></span></span>';
  h += '<span class="px-2 py-1 rounded bg-gray-800 border border-gray-700">🎲 Seed: <span id="resultSeed"></span></span>';
  h += '<span class="px-2 py-1 rounded bg-gray-800 border border-gray-700">⏱️ ' + t.timeLabel + ': <span id="resultTime"></span>s</span></div>';
  h += '<div id="translationInfo"></div></div>';
  h += '<div id="resultGrid" class="result-grid"></div>';
  h += '<div class="flex gap-3 mt-4"><button onclick="downloadAll()" class="flex-1 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-medium">📥 ' + t.download + '</button>';
  h += '<button onclick="regenerate()" class="flex-1 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition font-medium">🔄 ' + t.regenerate + '</button>';
  h += '<button onclick="reuseParams()" class="flex-1 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition font-medium">♻️ ' + t.reuse + '</button></div></div>';
  h += '<div id="errorState" class="hidden glass-card p-6 rounded-xl border border-red-500/30 bg-red-500/5 text-center">';
  h += '<div class="text-4xl mb-3">❌</div><h3 class="text-xl font-bold text-red-400 mb-2">' + t.failed + '</h3>';
  h += '<p id="errorMsg" class="text-gray-300 text-sm mb-4">' + t.error + '</p>';
  h += '<button onclick="retry()" class="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition font-medium">🔄 ' + t.retry + '</button></div>';
  h += '</div></div></main>';
  
  h += '<aside class="w-full lg:w-80 xl:w-96 glass-card border-l border-gray-800 overflow-y-auto">';
  h += '<div class="p-4 space-y-4">';
  h += '<div class="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">';
  h += '<span class="text-2xl">✍️</span><h2 class="text-lg font-bold">' + t.prompt + '</h2></div>';
  h += '<div><label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  h += '<span>✨</span><span>' + t.positive + '</span></label>';
  h += '<textarea id="prompt" rows="4" placeholder="' + t.posPh + '" class="w-full resize-none"></textarea></div>';
  h += '<div><label class="block text-sm font-medium mb-2 flex items-center gap-2">';
  h += '<span>🚫</span><span>' + t.negative + '</span><span class="text-xs text-gray-500">' + t.negOpt + '</span></label>';
  h += '<textarea id="negPrompt" rows="3" placeholder="' + t.negPh + '" class="w-full resize-none"></textarea></div>';
  h += '<div class="glass-card p-3 rounded-lg border border-gray-700"><div class="flex items-center gap-2 mb-2">';
  h += '<span>💡</span><span class="text-sm font-medium">' + t.tips + '</span></div>';
  h += '<ul class="text-xs text-gray-400 space-y-1">';
  h += '<li>• ' + t.tip1 + '</li><li>• ' + t.tip2 + '</li><li>• ' + t.tip3 + '</li><li>• ' + t.tip4 + '</li></ul></div>';
  h += '<div class="glass-card p-3 rounded-lg border border-gray-700"><div class="flex items-center gap-2 mb-3">';
  h += '<span>🎯</span><span class="text-sm font-medium">' + t.examples + '</span></div>';
  h += '<div class="space-y-2">';
  h += '<button onclick="useEx(1)" class="w-full text-left px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-xs border border-gray-700">' + t.ex1 + '</button>';
  h += '<button onclick="useEx(2)" class="w-full text-left px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-xs border border-gray-700">' + t.ex2 + '</button>';
  h += '<button onclick="useEx(3)" class="w-full text-left px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-xs border border-gray-700">' + t.ex3 + '</button>';
  h += '<button onclick="useEx(4)" class="w-full text-left px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-xs border border-gray-700">' + t.ex4 + '</button>';
  h += '</div></div></div></aside></div>';
  
  return h + getScripts(t, lang);
}

function getScripts(t, lang) {
  let s = '<div id="histModal" class="modal"><div class="modal-content w-full max-w-6xl">';
  s += '<div class="p-6"><div class="flex items-center justify-between mb-6">';
  s += '<div class="flex items-center gap-3"><span class="text-3xl">📚</span>';
  s += '<div><h2 class="text-2xl font-bold">' + t.histTitle + '</h2>';
  s += '<p class="text-sm text-gray-400">' + t.total + ' <span id="modalHistCount">0</span> ' + t.records + '</p></div></div>';
  s += '<div class="flex gap-2"><button onclick="clearHist()" class="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition text-sm">🗑️ ' + t.clear + '</button>';
  s += '<button onclick="hideHist()" class="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition text-sm">✕</button></div></div>';
  s += '<div id="histEmpty" class="text-center py-16 text-gray-400"><div class="text-6xl mb-4">📚</div>';
  s += '<p>' + t.histEmpty + '</p></div>';
  s += '<div id="histGrid" class="history-grid hidden"></div></div></div></div>';
  
  s += '<div id="imgModal" class="modal" onclick="hideImg()"><div class="modal-content" onclick="event.stopPropagation()">';
  s += '<div id="viewerContent"></div></div></div>';
  
  s += '<script>';
  
  s += 'function blobToBase64(blob){';
  s += 'return new Promise((resolve,reject)=>{';
  s += 'const reader=new FileReader();';
  s += 'reader.onloadend=()=>resolve(reader.result);';
  s += 'reader.onerror=reject;';
  s += 'reader.readAsDataURL(blob);';
  s += '});';
  s += '}';
  
  s += 'function base64ToBlob(base64){';
  s += 'const arr=base64.split(",");';
  s += 'const mime=arr[0].match(/:(.*?);/)[1];';
  s += 'const bstr=atob(arr[1]);';
  s += 'let n=bstr.length;';
  s += 'const u8arr=new Uint8Array(n);';
  s += 'while(n--){u8arr[n]=bstr.charCodeAt(n);}';
  s += 'return new Blob([u8arr],{type:mime});';
  s += '}';
  
  s += 'const EX={1:"' + t.ex1p + '",2:"' + t.ex2p + '",3:"' + t.ex3p + '",4:"' + t.ex4p + '"};';
  s += 'const T={loaded:"' + t.loaded + '",reused:"' + t.reused + '",needPrompt:"' + t.needPrompt + '",';
  s += 'confirmClear:"' + t.confirmClear + '",confirmDel:"' + t.confirmDel + '",';
  s += 'generated:"' + t.generated + '",images:"' + t.images + '"};';
  s += 'const LANG="' + lang + '";';
  s += 'let hist=[],curParams={},curImgs=[],timer=null;';
  
  s += 'window.onload=function(){';
  s += 'loadHist();updateHistCount();';
  s += 'document.getElementById("genForm").onsubmit=function(e){e.preventDefault();gen();};';
  s += 'document.getElementById("sizePreset").onchange=function(){';
  s += 'const v=this.value;';
  s += 'const sizes=' + JSON.stringify(CONFIG.PRESET_SIZES) + ';';
  s += 'if(sizes[v]){document.getElementById("width").value=sizes[v].width;';
  s += 'document.getElementById("height").value=sizes[v].height;}};';
  s += '};';
  
  s += 'function changeLang(l){window.location.href="/?lang="+l;}';
  
  s += 'function setQuality(m){';
  s += 'document.getElementById("qualityMode").value=m;';
  s += 'document.querySelectorAll(".quality-btn").forEach(b=>{';
  s += 'b.classList.remove("bg-green-600","border-green-400","border-2");';
  s += 'b.classList.add("bg-gray-700","border-gray-600","border");});';
  s += 'const btn=document.getElementById("q"+m.charAt(0).toUpperCase()+m.slice(1,3));';
  s += 'btn.classList.remove("bg-gray-700","border-gray-600","border");';
  s += 'btn.classList.add("bg-green-600","border-green-400","border-2");}';
  
  s += 'function useEx(n){document.getElementById("prompt").value=EX[n];}';
  
  s += 'async function gen(){';
  s += 'const p=document.getElementById("prompt").value.trim();';
  s += 'if(!p){alert(T.needPrompt);return;}';
  s += 'const m=document.getElementById("model").value;';
  s += 'const sp=document.getElementById("sizePreset").value;';
  s += 'const sizes=' + JSON.stringify(CONFIG.PRESET_SIZES) + ';';
  s += 'const sz=sizes[sp];';
  s += 'const st=document.getElementById("style").value;';
  s += 'const qm=document.getElementById("qualityMode").value;';
  s += 'const sd=parseInt(document.getElementById("seed").value);';
  s += 'const np=document.getElementById("negPrompt").value.trim();';
  s += 'curParams={prompt:p,model:m,width:sz.width,height:sz.height,style:st,quality_mode:qm,seed:sd,negative_prompt:np};';
  s += 'showState("loading");';
  s += 'let elapsed=0;';
  s += 'timer=setInterval(()=>{elapsed++;document.getElementById("elapsedTime").textContent=elapsed;},1000);';
  s += 'const start=Date.now();';
  s += 'try{';
  s += 'const res=await fetch("/_internal/generate",{method:"POST",headers:{"Content-Type":"application/json"},';
  s += 'body:JSON.stringify(curParams)});';
  s += 'clearInterval(timer);';
  s += 'if(!res.ok)throw new Error("HTTP "+res.status);';
  s += 'const blob=await res.blob();';
  s += 'const base64=await blobToBase64(blob);';
  s += 'const time=((Date.now()-start)/1000).toFixed(2);';
  s += 'const model=res.headers.get("X-Model")||m;';
  s += 'const seed=res.headers.get("X-Seed")||sd;';
  s += 'const translated=res.headers.get("X-Translated")==="true";';
  s += 'const originalPrompt=translated?decodeURIComponent(res.headers.get("X-Original-Prompt")||""):"";';
  s += 'const translatedPrompt=translated?decodeURIComponent(res.headers.get("X-Translated-Prompt")||""):"";';
  s += 'curImgs=[{url:base64,model:model,seed:seed,size:sz.width+"×"+sz.height,time:time,';
  s += 'translated:translated,originalPrompt:originalPrompt,translatedPrompt:translatedPrompt}];';
  s += 'showResults();';
  s += 'saveHist({prompt:p,params:curParams,result:curImgs[0],timestamp:Date.now()});';
  s += '}catch(e){clearInterval(timer);showError(e.message);}}';
  
  s += 'function showState(s){';
  s += 'document.getElementById("emptyState").classList.toggle("hidden",s!=="empty");';
  s += 'document.getElementById("loadingState").classList.toggle("hidden",s!=="loading");';
  s += 'document.getElementById("successState").classList.toggle("hidden",s!=="success");';
  s += 'document.getElementById("errorState").classList.toggle("hidden",s!=="error");}';
  
  s += 'function showResults(){';
  s += 'showState("success");';
  s += 'document.getElementById("resultSummary").textContent=T.generated+" "+curImgs.length+" "+T.images;';
  s += 'document.getElementById("resultModel").textContent=curImgs[0].model;';
  s += 'document.getElementById("resultSize").textContent=curImgs[0].size;';
  s += 'document.getElementById("resultSeed").textContent=curImgs[0].seed;';
  s += 'document.getElementById("resultTime").textContent=curImgs[0].time;';
  
  s += 'const transInfo=document.getElementById("translationInfo");';
  s += 'if(curImgs[0].translated){';
  s += 'transInfo.innerHTML=\'<div class="mt-3 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-sm">\';';
  s += 'transInfo.innerHTML+=\'<div class="flex items-center gap-2 mb-1"><span>🌐</span><span class="text-blue-400 font-medium">\';';
  s += 'transInfo.innerHTML+=(LANG==="zh"?"已自動翻譯":"Auto-translated")+\'</span></div>\';';
  s += 'transInfo.innerHTML+=\'<div class="text-gray-400 text-xs"><span class="font-medium">\';';
  s += 'transInfo.innerHTML+=(LANG==="zh"?"原文: ":"Original: ")+\'</span>\'+curImgs[0].originalPrompt+\'</div>\';';
  s += 'transInfo.innerHTML+=\'<div class="text-gray-400 text-xs"><span class="font-medium">\';';
  s += 'transInfo.innerHTML+=(LANG==="zh"?"翻譯: ":"Translation: ")+\'</span>\'+curImgs[0].translatedPrompt+\'</div></div>\';';
  s += '}else{transInfo.innerHTML="";}';
  
  s += 'const grid=document.getElementById("resultGrid");';
  s += 'grid.innerHTML="";';
  s += 'curImgs.forEach((img,i)=>{';
  s += 'const card=document.createElement("div");';
  s += 'card.className="glass-card rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer border border-gray-700";';
  s += 'card.innerHTML=\'<img src="\'+img.url+\'" class="w-full aspect-square object-cover">\';';
  s += 'card.onclick=()=>showImg(img.url);';
  s += 'grid.appendChild(card);});}';
  
  s += 'function showError(msg){showState("error");document.getElementById("errorMsg").textContent=msg;}';
  
  s += 'function regenerate(){gen();}';
  
  s += 'function retry(){gen();}';
  
  s += 'function reuseParams(){if(curParams.seed!==-1)document.getElementById("seed").value=curParams.seed;alert(T.reused);}';
  
  s += 'function downloadAll(){curImgs.forEach((img,i)=>{setTimeout(()=>{';
  s += 'const blob=base64ToBlob(img.url);';
  s += 'const url=URL.createObjectURL(blob);';
  s += 'const a=document.createElement("a");a.href=url;';
  s += 'a.download="flux-"+Date.now()+"-"+i+".png";a.click();';
  s += 'setTimeout(()=>URL.revokeObjectURL(url),100);';
  s += '},i*500);});}';
  
  s += 'function loadHist(){try{';
  s += 'const saved=localStorage.getItem("flux_hist");';
  s += 'hist=saved?JSON.parse(saved):[];}catch(e){hist=[];}}';
  
  s += 'function saveHist(item){hist.unshift(item);';
  s += 'if(hist.length>100)hist=hist.slice(0,100);';
  s += 'try{localStorage.setItem("flux_hist",JSON.stringify(hist));updateHistCount();}catch(e){console.error("Storage error:",e);}}';
  
  s += 'function updateHistCount(){const c=hist.length;';
  s += 'document.getElementById("histCount").textContent=c;';
  s += 'document.getElementById("modalHistCount").textContent=c;}';
  
  s += 'function showHist(){document.getElementById("histModal").classList.add("show");renderHist();}';
  
  s += 'function hideHist(){document.getElementById("histModal").classList.remove("show");}';
  
  s += 'function renderHist(){';
  s += 'const grid=document.getElementById("histGrid");';
  s += 'const empty=document.getElementById("histEmpty");';
  s += 'if(hist.length===0){grid.classList.add("hidden");empty.classList.remove("hidden");return;}';
  s += 'empty.classList.add("hidden");grid.classList.remove("hidden");';
  s += 'grid.innerHTML="";';
  s += 'hist.forEach((item,idx)=>{';
  s += 'const card=document.createElement("div");';
  s += 'card.className="glass-card p-3 rounded-xl hover:scale-105 transition border border-gray-700";';
  s += 'card.innerHTML=\'<div class="aspect-square rounded-lg overflow-hidden mb-2 bg-gray-900 cursor-pointer">\';';
  s += 'card.innerHTML+=\'<img src="\'+item.result.url+\'" class="w-full h-full object-cover"></div>\';';
  s += 'card.innerHTML+=\'<div class="text-xs space-y-1"><p class="text-gray-400 truncate">\'+item.prompt+\'</p>\';';
  s += 'card.innerHTML+=\'<div class="flex items-center justify-between text-gray-500">\';';
  s += 'card.innerHTML+=\'<span>🤖 \'+item.result.model+\'</span><span>📐 \'+item.result.size+\'</span></div>\';';
  s += 'card.innerHTML+=\'<div class="flex items-center justify-between text-gray-500">\';';
  s += 'card.innerHTML+=\'<span>⏱️ \'+item.result.time+\'s</span>\';';
  s += 'card.innerHTML+=\'<span>\'+new Date(item.timestamp).toLocaleDateString()+\'</span></div></div>\';';
  s += 'card.innerHTML+=\'<div class="mt-2 flex gap-2">\';';
  s += 'card.innerHTML+=\'<button class="reuse-hist flex-1 px-2 py-1 bg-purple-600/20 hover:bg-purple-600/40 rounded text-xs transition">' + t.reuseBtn + '</button>\';';
  s += 'card.innerHTML+=\'<button class="del-hist px-2 py-1 bg-red-600/20 hover:bg-red-600/40 rounded text-xs transition">' + t.deleteBtn + '</button></div>\';';
  s += 'card.querySelector("img").onclick=()=>showImg(item.result.url);';
  s += 'card.querySelector(".reuse-hist").onclick=(e)=>{e.stopPropagation();reuseHist(idx);};';
  s += 'card.querySelector(".del-hist").onclick=(e)=>{e.stopPropagation();delHist(idx);};';
  s += 'grid.appendChild(card);});}';
  
  s += 'function reuseHist(idx){const item=hist[idx];';
  s += 'if(!item)return;';
  s += 'document.getElementById("prompt").value=item.prompt;';
  s += 'if(item.params.negative_prompt)document.getElementById("negPrompt").value=item.params.negative_prompt;';
  s += 'if(item.params.seed!==-1)document.getElementById("seed").value=item.params.seed;';
  s += 'if(item.params.style)document.getElementById("style").value=item.params.style;';
  s += 'hideHist();alert(T.loaded);}';
  
  s += 'function delHist(idx){if(!confirm(T.confirmDel))return;';
  s += 'hist.splice(idx,1);localStorage.setItem("flux_hist",JSON.stringify(hist));';
  s += 'updateHistCount();renderHist();}';
  
  s += 'function clearHist(){if(!confirm(T.confirmClear))return;';
  s += 'hist=[];localStorage.removeItem("flux_hist");updateHistCount();renderHist();}';
  
  s += 'function showImg(url){const modal=document.getElementById("imgModal");';
  s += 'const content=document.getElementById("viewerContent");';
  s += 'content.innerHTML=\'<img src="\'+url+\'" class="w-full h-auto max-h-[85vh] object-contain">\';';
  s += 'modal.classList.add("show");}';
  
  s += 'function hideImg(){document.getElementById("imgModal").classList.remove("show");}';
  
  s += '</script></body></html>';
  
  return s;
}
 
