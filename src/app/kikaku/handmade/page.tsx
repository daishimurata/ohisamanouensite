import React from 'react';
import { KikakuHeader } from '@/components/KikakuHeader';
import { KikakuFooter } from '@/components/KikakuFooter';
import { KikakuContact } from '@/components/KikakuContact';
import styles from './Handmade.module.css';

export const metadata = {
  title: 'ハンドメイド・物販 | おひさま企画',
  description: '就労継続支援B型事業所「おひさま企画」の活動内容「ハンドメイド・物販」についての詳細ページです。',
};

export default function HandmadePage() {
  return (
    <div className="theme-kikaku">
      <KikakuHeader />
      <main style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
        <div className={styles.container}>
          <h1 className={styles.title}>ハンドメイド・物販</h1>
          <p className={styles.subtitle}>
            「おひさま工房」として、オリジナルネイルチップなどのハンドメイド作品を制作・販売しています。
          </p>

          <div className={styles.imageWrap}>
            <img 
              src="/images/kikaku/DSC_0011.JPG" 
              alt="ハンドメイド制作の活動風景" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>

          <div className={styles.contentBox}>
            <h2 className={styles.sectionTitle}>おひさま工房の作品たち</h2>
            <p className={styles.text}>
              一つひとつ手作業で丁寧に制作しているネイルチップです。普段使いから特別な日のオシャレまで、様々なデザインをご用意しています。
              <br />ものづくりが好きな方、手先の細かい作業が得意な方が大活躍できるお仕事です！
            </p>
            
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <img 
                  src="/images/kikaku/image.png" 
                  alt="ハンドメイド作品例1（ネイルチップ）" 
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <img 
                  src="/images/kikaku/image copy.png" 
                  alt="ハンドメイド作品例2（ネイルチップ）" 
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <img 
                  src="/images/kikaku/image copy 2.png" 
                  alt="ハンドメイド作品例3（ネイルチップ）" 
                  className={styles.galleryImage}
                />
              </div>
            </div>
            
            <p className={styles.text} style={{ textAlign: 'center', marginTop: '30px' }}>
              これらの作品は、フリマアプリ「メルカリ」にて出品・販売を行っております。<br />
              梱包から発送準備まで、実際のお店のような業務も体験できます。
            </p>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <a href="https://jp.mercari.com/user/profile/393449310" target="_blank" rel="noopener noreferrer" className={styles.externalLinkBtn}>
                メルカリのショップを見る
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
