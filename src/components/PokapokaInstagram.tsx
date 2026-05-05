import React from 'react';
import styles from './PokapokaInstagram.module.css';

export const PokapokaInstagram = () => {
  return (
    <section className={styles.section} id="pokapoka-instagram">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>ボランティア団体「ぽかぽか隊」活動報告</h2>
        <p className={styles.text}>
          地域に根ざした食育活動や子育て支援など、ぽかぽか隊の活動風景をInstagramでお届けしています。<br />
          ぜひご覧ください！
        </p>

        <div className={styles.instagramGrid}>
          <iframe
            src="https://www.instagram.com/p/DQGbnlIEnw7/embed"
            width="320"
            height="400"
            scrolling="no"
            style={{ border: 'none', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          ></iframe>

          <iframe
            src="https://www.instagram.com/p/DQGcFqDEogN/embed"
            width="320"
            height="400"
            scrolling="no"
            style={{ border: 'none', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          ></iframe>

          <iframe
            src="https://www.instagram.com/p/DSU8c-tmIL5/embed"
            width="320"
            height="400"
            scrolling="no"
            style={{ border: 'none', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          ></iframe>
        </div>

        <div className={styles.buttonContainer} style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="https://www.instagram.com/pokapoka.suzuka/" target="_blank" rel="noopener noreferrer" className={styles.externalLinkBtn} style={{ backgroundColor: '#E1306C', boxShadow: '0 4px 6px rgba(225, 48, 108, 0.2)' }}>
            公式Instagramをもっと見る
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <a href="https://lin.ee/R5AYmS6" target="_blank" rel="noopener noreferrer" className={styles.externalLinkBtn} style={{ backgroundColor: '#06c755', boxShadow: '0 4px 6px rgba(6, 199, 85, 0.2)' }}>
            公式LINEを友だち追加する
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};
