import React from 'react';
import { KikakuHeader } from '@/components/KikakuHeader';
import { KikakuFooter } from '@/components/KikakuFooter';
import { KikakuContact } from '@/components/KikakuContact';
import styles from './WebMedia.module.css';

export const metadata = {
  title: 'Webメディア運営（ほっこりナビ） | おひさま企画',
  description: '就労継続支援B型事業所「おひさま企画」の活動内容「Webメディア運営（ほっこりナビ）」についての詳細ページです。',
};

export default function WebMediaPage() {
  return (
    <div className="theme-kikaku">
      <KikakuHeader />
      <main style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
        <div className={styles.container}>
          <h1 className={styles.title}>Webメディア運営</h1>
          <p className={styles.subtitle}>
            福祉ポータルサイト「ほっこりナビ」の運営を通じて、デジタルスキルと情報発信力を身につけます。
          </p>

          <div className={styles.imageWrap}>
            <img 
              src="/images/kikaku/スクリーンショット 2026-05-03 16.12.44.png" 
              alt="ほっこりナビ 地図検索ページ" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>

          <div className={styles.contentBox}>
            <h2 className={styles.sectionTitle}>「ほっこりナビ」とは？</h2>
            <p className={styles.text}>
              「ほっこりナビ」は、地域の福祉事業所やサービスを必要とする方々をつなぐためのポータルサイトです。<br />
              地図機能を使った事業所検索や、施設ごとの詳細な情報、関連するニュース記事などを発信しています。
            </p>
            <p className={styles.text}>
              おひさま企画では、この「ほっこりナビ」の運営・更新作業を利用者様のお仕事として提供しています。
              自分の関わったページや記事が実際に公開され、誰かの役に立つ喜びを実感できるやりがいのある活動です。
            </p>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <a href="https://hokkorinavi.com/" target="_blank" rel="noopener noreferrer" className={styles.externalLinkBtn}>
                「ほっこりナビ」を見てみる
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>

          <div className={styles.contentBox}>
            <h2 className={styles.sectionTitle}>お仕事の流れ（取材から公開まで）</h2>
            <p className={styles.text}>
              「ほっこりナビ」のコンテンツ制作では、単なるパソコン作業だけでなく、実際の取材から公開までの一連のプロセスを体験できます。
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>1. 取材・写真撮影：</strong><br />
                実際に事業所や関係者のもとへ足を運び、取材や写真撮影を行います。現場では名刺交換など、実践的なビジネスマナーも身につけることができます。
              </li>
              <li className={styles.listItem}>
                <strong>2. 記事の執筆とAI活用：</strong><br />
                インタビューしてきた内容をもとに記事をまとめます。さらにAIツールを活用することで、より伝わりやすく、魅力的なウェブ記事として完成させます。
              </li>
              <li className={styles.listItem}>
                <strong>3. 写真のレイアウト：</strong><br />
                撮影した写真の選定や加工を行い、記事が読みやすくなるようにウェブページ上のレイアウトを整えます。
              </li>
              <li className={styles.listItem}>
                <strong>4. ウェブサイトへのアップロード・公開：</strong><br />
                完成した記事と写真を「ほっこりナビ」のシステムにアップロードし、世の中に公開します。自分の手がけた記事が形になる達成感を味わえます。
              </li>
            </ul>
          </div>
        </div>

        {/* お問い合わせセクション */}
        <KikakuContact />
      </main>
      <KikakuFooter />
    </div>
  );
}
