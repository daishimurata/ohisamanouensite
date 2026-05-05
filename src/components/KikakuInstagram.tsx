import React from 'react';
import styles from './KikakuInstagram.module.css';

export const KikakuInstagram = () => {
  return (
    <section className={styles.section} id="instagram">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>おひさま企画 公式Instagram</h2>
        <p className={styles.text}>
          日々の活動の様子や、最新のお知らせなどを発信しています！<br />
          ぜひフォローをお願いします！
        </p>

        {/* 無料で使えるInstagram公式の単一投稿埋め込み */}
        <div className={styles.instagramGrid}>
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

          <iframe
            src="https://www.instagram.com/p/DXYCCyYDwGC/embed"
            width="320"
            height="400"
            scrolling="no"
            style={{ border: 'none', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          ></iframe>
        </div>

        <div className={styles.buttonContainer}>
          <a href="https://www.instagram.com/ohisamakikaku/?hl=ja" target="_blank" rel="noopener noreferrer" className={styles.externalLinkBtn}>
            公式Instagramをもっと見る
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    </section>
  );
};
