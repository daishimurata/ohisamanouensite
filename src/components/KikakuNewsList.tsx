import React from 'react';
import styles from './NewsList.module.css';

export const KikakuNewsList = () => {
  const news = [
    { date: '2026.05.03', title: 'おひさま企画のWebサイトが新しくなりました！' },
    { date: '2026.04.15', title: '「ほっこりナビ」の運営メンバーを募集しています。' },
    { date: '2026.04.01', title: 'AI動画編集コースを新設しました。' },
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
