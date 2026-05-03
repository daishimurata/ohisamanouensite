import React from 'react';
import { KikakuHeader } from '@/components/KikakuHeader';
import { KikakuFooter } from '@/components/KikakuFooter';
import { KikakuContact } from '@/components/KikakuContact';
import styles from './SnsMarketing.module.css';

export const metadata = {
  title: 'SNS・Webマーケティング | おひさま企画',
  description: '就労継続支援B型事業所「おひさま企画」の活動内容「SNS・Webマーケティング」についての詳細ページです。',
};

export default function SnsMarketingPage() {
  return (
    <div className="theme-kikaku">
      <KikakuHeader />
      <main style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
        <div className={styles.container}>
          <h1 className={styles.title}>SNS・Webマーケティング</h1>
          <p className={styles.subtitle}>
            公式SNSの運用を通じて、魅力的な発信方法やデータを活用したマーケティングを学びます。
          </p>

          <div className={styles.imageWrap}>
            <img 
              src="/images/kikaku/IMG_2437.jpeg" 
              alt="SNS・Webマーケティングの活動風景" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>

          <div className={styles.contentBox}>
            <h2 className={styles.sectionTitle}>お仕事の流れ</h2>
            <p className={styles.text}>
              Instagramなどを活用し、おひさま企画や地域の魅力をお届けします。撮影から投稿、分析まで、実践的なSNS運用スキルを身につけることができます。
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>1. 企画・写真撮影：</strong><br />
                どんな内容を発信するかアイデアを出し合い、素材となる写真や動画を撮影します。
              </li>
              <li className={styles.listItem}>
                <strong>2. 画像編集・デザイン：</strong><br />
                アプリやソフトを使い、写真の色調補正や文字入れなどを行い、パッと目を引く魅力的な画像を作成します。
              </li>
              <li className={styles.listItem}>
                <strong>3. 文章作成（キャプション考案）：</strong><br />
                投稿に添える文章や、検索されやすいハッシュタグ（#）を考えます。
              </li>
              <li className={styles.listItem}>
                <strong>4. 投稿とデータ分析：</strong><br />
                実際にSNSへ投稿し、「どれくらい見られたか」「どんな反応があったか」といったデータを確認・分析して次の投稿に活かします。
              </li>
            </ul>
          </div>

          <div className={styles.contentBox}>
            <h2 className={styles.sectionTitle}>おひさま企画 公式Instagram</h2>
            <p className={styles.text}>
              私たちが実際に運営しているInstagramアカウントです。<br />
              日々の活動の様子や、最新のお知らせなどを発信しています！
            </p>

            {/* 無料で使えるInstagram公式の単一投稿埋め込み */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
              <iframe
                src="https://www.instagram.com/p/DXf0XNvj3qq/embed"
                width="320"
                height="400"
                scrolling="no"
                style={{ border: 'none', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
              ></iframe>

              <iframe
                src="https://www.instagram.com/p/DXfwglTjwP0/embed"
                width="320"
                height="400"
                scrolling="no"
                style={{ border: 'none', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
              ></iframe>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <a href="https://www.instagram.com/ohisamakikaku/?hl=ja" target="_blank" rel="noopener noreferrer" className={styles.externalLinkBtn}>
                公式Instagramをもっと見る
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>

        {/* お問い合わせセクション */}
        <KikakuContact />
      </main>
      <KikakuFooter />
    </div>
  );
}
