import { HistoryItem, GeneratedImage } from '@/types';

const STORAGE_KEY = 'flux_ai_history';
const MAX_HISTORY = 100;

export function getHistory(): HistoryItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load history:', e);
    return [];
  }
}

export function saveHistory(history: HistoryItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Failed to save history:', e);
  }
}

export function addToHistory(item: Omit<HistoryItem, 'id' | 'timestamp'>): void {
  let history = getHistory();
  history.unshift({
    ...item,
    id: Date.now() + Math.random(),
    timestamp: new Date().toISOString(),
  });
  
  if (history.length > MAX_HISTORY) {
    history = history.slice(0, MAX_HISTORY);
  }
  
  saveHistory(history);
}

export function deleteFromHistory(id: string | number): void {
  const history = getHistory().filter(item => item.id !== id);
  saveHistory(history);
}

export function clearHistory(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportHistory(): void {
  const history = getHistory();
  const dataStr = JSON.stringify(history, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `flux-ai-history-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

export function getStorageSize(): number {
  const history = getHistory();
  return new Blob([JSON.stringify(history)]).size;
}
