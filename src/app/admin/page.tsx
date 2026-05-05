import styles from './Admin.module.css';

export default function AdminDashboard() {
  return (
    <div>
      <h2 className={styles.pageTitle}>ダッシュボード</h2>
      <div className={styles.card}>
        <p style={{ color: '#4b5563', marginBottom: '16px' }}>
          おひさま農園・おひさま企画の管理画面へようこそ。
          左側のメニューから各機能にアクセスしてください。
        </p>

        <div className={styles.grid}>
          <div className={`${styles.gridCard} ${styles.blue}`}>
            <h3>お問い合わせ管理</h3>
            <p>Webサイトからの新規お問い合わせを確認・管理できます。</p>
          </div>
          <div className={`${styles.gridCard} ${styles.green}`}>
            <h3>お知らせ管理</h3>
            <p>おひさま農園とおひさま企画のお知らせを追加・編集できます。</p>
          </div>
          <div className={`${styles.gridCard} ${styles.orange}`}>
            <h3>各種設定</h3>
            <p>トップページのInstagram表示URLなどを変更できます。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
