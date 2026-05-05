'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NewsList.module.css';

type NewsItem = {
  id: string;
  date: string;
  title: string;
};

export const KikakuNewsList = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news?type=kikaku');
        const data = await res.json();
        if (data.news && data.news.length > 0) {
          setNewsItems(data.news);
        } else {
          setNewsItems([
            { id: '1', date: '2026.04.15', title: 'おひさま企画の公式ウェブサイトをリニューアルしました。' },
            { id: '2', date: '2026.04.01', title: '「ほっこりナビ」の新機能リリースについて' },
            { id: '3', date: '2026.03.10', title: '鈴鹿市のマルシェに出店いたします。' },
          ]);
        }
      } catch (error) {
        console.error('Failed to fetch news', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (isLoading) {
    return <section className={styles.newsSection}><div className="container">読み込み中...</div></section>;
  }

  return (
    <section className={styles.newsSection}>
      <div className="container">
        <div className={styles.newsHeader}>
          <h2 className={styles.newsTitle}>News <span>お知らせ</span></h2>
        </div>
        <ul className={styles.newsList}>
          {newsItems.slice(0, 3).map((item) => (
            <li key={item.id} className={styles.newsItem}>
              <span className={styles.newsDate}>{item.date}</span>
              <Link href={`/press/${item.id}`} className={styles.newsText}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <Link href="/press" className={styles.moreLink}>一覧へ</Link>
      </div>
    </section>
  );
};
