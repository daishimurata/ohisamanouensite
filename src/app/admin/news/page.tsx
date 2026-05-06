'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

type NewsItem = {
  id: string;
  date: string;
  category?: string;
  title: string;
  link?: string;
  content?: string;
};

import styles from '../Admin.module.css';

export default function AdminNewsPage() {
  // ... (useState, useEffect等のフックとロジックはそのまま)
  const [farmNews, setFarmNews] = useState<NewsItem[]>([]);
  const [kikakuNews, setKikakuNews] = useState<NewsItem[]>([]);
  const [activeTab, setActiveTab] = useState<'farm' | 'kikaku'>('farm');
  const [isLoading, setIsLoading] = useState(true);

  const [newDate, setNewDate] = useState('');
  const [newCategory, setNewCategory] = useState('お知らせ');
  const [newTitle, setNewTitle] = useState('');
  const [newLink, setNewLink] = useState('');
  const [newContent, setNewContent] = useState('');

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDate, setEditDate] = useState('');
  const [editCategory, setEditCategory] = useState('お知らせ');
  const [editTitle, setEditTitle] = useState('');
  const [editLink, setEditLink] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const resFarm = await fetch('/api/news?type=farm', { cache: 'no-store' });
      const dataFarm = await resFarm.json();
      if (dataFarm.news) setFarmNews(dataFarm.news);

      const resKikaku = await fetch('/api/news?type=kikaku', { cache: 'no-store' });
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
      category: newCategory,
      title: newTitle,
      link: newLink || undefined,
      content: newContent || undefined,
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
    setNewCategory('お知らせ');
    setNewTitle('');
    setNewLink('');
    setNewContent('');
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

  const startEdit = (item: NewsItem) => {
    setEditingId(item.id);
    setEditDate(item.date.replace(/\./g, '-'));
    setEditCategory(item.category || 'お知らせ');
    setEditTitle(item.title);
    setEditLink(item.link || '');
    setEditContent(item.content || '');
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const saveEdit = () => {
    if (!editDate || !editTitle) {
      alert('日付とタイトルは必須です');
      return;
    }

    const updatedItem: NewsItem = {
      id: editingId!,
      date: editDate,
      category: editCategory,
      title: editTitle,
      link: editLink || undefined,
      content: editContent || undefined,
    };

    if (activeTab === 'farm') {
      const updated = farmNews.map(n => n.id === editingId ? updatedItem : n);
      setFarmNews(updated);
      handleSave('farm', updated);
    } else {
      const updated = kikakuNews.map(n => n.id === editingId ? updatedItem : n);
      setKikakuNews(updated);
      handleSave('kikaku', updated);
    }
    setEditingId(null);
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
            <label>カテゴリ</label>
            <select value={newCategory} onChange={e => setNewCategory(e.target.value)} className={styles.input}>
              <option value="お知らせ">お知らせ</option>
              <option value="プレスリリース">プレスリリース</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>タイトル</label>
            <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="例：新商品が追加されました" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>リンクURL（任意）</label>
            <input type="text" value={newLink} onChange={e => setNewLink(e.target.value)} placeholder="https://..." className={styles.input} />
          </div>
          <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
            <label>本文（リッチテキスト）</label>
            <ReactQuill theme="snow" value={newContent} onChange={setNewContent} style={{ backgroundColor: 'white', height: '200px', marginBottom: '50px' }} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
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
                {editingId === item.id ? (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <input type="date" value={editDate} onChange={e => setEditDate(e.target.value)} className={styles.input} />
                    <select value={editCategory} onChange={e => setEditCategory(e.target.value)} className={styles.input}>
                      <option value="お知らせ">お知らせ</option>
                      <option value="プレスリリース">プレスリリース</option>
                    </select>
                    <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} className={styles.input} placeholder="タイトル" />
                    <input type="text" value={editLink} onChange={e => setEditLink(e.target.value)} className={styles.input} placeholder="リンクURL（任意）" />
                    <ReactQuill theme="snow" value={editContent} onChange={setEditContent} style={{ backgroundColor: 'white', height: '200px', marginBottom: '40px' }} />
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '4px' }}>
                      <button onClick={saveEdit} className={styles.button} style={{ padding: '4px 12px', fontSize: '0.875rem' }}>保存</button>
                      <button onClick={cancelEdit} className={styles.button} style={{ backgroundColor: '#6b7280', padding: '4px 12px', fontSize: '0.875rem' }}>キャンセル</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ flex: 1 }}>
                      <span style={{ color: '#6b7280', marginRight: '16px', fontSize: '0.875rem' }}>{item.date.replace(/-/g, '.')}</span>
                      <span style={{ backgroundColor: '#e5e7eb', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', marginRight: '12px' }}>{item.category || 'お知らせ'}</span>
                      <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                      {item.link && <span style={{ marginLeft: '8px', fontSize: '0.8rem', color: '#3b82f6' }}>[リンクあり]</span>}
                      {item.content && (
                        <div style={{ marginTop: '8px', color: '#6b7280', fontSize: '0.875rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: item.content }} />
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => startEdit(item)} className={styles.button} style={{ backgroundColor: '#4b5563', padding: '4px 12px', fontSize: '0.875rem' }}>
                        編集
                      </button>
                      <button onClick={() => handleDelete(item.id)} className={styles.deleteButton}>
                        削除
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
