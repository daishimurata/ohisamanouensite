import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

// お知らせの取得
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'farm'; // 'farm' or 'kikaku'
  const key = `news:${type}`;

  try {
    const rawData = await redis.get(key);
    const news = rawData ? JSON.parse(rawData) : [];
    return NextResponse.json({ news });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

// お知らせの追加・更新
export async function POST(request: Request) {
  try {
    const { type, news } = await request.json();
    if (!type || !news) {
      return NextResponse.json({ error: 'Missing type or news data' }, { status: 400 });
    }

    const key = `news:${type}`;
    await redis.set(key, JSON.stringify(news));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving news:', error);
    return NextResponse.json({ error: 'Failed to save news' }, { status: 500 });
  }
}
