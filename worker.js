// =================================================================================
//  項目: Flux AI Pro
//  版本: 9.3.0-shadcn-ui
//  作者: Enhanced by AI Assistant  
//  日期: 2025-12-23
//  功能: 多張生成 | Seed控制 | 39種風格 | 35+尺寸 | API優化 | ShadCN UI
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
function getClientIP(request) {
  return request.headers.get('CF-Connecting-IP') || (request.headers.get('X-Forwarded-For') ? request.headers.get('X-Forwarded-For').split(',')[0].trim() : null) || request.headers.get('X-Real-IP') || 'unknown';
}

function generateCacheKey(prompt, options) {
  const keyData = { prompt, model: options.model, width: options.width, height: options.height, style: options.style, quality_mode: options.qualityMode, seed: options.seed === -1 ? 'random' : options.seed };
  const str = JSON.stringify(keyData);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return 'cache_' + Math.abs(hash).toString(36);
}

class Logger {
    constructor() { this.logs = []; }
    add(step, data) {
        const time = new Date().toISOString().split('T')[1].slice(0, -1);
        this.logs.push({ time, step, data });
        console.log(`[${step}]`, data);
    }
    get() { return this.logs; }
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
            const response = await env.AI.run("@cf/meta/m2m100", { text: text, source_lang: "chinese", target_lang: "english" });
            if (response && response.translated_text) {
                console.log("✅ Translation:", text, "→", response.translated_text);
                return { text: response.translated_text, translated: true, original: text, model: "m2m100" };
            }
        } catch (primaryError) {
            console.warn("⚠️ m2m100 failed:", primaryError.message);
            try {
                const response = await env.AI.run("@cf/meta/m2m100-1.2b", { text: text, source_lang: "chinese", target_lang: "english" });
                if (response && response.translated_text) {
                    return { text: response.translated_text, translated: true, original: text, model: "m2m100-1.2b" };
                }
            } catch (fallbackError) {
                console.error("❌ All translation failed");
            }
        }
        return { text: text, translated: false };
    } catch (error) {
        console.error("❌ translateToEnglish error:", error);
        return { text: text, translated: false, error: error.message };
    }
}

class PromptAnalyzer {
    static analyzeComplexity(prompt) {
        const complexKeywords = ['detailed', 'intricate', 'complex', 'elaborate', 'realistic', 'photorealistic', 'hyperrealistic', 'architecture', 'cityscape', 'landscape', 'portrait', 'face', 'eyes', 'hair', 'texture', 'material', 'fabric', 'skin', 'lighting', 'shadows', 'reflections', 'fine details', 'high detail', 'ultra detailed', '4k', '8k', 'uhd'];
        let score = 0;
        const lowerPrompt = prompt.toLowerCase();
        complexKeywords.forEach(keyword => { if (lowerPrompt.includes(keyword)) score += 0.1; });
        if (prompt.length > 100) score += 0.2;
        if (prompt.length > 200) score += 0.3;
        if (prompt.split(',').length > 5) score += 0.15;
        return Math.min(score, 1.0);
    }
    static recommendQualityMode(prompt, model) {
        const complexity = this.analyzeComplexity(prompt);
        const profile = CONFIG.HD_OPTIMIZATION.MODEL_QUALITY_PROFILES[model];
        if (model === 'nanobanana-pro') return 'ultra_4k';
        if (profile?.recommended_quality) return profile.recommended_quality;
        if (complexity > 0.7) return 'ultra';
        if (complexity > 0.4) return 'standard';
        return 'economy';
    }
}

class HDOptimizer {
    static optimize(prompt, negativePrompt, model, width, height, qualityMode = 'standard', autoHD = true) {
        if (!autoHD || !CONFIG.HD_OPTIMIZATION.enabled) {
            return { prompt: prompt, negativePrompt: negativePrompt, width: width, height: height, optimized: false };
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
            enhancedNegative = enhancedNegative ? enhancedNegative + ", " + hdConfig.HD_NEGATIVE : hdConfig.HD_NEGATIVE;
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
        
        return { prompt: enhancedPrompt, negativePrompt: enhancedNegative, width: finalWidth, height: finalHeight, optimized: true, quality_mode: qualityMode, hd_level: hdLevel, optimizations: optimizations, size_upscaled: sizeUpscaled };
    }
}

class ParameterOptimizer {
    static optimizeSteps(model, width, height, style = 'none', qualityMode = 'standard', userSteps = null) {
        if (userSteps !== null && userSteps !== -1) {
            const suggestion = this.calculateOptimalSteps(model, width, height, style, qualityMode);
            return { steps: userSteps, optimized: false, suggested: suggestion.steps, reasoning: suggestion.reasoning, user_override: true };
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
        
        if (totalPixels >= rules.SIZE_MULTIPLIER.ultra_4k.threshold) {
            sizeMultiplier = rules.SIZE_MULTIPLIER.ultra_4k.multiplier;
            reasoning.push("4K超大 x" + sizeMultiplier);
        } else if (totalPixels >= rules.SIZE_MULTIPLIER.xlarge.threshold) {
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
        return { steps: optimizedSteps, optimized: true, base_steps: baseSteps, size_multiplier: sizeMultiplier, style_multiplier: styleMultiplier, quality_multiplier: qualityMultiplier, profile_boost: profileBoost, min_steps: modelRule.min, max_steps: modelRule.max, reasoning: reasoning.join(' ') };
    }
    
    static optimizeGuidance(model, style, qualityMode = 'standard') {
        const modeConfig = CONFIG.HD_OPTIMIZATION.QUALITY_MODES[qualityMode];
        const profile = CONFIG.HD_OPTIMIZATION.MODEL_QUALITY_PROFILES[model];
        let baseGuidance = 7.5;
        
        if (model.includes('turbo') || model.includes('lightning')) {
            baseGuidance = style === 'photorealistic' ? 3.0 : 2.5;
        } else if (style === 'photorealistic') {
            baseGuidance = 8.5;
        } else if (['oil-painting', 'watercolor', 'sketch'].includes(style)) {
            baseGuidance = 6.5;
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
                return { enhancedPrompt: prompt, enhancedNegative: negativePrompt || "" };
            }
            if (!CONFIG.STYLE_PRESETS || typeof CONFIG.STYLE_PRESETS !== 'object') {
                console.warn("⚠️ STYLE_PRESETS not found");
                return { enhancedPrompt: prompt, enhancedNegative: negativePrompt || "" };
            }
            const styleConfig = CONFIG.STYLE_PRESETS[style];
            if (!styleConfig) {
                console.warn("⚠️ Style '" + style + "' not found");
                return { enhancedPrompt: prompt, enhancedNegative: negativePrompt || "" };
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
            console.log("✅ Style applied:", style);
            return { enhancedPrompt: enhancedPrompt, enhancedNegative: enhancedNegative };
        } catch (error) {
            console.error("❌ StyleProcessor error:", error.message);
            return { enhancedPrompt: prompt, enhancedNegative: negativePrompt || "" };
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
        if (error.name === 'AbortError') throw new Error("Request timeout after " + timeout + "ms");
        throw error;
    }
}
class PollinationsProvider {
    constructor(config, env) {
        this.config = config;
        this.name = config.name;
        this.env = env;
    }
    
    async generate(prompt, options, logger) {
        const { 
            model = "flux", 
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
        const is4KModel = modelConfig?.max_size === 4096;
        
        let validReferenceImages = [];
        if (referenceImages && referenceImages.length > 0) {
            if (!supportsRefImages) {
                logger.add("⚠️ Reference Images", { 
                    warning: model + " 不支持參考圖,已忽略", 
                    supported_models: ["kontext", "kontext-pro", "nanobanana", "nanobanana-pro"] 
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
                    mode: validReferenceImages.length === 1 ? "圖生圖" : "多圖融合"
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
            is_4k_model: is4KModel,
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
            const stepsOptimization = ParameterOptimizer.optimizeSteps(model, finalWidth, finalHeight, style, qualityMode, steps);
            finalSteps = stepsOptimization.steps;
            logger.add("🎯 Steps Optimization", { steps: stepsOptimization.steps, reasoning: stepsOptimization.reasoning });
            
            if (guidance === null) {
                finalGuidance = ParameterOptimizer.optimizeGuidance(model, style, qualityMode);
            } else {
                finalGuidance = guidance;
            }
        } else {
            finalSteps = steps || 20;
            finalGuidance = guidance || 7.5;
        }
        
        const { enhancedPrompt, enhancedNegative } = StyleProcessor.applyStyle(finalPrompt, style, finalNegativePrompt);
        
        logger.add("🎨 Style Processing", { 
            selected_style: style,
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
        
        const modelsToTry = [model];
        if (modelConfig?.experimental && modelConfig?.fallback) {
            modelsToTry.push(...modelConfig.fallback);
        }
        
        logger.add("🎨 Generation Config", { 
            provider: this.name, 
            model: model, 
            dimensions: finalWidth + "x" + finalHeight,
            is_4k: finalWidth >= 4096 || finalHeight >= 4096,
            quality_mode: qualityMode, 
            hd_optimized: autoHD && hdOptimization?.optimized, 
            auto_translated: translation.translated,
            style_applied: style !== 'none',
            reference_images: validReferenceImages.length,
            generation_mode: validReferenceImages.length > 0 ? (validReferenceImages.length === 1 ? "圖生圖" : "多圖融合") : "文生圖",
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
        
        for (const tryModel of modelsToTry) {
            for (let retry = 0; retry < CONFIG.MAX_RETRIES; retry++) {
                try {
                    let url = this.config.endpoint + "/prompt/" + encodedPrompt;
                    const params = new URLSearchParams();
                    params.append('model', tryModel);
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
                    url += '?' + params.toString();
                    
                    const response = await fetchWithTimeout(url, { 
                        method: 'GET', 
                        headers: { 
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 
                            'Accept': 'image/*,*/*', 
                            'Accept-Encoding': 'gzip, deflate, br', 
                            'Connection': 'keep-alive', 
                            'Referer': 'https://pollinations.ai/' 
                        } 
                    }, 90000);
                    
                    if (response.ok) {
                        const contentType = response.headers.get('content-type');
                        if (contentType && contentType.startsWith('image/')) {
                            logger.add("✅ Success", { 
                                url: response.url, 
                                used_model: tryModel, 
                                final_size: finalWidth + "x" + finalHeight,
                                is_4k: finalWidth >= 4096 || finalHeight >= 4096,
                                quality_mode: qualityMode, 
                                style_used: style,
                                hd_optimized: autoHD && hdOptimization?.optimized, 
                                auto_translated: translation.translated,
                                reference_images_used: validReferenceImages.length,
                                generation_mode: validReferenceImages.length > 0 ? (validReferenceImages.length === 1 ? "圖生圖" : "多圖融合") : "文生圖",
                                seed: currentSeed 
                            });
                            
                            return { 
                                url: response.url, 
                                provider: this.name, 
                                model: tryModel, 
                                requested_model: model, 
                                seed: currentSeed, 
                                style: style, 
                                steps: finalSteps, 
                                guidance: finalGuidance, 
                                width: finalWidth, 
                                height: finalHeight,
                                is_4k: finalWidth >= 4096 || finalHeight >= 4096,
                                quality_mode: qualityMode, 
                                prompt_complexity: promptComplexity, 
                                hd_optimized: autoHD && hdOptimization?.optimized, 
                                hd_details: hdOptimization, 
                                auto_translated: translation.translated,
                                reference_images: validReferenceImages,
                                reference_images_count: validReferenceImages.length,
                                generation_mode: validReferenceImages.length > 0 ? (validReferenceImages.length === 1 ? "圖生圖" : "多圖融合") : "文生圖",
                                cost: "FREE", 
                                fallback_used: tryModel !== model, 
                                auto_optimized: autoOptimize 
                            };
                        } else {
                            throw new Error("Invalid content type: " + contentType);
                        }
                    } else {
                        throw new Error("HTTP " + response.status);
                    }
                } catch (e) {
                    if (retry < CONFIG.MAX_RETRIES - 1) {
                        await new Promise(resolve => setTimeout(resolve, 1000 * (retry + 1)));
                    }
                }
            }
        }
        throw new Error("All models failed");
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
            const currentOptions = { ...options, seed: options.seed === -1 ? -1 : options.seed + i };
            const result = await provider.generate(prompt, currentOptions, logger);
            results.push(result);
        }
        return results;
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
async function handleImageGenerations(request, env, ctx) {
    const logger = new Logger();
    const startTime = Date.now();
    
    try {
        const body = await request.json();
        const prompt = body.prompt;
        if (!prompt || !prompt.trim()) throw new Error("Prompt is required");
        
        let width = 1024, height = 1024;
        if (body.size) {
            const [w, h] = body.size.split('x').map(Number);
            if (w && h) { width = w; height = h; }
        }
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
            model: body.model || "flux", 
            width: Math.min(Math.max(width, 256), 4096), 
            height: Math.min(Math.max(height, 256), 4096), 
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
        
        let cacheKey = null;
        let cachedResult = null;
        
        if (options.seed !== -1 && referenceImages.length === 0 && options.numOutputs === 1) {
            cacheKey = generateCacheKey(prompt, options);
            cachedResult = apiCache.get(cacheKey);
            
            if (cachedResult) {
                logger.add("💾 Cache Hit", { key: cacheKey });
                return new Response(JSON.stringify({
                    created: Math.floor(Date.now() / 1000),
                    data: cachedResult,
                    cached: true,
                    cache_key: cacheKey
                }), { 
                    headers: corsHeaders({ 
                        'Content-Type': 'application/json',
                        'X-Cache': 'HIT',
                        'X-Cache-Key': cacheKey
                    }) 
                });
            }
        }
        
        const router = new MultiProviderRouter({}, env);
        const results = await router.generate(prompt, options, logger);
        
        if (cacheKey && options.seed !== -1 && options.numOutputs === 1) {
            const cacheData = results.map(r => ({
                url: r.url,
                provider: r.provider,
                model: r.model,
                seed: r.seed,
                width: r.width,
                height: r.height,
                is_4k: r.is_4k,
                style: r.style,
                quality_mode: r.quality_mode,
                reference_images: r.reference_images || [],
                reference_images_count: r.reference_images_count || 0,
                generation_mode: r.generation_mode || "文生圖",
                cost: r.cost
            }));
            apiCache.set(cacheKey, cacheData);
            logger.add("💾 Cache Saved", { key: cacheKey });
        }
        
        const duration = Date.now() - startTime;
        
        return new Response(JSON.stringify({ 
            created: Math.floor(Date.now() / 1000), 
            data: results.map(r => ({ 
                url: r.url, 
                provider: r.provider, 
                model: r.model, 
                seed: r.seed, 
                width: r.width, 
                height: r.height,
                is_4k: r.is_4k,
                reference_images: r.reference_images || [],
                reference_images_count: r.reference_images_count || 0,
                generation_mode: r.generation_mode || "文生圖",
                style: r.style, 
                quality_mode: r.quality_mode, 
                prompt_complexity: r.prompt_complexity, 
                steps: r.steps, 
                guidance: r.guidance, 
                auto_optimized: r.auto_optimized, 
                hd_optimized: r.hd_optimized, 
                auto_translated: r.auto_translated,
                cost: r.cost 
            })),
            cached: false,
            generation_time_ms: duration
        }), { 
            headers: corsHeaders({ 
                'Content-Type': 'application/json',
                'X-Cache': 'MISS',
                'X-Generation-Time': duration + 'ms'
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
            status: 500, 
            headers: corsHeaders({ 'Content-Type': 'application/json' }) 
        });
    }
}

async function handleChatCompletions(request, env, ctx) {
    const logger = new Logger();
    try {
        const body = await request.json();
        const messages = body.messages;
        if (!messages || !Array.isArray(messages)) throw new Error("messages is required");
        
        const userMessage = messages.filter(m => m.role === 'user').pop();
        if (!userMessage || !userMessage.content) throw new Error("No user message found");
        
        const prompt = userMessage.content;
        const options = { 
            model: body.model || "flux", 
            width: 1024, 
            height: 1024, 
            seed: -1, 
            style: "none", 
            autoOptimize: true, 
            autoHD: true, 
            qualityMode: 'standard' 
        };
        
        const router = new MultiProviderRouter({}, env);
        const results = await router.generate(prompt, options, logger);
        const imageUrl = results[0].url;
        
        return new Response(JSON.stringify({ 
            id: "chatcmpl-" + Date.now(), 
            object: "chat.completion", 
            created: Math.floor(Date.now() / 1000), 
            model: results[0].model, 
            choices: [{ 
                index: 0, 
                message: { 
                    role: "assistant", 
                    content: "![Generated Image](" + imageUrl + ")\n\nImage generated successfully!" 
                }, 
                finish_reason: "stop" 
            }], 
            usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 } 
        }), { 
            headers: corsHeaders({ 'Content-Type': 'application/json' }) 
        });
    } catch (e) {
        logger.add("❌ Error", e.message);
        return new Response(JSON.stringify({ 
            error: { 
                message: e.message, 
                debug_logs: logger.get() 
            } 
        }), { 
            status: 500, 
            headers: corsHeaders({ 'Content-Type': 'application/json' }) 
        });
    }
}

function handleModelsRequest() {
    const allModels = [];
    for (const [providerKey, providerConfig] of Object.entries(CONFIG.PROVIDERS)) {
        if (providerConfig.enabled && providerConfig.models) {
            for (const model of providerConfig.models) {
                allModels.push({ 
                    id: model.id, 
                    name: model.name, 
                    provider: providerKey, 
                    category: model.category || 'general', 
                    description: model.description || '', 
                    max_size: model.max_size || 2048, 
                    confirmed: model.confirmed !== false, 
                    experimental: model.experimental === true, 
                    fallback: model.fallback || null,
                    ultra_hd: model.ultra_hd || false,
                    supports_reference_images: model.supports_reference_images || false,
                    max_reference_images: model.max_reference_images || 0
                });
            }
        }
    }
    return new Response(JSON.stringify({ 
        object: 'list', 
        data: allModels 
    }), { 
        headers: corsHeaders({ 'Content-Type': 'application/json' }) 
    });
}

function handleProvidersRequest() {
    const providersList = [];
    for (const [key, config] of Object.entries(CONFIG.PROVIDERS)) {
        if (config.enabled) {
            providersList.push({ 
                id: key, 
                name: config.name, 
                type: config.type, 
                auth_mode: config.auth_mode, 
                requires_key: config.requires_key, 
                description: config.description, 
                features: config.features, 
                model_count: config.models?.length || 0 
            });
        }
    }
    return new Response(JSON.stringify({ 
        object: 'list', 
        data: providersList 
    }), { 
        headers: corsHeaders({ 'Content-Type': 'application/json' }) 
    });
}

function handleStylesRequest() {
    const stylesList = [];
    for (const [key, styleConfig] of Object.entries(CONFIG.STYLE_PRESETS)) {
        stylesList.push({ 
            id: key, 
            name: styleConfig.name, 
            prompt_addition: styleConfig.prompt || "", 
            negative_addition: styleConfig.negative || "" 
        });
    }
    return new Response(JSON.stringify({ 
        object: 'list', 
        data: stylesList, 
        total: stylesList.length 
    }), { 
        headers: corsHeaders({ 'Content-Type': 'application/json' }) 
    });
}
function handleSizesRequest() {
    const sizesList = [];
    for (const [key, sizeConfig] of Object.entries(CONFIG.PRESET_SIZES)) {
        sizesList.push({ 
            id: key, 
            name: sizeConfig.name, 
            width: sizeConfig.width, 
            height: sizeConfig.height,
            aspect_ratio: (sizeConfig.width / sizeConfig.height).toFixed(2),
            exclusive: sizeConfig.exclusive || null,
            is_4k: sizeConfig.width >= 4096 || sizeConfig.height >= 4096
        });
    }
    return new Response(JSON.stringify({ 
        object: 'list', 
        data: sizesList, 
        total: sizesList.length 
    }), { 
        headers: corsHeaders({ 'Content-Type': 'application/json' }) 
    });
}

function handleQualityModesRequest() {
    const qualityModes = [];
    for (const [key, modeConfig] of Object.entries(CONFIG.HD_OPTIMIZATION.QUALITY_MODES)) {
        qualityModes.push({ 
            id: key, 
            name: modeConfig.name, 
            description: modeConfig.description,
            min_resolution: modeConfig.min_resolution,
            max_resolution: modeConfig.max_resolution,
            steps_multiplier: modeConfig.steps_multiplier,
            guidance_multiplier: modeConfig.guidance_multiplier,
            hd_level: modeConfig.hd_level,
            exclusive_models: modeConfig.exclusive_models || null
        });
    }
    return new Response(JSON.stringify({ 
        object: 'list', 
        data: qualityModes, 
        total: qualityModes.length 
    }), { 
        headers: corsHeaders({ 'Content-Type': 'application/json' }) 
    });
}

function handleHealthCheck() {
    return new Response(JSON.stringify({ 
        status: 'healthy', 
        version: CONFIG.PROJECT_VERSION, 
        uptime: process?.uptime ? process.uptime() : 'N/A', 
        timestamp: new Date().toISOString() 
    }), { 
        headers: corsHeaders({ 'Content-Type': 'application/json' }) 
    });
}

function handleStatsRequest() {
    const stats = perfMonitor.getStats();
    return new Response(JSON.stringify({ 
        object: 'stats', 
        data: stats 
    }), { 
        headers: corsHeaders({ 'Content-Type': 'application/json' }) 
    });
}

async function handleAppUI(request, env) {
    try {
        const githubRawUrl = 'https://raw.githubusercontent.com/kinai9661/fluxaipor/main/app.html';
        
        const response = await fetch(githubRawUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Cache-Control': 'no-cache'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch app.html from GitHub: ' + response.status);
        }
        
        let html = await response.text();
        
        const workerUrl = new URL(request.url);
        const apiBase = workerUrl.origin;
        
        html = html.replace(/{{API_BASE_URL}}/g, apiBase);
        html = html.replace(/{{PROJECT_VERSION}}/g, CONFIG.PROJECT_VERSION);
        html = html.replace(/{{PROJECT_NAME}}/g, CONFIG.PROJECT_NAME);
        
        return new Response(html, {
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'public, max-age=300',
                'X-Content-Source': 'GitHub',
                'X-App-Version': CONFIG.PROJECT_VERSION,
                ...corsHeaders()
            }
        });
    } catch (error) {
        console.error('Error loading app UI:', error);
        
        const fallbackHTML = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flux AI Pro - 載入錯誤</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .error-container {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            max-width: 500px;
        }
        h1 { margin: 0 0 1rem 0; font-size: 2.5rem; }
        p { margin: 0.5rem 0; font-size: 1.1rem; opacity: 0.9; }
        .error-message { 
            background: rgba(255, 0, 0, 0.2); 
            padding: 1rem; 
            border-radius: 10px; 
            margin: 1rem 0;
            font-family: monospace;
        }
        .retry-btn {
            display: inline-block;
            margin-top: 1.5rem;
            padding: 0.75rem 2rem;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            transition: transform 0.2s;
        }
        .retry-btn:hover { transform: scale(1.05); }
        .api-info {
            margin-top: 2rem;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            font-size: 0.9rem;
        }
        code {
            background: rgba(0, 0, 0, 0.3);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="error-container">
        <h1>⚠️ UI 載入失敗</h1>
        <p>無法從 GitHub 載入應用程式介面</p>
        <div class="error-message">${error.message}</div>
        <p>但 API 仍然可用!</p>
        <a href="/" class="retry-btn">🔄 重試</a>
        
        <div class="api-info">
            <p><strong>📡 API 端點:</strong></p>
            <p><code>POST ${new URL(request.url).origin}/v1/images/generations</code></p>
            <p style="margin-top: 1rem;">查看文檔: <a href="/api/docs" style="color: #fff;">API Docs</a></p>
        </div>
    </div>
</body>
</html>`;
        
        return new Response(fallbackHTML, {
            status: 500,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                ...corsHeaders()
            }
        });
    }
}

function handleDocsRequest(request) {
    const baseUrl = new URL(request.url).origin;
    const docsHTML = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${CONFIG.PROJECT_NAME} - API 文檔</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f7fa;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3rem 0;
            text-align: center;
            margin-bottom: 2rem;
            border-radius: 0 0 20px 20px;
        }
        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .version { opacity: 0.9; font-size: 1rem; }
        .section {
            background: white;
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h2 {
            color: #667eea;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #667eea;
        }
        h3 { color: #764ba2; margin: 1.5rem 0 1rem 0; }
        code {
            background: #f0f2f5;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
        }
        pre {
            background: #1e1e1e;
            color: #d4d4d4;
            padding: 1.5rem;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1rem 0;
        }
        pre code {
            background: transparent;
            color: inherit;
            padding: 0;
        }
        .endpoint {
            background: #f0f9ff;
            border-left: 4px solid #3b82f6;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 4px;
        }
        .method {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
            font-weight: bold;
            margin-right: 0.5rem;
            font-size: 0.85rem;
        }
        .method.post { background: #10b981; color: white; }
        .method.get { background: #3b82f6; color: white; }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        th, td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        th {
            background: #f9fafb;
            font-weight: 600;
            color: #374151;
        }
        .feature-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 1rem 0;
        }
        .feature-item {
            background: #f0f9ff;
            padding: 1rem;
            border-radius: 8px;
            border-left: 3px solid #3b82f6;
        }
        .back-link {
            display: inline-block;
            margin-top: 2rem;
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
        }
        .back-link:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <header>
        <h1>${CONFIG.PROJECT_NAME}</h1>
        <p class="version">Version ${CONFIG.PROJECT_VERSION}</p>
        <p>強大的 AI 圖像生成 API</p>
    </header>
    
    <div class="container">
        <div class="section">
            <h2>🚀 功能特色</h2>
            <div class="feature-list">
                <div class="feature-item">✨ <strong>多模型支持</strong><br>17+ AI 模型可選</div>
                <div class="feature-item">🎨 <strong>39種風格預設</strong><br>從動漫到寫實</div>
                <div class="feature-item">📐 <strong>35+尺寸預設</strong><br>支持最高 4K 解析度</div>
                <div class="feature-item">🎯 <strong>智能優化</strong><br>自動步數與質量優化</div>
                <div class="feature-item">🌐 <strong>自動翻譯</strong><br>中文提示詞自動翻譯</div>
                <div class="feature-item">🖼️ <strong>圖生圖</strong><br>支持參考圖像融合</div>
                <div class="feature-item">🔢 <strong>Seed 控制</strong><br>可重現的生成結果</div>
                <div class="feature-item">⚡ <strong>批量生成</strong><br>單次最多 4 張</div>
            </div>
        </div>

        <div class="section">
            <h2>📡 API 端點</h2>
            
            <h3>1. 生成圖像</h3>
            <div class="endpoint">
                <span class="method post">POST</span>
                <code>${baseUrl}/v1/images/generations</code>
            </div>
            
            <h4>請求參數:</h4>
            <table>
                <thead>
                    <tr>
                        <th>參數</th>
                        <th>類型</th>
                        <th>必填</th>
                        <th>說明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>prompt</code></td>
                        <td>string</td>
                        <td>✅</td>
                        <td>圖像描述提示詞</td>
                    </tr>
                    <tr>
                        <td><code>model</code></td>
                        <td>string</td>
                        <td>❌</td>
                        <td>模型名稱 (默認: flux)</td>
                    </tr>
                    <tr>
                        <td><code>width</code></td>
                        <td>number</td>
                        <td>❌</td>
                        <td>寬度 256-4096 (默認: 1024)</td>
                    </tr>
                    <tr>
                        <td><code>height</code></td>
                        <td>number</td>
                        <td>❌</td>
                        <td>高度 256-4096 (默認: 1024)</td>
                    </tr>
                    <tr>
                        <td><code>n</code></td>
                        <td>number</td>
                        <td>❌</td>
                        <td>生成數量 1-4 (默認: 1)</td>
                    </tr>
                    <tr>
                        <td><code>seed</code></td>
                        <td>number</td>
                        <td>❌</td>
                        <td>隨機種子 0-999999 (默認: -1 隨機)</td>
                    </tr>
                    <tr>
                        <td><code>style</code></td>
                        <td>string</td>
                        <td>❌</td>
                        <td>風格預設 ID (默認: none)</td>
                    </tr>
                    <tr>
                        <td><code>quality_mode</code></td>
                        <td>string</td>
                        <td>❌</td>
                        <td>quality_mode: economy | standard | ultra | ultra_4k</td>
                    </tr>
                    <tr>
                        <td><code>reference_images</code></td>
                        <td>array</td>
                        <td>❌</td>
                        <td>參考圖像 URL 數組 (圖生圖)</td>
                    </tr>
                    <tr>
                        <td><code>negative_prompt</code></td>
                        <td>string</td>
                        <td>❌</td>
                        <td>負面提示詞</td>
                    </tr>
                    <tr>
                        <td><code>auto_hd</code></td>
                        <td>boolean</td>
                        <td>❌</td>
                        <td>自動高清優化 (默認: true)</td>
                    </tr>
                    <tr>
                        <td><code>auto_optimize</code></td>
                        <td>boolean</td>
                        <td>❌</td>
                        <td>自動參數優化 (默認: true)</td>
                    </tr>
                </tbody>
            </table>

            <h4>請求示例:</h4>
            <pre><code>{
  "prompt": "一隻可愛的貓咪在花園裡玩耍",
  "model": "flux-anime",
  "width": 1024,
  "height": 1024,
  "n": 1,
  "seed": 12345,
  "style": "anime",
  "quality_mode": "ultra",
  "auto_hd": true
}</code></pre>

            <h4>圖生圖示例:</h4>
            <pre><code>{
  "prompt": "將這張圖片轉換成動漫風格",
  "model": "nanobanana",
  "reference_images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "style": "anime",
  "quality_mode": "ultra"
}</code></pre>

            <h3>2. 獲取模型列表</h3>
            <div class="endpoint">
                <span class="method get">GET</span>
                <code>${baseUrl}/v1/models</code>
            </div>

            <h3>3. 獲取風格列表</h3>
            <div class="endpoint">
                <span class="method get">GET</span>
                <code>${baseUrl}/api/styles</code>
            </div>

            <h3>4. 獲取尺寸預設</h3>
            <div class="endpoint">
                <span class="method get">GET</span>
                <code>${baseUrl}/api/sizes</code>
            </div>

            <h3>5. 獲取質量模式</h3>
            <div class="endpoint">
                <span class="method get">GET</span>
                <code>${baseUrl}/api/quality-modes</code>
            </div>

            <h3>6. 健康檢查</h3>
            <div class="endpoint">
                <span class="method get">GET</span>
                <code>${baseUrl}/health</code>
            </div>
        </div>

        <div class="section">
            <h2>🎨 支持的模型</h2>
            <table>
                <thead>
                    <tr>
                        <th>模型 ID</th>
                        <th>名稱</th>
                        <th>分類</th>
                        <th>最大解析度</th>
                        <th>參考圖</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><code>flux</code></td><td>Flux</td><td>通用</td><td>2048px</td><td>-</td></tr>
                    <tr><td><code>flux-realism</code></td><td>Flux Realism</td><td>寫實</td><td>2048px</td><td>-</td></tr>
                    <tr><td><code>flux-anime</code></td><td>Flux Anime</td><td>動漫</td><td>2048px</td><td>-</td></tr>
                    <tr><td><code>flux-pro</code></td><td>Flux Pro</td><td>專業</td><td>2048px</td><td>-</td></tr>
                    <tr><td><code>nanobanana</code></td><td>Nano Banana 🍌</td><td>Gemini</td><td>2048px</td><td>最多4張</td></tr>
                    <tr><td><code>nanobanana-pro</code></td><td>Nano Banana Pro 🍌💎</td><td>Gemini 4K</td><td>4096px</td><td>最多4張</td></tr>
                    <tr><td><code>flux-kontext</code></td><td>Flux Kontext 🎨</td><td>圖像編輯</td><td>2048px</td><td>1張</td></tr>
                    <tr><td><code>turbo</code></td><td>Turbo</td><td>快速</td><td>2048px</td><td>-</td></tr>
                </tbody>
            </table>
        </div>

        <a href="/" class="back-link">← 返回主頁</a>
    </div>
</body>
</html>`;

    return new Response(docsHTML, {
        headers: corsHeaders({ 'Content-Type': 'text/html; charset=utf-8' })
    });
}
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const clientIP = getClientIP(request);
        
        if (request.method === 'OPTIONS') {
            return new Response(null, { 
                status: 204, 
                headers: corsHeaders() 
            });
        }
        
        if (API_OPTIMIZATION.RATE_LIMIT.enabled) {
            const rateLimitCheck = await rateLimiter.check(clientIP);
            if (!rateLimitCheck.allowed) {
                return new Response(JSON.stringify({ 
                    error: { 
                        message: rateLimitCheck.reason, 
                        type: 'rate_limit_exceeded', 
                        details: rateLimitCheck 
                    } 
                }), { 
                    status: 429, 
                    headers: corsHeaders({ 
                        'Content-Type': 'application/json',
                        'Retry-After': rateLimitCheck.retryAfter?.toString() || '60'
                    }) 
                });
            }
        }
        
        const startTime = Date.now();
        let success = false;
        let error = null;
        
        try {
            if (url.pathname === '/' || url.pathname === '') {
                const response = await handleAppUI(request, env);
                success = true;
                return response;
            }
            
            if (url.pathname === '/api/docs' || url.pathname === '/docs') {
                success = true;
                return handleDocsRequest(request);
            }
            
            if (url.pathname === '/v1/images/generations') {
                if (request.method !== 'POST') {
                    return new Response(JSON.stringify({ 
                        error: { message: 'Method not allowed' } 
                    }), { 
                        status: 405, 
                        headers: corsHeaders({ 'Content-Type': 'application/json' }) 
                    });
                }
                const response = await handleImageGenerations(request, env, ctx);
                success = response.status === 200;
                return response;
            }
            
            if (url.pathname === '/v1/chat/completions') {
                if (request.method !== 'POST') {
                    return new Response(JSON.stringify({ 
                        error: { message: 'Method not allowed' } 
                    }), { 
                        status: 405, 
                        headers: corsHeaders({ 'Content-Type': 'application/json' }) 
                    });
                }
                const response = await handleChatCompletions(request, env, ctx);
                success = response.status === 200;
                return response;
            }
            
            if (url.pathname === '/v1/models') {
                success = true;
                return handleModelsRequest();
            }
            
            if (url.pathname === '/api/providers') {
                success = true;
                return handleProvidersRequest();
            }
            
            if (url.pathname === '/api/styles') {
                success = true;
                return handleStylesRequest();
            }
            
            if (url.pathname === '/api/sizes') {
                success = true;
                return handleSizesRequest();
            }
            
            if (url.pathname === '/api/quality-modes') {
                success = true;
                return handleQualityModesRequest();
            }
            
            if (url.pathname === '/health') {
                success = true;
                return handleHealthCheck();
            }
            
            if (url.pathname === '/api/stats') {
                success = true;
                return handleStatsRequest();
            }
            
            if (url.pathname === '/api/cache/clear' && request.method === 'POST') {
                apiCache.clear();
                success = true;
                return new Response(JSON.stringify({ 
                    message: 'Cache cleared successfully' 
                }), { 
                    headers: corsHeaders({ 'Content-Type': 'application/json' }) 
                });
            }
            
            if (url.pathname === '/api/rate-limit/reset' && request.method === 'POST') {
                const body = await request.json();
                const targetIP = body.ip || clientIP;
                rateLimiter.reset(targetIP);
                success = true;
                return new Response(JSON.stringify({ 
                    message: 'Rate limit reset for IP: ' + targetIP 
                }), { 
                    headers: corsHeaders({ 'Content-Type': 'application/json' }) 
                });
            }
            
            success = false;
            error = '404 Not Found';
            return new Response(JSON.stringify({ 
                error: { 
                    message: 'Not found', 
                    path: url.pathname,
                    available_endpoints: [
                        'GET /',
                        'GET /api/docs',
                        'POST /v1/images/generations',
                        'POST /v1/chat/completions',
                        'GET /v1/models',
                        'GET /api/providers',
                        'GET /api/styles',
                        'GET /api/sizes',
                        'GET /api/quality-modes',
                        'GET /health',
                        'GET /api/stats'
                    ]
                } 
            }), { 
                status: 404, 
                headers: corsHeaders({ 'Content-Type': 'application/json' }) 
            });
            
        } catch (e) {
            success = false;
            error = e.message;
            console.error('Worker error:', e);
            return new Response(JSON.stringify({ 
                error: { 
                    message: e.message,
                    type: 'internal_error'
                } 
            }), { 
                status: 500, 
                headers: corsHeaders({ 'Content-Type': 'application/json' }) 
            });
        } finally {
            const duration = Date.now() - startTime;
            if (API_OPTIMIZATION.MONITORING.enabled) {
                perfMonitor.recordRequest(success, duration, error);
            }
        }
    }
};
