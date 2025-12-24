# Flux AI Pro - Shadcn UI Edition

🎨 基於 Shadcn/ui + React + TypeScript 的 AI 圖像生成平台

## ✨ 特性

- 🏛️ **現代化 UI**: 使用 Shadcn/ui 組件系統
- 🔥 **多模型支持**: Z-Image, Flux, Turbo, Kontext
- 🎨 **45+ 風格**: 涵蓋動漫、寫實、油畫等 13 大類
- ⚡ **TypeScript**: 完整的類型安全
- 🔐 **API 認證**: 支持 Pollinations.ai API Key
- 💾 **歷史記錄**: 本地存儲生成記錄
- 🌙 **暗黑主題**: 優雅的暗色界面

## 🛠️ 技術栈

- **前端**: React 18 + TypeScript + Vite
- **UI 框架**: Shadcn/ui + Radix UI
- **樣式**: Tailwind CSS
- **後端**: Cloudflare Workers (worker.js 保持不變)
- **部署**: Cloudflare Pages

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 本地開發

```bash
npm run dev
```

然後打開 http://localhost:5173

### 3. 構建生產版本

```bash
npm run build
```

產出文件在 `dist/` 目錄

## 💻 部署到 Cloudflare Pages

### 方法1: 使用 Wrangler CLI

```bash
# 先構建項目
npm run build

# 部署到 Cloudflare Pages
npx wrangler pages deploy dist --project-name=flux-ai-pro
```

### 方法2: 使用 GitHub Actions

1. 連接到 Cloudflare Pages Dashboard
2. 選擇此倉庫
3. 設定構建配置：
   - **構建命令**: `npm run build`
   - **輸出目錄**: `dist`
   - **Node 版本**: 18+

### 設置環境變量

在 Cloudflare Pages 設定中添加：

```bash
POLLINATIONS_API_KEY=your_api_key_here
```

## 📚 項目結構

```
flux-ai-pro-shadcn/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI 組件
│   │   ├── generate/        # 生成表單組件
│   │   ├── gallery/         # 圖庫組件
│   │   └── history/         # 歷史記錄組件
│   ├── lib/
│   │   ├── api.ts           # API 調用
│   │   ├── storage.ts       # localStorage 管理
│   │   └── utils.ts         # 工具函數
│   ├── types/
│   │   └── index.ts         # TypeScript 類型
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── workers/
│   └── worker.js          # Cloudflare Worker (後端 API)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── components.json       # Shadcn 配置
└── wrangler.toml         # Cloudflare 配置
```

## 🌐 API 端點

### Worker API (後端)

- `GET /` - Web UI 界面
- `POST /_internal/generate` - 圖像生成
- `GET /health` - 健康檢查

### 生成請求示例

```json
{
  "prompt": "A beautiful sunset over mountains",
  "model": "flux",
  "width": 1024,
  "height": 1024,
  "style": "oil-painting",
  "quality_mode": "standard",
  "seed": -1,
  "n": 1,
  "negative_prompt": "blurry, low quality",
  "auto_optimize": true,
  "auto_hd": true
}
```

## 🔧 開發說明

### 添加新的 Shadcn 組件

```bash
npx shadcn-ui@latest add [component-name]
```

### 修改風格

編輯 `workers/worker.js` 中的 `CONFIG.STYLE_PRESETS`

### 修改主題顏色

編輯 `src/index.css` 中的 CSS 變量

## 📝 認證配置

### 獲取 Pollinations API Key

1. 訪問 [Pollinations.ai](https://pollinations.ai)
2. 註冊並獲取 API Key
3. 設定環境變量

### 本地測試

```bash
# 設定 Wrangler secret
wrangler secret put POLLINATIONS_API_KEY

# 或者在 .dev.vars 文件中設定
echo "POLLINATIONS_API_KEY=your_key_here" > .dev.vars
```

## 🐛 問題排查

### API 認證失敗

確保已設定 `POLLINATIONS_API_KEY` 環境變量

### 本地開發 CORS 錯誤

確保 Worker 在本地也有運行，或使用代理

### 構建錯誤

```bash
# 清除 node_modules 並重新安裝
rm -rf node_modules package-lock.json
npm install
```

## 💬 支持

- GitHub Issues: [報告 Bug](https://github.com/kinai9661/fluxaipor/issues)
- Discussions: [討論區](https://github.com/kinai9661/fluxaipor/discussions)

## 📦 版本

- **v10.0.0**: Shadcn/ui 重構版本
- **v9.6.1**: 原 HTML/JS 版本 (worker.js)

## 📝 許可證

MIT License

---

由 [你的名字](https://github.com/kinai9661) 使用 ❤️ 打造
