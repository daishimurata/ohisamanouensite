'use client';

import { useState, useEffect } from 'react';

type NewsItem = {
  id: string;
  date: string;
  title: string;
  link?: string;
};

import styles from '../Admin.module.css';

export default function AdminNewsPage() {
  // ... (useState, useEffect等のフックとロジックはそのまま)
  const [farmNews, setFarmNews] = useState<NewsItem[]>([]);
  const [kikakuNews, setKikakuNews] = useState<NewsItem[]>([]);
  const [activeTab, setActiveTab] = useState<'farm' | 'kikaku'>('farm');
  const [isLoading, setIsLoading] = useState(true);

  const [newDate, setNewDate] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newLink, setNewLink] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const resFarm = await fetch('/api/news?type=farm');
      const dataFarm = await resFarm.json();
      if (dataFarm.news) setFarmNews(dataFarm.news);

      const resKikaku = await fetch('/api/news?type=kikaku');
      const dataKikaku = await resKikaku.json();
      if (dataKikaku.news) setKikakuNews(dataKikaku.news);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
  };

  const handleSave = async (type: 'farm' | 'kikaku', newsList: NewsItem[]) => {
    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, news: newsList }),
      });
      if (res.ok) {
        alert('保存しました');
      } else {
        alert('保存に失敗しました');
      }
    } catch (error) {
      console.error('Error saving:', error);
      alert('エラーが発生しました');
    }
  };

  const handleAddNews = () => {
    if (!newDate || !newTitle) {
      alert('日付とタイトルは必須です');
      return;
    }

    const newItem: NewsItem = {
      id: Date.now().toString(),
      date: newDate,
      title: newTitle,
      link: newLink || undefined,
    };

    if (activeTab === 'farm') {
      const updated = [newItem, ...farmNews];
      setFarmNews(updated);
      handleSave('farm', updated);
    } else {
      const updated = [newItem, ...kikakuNews];
      setKikakuNews(updated);
      handleSave('kikaku', updated);
    }

    setNewDate('');
    setNewTitle('');
    setNewLink('');
  };

  const handleDelete = (id: string) => {
    if (!confirm('本当に削除しますか？')) return;

    if (activeTab === 'farm') {
      const updated = farmNews.filter(n => n.id !== id);
      setFarmNews(updated);
      handleSave('farm', updated);
    } else {
      const updated = kikakuNews.filter(n => n.id !== id);
      setKikakuNews(updated);
      handleSave('kikaku', updated);
    }
  };

  const currentNews = activeTab === 'farm' ? farmNews : kikakuNews;

  return (
    <div>
      <h2 className={styles.pageTitle}>お知らせ管理</h2>

      {/* タブ */}
      <div className={styles.tabs}>
        <button
          onClick={() => setActiveTab('farm')}
          className={`${styles.tab} ${activeTab === 'farm' ? styles.active : ''}`}
        >
          おひさま農園
        </button>
        <button
          onClick={() => setActiveTab('kikaku')}
          className={`${styles.tab} ${activeTab === 'kikaku' ? styles.active : ''}`}
        >
          おひさま企画
        </button>
      </div>

      {/* 新規追加フォーム */}
      <div className={styles.card}>
        <h3 style={{ marginTop: 0, marginBottom: '16px' }}>新規追加</h3>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>日付</label>
            <input type="date" value={newDate} onChange={e => setNewDate(e.target.value)} className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>タイトル</label>
            <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="例：新商品が追加されました" className={styles.input} />
          </div>
          <div>
            <button onClick={handleAddNews} className={styles.button} style={{ width: '100%' }}>
              追加する
            </button>
          </div>
        </div>
      </div>

      {/* お知らせ一覧 */}
      <div className={styles.card}>
        <h3 style={{ marginTop: 0, marginBottom: '16px' }}>登録済みのお知らせ</h3>
        {isLoading ? (
          <p>読み込み中...</p>
        ) : currentNews.length === 0 ? (
          <p style={{ color: '#6b7280' }}>お知らせはまだありません。</p>
        ) : (
          <div className={styles.list}>
            {currentNews.map((item) => (
              <div key={item.id} className={styles.listItem}>
                <div>
                  <span style={{ color: '#6b7280', marginRight: '16px', fontSize: '0.875rem' }}>{item.date.replace(/-/g, '.')}</span>
                  <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                </div>
                <button onClick={() => handleDelete(item.id)} className={styles.deleteButton}>
                  削除
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
