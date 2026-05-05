'use client';

import { useState, useEffect } from 'react';
import styles from '../Admin.module.css';

type Settings = {
  instagramUrl: string;
  facebookUrl: string;
  xUrl: string;
  lineUrl: string;
};

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    instagramUrl: '',
    facebookUrl: '',
    xUrl: '',
    lineUrl: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data.settings) {
        setSettings(data.settings);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage({ text: '', type: '' });

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      
      if (res.ok) {
        setMessage({ text: '設定を保存しました。', type: 'success' });
      } else {
        setMessage({ text: '保存に失敗しました。', type: 'error' });
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      setMessage({ text: 'エラーが発生しました。', type: 'error' });
    } finally {
      setIsSaving(false);
      // 3秒後にメッセージを消す
      setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  if (isLoading) {
    return <div className={styles.mainContent}>読み込み中...</div>;
  }

  return (
    <div>
      <h2 className={styles.pageTitle}>各種設定</h2>
      
      <div className={styles.card}>
        <h3 style={{ marginTop: 0, marginBottom: '24px' }}>SNS・外部リンク設定</h3>
        
        {message.text && (
          <div style={{ 
            padding: '12px', 
            marginBottom: '24px', 
            borderRadius: '4px',
            backgroundColor: message.type === 'success' ? '#f0fdf4' : '#fef2f2',
            color: message.type === 'success' ? '#15803d' : '#b91c1c',
            border: `1px solid ${message.type === 'success' ? '#bbf7d0' : '#fecaca'}`
          }}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSave}>
          <div className={styles.list} style={{ gap: '24px', border: 'none' }}>
            
            <div className={styles.formGroup}>
              <label style={{ fontWeight: 'bold' }}>Instagram URL (おひさま企画)</label>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '4px 0 8px 0' }}>トップページのおひさま企画Instagramセクションのリンク先になります。</p>
              <input 
                type="url" 
                name="instagramUrl" 
                value={settings.instagramUrl} 
                onChange={handleChange} 
                className={styles.input} 
                placeholder="https://www.instagram.com/your_account/"
              />
            </div>

            <div className={styles.formGroup}>
              <label style={{ fontWeight: 'bold' }}>LINE公式アカウント URL</label>
              <input 
                type="url" 
                name="lineUrl" 
                value={settings.lineUrl} 
                onChange={handleChange} 
                className={styles.input} 
                placeholder="https://lin.ee/..."
              />
            </div>

            <div className={styles.formGroup}>
              <label style={{ fontWeight: 'bold' }}>Facebook URL</label>
              <input 
                type="url" 
                name="facebookUrl" 
                value={settings.facebookUrl} 
                onChange={handleChange} 
                className={styles.input} 
              />
            </div>

            <div className={styles.formGroup}>
              <label style={{ fontWeight: 'bold' }}>X (Twitter) URL</label>
              <input 
                type="url" 
                name="xUrl" 
                value={settings.xUrl} 
                onChange={handleChange} 
                className={styles.input} 
              />
            </div>

          </div>

          <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              type="submit" 
              className={styles.button}
              disabled={isSaving}
              style={{ opacity: isSaving ? 0.7 : 1, padding: '12px 32px' }}
            >
              {isSaving ? '保存中...' : '設定を保存する'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
