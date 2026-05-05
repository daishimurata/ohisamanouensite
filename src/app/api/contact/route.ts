import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

export async function GET() {
  try {
    const rawData = await redis.get('contacts');
    const contacts = rawData ? JSON.parse(rawData) : [];
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 既存のお問い合わせを取得
    const rawData = await redis.get('contacts');
    const contacts = rawData ? JSON.parse(rawData) : [];
    
    // 新しいお問い合わせを追加
    const newContact = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...data,
      isRead: false
    };
    
    contacts.unshift(newContact); // 最新のものを先頭に
    
    // Redisに保存
    await redis.set('contacts', JSON.stringify(contacts));
    
    return NextResponse.json({ success: true, contact: newContact });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
  }
}

// 既読状態の更新や削除用
export async function PUT(request: Request) {
  try {
    const { id, action } = await request.json();
    
    const rawData = await redis.get('contacts');
    let contacts = rawData ? JSON.parse(rawData) : [];
    
    if (action === 'markAsRead') {
      contacts = contacts.map((c: any) => c.id === id ? { ...c, isRead: true } : c);
    } else if (action === 'delete') {
      contacts = contacts.filter((c: any) => c.id !== id);
    }
    
    await redis.set('contacts', JSON.stringify(contacts));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
  }
}
