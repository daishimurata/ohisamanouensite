import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { redis } from '@/lib/redis';
import styles from './page.module.css';

import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

type NewsItem = {
  id: string;
  date: string;
  title: string;
  link?: string;
  content?: string;
};

// paramsの型定義
type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function getArticle(id: string): Promise<NewsItem | null> {
  try {
    const rawData = await redis.get<any>('news:farm');
    const parsedData = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
    const news: NewsItem[] = parsedData || [];
    // IDの一致チェック（文字列として比較）
    const article = news.find(p => p.id.toString() === id);
    if (article) return article;

    // もし農園ニュースになければ企画側も探す
    const kikakuRaw = await redis.get<any>('news:kikaku');
    const kikakuParsed = typeof kikakuRaw === 'string' ? JSON.parse(kikakuRaw) : kikakuRaw;
    const kikakuNews: NewsItem[] = kikakuParsed || [];
    return kikakuNews.find(p => p.id.toString() === id) || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// メタデータの生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.id);
  
  if (!article) {
    return { title: '記事が見つかりません | おひさま農園' };
  }
  
  const rawContent = article.content ? article.content.replace(/<[^>]+>/g, '').substring(0, 100) : '';
  return {
    title: `${article.title} | プレスリリース | おひさま農園`,
    description: rawContent + '...',
  };
}

export default async function PressDetailPage({ params }: Props) {
  // params を await で解決する
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.id);

  if (!article) {
    notFound();
  }

  // エディタ（ReactQuill）からのHTMLがある場合はそのまま、ない場合はURL等をリンク化する程度のフォールバック
  const htmlContent = article.content || '<p>詳細情報はありません。</p>';

  return (
    <>
      <Header />
      <main className={styles.main}>
        <PageHero title="プレスリリース・お知らせ" subtitle="NEWS & PRESS" />
        
        <section className={styles.articleSection}>
          <article className={styles.articleContainer}>
            <header className={styles.articleHeader}>
              <div className={styles.articleMeta}>
                <time className={styles.date}>{article.date}</time>
                <span className={styles.category}>お知らせ</span>
              </div>
              <h1 className={styles.title}>{article.title}</h1>
            </header>
            
            <div 
              className={styles.articleBody} 
              dangerouslySetInnerHTML={{ __html: htmlContent }} 
            />

            {article.link && (
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#e6f2eb', color: '#1a5c37', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                  外部リンクへ移動する
                </a>
              </div>
            )}
            
            <div className={styles.backLinkContainer}>
              <Link href="/press" className={styles.backLink}>
                一覧へ戻る
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
