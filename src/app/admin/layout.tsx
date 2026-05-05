import Link from 'next/link';
import styles from './Admin.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h1 className={styles.sidebarTitle}>おひさま管理画面</h1>
        </div>
        <nav className={styles.nav}>
          <Link href="/admin" className={styles.navLink}>
            ダッシュボード
          </Link>
          <Link href="/admin/contacts" className={styles.navLink}>
            お問い合わせ管理
          </Link>
          <Link href="/admin/news" className={styles.navLink}>
            お知らせ管理
          </Link>
          <Link href="/admin/settings" className={styles.navLink}>
            各種設定 (Instagram等)
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.mainContent}>
          {children}
        </div>
      </main>
    </div>
  );
}
