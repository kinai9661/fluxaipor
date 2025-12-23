// =================================================================================
//  項目: Flux AI Pro
//  版本: 9.3.0-optimized + ShadCN UI
//  作者: Enhanced by AI Assistant  
//  日期: 2025-12-23
//  功能: 多張生成 | Seed控制 | 39種風格 | 35+尺寸 | API優化 | 新 UI
//  修復: 移除原始 UI,使用 GitHub app.html
// =================================================================================

const CONFIG = {
  PROJECT_NAME: "Flux-AI-Pro",
  PROJECT_VERSION: "9.3.0-shadcn-ui",
  API_MASTER_KEY: "1",
  
  PROVIDERS: {
    pollinations: {
      name: "Pollinations.ai",
      endpoint: "https://image.pollinations.ai",
      type: "direct",
      auth_mode: "free",
      requires_key: false,
      enabled: true,
      default: true,
      description: "完全免費的 AI 圖像生成服務",
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
        ultra_hd_4k: true,
        reference_images: true,
        image_to_image: true,
        multi_image_fusion: true,
        batch_generation: true
      },
      models: [
        { id: "flux", name: "Flux", confirmed: true, category: "flux", description: "均衡速度與質量", max_size: 2048 },
        { id: "flux-realism", name: "Flux Realism", confirmed: true, category: "flux", description: "超寫實風格", max_size: 2048 },
        { id: "flux-anime", name: "Flux Anime", confirmed: true, category: "flux", description: "日系動漫風格", max_size: 2048 },
        { id: "flux-3d", name: "Flux 3D", confirmed: true, category: "flux", description: "3D 渲染風格", max_size: 2048 },
        { id: "flux-pro", name: "Flux Pro", confirmed: true, category: "flux", description: "專業版最高質量", max_size: 2048 },
        { id: "any-dark", name: "Any Dark", confirmed: true, category: "flux", description: "暗黑風格", max_size: 2048 },
        { id: "turbo", name: "Turbo", confirmed: true, category: "flux", description: "極速生成", max_size: 2048 },
        { id: "flux-1.1-pro", name: "Flux 1.1 Pro 🔥", confirmed: false, fallback: ["flux-pro", "flux-realism"], experimental: true, category: "flux-advanced", description: "最新 Flux 1.1", max_size: 2048 },
        { id: "flux-kontext", name: "Flux Kontext 🎨", confirmed: false, fallback: ["flux-pro", "flux-realism"], experimental: true, category: "flux-advanced", description: "圖像編輯 (1張參考圖)", max_size: 2048, supports_reference_images: true, max_reference_images: 1 },
        { id: "flux-kontext-pro", name: "Flux Kontext Pro 💎", confirmed: false, fallback: ["flux-kontext", "flux-pro"], experimental: true, category: "flux-advanced", description: "圖像編輯專業版 (1張參考圖)", max_size: 2048, supports_reference_images: true, max_reference_images: 1 },
        { id: "nanobanana", name: "Nano Banana 🍌", confirmed: true, category: "gemini", description: "Gemini 2.5 Flash (4張參考圖)", max_size: 2048, supports_reference_images: true, max_reference_images: 4 },
        { id: "nanobanana-pro", name: "Nano Banana Pro 🍌💎", confirmed: true, category: "gemini", description: "Gemini 3 Pro (4K + 4張參考圖)", max_size: 4096, ultra_hd: true, supports_reference_images: true, max_reference_images: 4 },
        { id: "sd3", name: "Stable Diffusion 3 ⚡", confirmed: false, fallback: ["flux-realism", "flux"], experimental: true, category: "stable-diffusion", description: "SD3 標準版", max_size: 2048 },
        { id: "sd3.5-large", name: "SD 3.5 Large 🔥", confirmed: false, fallback: ["sd3", "flux-realism"], experimental: true, category: "stable-diffusion", description: "SD 3.5 大模型", max_size: 2048 },
        { id: "sd3.5-turbo", name: "SD 3.5 Turbo ⚡", confirmed: false, fallback: ["turbo", "flux"], experimental: true, category: "stable-diffusion", description: "SD 3.5 快速版", max_size: 2048 },
        { id: "sdxl", name: "SDXL 📐", confirmed: false, fallback: ["flux-realism", "flux"], experimental: true, category: "stable-diffusion", description: "經典 SDXL", max_size: 2048 },
        { id: "sdxl-lightning", name: "SDXL Lightning ⚡", confirmed: false, fallback: ["turbo", "flux"], experimental: true, category: "stable-diffusion", description: "SDXL 極速版", max_size: 2048 }
      ],
      rate_limit: null,
      max_size: { width: 4096, height: 4096 }
    }
  },
  
  DEFAULT_PROVIDER: "pollinations",
  
  STYLE_PRESETS: {
    none: { name: "無 (使用原始提示詞)", prompt: "", negative: "" },
    anime: { name: "動漫風格 ✨", prompt: "anime style, anime art, vibrant colors, anime character, detailed anime", negative: "realistic, photograph, 3d, ugly" },
    "anime-chibi": { name: "Q版動漫 🎎", prompt: "chibi style, cute chibi character, big eyes, small body, kawaii, adorable", negative: "realistic, tall, adult proportions, serious" },
    "japanese-manga": { name: "日本漫畫 📚", prompt: "manga style, black and white manga, screentone, manga panel, Japanese comic art, ink drawing", negative: "colored, realistic, photograph, western comic" },
    "shoujo-manga": { name: "少女漫畫 💕", prompt: "shoujo manga style, sparkles, flowers background, big expressive eyes, romantic, soft lines", negative: "shounen, action, dark, gritty" },
    "seinen-manga": { name: "青年漫畫 🗡️", prompt: "seinen manga style, detailed linework, realistic anatomy, mature themes, detailed shading", negative: "childish, cute, simple, cartoon" },
    photorealistic: { name: "寫實照片 📷", prompt: "photorealistic, ultra realistic, 8k uhd, professional photography, detailed, sharp focus, DSLR, high resolution", negative: "anime, cartoon, illustration, painting, drawing, art" },
    "cinematic": { name: "電影級 🎬", prompt: "cinematic lighting, movie still, dramatic lighting, film grain, depth of field, bokeh, anamorphic lens", negative: "amateur, flat lighting, overexposed, cartoon" },
    "portrait": { name: "人像攝影 👤", prompt: "professional portrait, studio lighting, bokeh background, 85mm lens, shallow depth of field, perfect skin", negative: "full body, landscape, distorted face, bad lighting" },
    "oil-painting": { name: "油畫 🎨", prompt: "oil painting, classical oil painting style, visible brushstrokes, rich colors, artistic, canvas texture", negative: "photograph, digital art, anime, flat" },
    watercolor: { name: "水彩畫 💧", prompt: "watercolor painting, soft colors, watercolor texture, artistic, hand-painted, paper texture, flowing colors", negative: "photograph, digital, sharp edges, 3d" },
    "chinese-painting": { name: "中國水墨畫 🖌️", prompt: "Chinese ink painting, sumi-e style, traditional Chinese art, brush painting, minimalist, black ink, rice paper", negative: "colorful, western, digital, photograph" },
    "ukiyo-e": { name: "浮世繪 🗾", prompt: "ukiyo-e style, Japanese woodblock print, Hokusai style, traditional Japanese art, flat colors, bold outlines", negative: "3d, realistic, photograph, modern" },
    sketch: { name: "素描 ✏️", prompt: "pencil sketch, hand-drawn, sketch art, graphite drawing, artistic sketch, cross-hatching", negative: "colored, painted, digital, photograph" },
    "charcoal": { name: "炭筆畫 🖍️", prompt: "charcoal drawing, charcoal sketch, dramatic shading, black and white, expressive strokes", negative: "colored, digital, clean lines, photograph" },
    "digital-art": { name: "數位藝術 💻", prompt: "digital art, digital painting, concept art, artstation, highly detailed, vibrant colors", negative: "photograph, traditional art, sketch, low quality" },
    "pixel-art": { name: "像素藝術 🕹️", prompt: "pixel art, 8-bit style, retro gaming, pixelated, limited color palette, sharp pixels", negative: "high resolution, smooth, realistic, blurry" },
    "vector-art": { name: "向量藝術 📐", prompt: "vector art, flat design, clean lines, geometric shapes, Adobe Illustrator style, minimalist", negative: "realistic, textured, sketchy, photograph" },
    "low-poly": { name: "低多邊形 🔷", prompt: "low poly art, geometric, faceted, 3D low poly, minimalist 3D, triangular faces", negative: "high poly, realistic, smooth, curved" },
    fantasy: { name: "奇幻風格 🐉", prompt: "fantasy art, magical, epic fantasy, detailed fantasy illustration, mystical, enchanted", negative: "modern, realistic, mundane, contemporary" },
    "dark-fantasy": { name: "黑暗奇幻 🌑", prompt: "dark fantasy, gothic, dark atmosphere, ominous, sinister, dramatic shadows, horror elements", negative: "bright, cheerful, cute, colorful" },
    "fairy-tale": { name: "童話風格 🧚", prompt: "fairy tale art, storybook illustration, whimsical, magical, enchanted forest, dreamy", negative: "realistic, modern, dark, gritty" },
    cyberpunk: { name: "賽博朋克 🌃", prompt: "cyberpunk style, neon lights, futuristic, sci-fi, dystopian, high-tech low-life, blade runner style", negative: "natural, rustic, medieval, fantasy" },
    "sci-fi": { name: "科幻未來 🚀", prompt: "sci-fi, futuristic, advanced technology, space age, sleek design, holographic", negative: "medieval, fantasy, historical, primitive" },
    steampunk: { name: "蒸汽朋克 ⚙️", prompt: "steampunk style, Victorian era, brass and copper, gears and cogs, mechanical, industrial revolution", negative: "modern, digital, minimalist, clean" },
    "vaporwave": { name: "蒸氣波 🌈", prompt: "vaporwave aesthetic, retro 80s, neon pink and cyan, glitch art, nostalgic, geometric patterns", negative: "realistic, modern, natural colors" },
    "studio-ghibli": { name: "吉卜力風格 🍃", prompt: "Studio Ghibli style, Hayao Miyazaki, anime, soft colors, whimsical, detailed background, hand-drawn", negative: "realistic, dark, 3D, western animation" },
    "disney": { name: "迪士尼風格 🏰", prompt: "Disney animation style, 3D animated, Pixar style, colorful, expressive characters, family-friendly", negative: "realistic, anime, dark, gritty" },
    "comic-book": { name: "美式漫畫 💥", prompt: "comic book style, bold lines, halftone dots, superhero comic, dynamic pose, action lines", negative: "realistic, photograph, manga, soft" },
    "pop-art": { name: "普普藝術 🎭", prompt: "pop art style, Andy Warhol, Roy Lichtenstein, bold colors, halftone, graphic design, retro", negative: "realistic, subtle, muted colors, classical" },
    "art-deco": { name: "裝飾藝術 💎", prompt: "art deco style, geometric patterns, luxurious, elegant, 1920s, gold and black, symmetrical", negative: "organic, natural, messy, modern minimalist" },
    "art-nouveau": { name: "新藝術風格 🌺", prompt: "art nouveau style, flowing lines, organic forms, floral motifs, Alphonse Mucha, elegant curves", negative: "geometric, modern, minimalist, angular" },
    "impressionism": { name: "印象派 🌅", prompt: "impressionism style, visible brushstrokes, emphasis on light, Monet, soft focus, outdoor scenes", negative: "sharp, detailed, photorealistic, digital" },
    "abstract": { name: "抽象藝術 🎨", prompt: "abstract art, non-representational, geometric shapes, bold colors, expressive, modern art", negative: "realistic, detailed, representational, photographic" },
    "minimalist": { name: "極簡主義 ⬜", prompt: "minimalist art, simple, clean lines, negative space, limited color palette, modern, elegant", negative: "detailed, complex, ornate, cluttered" },
    "graffiti": { name: "塗鴉藝術 🎨", prompt: "graffiti art, street art, spray paint, urban, bold colors, tags, wild style lettering", negative: "classical, refined, photorealistic, corporate" },
    "surrealism": { name: "超現實主義 🌀", prompt: "surrealism, dreamlike, Salvador Dali style, impossible geometry, bizarre, subconscious imagery", negative: "realistic, ordinary, conventional, logical" },
    "horror": { name: "恐怖風格 👻", prompt: "horror art, creepy, disturbing, dark atmosphere, unsettling, macabre, gothic horror", negative: "cute, bright, cheerful, wholesome" },
    "kawaii": { name: "可愛風格 🌸", prompt: "kawaii style, cute, adorable, pastel colors, Japanese cute culture, soft, rounded shapes", negative: "realistic, dark, scary, mature" }
  },
  
  OPTIMIZATION_RULES: {
    MODEL_STEPS: {
      "turbo": { min: 4, optimal: 8, max: 12 },
      "sdxl-lightning": { min: 4, optimal: 6, max: 10 },
      "sd3.5-turbo": { min: 8, optimal: 12, max: 20 },
      "flux": { min: 15, optimal: 20, max: 30 },
      "flux-anime": { min: 15, optimal: 20, max: 30 },
      "flux-3d": { min: 15, optimal: 22, max: 35 },
      "sd3": { min: 18, optimal: 25, max: 35 },
      "sdxl": { min: 20, optimal: 28, max: 40 },
      "flux-realism": { min: 20, optimal: 28, max: 40 },
      "flux-pro": { min: 25, optimal: 32, max: 45 },
      "flux-1.1-pro": { min: 20, optimal: 28, max: 40 },
      "sd3.5-large": { min: 25, optimal: 35, max: 50 },
      "flux-kontext": { min: 22, optimal: 30, max: 40 },
      "flux-kontext-pro": { min: 25, optimal: 35, max: 45 },
      "any-dark": { min: 18, optimal: 24, max: 35 },
      "nanobanana": { min: 15, optimal: 22, max: 30 },
      "nanobanana-pro": { min: 25, optimal: 35, max: 50 }
    },
    SIZE_MULTIPLIER: {
      small: { threshold: 512 * 512, multiplier: 0.8 },
      medium: { threshold: 1024 * 1024, multiplier: 1.0 },
      large: { threshold: 1536 * 1536, multiplier: 1.15 },
      xlarge: { threshold: 2048 * 2048, multiplier: 1.3 },
      ultra_4k: { threshold: 4096 * 4096, multiplier: 1.5 }
    },
    STYLE_ADJUSTMENT: {
      "photorealistic": 1.1,
      "oil-painting": 1.05,
      "watercolor": 0.95,
      "sketch": 0.9,
      "default": 1.0
    }
  },
  
  HD_OPTIMIZATION: {
    enabled: true,
    QUALITY_MODES: {
      economy: { name: "經濟模式", description: "快速出圖,適合測試", min_resolution: 1024, max_resolution: 2048, steps_multiplier: 0.85, guidance_multiplier: 0.9, hd_level: "basic" },
      standard: { name: "標準模式", description: "平衡質量與速度", min_resolution: 1280, max_resolution: 2048, steps_multiplier: 1.0, guidance_multiplier: 1.0, hd_level: "enhanced" },
      ultra: { name: "超高清模式", description: "極致質量,耗時較長", min_resolution: 1536, max_resolution: 4096, steps_multiplier: 1.35, guidance_multiplier: 1.15, hd_level: "maximum", force_upscale: true },
      ultra_4k: { name: "4K超高清", description: "Nano Banana Pro 專屬", min_resolution: 2048, max_resolution: 4096, steps_multiplier: 1.5, guidance_multiplier: 1.2, hd_level: "ultra_4k", force_upscale: true, exclusive_models: ["nanobanana-pro"] }
    },
    HD_PROMPTS: {
      basic: "high quality, detailed, sharp",
      enhanced: "high quality, extremely detailed, sharp focus, crisp, clear, professional, 8k uhd, masterpiece, fine details",
      maximum: "ultra high quality, extremely detailed, razor sharp focus, crystal clear, professional grade, 8k uhd resolution, masterpiece quality, fine details, intricate details, perfect clarity",
      ultra_4k: "ultra high definition 4K quality, extreme detail precision, professional grade, pixel-perfect clarity, masterpiece quality, intricate fine details"
    },
    HD_NEGATIVE: "low quality, blurry, pixelated, low resolution, jpeg artifacts, compression artifacts, bad quality, distorted, noisy, grainy, poor details, soft focus, out of focus",
    MODEL_QUALITY_PROFILES: {
      "flux-realism": { priority: "ultra_detail", min_resolution: 1536, max_resolution: 2048, optimal_steps_boost: 1.25, guidance_boost: 1.15, recommended_quality: "ultra" },
      "flux-pro": { priority: "maximum_quality", min_resolution: 1536, max_resolution: 2048, optimal_steps_boost: 1.3, guidance_boost: 1.2, recommended_quality: "ultra" },
      "flux-1.1-pro": { priority: "maximum_quality", min_resolution: 1536, max_resolution: 2048, optimal_steps_boost: 1.25, guidance_boost: 1.15, recommended_quality: "ultra" },
      "sd3.5-large": { priority: "high_detail", min_resolution: 1280, max_resolution: 2048, optimal_steps_boost: 1.2, guidance_boost: 1.1, recommended_quality: "standard" },
      "flux-anime": { priority: "clarity", min_resolution: 1280, max_resolution: 2048, optimal_steps_boost: 1.15, guidance_boost: 1.1, recommended_quality: "standard" },
      "flux-3d": { priority: "detail", min_resolution: 1280, max_resolution: 2048, optimal_steps_boost: 1.2, guidance_boost: 1.1, recommended_quality: "standard" },
      "flux-kontext": { priority: "image_edit", min_resolution: 1280, max_resolution: 2048, optimal_steps_boost: 1.2, guidance_boost: 1.1, recommended_quality: "standard" },
      "flux-kontext-pro": { priority: "image_edit_pro", min_resolution: 1536, max_resolution: 2048, optimal_steps_boost: 1.3, guidance_boost: 1.15, recommended_quality: "ultra" },
      "nanobanana": { priority: "multi_image", min_resolution: 1280, max_resolution: 2048, optimal_steps_boost: 1.15, guidance_boost: 1.1, recommended_quality: "standard" },
      "nanobanana-pro": { priority: "ultra_4k_multi", min_resolution: 2048, max_resolution: 4096, optimal_steps_boost: 1.5, guidance_boost: 1.25, recommended_quality: "ultra_4k" },
      "turbo": { priority: "speed", min_resolution: 1024, max_resolution: 2048, optimal_steps_boost: 0.7, guidance_boost: 0.85, recommended_quality: "economy" },
      "sdxl-lightning": { priority: "speed", min_resolution: 1024, max_resolution: 2048, optimal_steps_boost: 0.6, guidance_boost: 0.8, recommended_quality: "economy" },
      "sd3.5-turbo": { priority: "balanced_speed", min_resolution: 1024, max_resolution: 2048, optimal_steps_boost: 0.8, guidance_boost: 0.9, recommended_quality: "economy" }
    }
  },
  
  FETCH_TIMEOUT: 90000,
  MAX_RETRIES: 3,
  
  PRESET_SIZES: {
    "square-512": { width: 512, height: 512, name: "方形 512px (快速測試)" },
    "square-1k": { width: 1024, height: 1024, name: "方形 1K (標準)" },
    "square-1.5k": { width: 1536, height: 1536, name: "方形 1.5K (高清)" },
    "square-2k": { width: 2048, height: 2048, name: "方形 2K (超清)" },
    "square-4k": { width: 4096, height: 4096, name: "方形 4K 🍌", exclusive: ["nanobanana-pro"] },
    "portrait-9-16": { width: 768, height: 1344, name: "豎屏 9:16 (TikTok/Story)" },
    "portrait-9-16-hd": { width: 1080, height: 1920, name: "豎屏 9:16 HD (1080p)" },
    "portrait-9-16-2k": { width: 1536, height: 2688, name: "豎屏 9:16 2K" },
    "portrait-3-4": { width: 768, height: 1024, name: "豎屏 3:4 (Instagram)" },
    "portrait-3-4-hd": { width: 1152, height: 1536, name: "豎屏 3:4 HD" },
    "portrait-2-3": { width: 1024, height: 1536, name: "豎屏 2:3 (Pinterest)" },
    "landscape-16-9": { width: 1344, height: 768, name: "橫屏 16:9 (YouTube)" },
    "landscape-16-9-hd": { width: 1920, height: 1080, name: "橫屏 16:9 HD (1080p)" },
    "landscape-16-9-2k": { width: 2560, height: 1440, name: "橫屏 16:9 2K (1440p)" },
    "landscape-16-9-4k": { width: 3840, height: 2160, name: "橫屏 16:9 4K 🍌", exclusive: ["nanobanana-pro"] },
    "landscape-4-3": { width: 1024, height: 768, name: "橫屏 4:3 (傳統)" },
    "landscape-21-9": { width: 2560, height: 1080, name: "橫屏 21:9 (超寬螢幕)" },
    "instagram-square": { width: 1080, height: 1080, name: "Instagram 方形貼文" },
    "instagram-portrait": { width: 1080, height: 1350, name: "Instagram 豎屏貼文 (4:5)" },
    "instagram-story": { width: 1080, height: 1920, name: "Instagram Story/Reels" },
    "facebook-cover": { width: 2048, height: 1152, name: "Facebook 封面 (16:9)" },
    "twitter-header": { width: 1500, height: 500, name: "Twitter/X 橫幅 (3:1)" },
    "youtube-thumbnail": { width: 1280, height: 720, name: "YouTube 縮圖" },
    "linkedin-banner": { width: 1584, height: 396, name: "LinkedIn 橫幅" },
    "a4-portrait": { width: 2480, height: 3508, name: "A4 豎屏 (300 DPI)" },
    "a4-landscape": { width: 3508, height: 2480, name: "A4 橫屏 (300 DPI)" },
    "poster-24-36": { width: 2400, height: 3600, name: "海報 24x36 英吋" },
    "wallpaper-fhd": { width: 1920, height: 1080, name: "桌布 Full HD (1080p)" },
    "wallpaper-2k": { width: 2560, height: 1440, name: "桌布 2K (1440p)" },
    "wallpaper-4k": { width: 3840, height: 2160, name: "桌布 4K 🍌", exclusive: ["nanobanana-pro"] },
    "wallpaper-ultrawide": { width: 3440, height: 1440, name: "桌布 Ultra-Wide (21:9)" },
    "mobile-wallpaper": { width: 1242, height: 2688, name: "手機桌布 (iPhone)" },
    "custom": { width: 1024, height: 1024, name: "自定義尺寸" }
  },
  
  HISTORY: {
    MAX_ITEMS: 100,
    STORAGE_KEY: "flux_ai_history"
  }
};
// 🚀 API 優化配置
const API_OPTIMIZATION = {
  RATE_LIMIT: {
    enabled: true,
    max_requests_per_minute: 10,
    max_requests_per_hour: 100,
    blacklist_duration: 3600000,
    whitelist_ips: []
  },
  CACHE: {
    enabled: true,
    ttl: 3600,
    max_size: 100,
    strategy: 'lru'
  },
  COMPRESSION: {
    enabled: true,
    threshold: 1024,
    quality: 0.85
  },
  CONCURRENCY: {
    max_parallel: 3,
    queue_limit: 10,
    timeout: 120000
  },
  MONITORING: {
    enabled: true,
    log_requests: true,
    track_errors: true,
    performance_metrics: true
  }
};

class RateLimiter {
  constructor() {
    this.requests = new Map();
    this.blacklist = new Map();
  }
  async check(ip) {
    if (this.blacklist.has(ip)) {
      const blockedUntil = this.blacklist.get(ip);
      if (Date.now() < blockedUntil) {
        return { allowed: false, reason: 'IP blocked', retryAfter: Math.ceil((blockedUntil - Date.now()) / 1000) };
      } else {
        this.blacklist.delete(ip);
      }
    }
    if (API_OPTIMIZATION.RATE_LIMIT.whitelist_ips.includes(ip)) return { allowed: true };
    const now = Date.now();
    const oneMinute = 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    if (!this.requests.has(ip)) this.requests.set(ip, []);
    const userRequests = this.requests.get(ip);
    const validRequests = userRequests.filter(time => now - time < oneHour);
    this.requests.set(ip, validRequests);
    const recentRequests = validRequests.filter(time => now - time < oneMinute);
    if (recentRequests.length >= API_OPTIMIZATION.RATE_LIMIT.max_requests_per_minute) {
      return { allowed: false, reason: 'Too many requests per minute', limit: API_OPTIMIZATION.RATE_LIMIT.max_requests_per_minute, current: recentRequests.length };
    }
    if (validRequests.length >= API_OPTIMIZATION.RATE_LIMIT.max_requests_per_hour) {
      this.blacklist.set(ip, now + API_OPTIMIZATION.RATE_LIMIT.blacklist_duration);
      return { allowed: false, reason: 'Hourly limit exceeded', limit: API_OPTIMIZATION.RATE_LIMIT.max_requests_per_hour, blockedUntil: new Date(now + API_OPTIMIZATION.RATE_LIMIT.blacklist_duration).toISOString() };
    }
    validRequests.push(now);
    this.requests.set(ip, validRequests);
    return { allowed: true, remaining: { perMinute: API_OPTIMIZATION.RATE_LIMIT.max_requests_per_minute - recentRequests.length - 1, perHour: API_OPTIMIZATION.RATE_LIMIT.max_requests_per_hour - validRequests.length } };
  }
  reset(ip) {
    this.requests.delete(ip);
    this.blacklist.delete(ip);
  }
}

class SimpleCache {
  constructor() {
    this.cache = new Map();
    this.accessTime = new Map();
  }
  get(key) {
    if (!API_OPTIMIZATION.CACHE.enabled) return null;
    const cached = this.cache.get(key);
    if (!cached) return null;
    const { value, expires } = cached;
    if (Date.now() > expires) {
      this.cache.delete(key);
      this.accessTime.delete(key);
      return null;
    }
    this.accessTime.set(key, Date.now());
    return value;
  }
  set(key, value, ttl = API_OPTIMIZATION.CACHE.ttl) {
    if (!API_OPTIMIZATION.CACHE.enabled) return;
    if (this.cache.size >= API_OPTIMIZATION.CACHE.max_size) {
      let oldestKey = null;
      let oldestTime = Date.now();
      for (const [k, time] of this.accessTime.entries()) {
        if (time < oldestTime) {
          oldestTime = time;
          oldestKey = k;
        }
      }
      if (oldestKey) {
        this.cache.delete(oldestKey);
        this.accessTime.delete(oldestKey);
      }
    }
    this.cache.set(key, { value: value, expires: Date.now() + (ttl * 1000) });
    this.accessTime.set(key, Date.now());
  }
  clear() {
    this.cache.clear();
    this.accessTime.clear();
  }
}

class PerformanceMonitor {
  constructor() {
    this.metrics = { total_requests: 0, successful_requests: 0, failed_requests: 0, total_duration: 0, avg_duration: 0, errors: [] };
  }
  recordRequest(success, duration, error = null) {
    this.metrics.total_requests++;
    this.metrics.total_duration += duration;
    this.metrics.avg_duration = this.metrics.total_duration / this.metrics.total_requests;
    if (success) {
      this.metrics.successful_requests++;
    } else {
      this.metrics.failed_requests++;
      if (error && this.metrics.errors.length < 100) {
        this.metrics.errors.push({ message: error, timestamp: new Date().toISOString() });
      }
    }
  }
  getStats() {
    return { ...this.metrics, success_rate: ((this.metrics.successful_requests / this.metrics.total_requests) * 100).toFixed(2) + '%', avg_duration_ms: this.metrics.avg_duration.toFixed(2) };
  }
  reset() {
    this.metrics = { total_requests: 0, successful_requests: 0, failed_requests: 0, total_duration: 0, avg_duration: 0, errors: [] };
  }
}

const rateLimiter = new RateLimiter();
const apiCache = new SimpleCache();
const perfMonitor = new PerformanceMonitor();