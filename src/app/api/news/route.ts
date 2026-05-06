import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

const initialFarmNews = [
  {
    id: '3',
    date: '2026.05.05',
    category: 'お知らせ',
    title: 'メディア掲載：「農家の決断」にて当園が紹介されました',
    content: '<p>農業と就労支援をテーマにしたメディア「農家の決断」にて、おひさま農園の取り組みが掲載されました。</p><p>「自社で就労継続支援B型事業所も運営する新規就農者」として、代表の村田が取材を受け、農業と福祉の連携（農福連携）にかける想いや、これまでの経緯についてお話しさせていただいております。</p><p>ぜひ以下のリンクより記事をご覧ください。</p><p>▼「農家の決断」掲載記事はこちら<br><a href="https://nouka-ketsudan.site/%e8%87%aa%e7%a4%be%e3%81%a7%e5%b0%b1%e5%8a%b4%e7%b6%99%e7%b6%9a%e6%94%af%e6%8f%b4b%e5%9e%8b%e4%ba%8b%e6%a5%ad%e6%89%80%e3%82%82%e9%81%8b%e5%96%b6%e3%81%99%e3%82%8b%e6%96%b0%e8%a6%8f%e5%b0%b1%e8%be%b2/" target="_blank" rel="noopener noreferrer">自社で就労継続支援B型事業所も運営する新規就農者</a></p>'
  },
  {
    id: '1',
    date: '2025.03.07',
    category: 'プレスリリース',
    title: '「クリエシード」開設のお知らせ'
  },
  {
    id: '2',
    date: '2025.03.07',
    category: 'プレスリリース',
    title: '「おひさま工房」コースを3月1日より開設'
  },
  {
    id: '4',
    date: '2023.12.10',
    category: 'プレスリリース',
    title: '農福連携の取り組みが地元メディアに取り上げられました'
  },
  {
    id: '5',
    date: '2023.10.05',
    category: 'お知らせ',
    title: '見学・体験の受付を随時行っています'
  }
];

const initialKikakuNews = [
  { id: '1', date: '2026.04.15', category: 'お知らせ', title: 'おひさま企画の公式ウェブサイトをリニューアルしました。' },
  { id: '2', date: '2026.04.01', category: 'お知らせ', title: '「ほっこりナビ」の新機能リリースについて' },
  { id: '3', date: '2026.03.10', category: 'お知らせ', title: '鈴鹿市のマルシェに出店いたします。' },
];

// お知らせの取得
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'farm'; // 'farm' or 'kikaku'
  const key = `news:${type}`;
  const fallbackNews = type === 'farm' ? initialFarmNews : initialKikakuNews;

  try {
    const rawData = await redis.get<any>(key);
    const parsedData = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
    let news = (parsedData && parsedData.length > 0) ? parsedData : fallbackNews;
    
    // 現在のRedisデータにカテゴリが無いか、件数が少ない場合は、実際の公開データ（fallbackNews）で上書き同期する
    if (type === 'farm' && (news.length < 5 || !news[0].category)) {
      news = fallbackNews;
      await redis.set(key, JSON.stringify(news));
    }
    if (type === 'kikaku' && (news.length > 0 && !news[0].category)) {
      news = fallbackNews;
      await redis.set(key, JSON.stringify(news));
    }

    return NextResponse.json({ news });
  } catch (error) {
    console.error('Error fetching news:', error);
    // エラー時（Vercel KV未設定など）もフォールバックを返す
    return NextResponse.json({ news: fallbackNews });
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
