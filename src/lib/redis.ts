import { createClient } from 'redis';

// Vercel等から提供されたREDIS_URLを最優先し、フォールバックとして固定URLも設定
const defaultUrl = 'redis://default:wOlBMFMMCZbg12rGIEOAiLcxmw1NnIZi@redis-15446.c91.us-east-1-3.ec2.cloud.redislabs.com:15446';
const redisUrl = process.env.REDIS_URL || process.env.KV_REST_API_URL || defaultUrl;

const globalForRedis = global as unknown as { redisClient: ReturnType<typeof createClient> };

const client = globalForRedis.redisClient || createClient({ url: redisUrl });

if (process.env.NODE_ENV !== 'production') globalForRedis.redisClient = client;

client.on('error', (err) => console.error('Redis Client Error', err));

let isConnected = false;
async function ensureConnected() {
  if (!isConnected && !client.isOpen) {
    try {
      await client.connect();
      isConnected = true;
      console.log('✅ Connected to Redis successfully');
    } catch (error) {
      console.error('❌ Failed to connect to Redis', error);
    }
  }
}

// 既存の @upstash/redis コードの互換性を保つためのラッパー
export const redis = {
  async get<T = any>(key: string): Promise<T | null> {
    await ensureConnected();
    const result = await client.get(key);
    return result as any;
  },
  async set(key: string, value: string): Promise<string | null> {
    await ensureConnected();
    return client.set(key, value);
  }
};
