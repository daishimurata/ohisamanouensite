"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'; // スタイルは農園のものを流用

export function KikakuHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} theme-kikaku`}>
      {/* スマホ用ハンバーガーボタン */}
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
        <span className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></span>
        <span className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></span>
        <span className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></span>
      </button>

      <div className={styles.headerTop}>
        <div className={styles.headerTopInner}>
          <div className={styles.navLeft}>
            <Link href="/kikaku#services" className={styles.navLink}>事業内容</Link>
            <Link href="/kikaku#guide" className={styles.navLink}>ご利用案内</Link>
            <Link href="/kikaku#steps" className={styles.navLink}>ご利用のステップ</Link>
          </div>
          
          <div className={styles.logo} style={{ height: '60px', width: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <Link href="/kikaku" style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/kikaku/color1-3.png" alt="おひさま企画" style={{ height: '100%', width: '100%', objectFit: 'contain', transform: 'scale(3.2)' }} />
            </Link>
          </div>

          <div className={styles.navRight}>
            <Link href="/kikaku#company" className={styles.navLink}>会社概要</Link>
            <Link href="/contact" className={styles.navLink}>お問い合わせ</Link>
          </div>
        </div>
      </div>

      {/* スマホ用ドロップダウンメニュー */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/kikaku#services" className={styles.mobileNavLink} onClick={toggleMenu}>事業内容</Link>
          <Link href="/kikaku#guide" className={styles.mobileNavLink} onClick={toggleMenu}>ご利用案内</Link>
          <Link href="/kikaku#steps" className={styles.mobileNavLink} onClick={toggleMenu}>ご利用のステップ</Link>
          <Link href="/kikaku#company" className={styles.mobileNavLink} onClick={toggleMenu}>会社概要</Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>お問い合わせ</Link>
        </div>
      )}
    </header>
  );
}
