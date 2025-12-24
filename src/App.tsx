import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getHealthStatus } from '@/lib/api';
import { getHistory } from '@/lib/storage';
import type { HealthStatus } from '@/types';

function App() {
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);
  const [historyCount, setHistoryCount] = useState(0);

  useEffect(() => {
    // 獲取健康狀態
    getHealthStatus().then(setHealthStatus).catch(console.error);
    
    // 獲取歷史記錄數量
    setHistoryCount(getHistory().length);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* 頂部導航 */}
      <header className="border-b border-white/10 backdrop-blur-lg bg-gray-900/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                🎨 Flux AI Pro
              </h1>
              <Badge variant="secondary">
                {healthStatus?.version || 'Loading...'}
              </Badge>
              <Badge className="bg-pink-500/20 text-pink-300 hover:bg-pink-500/30">
                Shadcn UI
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                {healthStatus?.styles_count || 0} 風格
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              {healthStatus?.api_auth.enabled ? (
                <Badge className="bg-green-500/20 text-green-300">
                  🔐 已認證
                </Badge>
              ) : (
                <Badge variant="destructive">
                  ⚠️ 需要 API Key
                </Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 主內容 */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="generate">
              🎨 生成圖像
            </TabsTrigger>
            <TabsTrigger value="history" className="relative">
              📚 歷史記錄
              {historyCount > 0 && (
                <Badge className="ml-2 bg-orange-500/20 text-orange-300">
                  {historyCount}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="mt-6">
            <Card className="bg-gray-800/50 border-white/10">
              <CardHeader>
                <CardTitle>生成圖像</CardTitle>
                <CardDescription>
                  使用 AI 生成高質量的圖像，支持 {healthStatus?.styles_count || 0} 種風格
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-lg mb-4">🚧 組件開發中...</p>
                  <p className="text-sm">生成表單組件即將上線</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card className="bg-gray-800/50 border-white/10">
              <CardHeader>
                <CardTitle>歷史記錄</CardTitle>
                <CardDescription>
                  查看已生成的圖像記錄
                </CardDescription>
              </CardHeader>
              <CardContent>
                {historyCount === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <p className="text-lg mb-2">📋 無歷史記錄</p>
                    <p className="text-sm">生成的圖像會自動保存在這裡</p>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p className="text-lg mb-4">🚧 組件開發中...</p>
                    <p className="text-sm">歷史記錄列表即將上線</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* API 狀態卡片 */}
        {healthStatus && (
          <Card className="mt-8 bg-gray-800/50 border-white/10">
            <CardHeader>
              <CardTitle className="text-sm">📡 API 狀態</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">端點</div>
                  <div className="font-mono text-xs mt-1 text-green-400">
                    {healthStatus.api_auth.endpoint}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">模型數量</div>
                  <div className="font-bold text-lg text-primary">
                    {healthStatus.models.length}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">風格數量</div>
                  <div className="font-bold text-lg text-primary">
                    {healthStatus.styles_count}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Workers AI</div>
                  <div className="font-bold text-lg">
                    {healthStatus.workers_ai ? '✅' : '❌'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}

export default App;
