import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

// 設定のデフォルト値
const defaultSettings = {
  instagramUrl: 'https://www.instagram.com/ohisama_kikaku/',
  facebookUrl: '',
  xUrl: '',
  lineUrl: '',
};

export async function GET() {
  try {
    const rawData = await redis.get<any>('settings');
    const parsedData = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
    const settings = parsedData ? { ...defaultSettings, ...parsedData } : defaultSettings;
    return NextResponse.json({ settings });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ settings: defaultSettings });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 現在の設定を取得してマージ
    const rawData = await redis.get<any>('settings');
    const parsedData = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
    const currentSettings = parsedData || defaultSettings;
    const newSettings = { ...currentSettings, ...data };
    
    // Redisに保存
    await redis.set('settings', JSON.stringify(newSettings));
    
    return NextResponse.json({ success: true, settings: newSettings });
  } catch (error) {
    console.error('Error saving settings:', error);
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
  }
}
