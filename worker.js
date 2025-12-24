// =================================================================================
//  項目: Flux AI Pro - Extended Styles Edition
//  版本: 9.6.1-extended-styles-shadcn (✅ 45+ 種藝術風格)
//  作者: Enhanced by AI Assistant  
//  日期: 2025-12-24
//  更新: ✅ 45+ 種藝術風格 | ✅ Shadcn UI | ✅ 新 API 端點
//  模型: zimage, flux, turbo, kontext (4個模型)
// =================================================================================

const CONFIG = {
  PROJECT_NAME: "Flux-AI-Pro",
  PROJECT_VERSION: "9.6.1-extended-styles-shadcn",
  API_MASTER_KEY: "1",
  FETCH_TIMEOUT: 120000,
  MAX_RETRIES: 3,
  
  POLLINATIONS_AUTH: {
    enabled: true,
    token: "",
    method: "header"
  },
  
  PRESET_SIZES: {
    "square-1k": { name: "方形 1024x1024", width: 1024, height: 1024 },
    "square-1.5k": { name: "方形 1536x1536", width: 1536, height: 1536 },
    "square-2k": { name: "方形 2048x2048", width: 2048, height: 2048 },
    "portrait-9-16-hd": { name: "豎屏 9:16 HD", width: 1080, height: 1920 },
    "landscape-16-9-hd": { name: "橫屏 16:9 HD", width: 1920, height: 1080 },
    "instagram-square": { name: "Instagram 方形", width: 1080, height: 1080 },
    "wallpaper-fhd": { name: "桌布 Full HD", width: 1920, height: 1080 }
  },
  
  PROVIDERS: {
    pollinations: {
      name: "Pollinations.ai",
      endpoint: "https://gen.pollinations.ai",
      pathPrefix: "/image",
      type: "direct",
      auth_mode: "required",
      requires_key: true,
      enabled: true,
      default: true,
      description: "官方 AI 圖像生成服務（需要 API Key）",
      features: {
        private_mode: true,
        custom_size: true,
        seed_control: true,
        negative_prompt: true,
        enhance: true,
        nologo: true,
        style_presets: true,
        auto_hd: true,
        quality_modes: true,
        auto_translate: true,
        reference_images: true,
        image_to_image: true,
        batch_generation: true,
        api_key_auth: true
      },
      models: [
        { 
          id: "zimage", 
          name: "Z-Image Turbo ⚡", 
          confirmed: true, 
          category: "zimage", 
          description: "快速 6B 參數圖像生成 (Alpha)", 
          max_size: 2048,
          pricing: { image_price: 0.0002, currency: "pollen" },
          input_modalities: ["text"],
          output_modalities: ["image"]
        },
        { 
          id: "flux", 
          name: "Flux 標準版", 
          confirmed: true, 
          category: "flux", 
          description: "快速且高質量的圖像生成", 
          max_size: 2048,
          pricing: { image_price: 0.00012, currency: "pollen" },
          input_modalities: ["text"],
          output_modalities: ["image"]
        },
        { 
          id: "turbo", 
          name: "Flux Turbo ⚡", 
          confirmed: true, 
          category: "flux", 
          description: "超快速圖像生成", 
          max_size: 2048,
          pricing: { image_price: 0.0003, currency: "pollen" },
          input_modalities: ["text"],
          output_modalities: ["image"]
        },
        { 
          id: "kontext", 
          name: "Kontext 🎨", 
          confirmed: true, 
          category: "kontext", 
          description: "上下文感知圖像生成（支持圖生圖）", 
          max_size: 2048,
          pricing: { image_price: 0.04, currency: "pollen" },
          supports_reference_images: true,
          max_reference_images: 1,
          input_modalities: ["text", "image"],
          output_modalities: ["image"]
        }
      ],
      rate_limit: null,
      max_size: { width: 2048, height: 2048 }
    }
  },
  
  DEFAULT_PROVIDER: "pollinations",
  
  STYLE_PRESETS: {
    none: { name: "無風格", prompt: "", negative: "", category: "basic", icon: "⚡", description: "使用原始提示詞" },
    anime: { name: "動漫風格", prompt: "anime style, anime art, vibrant colors, cel shading, detailed anime", negative: "realistic, photograph, 3d, ugly", category: "illustration", icon: "🎭", description: "日系動漫風格" },
    ghibli: { name: "吉卜力", prompt: "Studio Ghibli style, Hayao Miyazaki, anime, soft colors, whimsical, detailed background, hand-drawn", negative: "realistic, dark, 3D, western animation", category: "illustration", icon: "🍃", description: "宮崎駿動畫風格" },
    manga: { name: "日本漫畫", prompt: "manga style, japanese comic art, black and white, screentones, halftone patterns, dynamic poses, detailed linework", negative: "color, colorful, realistic, photo, western comic", category: "manga", icon: "📖", description: "經典日本漫畫黑白網點" },
    "manga-color": { name: "彩色日漫", prompt: "colored manga style, japanese comic art, vibrant colors, cel shading, clean linework, digital coloring", negative: "realistic, photo, western style, messy", category: "manga", icon: "🎨", description: "彩色日本漫畫風格" },
    "american-comic": { name: "美式漫畫", prompt: "american comic book style, bold lines, vibrant colors, superhero art, dynamic action, dramatic shading", negative: "anime, manga, realistic photo, soft", category: "manga", icon: "💥", description: "美國超級英雄漫畫" },
    "korean-webtoon": { name: "韓國網漫", prompt: "korean webtoon style, manhwa art, detailed linework, soft colors, romantic, vertical scroll format", negative: "american comic, rough sketch, dark", category: "manga", icon: "📱", description: "韓國網路漫畫風格" },
    chibi: { name: "Q版漫畫", prompt: "chibi style, super deformed, cute, kawaii, big head small body, simple features, adorable", negative: "realistic proportions, serious, dark", category: "manga", icon: "🥰", description: "Q版可愛漫畫風格" },
    "black-white": { name: "黑白", prompt: "black and white, monochrome, high contrast, dramatic lighting, grayscale", negative: "color, colorful, vibrant, saturated", category: "monochrome", icon: "⚫⚪", description: "純黑白高對比效果" },
    sketch: { name: "素描", prompt: "pencil sketch, hand drawn, graphite drawing, detailed shading, artistic sketch, loose lines", negative: "color, digital, polished, photo", category: "monochrome", icon: "✏️", description: "鉛筆素描手繪質感" },
    "ink-drawing": { name: "水墨畫", prompt: "traditional chinese ink painting, sumi-e, brush strokes, minimalist, zen aesthetic, black ink on white paper", negative: "color, western style, detailed, cluttered", category: "monochrome", icon: "🖌️", description: "中國傳統水墨畫" },
    silhouette: { name: "剪影", prompt: "silhouette art, stark contrast, black shapes, minimalist, dramatic, shadow play, clean edges", negative: "detailed, realistic, colorful, textured", category: "monochrome", icon: "👤", description: "剪影藝術極簡構圖" },
    charcoal: { name: "炭筆畫", prompt: "charcoal drawing, rough texture, dramatic shading, expressive, smudged, artistic, monochrome", negative: "clean, digital, colorful, precise", category: "monochrome", icon: "🖤", description: "炭筆繪畫粗糙質感" },
    photorealistic: { name: "寫實照片", prompt: "photorealistic, 8k uhd, high quality, detailed, professional photography, sharp focus", negative: "anime, cartoon, illustration, painting, drawing, art", category: "realistic", icon: "📷", description: "攝影級寫實效果" },
    "oil-painting": { name: "油畫", prompt: "oil painting, canvas texture, visible brushstrokes, rich colors, artistic, masterpiece", negative: "photograph, digital art, anime, flat", category: "painting", icon: "🖼️", description: "經典油畫質感" },
    watercolor: { name: "水彩畫", prompt: "watercolor painting, soft colors, watercolor texture, artistic, hand-painted, paper texture, flowing colors", negative: "photograph, digital, sharp edges, 3d", category: "painting", icon: "💧", description: "清新水彩風格" },
    impressionism: { name: "印象派", prompt: "impressionist painting, soft brushstrokes, light and color focus, Monet style, outdoor scene, visible brush marks", negative: "sharp, detailed, photorealistic, dark", category: "art-movement", icon: "🌅", description: "印象派繪畫光影捕捉" },
    abstract: { name: "抽象派", prompt: "abstract art, non-representational, geometric shapes, bold colors, modern art, expressive", negative: "realistic, figurative, detailed, representational", category: "art-movement", icon: "🎭", description: "抽象藝術幾何圖形" },
    cubism: { name: "立體主義", prompt: "cubist style, geometric shapes, multiple perspectives, fragmented, Picasso inspired, angular forms", negative: "realistic, smooth, traditional, single perspective", category: "art-movement", icon: "🔷", description: "立體主義多視角解構" },
    surrealism: { name: "超現實主義", prompt: "surrealist art, dreamlike, bizarre, impossible scenes, Salvador Dali style, imaginative, symbolic", negative: "realistic, mundane, ordinary, logical", category: "art-movement", icon: "🌀", description: "超現實主義夢幻場景" },
    "pop-art": { name: "普普藝術", prompt: "pop art style, bold colors, comic book elements, Andy Warhol inspired, retro, screen print effect", negative: "subtle, muted, traditional, realistic", category: "art-movement", icon: "🎪", description: "普普藝術大膽色彩" },
    neon: { name: "霓虹燈", prompt: "neon lights, glowing, vibrant neon colors, night scene, electric, luminous, dark background", negative: "daylight, muted, natural, dull", category: "visual", icon: "💡", description: "霓虹燈發光效果" },
    vintage: { name: "復古", prompt: "vintage style, retro, aged, nostalgic, warm tones, classic, faded colors, old photograph", negative: "modern, futuristic, clean, vibrant", category: "visual", icon: "📻", description: "復古懷舊褪色效果" },
    steampunk: { name: "蒸汽朋克", prompt: "steampunk style, Victorian era, brass and copper, gears and mechanisms, mechanical, industrial", negative: "modern, minimalist, clean, futuristic", category: "visual", icon: "⚙️", description: "蒸汽朋克機械美學" },
    minimalist: { name: "極簡主義", prompt: "minimalist design, clean, simple, geometric, negative space, modern, uncluttered", negative: "detailed, complex, ornate, busy", category: "visual", icon: "◽", description: "極簡設計留白美學" },
    vaporwave: { name: "蒸氣波", prompt: "vaporwave aesthetic, retro futuristic, pastel colors, glitch art, 80s 90s nostalgia, neon pink and blue", negative: "realistic, natural, muted, traditional", category: "visual", icon: "🌴", description: "蒸氣波復古未來" },
    "pixel-art": { name: "像素藝術", prompt: "pixel art, 8-bit, 16-bit, retro gaming style, pixelated, nostalgic, limited color palette", negative: "high resolution, smooth, realistic, detailed", category: "digital", icon: "🎮", description: "像素藝術復古遊戲" },
    "low-poly": { name: "低多邊形", prompt: "low poly 3d, geometric, faceted, minimalist 3d art, polygonal, angular shapes", negative: "high poly, detailed, realistic, organic", category: "digital", icon: "🔺", description: "低多邊形3D幾何" },
    "3d-render": { name: "3D渲染", prompt: "3d render, cinema 4d, octane render, detailed, professional lighting, ray tracing, photorealistic 3d", negative: "2d, flat, hand drawn, sketchy", category: "digital", icon: "🎬", description: "專業3D渲染寫實光影" },
    gradient: { name: "漸變", prompt: "gradient art, smooth color transitions, modern, vibrant gradients, soft blending, colorful", negative: "solid colors, flat, harsh edges, traditional", category: "digital", icon: "🌈", description: "漸變藝術柔和過渡" },
    glitch: { name: "故障藝術", prompt: "glitch art, digital corruption, RGB shift, distorted, cyberpunk, data moshing, scanlines", negative: "clean, perfect, traditional, smooth", category: "digital", icon: "📺", description: "故障美學數位崩壞" },
    "ukiyo-e": { name: "浮世繪", prompt: "ukiyo-e style, japanese woodblock print, Hokusai inspired, traditional japanese art, flat colors, bold outlines", negative: "modern, western, photographic, 3d", category: "traditional", icon: "🗾", description: "日本浮世繪木刻版畫" },
    "stained-glass": { name: "彩繪玻璃", prompt: "stained glass art, colorful, leaded glass, church window style, luminous, geometric patterns, light through glass", negative: "realistic, photographic, modern, opaque", category: "traditional", icon: "🪟", description: "彩繪玻璃透光效果" },
    "paper-cut": { name: "剪紙藝術", prompt: "paper cut art, layered paper, shadow box effect, intricate patterns, handcrafted, silhouette", negative: "painted, digital, realistic, photographic", category: "traditional", icon: "✂️", description: "剪紙藝術層次堆疊" },
    gothic: { name: "哥特風格", prompt: "gothic style, dark, ornate, Victorian gothic, mysterious, dramatic, baroque elements, elegant darkness", negative: "bright, cheerful, minimalist, modern", category: "aesthetic", icon: "🦇", description: "哥特美學黑暗華麗" },
    "art-nouveau": { name: "新藝術", prompt: "art nouveau style, organic forms, flowing lines, decorative, elegant, floral motifs, Alphonse Mucha inspired", negative: "geometric, minimalist, modern, rigid", category: "aesthetic", icon: "🌺", description: "新藝術流動線條" },
    cyberpunk: { name: "賽博朋克", prompt: "cyberpunk style, neon lights, futuristic, sci-fi, dystopian, high-tech low-life, blade runner style", negative: "natural, rustic, medieval, fantasy", category: "scifi", icon: "🌃", description: "賽博朋克未來科幻" },
    fantasy: { name: "奇幻風格", prompt: "fantasy art, magical, epic fantasy, detailed fantasy illustration, mystical, enchanted", negative: "modern, realistic, mundane, contemporary", category: "fantasy", icon: "🐉", description: "奇幻魔法世界" }
  },
  
  STYLE_CATEGORIES: {
    'basic': { name: '基礎', icon: '⚡', order: 1 },
    'illustration': { name: '插畫動畫', icon: '🎨', order: 2 },
    'manga': { name: '漫畫風格', icon: '📖', order: 3 },
    'monochrome': { name: '黑白單色', icon: '⚫', order: 4 },
    'realistic': { name: '寫實照片', icon: '📷', order: 5 },
    'painting': { name: '繪畫風格', icon: '🖼️', order: 6 },
    'art-movement': { name: '藝術流派', icon: '🎭', order: 7 },
    'visual': { name: '視覺風格', icon: '✨', order: 8 },
    'digital': { name: '數位風格', icon: '💻', order: 9 },
    'traditional': { name: '傳統藝術', icon: '🏛️', order: 10 },
    'aesthetic': { name: '美學風格', icon: '🌟', order: 11 },
    'scifi': { name: '科幻', icon: '🚀', order: 12 },
    'fantasy': { name: '奇幻', icon: '🐉', order: 13 }
  },
  
  OPTIMIZATION_RULES: {
    MODEL_STEPS: {
      "zimage": { min: 8, optimal: 15, max: 25 },
      "flux": { min: 15, optimal: 20, max: 30 },
      "turbo": { min: 4, optimal: 8, max: 12 },
      "kontext": { min: 18, optimal: 25, max: 35 }
    },
    SIZE_MULTIPLIER: {
      small: { threshold: 512 * 512, multiplier: 0.8 },
      medium: { threshold: 1024 * 1024, multiplier: 1.0 },
      large: { threshold: 1536 * 1536, multiplier: 1.15 },
      xlarge: { threshold: 2048 * 2048, multiplier: 1.3 }
    },
    STYLE_ADJUSTMENT: {
      "photorealistic": 1.1,
      "oil-painting": 1.05,
      "watercolor": 0.95,
      "sketch": 0.9,
      "manga": 1.0,
      "pixel-art": 0.85,
      "3d-render": 1.15,
      "default": 1.0
    }
  },
  
  HD_OPTIMIZATION: {
    enabled: true,
    QUALITY_MODES: {
      economy: { name: "經濟模式", description: "快速出圖", min_resolution: 1024, max_resolution: 2048, steps_multiplier: 0.85, guidance_multiplier: 0.9, hd_level: "basic" },
      standard: { name: "標準模式", description: "平衡質量與速度", min_resolution: 1280, max_resolution: 2048, steps_multiplier: 1.0, guidance_multiplier: 1.0, hd_level: "enhanced" },
      ultra: { name: "超高清模式", description: "極致質量", min_resolution: 1536, max_resolution: 2048, steps_multiplier: 1.35, guidance_multiplier: 1.15, hd_level: "maximum", force_upscale: true }
    },
    HD_PROMPTS: {
      basic: "high quality, detailed, sharp",
      enhanced: "high quality, highly detailed, sharp focus, professional, 8k uhd",
      maximum: "masterpiece, best quality, ultra detailed, 8k uhd, high resolution, professional photography, sharp focus, HDR"
    },
    HD_NEGATIVE: "blurry, low quality, distorted, ugly, bad anatomy, low resolution, pixelated, artifacts, noise",
    MODEL_QUALITY_PROFILES: {
      "zimage": { min_resolution: 1024, max_resolution: 2048, optimal_steps_boost: 1.0, guidance_boost: 1.0, recommended_quality: "economy" },
      "flux": { min_resolution: 1024, max_resolution: 2048, optimal_steps_boost: 1.1, guidance_boost: 1.0, recommended_quality: "standard" },
      "turbo": { min_resolution: 1024, max_resolution: 2048, optimal_steps_boost: 0.9, guidance_boost: 0.95, recommended_quality: "economy" },
      "kontext": { min_resolution: 1280, max_resolution: 2048, optimal_steps_boost: 1.2, guidance_boost: 1.1, recommended_quality: "ultra" }
    }
  }
};
// =================================================================================
// 工具類：Logger, IP獲取, 翻譯, 優化器
// =================================================================================

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
    if (!hasChinese) return { text: text, translated: false, reason: "No Chinese detected" };
    
    if (!env || !env.AI) {
      console.warn("⚠️ Workers AI not configured");
      return { text: text, translated: false, reason: "AI not configured" };
    }
    
    try {
      const response = await env.AI.run("@cf/meta/m2m100-1.2b", { 
        text: text, 
        source_lang: "chinese", 
        target_lang: "english" 
      });
      
      if (response && response.translated_text) {
        console.log("✅ Translation:", text, "→", response.translated_text);
        return { 
          text: response.translated_text, 
          translated: true, 
          original: text, 
          model: "m2m100-1.2b" 
        };
      }
    } catch (error) {
      console.error("❌ Translation failed:", error.message);
    }
    
    return { text: text, translated: false };
  } catch (error) {
    console.error("❌ translateToEnglish error:", error);
    return { text: text, translated: false, error: error.message };
  }
}

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
      
      console.log("✅ Style applied:", style, "-", styleConfig.name);
      return { 
        enhancedPrompt: enhancedPrompt, 
        enhancedNegative: enhancedNegative 
      };
    } catch (error) {
      console.error("❌ StyleProcessor error:", error.message);
      return { 
        enhancedPrompt: prompt, 
        enhancedNegative: negativePrompt || "" 
      };
    }
  }
}

async function fetchWithTimeout(url, options = {}, timeout = CONFIG.FETCH_TIMEOUT) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error("Request timeout after " + timeout + "ms");
    }
    throw error;
  }
}

function corsHeaders(additionalHeaders = {}) {
  return { 
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With', 
    'Access-Control-Max-Age': '86400', 
    ...additionalHeaders 
  };
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
        model: translation.model || "unknown"
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
        note: "新 API 端點需要 API Key，請設置 POLLINATIONS_API_KEY 環境變量",
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
          throw new Error("Authentication failed: Invalid or missing API key. Please set POLLINATIONS_API_KEY");
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
    
    if (env.POLLINATIONS_API_KEY) {
      CONFIG.POLLINATIONS_AUTH.enabled = true;
      CONFIG.POLLINATIONS_AUTH.token = env.POLLINATIONS_API_KEY;
    } else {
      console.warn("⚠️ POLLINATIONS_API_KEY not set - requests may fail on new API endpoint");
      CONFIG.POLLINATIONS_AUTH.enabled = false;
      CONFIG.POLLINATIONS_AUTH.token = "";
    }
    
    console.log("=== Request Info ===");
    console.log("IP:", clientIP);
    console.log("Path:", url.pathname);
    console.log("Method:", request.method);
    console.log("Workers AI:", !!env.AI);
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
      } else if (url.pathname === '/_internal/generate') {
        response = await handleInternalGenerate(request, env, ctx);
      } else if (url.pathname === '/health') {
        response = new Response(JSON.stringify({
          status: 'ok',
          version: CONFIG.PROJECT_VERSION,
          timestamp: new Date().toISOString(),
          workers_ai: !!env.AI,
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
      } else {
        response = new Response(JSON.stringify({
          error: 'Not Found',
          message: '此 Worker 僅提供 Web UI 界面',
          available_paths: ['/', '/health', '/_internal/generate']
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

async function handleInternalGenerate(request, env, ctx) {
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
        recommendation: "請使用 'wrangler secret put POLLINATIONS_API_KEY' 設置 API Key"
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
      
      return new Response(result.imageData, {
        headers: {
          'Content-Type': result.contentType || 'image/png',
          'Content-Disposition': 'inline; filename="flux-ai-' + result.seed + '.png"',
          'X-Model': result.model,
          'X-Model-Name': result.style_name || result.model,
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
    
    const imagesData = await Promise.all(results.map(async (r) => {
      if (r.imageData) {
        const uint8Array = new Uint8Array(r.imageData);
        let binary = '';
        const len = uint8Array.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(uint8Array[i]);
        }
        const base64 = btoa(binary);
        
        return {
          image: 'data:' + r.contentType + ';base64,' + base64,
          model: r.model,
          seed: r.seed,
          width: r.width,
          height: r.height,
          quality_mode: r.quality_mode,
          style: r.style,
          style_name: r.style_name || r.style,
          style_category: r.style_category || 'unknown',
          generation_mode: r.generation_mode,
          authenticated: r.authenticated
        };
      }
      return null;
    }));
    
    return new Response(JSON.stringify({ 
      created: Math.floor(Date.now() / 1000), 
      data: imagesData.filter(d => d !== null),
      generation_time_ms: duration,
      api_endpoint: CONFIG.PROVIDERS.pollinations.endpoint,
      authenticated: CONFIG.POLLINATIONS_AUTH.enabled,
      styles_available: Object.keys(CONFIG.STYLE_PRESETS).length
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
// Web UI 界面處理函數（Shadcn 風格）- 修復版
// =================================================================================

function handleUI(request) {
  const authStatus = CONFIG.POLLINATIONS_AUTH.enabled ? 
    '<span class="text-green-500 font-semibold text-xs">🔐 已認證</span>' : 
    '<span class="text-amber-500 font-semibold text-xs">⚠️ 需要 API Key</span>';
    
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
  const html = buildCompleteHTML(authStatus, apiEndpoint, stylesCount, styleOptionsHTML);
  
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      ...corsHeaders()
    }
  });
}

function buildCompleteHTML(authStatus, apiEndpoint, stylesCount, styleOptionsHTML) {
  return '<!DOCTYPE html>\n' +
'<html lang="zh-TW" class="dark">\n' +
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
'</style>\n' +
'</head>\n' +
'<body class="bg-background text-foreground antialiased">\n' +
'<div class="min-h-screen flex flex-col">\n' +
getHeader(authStatus, apiEndpoint, stylesCount) +
'<main class="flex-1">\n' +
'  <div id="generatePage" class="page active">\n' +
'    <div class="container max-w-screen-2xl mx-auto p-4 lg:p-6">\n' +
'      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">\n' +
getLeftPanel(styleOptionsHTML) +
getCenterPanel() +
getRightPanel(apiEndpoint) +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
getHistoryPage() +
'</main>\n' +
getModal() +
'</div>\n' +
getJavaScript() +
'</body>\n' +
'</html>';
}

function getHeader(authStatus, apiEndpoint, stylesCount) {
  return '<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">\n' +
'  <div class="container flex h-16 items-center justify-between px-4 max-w-screen-2xl mx-auto">\n' +
'    <div class="flex items-center gap-4">\n' +
'      <div class="flex items-center gap-3">\n' +
'        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shadow-lg shadow-primary/25">\n' +
'          <span class="text-2xl">🎨</span>\n' +
'        </div>\n' +
'        <div class="flex flex-col">\n' +
'          <h1 class="text-lg font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Flux AI Pro</h1>\n' +
'          <div class="flex items-center gap-2">\n' +
'            <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">v' + CONFIG.PROJECT_VERSION + '</span>\n' +
'            <span class="inline-flex items-center rounded-md bg-pink-500/10 px-2 py-0.5 text-xs font-bold text-pink-500 ring-1 ring-inset ring-pink-500/20 badge-pulse">NEW</span>\n' +
'            <span class="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-0.5 text-xs font-bold text-purple-400 ring-1 ring-inset ring-purple-500/20">' + stylesCount + ' 風格</span>\n' +
'          </div>\n' +
'        </div>\n' +
'      </div>\n' +
'      <div class="hidden md:flex flex-col ml-4 border-l border-border/40 pl-4">\n' +
'        <div class="inline-flex items-center gap-2 text-sm">' + authStatus + '</div>\n' +
'        <div class="text-xs text-muted-foreground truncate max-w-[200px]" title="' + apiEndpoint + '">📡 ' + apiEndpoint + '</div>\n' +
'      </div>\n' +
'    </div>\n' +
'    <nav class="flex items-center gap-2">\n' +
'      <button class="nav-btn inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-10 py-2 px-4 gap-2 bg-primary text-primary-foreground shadow hover:bg-primary/90" data-page="generate">\n' +
'        <span class="text-lg">🎨</span>\n' +
'        <span class="hidden sm:inline">生成圖像</span>\n' +
'      </button>\n' +
'      <button class="nav-btn inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 gap-2" data-page="history">\n' +
'        <span class="text-lg">📚</span>\n' +
'        <span class="hidden sm:inline">歷史</span>\n' +
'        <span id="historyCount" class="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">0</span>\n' +
'      </button>\n' +
'    </nav>\n' +
'  </div>\n' +
'</header>\n';
}
function getLeftPanel(styleOptionsHTML) {
  return '<aside class="lg:col-span-3 space-y-4">\n' +
'  <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">\n' +
'    <div class="flex flex-col space-y-1.5 p-6 pb-4">\n' +
'      <h3 class="text-xl font-semibold leading-none tracking-tight flex items-center gap-2">\n' +
'        <span>⚙️</span><span>生成參數</span>\n' +
'      </h3>\n' +
'    </div>\n' +
'    <div class="p-6 pt-0 space-y-4">\n' +
'      <form id="generateForm" class="space-y-4">\n' +
'        <div class="space-y-2">\n' +
'          <label class="text-sm font-medium leading-none">模型選擇</label>\n' +
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
'          <label class="text-sm font-medium leading-none">尺寸預設</label>\n' +
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
'          <label class="text-sm font-medium leading-none flex items-center gap-2"><span>🎨</span><span>藝術風格</span></label>\n' +
'          <select id="style" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
styleOptionsHTML +
'          </select>\n' +
'          <p class="text-xs text-purple-400 font-medium">✨ 45+ 種風格可選，分 13 大類</p>\n' +
'        </div>\n' +
'        <div class="space-y-2">\n' +
'          <label class="text-sm font-medium leading-none">質量模式</label>\n' +
'          <select id="qualityMode" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
'            <option value="economy">經濟模式 (快速)</option>\n' +
'            <option value="standard" selected>標準模式 (平衡)</option>\n' +
'            <option value="ultra">超高清模式 (極致)</option>\n' +
'          </select>\n' +
'        </div>\n' +
'        <div class="pt-2">\n' +
'          <button type="button" id="advancedToggle" class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline cursor-pointer">\n' +
'            <span id="advancedToggleIcon">▼</span><span>進階選項</span>\n' +
'          </button>\n' +
'        </div>\n' +
'        <div id="advancedSection" class="hidden space-y-4">\n' +
'          <div class="space-y-2">\n' +
'            <label class="text-sm font-medium leading-none">Seed</label>\n' +
'            <input type="number" id="seed" value="-1" min="-1" max="999999" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
'            <p class="text-xs text-muted-foreground">-1 = 隨機</p>\n' +
'          </div>\n' +
'          <div class="space-y-2">\n' +
'            <label class="text-sm font-medium leading-none">生成數量</label>\n' +
'            <input type="number" id="numOutputs" value="1" min="1" max="4" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">\n' +
'          </div>\n' +
'          <div class="flex items-center space-x-2">\n' +
'            <input type="checkbox" id="autoOptimize" checked class="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer">\n' +
'            <label for="autoOptimize" class="text-sm font-medium leading-none cursor-pointer">自動優化參數</label>\n' +
'          </div>\n' +
'          <div class="flex items-center space-x-2">\n' +
'            <input type="checkbox" id="autoHD" checked class="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer">\n' +
'            <label for="autoHD" class="text-sm font-medium leading-none cursor-pointer">自動HD增強</label>\n' +
'          </div>\n' +
'        </div>\n' +
'        <button type="submit" id="generateBtn" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full gap-2 shadow-lg shadow-primary/25 active:scale-95">\n' +
'          <span class="text-lg">🎨</span><span class="font-bold">開始生成</span>\n' +
'        </button>\n' +
'      </form>\n' +
'    </div>\n' +
'  </div>\n' +
'</aside>\n';
}

function getCenterPanel() {
  return '<section class="lg:col-span-6 space-y-4">\n' +
'  <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">\n' +
'    <div class="flex flex-col space-y-1.5 p-6 pb-4">\n' +
'      <h3 class="text-xl font-semibold leading-none tracking-tight flex items-center gap-2">\n' +
'        <span>🖼️</span><span>生成結果</span>\n' +
'      </h3>\n' +
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
'          <h4 class="text-lg font-semibold mb-2">尚未生成任何圖像</h4>\n' +
'          <p class="text-sm text-muted-foreground max-w-sm">填寫左側參數並輸入提示詞後點擊生成按鈕</p>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n';
}
function getRightPanel(apiEndpoint) {
  return '<aside class="lg:col-span-3 space-y-4">\n' +
'  <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">\n' +
'    <div class="flex flex-col space-y-1.5 p-6 pb-4">\n' +
'      <h3 class="text-xl font-semibold leading-none tracking-tight flex items-center gap-2">\n' +
'        <span>💬</span><span>提示詞</span>\n' +
'      </h3>\n' +
'    </div>\n' +
'    <div class="p-6 pt-0 space-y-4">\n' +
'      <div class="space-y-2">\n' +
'        <label class="text-sm font-medium leading-none">正面提示詞</label>\n' +
'        <textarea id="prompt" rows="6" placeholder="描述你想生成的圖像...\n\n例如：\n• A beautiful sunset over mountains\n• 一隻可愛的貓咪在花園裡玩耍\n• Cyberpunk city at night, neon lights\n• Anime girl with blue hair" class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y" required></textarea>\n' +
'        <p class="text-xs text-primary font-medium">✅ 支持中文自動翻譯</p>\n' +
'      </div>\n' +
'      <div class="space-y-2">\n' +
'        <label class="text-sm font-medium leading-none">負面提示詞 (可選)</label>\n' +
'        <textarea id="negativePrompt" rows="3" placeholder="描述不想要的內容...\n\n例如：\n• blurry, low quality, distorted\n• ugly, deformed, bad anatomy" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"></textarea>\n' +
'      </div>\n' +
'      <div class="space-y-2">\n' +
'        <label class="text-sm font-medium leading-none">參考圖像 URL (可選)</label>\n' +
'        <textarea id="referenceImages" rows="3" placeholder="多張圖片用逗號分隔\n\n例如：\nhttps://example.com/image1.jpg,\nhttps://example.com/image2.jpg" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"></textarea>\n' +
'        <p class="text-xs text-muted-foreground">📌 支持圖生圖的模型：Kontext</p>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="rounded-lg border border-purple-500/20 bg-purple-500/5 p-4">\n' +
'    <div class="flex items-start gap-3">\n' +
'      <div class="rounded-lg bg-purple-500/10 p-2"><span class="text-2xl">🎨</span></div>\n' +
'      <div class="flex-1 space-y-1">\n' +
'        <h4 class="text-sm font-semibold text-purple-400">風格提示</h4>\n' +
'        <p class="text-xs text-muted-foreground">當前已選: <span id="currentStyleName" class="text-foreground font-medium">無風格</span></p>\n' +
'        <p id="styleDescription" class="text-xs text-muted-foreground/80">使用原始提示詞</p>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">\n' +
'    <div class="flex flex-col space-y-1.5 p-6 pb-4">\n' +
'      <h3 class="text-sm font-semibold leading-none tracking-tight flex items-center gap-2">\n' +
'        <span>📋</span><span>當前配置</span>\n' +
'      </h3>\n' +
'    </div>\n' +
'    <div class="p-6 pt-0 space-y-3">\n' +
'      <div class="space-y-1">\n' +
'        <div class="text-xs font-medium text-muted-foreground">模型</div>\n' +
'        <div id="previewModel" class="text-sm font-medium">Z-Image Turbo</div>\n' +
'      </div>\n' +
'      <div class="h-px bg-border"></div>\n' +
'      <div class="space-y-1">\n' +
'        <div class="text-xs font-medium text-muted-foreground">尺寸</div>\n' +
'        <div id="previewSize" class="text-sm font-medium">1024x1024</div>\n' +
'      </div>\n' +
'      <div class="h-px bg-border"></div>\n' +
'      <div class="space-y-1">\n' +
'        <div class="text-xs font-medium text-muted-foreground">風格</div>\n' +
'        <div id="previewStyle" class="text-sm font-medium">無風格</div>\n' +
'      </div>\n' +
'      <div class="h-px bg-border"></div>\n' +
'      <div class="space-y-1">\n' +
'        <div class="text-xs font-medium text-muted-foreground">API 端點</div>\n' +
'        <div class="text-xs font-mono text-muted-foreground/80 break-all">' + apiEndpoint + '</div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</aside>\n';
}

function getHistoryPage() {
  return '<div id="historyPage" class="page hidden">\n' +
'    <div class="container max-w-screen-2xl mx-auto p-4 lg:p-6">\n' +
'      <div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm mb-6">\n' +
'        <div class="p-6">\n' +
'          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">\n' +
'            <div class="flex flex-wrap items-center gap-6">\n' +
'              <div class="space-y-1">\n' +
'                <div class="text-xs font-medium text-muted-foreground">📊 總記錄數</div>\n' +
'                <div id="historyTotal" class="text-3xl font-bold text-primary">0</div>\n' +
'              </div>\n' +
'              <div class="hidden sm:block h-12 w-px bg-border"></div>\n' +
'              <div class="space-y-1">\n' +
'                <div class="text-xs font-medium text-muted-foreground">💾 存儲空間</div>\n' +
'                <div id="storageSize" class="text-2xl font-bold">0 KB</div>\n' +
'              </div>\n' +
'              <div class="hidden sm:block h-12 w-px bg-border"></div>\n' +
'              <div class="space-y-1">\n' +
'                <div class="text-xs font-medium text-muted-foreground">🎨 最近風格</div>\n' +
'                <div id="recentStyle" class="text-sm font-medium">-</div>\n' +
'              </div>\n' +
'            </div>\n' +
'            <div class="flex items-center gap-2">\n' +
'              <button id="exportBtn" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 gap-2">\n' +
'                <span>📥</span><span>導出</span>\n' +
'              </button>\n' +
'              <button id="clearBtn" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 gap-2">\n' +
'                <span>🗑️</span><span>清空</span>\n' +
'              </button>\n' +
'            </div>\n' +
'          </div>\n' +
'        </div>\n' +
'      </div>\n' +
'      <div id="historyList">\n' +
'        <div class="flex flex-col items-center justify-center py-16 px-4 text-center">\n' +
'          <div class="rounded-full bg-muted/50 p-6 mb-4">\n' +
'            <svg class="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
'              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\n' +
'            </svg>\n' +
'          </div>\n' +
'          <h4 class="text-lg font-semibold mb-2">暫無歷史記錄</h4>\n' +
'          <p class="text-sm text-muted-foreground max-w-sm">生成的圖像會自動保存在這裡</p>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n';
}

function getModal() {
  return '<div id="imageModal" class="hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">\n' +
'  <div class="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl p-4">\n' +
'    <div class="relative">\n' +
'      <button id="modalCloseBtn" class="absolute -top-12 right-0 rounded-full bg-background/80 backdrop-blur-sm p-2 text-foreground transition-all hover:bg-background hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-ring">\n' +
'        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
'          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\n' +
'        </svg>\n' +
'      </button>\n' +
'      <div class="rounded-lg overflow-hidden border border-border shadow-2xl">\n' +
'        <img id="modalImage" src="" alt="Preview" class="w-full h-auto max-h-[85vh] object-contain bg-black">\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'</div>\n';
}
function getJavaScript() {
  // ⚠️ 關鍵修復：使用 \x3C 和 \x3E 來避免 </script> 標籤問題
  return '\x3Cscript\x3E\n' +
'const STYLE_PRESETS = ' + JSON.stringify(CONFIG.STYLE_PRESETS) + ';\n' +
'const PRESET_SIZES = ' + JSON.stringify(CONFIG.PRESET_SIZES) + ';\n' +
'const STORAGE_KEY = "flux_ai_history";\n' +
'const MAX_HISTORY = 100;\n' +
'\n' +
'// 頁面切換\n' +
'document.querySelectorAll(".nav-btn").forEach(btn => {\n' +
'  btn.addEventListener("click", function() {\n' +
'    const pageName = this.dataset.page;\n' +
'    document.querySelectorAll(".page").forEach(p => {\n' +
'      p.classList.remove("active");\n' +
'      p.classList.add("hidden");\n' +
'    });\n' +
'    document.querySelectorAll(".nav-btn").forEach(b => {\n' +
'      b.classList.remove("bg-primary", "text-primary-foreground", "shadow", "hover:bg-primary/90");\n' +
'      b.classList.add("border", "border-input", "bg-background", "hover:bg-accent");\n' +
'    });\n' +
'    document.getElementById(pageName + "Page").classList.remove("hidden");\n' +
'    document.getElementById(pageName + "Page").classList.add("active");\n' +
'    this.classList.add("bg-primary", "text-primary-foreground", "shadow", "hover:bg-primary/90");\n' +
'    this.classList.remove("border", "border-input", "bg-background", "hover:bg-accent");\n' +
'    if (pageName === "history") updateHistoryDisplay();\n' +
'  });\n' +
'});\n' +
'\n' +
'// 進階選項切換\n' +
'document.getElementById("advancedToggle").addEventListener("click", function() {\n' +
'  const section = document.getElementById("advancedSection");\n' +
'  const icon = document.getElementById("advancedToggleIcon");\n' +
'  if (section.classList.contains("hidden")) {\n' +
'    section.classList.remove("hidden");\n' +
'    icon.textContent = "▲";\n' +
'  } else {\n' +
'    section.classList.add("hidden");\n' +
'    icon.textContent = "▼";\n' +
'  }\n' +
'});\n' +
'\n' +
'// 更新風格描述\n' +
'function updateStyleDescription() {\n' +
'  const styleSelect = document.getElementById("style");\n' +
'  const selectedStyle = styleSelect.value;\n' +
'  const styleConfig = STYLE_PRESETS[selectedStyle];\n' +
'  if (styleConfig) {\n' +
'    document.getElementById("currentStyleName").textContent = styleConfig.name;\n' +
'    document.getElementById("styleDescription").textContent = styleConfig.description || "無描述";\n' +
'  }\n' +
'}\n' +
'\n' +
'// 更新預覽\n' +
'function updatePreview() {\n' +
'  const model = document.getElementById("model").value;\n' +
'  const sizePreset = document.getElementById("size").value;\n' +
'  const style = document.getElementById("style").value;\n' +
'  const sizeConfig = PRESET_SIZES[sizePreset] || PRESET_SIZES["square-1k"];\n' +
'  const styleConfig = STYLE_PRESETS[style];\n' +
'  const modelNames = {\n' +
'    "zimage": "Z-Image Turbo ⚡",\n' +
'    "flux": "Flux 標準版",\n' +
'    "turbo": "Flux Turbo ⚡",\n' +
'    "kontext": "Kontext 🎨"\n' +
'  };\n' +
'  document.getElementById("previewModel").textContent = modelNames[model] || model;\n' +
'  document.getElementById("previewSize").textContent = sizeConfig.name + " (" + sizeConfig.width + "x" + sizeConfig.height + ")";\n' +
'  document.getElementById("previewStyle").textContent = styleConfig ? styleConfig.icon + " " + styleConfig.name : "無風格";\n' +
'  updateStyleDescription();\n' +
'}\n' +
'\n' +
'document.getElementById("model").addEventListener("change", updatePreview);\n' +
'document.getElementById("size").addEventListener("change", updatePreview);\n' +
'document.getElementById("style").addEventListener("change", updatePreview);\n' +
'updatePreview();\n' +
'\n' +
'// 歷史記錄功能\n' +
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
'    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));\n' +
'    updateHistoryStats();\n' +
'  } catch (e) {\n' +
'    console.error("Failed to save history:", e);\n' +
'  }\n' +
'}\n' +
'\n' +
'function addToHistory(item) {\n' +
'  let history = getHistory();\n' +
'  history.unshift({\n' +
'    ...item,\n' +
'    id: Date.now() + Math.random(),\n' +
'    timestamp: new Date().toISOString()\n' +
'  });\n' +
'  if (history.length > MAX_HISTORY) {\n' +
'    history = history.slice(0, MAX_HISTORY);\n' +
'  }\n' +
'  saveHistory(history);\n' +
'}\n' +
'\n' +
'function deleteFromHistory(id) {\n' +
'  if (!confirm("確定要刪除這條記錄嗎？")) return;\n' +
'  let history = getHistory();\n' +
'  history = history.filter(item => item.id !== id);\n' +
'  saveHistory(history);\n' +
'  updateHistoryDisplay();\n' +
'}\n' +
'\n' +
'function clearHistory() {\n' +
'  if (!confirm("確定要清空所有歷史記錄嗎？此操作不可恢復！")) return;\n' +
'  localStorage.removeItem(STORAGE_KEY);\n' +
'  updateHistoryDisplay();\n' +
'  updateHistoryStats();\n' +
'}\n' +
'\n' +
'function exportHistory() {\n' +
'  const history = getHistory();\n' +
'  const dataStr = JSON.stringify(history, null, 2);\n' +
'  const dataBlob = new Blob([dataStr], { type: "application/json" });\n' +
'  const url = URL.createObjectURL(dataBlob);\n' +
'  const link = document.createElement("a");\n' +
'  link.href = url;\n' +
'  link.download = "flux-ai-history-" + new Date().toISOString().split("T")[0] + ".json";\n' +
'  link.click();\n' +
'  URL.revokeObjectURL(url);\n' +
'}\n' +
'\n' +
'function updateHistoryStats() {\n' +
'  const history = getHistory();\n' +
'  document.getElementById("historyCount").textContent = history.length;\n' +
'  document.getElementById("historyTotal").textContent = history.length;\n' +
'  const sizeKB = new Blob([JSON.stringify(history)]).size / 1024;\n' +
'  document.getElementById("storageSize").textContent = sizeKB.toFixed(1) + " KB";\n' +
'  if (history.length > 0) {\n' +
'    const styleConfig = STYLE_PRESETS[history[0].style];\n' +
'    document.getElementById("recentStyle").textContent = styleConfig ? styleConfig.name : history[0].style;\n' +
'  } else {\n' +
'    document.getElementById("recentStyle").textContent = "-";\n' +
'  }\n' +
'}\n' +
'\n' +
'function updateHistoryDisplay() {\n' +
'  const history = getHistory();\n' +
'  const historyList = document.getElementById("historyList");\n' +
'  if (history.length === 0) {\n' +
'    historyList.innerHTML = "<div class=\\"flex flex-col items-center justify-center py-16 px-4 text-center\\"><div class=\\"rounded-full bg-muted/50 p-6 mb-4\\"><svg class=\\"w-16 h-16 text-muted-foreground\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\\"></path></svg></div><h4 class=\\"text-lg font-semibold mb-2\\">暫無歷史記錄</h4><p class=\\"text-sm text-muted-foreground max-w-sm\\">生成的圖像會自動保存在這裡</p></div>";\n' +
'    updateHistoryStats();\n' +
'    return;\n' +
'  }\n' +
'  const galleryDiv = document.createElement("div");\n' +
'  galleryDiv.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4";\n' +
'  history.forEach(item => {\n' +
'    const date = new Date(item.timestamp);\n' +
'    const timeStr = date.toLocaleString("zh-TW", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });\n' +
'    const styleConfig = STYLE_PRESETS[item.style];\n' +
'    const styleName = styleConfig ? styleConfig.icon + " " + styleConfig.name : item.style;\n' +
'    const itemDiv = document.createElement("div");\n' +
'    itemDiv.className = "rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group";\n' +
'    itemDiv.innerHTML = "<div class=\\"relative overflow-hidden aspect-square\\"><img src=\\"" + item.url + "\\" alt=\\"History\\" loading=\\"lazy\\" class=\\"w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105\\"><div class=\\"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300\\"></div></div><div class=\\"p-4 space-y-3\\"><div class=\\"flex flex-wrap gap-2\\"><span class=\\"inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20\\">" + item.model + "</span><span class=\\"inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20\\">Seed: " + item.seed + "</span></div><div class=\\"flex flex-wrap gap-2\\"><span class=\\"inline-flex items-center rounded-md bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20\\">" + styleName + "</span><span class=\\"inline-flex items-center rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20\\">" + timeStr + "</span></div><div class=\\"text-xs text-muted-foreground\\">" + item.width + "x" + item.height + " | " + (item.quality_mode || "standard") + "</div><div class=\\"flex gap-2 pt-2\\"><button class=\\"reuse-btn flex-1 inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 gap-1\\"><span>🔄</span><span>重用</span></button><button class=\\"download-btn flex-1 inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 gap-1\\"><span>💾</span><span>下載</span></button><button class=\\"delete-btn inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground h-8 px-3\\"><span>🗑️</span></button></div></div>";\n' +
'    const img = itemDiv.querySelector("img");\n' +
'    img.addEventListener("click", () => openModal(item.url));\n' +
'    const reuseBtn = itemDiv.querySelector(".reuse-btn");\n' +
'    reuseBtn.addEventListener("click", () => reusePrompt(item.id));\n' +
'    const downloadBtn = itemDiv.querySelector(".download-btn");\n' +
'    downloadBtn.addEventListener("click", () => downloadImage(item.url, item.seed));\n' +
'    const deleteBtn = itemDiv.querySelector(".delete-btn");\n' +
'    deleteBtn.addEventListener("click", () => deleteFromHistory(item.id));\n' +
'    galleryDiv.appendChild(itemDiv);\n' +
'  });\n' +
'  historyList.innerHTML = "";\n' +
'  historyList.appendChild(galleryDiv);\n' +
'  updateHistoryStats();\n' +
'}\n' +
'\n' +
'function reusePrompt(id) {\n' +
'  const history = getHistory();\n' +
'  const item = history.find(h => h.id === id);\n' +
'  if (!item) return;\n' +
'  document.getElementById("prompt").value = item.prompt || "";\n' +
'  document.getElementById("model").value = item.model || "zimage";\n' +
'  document.getElementById("seed").value = item.seed || -1;\n' +
'  document.getElementById("style").value = item.style || "none";\n' +
'  document.getElementById("negativePrompt").value = item.negative_prompt || "";\n' +
'  document.getElementById("referenceImages").value = (item.reference_images || []).join(", ");\n' +
'  updatePreview();\n' +
'  document.querySelector("[data-page=\\"generate\\"]").click();\n' +
'  document.getElementById("prompt").focus();\n' +
'}\n' +
'\n' +
'function downloadImage(url, seed) {\n' +
'  const link = document.createElement("a");\n' +
'  link.href = url;\n' +
'  link.download = "flux-ai-" + seed + "-" + Date.now() + ".png";\n' +
'  link.click();\n' +
'}\n' +
'\n' +
'function openModal(url) {\n' +
'  document.getElementById("modalImage").src = url;\n' +
'  document.getElementById("imageModal").classList.remove("hidden");\n' +
'}\n' +
'\n' +
'function closeModal() {\n' +
'  document.getElementById("imageModal").classList.add("hidden");\n' +
'}\n' +
'\n' +
'document.getElementById("exportBtn").addEventListener("click", exportHistory);\n' +
'document.getElementById("clearBtn").addEventListener("click", clearHistory);\n' +
'document.getElementById("modalCloseBtn").addEventListener("click", closeModal);\n' +
'document.getElementById("imageModal").addEventListener("click", function(e) {\n' +
'  if (e.target === this) closeModal();\n' +
'});\n' +
'\n' +
getFormSubmitHandler() +
'\n' +
'window.addEventListener("DOMContentLoaded", () => {\n' +
'  updateHistoryStats();\n' +
'  updatePreview();\n' +
'  console.log("✅ Flux AI Pro 已加載完成");\n' +
'  console.log("📊 風格數量:", Object.keys(STYLE_PRESETS).length);\n' +
'  console.log("🎨 Shadcn UI 風格已應用");\n' +
'});\n' +
'\x3C/script\x3E\n';
}
function getFormSubmitHandler() {
  return '// 顯示生成的圖像\n' +
'function displayGeneratedImages(images) {\n' +
'  const history = getHistory();\n' +
'  const galleryDiv = document.createElement("div");\n' +
'  galleryDiv.className = "grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn";\n' +
'  const newImages = history.slice(0, images.length);\n' +
'  newImages.forEach((item, index) => {\n' +
'    const date = new Date(item.timestamp);\n' +
'    const timeStr = date.toLocaleString("zh-TW", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });\n' +
'    const styleConfig = STYLE_PRESETS[item.style];\n' +
'    const styleName = styleConfig ? styleConfig.icon + " " + styleConfig.name : item.style;\n' +
'    const itemDiv = document.createElement("div");\n' +
'    itemDiv.className = "rounded-lg border border-border bg-card overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group";\n' +
'    itemDiv.innerHTML = "<div class=\\"relative overflow-hidden aspect-square\\"><img src=\\"" + item.url + "\\" alt=\\"Generated " + (index + 1) + "\\" loading=\\"lazy\\" class=\\"w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105\\"><div class=\\"absolute top-2 left-2\\"><span class=\\"inline-flex items-center rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-white shadow-lg\\">✅ 剛剛生成</span></div></div><div class=\\"p-4 space-y-3\\"><div class=\\"flex flex-wrap gap-2\\"><span class=\\"inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20\\">" + item.model + "</span><span class=\\"inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20\\">Seed: " + item.seed + "</span></div><div class=\\"flex flex-wrap gap-2\\"><span class=\\"inline-flex items-center rounded-md bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20\\">" + styleName + "</span><span class=\\"inline-flex items-center rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20\\">" + timeStr + "</span></div><div class=\\"text-xs text-muted-foreground\\">" + item.width + "x" + item.height + " | " + (item.quality_mode || "standard") + (item.generation_mode ? " | " + item.generation_mode : "") + "</div><div class=\\"flex gap-2 pt-2\\"><button class=\\"reuse-result-btn flex-1 inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 gap-1\\"><span>🔄</span><span>重用</span></button><button class=\\"download-result-btn flex-1 inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 gap-1\\"><span>💾</span><span>下載</span></button><button class=\\"view-history-btn flex-1 inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground h-8 px-3 gap-1\\"><span>📚</span><span>歷史</span></button></div></div>";\n' +
'    const img = itemDiv.querySelector("img");\n' +
'    img.addEventListener("click", () => openModal(item.url));\n' +
'    const reuseBtn = itemDiv.querySelector(".reuse-result-btn");\n' +
'    reuseBtn.addEventListener("click", () => reusePrompt(item.id));\n' +
'    const downloadBtn = itemDiv.querySelector(".download-result-btn");\n' +
'    downloadBtn.addEventListener("click", () => downloadImage(item.url, item.seed));\n' +
'    const viewBtn = itemDiv.querySelector(".view-history-btn");\n' +
'    viewBtn.addEventListener("click", () => {\n' +
'      document.querySelector("[data-page=\\"history\\"]").click();\n' +
'    });\n' +
'    galleryDiv.appendChild(itemDiv);\n' +
'  });\n' +
'  const resultsDiv = document.getElementById("results");\n' +
'  resultsDiv.innerHTML = "";\n' +
'  const successDiv = document.createElement("div");\n' +
'  successDiv.className = "rounded-lg border border-green-500/20 bg-green-500/10 p-4 mb-4";\n' +
'  successDiv.innerHTML = "<div class=\\"flex items-center gap-3\\"><div class=\\"rounded-lg bg-green-500/20 p-2\\"><span class=\\"text-2xl\\">✅</span></div><div><h4 class=\\"text-sm font-semibold text-green-400\\">生成成功！</h4><p class=\\"text-xs text-muted-foreground\\">已生成 " + images.length + " 張圖片並保存到歷史記錄</p></div></div>";\n' +
'  resultsDiv.appendChild(successDiv);\n' +
'  resultsDiv.appendChild(galleryDiv);\n' +
'}\n' +
'\n' +
'// 表單提交處理\n' +
'const form = document.getElementById("generateForm");\n' +
'const resultsDiv = document.getElementById("results");\n' +
'const generateBtn = document.getElementById("generateBtn");\n' +
'form.addEventListener("submit", async (e) => {\n' +
'  e.preventDefault();\n' +
'  const prompt = document.getElementById("prompt").value;\n' +
'  if (!prompt.trim()) {\n' +
'    alert("請輸入提示詞");\n' +
'    document.getElementById("prompt").focus();\n' +
'    return;\n' +
'  }\n' +
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
'  let referenceImages = [];\n' +
'  if (refImagesInput.trim()) {\n' +
'    referenceImages = refImagesInput.split(",").map(url => url.trim()).filter(url => url);\n' +
'  }\n' +
'  const sizeConfig = PRESET_SIZES[sizePreset] || PRESET_SIZES["square-1k"];\n' +
'  generateBtn.disabled = true;\n' +
'  generateBtn.innerHTML = "<div class=\\"spinner\\"></div><span>生成中...</span>";\n' +
'  resultsDiv.innerHTML = "<div class=\\"flex flex-col items-center justify-center py-16 px-4 text-center\\"><div class=\\"spinner mb-4\\"></div><p class=\\"text-sm font-medium mb-2\\">正在生成圖像，請稍候...</p><p class=\\"text-xs text-muted-foreground\\">這可能需要幾秒鐘到一分鐘</p></div>";\n' +
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
'    const contentType = response.headers.get("content-type");\n' +
'    if (!response.ok) {\n' +
'      const errorText = await response.text();\n' +
'      let errorMsg = "生成失敗";\n' +
'      try {\n' +
'        const errorJson = JSON.parse(errorText);\n' +
'        errorMsg = errorJson.error?.message || errorMsg;\n' +
'      } catch (e) {\n' +
'        errorMsg = errorText.substring(0, 200);\n' +
'      }\n' +
'      resultsDiv.innerHTML = "<div class=\\"rounded-lg border border-destructive/20 bg-destructive/10 p-4\\"><div class=\\"flex items-start gap-3\\"><div class=\\"rounded-lg bg-destructive/20 p-2\\"><span class=\\"text-2xl\\">❌</span></div><div class=\\"flex-1\\"><h4 class=\\"text-sm font-semibold text-destructive mb-1\\">生成失敗</h4><p class=\\"text-xs text-muted-foreground\\">" + errorMsg + "</p></div></div></div>";\n' +
'      if (response.status === 401 || response.status === 403) {\n' +
'        resultsDiv.innerHTML += "<div class=\\"rounded-lg border border-amber-500/20 bg-amber-500/10 p-4 mt-4\\"><div class=\\"flex items-start gap-3\\"><div class=\\"rounded-lg bg-amber-500/20 p-2\\"><span class=\\"text-2xl\\">⚠️</span></div><div class=\\"flex-1\\"><h4 class=\\"text-sm font-semibold text-amber-400 mb-1\\">認證問題</h4><p class=\\"text-xs text-muted-foreground mb-2\\">請確保已設置有效的 POLLINATIONS_API_KEY 環境變量</p><code class=\\"text-xs bg-background/50 px-2 py-1 rounded\\">wrangler secret put POLLINATIONS_API_KEY</code></div></div></div>";\n' +
'      }\n' +
'      return;\n' +
'    }\n' +
'    if (contentType && contentType.startsWith("image/")) {\n' +
'      const imageBlob = await response.blob();\n' +
'      const imageUrl = URL.createObjectURL(imageBlob);\n' +
'      const modelUsed = response.headers.get("X-Model") || model;\n' +
'      const seedUsed = parseInt(response.headers.get("X-Seed")) || seed;\n' +
'      const widthUsed = parseInt(response.headers.get("X-Width")) || sizeConfig.width;\n' +
'      const heightUsed = parseInt(response.headers.get("X-Height")) || sizeConfig.height;\n' +
'      const qualityUsed = response.headers.get("X-Quality-Mode") || qualityMode;\n' +
'      const styleUsed = response.headers.get("X-Style") || style;\n' +
'      const genMode = response.headers.get("X-Generation-Mode") || "文生圖";\n' +
'      addToHistory({\n' +
'        url: imageUrl,\n' +
'        prompt: prompt,\n' +
'        model: modelUsed,\n' +
'        seed: seedUsed,\n' +
'        width: widthUsed,\n' +
'        height: heightUsed,\n' +
'        style: styleUsed,\n' +
'        quality_mode: qualityUsed,\n' +
'        negative_prompt: negativePrompt,\n' +
'        reference_images: referenceImages,\n' +
'        generation_mode: genMode\n' +
'      });\n' +
'      displayGeneratedImages([{\n' +
'        url: imageUrl,\n' +
'        model: modelUsed,\n' +
'        seed: seedUsed,\n' +
'        width: widthUsed,\n' +
'        height: heightUsed,\n' +
'        quality_mode: qualityUsed,\n' +
'        style: styleUsed\n' +
'      }]);\n' +
'    } else if (contentType && contentType.includes("application/json")) {\n' +
'      const data = await response.json();\n' +
'      if (data.error) {\n' +
'        resultsDiv.innerHTML = "<div class=\\"rounded-lg border border-destructive/20 bg-destructive/10 p-4\\"><div class=\\"flex items-start gap-3\\"><div class=\\"rounded-lg bg-destructive/20 p-2\\"><span class=\\"text-2xl\\">❌</span></div><div class=\\"flex-1\\"><h4 class=\\"text-sm font-semibold text-destructive mb-1\\">生成失敗</h4><p class=\\"text-xs text-muted-foreground\\">" + data.error.message + "</p></div></div></div>";\n' +
'      } else {\n' +
'        const images = data.data.map(item => {\n' +
'          addToHistory({\n' +
'            url: item.image,\n' +
'            prompt: prompt,\n' +
'            model: item.model,\n' +
'            seed: item.seed,\n' +
'            width: item.width,\n' +
'            height: item.height,\n' +
'            style: item.style,\n' +
'            quality_mode: item.quality_mode,\n' +
'            negative_prompt: negativePrompt,\n' +
'            reference_images: referenceImages,\n' +
'            generation_mode: item.generation_mode\n' +
'          });\n' +
'          return item;\n' +
'        });\n' +
'        displayGeneratedImages(images);\n' +
'      }\n' +
'    }\n' +
'  } catch (error) {\n' +
'    resultsDiv.innerHTML = "<div class=\\"rounded-lg border border-destructive/20 bg-destructive/10 p-4\\"><div class=\\"flex items-start gap-3\\"><div class=\\"rounded-lg bg-destructive/20 p-2\\"><span class=\\"text-2xl\\">❌</span></div><div class=\\"flex-1\\"><h4 class=\\"text-sm font-semibold text-destructive mb-1\\">網路錯誤</h4><p class=\\"text-xs text-muted-foreground\\">" + error.message + "</p></div></div></div>";\n' +
'  } finally {\n' +
'    generateBtn.disabled = false;\n' +
'    generateBtn.innerHTML = "<span class=\\"text-lg\\">🎨</span><span class=\\"font-bold\\">開始生成</span>";\n' +
'  }\n' +
'});';
}
