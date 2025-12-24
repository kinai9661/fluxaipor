// =================================================================================
// Flux-AI-Pro Worker - 完整可用版本
// =================================================================================

const CONFIG = {
  PROJECT_NAME: "Flux-AI-Pro",
  PROJECT_VERSION: "9.6.1",
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
        { id: "zimage", name: "Z-Image Turbo", category: "fast" },
        { id: "flux", name: "Flux Standard", category: "balanced" },
        { id: "turbo", name: "Flux Turbo", category: "fast" },
        { id: "kontext", name: "Kontext", category: "image-to-image" }
      ]
    }
  },
  
  PRESET_SIZES: {
    "square-1k": { name: "方形 1K", width: 1024, height: 1024 },
    "portrait-9-16-hd": { name: "豎屏 9:16 HD", width: 1080, height: 1920 },
    "landscape-16-9-hd": { name: "橫屏 16:9 HD", width: 1920, height: 1080 }
  },
  
  STYLE_PRESETS: {
    none: { name: "無風格", icon: "⚪", category: "none", prompt: "", negative: "" },
    photorealistic: { name: "攝影級寫實", icon: "📸", category: "realistic", prompt: "photorealistic, 8k uhd", negative: "cartoon, anime" },
    anime: { name: "動漫風格", icon: "🎌", category: "anime", prompt: "anime style, manga", negative: "realistic" }
  }
};

function corsHeaders(additionalHeaders = {}) {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    ...additionalHeaders
  };
}

function getClientIP(request) {
  return request.headers.get('cf-connecting-ip') || 'unknown';
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (env.POLLINATIONS_API_KEY) {
      CONFIG.POLLINATIONS_AUTH.enabled = true;
      CONFIG.POLLINATIONS_AUTH.token = env.POLLINATIONS_API_KEY;
    }
    
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }
    
    try {
      if (url.pathname === '/' || url.pathname === '') {
        return new Response(getHTML(), {
          headers: corsHeaders({ 'Content-Type': 'text/html; charset=utf-8' })
        });
      }
      
      if (url.pathname === '/health') {
        return new Response(JSON.stringify({
          status: 'ok',
          version: CONFIG.PROJECT_VERSION,
          timestamp: new Date().toISOString(),
          api_auth: CONFIG.POLLINATIONS_AUTH.enabled
        }), {
          headers: corsHeaders({ 'Content-Type': 'application/json' })
        });
      }
      
      if (url.pathname === '/_internal/generate') {
        return await handleGenerate(request, env);
      }
      
      return new Response('Not Found', { status: 404 });
      
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: corsHeaders({ 'Content-Type': 'application/json' })
      });
    }
  }
};

async function handleGenerate(request, env) {
  try {
    const body = await request.json();
    const prompt = body.prompt;
    
    if (!prompt) {
      throw new Error("Prompt is required");
    }
    
    const model = body.model || "zimage";
    const width = body.width || 1024;
    const height = body.height || 1024;
    const seed = body.seed !== undefined ? body.seed : -1;
    const currentSeed = seed === -1 ? Math.floor(Math.random() * 1000000) : seed;
    
    const encodedPrompt = encodeURIComponent(prompt);
    const apiUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?model=${model}&width=${width}&height=${height}&seed=${currentSeed}&nologo=true`;
    
    const headers = {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'image/*'
    };
    
    if (CONFIG.POLLINATIONS_AUTH.enabled && CONFIG.POLLINATIONS_AUTH.token) {
      headers['Authorization'] = `Bearer ${CONFIG.POLLINATIONS_AUTH.token}`;
    }
    
    const response = await fetch(apiUrl, { headers });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    const imageBlob = await response.blob();
    const imageBuffer = await imageBlob.arrayBuffer();
    
    return new Response(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'X-Model': model,
        'X-Seed': currentSeed.toString(),
        'X-Width': width.toString(),
        'X-Height': height.toString(),
        ...corsHeaders()
      }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ error: { message: error.message } }), {
      status: 400,
      headers: corsHeaders({ 'Content-Type': 'application/json' })
    });
  }
}

function getHTML() {
  return `<!DOCTYPE html>
<html lang="zh-TW" class="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flux AI Pro v${CONFIG.PROJECT_VERSION}</title>
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(240 10% 3.9%)",
        foreground: "hsl(0 0% 98%)",
        primary: { DEFAULT: "hsl(142.1 70.6% 45.3%)" }
      }
    }
  }
};
</script>
<style>
body { background: hsl(240 10% 3.9%); color: hsl(0 0% 98%); }
.spinner { border: 3px solid rgba(255,255,255,0.1); border-top: 3px solid hsl(142.1 70.6% 45.3%); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
</style>
</head>
<body class="antialiased">
<div class="min-h-screen p-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
      🎨 Flux AI Pro
    </h1>
    
    <div class="bg-gray-800 rounded-lg p-6 mb-6">
      <form id="generateForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">提示詞</label>
          <textarea id="prompt" rows="4" required 
            class="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm"
            placeholder="描述你想生成的圖像..."></textarea>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">模型</label>
            <select id="model" class="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm">
              <option value="zimage">Z-Image Turbo ⚡</option>
              <option value="flux">Flux Standard</option>
              <option value="turbo">Flux Turbo</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">尺寸</label>
            <select id="size" class="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm">
              <option value="square-1k">1024x1024</option>
              <option value="portrait-9-16-hd">1080x1920</option>
              <option value="landscape-16-9-hd">1920x1080</option>
            </select>
          </div>
        </div>
        
        <button type="submit" 
          class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
          🎨 開始生成
        </button>
      </form>
    </div>
    
    <div id="results" class="bg-gray-800 rounded-lg p-6">
      <p class="text-center text-gray-400">等待生成...</p>
    </div>
  </div>
</div>

<script>
const PRESET_SIZES = ${JSON.stringify(CONFIG.PRESET_SIZES)};

document.getElementById('generateForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const prompt = document.getElementById('prompt').value;
  const model = document.getElementById('model').value;
  const sizeKey = document.getElementById('size').value;
  const size = PRESET_SIZES[sizeKey];
  
  const results = document.getElementById('results');
  results.innerHTML = '<div class="flex justify-center"><div class="spinner"></div></div>';
  
  try {
    const response = await fetch('/_internal/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        model,
        width: size.width,
        height: size.height,
        seed: -1
      })
    });
    
    if (!response.ok) throw new Error('生成失敗');
    
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    
    results.innerHTML = \`
      <img src="\${url}" class="w-full rounded-lg" alt="Generated image">
      <div class="mt-4 text-center">
        <a href="\${url}" download="flux-ai.png" 
          class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md">
          📥 下載圖像
        </a>
      </div>
    \`;
    
  } catch (error) {
    results.innerHTML = '<p class="text-center text-red-400">生成失敗: ' + error.message + '</p>';
  }
});
</script>
</body>
</html>`;
}
