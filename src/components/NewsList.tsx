'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NewsList.module.css';

type NewsItem = {
  id: string;
  date: string;
  title: string;
};

export const NewsList = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news?type=farm');
        const data = await res.json();
        if (data.news && Array.isArray(data.news) && data.news.length > 0) {
          setNewsItems(data.news);
        } else {
          // フォールバックデータ（Redisにデータがない場合）
          setNewsItems([
            { id: '3', date: '2026.05.05', title: 'メディア掲載：「農家の決断」にて当園が紹介されました' },
            { id: '1', date: '2025.03.07', title: '「クリエシード」開設のお知らせ' },
            { id: '2', date: '2025.03.07', title: '「おひさま工房」コースを3月1日より開設' },
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

  return (
    <section className={styles.newsSection}>
      <div className="container">
        <div className={styles.newsHeader}>
          <h2 className={styles.newsTitle}>News <span>お知らせ</span></h2>
        </div>
        {isLoading ? (
          <div className={styles.newsList}>読み込み中...</div>
        ) : (
          <ul className={styles.newsList}>
            {newsItems.map((item) => (
              <li key={item.id} className={styles.newsItem}>
                <span className={styles.newsDate}>{item.date}</span>
                <Link href={`/press/${item.id}`} className={styles.newsText}>{item.title}</Link>
              </li>
            ))}
          </ul>
        )}
        <Link href="/press" className={styles.moreLink}>一覧へ</Link>
      </div>
    </section>
  );
};
