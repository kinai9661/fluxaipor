// =================================================================================
// Flux AI Pro - 完整功能版本 v9.7.0
// 三欄佈局 + 45+ 風格 + 歷史記錄 + 多語言
// =================================================================================

// ============================================================
// 配置常量
// ============================================================
const CONFIG = {
  PROJECT_NAME: "Flux-AI-Pro",
  PROJECT_VERSION: "9.7.0",
  API_MASTER_KEY: "1",
  FETCH_TIMEOUT: 120000,
  MAX_RETRIES: 3,
  
  POLLINATIONS_AUTH: {
    enabled: false,
    token: "",
    method: "Bearer"
  },
  
  PROVIDERS: {
    pollinations: {
      name: "Pollinations.AI",
      enabled: true,
      endpoint: "https://image.pollinations.ai",
      pathPrefix: "/prompt",
      models: [
        { 
          id: "zimage", 
          name: "Z-Image Turbo", 
          category: "fast",
          price: "$0.0002",
          speed: "極快",
          params: "6B 參數"
        },
        { 
          id: "flux", 
          name: "Flux Standard", 
          category: "balanced",
          price: "$0.00012",
          speed: "標準",
          params: "12B 參數"
        },
        { 
          id: "turbo", 
          name: "Flux Turbo", 
          category: "fast",
          price: "$0.0003",
          speed: "超快",
          params: "優化版"
        },
        { 
          id: "kontext", 
          name: "Kontext", 
          category: "image-to-image",
          price: "$0.00012",
          speed: "標準",
          params: "支持圖生圖"
        }
      ]
    }
  },
  
  // 尺寸預設
  PRESET_SIZES: {
    "square-1k": { name: "方形 1K", width: 1024, height: 1024, icon: "◼️" },
    "square-1.5k": { name: "方形 1.5K", width: 1536, height: 1536, icon: "◼️" },
    "square-2k": { name: "方形 2K", width: 2048, height: 2048, icon: "◼️" },
    "portrait-9-16": { name: "豎屏 9:16", width: 768, height: 1344, icon: "📱" },
    "portrait-9-16-hd": { name: "豎屏 9:16 HD", width: 1080, height: 1920, icon: "📱" },
    "landscape-16-9": { name: "橫屏 16:9", width: 1344, height: 768, icon: "🖥️" },
    "landscape-16-9-hd": { name: "橫屏 16:9 HD", width: 1920, height: 1080, icon: "🖥️" },
    "instagram-square": { name: "Instagram 方形", width: 1080, height: 1080, icon: "📷" },
    "instagram-portrait": { name: "Instagram 豎屏", width: 1080, height: 1350, icon: "📷" },
    "wallpaper-fhd": { name: "桌布 Full HD", width: 1920, height: 1080, icon: "🖼️" },
    "wallpaper-2k": { name: "桌布 2K", width: 2560, height: 1440, icon: "🖼️" },
    "phone-wallpaper": { name: "手機桌布", width: 1170, height: 2532, icon: "📱" }
  },
  
  // 風格預設（45+ 種風格）
  STYLE_PRESETS: {
    // 無風格
    none: {
      name: "無風格",
      icon: "⚪",
      category: "none",
      prompt: "",
      negative: "",
      description: "不使用任何預設風格"
    },
    
    // ========== 寫實風格 ==========
    photorealistic: {
      name: "攝影級寫實",
      icon: "📸",
      category: "realistic",
      prompt: "photorealistic, ultra detailed, 8k uhd, high quality, professional photography, sharp focus, vivid colors, natural lighting",
      negative: "cartoon, anime, painting, illustration, low quality, blurry",
      description: "極致寫實的攝影效果"
    },
    portrait: {
      name: "人像攝影",
      icon: "👤",
      category: "realistic",
      prompt: "portrait photography, professional lighting, shallow depth of field, bokeh background, 85mm lens, sharp focus on eyes",
      negative: "cartoon, anime, multiple people, group photo",
      description: "專業人像攝影風格"
    },
    
    // ========== 動漫風格 ==========
    anime: {
      name: "動漫風格",
      icon: "🎌",
      category: "anime",
      prompt: "anime style, manga art, vibrant colors, detailed character design, expressive eyes, clean lineart",
      negative: "realistic, photo, 3d render",
      description: "日式動漫畫風"
    },
    manga: {
      name: "漫畫風格",
      icon: "📚",
      category: "anime",
      prompt: "manga style, black and white, screentone, dynamic composition, speed lines, dramatic shadows",
      negative: "color, realistic, photo",
      description: "黑白漫畫風格"
    },
    chibi: {
      name: "Q版可愛",
      icon: "🧸",
      category: "anime",
      prompt: "chibi style, cute, kawaii, super deformed, big head, small body, adorable",
      negative: "realistic, detailed, serious",
      description: "Q版可愛風格"
    },
    
    // ========== 藝術風格 ==========
    oil_painting: {
      name: "油畫",
      icon: "🖌️",
      category: "art",
      prompt: "oil painting, canvas texture, brush strokes, impasto technique, rich colors, artistic",
      negative: "photo, digital, smooth",
      description: "古典油畫風格"
    },
    watercolor: {
      name: "水彩畫",
      icon: "💧",
      category: "art",
      prompt: "watercolor painting, soft colors, paper texture, flowing pigments, translucent layers, artistic",
      negative: "photo, sharp, digital",
      description: "水彩藝術風格"
    },
    sketch: {
      name: "素描",
      icon: "✏️",
      category: "art",
      prompt: "pencil sketch, graphite drawing, detailed shading, crosshatching, rough paper texture",
      negative: "color, photo, painting",
      description: "鉛筆素描風格"
    },
    
    // ========== 數位藝術 ==========
    digital_art: {
      name: "數位藝術",
      icon: "💻",
      category: "digital",
      prompt: "digital art, digital painting, concept art, highly detailed, vibrant colors, smooth rendering",
      negative: "photo, traditional media",
      description: "現代數位繪畫"
    },
    "3d_render": {
      name: "3D 渲染",
      icon: "🎲",
      category: "digital",
      prompt: "3d render, octane render, cinema 4d, detailed model, ray tracing, volumetric lighting",
      negative: "2d, flat, sketch",
      description: "專業3D渲染效果"
    },
    pixel_art: {
      name: "像素藝術",
      icon: "👾",
      category: "digital",
      prompt: "pixel art, 8-bit, retro game style, pixelated, limited color palette",
      negative: "smooth, realistic, high resolution",
      description: "復古像素風格"
    },
    low_poly: {
      name: "低多邊形",
      icon: "🔷",
      category: "digital",
      prompt: "low poly, geometric, polygonal art, faceted, minimalist 3d",
      negative: "realistic, detailed, organic",
      description: "幾何低面建模"
    },
    
    // ========== 電影風格 ==========
    cinematic: {
      name: "電影級質感",
      icon: "🎬",
      category: "cinematic",
      prompt: "cinematic lighting, movie scene, dramatic composition, film grain, anamorphic lens, color grading",
      negative: "amateur, snapshot, low quality",
      description: "好萊塢電影質感"
    },
    film_noir: {
      name: "黑色電影",
      icon: "🎩",
      category: "cinematic",
      prompt: "film noir, black and white, high contrast, dramatic shadows, 1940s style, moody",
      negative: "color, bright, cheerful",
      description: "經典黑白電影"
    },
    
    // ========== 奇幻風格 ==========
    fantasy: {
      name: "奇幻風格",
      icon: "🔮",
      category: "fantasy",
      prompt: "fantasy art, magical, mystical, epic scene, detailed world, imaginative",
      negative: "realistic, mundane, modern",
      description: "奇幻魔法世界"
    },
    dark_fantasy: {
      name: "黑暗奇幻",
      icon: "🌑",
      category: "fantasy",
      prompt: "dark fantasy, gothic, ominous atmosphere, dramatic lighting, mysterious, dark colors",
      negative: "bright, cheerful, cute",
      description: "黑暗神秘風格"
    },
    gothic: {
      name: "哥德風格",
      icon: "🦇",
      category: "fantasy",
      prompt: "gothic style, victorian, ornate details, dark aesthetic, dramatic, elaborate",
      negative: "modern, minimalist, bright",
      description: "維多利亞哥德"
    },
    
    // ========== 科幻風格 ==========
    cyberpunk: {
      name: "賽博朋克",
      icon: "🌃",
      category: "scifi",
      prompt: "cyberpunk style, neon lights, futuristic city, tech noir, dystopian, high tech low life",
      negative: "natural, historical, low tech",
      description: "霓虹未來都市"
    },
    steampunk: {
      name: "蒸汽朋克",
      icon: "⚙️",
      category: "scifi",
      prompt: "steampunk style, victorian era, brass and copper, gears and cogs, steam powered, retro futuristic",
      negative: "modern, digital, clean",
      description: "維多利亞蒸汽機械"
    },
    scifi: {
      name: "科幻風格",
      icon: "🚀",
      category: "scifi",
      prompt: "science fiction, futuristic, advanced technology, space age, sleek design",
      negative: "historical, primitive, natural",
      description: "未來科技感"
    },
    biomechanical: {
      name: "生物機械",
      icon: "🦾",
      category: "scifi",
      prompt: "biomechanical, H.R. Giger style, organic meets mechanical, alien technology, detailed",
      negative: "natural, simple, clean",
      description: "生物與機械融合"
    },
    holographic: {
      name: "全息投影",
      icon: "🌈",
      category: "scifi",
      prompt: "holographic, neon glow, translucent, futuristic display, digital projection",
      negative: "solid, opaque, natural",
      description: "全息科技效果"
    },
    
    // ========== 抽象風格 ==========
    surreal: {
      name: "超現實主義",
      icon: "🌀",
      category: "abstract",
      prompt: "surrealism, dreamlike, Salvador Dali style, impossible geometry, mind-bending, symbolic",
      negative: "realistic, ordinary, logical",
      description: "超現實夢境"
    },
    abstract: {
      name: "抽象藝術",
      icon: "🎨",
      category: "abstract",
      prompt: "abstract art, non-representational, bold colors, geometric shapes, expressive",
      negative: "realistic, detailed, representational",
      description: "現代抽象藝術"
    },
    psychedelic: {
      name: "迷幻藝術",
      icon: "🍄",
      category: "abstract",
      prompt: "psychedelic art, vibrant colors, swirling patterns, kaleidoscopic, trippy, fractal",
      negative: "muted, simple, static",
      description: "迷幻色彩"
    },
    
    // ========== 傳統藝術 ==========
    ink_wash: {
      name: "水墨畫",
      icon: "🖋️",
      category: "traditional",
      prompt: "Chinese ink wash painting, sumi-e, brush strokes, minimalist, black ink, traditional",
      negative: "color, western, detailed",
      description: "中國水墨畫"
    },
    art_nouveau: {
      name: "新藝術風格",
      icon: "🌺",
      category: "traditional",
      prompt: "art nouveau, organic forms, flowing lines, decorative, Alphonse Mucha style, elegant",
      negative: "geometric, modern, minimalist",
      description: "新藝術運動"
    },
    impressionism: {
      name: "印象派",
      icon: "🌅",
      category: "traditional",
      prompt: "impressionism, loose brushwork, light effects, Claude Monet style, atmospheric, soft colors",
      negative: "detailed, sharp, realistic",
      description: "印象派繪畫"
    },
    stained_glass: {
      name: "彩繪玻璃",
      icon: "🪟",
      category: "traditional",
      prompt: "stained glass window, colorful glass pieces, lead lines, gothic cathedral style, luminous",
      negative: "opaque, modern, simple",
      description: "教堂彩繪玻璃"
    },
    ukiyo_e: {
      name: "浮世繪",
      icon: "🗾",
      category: "traditional",
      prompt: "ukiyo-e, Japanese woodblock print, Hokusai style, bold outlines, flat colors, traditional",
      negative: "realistic, 3d, western",
      description: "日本浮世繪"
    },
    baroque: {
      name: "巴洛克風格",
      icon: "👑",
      category: "traditional",
      prompt: "baroque style, ornate details, dramatic lighting, rich colors, grand composition, classical",
      negative: "minimalist, modern, simple",
      description: "巴洛克藝術"
    },
    
    // ========== 現代風格 ==========
    pop_art: {
      name: "普普藝術",
      icon: "🎪",
      category: "modern",
      prompt: "pop art, Andy Warhol style, bold colors, screen printing effect, commercial imagery, retro",
      negative: "subtle, realistic, classical",
      description: "波普藝術"
    },
    vaporwave: {
      name: "蒸汽波",
      icon: "🌊",
      category: "modern",
      prompt: "vaporwave aesthetic, 80s 90s nostalgia, pastel colors, glitch art, retro computer graphics",
      negative: "modern, realistic, muted",
      description: "復古未來主義"
    },
    graffiti: {
      name: "塗鴉藝術",
      icon: "🎨",
      category: "modern",
      prompt: "graffiti art, street art, spray paint, urban, bold colors, stylized letters",
      negative: "classical, refined, subtle",
      description: "街頭塗鴉"
    },
    neon: {
      name: "霓虹燈光",
      icon: "💡",
      category: "modern",
      prompt: "neon lighting, glowing signs, vibrant colors, night scene, luminous, electric",
      negative: "natural light, muted, daytime",
      description: "霓虹燈效果"
    },
    
    // ========== 復古風格 ==========
    vintage: {
      name: "復古風格",
      icon: "📻",
      category: "retro",
      prompt: "vintage style, retro aesthetic, aged paper, nostalgic, old photograph, faded colors",
      negative: "modern, sharp, digital",
      description: "懷舊復古感"
    },
    art_deco: {
      name: "裝飾藝術",
      icon: "🏛️",
      category: "retro",
      prompt: "art deco, 1920s style, geometric patterns, luxurious, gold accents, elegant",
      negative: "modern, minimalist, rough",
      description: "1920年代裝飾藝術"
    },
    
    // ========== 極簡風格 ==========
    minimalist: {
      name: "極簡主義",
      icon: "⬜",
      category: "minimal",
      prompt: "minimalist design, clean lines, simple composition, negative space, limited colors",
      negative: "detailed, ornate, busy",
      description: "極簡設計"
    },
    line_art: {
      name: "線條藝術",
      icon: "➰",
      category: "minimal",
      prompt: "line art, continuous line drawing, minimalist, black and white, simple elegant lines",
      negative: "shading, color, detailed",
      description: "純線條繪畫"
    },
    
    // ========== 其他風格 ==========
    comic_book: {
      name: "美式漫畫",
      icon: "💥",
      category: "other",
      prompt: "comic book style, bold outlines, halftone dots, speech bubbles, dynamic action, vibrant colors",
      negative: "realistic, photo, subtle",
      description: "美式漫畫風格"
    },
    papercraft: {
      name: "剪紙藝術",
      icon: "✂️",
      category: "other",
      prompt: "paper craft, paper cutting art, layered paper, shadow box effect, handmade",
      negative: "digital, smooth, realistic",
      description: "立體剪紙"
    },
    isometric: {
      name: "等角視圖",
      icon: "📐",
      category: "other",
      prompt: "isometric view, isometric perspective, architectural diagram, clean geometric shapes",
      negative: "perspective, realistic viewpoint",
      description: "等角投影視圖"
    }
  }
};
// ============================================================
// 語言包
// ============================================================
const TRANSLATIONS = {
  'zh-TW': {
    // 頁面標題
    title: 'Flux AI Pro',
    subtitle: '專業 AI 圖像生成平台',
    version: '版本',
    
    // 導航
    nav: {
      generate: '生成',
      history: '歷史',
      settings: '設置'
    },
    
    // 左側欄 - 生成參數
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
    
    // 中間欄 - 生成結果
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
    
    // 右側欄 - 提示詞
    prompt: {
      title: '提示詞',
      positive: '正面提示詞',
      positivePlaceholder: '描述你想生成的圖像...\n\n例如：\n一隻可愛的橘色貓咪坐在窗邊，陽光灑在它身上，柔和的光影效果，高清攝影',
      negative: '負面提示詞',
      negativePlaceholder: '描述不想要的元素...\n\n例如：\n模糊、低質量、變形、多餘的肢體',
      negativeOptional: '（可選）',
      referenceImages: '參考圖像 URL',
      referenceImagesPlaceholder: 'https://example.com/image1.jpg, https://example.com/image2.jpg\n\n支持多個 URL，用逗號分隔\n最多 3 張參考圖',
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
    
    // 歷史記錄
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
    
    // 風格類別
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
    
    // 狀態消息
    status: {
      online: '系統正常',
      apiConfigured: 'API 已配置',
      ready: '就緒'
    },
    
    // 錯誤消息
    errors: {
      promptRequired: '請輸入提示詞',
      generationFailed: '生成失敗，請稍後重試',
      networkError: '網絡錯誤，請檢查連接',
      apiError: 'API 錯誤'
    }
  },
  
  'en': {
    title: 'Flux AI Pro',
    subtitle: 'Professional AI Image Generation Platform',
    version: 'Version',
    
    nav: {
      generate: 'Generate',
      history: 'History',
      settings: 'Settings'
    },
    
    params: {
      title: 'Generation Parameters',
      modelSelection: 'Model Selection',
      priceLabel: 'Price',
      speedLabel: 'Speed',
      paramsLabel: 'Parameters',
      sizePreset: 'Size Preset',
      artStyle: 'Art Style',
      styleCount: 'Styles',
      categories: 'Categories',
      qualityMode: 'Quality Mode',
      economy: 'Economy Mode',
      economyDesc: 'Fast generation for testing',
      standard: 'Standard Mode',
      standardDesc: 'Balanced quality and speed (Recommended)',
      ultra: 'Ultra HD Mode',
      ultraDesc: 'Maximum quality, slower generation',
      advancedOptions: 'Advanced Options',
      seed: 'Seed',
      seedPlaceholder: '-1 for random',
      numOutputs: 'Number of Outputs',
      autoOptimize: 'Auto Optimize',
      autoHD: 'Auto HD Enhancement',
      generateBtn: 'Generate'
    },
    
    results: {
      title: 'Generated Results',
      waiting: 'No images generated yet',
      waitingDesc: 'Fill in parameters and prompt, then click generate',
      generating: 'AI is creating',
      generatingDesc: 'This may take a few seconds to a minute',
      timeElapsed: 'Time elapsed',
      seconds: 'seconds',
      success: 'Generation successful!',
      successDesc: 'Generated',
      images: 'images',
      failed: 'Generation failed',
      download: 'Download',
      regenerate: 'Regenerate',
      viewHistory: 'View History',
      reuse: 'Reuse Parameters'
    },
    
    prompt: {
      title: 'Prompt',
      positive: 'Positive Prompt',
      positivePlaceholder: 'Describe the image you want to generate...\n\nExample:\nA cute orange cat sitting by the window, sunlight casting on it, soft lighting effects, high-definition photography',
      negative: 'Negative Prompt',
      negativePlaceholder: 'Describe unwanted elements...\n\nExample:\nblurry, low quality, deformed, extra limbs',
      negativeOptional: '(Optional)',
      referenceImages: 'Reference Images URL',
      referenceImagesPlaceholder: 'https://example.com/image1.jpg, https://example.com/image2.jpg\n\nSupports multiple URLs, separated by commas\nUp to 3 reference images',
      referenceOptional: '(Image-to-Image - Optional)',
      autoTranslate: 'Auto translation supported',
      supportImageToImage: 'Image-to-Image model: Kontext',
      styleHints: 'Style Hints',
      hints: [
        'Detailed descriptions yield better results',
        'Art styles enhance visual effects',
        'Chinese prompts are auto-translated to English',
        'Negative prompts help exclude unwanted elements',
        'Reference images work only with Kontext model'
      ],
      currentStyle: 'Current Style',
      noStyle: 'No Style',
      styleDescription: 'Style Description'
    },
    
    history: {
      title: 'Generation History',
      count: 'records',
      total: 'Total',
      noHistory: 'No history yet',
      noHistoryDesc: 'Your generated images will appear here',
      export: 'Export',
      clear: 'Clear All',
      confirmClear: 'Are you sure you want to clear all history? This cannot be undone.',
      delete: 'Delete',
      viewImage: 'View Image',
      close: 'Close'
    },
    
    styleCategories: {
      none: 'No Style',
      realistic: 'Realistic',
      anime: 'Anime',
      art: 'Art',
      digital: 'Digital Art',
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
    
    status: {
      online: 'Online',
      apiConfigured: 'API Configured',
      ready: 'Ready'
    },
    
    errors: {
      promptRequired: 'Please enter a prompt',
      generationFailed: 'Generation failed, please try again',
      networkError: 'Network error, please check connection',
      apiError: 'API Error'
    }
  }
};

// ============================================================
// 工具函數
// ============================================================

// CORS 標頭
function corsHeaders(additionalHeaders = {}) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Max-Age': '86400',
    ...additionalHeaders
  };
}

// 獲取客戶端 IP
function getClientIP(request) {
  return request.headers.get('cf-connecting-ip') || 
         request.headers.get('x-forwarded-for') || 
         request.headers.get('x-real-ip') || 
         'unknown';
}

// 生成隨機 ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// 獲取語言
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
  
  return 'zh-TW'; // 默認繁體中文
}

// 錯誤響應
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

// 成功響應
function successResponse(data) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: corsHeaders({ 'Content-Type': 'application/json' })
  });
}

// 日誌函數
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
// ============================================================
// 主要 Worker 邏輯
// ============================================================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const startTime = Date.now();
    const clientIP = getClientIP(request);
    const lang = getLanguage(request);
    
    // 設置 API 認證（如果環境變數存在）
    if (env.POLLINATIONS_API_KEY) {
      CONFIG.POLLINATIONS_AUTH.enabled = true;
      CONFIG.POLLINATIONS_AUTH.token = env.POLLINATIONS_API_KEY;
    }
    
    // 處理 OPTIONS 請求（CORS 預檢）
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }
    
    try {
      // 路由處理
      const path = url.pathname;
      
      // 首頁
      if (path === '/' || path === '') {
        return new Response(getHTML(lang), {
          status: 200,
          headers: corsHeaders({
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
          })
        });
      }
      
      // 健康檢查
      if (path === '/health' || path === '/api/health') {
        return handleHealthCheck(env);
      }
      
      // API: 獲取配置
      if (path === '/api/config') {
        return handleGetConfig();
      }
      
      // API: 生成圖像
      if (path === '/_internal/generate' || path === '/api/generate') {
        if (request.method !== 'POST') {
          return errorResponse('Method not allowed', 405);
        }
        return await handleGenerate(request, env, clientIP);
      }
      
      // API: 獲取模型列表
      if (path === '/api/models') {
        return handleGetModels();
      }
      
      // API: 獲取風格列表
      if (path === '/api/styles') {
        return handleGetStyles(lang);
      }
      
      // 404
      return errorResponse('Not Found', 404);
      
    } catch (error) {
      log('error', 'Request failed', {
        error: error.message,
        stack: error.stack,
        path: url.pathname,
        ip: clientIP
      });
      
      return errorResponse(
        'Internal server error: ' + error.message,
        500
      );
    }
  }
};

// ============================================================
// API 處理函數
// ============================================================

// 健康檢查
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

// 獲取配置
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

// 獲取模型列表
function handleGetModels() {
  return successResponse({
    models: CONFIG.PROVIDERS.pollinations.models
  });
}

// 獲取風格列表
function handleGetStyles(lang = 'zh-TW') {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['zh-TW'];
  
  // 按類別組織風格
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

// ============================================================
// 圖像生成處理
// ============================================================

async function handleGenerate(request, env, clientIP) {
  const startTime = Date.now();
  
  try {
    // 解析請求體
    const body = await request.json();
    
    // 驗證必需參數
    if (!body.prompt || !body.prompt.trim()) {
      return errorResponse('Prompt is required', 400);
    }
    
    // 提取參數
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
    
    // 生成隨機 seed（如果需要）
    const currentSeed = params.seed === -1 
      ? Math.floor(Math.random() * 1000000) 
      : params.seed;
    
    // 應用風格
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
    
    // 質量模式調整
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
          // 不添加額外質量描述
          break;
      }
    }
    
    // 構建 API URL
    const encodedPrompt = encodeURIComponent(finalPrompt);
    const apiUrl = `${CONFIG.PROVIDERS.pollinations.endpoint}${CONFIG.PROVIDERS.pollinations.pathPrefix}/${encodedPrompt}?model=${params.model}&width=${params.width}&height=${params.height}&seed=${currentSeed}&nologo=true&enhance=true`;
    
    // 準備請求標頭
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'image/*,*/*',
      'Referer': 'https://pollinations.ai/',
      'Origin': 'https://pollinations.ai'
    };
    
    // 添加認證（如果啟用）
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
    
    // 調用 API
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
    
    // 獲取圖像數據
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
    
    // 返回圖像
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
// ============================================================
// HTML 頁面生成
// ============================================================

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

/* 毛玻璃卡片 */
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

/* 輸入框樣式 */
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

/* 按鈕樣式 */
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

/* Spinner 動畫 */
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

/* 摺疊內容 */
.collapsible-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.collapsible-content.open {
  max-height: 2000px;
}

/* 風格選項 */
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

/* 徽章樣式 */
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

/* 圖片容器 */
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

/* 滾動條美化 */
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

/* 響應式調整 */
@media (max-width: 1024px) {
  .glass-card {
    backdrop-filter: blur(15px) saturate(150%);
  }
}

/* 模態框 */
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

/* 選擇高亮 */
::selection {
  background-color: rgba(34, 197, 94, 0.3);
  color: inherit;
}
</style>
</head>

<body>
  <!-- 頂部導航欄 -->
  <header class="glass-card border-b border-gray-800 sticky top-0 z-50">
    <div class="px-4 py-3 flex items-center justify-between max-w-screen-2xl mx-auto">
      <!-- Logo 和標題 -->
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
      
      <!-- 右側控制 -->
      <div class="flex items-center gap-2">
        <!-- 歷史記錄按鈕 -->
        <button id="historyBtn" class="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-sm flex items-center gap-2 border border-gray-700">
          <span>📚</span>
          <span class="hidden sm:inline">${t.nav.history}</span>
          <span id="historyCount" class="px-2 py-0.5 rounded-full bg-green-500 text-white text-xs font-bold min-w-[20px] text-center">0</span>
        </button>
        
        <!-- 語言切換 -->
        <select id="langSwitch" class="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm cursor-pointer input-field">
          <option value="zh-TW" ${lang === 'zh-TW' ? 'selected' : ''}>🇹🇼 繁中</option>
          <option value="en" ${lang === 'en' ? 'selected' : ''}>🇬🇧 EN</option>
        </select>
      </div>
    </div>
  </header>

  <!-- 主要內容區域 - 三欄布局 -->
  <div class="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] max-w-screen-2xl mx-auto">
    
    <!-- 左側欄 - 生成參數 -->
    <aside id="leftPanel" class="w-full lg:w-80 xl:w-96 glass-card border-r border-gray-800 overflow-y-auto">
      <div class="p-4 space-y-4">
        <!-- 標題 -->
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
          <span class="text-2xl">⚙️</span>
          <h2 class="text-lg font-bold">${t.params.title}</h2>
        </div>

        <form id="generateForm" class="space-y-4">
          <!-- 模型選擇 -->
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
            
            <!-- 模型信息 -->
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

          <!-- 尺寸預設 -->
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

          <!-- 藝術風格 -->
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
            
            <!-- 風格預覽 -->
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

          <!-- 質量模式 -->
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

          <!-- 進階選項（可摺疊） -->
          <div class="border-t border-gray-700 pt-4">
            <button type="button" id="advancedToggle" class="w-full flex items-center justify-between text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-800/50 transition">
              <span class="flex items-center gap-2">
                <span>🔧</span>
                <span>${t.params.advancedOptions}</span>
              </span>
              <span id="advancedIcon" class="text-gray-400 transition-transform">▼</span>
            </button>
            
            <div id="advancedSection" class="collapsible-content mt-3 space-y-3">
              <!-- Seed -->
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
              
              <!-- 生成數量 -->
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
              
              <!-- 自動優化選項 -->
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

          <!-- 生成按鈕 -->
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
          
          <!-- 進度條 -->
          <div class="w-full max-w-md mt-6">
            <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div id="progressBar" class="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>
        </div>

        <!-- 結果區域 -->
        <div id="resultsContainer" class="hidden">
          <!-- 成功訊息 -->
          <div class="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-xl">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">✅</span>
              <div>
                <h3 class="font-bold text-green-400">${t.results.success}</h3>
                <p class="text-sm text-gray-400">${t.results.successDesc} <span id="imageCount" class="text-green-400 font-bold">1</span> ${t.results.images}</p>
              </div>
            </div>
            
            <!-- 生成信息 -->
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

          <!-- 圖片網格 -->
          <div id="imageGrid" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <!-- 動態插入圖片 -->
          </div>

          <!-- 操作按鈕 -->
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

        <!-- 錯誤狀態 -->
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

    <!-- 右側欄 - 提示詞輸入 -->
    <aside id="rightPanel" class="w-full lg:w-80 xl:w-96 glass-card border-l border-gray-800 overflow-y-auto">
      <div class="p-4 space-y-4">
        <!-- 標題 -->
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
          <span class="text-2xl">✍️</span>
          <h2 class="text-lg font-bold">${t.prompt.title}</h2>
        </div>

        <!-- 正面提示詞 -->
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

        <!-- 負面提示詞 -->
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

        <!-- 參考圖像 URL (圖生圖) -->
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

        <!-- 風格提示 -->
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

        <!-- 快速範例 -->
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

  <!-- 歷史記錄模態框 -->
  <div id="historyModal" class="modal">
    <div class="glass-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
      <!-- 模態框標題 -->
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
      
      <!-- 歷史記錄列表 -->
      <div id="historyList" class="flex-1 overflow-y-auto p-4">
        <!-- 空狀態 -->
        <div id="historyEmpty" class="flex flex-col items-center justify-center py-16">
          <span class="text-6xl mb-4 opacity-50">📭</span>
          <p class="text-gray-400 text-center">${t.history.noHistoryDesc}</p>
        </div>
        
        <!-- 歷史項目網格 -->
        <div id="historyGrid" class="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- 動態插入歷史項目 -->
        </div>
      </div>
    </div>
  </div>

  <!-- 圖片查看器模態框 -->
  <div id="imageViewerModal" class="modal">
    <div class="relative max-w-7xl w-full mx-auto">
      <button id="closeViewerBtn" class="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg hover:bg-black/70 flex items-center justify-center text-2xl transition border border-white/20">
        ✖️
      </button>
      <div id="viewerContent" class="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <!-- 動態插入圖片 -->
      </div>
    </div>
  </div>

  <!-- JavaScript -->
  <script>
    // ============================================================
    // 全局變數
    // ============================================================
    const CONFIG = ${JSON.stringify(CONFIG)};
    const TRANSLATIONS = ${JSON.stringify(TRANSLATIONS)};
    let currentLang = '${lang}';
    let t = TRANSLATIONS[currentLang];
    let currentParams = {};
    let generationStartTime = 0;
    let timerInterval = null;
    let history = [];

    // ============================================================
    // 初始化
    // ============================================================
    document.addEventListener('DOMContentLoaded', () => {
      initializeApp();
      loadHistory();
      updateHistoryCount();
    });

    function initializeApp() {
      // 事件監聽器
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

      // 快速範例按鈕
      document.querySelectorAll('.example-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.getElementById('prompt').value = e.target.dataset.prompt;
        });
      });

      // 點擊模態框外部關閉
      document.getElementById('historyModal').addEventListener('click', (e) => {
        if (e.target.id === 'historyModal') hideHistory();
      });
      document.getElementById('imageViewerModal').addEventListener('click', (e) => {
        if (e.target.id === 'imageViewerModal') hideImageViewer();
      });

      // 初始化顯示
      updateModelInfo();
      updateStylePreview();
      updateQualityDesc();
    }
`;
    // ============================================================
    // 核心功能
    // ============================================================
    
    async function handleGenerate(e) {
      e.preventDefault();
      
      const prompt = document.getElementById('prompt').value.trim();
      if (!prompt) {
        alert(t.errors.promptRequired);
        return;
      }

      // 收集參數
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

      // 顯示生成中
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

        // 獲取響應頭信息
        const usedSeed = response.headers.get('X-Seed');
        const genTime = response.headers.get('X-Generation-Time');
        const usedModel = response.headers.get('X-Model');
        const styleName = response.headers.get('X-Style-Name');

        // 轉換圖片為 blob
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        // 顯示結果
        displayResults([{
          url: imageUrl,
          seed: usedSeed,
          model: usedModel,
          size: sizeConfig.name,
          time: genTime,
          style: styleName
        }]);

        // 保存到歷史
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

      // 下載按鈕
      document.querySelectorAll('.download-single').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          downloadImage(e.target.closest('button').dataset.url, e.target.closest('button').dataset.idx);
        });
      });

      // 更新信息
      document.getElementById('imageCount').textContent = images.length;
      document.getElementById('usedModel').textContent = images[0].model;
      document.getElementById('usedSize').textContent = images[0].size;
      document.getElementById('usedSeed').textContent = images[0].seed;
      document.getElementById('generationTime').textContent = images[0].time + 's';

      // 操作按鈕
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

    // ============================================================
    // 計時器
    // ============================================================
    
    function startTimer() {
      generationStartTime = Date.now();
      document.getElementById('elapsedTime').textContent = '0';
      
      timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - generationStartTime) / 1000);
        document.getElementById('elapsedTime').textContent = elapsed;
        
        // 進度條動畫（模擬）
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

    // ============================================================
    // UI 更新函數
    // ============================================================
    
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

    // ============================================================
    // 歷史記錄
    // ============================================================
    
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

    // ============================================================
    // 圖片查看器
    // ============================================================
    
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

    // ============================================================
    // 下載功能
    // ============================================================
    
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

    // ============================================================
    // 語言切換
    // ============================================================
    
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



