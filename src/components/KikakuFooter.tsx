"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const KikakuFooter = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,0L0,0Z"></path>
        </svg>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            {/* 企画ブロック (左側に配置) */}
            <Link href="/kikaku" className={styles.facilityBlock} style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
              <div className={styles.footerLogoWrapper}>
                <img src="/logo-kikaku-white.png" alt="おひさま企画" className={styles.footerLogoKikaku} />
              </div>
              <div className={styles.companyInfo}>
                <p className={styles.companyName}>Web制作・ハンドメイド・EC運営</p>
                <p>就労継続支援B型事業所</p>
                <p>〒510-0242</p>
                <p>三重県鈴鹿市白子本町15-5</p>
              </div>
              <div className={styles.mapButton} onClick={(e) => { e.preventDefault(); window.open('https://maps.google.com/?q=三重県鈴鹿市白子本町15-5', '_blank'); }}>
                地図
              </div>
            </Link>
            
            {/* 農園ブロック (右側に配置) */}
            <Link href="/" className={styles.facilityBlock} style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
              <div className={styles.footerLogoWrapper}>
                <img src="/logo-yoko-ohisama.png" alt="おひさま農園" className={styles.footerLogoNouen} style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className={styles.companyInfo}>
                <p className={styles.companyName}>「農を楽しむ」</p>
                <p>就労継続支援B型事業所</p>
                <p>〒510-0323</p>
                <p>三重県鈴鹿市伊船町2756-1</p>
              </div>
              <div className={styles.mapButton} onClick={(e) => { e.preventDefault(); window.open('https://maps.google.com/?q=三重県鈴鹿市伊船町2756-1', '_blank'); }}>
                地図
              </div>
            </Link>
          </div>
          <div className={styles.footerRight}>
            {/* 合同会社Izaya情報ブロック */}
            <div className={styles.izayaInfoBlock}>
              <Link href="/about" className={styles.izayaLogoWrapper} style={{ display: 'inline-block', cursor: 'pointer' }}>
                <img src="/yoko-izaya.png" alt="合同会社Izaya" className={styles.footerLogoIzaya} style={{ filter: 'brightness(0) invert(1)' }} />
              </Link>
              <p className={styles.izayaDescription}>
                私たちは、障がいのある方が地域社会で自分らしく輝けるよう、多様な就労の機会と温かいサポートを提供しています。農作業からITスキルまで、一人ひとりの可能性を広げる支援を行っています。
              </p>
              <div className={styles.contactInfo}>
                <p>お問い合わせ窓口（共通）</p>
                <p className={styles.phoneNumber}>TEL: 059-387-5397</p>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/about" className={styles.footerLink}>会社概要</Link>
              <Link href="/privacy-policy" className={styles.footerLink}>プライバシーポリシー</Link>
              <Link href="/press" className={styles.footerLink}>プレスリリース</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerCopy}>
          Copyright&copy; おひさま企画 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
