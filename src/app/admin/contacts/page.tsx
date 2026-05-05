'use client';

import { useState, useEffect } from 'react';

type ContactItem = {
  id: string;
  date: string;
  name: string;
  kana: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  isRead: boolean;
};

import styles from '../Admin.module.css';

export default function AdminContactsPage() {
  // ... (useState, useEffect等のフックはそのまま)
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (data.contacts) {
        setContacts(data.contacts);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await fetch('/api/contact', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action: 'markAsRead' }),
      });
      setContacts(contacts.map(c => c.id === id ? { ...c, isRead: true } : c));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('本当に削除しますか？')) return;
    try {
      await fetch('/api/contact', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action: 'delete' }),
      });
      setContacts(contacts.filter(c => c.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div>
      <h2 className={styles.pageTitle}>お問い合わせ管理</h2>
      
      <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
        {isLoading ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#6b7280' }}>読み込み中...</div>
        ) : contacts.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#6b7280' }}>新しいお問い合わせはありません。</div>
        ) : (
          <div className={styles.list} style={{ gap: 0 }}>
            {contacts.map((contact) => (
              <div key={contact.id} className={`${styles.listItem} ${!contact.isRead ? styles.unread : ''}`} style={{ flexDirection: 'column', alignItems: 'stretch', border: 'none', borderBottom: '1px solid #e5e7eb', borderRadius: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    {!contact.isRead && <span className={styles.badge}>未読</span>}
                    <h3 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.125rem' }}>{contact.category}</h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
                      {new Date(contact.date).toLocaleString('ja-JP')}
                    </p>
                  </div>
                  <div className={styles.actions}>
                    {!contact.isRead && (
                      <button onClick={() => markAsRead(contact.id)} className={styles.secondaryButton}>
                        既読にする
                      </button>
                    )}
                    <button onClick={() => deleteContact(contact.id)} className={styles.deleteButton}>
                      削除
                    </button>
                  </div>
                </div>
                
                <div className={styles.infoGrid}>
                  <div><span style={{ color: '#6b7280', display: 'inline-block', width: '80px' }}>お名前:</span> <span style={{ fontWeight: 'bold' }}>{contact.name}</span> ({contact.kana})</div>
                  <div><span style={{ color: '#6b7280', display: 'inline-block', width: '80px' }}>電話番号:</span> {contact.phone}</div>
                  <div style={{ gridColumn: '1 / -1' }}><span style={{ color: '#6b7280', display: 'inline-block', width: '80px' }}>メール:</span> {contact.email || '未入力'}</div>
                </div>
                
                <div className={styles.infoMessage}>
                  {contact.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
