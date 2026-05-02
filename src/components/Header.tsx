import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={styles.headerTop}>
        <div className={`container ${styles.headerTopInner}`}>
          <nav className={styles.navLeft}>
            <Link href="/about" className={styles.navLink}>会社概要</Link>
            <Link href="/press" className={styles.navLink}>プレスリリース</Link>
          </nav>
          
          <div className={styles.logo}>
            <Link href="/">
              <img src="/logo-yoko-ohisama.png" alt="おひさま農園" height="45" style={{ verticalAlign: 'middle' }} />
            </Link>
          </div>
          
          <nav className={styles.navRight}>
            <Link href="/contact" className={styles.navLink}>お問い合わせ</Link>
          </nav>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <p className={styles.headerBottomText}>鈴鹿市の就労継続支援B型事業所</p>
      </div>
    </header>
  );
};
