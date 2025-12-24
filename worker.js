// =================================================================================
//  項目: Flux AI Pro - Permanent URL Edition
//  版本: 3.5.0-permanent-url
//  更新: ✅ 永久 URL 存儲 | ✅ 新 API 端點 | ✅ 46 種風格
//  API: https://gen.pollinations.ai (官方新端點)
// =================================================================================

const CONFIG = {
  PROJECT_NAME: "Flux-AI-Pro",
  PROJECT_VERSION: "3.5.0-permanent-url",
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
      enabled: true,
      default: true,
      models: [
        { 
          id: "zimage", 
          name: "Z-Image Turbo ⚡", 
          description: "快速 6B 參數圖像生成",
          pricing: { pollen: 0.0002 }
        },
        { 
          id: "flux", 
          name: "Flux 標準版", 
          description: "快速且高質量的圖像生成",
          pricing: { pollen: 0.00012 }
        },
        { 
          id: "turbo", 
          name: "Flux Turbo ⚡", 
          description: "超快速圖像生成",
          pricing: { pollen: 0.0003 }
        },
        { 
          id: "kontext", 
          name: "Kontext 🎨", 
          description: "上下文感知圖像生成（支持圖生圖）",
          pricing: { pollen: 0.04 },
          supports_reference_images: true,
          max_reference_images: 1
        }
      ]
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
  }
};

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

class StyleProcessor {
  static applyStyle(prompt, style, negativePrompt) {
    try {
      if (!style || style === 'none' || style === '') {
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
// PollinationsProvider：核心圖像生成類（使用永久 URL）
// =================================================================================

class PollinationsProvider {
  constructor(config, env) {
    this.config = config;
    this.name = config.name;
    this.env = env;
  }
  
  // 🔑 構建永久 URL
  buildPermanentURL(prompt, options) {
    const { 
      model = "zimage", 
      width = 1024, 
      height = 1024, 
      seed,
      negativePrompt = "",
      enhance = false, 
      nologo = true, 
      privateMode = true
    } = options;
    
    let fullPrompt = prompt;
    if (negativePrompt && negativePrompt.trim()) {
      fullPrompt = prompt + " [negative: " + negativePrompt + "]";
    }
    
    const encodedPrompt = encodeURIComponent(fullPrompt);
    const pathPrefix = this.config.pathPrefix || "";
    let baseUrl = this.config.endpoint + pathPrefix + "/" + encodedPrompt;
    
    const params = new URLSearchParams();
    params.append('model', model);
    params.append('width', width.toString());
    params.append('height', height.toString());
    params.append('seed', seed.toString());
    params.append('nologo', nologo.toString());
    params.append('enhance', enhance.toString());
    params.append('private', privateMode.toString());
    
    return baseUrl + '?' + params.toString();
  }
  
  async generate(prompt, options, logger) {
    const { 
      model = "zimage", 
      width = 1024, 
      height = 1024, 
      seed = -1, 
      negativePrompt = "", 
      enhance = false, 
      nologo = true, 
      privateMode = true, 
      style = "none",
      referenceImages = []
    } = options;
    
    const modelConfig = this.config.models.find(m => m.id === model);
    const supportsRefImages = modelConfig?.supports_reference_images || false;
    
    let validReferenceImages = [];
    if (referenceImages && referenceImages.length > 0 && supportsRefImages) {
      const maxRefImages = modelConfig?.max_reference_images || 0;
      validReferenceImages = referenceImages.slice(0, maxRefImages);
      logger.add("🖼️ Reference Images", { 
        model: model, 
        count: validReferenceImages.length,
        mode: "圖生圖"
      });
    }
    
    const { enhancedPrompt, enhancedNegative } = StyleProcessor.applyStyle(
      prompt, 
      style, 
      negativePrompt
    );
    
    logger.add("🎨 Style Processing", { 
      selected_style: style,
      style_name: CONFIG.STYLE_PRESETS[style]?.name || style,
      style_applied: style !== 'none'
    });
    
    const translation = await translateToEnglish(enhancedPrompt, this.env);
    const finalPromptForAPI = translation.text;
    
    if (translation.translated) {
      logger.add("🌐 Auto Translation", { 
        original_zh: translation.original,
        translated_en: finalPromptForAPI.substring(0, 100) + '...',
        success: true
      });
    }
    
    const currentSeed = seed === -1 ? Math.floor(Math.random() * 1000000) : seed;
    
    // 🌟 構建永久 URL
    const permanentURL = this.buildPermanentURL(finalPromptForAPI, {
      model,
      width,
      height,
      seed: currentSeed,
      negativePrompt: enhancedNegative,
      enhance,
      nologo,
      privateMode
    });
    
    logger.add("🔗 Permanent URL", { 
      url: permanentURL,
      note: "此 URL 永久有效，可直接分享"
    });
    
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'image/*',
      'Referer': 'https://pollinations.ai/'
    };
    
    const authConfig = CONFIG.POLLINATIONS_AUTH;
    if (authConfig.enabled && authConfig.token) {
      headers['Authorization'] = `Bearer ${authConfig.token}`;
      logger.add("🔐 API Authentication", { 
        method: "Bearer Token",
        enabled: true
      });
    }
    
    logger.add("📡 API Request", { 
      endpoint: this.config.endpoint,
      model: model,
      authenticated: authConfig.enabled && !!authConfig.token
    });
    
    for (let retry = 0; retry < CONFIG.MAX_RETRIES; retry++) {
      try {
        const response = await fetchWithTimeout(permanentURL, { 
          method: 'GET', 
          headers: headers
        }, 120000);
        
        if (response.ok) {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.startsWith('image/')) {
            logger.add("✅ Success", { 
              permanent_url: permanentURL,
              model: model, 
              size: width + "x" + height,
              style: style,
              seed: currentSeed,
              url_is_permanent: true
            });
            
            // ✅ 關鍵修改：返回永久 URL 而不是 blob
            return { 
              permanentURL: permanentURL,  // 永久 URL
              url: permanentURL,            // 兼容舊代碼
              provider: this.name, 
              model: model, 
              seed: currentSeed, 
              style: style, 
              style_name: CONFIG.STYLE_PRESETS[style]?.name || style,
              width: width, 
              height: height,
              authenticated: authConfig.enabled && !!authConfig.token,
              is_permanent: true
            };
          } else {
            throw new Error("Invalid content type: " + contentType);
          }
        } else if (response.status === 401) {
          throw new Error("Authentication failed: Invalid or missing API key");
        } else if (response.status === 403) {
          throw new Error("Access forbidden: API key may lack permissions");
        } else {
          throw new Error("HTTP " + response.status);
        }
      } catch (e) {
        logger.add("❌ Request Failed", { 
          error: e.message, 
          retry: retry + 1
        });
        
        if (retry < CONFIG.MAX_RETRIES - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (retry + 1)));
        } else {
          throw new Error("Generation failed: " + e.message);
        }
      }
    }
    throw new Error("Failed after " + CONFIG.MAX_RETRIES + " retries");
  }
}

class MultiProviderRouter {
  constructor(apiKeys = {}, env = null) {
    this.providers = {};
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
    throw new Error('No available provider');
  }
  
  async generate(prompt, options, logger) {
    const { numOutputs = 1 } = options;
    const { instance: provider } = this.getProvider(options.provider);
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
      CONFIG.POLLINATIONS_AUTH.enabled = false;
      CONFIG.POLLINATIONS_AUTH.token = "";
    }
    
    console.log("=== Request Info ===");
    console.log("IP:", clientIP);
    console.log("Path:", url.pathname);
    console.log("API Auth:", CONFIG.POLLINATIONS_AUTH.enabled ? "✅" : "❌");
    console.log("API Endpoint:", CONFIG.PROVIDERS.pollinations.endpoint);
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
          api_endpoint: CONFIG.PROVIDERS.pollinations.endpoint,
          permanent_url_storage: true,
          styles_count: Object.keys(CONFIG.STYLE_PRESETS).length
        }), { 
          headers: corsHeaders({ 'Content-Type': 'application/json' }) 
        });
      } else {
        response = new Response(JSON.stringify({
          error: 'Not Found',
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
      
      return new Response(response.body, { 
        status: response.status, 
        headers: headers 
      });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({
        error: {
          message: error.message,
          type: 'worker_error'
        }
      }), {
        status: 500,
        headers: corsHeaders({ 'Content-Type': 'application/json' })
      });
    }
  }
};

// =================================================================================
// 內部生成處理函數（✅ 返回永久 URL）
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
      enhance: body.enhance === true, 
      nologo: body.nologo !== false, 
      privateMode: body.private !== false, 
      style: body.style || "none",
      referenceImages: referenceImages
    };
    
    const router = new MultiProviderRouter({}, env);
    const results = await router.generate(prompt, options, logger);
    
    const duration = Date.now() - startTime;
    
    // ✅ 返回永久 URL（JSON 格式）
    const imagesData = results.map(r => ({
      url: r.permanentURL,           // 永久 URL
      permanent_url: r.permanentURL, // 明確標註
      model: r.model,
      seed: r.seed,
      width: r.width,
      height: r.height,
      style: r.style,
      style_name: r.style_name || r.style,
      is_permanent: true
    }));
    
    return new Response(JSON.stringify({ 
      created: Math.floor(Date.now() / 1000), 
      data: imagesData,
      generation_time_ms: duration,
      api_endpoint: CONFIG.PROVIDERS.pollinations.endpoint,
      permanent_urls: true,
      note: "所有 URL 均為永久連接，可直接分享"
    }), { 
      headers: corsHeaders({ 
        'Content-Type': 'application/json',
        'X-Generation-Time': duration + 'ms',
        'X-Permanent-URLs': 'true'
      }) 
    });
    
  } catch (e) {
    logger.add("❌ Error", e.message);
    return new Response(JSON.stringify({ 
      error: { 
        message: e.message, 
        debug_logs: logger.get()
      } 
    }), { 
      status: 400, 
      headers: corsHeaders({ 'Content-Type': 'application/json' }) 
    });
  }
}
// =================================================================================
// Web UI 界面處理函數（✅ 永久 URL 存儲版本）
// =================================================================================

function handleUI() {
  const authStatus = CONFIG.POLLINATIONS_AUTH.enabled ? 
    '<span style="color:#22c55e;font-weight:600;font-size:12px">🔐 已認證</span>' : 
    '<span style="color:#f59e0b;font-weight:600;font-size:12px">⚠️ 需要 API Key</span>';
    
  const apiEndpoint = CONFIG.PROVIDERS.pollinations.endpoint;
  const stylesCount = Object.keys(CONFIG.STYLE_PRESETS).length;
  
  const styleCategories = CONFIG.STYLE_CATEGORIES;
  const stylePresets = CONFIG.STYLE_PRESETS;
  
  let styleOptionsHTML = '';
  const sortedCategories = Object.entries(styleCategories)
    .sort((a, b) => a[1].order - b[1].order);
  
  for (const [categoryKey, categoryInfo] of sortedCategories) {
    const stylesInCategory = Object.entries(stylePresets)
      .filter(([key, style]) => style.category === categoryKey);
    
    if (stylesInCategory.length > 0) {
      styleOptionsHTML += `<optgroup label="${categoryInfo.icon} ${categoryInfo.name}">`;
      for (const [styleKey, styleConfig] of stylesInCategory) {
        const selected = styleKey === 'none' ? ' selected' : '';
        styleOptionsHTML += `<option value="${styleKey}"${selected}>${styleConfig.icon} ${styleConfig.name}</option>`;
      }
      styleOptionsHTML += '</optgroup>';
    }
  }
  
  const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flux AI Pro v${CONFIG.PROJECT_VERSION} - 永久 URL 存儲</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 100%);color:#fff;min-height:100vh}
.container{max-width:100%;margin:0;padding:0;height:100vh;display:flex;flex-direction:column}
.top-nav{background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);border-bottom:1px solid rgba(255,255,255,0.1);padding:15px 25px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0}
.nav-left{display:flex;align-items:center;gap:20px}
.logo{color:#f59e0b;font-size:24px;font-weight:800;text-shadow:0 0 20px rgba(245,158,11,0.6);display:flex;align-items:center;gap:10px}
.badge{background:linear-gradient(135deg,#10b981 0%,#059669 100%);padding:4px 10px;border-radius:12px;font-size:11px;font-weight:600}
.badge-new{background:linear-gradient(135deg,#ec4899 0%,#db2777 100%);padding:4px 10px;border-radius:12px;font-size:11px;font-weight:700}
.badge-permanent{background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);padding:4px 10px;border-radius:12px;font-size:11px;font-weight:700}
.nav-menu{display:flex;gap:10px}
.nav-btn{padding:8px 16px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:#9ca3af;cursor:pointer;font-size:14px;font-weight:600;transition:all 0.3s;display:flex;align-items:center;gap:6px}
.nav-btn:hover{border-color:#f59e0b;color:#fff}
.nav-btn.active{background:linear-gradient(135deg,#f59e0b 0%,#d97706 100%);color:#fff;border-color:#f59e0b}
.api-status{padding:6px 12px;border-radius:8px;font-size:12px;font-weight:600;background:rgba(16,185,129,0.1);border:1px solid #10b981}
.api-endpoint{font-size:10px;color:#6b7280;margin-top:4px}
.main-content{flex:1;display:flex;overflow:hidden}
.left-panel{width:320px;background:rgba(255,255,255,0.03);border-right:1px solid rgba(255,255,255,0.1);overflow-y:auto;padding:20px;flex-shrink:0}
.center-panel{flex:1;padding:20px;overflow-y:auto}
.right-panel{width:380px;background:rgba(255,255,255,0.03);border-left:1px solid rgba(255,255,255,0.1);overflow-y:auto;padding:20px;flex-shrink:0}
@media(max-width:1400px){.left-panel{width:280px}.right-panel{width:320px}}
@media(max-width:1024px){.main-content{flex-direction:column}.left-panel,.right-panel{width:100%;border:none;border-bottom:1px solid rgba(255,255,255,0.1)}}
.page{display:none}
.page.active{display:block}
.page.active .main-content{display:flex}
.section-title{font-size:16px;font-weight:700;color:#f59e0b;margin-bottom:15px;display:flex;align-items:center;gap:8px}
.form-group{margin-bottom:16px}
label{display:block;margin-bottom:6px;font-weight:600;font-size:13px;color:#e5e7eb}
input,select,textarea{width:100%;padding:10px;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.2);border-radius:8px;color:#fff;font-size:13px;transition:all 0.3s}
input:focus,select:focus,textarea:focus{outline:none;border-color:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,0.1)}
textarea{min-height:120px;resize:vertical;font-family:inherit;line-height:1.6}
select{cursor:pointer}
.input-hint{font-size:11px;color:#6b7280;margin-top:4px}
.btn{padding:12px 24px;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;transition:all 0.3s;display:inline-flex;align-items:center;gap:8px;justify-content:center;width:100%}
.btn-primary{background:linear-gradient(135deg,#f59e0b 0%,#d97706 100%);color:#fff;box-shadow:0 4px 15px rgba(245,158,11,0.3)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(245,158,11,0.4)}
.btn-primary:disabled{opacity:0.5;cursor:not-allowed;transform:none}
.btn-secondary{background:rgba(255,255,255,0.1);color:#fff;border:1px solid rgba(255,255,255,0.2)}
.btn-secondary:hover{background:rgba(255,255,255,0.15)}
.btn-danger{background:linear-gradient(135deg,#ef4444 0%,#dc2626 100%);color:#fff}
.gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px}
.gallery-item{background:rgba(0,0,0,0.4);border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);transition:all 0.3s}
.gallery-item:hover{transform:translateY(-5px);box-shadow:0 10px 30px rgba(245,158,11,0.3)}
.gallery-item img{width:100%;height:280px;object-fit:cover;display:block;cursor:pointer}
.gallery-info{padding:15px}
.gallery-meta{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:5px}
.model-badge{background:rgba(245,158,11,0.2);color:#f59e0b;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600}
.seed-badge{background:rgba(16,185,129,0.2);color:#10b981;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600}
.style-badge{background:rgba(139,92,246,0.2);color:#8b5cf6;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600}
.permanent-badge{background:rgba(59,130,246,0.2);color:#3b82f6;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600}
.gallery-actions{display:flex;gap:8px;margin-top:10px}
.action-btn{padding:6px 12px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:6px;font-size:12px;color:#fff;cursor:pointer;transition:all 0.3s;display:inline-flex;align-items:center;gap:5px;flex:1;justify-content:center}
.action-btn:hover{background:rgba(255,255,255,0.2);border-color:#f59e0b}
.action-btn.delete{border-color:rgba(239,68,68,0.5)}
.action-btn.delete:hover{background:rgba(239,68,68,0.2);border-color:#ef4444}
.prompt-display{background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:15px;margin-bottom:20px}
.prompt-display .label{font-size:12px;color:#9ca3af;margin-bottom:6px;font-weight:600}
.prompt-display .content{color:#e5e7eb;font-size:13px;line-height:1.6;word-break:break-word}
.loading{text-align:center;padding:60px 20px;color:#9ca3af}
.spinner{border:3px solid rgba(255,255,255,0.1);border-top:3px solid #f59e0b;border-radius:50%;width:40px;height:40px;animation:spin 1s linear infinite;margin:0 auto 15px}
@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.empty-state{text-align:center;padding:60px 20px;color:#9ca3af}
.alert{padding:12px 15px;border-radius:8px;margin-bottom:15px;border-left:4px solid;font-size:13px}
.alert-success{background:rgba(16,185,129,0.1);border-color:#10b981;color:#10b981}
.alert-error{background:rgba(239,68,68,0.1);border-color:#ef4444;color:#ef4444}
.alert-info{background:rgba(59,130,246,0.1);border-color:#3b82f6;color:#3b82f6}
.modal{display:none;position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.9);align-items:center;justify-content:center}
.modal.show{display:flex}
.modal-content{max-width:90%;max-height:90%;position:relative}
.modal-content img{max-width:100%;max-height:90vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5)}
.modal-close{position:absolute;top:20px;right:20px;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border:none;color:#fff;font-size:32px;width:48px;height:48px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.3s}
.modal-close:hover{background:rgba(255,255,255,0.2);transform:rotate(90deg)}
.history-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;padding:20px;background:rgba(255,255,255,0.03);border-radius:12px}
.history-stats{display:flex;gap:20px;font-size:14px}
.stat-item{display:flex;flex-direction:column;gap:4px}
.stat-item .label{color:#9ca3af;font-size:12px}
.stat-item .value{color:#f59e0b;font-size:20px;font-weight:700}
.history-actions{display:flex;gap:10px}
::-webkit-scrollbar{width:8px;height:8px}
::-webkit-scrollbar-track{background:rgba(255,255,255,0.05)}
::-webkit-scrollbar-thumb{background:rgba(245,158,11,0.3);border-radius:4px}
::-webkit-scrollbar-thumb:hover{background:rgba(245,158,11,0.5)}
</style>
</head>
<body>
<div class="container">
<div class="top-nav">
<div class="nav-left">
<div class="logo">
🎨 Flux AI Pro
<span class="badge">v${CONFIG.PROJECT_VERSION}</span>
<span class="badge-permanent">🔗 永久 URL</span>
</div>
<div>
<div class="api-status">${authStatus}</div>
<div class="api-endpoint">📡 ${apiEndpoint}</div>
</div>
</div>
<div class="nav-menu">
<button class="nav-btn active" data-page="generate"><span>🎨</span> 生成圖像</button>
<button class="nav-btn" data-page="history"><span>📚</span> 歷史記錄 <span id="historyCount" style="background:rgba(245,158,11,0.2);padding:2px 8px;border-radius:10px;font-size:11px">0</span></button>
</div>
</div>

<div id="generatePage" class="page active">
<div class="main-content">
<div class="left-panel">
<div class="section-title">⚙️ 生成參數</div>
<form id="generateForm">
<div class="form-group">
<label>模型選擇</label>
<select id="model">
<option value="zimage" selected>Z-Image Turbo ⚡</option>
<option value="flux">Flux 標準版</option>
<option value="turbo">Flux Turbo ⚡</option>
<option value="kontext">Kontext 🎨 (圖生圖)</option>
</select>
</div>

<div class="form-group">
<label>尺寸預設</label>
<select id="size">
<option value="square-1k" selected>方形 1024x1024</option>
<option value="square-1.5k">方形 1536x1536</option>
<option value="square-2k">方形 2048x2048</option>
<option value="portrait-9-16-hd">豎屏 1080x1920</option>
<option value="landscape-16-9-hd">橫屏 1920x1080</option>
<option value="instagram-square">Instagram 方形</option>
<option value="wallpaper-fhd">桌布 Full HD</option>
</select>
</div>

<div class="form-group">
<label>藝術風格 🎨</label>
<select id="style">
${styleOptionsHTML}
</select>
<div class="input-hint">✨ ${stylesCount} 種風格可選</div>
</div>

<div class="form-group">
<label>Seed (-1 = 隨機)</label>
<input type="number" id="seed" value="-1" min="-1" max="999999">
</div>

<button type="submit" class="btn btn-primary" id="generateBtn">🎨 開始生成</button>
</form>
</div>

<div class="center-panel">
<div class="section-title">🖼️ 生成結果</div>
<div id="results">
<div class="empty-state">
<p style="font-size:16px;margin-bottom:10px">尚未生成任何圖像</p>
<p style="font-size:14px">填寫左側參數並輸入提示詞後點擊生成</p>
</div>
</div>
</div>

<div class="right-panel">
<div class="section-title">💬 提示詞</div>
<div class="form-group">
<label>正面提示詞</label>
<textarea id="prompt" placeholder="描述你想生成的圖像...

例如：
• A beautiful sunset over mountains
• 一隻可愛的貓咪在花園裡玩耍
• Cyberpunk city at night, neon lights" required></textarea>
<div class="input-hint">✅ 支持中文自動翻譯</div>
</div>

<div class="form-group">
<label>負面提示詞 (可選)</label>
<textarea id="negativePrompt" placeholder="描述不想要的內容..." rows="4"></textarea>
</div>

<div class="alert alert-info" style="margin-top:20px">
<strong>🔗 永久 URL 存儲</strong><br>
所有生成的圖片使用永久連接存儲<br>
可直接分享，永久有效！
</div>

<div class="section-title" style="margin-top:25px">📋 當前配置</div>
<div class="prompt-display">
<div class="label">API 端點</div>
<div class="content" style="font-size:11px">${apiEndpoint}</div>
</div>
<div class="prompt-display">
<div class="label">存儲方式</div>
<div class="content" style="color:#3b82f6">🔗 永久 URL（不使用 Base64）</div>
</div>
</div>
</div>
</div>

<div id="historyPage" class="page">
<div class="main-content" style="flex-direction:column;padding:20px">
<div class="history-header">
<div class="history-stats">
<div class="stat-item">
<div class="label">📊 總記錄數</div>
<div class="value" id="historyTotal">0</div>
</div>
<div class="stat-item">
<div class="label">💾 存儲方式</div>
<div class="value" style="font-size:14px;color:#3b82f6">永久 URL</div>
</div>
</div>
<div class="history-actions">
<button class="btn btn-secondary" id="exportBtn" style="width:auto;padding:10px 20px">📥 導出</button>
<button class="btn btn-danger" id="clearBtn" style="width:auto;padding:10px 20px">🗑️ 清空</button>
</div>
</div>
<div id="historyList" style="padding:0 20px">
<div class="empty-state">
<p style="font-size:16px;margin-bottom:10px">暫無歷史記錄</p>
</div>
</div>
</div>
</div>
</div>

<div id="imageModal" class="modal">
<button class="modal-close" id="modalCloseBtn">×</button>
<div class="modal-content">
<img id="modalImage" src="" alt="Preview">
</div>
</div>

<script>
const STYLE_PRESETS = ${JSON.stringify(CONFIG.STYLE_PRESETS)};
const PRESET_SIZES = ${JSON.stringify(CONFIG.PRESET_SIZES)};
const STORAGE_KEY = 'flux_ai_history_permanent';
const MAX_HISTORY = 100;

// 導航切換
document.querySelectorAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click',function(){
    const pageName=this.dataset.page;
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    document.getElementById(pageName+'Page').classList.add('active');
    this.classList.add('active');
    if(pageName==='history')updateHistoryDisplay();
  });
});

// 歷史記錄管理（✅ 永久 URL 版本）
function getHistory(){
  try{
    const data=localStorage.getItem(STORAGE_KEY);
    return data?JSON.parse(data):[];
  }catch(e){
    return[];
  }
}

function saveHistory(history){
  try{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(history));
    updateHistoryStats();
  }catch(e){
    console.error('Save failed:',e);
  }
}

function addToHistory(item){
  let history=getHistory();
  history.unshift({
    ...item,
    id:Date.now()+Math.random(),
    timestamp:new Date().toISOString(),
    is_permanent:true
  });
  if(history.length>MAX_HISTORY)history=history.slice(0,MAX_HISTORY);
  saveHistory(history);
}

function deleteFromHistory(id){
  if(!confirm('確定要刪除這條記錄嗎？'))return;
  let history=getHistory();
  history=history.filter(item=>item.id!==id);
  saveHistory(history);
  updateHistoryDisplay();
}

function clearHistory(){
  if(!confirm('確定要清空所有歷史記錄嗎？'))return;
  localStorage.removeItem(STORAGE_KEY);
  updateHistoryDisplay();
  updateHistoryStats();
}

function exportHistory(){
  const history=getHistory();
  const dataStr=JSON.stringify(history,null,2);
  const blob=new Blob([dataStr],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url;
  link.download='flux-ai-history-'+new Date().toISOString().split('T')[0]+'.json';
  link.click();
  URL.revokeObjectURL(url);
}

function updateHistoryStats(){
  const history=getHistory();
  document.getElementById('historyCount').textContent=history.length;
  document.getElementById('historyTotal').textContent=history.length;
}

function updateHistoryDisplay(){
  const history=getHistory();
  const historyList=document.getElementById('historyList');
  
  if(history.length===0){
    historyList.innerHTML='<div class="empty-state"><p>暫無歷史記錄</p></div>';
    updateHistoryStats();
    return;
  }
  
  const galleryDiv=document.createElement('div');
  galleryDiv.className='gallery';
  
  history.forEach(item=>{
    const styleConfig=STYLE_PRESETS[item.style];
    const styleName=styleConfig ? styleConfig.icon+' '+styleConfig.name : item.style;
    
    const itemDiv=document.createElement('div');
    itemDiv.className='gallery-item';
    itemDiv.innerHTML=\`
      <img src="\${item.url}" alt="Generated" loading="lazy">
      <div class="gallery-info">
        <div class="gallery-meta">
          <span class="model-badge">\${item.model}</span>
          <span class="permanent-badge">🔗 永久</span>
        </div>
        <div class="gallery-meta" style="margin-top:5px">
          <span class="seed-badge">Seed: \${item.seed}</span>
          <span class="style-badge">\${styleName}</span>
        </div>
        <div class="gallery-actions">
          <button class="action-btn share-btn">📤 分享</button>
          <button class="action-btn delete delete-btn">🗑️ 刪除</button>
        </div>
      </div>
    \`;
    
    const img=itemDiv.querySelector('img');
    img.addEventListener('click',()=>{
      document.getElementById('modalImage').src=item.url;
      document.getElementById('imageModal').classList.add('show');
    });
    
    const shareBtn=itemDiv.querySelector('.share-btn');
    shareBtn.addEventListener('click',async()=>{
      try{
        await navigator.clipboard.writeText(item.url);
        alert('✅ 永久連接已複製到剪貼板！\\n\\n'+item.url);
      }catch(e){
        prompt('永久連接（Ctrl+C 複製）:',item.url);
      }
    });
    
    const deleteBtn=itemDiv.querySelector('.delete-btn');
    deleteBtn.addEventListener('click',()=>deleteFromHistory(item.id));
    
    galleryDiv.appendChild(itemDiv);
  });
  
  historyList.innerHTML='';
  historyList.appendChild(galleryDiv);
  updateHistoryStats();
}

document.getElementById('exportBtn').addEventListener('click',exportHistory);
document.getElementById('clearBtn').addEventListener('click',clearHistory);
document.getElementById('modalCloseBtn').addEventListener('click',()=>{
  document.getElementById('imageModal').classList.remove('show');
});

// 表單提交
const form=document.getElementById('generateForm');
const resultsDiv=document.getElementById('results');
const generateBtn=document.getElementById('generateBtn');

form.addEventListener('submit',async(e)=>{
  e.preventDefault();
  
  const prompt=document.getElementById('prompt').value.trim();
  if(!prompt){
    alert('請輸入提示詞');
    return;
  }
  
  const model=document.getElementById('model').value;
  const sizePreset=document.getElementById('size').value;
  const style=document.getElementById('style').value;
  const seed=parseInt(document.getElementById('seed').value);
  const negativePrompt=document.getElementById('negativePrompt').value;
  
  const sizeConfig=PRESET_SIZES[sizePreset];
  
  generateBtn.disabled=true;
  generateBtn.innerHTML='<div class="spinner"></div>生成中...';
  resultsDiv.innerHTML='<div class="loading"><div class="spinner"></div><p>正在生成圖像...</p></div>';
  
  try{
    const response=await fetch('/_internal/generate',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        prompt,
        model,
        width:sizeConfig.width,
        height:sizeConfig.height,
        style,
        seed,
        negative_prompt:negativePrompt
      })
    });
    
    if(!response.ok){
      const error=await response.json();
      throw new Error(error.error?.message||'生成失敗');
    }
    
    const data=await response.json();
    
    if(data.data && data.data.length>0){
      resultsDiv.innerHTML='';
      
      const successDiv=document.createElement('div');
      successDiv.className='alert alert-success';
      successDiv.innerHTML='<strong>✅ 生成成功！</strong> 使用永久 URL 存儲，可直接分享';
      resultsDiv.appendChild(successDiv);
      
      const galleryDiv=document.createElement('div');
      galleryDiv.className='gallery';
      
      data.data.forEach(img=>{
        addToHistory({
          url:img.url,
          permanent_url:img.permanent_url,
          prompt,
          model:img.model,
          seed:img.seed,
          width:img.width,
          height:img.height,
          style:img.style
        });
        
        const styleConfig=STYLE_PRESETS[img.style];
        const styleName=styleConfig ? styleConfig.icon+' '+styleConfig.name : img.style;
        
        const itemDiv=document.createElement('div');
        itemDiv.className='gallery-item';
        itemDiv.innerHTML=\`
          <img src="\${img.url}" alt="Generated">
          <div class="gallery-info">
            <div style="background:#10b981;color:#fff;padding:4px 8px;border-radius:6px;font-size:10px;margin-bottom:8px;text-align:center">
              ✅ 剛剛生成 | 🔗 永久連接
            </div>
            <div class="gallery-meta">
              <span class="model-badge">\${img.model}</span>
              <span class="seed-badge">Seed: \${img.seed}</span>
            </div>
            <div class="gallery-meta" style="margin-top:5px">
              <span class="style-badge">\${styleName}</span>
              <span class="permanent-badge">🔗 永久</span>
            </div>
            <div class="gallery-actions">
              <button class="action-btn share-new-btn">📤 分享連接</button>
              <button class="action-btn view-history-btn">📚 查看歷史</button>
            </div>
          </div>
        \`;
        
        const imgEl=itemDiv.querySelector('img');
        imgEl.addEventListener('click',()=>{
          document.getElementById('modalImage').src=img.url;
          document.getElementById('imageModal').classList.add('show');
        });
        
        const shareBtn=itemDiv.querySelector('.share-new-btn');
        shareBtn.addEventListener('click',async()=>{
          try{
            await navigator.clipboard.writeText(img.url);
            alert('✅ 永久連接已複製！\\n\\n'+img.url);
          }catch(e){
            prompt('永久連接:',img.url);
          }
        });
        
        const viewBtn=itemDiv.querySelector('.view-history-btn');
        viewBtn.addEventListener('click',()=>{
          document.querySelector('[data-page="history"]').click();
        });
        
        galleryDiv.appendChild(itemDiv);
      });
      
      resultsDiv.appendChild(galleryDiv);
    }
  }catch(error){
    resultsDiv.innerHTML='<div class="alert alert-error"><strong>錯誤:</strong> '+error.message+'</div>';
  }finally{
    generateBtn.disabled=false;
    generateBtn.innerHTML='🎨 開始生成';
  }
});

window.addEventListener('DOMContentLoaded',()=>{
  updateHistoryStats();
});
</script>
</body>
</html>`;
  
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      ...corsHeaders()
    }
  });
}
