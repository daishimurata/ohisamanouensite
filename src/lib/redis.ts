import { Redis } from '@upstash/redis';

// Vercel KV (Upstash) は HTTP 経由でアクセスするため、
// 接続エラーやコネクションのタイムアウトが発生しにくくなります。

const kvUrl = process.env.KV_REST_API_URL || '';
const kvToken = process.env.KV_REST_API_TOKEN || '';

if (!kvUrl || !kvToken) {
  console.warn('⚠️ KV_REST_API_URL または KV_REST_API_TOKEN が環境変数に設定されていません。Vercelダッシュボードの Storage 画面から取得し、.env.development.local に追加してください。');
}

export const redis = new Redis({
  url: kvUrl,
  token: kvToken,
});
