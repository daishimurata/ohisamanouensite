import React from 'react';
import styles from './NewsList.module.css';

export const NewsList = () => {
  const news = [
    { date: '2026.03.03', title: 'Webメディア農家の決断に掲載されました。' },
    { date: '2025.10.01', title: '「おひさま企画」開設のお知らせ（おひさま工房・クリエシード統合）' },
  ];

  return (
    <section className={styles.newsSection}>
      <div className="container">
        <div className={styles.newsHeader}>
          <h2 className={styles.newsTitle}>News <span>お知らせ</span></h2>
        </div>
        <ul className={styles.newsList}>
          {news.map((item, i) => (
            <li key={i} className={styles.newsItem}>
              <span className={styles.newsDate}>{item.date}</span>
              <a href="#" className={styles.newsText}>{item.title}</a>
            </li>
          ))}
        </ul>
        <a href="#all-news" className={styles.moreLink}>一覧へ</a>
      </div>
    </section>
  );
};
