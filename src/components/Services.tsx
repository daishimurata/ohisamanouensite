import React from 'react';
import styles from './Cards.module.css';

export const Services = () => {
  return (
    <section className="section section-bg-gray" id="services">
      <div className="container">
        <h2 className="section-title">活動紹介</h2>
        <div className={styles.cardGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img src="/Photo/C17FFF2C-2B6E-4840-9B44-07C8AA100D1D_1_105_c.jpeg" alt="農作業" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>農作業</h3>
              <p className={styles.cardDesc}>太陽の光をたっぷり浴びた畑で、種まきから収穫まで心を込めて行っています。</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img src="/Photo/C66AFBF6-028B-4E26-8CFA-AF0B308B0CD2_1_105_c.jpeg" alt="収穫・加工" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>収穫・加工</h3>
              <p className={styles.cardDesc}>収穫した新鮮な野菜を丁寧に選別し、美味しく加工・袋詰めを行います。</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img src="/Photo/F1D37047-2AD8-4FD0-A9B9-76F54E089CBC_1_105_c.jpeg" alt="販売・地域交流" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>販売・地域交流</h3>
              <p className={styles.cardDesc}>地域のマルシェや直売所で、直接お客様に自分たちの野菜をお届けします。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
