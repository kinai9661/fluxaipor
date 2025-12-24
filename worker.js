// =================================================================================
// Flux-AI-Pro Worker - 完整版
// Version: 9.6.1-extended-styles-shadcn-complete
// =================================================================================

// =================================================================================
// 配置常量
// =================================================================================

const CONFIG = {
  PROJECT_NAME: "Flux-AI-Pro",
  PROJECT_VERSION: "9.6.1-extended-styles-shadcn-complete",
  API_MASTER_KEY: "1",
  FETCH_TIMEOUT: 120000,
  MAX_RETRIES: 3,
  
  // 🌐 語言配置
  LANGUAGES: {
    'zh-TW': {
      name: '繁體中文',
      flag: '🇹🇼',
      code: 'zh-TW'
    },
    'en': {
      name: 'English',
      flag: '🇺🇸',
      code: 'en'
    }
  },
  
  // 🌐 多語言文本
  I18N: {
    'zh-TW': {
      header: {
        title: 'Flux AI Pro',
        apiAuth: '已認證',
        needApiKey: '需要 API Key',
        styles: '風格',
        generate: '生成圖像',
        history: '歷史'
      },
      sidebar: {
        parameters: '生成參數',
        modelSelect: '模型選擇',
        sizePreset: '尺寸預設',
        artStyle: '藝術風格',
        qualityMode: '質量模式',
        advancedOptions: '進階選項',
        seed: 'Seed',
        randomSeed: '隨機',
        numOutputs: '生成數量',
        autoOptimize: '自動優化參數',
        autoHD: '自動HD增強',
        startGenerate: '開始生成',
        economyMode: '經濟模式 (快速)',
        standardMode: '標準模式 (平衡)',
        ultraMode: '超高清模式 (極致)'
      },
      prompts: {
        title: '提示詞',
        positive: '正面提示詞',
        negative: '負面提示詞 (可選)',
        referenceImages: '參考圖像 URL (可選)',
        supportsChinese: '支持中文自動翻譯',
        supportsImageToImage: '支持圖生圖的模型：Kontext',
        positivePlaceholder: '描述你想生成的圖像...\n\n例如：\n• A beautiful sunset over mountains\n• 一隻可愛的貓咪在花園裡玩耍\n• Cyberpunk city at night, neon lights\n• Anime girl with blue hair',
        negativePlaceholder: '描述不想要的內容...\n\n例如：\n• blurry, low quality, distorted\n• ugly, deformed, bad anatomy',
        referencePlaceholder: '多張圖片用逗號分隔\n\n例如：\nhttps://example.com/image1.jpg,\nhttps://example.com/image2.jpg'
      },
      results: {
        title: '生成結果',
        noImages: '尚未生成任何圖像',
        noImagesDesc: '填寫左側參數並輸入提示詞後點擊生成按鈕',
        generating: '正在生成圖像，請稍候...',
        generatingDesc: '這可能需要幾秒鐘到一分鐘',
        success: '生成成功！',
        successDesc: '已生成 {count} 張圖片並保存到歷史記錄',
        failed: '生成失敗',
        authError: '認證問題',
        authErrorDesc: '請確保已設置有效的 POLLINATIONS_API_KEY 環境變量',
        networkError: '網路錯誤',
        justGenerated: '剛剛生成',
        reuse: '重用',
        download: '下載',
        viewHistory: '歷史'
      },
      history: {
        title: '歷史記錄',
        totalRecords: '總記錄數',
        storageSize: '存儲空間',
        recentStyle: '最近風格',
        export: '導出',
        clear: '清空',
        noHistory: '暫無歷史記錄',
        noHistoryDesc: '生成的圖像會自動保存在這裡',
        delete: '刪除',
        confirmDelete: '確定要刪除這條記錄嗎？',
        confirmClear: '確定要清空所有歷史記錄嗎？此操作不可恢復！'
      },
      styleHint: {
        title: '風格提示',
        current: '當前已選',
        noStyle: '無風格',
        useOriginal: '使用原始提示詞'
      },
      config: {
        title: '當前配置',
        model: '模型',
        size: '尺寸',
        style: '風格',
        apiEndpoint: 'API 端點'
      }
    },
    'en': {
      header: {
        title: 'Flux AI Pro',
        apiAuth: 'Authenticated',
        needApiKey: 'API Key Required',
        styles: 'Styles',
        generate: 'Generate',
        history: 'History'
      },
      sidebar: {
        parameters: 'Generation Parameters',
        modelSelect: 'Model Selection',
        sizePreset: 'Size Preset',
        artStyle: 'Art Style',
        qualityMode: 'Quality Mode',
        advancedOptions: 'Advanced Options',
        seed: 'Seed',
        randomSeed: 'Random',
        numOutputs: 'Number of Outputs',
        autoOptimize: 'Auto Optimize Parameters',
        autoHD: 'Auto HD Enhancement',
        startGenerate: 'Start Generation',
        economyMode: 'Economy (Fast)',
        standardMode: 'Standard (Balanced)',
        ultraMode: 'Ultra HD (Best)'
      },
      prompts: {
        title: 'Prompts',
        positive: 'Positive Prompt',
        negative: 'Negative Prompt (Optional)',
        referenceImages: 'Reference Image URLs (Optional)',
        supportsChinese: 'Supports Auto Translation',
        supportsImageToImage: 'Image-to-Image Support: Kontext',
        positivePlaceholder: 'Describe the image you want to generate...\n\nExamples:\n• A beautiful sunset over mountains\n• Cute cat playing in the garden\n• Cyberpunk city at night, neon lights\n• Anime girl with blue hair',
        negativePlaceholder: 'Describe what you don\'t want...\n\nExamples:\n• blurry, low quality, distorted\n• ugly, deformed, bad anatomy',
        referencePlaceholder: 'Separate multiple images with commas\n\nExample:\nhttps://example.com/image1.jpg,\nhttps://example.com/image2.jpg'
      },
      results: {
        title: 'Generation Results',
        noImages: 'No images generated yet',
        noImagesDesc: 'Fill in the parameters and click generate',
        generating: 'Generating images, please wait...',
        generatingDesc: 'This may take several seconds to a minute',
        success: 'Generation Successful!',
        successDesc: 'Generated {count} images and saved to history',
        failed: 'Generation Failed',
        authError: 'Authentication Issue',
        authErrorDesc: 'Please ensure POLLINATIONS_API_KEY is set',
        networkError: 'Network Error',
        justGenerated: 'Just Generated',
        reuse: 'Reuse',
        download: 'Download',
        viewHistory: 'History'
      },
      history: {
        title: 'History',
        totalRecords: 'Total Records',
        storageSize: 'Storage Size',
        recentStyle: 'Recent Style',
        export: 'Export',
        clear: 'Clear',
        noHistory: 'No history yet',
        noHistoryDesc: 'Generated images will be saved here',
        delete: 'Delete',
        confirmDelete: 'Are you sure you want to delete this record?',
        confirmClear: 'Are you sure you want to clear all history? This cannot be undone!'
      },
      styleHint: {
        title: 'Style Hint',
        current: 'Current',
        noStyle: 'No Style',
        useOriginal: 'Use original prompt'
      },
      config: {
        title: 'Current Configuration',
        model: 'Model',
        size: 'Size',
        style: 'Style',
        apiEndpoint: 'API Endpoint'
      }
    }
  },
  
  // API 認證配置
  POLLINATIONS_AUTH: {
    enabled: false,
    token: "",
    method: "Bearer"
  },
  
  // Provider 配置
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
          description: "6B parameters, ultra-fast generation",
          supports_reference_images: false,
          max_reference_images: 0
        },
        {
          id: "flux",
          name: "Flux Standard",
          category: "balanced",
          description: "Balanced speed and quality",
          supports_reference_images: false,
          max_reference_images: 0
        },
        {
          id: "turbo",
          name: "Flux Turbo",
          category: "fast",
          description: "Super fast generation",
          supports_reference_images: false,
          max_reference_images: 0
        },
        {
          id: "kontext",
          name: "Kontext",
          category: "image-to-image",
          description: "Supports reference images",
          supports_reference_images: true,
          max_reference_images: 3
        }
      ]
    }
  },
  
  DEFAULT_PROVIDER: "pollinations",
  
  // 尺寸預設
  PRESET_SIZES: {
    "square-1k": { name: "方形 1K", width: 1024, height: 1024 },
    "square-1.5k": { name: "方形 1.5K", width: 1536, height: 1536 },
    "square-2k": { name: "方形 2K", width: 2048, height: 2048 },
    "portrait-9-16": { name: "豎屏 9:16", width: 768, height: 1344 },
    "portrait-9-16-hd": { name: "豎屏 9:16 HD", width: 1080, height: 1920 },
    "landscape-16-9": { name: "橫屏 16:9", width: 1344, height: 768 },
    "landscape-16-9-hd": { name: "橫屏 16:9 HD", width: 1920, height: 1080 },
    "instagram-square": { name: "Instagram 方形", width: 1080, height: 1080 },
    "instagram-portrait": { name: "Instagram 豎屏", width: 1080, height: 1350 },
    "wallpaper-fhd": { name: "桌布 Full HD", width: 1920, height: 1080 },
    "wallpaper-qhd": { name: "桌布 QHD", width: 2560, height: 1440 },
    "mobile-wallpaper": { name: "手機桌布", width: 1170, height: 2532 }
  },
  
  // HD 優化配置
  HD_OPTIMIZATION: {
    enabled: true,
    QUALITY_MODES: {
      economy: {
        name: "經濟模式",
        hd_level: "basic",
        min_resolution: 512,
        steps_multiplier: 0.8,
        guidance_multiplier: 0.9,
        force_upscale: false
      },
      standard: {
        name: "標準模式",
        hd_level: "standard",
        min_resolution: 1024,
        steps_multiplier: 1.0,
        guidance_multiplier: 1.0,
        force_upscale: false
      },
      ultra: {
        name: "超高清模式",
        hd_level: "ultra",
        min_resolution: 1536,
        steps_multiplier: 1.3,
        guidance_multiplier: 1.1,
        force_upscale: true
      }
    },
    HD_PROMPTS: {
      basic: "sharp focus, clear details",
      standard: "highly detailed, sharp focus, professional quality, 8k uhd",
      ultra: "masterpiece, best quality, highly detailed, ultra-detailed, 8k uhd, professional, sharp focus, crystal clear, photorealistic"
    },
    HD_NEGATIVE: "blurry, low quality, low resolution, pixelated, jpeg artifacts, worst quality, bad quality",
    MODEL_QUALITY_PROFILES: {
      "zimage": {
        max_resolution: 2048,
        min_resolution: 1024,
        optimal_steps_boost: 1.0,
        guidance_boost: 1.0,
        recommended_quality: "standard"
      },
      "flux": {
        max_resolution: 2048,
        min_resolution: 1024,
        optimal_steps_boost: 1.1,
        guidance_boost: 1.0,
        recommended_quality: "standard"
      },
      "turbo": {
        max_resolution: 1536,
        min_resolution: 512,
        optimal_steps_boost: 0.8,
        guidance_boost: 0.9,
        recommended_quality: "economy"
      },
      "kontext": {
        max_resolution: 2048,
        min_resolution: 1024,
        optimal_steps_boost: 1.2,
        guidance_boost: 1.1,
        recommended_quality: "ultra"
      }
    }
  },
  
  // 參數優化規則
  OPTIMIZATION_RULES: {
    MODEL_STEPS: {
      zimage: { min: 15, optimal: 20, max: 50 },
      flux: { min: 20, optimal: 28, max: 60 },
      turbo: { min: 4, optimal: 8, max: 15 },
      kontext: { min: 25, optimal: 35, max: 70 }
    },
    SIZE_MULTIPLIER: {
      small: { threshold: 512 * 512, multiplier: 0.8 },
      medium: { threshold: 1024 * 1024, multiplier: 1.0 },
      large: { threshold: 1536 * 1536, multiplier: 1.2 },
      xlarge: { threshold: 2048 * 2048, multiplier: 1.4 }
    },
    STYLE_ADJUSTMENT: {
      photorealistic: 1.2,
      "oil-painting": 1.1,
      anime: 1.0,
      sketch: 0.9,
      default: 1.0
    }
  },
  
  // 風格類別
  STYLE_CATEGORIES: {
    none: { name: "無風格", icon: "⚪", order: 0 },
    realistic: { name: "寫實風格", icon: "📷", order: 1 },
    anime: { name: "動漫風格", icon: "🎌", order: 2 },
    artistic: { name: "藝術風格", icon: "🎨", order: 3 },
    digital: { name: "數位藝術", icon: "💻", order: 4 },
    cinematic: { name: "電影風格", icon: "🎬", order: 5 },
    fantasy: { name: "奇幻風格", icon: "🔮", order: 6 },
    abstract: { name: "抽象風格", icon: "🌀", order: 7 },
    traditional: { name: "傳統藝術", icon: "🖼️", order: 8 },
    modern: { name: "現代風格", icon: "✨", order: 9 },
    vintage: { name: "復古風格", icon: "📻", order: 10 },
    sci_fi: { name: "科幻風格", icon: "🚀", order: 11 },
    minimalist: { name: "極簡風格", icon: "⬜", order: 12 },
    other: { name: "其他風格", icon: "🎭", order: 13 }
  },
  
  // 風格預設（45+ 種風格）
  STYLE_PRESETS: {
    none: {
      name: "無風格",
      icon: "⚪",
      category: "none",
      description: "不套用任何風格，使用原始提示詞",
      prompt: "",
      negative: ""
    },
    photorealistic: {
      name: "攝影級寫實",
      icon: "📸",
      category: "realistic",
      description: "專業攝影風格，超高細節",
      prompt: "photorealistic, photography, ultra realistic, 8k uhd, dslr, high quality, film grain, Fujifilm XT3",
      negative: "painting, drawing, illustration, cartoon, anime, render, 3d"
    },
    portrait: {
      name: "人像攝影",
      icon: "👤",
      category: "realistic",
      description: "專業人像攝影",
      prompt: "portrait photography, professional lighting, bokeh, shallow depth of field, 85mm lens, high quality",
      negative: "full body, wide angle, distorted face"
    },
    cinematic: {
      name: "電影級質感",
      icon: "🎬",
      category: "cinematic",
      description: "電影般的光影和構圖",
      prompt: "cinematic lighting, movie still, film grain, dramatic lighting, anamorphic lens flare, 35mm film",
      negative: "amateur, snapshot, phone photo"
    },
    anime: {
      name: "動漫風格",
      icon: "🎌",
      category: "anime",
      description: "日式動漫畫風",
      prompt: "anime style, manga, cel shaded, vibrant colors, by makoto shinkai",
      negative: "realistic, photograph, 3d render"
    },
    manga: {
      name: "漫畫風格",
      icon: "📚",
      category: "anime",
      description: "黑白漫畫線條",
      prompt: "manga style, black and white, ink drawing, screentone, japanese comic book",
      negative: "color, realistic, photograph"
    },
    chibi: {
      name: "Q版可愛",
      icon: "🧸",
      category: "anime",
      description: "可愛 Q 版角色",
      prompt: "chibi style, cute, kawaii, super deformed, big eyes, small body",
      negative: "realistic proportions, detailed"
    },
    "oil-painting": {
      name: "油畫",
      icon: "🖌️",
      category: "artistic",
      description: "古典油畫質感",
      prompt: "oil painting, canvas texture, brush strokes, classical art, renaissance style",
      negative: "photograph, digital art, anime"
    },
    watercolor: {
      name: "水彩畫",
      icon: "💧",
      category: "artistic",
      description: "水彩暈染效果",
      prompt: "watercolor painting, soft edges, color bleeding, artistic, hand painted",
      negative: "digital, sharp edges, photograph"
    },
    sketch: {
      name: "素描",
      icon: "✏️",
      category: "artistic",
      description: "鉛筆素描線條",
      prompt: "pencil sketch, graphite drawing, hand drawn, artistic, detailed line work",
      negative: "color, painting, photograph"
    },
    "ink-wash": {
      name: "水墨畫",
      icon: "🖋️",
      category: "traditional",
      description: "中國水墨畫風",
      prompt: "chinese ink wash painting, sumi-e, traditional asian art, minimalist, flowing brush strokes",
      negative: "color, western style, photograph"
    },
    "digital-art": {
      name: "數位藝術",
      icon: "💻",
      category: "digital",
      description: "現代數位繪畫",
      prompt: "digital art, concept art, highly detailed, artstation, trending on artstation, sharp focus",
      negative: "photograph, traditional media, sketch"
    },
    "3d-render": {
      name: "3D 渲染",
      icon: "🎲",
      category: "digital",
      description: "三維渲染效果",
      prompt: "3d render, octane render, unreal engine, high quality render, realistic lighting, raytracing",
      negative: "2d, flat, painting, drawing"
    },
    "pixel-art": {
      name: "像素藝術",
      icon: "👾",
      category: "digital",
      description: "復古像素風格",
      prompt: "pixel art, 8-bit, 16-bit, retro game style, pixelated",
      negative: "realistic, high resolution, smooth"
    },
    "low-poly": {
      name: "低多邊形",
      icon: "🔷",
      category: "digital",
      description: "低面數幾何風格",
      prompt: "low poly, geometric, polygonal art, faceted, minimalist 3d",
      negative: "realistic, high poly, detailed"
    },
    cyberpunk: {
      name: "賽博朋克",
      icon: "🌃",
      category: "sci_fi",
      description: "霓虹科幻都市",
      prompt: "cyberpunk, neon lights, futuristic city, sci-fi, dystopian, holographic",
      negative: "natural, organic, traditional"
    },
    steampunk: {
      name: "蒸汽朋克",
      icon: "⚙️",
      category: "sci_fi",
      description: "維多利亞科幻風",
      prompt: "steampunk, victorian era, brass and copper, gears, mechanical, retro-futuristic",
      negative: "modern, digital, clean"
    },
    "sci-fi": {
      name: "科幻風格",
      icon: "🚀",
      category: "sci_fi",
      description: "未來科技感",
      prompt: "sci-fi, science fiction, futuristic, high-tech, space age, advanced technology",
      negative: "historical, medieval, traditional"
    },
    fantasy: {
      name: "奇幻風格",
      icon: "🔮",
      category: "fantasy",
      description: "魔法與幻想世界",
      prompt: "fantasy art, magical, ethereal, epic fantasy, dungeons and dragons style",
      negative: "realistic, modern, sci-fi"
    },
    "dark-fantasy": {
      name: "黑暗奇幻",
      icon: "🌑",
      category: "fantasy",
      description: "黑暗魔幻風格",
      prompt: "dark fantasy, gothic, ominous, dark atmosphere, dramatic shadows",
      negative: "bright, cheerful, colorful"
    },
    surrealism: {
      name: "超現實主義",
      icon: "🌀",
      category: "abstract",
      description: "超現實夢境",
      prompt: "surrealism, surreal art, dreamlike, bizarre, by salvador dali, impossible geometry",
      negative: "realistic, normal, ordinary"
    },
    abstract: {
      name: "抽象藝術",
      icon: "🎨",
      category: "abstract",
      description: "抽象表現主義",
      prompt: "abstract art, non-representational, bold colors, expressive, contemporary art",
      negative: "realistic, figurative, detailed"
    },
    "pop-art": {
      name: "普普藝術",
      icon: "🎪",
      category: "modern",
      description: "波普藝術風格",
      prompt: "pop art, bold colors, comic book style, roy lichtenstein, andy warhol, halftone dots",
      negative: "realistic, muted colors, classical"
    },
    minimalist: {
      name: "極簡主義",
      icon: "⬜",
      category: "minimalist",
      description: "簡約設計風格",
      prompt: "minimalist, simple, clean lines, negative space, minimal color palette",
      negative: "detailed, complex, ornate, busy"
    },
    "line-art": {
      name: "線條藝術",
      icon: "➰",
      category: "minimalist",
      description: "純線條繪圖",
      prompt: "line art, continuous line drawing, clean lines, outline, vector style",
      negative: "shading, color, realistic"
    },
    vintage: {
      name: "復古風格",
      icon: "📻",
      category: "vintage",
      description: "懷舊復古感",
      prompt: "vintage style, retro, aged, nostalgic, faded colors, old photo effect",
      negative: "modern, sharp, new"
    },
    "art-deco": {
      name: "裝飾藝術",
      icon: "🏛️",
      category: "vintage",
      description: "1920年代裝飾風",
      prompt: "art deco, geometric patterns, 1920s style, elegant, luxury, ornate",
      negative: "modern, minimal, casual"
    },
    "art-nouveau": {
      name: "新藝術風格",
      icon: "🌺",
      category: "traditional",
      description: "19世紀末新藝術",
      prompt: "art nouveau, organic forms, flowing lines, floral motifs, mucha style",
      negative: "geometric, angular, modern"
    },
    impressionist: {
      name: "印象派",
      icon: "🌅",
      category: "traditional",
      description: "印象派繪畫",
      prompt: "impressionism, loose brushwork, light and color, by claude monet, visible brush strokes",
      negative: "detailed, sharp, photographic"
    },
    "stained-glass": {
      name: "彩繪玻璃",
      icon: "🪟",
      category: "traditional",
      description: "教堂彩繪玻璃",
      prompt: "stained glass window, colorful glass panels, lead lines, backlit, gothic cathedral style",
      negative: "realistic, photographic, modern"
    },
    isometric: {
      name: "等角視圖",
      icon: "📐",
      category: "digital",
      description: "等距投影圖",
      prompt: "isometric view, isometric perspective, 3d isometric, game asset style",
      negative: "perspective, realistic view"
    },
    "vaporwave": {
      name: "蒸汽波",
      icon: "🌊",
      category: "modern",
      description: "蒸汽波美學",
      prompt: "vaporwave, aesthetic, 80s and 90s style, pastel colors, glitch art, retro futuristic",
      negative: "realistic, natural colors"
    },
    "gothic": {
      name: "哥德風格",
      icon: "🦇",
      category: "fantasy",
      description: "哥德式暗黑風",
      prompt: "gothic art, dark, ornate, victorian gothic, dramatic shadows, mysterious",
      negative: "bright, cheerful, minimalist"
    },
    "comic-book": {
      name: "美式漫畫",
      icon: "💥",
      category: "digital",
      description: "美式漫畫風格",
      prompt: "comic book style, halftone dots, bold outlines, speech bubbles, action lines, marvel comics style",
      negative: "realistic, photograph, anime"
    },
    "graffiti": {
      name: "塗鴉藝術",
      icon: "🎨",
      category: "modern",
      description: "街頭塗鴉風格",
      prompt: "graffiti art, street art, spray paint, urban art, colorful, bold style",
      negative: "classical, refined, formal"
    },
    "paper-cut": {
      name: "剪紙藝術",
      icon: "✂️",
      category: "traditional",
      description: "紙雕剪紙風格",
      prompt: "paper cut art, layered paper, shadow box, 3d paper sculpture, intricate cutting",
      negative: "flat, painting, photograph"
    },
    "neon": {
      name: "霓虹燈光",
      icon: "💡",
      category: "modern",
      description: "霓虹發光效果",
      prompt: "neon lights, glowing, vibrant colors, electric, fluorescent, cyberpunk neon",
      negative: "natural lighting, muted colors"
    },
    "holographic": {
      name: "全息投影",
      icon: "🌈",
      category: "sci_fi",
      description: "全息影像效果",
      prompt: "holographic, iridescent, rainbow colors, chromatic aberration, futuristic display",
      negative: "matte, flat colors"
    },
    "psychedelic": {
      name: "迷幻藝術",
      icon: "🍄",
      category: "abstract",
      description: "迷幻風格",
      prompt: "psychedelic art, vibrant swirling colors, trippy, kaleidoscopic, 1960s style",
      negative: "realistic, muted, calm"
    },
    "ukiyo-e": {
      name: "浮世繪",
      icon: "🗾",
      category: "traditional",
      description: "日本浮世繪",
      prompt: "ukiyo-e, japanese woodblock print, edo period, by hokusai, traditional japanese art",
      negative: "western style, photograph, modern"
    },
    "film-noir": {
      name: "黑色電影",
      icon: "🎩",
      category: "cinematic",
      description: "黑白電影風格",
      prompt: "film noir, black and white, high contrast, dramatic shadows, 1940s detective style",
      negative: "color, bright, cheerful"
    },
    "baroque": {
      name: "巴洛克風格",
      icon: "👑",
      category: "traditional",
      description: "巴洛克藝術",
      prompt: "baroque art, ornate, dramatic, golden, rich colors, by caravaggio, classical",
      negative: "minimalist, modern, simple"
    },
    "biomechanical": {
      name: "生物機械",
      icon: "🦾",
      category: "sci_fi",
      description: "生物與機械融合",
      prompt: "biomechanical, H.R. Giger style, organic and mechanical fusion, intricate details",
      negative: "natural, simple, cute"
    }
  }
};

// =================================================================================
// 工具函數
// =================================================================================

function corsHeaders(additionalHeaders = {}) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    ...additionalHeaders
  };
}

async function fetchWithTimeout(url, options = {}, timeout = 120000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timeout after ' + (timeout / 1000) + ' seconds');
    }
    throw error;
  }
}

class Logger {
  constructor() {
    this.logs = [];
  }
  add(title, data) {
    this.logs.push({ title, data, timestamp: new Date().toISOString() });
  }
  get() {
    return this.logs;
  }
}

function getClientIP(request) {
  return request.headers.get('cf-connecting-ip') || 
         request.headers.get('x-forwarded-for') || 
         request.headers.get('x-real-ip') || 
         'unknown';
}

async function translateToEnglish(text, env) {
  try {
    const hasChinese = /[\u4e00-\u9fa5]/.test(text);
    if (!hasChinese) {
      return { text: text, translated: false, reason: "No Chinese detected" };
    }
    
    // 方案 1: 使用 Google Translate 免費 API
    try {
      const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=en&dt=t&q=' + encodeURIComponent(text);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        
        if (data && data[0] && data[0][0] && data[0][0][0]) {
          const translatedText = data[0].map(item => item[0]).join('');
          
          console.log("✅ Google Translation:", text, "→", translatedText);
          return { 
            text: translatedText, 
            translated: true, 
            original: text, 
            service: "Google Translate (Free)",
            method: "googleapis" 
          };
        }
      }
    } catch (error) {
      console.error("❌ Google Translate failed:", error.message);
    }
    
    // 方案 2: 備用 - MyMemory Translation API
    try {
      const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=zh-CN|en';
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        
        if (data && data.responseData && data.responseData.translatedText) {
          const translatedText = data.responseData.translatedText;
          
          console.log("✅ MyMemory Translation:", text, "→", translatedText);
          return { 
            text: translatedText, 
            translated: true, 
            original: text, 
            service: "MyMemory Translation API",
            method: "mymemory" 
          };
        }
      }
    } catch (error) {
      console.error("❌ MyMemory Translation failed:", error.message);
    }
    
    // 方案 3: Workers AI（如果可用）
    if (env && env.AI) {
      try {
        const response = await env.AI.run("@cf/meta/m2m100-1.2b", { 
          text: text, 
          source_lang: "chinese", 
          target_lang: "english" 
        });
        
        if (response && response.translated_text) {
          console.log("✅ Cloudflare AI Translation:", text, "→", response.translated_text);
          return { 
            text: response.translated_text, 
            translated: true, 
            original: text, 
            service: "Cloudflare Workers AI",
            method: "workers-ai",
            model: "m2m100-1.2b" 
          };
        }
      } catch (error) {
        console.error("❌ Workers AI Translation failed:", error.message);
      }
    }
    
    console.warn("⚠️ All translation methods failed, using original text");
    return { 
      text: text, 
      translated: false, 
      reason: "All translation services failed",
      attempted_services: ["Google Translate", "MyMemory", "Workers AI"]
    };
    
  } catch (error) {
    console.error("❌ translateToEnglish error:", error);
    return { 
      text: text, 
      translated: false, 
      error: error.message 
    };
  }
}
// =================================================================================
// 參數優化器類
// =================================================================================

class PromptAnalyzer {
  static analyzeComplexity(prompt) {
    const complexKeywords = [
      'detailed', 'intricate', 'complex', 'elaborate', 
      'realistic', 'photorealistic', 'hyperrealistic',
      'architecture', 'cityscape', 'landscape', 'portrait',
      'face', 'eyes', 'hair', 'texture', 'material',
      'fabric', 'skin', 'lighting', 'shadows', 'reflections',
      'fine details', 'high detail', 'ultra detailed',
      '4k', '8k', 'uhd', 'hdr'
    ];
    
    let score = 0;
    const lowerPrompt = prompt.toLowerCase();
    
    complexKeywords.forEach(keyword => {
      if (lowerPrompt.includes(keyword)) score += 0.1;
    });
    
    if (prompt.length > 100) score += 0.2;
    if (prompt.length > 200) score += 0.3;
    if (prompt.split(',').length > 5) score += 0.15;
    
    return Math.min(score, 1.0);
  }
  
  static recommendQualityMode(prompt, model) {
    const complexity = this.analyzeComplexity(prompt);
    const profile = CONFIG.HD_OPTIMIZATION.MODEL_QUALITY_PROFILES[model];
    
    if (profile?.recommended_quality) return profile.recommended_quality;
    
    if (complexity > 0.7) return 'ultra';
    if (complexity > 0.4) return 'standard';
    return 'economy';
  }
}

class HDOptimizer {
  static optimize(prompt, negativePrompt, model, width, height, qualityMode = 'standard', autoHD = true) {
    if (!autoHD || !CONFIG.HD_OPTIMIZATION.enabled) {
      return { 
        prompt: prompt, 
        negativePrompt: negativePrompt, 
        width: width, 
        height: height, 
        optimized: false 
      };
    }
    
    const hdConfig = CONFIG.HD_OPTIMIZATION;
    const modeConfig = hdConfig.QUALITY_MODES[qualityMode] || hdConfig.QUALITY_MODES.standard;
    const profile = hdConfig.MODEL_QUALITY_PROFILES[model];
    const optimizations = [];
    
    const hdLevel = modeConfig.hd_level;
    let enhancedPrompt = prompt;
    
    if (hdConfig.HD_PROMPTS[hdLevel]) {
      const hdBoost = hdConfig.HD_PROMPTS[hdLevel];
      enhancedPrompt = prompt + ", " + hdBoost;
      optimizations.push("HD增強: " + hdLevel);
    }
    
    let enhancedNegative = negativePrompt || "";
    if (qualityMode !== 'economy') {
      enhancedNegative = enhancedNegative 
        ? enhancedNegative + ", " + hdConfig.HD_NEGATIVE 
        : hdConfig.HD_NEGATIVE;
      optimizations.push("負面提示詞: 高清過濾");
    }
    
    let finalWidth = width;
    let finalHeight = height;
    let sizeUpscaled = false;
    
    const maxModelRes = profile?.max_resolution || 2048;
    const minRes = Math.max(modeConfig.min_resolution, profile?.min_resolution || 1024);
    const currentRes = Math.min(width, height);
    
    if (currentRes < minRes || modeConfig.force_upscale) {
      const scale = minRes / currentRes;
      finalWidth = Math.min(Math.round(width * scale / 64) * 64, maxModelRes);
      finalHeight = Math.min(Math.round(height * scale / 64) * 64, maxModelRes);
      sizeUpscaled = true;
      optimizations.push("尺寸優化: " + width + "x" + height + " → " + finalWidth + "x" + finalHeight);
    }
    
    if (finalWidth > maxModelRes || finalHeight > maxModelRes) {
      const scale = maxModelRes / Math.max(finalWidth, finalHeight);
      finalWidth = Math.round(finalWidth * scale / 64) * 64;
      finalHeight = Math.round(finalHeight * scale / 64) * 64;
      optimizations.push("模型限制: 調整至 " + finalWidth + "x" + finalHeight);
    }
    
    return { 
      prompt: enhancedPrompt, 
      negativePrompt: enhancedNegative, 
      width: finalWidth, 
      height: finalHeight, 
      optimized: true, 
      quality_mode: qualityMode, 
      hd_level: hdLevel, 
      optimizations: optimizations, 
      size_upscaled: sizeUpscaled 
    };
  }
}

class ParameterOptimizer {
  static optimizeSteps(model, width, height, style = 'none', qualityMode = 'standard', userSteps = null) {
    if (userSteps !== null && userSteps !== -1) {
      const suggestion = this.calculateOptimalSteps(model, width, height, style, qualityMode);
      return { 
        steps: userSteps, 
        optimized: false, 
        suggested: suggestion.steps, 
        reasoning: suggestion.reasoning, 
        user_override: true 
      };
    }
    return this.calculateOptimalSteps(model, width, height, style, qualityMode);
  }
  
  static calculateOptimalSteps(model, width, height, style, qualityMode = 'standard') {
    const rules = CONFIG.OPTIMIZATION_RULES;
    const modelRule = rules.MODEL_STEPS[model] || rules.MODEL_STEPS["flux"];
    const modeConfig = CONFIG.HD_OPTIMIZATION.QUALITY_MODES[qualityMode];
    const profile = CONFIG.HD_OPTIMIZATION.MODEL_QUALITY_PROFILES[model];
    
    let baseSteps = modelRule.optimal;
    const reasoning = [];
    reasoning.push(model + ": " + baseSteps + "步");
    
    const totalPixels = width * height;
    let sizeMultiplier = 1.0;
    
    if (totalPixels >= rules.SIZE_MULTIPLIER.xlarge.threshold) {
      sizeMultiplier = rules.SIZE_MULTIPLIER.xlarge.multiplier;
      reasoning.push("超大 x" + sizeMultiplier);
    } else if (totalPixels >= rules.SIZE_MULTIPLIER.large.threshold) {
      sizeMultiplier = rules.SIZE_MULTIPLIER.large.multiplier;
      reasoning.push("大尺寸 x" + sizeMultiplier);
    } else if (totalPixels <= rules.SIZE_MULTIPLIER.small.threshold) {
      sizeMultiplier = rules.SIZE_MULTIPLIER.small.multiplier;
    } else {
      sizeMultiplier = rules.SIZE_MULTIPLIER.medium.multiplier;
    }
    
    let styleMultiplier = rules.STYLE_ADJUSTMENT[style] || rules.STYLE_ADJUSTMENT.default;
    let qualityMultiplier = modeConfig?.steps_multiplier || 1.0;
    if (qualityMultiplier !== 1.0) reasoning.push(modeConfig.name + " x" + qualityMultiplier);
    
    let profileBoost = profile?.optimal_steps_boost || 1.0;
    if (profileBoost !== 1.0) reasoning.push("模型配置 x" + profileBoost);
    
    let optimizedSteps = Math.round(baseSteps * sizeMultiplier * styleMultiplier * qualityMultiplier * profileBoost);
    optimizedSteps = Math.max(modelRule.min, Math.min(optimizedSteps, modelRule.max));
    
    reasoning.push("→ " + optimizedSteps + "步");
    
    return { 
      steps: optimizedSteps, 
      optimized: true, 
      base_steps: baseSteps, 
      size_multiplier: sizeMultiplier, 
      style_multiplier: styleMultiplier, 
      quality_multiplier: qualityMultiplier, 
      profile_boost: profileBoost, 
      min_steps: modelRule.min, 
      max_steps: modelRule.max, 
      reasoning: reasoning.join(' ') 
    };
  }
  
  static optimizeGuidance(model, style, qualityMode = 'standard') {
    const modeConfig = CONFIG.HD_OPTIMIZATION.QUALITY_MODES[qualityMode];
    const profile = CONFIG.HD_OPTIMIZATION.MODEL_QUALITY_PROFILES[model];
    
    let baseGuidance = 7.5;
    
    if (model.includes('turbo')) {
      baseGuidance = style === 'photorealistic' ? 3.0 : 2.5;
    } else if (style === 'photorealistic') {
      baseGuidance = 8.5;
    } else if (['oil-painting', 'watercolor', 'sketch'].includes(style)) {
      baseGuidance = 6.5;
    } else if (['manga', 'anime', 'chibi'].includes(style)) {
      baseGuidance = 7.0;
    } else if (['pixel-art', 'low-poly'].includes(style)) {
      baseGuidance = 6.0;
    }
    
    let qualityBoost = modeConfig?.guidance_multiplier || 1.0;
    let profileBoost = profile?.guidance_boost || 1.0;
    
    return Math.round(baseGuidance * qualityBoost * profileBoost * 10) / 10;
  }
}

class StyleProcessor {
  static applyStyle(prompt, style, negativePrompt) {
    try {
      if (!style || style === 'none' || style === '') {
        return { 
          enhancedPrompt: prompt, 
          enhancedNegative: negativePrompt || "" 
        };
      }
      
      if (!CONFIG.STYLE_PRESETS || typeof CONFIG.STYLE_PRESETS !== 'object') {
        console.warn("⚠️ STYLE_PRESETS not found");
        return { 
          enhancedPrompt: prompt, 
          enhancedNegative: negativePrompt || "" 
        };
      }
      
      const styleConfig = CONFIG.STYLE_PRESETS[style];
      if (!styleConfig) {
        console.warn("⚠️ Style '" + style + "' not found");
        return { 
          enhancedPrompt: prompt, 
          enhancedNegative: negativePrompt || "" 
        };
      }
      
      let enhancedPrompt = prompt;
      if (styleConfig.prompt && styleConfig.prompt.trim()) {
        enhancedPrompt = prompt + ", " + styleConfig.prompt;
      }
      
      let enhancedNegative = negativePrompt || "";
      if (styleConfig.negative && styleConfig.negative.trim()) {
        if (enhancedNegative && enhancedNegative.trim()) {
          enhancedNegative = enhancedNegative + ", " + styleConfig.negative;
        } else {
          enhancedNegative = styleConfig.negative;
        }
      }
      
      return { 
        enhancedPrompt: enhancedPrompt, 
        enhancedNegative: enhancedNegative 
      };
      
    } catch (error) {
      console.error("❌ StyleProcessor error:", error);
      return { 
        enhancedPrompt: prompt, 
        enhancedNegative: negativePrompt || "" 
      };
    }
  }
}

// =================================================================================
// 圖片永久存儲服務
// =================================================================================

class ImageStorageService {
  constructor(r2Bucket, kvNamespace) {
    this.r2 = r2Bucket;
    this.kv = kvNamespace;
  }
  
  generateImageId() {
    return 'img_' + Date.now() + '_' + Math.random().toString(36).substring(2, 15);
  }
  
  async saveImage(imageData, metadata) {
    try {
      const imageId = this.generateImageId();
      const fileName = imageId + '.png';
      
      // 保存圖片到 R2
      await this.r2.put(fileName, imageData, {
        httpMetadata: {
          contentType: metadata.contentType || 'image/png',
          cacheControl: 'public, max-age=31536000',
        },
        customMetadata: {
          prompt: metadata.prompt?.substring(0, 500) || '',
          model: metadata.model || '',
          seed: metadata.seed?.toString() || '',
          style: metadata.style || '',
          width: metadata.width?.toString() || '',
          height: metadata.height?.toString() || '',
          timestamp: new Date().toISOString()
        }
      });
      
      // 保存元數據到 KV
      if (this.kv) {
        const metadataRecord = {
          imageId,
          fileName,
          ...metadata,
          timestamp: new Date().toISOString(),
          size: imageData.byteLength
        };
        
        await this.kv.put(imageId, JSON.stringify(metadataRecord), {
          expirationTtl: 365 * 24 * 60 * 60
        });
      }
      
      const publicUrl = '/images/' + fileName;
      
      console.log('✅ Image saved:', imageId, 'Size:', (imageData.byteLength / 1024).toFixed(2), 'KB');
      
      return {
        imageId,
        fileName,
        publicUrl,
        size: imageData.byteLength
      };
      
    } catch (error) {
      console.error('❌ Failed to save image:', error);
      throw new Error('Failed to save image: ' + error.message);
    }
  }
  
  async getImage(fileName) {
    try {
      const object = await this.r2.get(fileName);
      
      if (!object) {
        return null;
      }
      
      return {
        body: object.body,
        contentType: object.httpMetadata.contentType,
        metadata: object.customMetadata
      };
      
    } catch (error) {
      console.error('❌ Failed to get image:', error);
      return null;
    }
  }
  
  async deleteImage(imageId) {
    try {
      const fileName = imageId + '.png';
      
      await this.r2.delete(fileName);
      
      if (this.kv) {
        await this.kv.delete(imageId);
      }
      
      console.log('✅ Image deleted:', imageId);
      return true;
      
    } catch (error) {
      console.error('❌ Failed to delete image:', error);
      return false;
    }
  }
  
  async deleteImages(imageIds) {
    const results = await Promise.allSettled(
      imageIds.map(id => this.deleteImage(id))
    );
    
    const succeeded = results.filter(r => r.status === 'fulfilled' && r.value).length;
    const failed = results.length - succeeded;
    
    return { succeeded, failed };
  }
  
  async listImages(options = {}) {
    try {
      const { limit = 100, cursor } = options;
      
      const listed = await this.r2.list({
        limit,
        cursor
      });
      
      return {
        objects: listed.objects.map(obj => ({
          key: obj.key,
          size: obj.size,
          uploaded: obj.uploaded,
          httpMetadata: obj.httpMetadata,
          customMetadata: obj.customMetadata
        })),
        truncated: listed.truncated,
        cursor: listed.cursor
      };
      
    } catch (error) {
      console.error('❌ Failed to list images:', error);
      return { objects: [], truncated: false };
    }
  }
}

// =================================================================================
// PollinationsProvider：核心圖像生成類
// =================================================================================

class PollinationsProvider {
  constructor(config, env) {
    this.config = config;
    this.name = config.name;
    this.env = env;
  }
  
  async generate(prompt, options, logger) {
    const { 
      model = "zimage", 
      width = 1024, 
      height = 1024, 
      seed = -1, 
      negativePrompt = "", 
      guidance = null, 
      steps = null, 
      enhance = false, 
      nologo = true, 
      privateMode = true, 
      style = "none", 
      autoOptimize = true, 
      autoHD = true, 
      qualityMode = 'standard',
      referenceImages = []
    } = options;
    
    const modelConfig = this.config.models.find(m => m.id === model);
    const supportsRefImages = modelConfig?.supports_reference_images || false;
    const maxRefImages = modelConfig?.max_reference_images || 0;
    
    let validReferenceImages = [];
    if (referenceImages && referenceImages.length > 0) {
      if (!supportsRefImages) {
        logger.add("⚠️ Reference Images", { 
          warning: model + " 不支持參考圖像，已忽略", 
          supported_models: ["kontext"] 
        });
      } else if (referenceImages.length > maxRefImages) {
        logger.add("⚠️ Reference Images", { 
          warning: model + " 最多支持 " + maxRefImages + " 張參考圖", 
          provided: referenceImages.length, 
          using: maxRefImages 
        });
        validReferenceImages = referenceImages.slice(0, maxRefImages);
      } else {
        validReferenceImages = referenceImages;
        logger.add("🖼️ Reference Images", { 
          model: model, 
          count: validReferenceImages.length, 
          max_allowed: maxRefImages,
          mode: "圖生圖"
        });
      }
    }
    
    let hdOptimization = null;
    let finalPrompt = prompt;
    let finalNegativePrompt = negativePrompt;
    let finalWidth = width;
    let finalHeight = height;
    
    const promptComplexity = PromptAnalyzer.analyzeComplexity(prompt);
    const recommendedQuality = PromptAnalyzer.recommendQualityMode(prompt, model);
    logger.add("🧠 Prompt Analysis", { 
      complexity: (promptComplexity * 100).toFixed(1) + '%', 
      recommended_quality: recommendedQuality, 
      selected_quality: qualityMode,
      has_reference_images: validReferenceImages.length > 0
    });
    
    if (autoHD) {
      hdOptimization = HDOptimizer.optimize(
        prompt, 
        negativePrompt, 
        model, 
        width, 
        height, 
        qualityMode, 
        autoHD
      );
      finalPrompt = hdOptimization.prompt;
      finalNegativePrompt = hdOptimization.negativePrompt;
      finalWidth = hdOptimization.width;
      finalHeight = hdOptimization.height;
      
      if (hdOptimization.optimized) {
        logger.add("🎨 HD Optimization", { 
          mode: qualityMode, 
          hd_level: hdOptimization.hd_level, 
          original: width + "x" + height, 
          optimized: finalWidth + "x" + finalHeight, 
          upscaled: hdOptimization.size_upscaled, 
          details: hdOptimization.optimizations 
        });
      }
    }
    
    let finalSteps = steps;
    let finalGuidance = guidance;
    
    if (autoOptimize) {
      const stepsOptimization = ParameterOptimizer.optimizeSteps(
        model, 
        finalWidth, 
        finalHeight, 
        style, 
        qualityMode, 
        steps
      );
      finalSteps = stepsOptimization.steps;
      logger.add("🎯 Steps Optimization", { 
        steps: stepsOptimization.steps, 
        reasoning: stepsOptimization.reasoning 
      });
      
      if (guidance === null) {
        finalGuidance = ParameterOptimizer.optimizeGuidance(model, style, qualityMode);
      } else {
        finalGuidance = guidance;
      }
    } else {
      finalSteps = steps || 20;
      finalGuidance = guidance || 7.5;
    }
    
    const { enhancedPrompt, enhancedNegative } = StyleProcessor.applyStyle(
      finalPrompt, 
      style, 
      finalNegativePrompt
    );
    
    logger.add("🎨 Style Processing", { 
      selected_style: style,
      style_name: CONFIG.STYLE_PRESETS[style]?.name || style,
      style_category: CONFIG.STYLE_PRESETS[style]?.category || 'unknown',
      style_applied: style !== 'none',
      original_prompt_length: finalPrompt.length,
      enhanced_prompt_length: enhancedPrompt.length,
      prompt_added: enhancedPrompt.length - finalPrompt.length
    });
    
    const translation = await translateToEnglish(enhancedPrompt, this.env);
    const finalPromptForAPI = translation.text;
    
    if (translation.translated) {
      logger.add("🌐 Auto Translation", { 
        original_zh: translation.original,
        translated_en: finalPromptForAPI.substring(0, 100) + (finalPromptForAPI.length > 100 ? '...' : ''),
        success: true,
        service: translation.service || "unknown",
        method: translation.method || "unknown"
      });
    } else {
      logger.add("⚠️ Translation", { 
        status: "skipped",
        reason: translation.reason || "Unknown",
        using_original: true
      });
    }
    
    logger.add("🎨 Generation Config", { 
      provider: this.name, 
      model: model, 
      dimensions: finalWidth + "x" + finalHeight,
      quality_mode: qualityMode, 
      hd_optimized: autoHD && hdOptimization?.optimized, 
      auto_translated: translation.translated,
      style_applied: style !== 'none',
      reference_images: validReferenceImages.length,
      generation_mode: validReferenceImages.length > 0 ? "圖生圖" : "文生圖",
      steps: finalSteps, 
      guidance: finalGuidance,
      seed: seed
    });
    
    const currentSeed = seed === -1 ? Math.floor(Math.random() * 1000000) : seed;
    let fullPrompt = finalPromptForAPI;
    if (enhancedNegative && enhancedNegative.trim()) {
      fullPrompt = finalPromptForAPI + " [negative: " + enhancedNegative + "]";
    }
    
    const encodedPrompt = encodeURIComponent(fullPrompt);
    const pathPrefix = this.config.pathPrefix || "";
    let baseUrl = this.config.endpoint + pathPrefix + "/" + encodedPrompt;
    
    const params = new URLSearchParams();
    params.append('model', model);
    params.append('width', finalWidth.toString());
    params.append('height', finalHeight.toString());
    params.append('seed', currentSeed.toString());
    params.append('nologo', nologo.toString());
    params.append('enhance', enhance.toString());
    params.append('private', privateMode.toString());
    
    if (validReferenceImages && validReferenceImages.length > 0) {
      params.append('image', validReferenceImages.join(','));
      logger.add("🖼️ Reference Images Added", { 
        count: validReferenceImages.length,
        urls: validReferenceImages 
      });
    }
    
    if (finalGuidance !== 7.5) params.append('guidance', finalGuidance.toString());
    if (finalSteps !== 20) params.append('steps', finalSteps.toString());
    
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'image/*',
      'Referer': 'https://pollinations.ai/'
    };
    
    const authConfig = CONFIG.POLLINATIONS_AUTH;
    if (authConfig.enabled && authConfig.token) {
      headers['Authorization'] = 'Bearer ' + authConfig.token;
      logger.add("🔐 API Authentication", { 
        method: "Bearer Token",
        token_prefix: authConfig.token.substring(0, 8) + "...",
        enabled: true,
        endpoint: this.config.endpoint
      });
    } else {
      logger.add("⚠️ No API Key", { 
        authenticated: false,
        note: "新 API 端點需要 API Key",
        endpoint: this.config.endpoint,
        warning: "未認證的請求可能會失敗"
      });
    }
    
    const url = baseUrl + '?' + params.toString();
    
    logger.add("📡 API Request", { 
      endpoint: this.config.endpoint,
      path: pathPrefix + "/" + encodedPrompt.substring(0, 50) + "...",
      model: model,
      authenticated: authConfig.enabled && !!authConfig.token,
      full_url: url.substring(0, 100) + "..."
    });
    
    for (let retry = 0; retry < CONFIG.MAX_RETRIES; retry++) {
      try {
        const response = await fetchWithTimeout(url, { 
          method: 'GET', 
          headers: headers
        }, 120000);
        
        if (response.ok) {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.startsWith('image/')) {
            logger.add("✅ Success", { 
              url: response.url, 
              used_model: model, 
              final_size: finalWidth + "x" + finalHeight,
              quality_mode: qualityMode, 
              style_used: style,
              style_name: CONFIG.STYLE_PRESETS[style]?.name || style,
              hd_optimized: autoHD && hdOptimization?.optimized, 
              auto_translated: translation.translated,
              reference_images_used: validReferenceImages.length,
              generation_mode: validReferenceImages.length > 0 ? "圖生圖" : "文生圖",
              authenticated: authConfig.enabled && !!authConfig.token,
              seed: currentSeed 
            });
            
            const imageBlob = await response.blob();
            const imageBuffer = await imageBlob.arrayBuffer();
            
            return { 
              imageData: imageBuffer,
              contentType: contentType,
              url: response.url, 
              provider: this.name, 
              model: model, 
              requested_model: model, 
              seed: currentSeed, 
              style: style, 
              style_name: CONFIG.STYLE_PRESETS[style]?.name || style,
              style_category: CONFIG.STYLE_PRESETS[style]?.category || 'unknown',
              steps: finalSteps, 
              guidance: finalGuidance, 
              width: finalWidth, 
              height: finalHeight,
              quality_mode: qualityMode, 
              prompt_complexity: promptComplexity, 
              hd_optimized: autoHD && hdOptimization?.optimized, 
              hd_details: hdOptimization, 
              auto_translated: translation.translated,
              reference_images: validReferenceImages,
              reference_images_count: validReferenceImages.length,
              generation_mode: validReferenceImages.length > 0 ? "圖生圖" : "文生圖",
              authenticated: authConfig.enabled && !!authConfig.token,
              cost: "FREE", 
              auto_optimized: autoOptimize 
            };
          } else {
            throw new Error("Invalid content type: " + contentType);
          }
        } else if (response.status === 401) {
          throw new Error("Authentication failed: Invalid or missing API key");
        } else if (response.status === 403) {
          throw new Error("Access forbidden: API key may lack required permissions");
        } else {
          throw new Error("HTTP " + response.status + ": " + (await response.text()).substring(0, 200));
        }
      } catch (e) {
        logger.add("❌ Request Failed", { 
          error: e.message, 
          model: model, 
          retry: retry + 1,
          max_retries: CONFIG.MAX_RETRIES,
          endpoint: this.config.endpoint
        });
        
        if (retry < CONFIG.MAX_RETRIES - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (retry + 1)));
        } else {
          throw new Error("Generation failed: " + e.message);
        }
      }
    }
    throw new Error("Model " + model + " failed after " + CONFIG.MAX_RETRIES + " retries");
  }
}

class MultiProviderRouter {
  constructor(apiKeys = {}, env = null) {
    this.providers = {};
    this.apiKeys = apiKeys;
    this.env = env;
    
    for (const [key, config] of Object.entries(CONFIG.PROVIDERS)) {
      if (config.enabled) {
        if (key === 'pollinations') {
          this.providers[key] = new PollinationsProvider(config, env);
        }
      }
    }
  }
  
  getProvider(providerName = null) {
    if (providerName && this.providers[providerName]) {
      return { name: providerName, instance: this.providers[providerName] };
    }
    const defaultName = CONFIG.DEFAULT_PROVIDER;
    if (this.providers[defaultName]) {
      return { name: defaultName, instance: this.providers[defaultName] };
    }
    const firstProvider = Object.keys(this.providers)[0];
    if (firstProvider) {
      return { name: firstProvider, instance: this.providers[firstProvider] };
    }
    throw new Error('No available provider');
  }
  
  async generate(prompt, options, logger) {
    const { provider: requestedProvider = null, numOutputs = 1 } = options;
    const { name: providerName, instance: provider } = this.getProvider(requestedProvider);
    const results = [];
    
    for (let i = 0; i < numOutputs; i++) {
      const currentOptions = { 
        ...options, 
        seed: options.seed === -1 ? -1 : options.seed + i 
      };
      const result = await provider.generate(prompt, currentOptions, logger);
      results.push(result);
    }
    
    return results;
  }
}
// =================================================================================
// 主入口：Worker Fetch Handler
// =================================================================================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const startTime = Date.now();
    const clientIP = getClientIP(request);
    
    // 初始化圖片存儲服務
    const imageStorage = env.IMAGES_BUCKET ? new ImageStorageService(
      env.IMAGES_BUCKET,
      env.IMAGE_METADATA
    ) : null;
    
    if (env.POLLINATIONS_API_KEY) {
      CONFIG.POLLINATIONS_AUTH.enabled = true;
      CONFIG.POLLINATIONS_AUTH.token = env.POLLINATIONS_API_KEY;
    } else {
      console.warn("⚠️ POLLINATIONS_API_KEY not set - requests may fail");
      CONFIG.POLLINATIONS_AUTH.enabled = false;
      CONFIG.POLLINATIONS_AUTH.token = "";
    }
    
    console.log("=== Request Info ===");
    console.log("IP:", clientIP);
    console.log("Path:", url.pathname);
    console.log("Method:", request.method);
    console.log("Workers AI:", !!env.AI);
    console.log("R2 Storage:", !!env.IMAGES_BUCKET);
    console.log("KV Storage:", !!env.IMAGE_METADATA);
    console.log("API Auth:", CONFIG.POLLINATIONS_AUTH.enabled ? "✅ Enabled" : "❌ Disabled");
    console.log("API Endpoint:", CONFIG.PROVIDERS.pollinations.endpoint);
    console.log("Styles Count:", Object.keys(CONFIG.STYLE_PRESETS).length);
    console.log("===================");
    
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }
    
    try {
      let response;
      
      if (url.pathname === '/' || url.pathname === '') {
        response = handleUI(request);
      } 
      // 🖼️ 圖片服務路由
      else if (url.pathname.startsWith('/images/')) {
        if (!imageStorage) {
          return new Response('Image storage not configured', { 
            status: 503,
            headers: corsHeaders()
          });
        }
        
        const fileName = url.pathname.replace('/images/', '');
        const imageData = await imageStorage.getImage(fileName);
        
        if (!imageData) {
          return new Response('Image not found', { 
            status: 404,
            headers: corsHeaders()
          });
        }
        
        return new Response(imageData.body, {
          headers: {
            'Content-Type': imageData.contentType,
            'Cache-Control': 'public, max-age=31536000',
            'Access-Control-Allow-Origin': '*',
            ...corsHeaders()
          }
        });
      }
      // 🗑️ 刪除圖片 API
      else if (url.pathname === '/api/images/delete' && request.method === 'POST') {
        if (!imageStorage) {
          return new Response(JSON.stringify({ error: 'Image storage not configured' }), {
            status: 503,
            headers: corsHeaders({ 'Content-Type': 'application/json' })
          });
        }
        
        const body = await request.json();
        const { imageId } = body;
        
        if (!imageId) {
          return new Response(JSON.stringify({ error: 'imageId required' }), {
            status: 400,
            headers: corsHeaders({ 'Content-Type': 'application/json' })
          });
        }
        
        const deleted = await imageStorage.deleteImage(imageId);
        
        return new Response(JSON.stringify({ 
          success: deleted,
          imageId 
        }), {
          headers: corsHeaders({ 'Content-Type': 'application/json' })
        });
      }
      // 📋 列出圖片 API
      else if (url.pathname === '/api/images/list') {
        if (!imageStorage) {
          return new Response(JSON.stringify({ error: 'Image storage not configured' }), {
            status: 503,
            headers: corsHeaders({ 'Content-Type': 'application/json' })
          });
        }
        
        const cursor = url.searchParams.get('cursor');
        const limit = parseInt(url.searchParams.get('limit') || '100');
        
        const result = await imageStorage.listImages({ cursor, limit });
        
        return new Response(JSON.stringify(result), {
          headers: corsHeaders({ 'Content-Type': 'application/json' })
        });
      }
      else if (url.pathname === '/_internal/generate') {
        response = await handleInternalGenerate(request, env, ctx, imageStorage);
      } 
      else if (url.pathname === '/health') {
        response = new Response(JSON.stringify({
          status: 'ok',
          version: CONFIG.PROJECT_VERSION,
          timestamp: new Date().toISOString(),
          workers_ai: !!env.AI,
          r2_storage: !!env.IMAGES_BUCKET,
          kv_storage: !!env.IMAGE_METADATA,
          styles_count: Object.keys(CONFIG.STYLE_PRESETS).length,
          api_auth: {
            enabled: CONFIG.POLLINATIONS_AUTH.enabled,
            method: CONFIG.POLLINATIONS_AUTH.method,
            has_token: !!CONFIG.POLLINATIONS_AUTH.token,
            endpoint: CONFIG.PROVIDERS.pollinations.endpoint
          },
          models: CONFIG.PROVIDERS.pollinations.models.map(m => ({
            id: m.id,
            name: m.name,
            category: m.category,
            supports_reference_images: m.supports_reference_images || false
          })),
          style_categories: Object.keys(CONFIG.STYLE_CATEGORIES).map(key => ({
            id: key,
            name: CONFIG.STYLE_CATEGORIES[key].name,
            icon: CONFIG.STYLE_CATEGORIES[key].icon,
            count: Object.values(CONFIG.STYLE_PRESETS).filter(s => s.category === key).length
          }))
        }), { 
          headers: corsHeaders({ 'Content-Type': 'application/json' }) 
        });
      } 
      else {
        response = new Response(JSON.stringify({
          error: 'Not Found',
          message: '此 Worker 僅提供 Web UI 界面',
          available_paths: ['/', '/health', '/_internal/generate', '/images/:filename', '/api/images/delete', '/api/images/list']
        }), { 
          status: 404,
          headers: corsHeaders({ 'Content-Type': 'application/json' }) 
        });
      }
      
      const duration = Date.now() - startTime;
      const headers = new Headers(response.headers);
      headers.set('X-Response-Time', duration + 'ms');
      headers.set('X-Worker-Version', CONFIG.PROJECT_VERSION);
      headers.set('X-API-Endpoint', CONFIG.PROVIDERS.pollinations.endpoint);
      headers.set('X-API-Authenticated', CONFIG.POLLINATIONS_AUTH.enabled ? 'true' : 'false');
      headers.set('X-Styles-Count', Object.keys(CONFIG.STYLE_PRESETS).length.toString());
      
      return new Response(response.body, { 
        status: response.status, 
        headers: headers 
      });
    } catch (error) {
      const duration = Date.now() - startTime;
      console.error('Worker error:', error);
      return new Response(JSON.stringify({
        error: {
          message: error.message,
          type: 'worker_error',
          timestamp: new Date().toISOString(),
          duration_ms: duration
        }
      }), {
        status: 500,
        headers: corsHeaders({ 'Content-Type': 'application/json' })
      });
    }
  }
};

// =================================================================================
// 內部生成處理函數
// =================================================================================

async function handleInternalGenerate(request, env, ctx, imageStorage) {
  const logger = new Logger();
  const startTime = Date.now();
  
  try {
    const body = await request.json();
    const prompt = body.prompt;
    if (!prompt || !prompt.trim()) {
      throw new Error("Prompt is required");
    }
    
    if (!CONFIG.POLLINATIONS_AUTH.enabled || !CONFIG.POLLINATIONS_AUTH.token) {
      logger.add("⚠️ API Key Warning", {
        status: "missing",
        message: "POLLINATIONS_API_KEY 未設置，請求可能會失敗",
        endpoint: CONFIG.PROVIDERS.pollinations.endpoint,
        recommendation: "請使用 'wrangler secret put POLLINATIONS_API_KEY' 設置"
      });
    }
    
    let width = 1024, height = 1024;
    if (body.width) width = body.width;
    if (body.height) height = body.height;
    
    let referenceImages = [];
    if (body.reference_images && Array.isArray(body.reference_images)) {
      referenceImages = body.reference_images.filter(url => {
        try {
          new URL(url);
          return true;
        } catch {
          return false;
        }
      });
    }
    
    const seedInput = body.seed !== undefined ? body.seed : -1;
    let seedValue = -1;
    if (seedInput !== -1) {
      const parsedSeed = parseInt(seedInput);
      if (!isNaN(parsedSeed) && parsedSeed >= 0 && parsedSeed <= 999999) {
        seedValue = parsedSeed;
      }
    }
    
    const options = { 
      provider: body.provider || null, 
      model: body.model || "zimage", 
      width: Math.min(Math.max(width, 256), 2048), 
      height: Math.min(Math.max(height, 256), 2048), 
      numOutputs: Math.min(Math.max(body.n || 1, 1), 4), 
      seed: seedValue,
      negativePrompt: body.negative_prompt || "", 
      guidance: body.guidance_scale || null, 
      steps: body.steps || null, 
      enhance: body.enhance === true, 
      nologo: body.nologo !== false, 
      privateMode: body.private !== false, 
      style: body.style || "none", 
      autoOptimize: body.auto_optimize !== false, 
      autoHD: body.auto_hd !== false, 
      qualityMode: body.quality_mode || 'standard',
      referenceImages: referenceImages
    };
    
    const router = new MultiProviderRouter({}, env);
    const results = await router.generate(prompt, options, logger);
    
    const duration = Date.now() - startTime;
    
    if (results.length === 1 && results[0].imageData) {
      const result = results[0];
      
      // 💾 保存圖片到 R2（如果可用）
      let savedImage = null;
      if (imageStorage) {
        try {
          savedImage = await imageStorage.saveImage(result.imageData, {
            prompt: prompt,
            model: result.model,
            seed: result.seed,
            width: result.width,
            height: result.height,
            style: result.style,
            quality_mode: result.quality_mode,
            contentType: result.contentType,
            negative_prompt: options.negativePrompt,
            reference_images: options.referenceImages,
            generation_time: duration / 1000
          });
        } catch (e) {
          console.error("Failed to save image to R2:", e);
        }
      }
      
      return new Response(result.imageData, {
        headers: {
          'Content-Type': result.contentType || 'image/png',
          'Content-Disposition': 'inline; filename="' + (savedImage?.fileName || 'flux-ai-' + result.seed + '.png') + '"',
          'X-Image-ID': savedImage?.imageId || '',
          'X-Image-URL': savedImage?.publicUrl || '',
          'X-Model': result.model,
          'X-Seed': result.seed.toString(),
          'X-Width': result.width.toString(),
          'X-Height': result.height.toString(),
          'X-Generation-Time': duration + 'ms',
          'X-Quality-Mode': result.quality_mode,
          'X-Style': result.style,
          'X-Style-Name': result.style_name || result.style,
          'X-Style-Category': result.style_category || 'unknown',
          'X-Generation-Mode': result.generation_mode || '文生圖',
          'X-Authenticated': result.authenticated ? 'true' : 'false',
          'X-API-Endpoint': CONFIG.PROVIDERS.pollinations.endpoint,
          ...corsHeaders()
        }
      });
    }
    
    // 處理多張圖片
    const savedImages = await Promise.all(results.map(async (r) => {
      if (r.imageData) {
        let saved = null;
        
        if (imageStorage) {
          try {
            saved = await imageStorage.saveImage(r.imageData, {
              prompt: prompt,
              model: r.model,
              seed: r.seed,
              width: r.width,
              height: r.height,
              style: r.style,
              quality_mode: r.quality_mode,
              contentType: r.contentType,
              negative_prompt: options.negativePrompt,
              reference_images: options.referenceImages,
              generation_time: duration / 1000
            });
          } catch (e) {
            console.error("Failed to save image to R2:", e);
          }
        }
        
        // 如果 R2 保存失敗，使用 Blob URL
        if (!saved) {
          const uint8Array = new Uint8Array(r.imageData);
          let binary = '';
          const len = uint8Array.byteLength;
          for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(uint8Array[i]);
          }
          const base64 = btoa(binary);
          
          return {
            imageId: null,
            imageUrl: 'data:' + r.contentType + ';base64,' + base64,
            model: r.model,
            seed: r.seed,
            width: r.width,
            height: r.height,
            style: r.style,
            quality_mode: r.quality_mode,
            generation_mode: r.generation_mode,
            generation_time: duration / 1000,
            isPermanent: false
          };
        }
        
        return {
          imageId: saved.imageId,
          imageUrl: saved.publicUrl,
          model: r.model,
          seed: r.seed,
          width: r.width,
          height: r.height,
          style: r.style,
          quality_mode: r.quality_mode,
          generation_mode: r.generation_mode,
          generation_time: duration / 1000,
          isPermanent: true
        };
      }
      return null;
    }));
    
    return new Response(JSON.stringify({ 
      created: Math.floor(Date.now() / 1000), 
      data: savedImages.filter(d => d !== null),
      generation_time_ms: duration,
      api_endpoint: CONFIG.PROVIDERS.pollinations.endpoint,
      authenticated: CONFIG.POLLINATIONS_AUTH.enabled,
      styles_available: Object.keys(CONFIG.STYLE_PRESETS).length,
      r2_storage_enabled: !!imageStorage
    }), { 
      headers: corsHeaders({ 
        'Content-Type': 'application/json',
        'X-Generation-Time': duration + 'ms',
        'X-API-Endpoint': CONFIG.PROVIDERS.pollinations.endpoint,
        'X-Styles-Count': Object.keys(CONFIG.STYLE_PRESETS).length.toString()
      }) 
    });
    
  } catch (e) {
    logger.add("❌ Error", e.message);
    return new Response(JSON.stringify({ 
      error: { 
        message: e.message, 
        debug_logs: logger.get(),
        api_endpoint: CONFIG.PROVIDERS.pollinations.endpoint,
        authenticated: CONFIG.POLLINATIONS_AUTH.enabled
      } 
    }), { 
      status: 400, 
      headers: corsHeaders({ 'Content-Type': 'application/json' }) 
    });
  }
}

// =================================================================================
// Web UI 界面處理函數
// =================================================================================

function handleUI(request) {
  // 🌐 檢測語言
  const url = new URL(request.url);
  const langParam = url.searchParams.get('lang');
  const acceptLang = request.headers.get('accept-language') || '';
  
  let currentLang = 'zh-TW'; // 默認繁體中文
  
  if (langParam && CONFIG.I18N[langParam]) {
    currentLang = langParam;
  } else if (acceptLang.includes('en')) {
    currentLang = 'en';
  }
  
  const t = CONFIG.I18N[currentLang]; // 翻譯文本對象
  
  const authStatus = CONFIG.POLLINATIONS_AUTH.enabled ? 
    '<span class="text-green-500 font-semibold text-xs">🔐 ' + t.header.apiAuth + '</span>' : 
    '<span class="text-amber-500 font-semibold text-xs">⚠️ ' + t.header.needApiKey + '</span>';
    
  const apiEndpoint = CONFIG.PROVIDERS.pollinations.endpoint;
  const stylesCount = Object.keys(CONFIG.STYLE_PRESETS).length;
  
  // 生成風格選項
  let styleOptionsHTML = '';
  const sortedCategories = Object.entries(CONFIG.STYLE_CATEGORIES)
    .sort((a, b) => a[1].order - b[1].order);
  
  for (const [categoryKey, categoryInfo] of sortedCategories) {
    const stylesInCategory = Object.entries(CONFIG.STYLE_PRESETS)
      .filter(([key, style]) => style.category === categoryKey);
    
    if (stylesInCategory.length > 0) {
      styleOptionsHTML += '<optgroup label="' + categoryInfo.icon + ' ' + categoryInfo.name + '">';
      
      for (const [styleKey, styleConfig] of stylesInCategory) {
        const selected = styleKey === 'none' ? ' selected' : '';
        styleOptionsHTML += '<option value="' + styleKey + '"' + selected + '>' + styleConfig.icon + ' ' + styleConfig.name + '</option>';
      }
      
      styleOptionsHTML += '</optgroup>';
    }
  }
  
  // 構建完整 HTML
  const html = buildCompleteHTML(authStatus, apiEndpoint, stylesCount, styleOptionsHTML, t, currentLang);
  
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      ...corsHeaders()
    }
  });
}

function buildCompleteHTML(authStatus, apiEndpoint, stylesCount, styleOptionsHTML, t, currentLang) {
  return '<!DOCTYPE html>\n' +
'<html lang="' + currentLang + '" class="dark">\n' +
'<head>\n' +
'<meta charset="UTF-8">\n' +
'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'<title>Flux AI Pro v' + CONFIG.PROJECT_VERSION + '</title>\n' +
'<link rel="icon" href="data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'.9em\' font-size=\'90\'>🎨</text></svg>">\n' +
'<script src="https://cdn.tailwindcss.com"><\/script>\n' +
'<script>\n' +
'tailwind.config = {\n' +
'  darkMode: "class",\n' +
'  theme: {\n' +
'    extend: {\n' +
'      colors: {\n' +
'        border: "hsl(240 3.7% 15.9%)",\n' +
'        input: "hsl(240 3.7% 15.9%)",\n' +
'        ring: "hsl(142.4 71.8% 29.2%)",\n' +
'        background: "hsl(240 10% 3.9%)",\n' +
'        foreground: "hsl(0 0% 98%)",\n' +
'        primary: {\n' +
'          DEFAULT: "hsl(142.1 70.6% 45.3%)",\n' +
'          foreground: "hsl(144.9 80.4% 10%)"\n' +
'        },\n' +
'        secondary: {\n' +
'          DEFAULT: "hsl(240 3.7% 15.9%)",\n' +
'          foreground: "hsl(0 0% 98%)"\n' +
'        },\n' +
'        destructive: {\n' +
'          DEFAULT: "hsl(0 62.8% 30.6%)",\n' +
'          foreground: "hsl(0 0% 98%)"\n' +
'        },\n' +
'        muted: {\n' +
'          DEFAULT: "hsl(240 3.7% 15.9%)",\n' +
'          foreground: "hsl(240 5% 64.9%)"\n' +
'        },\n' +
'        accent: {\n' +
'          DEFAULT: "hsl(240 3.7% 15.9%)",\n' +
'          foreground: "hsl(0 0% 98%)"\n' +
'        }\n' +
'      },\n' +
'      keyframes: {\n' +
'        fadeIn: {\n' +
'          "0%": { opacity: "0", transform: "translateY(10px)" },\n' +
'          "100%": { opacity: "1", transform: "translateY(0)" }\n' +
'        },\n' +
'        slideDown: {\n' +
'          "0%": { opacity: "0", transform: "translateY(-10px)" },\n' +
'          "100%": { opacity: "1", transform: "translateY(0)" }\n' +
'        }\n' +
'      },\n' +
'      animation: {\n' +
'        fadeIn: "fadeIn 0.3s ease-out",\n' +
'        slideDown: "slideDown 0.2s ease-out"\n' +
'      }\n' +
'    }\n' +
'  }\n' +
'};\n' +
'<\/script>\n' +
'<style>\n' +
'::-webkit-scrollbar { width: 8px; height: 8px; }\n' +
'::-webkit-scrollbar-track { background: hsl(240 3.7% 15.9% / 0.5); }\n' +
'::-webkit-scrollbar-thumb { background: hsl(142.1 70.6% 45.3% / 0.3); border-radius: 4px; }\n' +
'::-webkit-scrollbar-thumb:hover { background: hsl(142.1 70.6% 45.3% / 0.5); }\n' +
'.spinner {\n' +
'  border: 3px solid rgba(255, 255, 255, 0.1);\n' +
'  border-top: 3px solid hsl(142.1 70.6% 45.3%);\n' +
'  border-radius: 50%;\n' +
'  width: 40px;\n' +
'  height: 40px;\n' +
'  animation: spin 1s linear infinite;\n' +
'}\n' +
'@keyframes spin {\n' +
'  0% { transform: rotate(0deg); }\n' +
'  100% { transform: rotate(360deg); }\n' +
'}\n' +
'.badge-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }\n' +
'@keyframes pulse {\n' +
'  0%, 100% { opacity: 1; }\n' +
'  50% { opacity: .8; }\n' +
'}\n' +
'@keyframes pulse-glow {\n' +
'  0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }\n' +
'  50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); }\n' +
'}\n' +
'#generateBtn { animation: pulse-glow 2s ease-in-out infinite; }\n' +
'#generateBtn:hover { animation: none; }\n' +
'</style>\n' +
'</head>\n' +
'<body class="bg-background text-foreground antialiased">\n' +
'<div class="min-h-screen flex flex-col">\n' +
getHeader(authStatus, apiEndpoint, stylesCount, t, currentLang) +
'<main class="flex-1">\n' +
'  <div id="generatePage" class="page active">\n' +
'    <div class="container max-w-screen-2xl mx-auto p-4 lg:p-6">\n' +
'      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">\n' +
getLeftPanel(styleOptionsHTML, t) +
getCenterPanel(t) +
getRightPanel(apiEndpoint, t) +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
getHistoryPage(t) +
'</main>\n' +
getModal() +
'</div>\n' +
getJavaScript(t) +
'</body>\n' +
'</html>';
}
function getHeader(authStatus, apiEndpoint, stylesCount, t, currentLang) {
  return '<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">\n' +
'  <div class="container flex h-16 items-center justify-between px-4 max-w-screen-2xl mx-auto">\n' +
'    <div class="flex items-center gap-4">\n' +
'      <div class="flex items-center gap-3">\n' +
'        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shadow-lg shadow-primary/25">\n' +
'          <span class="text-2xl">🎨</span>\n' +
'        </div>\n' +
'        <div class="flex flex-col">\n' +
'          <h1 class="text-lg font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">' + t.header.title + '</h1>\n' +
'          <div class="flex items-center gap-2">\n' +
'            <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">v' + CONFIG.PROJECT_VERSION + '</span>\n' +
'            <span class="inline-flex items-center rounded-md bg-pink-500/10 px-2 py-0.5 text-xs font-bold text-pink-500 ring-1 ring-inset ring-pink-500/20 badge-pulse">NEW</span>\n' +
'            <span class="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-0.5 text-xs font-bold text-purple-400 ring-1 ring-inset ring-purple-500/20">' + stylesCount + ' ' + t.header.styles + '</span>\n' +
'          </div>\n' +
'        </div>\n' +
'      </div>\n' +
'      <div class="hidden md:flex flex-col ml-4 border-l border-border/40 pl-4">\n' +
'        <div class="inline-flex items-center gap-2 text-sm">' + authStatus + '</div>\n' +
'        <div class="text-xs text-muted-foreground truncate max-w-[200px]" title="' + apiEndpoint + '">📡 ' + apiEndpoint + '</div>\n' +
'      </div>\n' +
'    </div>\n' +
'    <nav class="flex items-center gap-2">\n' +
'      <div class="relative inline-block">\n' +
'        <select id="langSwitch" class="h-10 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer">\n' +
'          <option value="zh-TW"' + (currentLang === 'zh-TW' ? ' selected' : '') + '>🇹🇼 繁中</option>\n' +
'          <option value="en"' + (currentLang === 'en' ? ' selected' : '') + '>🇺🇸 EN</option>\n' +
'        </select>\n' +
'      </div>\n' +
'      <button class="nav-btn inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-10 py-2 px-4 gap-2 bg-primary text-primary-foreground shadow hover:bg-primary/90" data-page="generate">\n' +
'        <span class="text-lg">🎨</span>\n' +
'        <span class="hidden sm:inline">' + t.header.generate + '</span>\n' +
'      </button>\n' +
'      <button class="nav-btn inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 gap-2" data-page="history">\n' +
'        <span class="text-lg">📚</span>\n' +
'        <span class="hidden sm:inline">' + t.header.history + '</span>\n' +
'        <span id="historyCount" class="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">0</span>\n' +
'      </button>\n' +
'    </nav>\n' +
'  </div>\n' +
'</header>\n';
}

function getLeftPanel(styleOptionsHTML, t) {
  return '<aside class="lg:col-span-3 space-y-4">\n' +
'  <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">\n' +
'    <div class="flex flex-col space-y-1.5 p-6 pb-4">\n' +
'      <h3 class="text-xl font-semibold leading-none tracking-tight flex items-center gap-2">\n' +
'        <span>⚙️</span><span>' + t.sidebar.parameters + '</span>\n' +
'      </h3>\n' +
'    </div>\n' +
'    <div class="p-6 pt-0 space-y-4">\n' +
'      <form id="generateForm" class="space-y-4">\n' +
'        <div class="space-y-2">\n' +
'          <label class="text-sm font-medium leading-none">' + t.sidebar.modelSelect + '</label>\n' +
'          <select id="model" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
'            <optgroup label="⚡ Z-Image 系列（默認）">\n' +
'              <option value="zimage" selected>Z-Image Turbo ⚡ (6B 參數, 極速)</option>\n' +
'            </optgroup>\n' +
'            <optgroup label="🎨 Flux 系列">\n' +
'              <option value="flux">Flux 標準版 (平衡速度與質量)</option>\n' +
'              <option value="turbo">Flux Turbo ⚡ (超快速生成)</option>\n' +
'            </optgroup>\n' +
'            <optgroup label="🖼️ Kontext 系列（圖生圖）">\n' +
'              <option value="kontext">Kontext 🎨 (支持參考圖像)</option>\n' +
'            </optgroup>\n' +
'          </select>\n' +
'          <p class="text-xs text-muted-foreground">💰 價格: Z-Image (0.0002) | Flux (0.00012) | Turbo (0.0003)</p>\n' +
'        </div>\n' +
'        <div class="space-y-2">\n' +
'          <label class="text-sm font-medium leading-none">' + t.sidebar.sizePreset + '</label>\n' +
'          <select id="size" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
'            <option value="square-1k" selected>方形 1024x1024</option>\n' +
'            <option value="square-1.5k">方形 1536x1536</option>\n' +
'            <option value="square-2k">方形 2048x2048</option>\n' +
'            <option value="portrait-9-16-hd">豎屏 1080x1920</option>\n' +
'            <option value="landscape-16-9-hd">橫屏 1920x1080</option>\n' +
'            <option value="instagram-square">Instagram 方形</option>\n' +
'            <option value="wallpaper-fhd">桌布 Full HD</option>\n' +
'          </select>\n' +
'        </div>\n' +
'        <div class="space-y-2">\n' +
'          <label class="text-sm font-medium leading-none flex items-center gap-2"><span>🎨</span><span>' + t.sidebar.artStyle + '</span></label>\n' +
'          <select id="style" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
styleOptionsHTML +
'          </select>\n' +
'          <p class="text-xs text-purple-400 font-medium">✨ 45+ 種風格可選，分 13 大類</p>\n' +
'        </div>\n' +
'        <div class="space-y-2">\n' +
'          <label class="text-sm font-medium leading-none">' + t.sidebar.qualityMode + '</label>\n' +
'          <select id="qualityMode" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
'            <option value="economy">' + t.sidebar.economyMode + '</option>\n' +
'            <option value="standard" selected>' + t.sidebar.standardMode + '</option>\n' +
'            <option value="ultra">' + t.sidebar.ultraMode + '</option>\n' +
'          </select>\n' +
'        </div>\n' +
'        <div class="pt-2">\n' +
'          <button type="button" id="advancedToggle" class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline cursor-pointer">\n' +
'            <span id="advancedToggleIcon">▼</span><span>' + t.sidebar.advancedOptions + '</span>\n' +
'          </button>\n' +
'        </div>\n' +
'        <div id="advancedSection" class="hidden space-y-4">\n' +
'          <div class="space-y-2">\n' +
'            <label class="text-sm font-medium leading-none">' + t.sidebar.seed + '</label>\n' +
'            <input type="number" id="seed" value="-1" min="-1" max="999999" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
'            <p class="text-xs text-muted-foreground">-1 = ' + t.sidebar.randomSeed + '</p>\n' +
'          </div>\n' +
'          <div class="space-y-2">\n' +
'            <label class="text-sm font-medium leading-none">' + t.sidebar.numOutputs + '</label>\n' +
'            <input type="number" id="numOutputs" value="1" min="1" max="4" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
'          </div>\n' +
'          <div class="flex items-center space-x-2">\n' +
'            <input type="checkbox" id="autoOptimize" checked class="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer">\n' +
'            <label for="autoOptimize" class="text-sm font-medium leading-none cursor-pointer">' + t.sidebar.autoOptimize + '</label>\n' +
'          </div>\n' +
'          <div class="flex items-center space-x-2">\n' +
'            <input type="checkbox" id="autoHD" checked class="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer">\n' +
'            <label for="autoHD" class="text-sm font-medium leading-none cursor-pointer">' + t.sidebar.autoHD + '</label>\n' +
'          </div>\n' +
'        </div>\n' +
'      </form>\n' +
'    </div>\n' +
'  </div>\n' +
'</aside>\n';
}

function getCenterPanel(t) {
  return '<section class="lg:col-span-6 space-y-4">\n' +
'  <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">\n' +
'    <div class="flex flex-col space-y-1.5 p-6 pb-4">\n' +
'      <div class="flex items-center justify-between">\n' +
'        <h3 class="text-xl font-semibold leading-none tracking-tight flex items-center gap-2">\n' +
'          <span>🖼️</span><span>' + t.results.title + '</span>\n' +
'        </h3>\n' +
'        <div id="generationTimeDisplay" class="hidden">\n' +
'          <div class="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">\n' +
'            <svg class="w-4 h-4 animate-spin" id="timeSpinner" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
'              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n' +
'              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n' +
'            </svg>\n' +
'            <span id="timeElapsed">0.0</span><span class="text-muted-foreground">秒</span>\n' +
'          </div>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div class="p-6 pt-0">\n' +
'      <div id="results">\n' +
'        <div class="flex flex-col items-center justify-center py-16 px-4 text-center">\n' +
'          <div class="rounded-full bg-muted/50 p-6 mb-4">\n' +
'            <svg class="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
'              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-width="2"></rect>\n' +
'              <circle cx="8.5" cy="8.5" r="1.5"></circle>\n' +
'              <polyline points="21 15 16 10 5 21" stroke-width="2"></polyline>\n' +
'            </svg>\n' +
'          </div>\n' +
'          <h4 class="text-lg font-semibold mb-2">' + t.results.noImages + '</h4>\n' +
'          <p class="text-sm text-muted-foreground max-w-sm">' + t.results.noImagesDesc + '</p>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-emerald-500/5 p-6">\n' +
'    <div class="flex flex-col sm:flex-row items-center gap-4">\n' +
'      <div class="flex-1 text-center sm:text-left">\n' +
'        <h4 class="text-lg font-bold mb-1 bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">準備好了嗎？</h4>\n' +
'        <p class="text-sm text-muted-foreground">填寫右側提示詞和左側參數，點擊按鈕開始創作</p>\n' +
'      </div>\n' +
'      <button type="submit" form="generateForm" id="generateBtn" class="inline-flex items-center justify-center rounded-md text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-gradient-to-r from-primary to-emerald-500 text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105 h-14 px-10 gap-3 shadow-lg shadow-primary/25 active:scale-95 whitespace-nowrap">\n' +
'        <span class="text-2xl">🎨</span>\n' +
'        <span class="text-lg">' + t.sidebar.startGenerate + '</span>\n' +
'        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
'          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>\n' +
'        </svg>\n' +
'      </button>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';
}

function getRightPanel(apiEndpoint, t) {
  return '<aside class="lg:col-span-3 space-y-4">\n' +
'  <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">\n' +
'    <div class="flex flex-col space-y-1.5 p-6 pb-4">\n' +
'      <h3 class="text-xl font-semibold leading-none tracking-tight flex items-center gap-2">\n' +
'        <span>💬</span><span>' + t.prompts.title + '</span>\n' +
'      </h3>\n' +
'    </div>\n' +
'    <div class="p-6 pt-0 space-y-4">\n' +
'      <div class="space-y-2">\n' +
'        <label class="text-sm font-medium leading-none">' + t.prompts.positive + '</label>\n' +
'        <textarea id="prompt" rows="6" placeholder="' + t.prompts.positivePlaceholder + '" class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y" required></textarea>\n' +
'        <p class="text-xs text-primary font-medium">✅ ' + t.prompts.supportsChinese + '</p>\n' +
'      </div>\n' +
'      <div class="space-y-2">\n' +
'        <label class="text-sm font-medium leading-none">' + t.prompts.negative + '</label>\n' +
'        <textarea id="negativePrompt" rows="3" placeholder="' + t.prompts.negativePlaceholder + '" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"></textarea>\n' +
'      </div>\n' +
'      <div class="space-y-2">\n' +
'        <label class="text-sm font-medium leading-none">' + t.prompts.referenceImages + '</label>\n' +
'        <textarea id="referenceImages" rows="3" placeholder="' + t.prompts.referencePlaceholder + '" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"></textarea>\n' +
'        <p class="text-xs text-muted-foreground">📌 ' + t.prompts.supportsImageToImage + '</p>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="rounded-lg border border-purple-500/20 bg-purple-500/5 p-4">\n' +
'    <div class="flex items-start gap-3">\n' +
'      <div class="rounded-lg bg-purple-500/10 p-2"><span class="text-2xl">🎨</span></div>\n' +
'      <div class="flex-1 space-y-1">\n' +
'        <h4 class="text-sm font-semibold text-purple-400">' + t.styleHint.title + '</h4>\n' +
'        <p class="text-xs text-muted-foreground">' + t.styleHint.current + ': <span id="currentStyleName" class="text-foreground font-medium">' + t.styleHint.noStyle + '</span></p>\n' +
'        <p id="styleDescription" class="text-xs text-muted-foreground/80">' + t.styleHint.useOriginal + '</p>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">\n' +
'    <div class="flex flex-col space-y-1.5 p-6 pb-4">\n' +
'      <h3 class="text-sm font-semibold leading-none tracking-tight flex items-center gap-2">\n' +
'        <span>📋</span><span>' + t.config.title + '</span>\n' +
'      </h3>\n' +
'    </div>\n' +
'    <div class="p-6 pt-0 space-y-3">\n' +
'      <div class="space-y-1">\n' +
'        <div class="text-xs font-medium text-muted-foreground">' + t.config.model + '</div>\n' +
'        <div id="previewModel" class="text-sm font-medium">Z-Image Turbo</div>\n' +
'      </div>\n' +
'      <div class="h-px bg-border"></div>\n' +
'      <div class="space-y-1">\n' +
'        <div class="text-xs font-medium text-muted-foreground">' + t.config.size + '</div>\n' +
'        <div id="previewSize" class="text-sm font-medium">1024x1024</div>\n' +
'      </div>\n' +
'      <div class="h-px bg-border"></div>\n' +
'      <div class="space-y-1">\n' +
'        <div class="text-xs font-medium text-muted-foreground">' + t.config.style + '</div>\n' +
'        <div id="previewStyle" class="text-sm font-medium">' + t.styleHint.noStyle + '</div>\n' +
'      </div>\n' +
'      <div class="h-px bg-border"></div>\n' +
'      <div class="space-y-1">\n' +
'        <div class="text-xs font-medium text-muted-foreground">' + t.config.apiEndpoint + '</div>\n' +
'        <div class="text-xs font-mono text-muted-foreground/80 break-all">' + apiEndpoint + '</div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</aside>\n';
}
function getHistoryPage(t) {
  return '<div id="historyPage" class="page hidden">\n' +
'  <div class="container max-w-screen-2xl mx-auto p-4 lg:p-6">\n' +
'    <div class="space-y-6">\n' +
'      <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">\n' +
'        <div class="flex flex-col space-y-1.5 p-6">\n' +
'          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">\n' +
'            <div>\n' +
'              <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">\n' +
'                <span>📚</span><span>' + t.history.title + '</span>\n' +
'              </h3>\n' +
'              <p class="text-sm text-muted-foreground mt-2">總共 <span id="totalHistoryCount" class="text-primary font-semibold">0</span> 條記錄</p>\n' +
'            </div>\n' +
'            <div class="flex gap-2">\n' +
'              <button id="exportHistory" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 gap-2">\n' +
'                <span>📥</span><span>' + t.history.export + '</span>\n' +
'              </button>\n' +
'              <button id="clearHistory" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-destructive/50 bg-destructive/10 text-destructive hover:bg-destructive/20 h-10 px-4 gap-2">\n' +
'                <span>🗑️</span><span>' + t.history.clear + '</span>\n' +
'              </button>\n' +
'            </div>\n' +
'          </div>\n' +
'        </div>\n' +
'      </div>\n' +
'      <div id="historyContent">\n' +
'        <div class="flex flex-col items-center justify-center py-20 px-4 text-center">\n' +
'          <div class="rounded-full bg-muted/50 p-6 mb-4">\n' +
'            <svg class="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
'              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>\n' +
'            </svg>\n' +
'          </div>\n' +
'          <h4 class="text-lg font-semibold mb-2">' + t.history.noHistory + '</h4>\n' +
'          <p class="text-sm text-muted-foreground max-w-sm">' + t.history.noHistoryDesc + '</p>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</div>\n';
}

function getModal() {
  return '<div id="imageModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-4" style="display: none;">\n' +
'  <div class="relative max-w-7xl max-h-[90vh] bg-background rounded-lg shadow-2xl overflow-hidden">\n' +
'    <button id="closeModal" class="absolute top-4 right-4 z-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-background/80 backdrop-blur-sm hover:bg-background border border-border h-10 w-10">\n' +
'      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
'        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\n' +
'      </svg>\n' +
'    </button>\n' +
'    <div class="overflow-auto max-h-[90vh]">\n' +
'      <img id="modalImage" class="w-full h-auto" src="" alt="Full size image">\n' +
'    </div>\n' +
'    <div id="modalInfo" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-6 space-y-3">\n' +
'      <div class="flex flex-wrap gap-2">\n' +
'        <span class="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">\n' +
'          <span id="modalModel"></span>\n' +
'        </span>\n' +
'        <span class="inline-flex items-center rounded-md bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">\n' +
'          <span id="modalSize"></span>\n' +
'        </span>\n' +
'        <span class="inline-flex items-center rounded-md bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">\n' +
'          <span id="modalStyle"></span>\n' +
'        </span>\n' +
'        <span class="inline-flex items-center rounded-md bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-500/20">\n' +
'          Seed: <span id="modalSeed"></span>\n' +
'        </span>\n' +
'      </div>\n' +
'      <div class="text-sm text-muted-foreground max-w-3xl">\n' +
'        <p id="modalPrompt" class="line-clamp-2"></p>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</div>\n';
}

function getJavaScript(t) {
  return '<script>\n' +
'const STYLE_PRESETS = ' + JSON.stringify(CONFIG.STYLE_PRESETS) + ';\n' +
'const PRESET_SIZES = ' + JSON.stringify(CONFIG.PRESET_SIZES) + ';\n' +
'const STORAGE_KEY = "flux_ai_history";\n' +
'const MAX_HISTORY = 100;\n' +
'\n' +
'// ⏱️ 計時器類\n' +
'class GenerationTimer {\n' +
'  constructor() {\n' +
'    this.startTime = null;\n' +
'    this.intervalId = null;\n' +
'    this.isRunning = false;\n' +
'    this.displayElement = document.getElementById("generationTimeDisplay");\n' +
'    this.elapsedElement = document.getElementById("timeElapsed");\n' +
'    this.spinnerElement = document.getElementById("timeSpinner");\n' +
'  }\n' +
'  \n' +
'  start() {\n' +
'    this.startTime = Date.now();\n' +
'    this.isRunning = true;\n' +
'    \n' +
'    if (this.displayElement) {\n' +
'      this.displayElement.classList.remove("hidden");\n' +
'    }\n' +
'    \n' +
'    this.intervalId = setInterval(() => {\n' +
'      if (!this.isRunning) return;\n' +
'      const elapsed = (Date.now() - this.startTime) / 1000;\n' +
'      if (this.elapsedElement) {\n' +
'        this.elapsedElement.textContent = elapsed.toFixed(1);\n' +
'      }\n' +
'    }, 100);\n' +
'  }\n' +
'  \n' +
'  stop() {\n' +
'    this.isRunning = false;\n' +
'    if (this.intervalId) {\n' +
'      clearInterval(this.intervalId);\n' +
'      this.intervalId = null;\n' +
'    }\n' +
'    \n' +
'    const totalTime = this.startTime ? (Date.now() - this.startTime) / 1000 : 0;\n' +
'    \n' +
'    if (this.spinnerElement) {\n' +
'      this.spinnerElement.classList.remove("animate-spin");\n' +
'    }\n' +
'    \n' +
'    setTimeout(() => {\n' +
'      if (this.displayElement) {\n' +
'        this.displayElement.classList.add("hidden");\n' +
'      }\n' +
'      if (this.spinnerElement) {\n' +
'        this.spinnerElement.classList.add("animate-spin");\n' +
'      }\n' +
'    }, 3000);\n' +
'    \n' +
'    return totalTime;\n' +
'  }\n' +
'  \n' +
'  reset() {\n' +
'    this.stop();\n' +
'    this.startTime = null;\n' +
'    if (this.elapsedElement) {\n' +
'      this.elapsedElement.textContent = "0.0";\n' +
'    }\n' +
'    if (this.displayElement) {\n' +
'      this.displayElement.classList.add("hidden");\n' +
'    }\n' +
'  }\n' +
'  \n' +
'  getElapsed() {\n' +
'    if (!this.startTime) return 0;\n' +
'    return (Date.now() - this.startTime) / 1000;\n' +
'  }\n' +
'}\n' +
'\n' +
'const timer = new GenerationTimer();\n' +
'\n' +
'// 頁面切換\n' +
'document.querySelectorAll(".nav-btn").forEach(btn => {\n' +
'  btn.addEventListener("click", () => {\n' +
'    const targetPage = btn.dataset.page;\n' +
'    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));\n' +
'    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));\n' +
'    document.querySelectorAll(".nav-btn").forEach(b => {\n' +
'      b.classList.remove("bg-primary", "text-primary-foreground", "shadow");\n' +
'      b.classList.add("border", "border-input", "bg-background", "hover:bg-accent", "hover:text-accent-foreground");\n' +
'    });\n' +
'    \n' +
'    const targetPageElement = document.getElementById(targetPage + "Page");\n' +
'    if (targetPageElement) {\n' +
'      targetPageElement.classList.add("active");\n' +
'      targetPageElement.classList.remove("hidden");\n' +
'    }\n' +
'    \n' +
'    btn.classList.add("bg-primary", "text-primary-foreground", "shadow");\n' +
'    btn.classList.remove("border", "border-input", "bg-background", "hover:bg-accent", "hover:text-accent-foreground");\n' +
'    \n' +
'    if (targetPage === "history") {\n' +
'      loadHistory();\n' +
'    }\n' +
'  });\n' +
'});\n' +
'\n' +
'// 進階選項切換\n' +
'document.getElementById("advancedToggle").addEventListener("click", () => {\n' +
'  const section = document.getElementById("advancedSection");\n' +
'  const icon = document.getElementById("advancedToggleIcon");\n' +
'  \n' +
'  if (section.classList.contains("hidden")) {\n' +
'    section.classList.remove("hidden");\n' +
'    icon.textContent = "▲";\n' +
'  } else {\n' +
'    section.classList.add("hidden");\n' +
'    icon.textContent = "▼";\n' +
'  }\n' +
'});\n' +
'\n' +
'// 風格選擇更新預覽\n' +
'document.getElementById("style").addEventListener("change", (e) => {\n' +
'  const selectedStyle = e.target.value;\n' +
'  const styleConfig = STYLE_PRESETS[selectedStyle];\n' +
'  \n' +
'  if (styleConfig) {\n' +
'    document.getElementById("currentStyleName").textContent = styleConfig.name;\n' +
'    document.getElementById("styleDescription").textContent = styleConfig.description;\n' +
'    document.getElementById("previewStyle").textContent = styleConfig.name;\n' +
'  }\n' +
'});\n' +
'\n' +
'// 模型選擇更新預覽\n' +
'document.getElementById("model").addEventListener("change", (e) => {\n' +
'  const selectedText = e.target.options[e.target.selectedIndex].text;\n' +
'  document.getElementById("previewModel").textContent = selectedText;\n' +
'});\n' +
'\n' +
'// 尺寸選擇更新預覽\n' +
'document.getElementById("size").addEventListener("change", (e) => {\n' +
'  const sizeKey = e.target.value;\n' +
'  const sizeConfig = PRESET_SIZES[sizeKey];\n' +
'  if (sizeConfig) {\n' +
'    document.getElementById("previewSize").textContent = sizeConfig.width + "x" + sizeConfig.height;\n' +
'  }\n' +
'});\n' +
'\n' +
'// 🌐 語言切換\n' +
'document.getElementById("langSwitch").addEventListener("change", (e) => {\n' +
'  const newLang = e.target.value;\n' +
'  const url = new URL(window.location);\n' +
'  url.searchParams.set("lang", newLang);\n' +
'  window.location.href = url.toString();\n' +
'});\n' +
'\n' +
'// 歷史記錄管理\n' +
'function getHistory() {\n' +
'  try {\n' +
'    const data = localStorage.getItem(STORAGE_KEY);\n' +
'    return data ? JSON.parse(data) : [];\n' +
'  } catch (e) {\n' +
'    console.error("Failed to load history:", e);\n' +
'    return [];\n' +
'  }\n' +
'}\n' +
'\n' +
'function saveHistory(history) {\n' +
'  try {\n' +
'    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));\n' +
'    updateHistoryCount();\n' +
'  } catch (e) {\n' +
'    console.error("Failed to save history:", e);\n' +
'  }\n' +
'}\n' +
'\n' +
'function addToHistory(item) {\n' +
'  const history = getHistory();\n' +
'  history.unshift({\n' +
'    ...item,\n' +
'    timestamp: Date.now(),\n' +
'    id: Date.now() + Math.random().toString(36).substring(2, 9)\n' +
'  });\n' +
'  saveHistory(history);\n' +
'}\n' +
'\n' +
'function deleteHistoryItem(id) {\n' +
'  const history = getHistory();\n' +
'  const filtered = history.filter(item => item.id !== id);\n' +
'  saveHistory(filtered);\n' +
'  loadHistory();\n' +
'}\n' +
'\n' +
'function clearAllHistory() {\n' +
'  if (confirm("' + t.history.confirmClear + '")) {\n' +
'    localStorage.removeItem(STORAGE_KEY);\n' +
'    updateHistoryCount();\n' +
'    loadHistory();\n' +
'  }\n' +
'}\n' +
'\n' +
'function updateHistoryCount() {\n' +
'  const history = getHistory();\n' +
'  const count = history.length;\n' +
'  const countElement = document.getElementById("historyCount");\n' +
'  const totalCountElement = document.getElementById("totalHistoryCount");\n' +
'  \n' +
'  if (countElement) countElement.textContent = count;\n' +
'  if (totalCountElement) totalCountElement.textContent = count;\n' +
'}\n' +
'\n' +
'function loadHistory() {\n' +
'  const history = getHistory();\n' +
'  const container = document.getElementById("historyContent");\n' +
'  \n' +
'  if (history.length === 0) {\n' +
'    container.innerHTML = \'<div class="flex flex-col items-center justify-center py-20 px-4 text-center"><div class="rounded-full bg-muted/50 p-6 mb-4"><svg class="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><h4 class="text-lg font-semibold mb-2">' + t.history.noHistory + '</h4><p class="text-sm text-muted-foreground max-w-sm">' + t.history.noHistoryDesc + '</p></div>\';\n' +
'    return;\n' +
'  }\n' +
'  \n' +
'  container.innerHTML = \'<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">\' +\n' +
'    history.map(item => {\n' +
'      const date = new Date(item.timestamp);\n' +
'      const timeStr = date.toLocaleString();\n' +
'      \n' +
'      return \'<div class="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all group">\' +\n' +
'        \'<div class="relative aspect-square cursor-pointer" onclick="showImageModal(\\\'\' + item.url.replace(/\'/g, "\\\\\\'") + \'\\\', \\\'\' + (item.prompt || "").replace(/\'/g, "\\\\\\'").substring(0, 100) + \'\\\', \\\'\' + (item.model || "") + \'\\\', \\\'\' + (item.width || "") + \'x\' + (item.height || "") + \'\\\', \\\'\' + (item.style || "none") + \'\\\', \\\'\' + (item.seed || "") + \'\\\')"><img src="\' + item.url + \'" alt="Generated image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"><div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div></div>\' +\n' +
'        \'<div class="p-3 space-y-2"><div class="flex flex-wrap gap-1.5"><span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">\' + (item.model || "unknown") + \'</span><span class="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">\' + (item.style || "none") + \'</span><span class="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">\' + (item.width || "") + \'x\' + (item.height || "") + \'</span></div><p class="text-xs text-muted-foreground line-clamp-2" title="\' + (item.prompt || "").replace(/"/g, "&quot;") + \'">\' + (item.prompt || "No prompt") + \'</p><div class="flex items-center justify-between pt-2 border-t border-border"><span class="text-xs text-muted-foreground">\' + timeStr + \'</span><div class="flex gap-1"><button onclick="reuseParameters(\\\'\' + (item.prompt || "").replace(/\'/g, "\\\\\\'") + \'\\\', \\\'\' + (item.model || "zimage") + \'\\\', \\\'\' + (item.style || "none") + \'\\\', \' + (item.seed || -1) + \', \' + (item.width || 1024) + \', \' + (item.height || 1024) + \')" class="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-7 w-7" title="' + t.results.reuse + '"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg></button><a href="\' + item.url + \'" download="flux-ai-\' + (item.seed || Date.now()) + \'.png" class="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-7 w-7" title="' + t.results.download + '"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></a><button onclick="deleteHistoryItem(\\\'\' + item.id + \'\\\');" class="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-destructive/50 bg-destructive/10 text-destructive hover:bg-destructive/20 h-7 w-7" title="' + t.history.delete + '"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div></div>\' +\n' +
'        \'</div>\';\n' +
'    }).join("") +\n' +
'    \'</div>\';\n' +
'}\n' +
'\n' +
'function reuseParameters(prompt, model, style, seed, width, height) {\n' +
'  document.getElementById("prompt").value = prompt;\n' +
'  document.getElementById("model").value = model;\n' +
'  document.getElementById("style").value = style;\n' +
'  document.getElementById("seed").value = seed;\n' +
'  \n' +
'  const sizeKey = Object.keys(PRESET_SIZES).find(key => {\n' +
'    const size = PRESET_SIZES[key];\n' +
'    return size.width === width && size.height === height;\n' +
'  });\n' +
'  if (sizeKey) {\n' +
'    document.getElementById("size").value = sizeKey;\n' +
'  }\n' +
'  \n' +
'  document.getElementById("style").dispatchEvent(new Event("change"));\n' +
'  document.getElementById("model").dispatchEvent(new Event("change"));\n' +
'  document.getElementById("size").dispatchEvent(new Event("change"));\n' +
'  \n' +
'  document.querySelector(\'[data-page="generate"]\').click();\n' +
'  \n' +
'  document.getElementById("prompt").scrollIntoView({ behavior: "smooth", block: "center" });\n' +
'}\n' +
'\n' +
'document.getElementById("clearHistory").addEventListener("click", clearAllHistory);\n' +
'\n' +
'document.getElementById("exportHistory").addEventListener("click", () => {\n' +
'  const history = getHistory();\n' +
'  const dataStr = JSON.stringify(history, null, 2);\n' +
'  const dataBlob = new Blob([dataStr], { type: "application/json" });\n' +
'  const url = URL.createObjectURL(dataBlob);\n' +
'  const link = document.createElement("a");\n' +
'  link.href = url;\n' +
'  link.download = "flux-ai-history-" + Date.now() + ".json";\n' +
'  link.click();\n' +
'  URL.revokeObjectURL(url);\n' +
'});\n' +
'\n' +
'// 模態框\n' +
'function showImageModal(url, prompt, model, size, style, seed) {\n' +
'  document.getElementById("modalImage").src = url;\n' +
'  document.getElementById("modalPrompt").textContent = prompt;\n' +
'  document.getElementById("modalModel").textContent = model;\n' +
'  document.getElementById("modalSize").textContent = size;\n' +
'  document.getElementById("modalStyle").textContent = style;\n' +
'  document.getElementById("modalSeed").textContent = seed;\n' +
'  document.getElementById("imageModal").style.display = "flex";\n' +
'}\n' +
'\n' +
'document.getElementById("closeModal").addEventListener("click", () => {\n' +
'  document.getElementById("imageModal").style.display = "none";\n' +
'});\n' +
'\n' +
'document.getElementById("imageModal").addEventListener("click", (e) => {\n' +
'  if (e.target.id === "imageModal") {\n' +
'    document.getElementById("imageModal").style.display = "none";\n' +
'  }\n' +
'});\n' +
'\n' +
'updateHistoryCount();\n';
}
// 將 getJavaScript 函數修改為完整版本
function getJavaScript(t) {
  return '<script>\n' +
'const STYLE_PRESETS = ' + JSON.stringify(CONFIG.STYLE_PRESETS) + ';\n' +
'const PRESET_SIZES = ' + JSON.stringify(CONFIG.PRESET_SIZES) + ';\n' +
'const STORAGE_KEY = "flux_ai_history";\n' +
'const MAX_HISTORY = 100;\n' +
'\n' +
'// ⏱️ 計時器類\n' +
'class GenerationTimer {\n' +
'  constructor() {\n' +
'    this.startTime = null;\n' +
'    this.intervalId = null;\n' +
'    this.isRunning = false;\n' +
'    this.displayElement = document.getElementById("generationTimeDisplay");\n' +
'    this.elapsedElement = document.getElementById("timeElapsed");\n' +
'    this.spinnerElement = document.getElementById("timeSpinner");\n' +
'  }\n' +
'  \n' +
'  start() {\n' +
'    this.startTime = Date.now();\n' +
'    this.isRunning = true;\n' +
'    \n' +
'    if (this.displayElement) {\n' +
'      this.displayElement.classList.remove("hidden");\n' +
'    }\n' +
'    \n' +
'    this.intervalId = setInterval(() => {\n' +
'      if (!this.isRunning) return;\n' +
'      const elapsed = (Date.now() - this.startTime) / 1000;\n' +
'      if (this.elapsedElement) {\n' +
'        this.elapsedElement.textContent = elapsed.toFixed(1);\n' +
'      }\n' +
'    }, 100);\n' +
'  }\n' +
'  \n' +
'  stop() {\n' +
'    this.isRunning = false;\n' +
'    if (this.intervalId) {\n' +
'      clearInterval(this.intervalId);\n' +
'      this.intervalId = null;\n' +
'    }\n' +
'    \n' +
'    const totalTime = this.startTime ? (Date.now() - this.startTime) / 1000 : 0;\n' +
'    \n' +
'    if (this.spinnerElement) {\n' +
'      this.spinnerElement.classList.remove("animate-spin");\n' +
'    }\n' +
'    \n' +
'    setTimeout(() => {\n' +
'      if (this.displayElement) {\n' +
'        this.displayElement.classList.add("hidden");\n' +
'      }\n' +
'      if (this.spinnerElement) {\n' +
'        this.spinnerElement.classList.add("animate-spin");\n' +
'      }\n' +
'    }, 3000);\n' +
'    \n' +
'    return totalTime;\n' +
'  }\n' +
'  \n' +
'  reset() {\n' +
'    this.stop();\n' +
'    this.startTime = null;\n' +
'    if (this.elapsedElement) {\n' +
'      this.elapsedElement.textContent = "0.0";\n' +
'    }\n' +
'    if (this.displayElement) {\n' +
'      this.displayElement.classList.add("hidden");\n' +
'    }\n' +
'  }\n' +
'  \n' +
'  getElapsed() {\n' +
'    if (!this.startTime) return 0;\n' +
'    return (Date.now() - this.startTime) / 1000;\n' +
'  }\n' +
'}\n' +
'\n' +
'const timer = new GenerationTimer();\n' +
'\n' +
getJavaScriptNavigation() +
getJavaScriptStyleHandlers() +
getJavaScriptHistoryManagement(t) +
getJavaScriptFormSubmit(t) +
'<\/script>\n';
}
function getJavaScriptNavigation() {
  return '// 頁面切換\n' +
'document.querySelectorAll(".nav-btn").forEach(btn => {\n' +
'  btn.addEventListener("click", () => {\n' +
'    const targetPage = btn.dataset.page;\n' +
'    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));\n' +
'    document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));\n' +
'    document.querySelectorAll(".nav-btn").forEach(b => {\n' +
'      b.classList.remove("bg-primary", "text-primary-foreground", "shadow");\n' +
'      b.classList.add("border", "border-input", "bg-background", "hover:bg-accent", "hover:text-accent-foreground");\n' +
'    });\n' +
'    \n' +
'    const targetPageElement = document.getElementById(targetPage + "Page");\n' +
'    if (targetPageElement) {\n' +
'      targetPageElement.classList.add("active");\n' +
'      targetPageElement.classList.remove("hidden");\n' +
'    }\n' +
'    \n' +
'    btn.classList.add("bg-primary", "text-primary-foreground", "shadow");\n' +
'    btn.classList.remove("border", "border-input", "bg-background", "hover:bg-accent", "hover:text-accent-foreground");\n' +
'    \n' +
'    if (targetPage === "history") {\n' +
'      loadHistory();\n' +
'    }\n' +
'  });\n' +
'});\n' +
'\n' +
'// 進階選項切換\n' +
'document.getElementById("advancedToggle").addEventListener("click", () => {\n' +
'  const section = document.getElementById("advancedSection");\n' +
'  const icon = document.getElementById("advancedToggleIcon");\n' +
'  \n' +
'  if (section.classList.contains("hidden")) {\n' +
'    section.classList.remove("hidden");\n' +
'    icon.textContent = "▲";\n' +
'  } else {\n' +
'    section.classList.add("hidden");\n' +
'    icon.textContent = "▼";\n' +
'  }\n' +
'});\n' +
'\n' +
'// 🌐 語言切換\n' +
'document.getElementById("langSwitch").addEventListener("change", (e) => {\n' +
'  const newLang = e.target.value;\n' +
'  const url = new URL(window.location);\n' +
'  url.searchParams.set("lang", newLang);\n' +
'  window.location.href = url.toString();\n' +
'});\n' +
'\n';
}

function getJavaScriptStyleHandlers() {
  return '// 風格選擇更新預覽\n' +
'document.getElementById("style").addEventListener("change", (e) => {\n' +
'  const selectedStyle = e.target.value;\n' +
'  const styleConfig = STYLE_PRESETS[selectedStyle];\n' +
'  \n' +
'  if (styleConfig) {\n' +
'    document.getElementById("currentStyleName").textContent = styleConfig.name;\n' +
'    document.getElementById("styleDescription").textContent = styleConfig.description;\n' +
'    document.getElementById("previewStyle").textContent = styleConfig.name;\n' +
'  }\n' +
'});\n' +
'\n' +
'// 模型選擇更新預覽\n' +
'document.getElementById("model").addEventListener("change", (e) => {\n' +
'  const selectedText = e.target.options[e.target.selectedIndex].text;\n' +
'  document.getElementById("previewModel").textContent = selectedText;\n' +
'});\n' +
'\n' +
'// 尺寸選擇更新預覽\n' +
'document.getElementById("size").addEventListener("change", (e) => {\n' +
'  const sizeKey = e.target.value;\n' +
'  const sizeConfig = PRESET_SIZES[sizeKey];\n' +
'  if (sizeConfig) {\n' +
'    document.getElementById("previewSize").textContent = sizeConfig.width + "x" + sizeConfig.height;\n' +
'  }\n' +
'});\n' +
'\n';
}

function getJavaScriptHistoryManagement(t) {
  return '// 歷史記錄管理\n' +
'function getHistory() {\n' +
'  try {\n' +
'    const data = localStorage.getItem(STORAGE_KEY);\n' +
'    return data ? JSON.parse(data) : [];\n' +
'  } catch (e) {\n' +
'    console.error("Failed to load history:", e);\n' +
'    return [];\n' +
'  }\n' +
'}\n' +
'\n' +
'function saveHistory(history) {\n' +
'  try {\n' +
'    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));\n' +
'    updateHistoryCount();\n' +
'  } catch (e) {\n' +
'    console.error("Failed to save history:", e);\n' +
'  }\n' +
'}\n' +
'\n' +
'function addToHistory(item) {\n' +
'  const history = getHistory();\n' +
'  history.unshift({\n' +
'    ...item,\n' +
'    timestamp: Date.now(),\n' +
'    id: Date.now() + Math.random().toString(36).substring(2, 9)\n' +
'  });\n' +
'  saveHistory(history);\n' +
'}\n' +
'\n' +
'function deleteHistoryItem(id) {\n' +
'  const history = getHistory();\n' +
'  const filtered = history.filter(item => item.id !== id);\n' +
'  saveHistory(filtered);\n' +
'  loadHistory();\n' +
'}\n' +
'\n' +
'function clearAllHistory() {\n' +
'  if (confirm("' + t.history.confirmClear + '")) {\n' +
'    localStorage.removeItem(STORAGE_KEY);\n' +
'    updateHistoryCount();\n' +
'    loadHistory();\n' +
'  }\n' +
'}\n' +
'\n' +
'function updateHistoryCount() {\n' +
'  const history = getHistory();\n' +
'  const count = history.length;\n' +
'  const countElement = document.getElementById("historyCount");\n' +
'  const totalCountElement = document.getElementById("totalHistoryCount");\n' +
'  \n' +
'  if (countElement) countElement.textContent = count;\n' +
'  if (totalCountElement) totalCountElement.textContent = count;\n' +
'}\n' +
'\n' +
'function loadHistory() {\n' +
'  const history = getHistory();\n' +
'  const container = document.getElementById("historyContent");\n' +
'  \n' +
'  if (history.length === 0) {\n' +
'    container.innerHTML = \'<div class="flex flex-col items-center justify-center py-20 px-4 text-center"><div class="rounded-full bg-muted/50 p-6 mb-4"><svg class="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><h4 class="text-lg font-semibold mb-2">' + t.history.noHistory + '</h4><p class="text-sm text-muted-foreground max-w-sm">' + t.history.noHistoryDesc + '</p></div>\';\n' +
'    return;\n' +
'  }\n' +
'  \n' +
'  container.innerHTML = \'<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">\' +\n' +
'    history.map(item => {\n' +
'      const date = new Date(item.timestamp);\n' +
'      const timeStr = date.toLocaleString();\n' +
'      const styleName = item.styleName || item.style || "none";\n' +
'      const genTime = item.generationTime ? item.generationTime.toFixed(2) + "s" : "N/A";\n' +
'      const genMode = item.generationMode || "文生圖";\n' +
'      \n' +
'      return \'<div class="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all group">\' +\n' +
'        \'<div class="relative aspect-square cursor-pointer" onclick="showImageModal(\\\'\' + item.url.replace(/\'/g, "\\\\\\'") + \'\\\', \\\'\' + (item.prompt || "").replace(/\'/g, "\\\\\\'").substring(0, 100) + \'\\\', \\\'\' + (item.model || "") + \'\\\', \\\'\' + (item.width || "") + \'x\' + (item.height || "") + \'\\\', \\\'\' + styleName.replace(/\'/g, "\\\\\\'") + \'\\\', \\\'\' + (item.seed || "") + \'\\\')"><img src="\' + item.url + \'" alt="Generated image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"><div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div></div>\' +\n' +
'        \'<div class="p-3 space-y-2"><div class="flex flex-wrap gap-1.5"><span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">\' + (item.model || "unknown") + \'</span><span class="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">\' + styleName + \'</span><span class="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">\' + (item.width || "") + \'x\' + (item.height || "") + \'</span><span class="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">\' + genMode + \'</span><span class="inline-flex items-center rounded-md bg-pink-500/10 px-2 py-0.5 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-500/20">⏱️ \' + genTime + \'</span></div><p class="text-xs text-muted-foreground line-clamp-2" title="\' + (item.prompt || "").replace(/"/g, "&quot;") + \'">\' + (item.prompt || "No prompt") + \'</p><div class="flex items-center justify-between pt-2 border-t border-border"><span class="text-xs text-muted-foreground">\' + timeStr + \'</span><div class="flex gap-1"><button onclick="reuseParameters(\\\'\' + (item.prompt || "").replace(/\'/g, "\\\\\\'") + \'\\\', \\\'\' + (item.model || "zimage") + \'\\\', \\\'\' + (item.style || "none") + \'\\\', \' + (item.seed || -1) + \', \' + (item.width || 1024) + \', \' + (item.height || 1024) + \')" class="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-7 w-7" title="' + t.results.reuse + '"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg></button><a href="\' + item.url + \'" download="flux-ai-\' + (item.seed || Date.now()) + \'.png" class="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-7 w-7" title="' + t.results.download + '"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></a><button onclick="deleteHistoryItem(\\\'\' + item.id + \'\\\');" class="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-destructive/50 bg-destructive/10 text-destructive hover:bg-destructive/20 h-7 w-7" title="' + t.history.delete + '"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div></div>\' +\n' +
'        \'</div>\';\n' +
'    }).join("") +\n' +
'    \'</div>\';\n' +
'}\n' +
'\n' +
'function reuseParameters(prompt, model, style, seed, width, height) {\n' +
'  document.getElementById("prompt").value = prompt;\n' +
'  document.getElementById("model").value = model;\n' +
'  document.getElementById("style").value = style;\n' +
'  document.getElementById("seed").value = seed;\n' +
'  \n' +
'  const sizeKey = Object.keys(PRESET_SIZES).find(key => {\n' +
'    const size = PRESET_SIZES[key];\n' +
'    return size.width === width && size.height === height;\n' +
'  });\n' +
'  if (sizeKey) {\n' +
'    document.getElementById("size").value = sizeKey;\n' +
'  }\n' +
'  \n' +
'  document.getElementById("style").dispatchEvent(new Event("change"));\n' +
'  document.getElementById("model").dispatchEvent(new Event("change"));\n' +
'  document.getElementById("size").dispatchEvent(new Event("change"));\n' +
'  \n' +
'  document.querySelector(\'[data-page="generate"]\').click();\n' +
'  \n' +
'  document.getElementById("prompt").scrollIntoView({ behavior: "smooth", block: "center" });\n' +
'}\n' +
'\n' +
'document.getElementById("clearHistory").addEventListener("click", clearAllHistory);\n' +
'\n' +
'document.getElementById("exportHistory").addEventListener("click", () => {\n' +
'  const history = getHistory();\n' +
'  const dataStr = JSON.stringify(history, null, 2);\n' +
'  const dataBlob = new Blob([dataStr], { type: "application/json" });\n' +
'  const url = URL.createObjectURL(dataBlob);\n' +
'  const link = document.createElement("a");\n' +
'  link.href = url;\n' +
'  link.download = "flux-ai-history-" + Date.now() + ".json";\n' +
'  link.click();\n' +
'  URL.revokeObjectURL(url);\n' +
'});\n' +
'\n' +
'// 模態框\n' +
'function showImageModal(url, prompt, model, size, style, seed) {\n' +
'  document.getElementById("modalImage").src = url;\n' +
'  document.getElementById("modalPrompt").textContent = prompt;\n' +
'  document.getElementById("modalModel").textContent = model;\n' +
'  document.getElementById("modalSize").textContent = size;\n' +
'  document.getElementById("modalStyle").textContent = style;\n' +
'  document.getElementById("modalSeed").textContent = seed;\n' +
'  document.getElementById("imageModal").style.display = "flex";\n' +
'}\n' +
'\n' +
'document.getElementById("closeModal").addEventListener("click", () => {\n' +
'  document.getElementById("imageModal").style.display = "none";\n' +
'});\n' +
'\n' +
'document.getElementById("imageModal").addEventListener("click", (e) => {\n' +
'  if (e.target.id === "imageModal") {\n' +
'    document.getElementById("imageModal").style.display = "none";\n' +
'  }\n' +
'});\n' +
'\n' +
'updateHistoryCount();\n' +
'\n';
}

function getJavaScriptFormSubmit(t) {
  return '// 表單提交處理（含計時器）\n' +
'const form = document.getElementById("generateForm");\n' +
'const resultsDiv = document.getElementById("results");\n' +
'const generateBtn = document.getElementById("generateBtn");\n' +
'\n' +
'form.addEventListener("submit", async (e) => {\n' +
'  e.preventDefault();\n' +
'  \n' +
'  const prompt = document.getElementById("prompt").value;\n' +
'  if (!prompt.trim()) {\n' +
'    alert("請輸入提示詞");\n' +
'    document.getElementById("prompt").focus();\n' +
'    return;\n' +
'  }\n' +
'  \n' +
'  const model = document.getElementById("model").value;\n' +
'  const sizePreset = document.getElementById("size").value;\n' +
'  const style = document.getElementById("style").value;\n' +
'  const qualityMode = document.getElementById("qualityMode").value;\n' +
'  const seed = parseInt(document.getElementById("seed").value);\n' +
'  const numOutputs = parseInt(document.getElementById("numOutputs").value);\n' +
'  const negativePrompt = document.getElementById("negativePrompt").value;\n' +
'  const autoOptimize = document.getElementById("autoOptimize").checked;\n' +
'  const autoHD = document.getElementById("autoHD").checked;\n' +
'  const refImagesInput = document.getElementById("referenceImages").value;\n' +
'  \n' +
'  let referenceImages = [];\n' +
'  if (refImagesInput.trim()) {\n' +
'    referenceImages = refImagesInput.split(",").map(url => url.trim()).filter(url => url);\n' +
'  }\n' +
'  \n' +
'  const sizeConfig = PRESET_SIZES[sizePreset] || PRESET_SIZES["square-1k"];\n' +
'  \n' +
'  generateBtn.disabled = true;\n' +
'  generateBtn.innerHTML = \'<div class="spinner"></div><span>生成中...</span>\';\n' +
'  \n' +
'  // ⏱️ 開始計時\n' +
'  timer.reset();\n' +
'  timer.start();\n' +
'  \n' +
'  resultsDiv.innerHTML = \'<div class="flex flex-col items-center justify-center py-16 px-4 text-center"><div class="spinner mb-4"></div><p class="text-sm font-medium mb-2">正在生成圖像，請稍候...</p><p class="text-xs text-muted-foreground">這可能需要幾秒鐘到一分鐘</p><p class="text-xs text-primary font-mono mt-2">⏱️ 已用時: <span id="inlineTimer">0.0</span> 秒</p></div>\';\n' +
'  \n' +
'  const inlineTimerInterval = setInterval(() => {\n' +
'    const inlineTimerEl = document.getElementById("inlineTimer");\n' +
'    if (inlineTimerEl) {\n' +
'      inlineTimerEl.textContent = timer.getElapsed().toFixed(1);\n' +
'    }\n' +
'  }, 100);\n' +
'  \n' +
'  try {\n' +
'    const response = await fetch("/_internal/generate", {\n' +
'      method: "POST",\n' +
'      headers: { "Content-Type": "application/json" },\n' +
'      body: JSON.stringify({\n' +
'        prompt,\n' +
'        model,\n' +
'        width: sizeConfig.width,\n' +
'        height: sizeConfig.height,\n' +
'        style,\n' +
'        quality_mode: qualityMode,\n' +
'        seed: seed,\n' +
'        n: numOutputs,\n' +
'        negative_prompt: negativePrompt,\n' +
'        auto_optimize: autoOptimize,\n' +
'        auto_hd: autoHD,\n' +
'        reference_images: referenceImages\n' +
'      })\n' +
'    });\n' +
'    \n' +
'    clearInterval(inlineTimerInterval);\n' +
'    const totalTime = timer.stop();\n' +
'    \n' +
'    const contentType = response.headers.get("content-type");\n' +
'    \n' +
'    if (!response.ok) {\n' +
'      const errorText = await response.text();\n' +
'      let errorMsg = "生成失敗";\n' +
'      try {\n' +
'        const errorJson = JSON.parse(errorText);\n' +
'        errorMsg = errorJson.error?.message || errorMsg;\n' +
'      } catch (e) {\n' +
'        errorMsg = errorText.substring(0, 200);\n' +
'      }\n' +
'      \n' +
'      resultsDiv.innerHTML = \'<div class="rounded-lg border border-destructive/20 bg-destructive/10 p-4"><div class="flex items-start gap-3"><div class="rounded-lg bg-destructive/20 p-2"><span class="text-2xl">❌</span></div><div class="flex-1"><h4 class="text-sm font-semibold text-destructive mb-1">生成失敗</h4><p class="text-xs text-muted-foreground">\' + errorMsg + \'</p><p class="text-xs text-muted-foreground mt-2">⏱️ 用時: \' + totalTime.toFixed(2) + \' 秒</p></div></div></div>\';\n' +
'      return;\n' +
'    }\n' +
'    \n' +
'    if (contentType && contentType.startsWith("image/")) {\n' +
'      const imageBlob = await response.blob();\n' +
'      const imageUrl = URL.createObjectURL(imageBlob);\n' +
'      const modelUsed = response.headers.get("X-Model") || model;\n' +
'      const seedUsed = parseInt(response.headers.get("X-Seed")) || seed;\n' +
'      const widthUsed = parseInt(response.headers.get("X-Width")) || sizeConfig.width;\n' +
'      const heightUsed = parseInt(response.headers.get("X-Height")) || sizeConfig.height;\n' +
'      const imageId = response.headers.get("X-Image-ID");\n' +
'      const imagePublicUrl = response.headers.get("X-Image-URL");\n' +
'      const styleName = response.headers.get("X-Style-Name") || style;\n' +
'      const generationMode = response.headers.get("X-Generation-Mode") || "文生圖";\n' +
'      \n' +
'      addToHistory({\n' +
'        url: imagePublicUrl || imageUrl,\n' +
'        imageId: imageId,\n' +
'        prompt: prompt,\n' +
'        model: modelUsed,\n' +
'        seed: seedUsed,\n' +
'        width: widthUsed,\n' +
'        height: heightUsed,\n' +
'        style: style,\n' +
'        styleName: styleName,\n' +
'        qualityMode: qualityMode,\n' +
'        generationMode: generationMode,\n' +
'        generationTime: totalTime\n' +
'      });\n' +
'      \n' +
'      resultsDiv.innerHTML = \'<div class="space-y-4"><div class="rounded-lg border border-primary/20 bg-primary/5 p-4"><div class="flex items-start gap-3"><div class="rounded-lg bg-primary/10 p-2"><span class="text-2xl">✅</span></div><div class="flex-1"><h4 class="text-sm font-semibold text-primary mb-1">生成成功！</h4><p class="text-xs text-muted-foreground">已生成 1 張圖片並保存到歷史記錄</p><p class="text-xs text-muted-foreground mt-1">⏱️ 總用時: \' + totalTime.toFixed(2) + \' 秒</p></div></div></div><div class="grid grid-cols-1 gap-4"><div class="rounded-lg border border-border bg-card overflow-hidden"><div class="relative aspect-square cursor-pointer" onclick="showImageModal(\\\'\' + imageUrl + \'\\\', \\\'\' + prompt.replace(/\'/g, "\\\\\\'") + \'\\\', \\\'\' + modelUsed + \'\\\', \\\'\' + widthUsed + \'x\' + heightUsed + \'\\\', \\\'\' + styleName.replace(/\'/g, "\\\\\\'") + \'\\\', \\\'\' + seedUsed + \'\\\')"><img src="\' + imageUrl + \'" alt="Generated image" class="w-full h-full object-cover"></div><div class="p-4 space-y-3"><div class="flex flex-wrap gap-2"><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">\' + modelUsed + \'</span><span class="inline-flex items-center rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">\' + styleName + \'</span><span class="inline-flex items-center rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">\' + widthUsed + \'x\' + heightUsed + \'</span><span class="inline-flex items-center rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-500/20">Seed: \' + seedUsed + \'</span><span class="inline-flex items-center rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">\' + generationMode + \'</span><span class="inline-flex items-center rounded-md bg-pink-500/10 px-2.5 py-1 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-500/20">⏱️ \' + totalTime.toFixed(2) + \'s</span></div><p class="text-sm text-muted-foreground line-clamp-3">\' + prompt + \'</p><div class="flex gap-2"><a href="\' + (imagePublicUrl || imageUrl) + \'" download="flux-ai-\' + seedUsed + \'.png" class="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg><span>下載圖像</span></a><button onclick="document.querySelector(\\\\\\'[data-page=\\\\\\"history\\\\\\"]\\\\\\'").click()" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><span>查看歷史</span></button></div></div></div></div></div>\';\n' +
'    } else if (contentType && contentType.includes("application/json")) {\n' +
'      const data = await response.json();\n' +
'      \n' +
'      if (data.data && Array.isArray(data.data)) {\n' +
'        data.data.forEach(item => {\n' +
'          const styleName = STYLE_PRESETS[item.style]?.name || item.style;\n' +
'          addToHistory({\n' +
'            url: item.imageUrl,\n' +
'            imageId: item.imageId,\n' +
'            prompt: prompt,\n' +
'            model: item.model,\n' +
'            seed: item.seed,\n' +
'            width: item.width,\n' +
'            height: item.height,\n' +
'            style: item.style,\n' +
'            styleName: styleName,\n' +
'            qualityMode: item.quality_mode,\n' +
'            generationMode: item.generation_mode,\n' +
'            generationTime: totalTime\n' +
'          });\n' +
'        });\n' +
'        \n' +
'        const imagesHTML = data.data.map((item, index) => {\n' +
'          const styleName = STYLE_PRESETS[item.style]?.name || item.style;\n' +
'          return \'<div class="rounded-lg border border-border bg-card overflow-hidden"><div class="relative aspect-square cursor-pointer" onclick="showImageModal(\\\'\' + item.imageUrl + \'\\\', \\\'\' + prompt.replace(/\'/g, "\\\\\\'") + \'\\\', \\\'\' + item.model + \'\\\', \\\'\' + item.width + \'x\' + item.height + \'\\\', \\\'\' + styleName.replace(/\'/g, "\\\\\\'") + \'\\\', \\\'\' + item.seed + \'\\\')"><img src="\' + item.imageUrl + \'" alt="Generated image \' + (index + 1) + \'" class="w-full h-full object-cover"></div><div class="p-4 space-y-3"><div class="flex flex-wrap gap-2"><span class="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">\' + item.model + \'</span><span class="inline-flex items-center rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">\' + styleName + \'</span><span class="inline-flex items-center rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">\' + item.width + \'x\' + item.height + \'</span><span class="inline-flex items-center rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-500/20">Seed: \' + item.seed + \'</span><span class="inline-flex items-center rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">\' + (item.generation_mode || "文生圖") + \'</span></div><div class="flex gap-2"><a href="\' + item.imageUrl + \'" download="flux-ai-\' + item.seed + \'.png" class="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-3 gap-2 text-xs"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg><span>下載</span></a></div></div></div>\';\n' +
'        }).join("");\n' +
'        \n' +
'        resultsDiv.innerHTML = \'<div class="space-y-4"><div class="rounded-lg border border-primary/20 bg-primary/5 p-4"><div class="flex items-start gap-3"><div class="rounded-lg bg-primary/10 p-2"><span class="text-2xl">✅</span></div><div class="flex-1"><h4 class="text-sm font-semibold text-primary mb-1">生成成功！</h4><p class="text-xs text-muted-foreground">已生成 \' + data.data.length + \' 張圖片並保存到歷史記錄</p><p class="text-xs text-muted-foreground mt-1">⏱️ 總用時: \' + totalTime.toFixed(2) + \' 秒</p></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4">\' + imagesHTML + \'</div></div>\';\n' +
'      }\n' +
'    }\n' +
'    \n' +
'  } catch (error) {\n' +
'    clearInterval(inlineTimerInterval);\n' +
'    timer.stop();\n' +
'    \n' +
'    resultsDiv.innerHTML = \'<div class="rounded-lg border border-destructive/20 bg-destructive/10 p-4"><div class="flex items-start gap-3"><div class="rounded-lg bg-destructive/20 p-2"><span class="text-2xl">❌</span></div><div class="flex-1"><h4 class="text-sm font-semibold text-destructive mb-1">網路錯誤</h4><p class="text-xs text-muted-foreground">\' + error.message + \'</p></div></div></div>\';\n' +
'  } finally {\n' +
'    generateBtn.disabled = false;\n' +
'    generateBtn.innerHTML = \'<span class="text-2xl">🎨</span><span class="text-lg">開始生成</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>\';\n' +
'  }\n' +
'});\n';
}
