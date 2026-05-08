import React from 'react';
import Link from 'next/link';
import styles from './Cards.module.css';

export const KikakuServices = () => {
  return (
    <section className="section section-bg-gray" id="services">
      <div className="container">
        <h2 className="section-title">活動紹介</h2>
        <div className={styles.cardGrid}>
          {/* Card 1 */}
          <Link href="/kikaku/web-media" className={styles.card} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className={styles.cardImage}>
              <img src="/images/kikaku/スクリーンショット 2026-05-03 16.12.44.png" alt="Webメディア運営" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Webメディア運営</h3>
              <p className={styles.cardDesc}>福祉ポータル「ほっこりナビ」の運営や記事作成など、実践的なデジタルスキルを学べます。</p>
            </div>
          </Link>
          {/* Card 2 */}
          <Link href="/kikaku/sns-marketing" className={styles.card} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className={styles.cardImage}>
              <img src="/images/kikaku/IMG_2437.jpeg" alt="SNS・マーケティング" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>SNS・Webマーケティング</h3>
              <p className={styles.cardDesc}>公式SNSアカウントの運用やデータ解析を通じてマーケティングを実践。マイペースにスキルアップを目指せます。</p>
            </div>
          </Link>
          {/* Card 3 */}
          <Link href="/kikaku/handmade" className={styles.card} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className={styles.cardImage}>
              <img src="/images/kikaku/DSC_0011.JPG" alt="ハンドメイド" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>ハンドメイド・物販</h3>
              <p className={styles.cardDesc}>ネイルチップやレジン作品などのハンドメイド制作と販売。ものづくりが好きな方にぴったりのお仕事です。</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
