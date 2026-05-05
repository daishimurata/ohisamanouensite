import React from 'react';
import Link from 'next/link';
import styles from './Contact.module.css';

export const KikakuContact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className="container">
        <div className={styles.contactCard}>
          <div className={styles.contactLeft}>
            <div className={styles.leftLine}></div>
            <h2 className={styles.contactTitle}>見学・体験受付中</h2>
            <div className={styles.yellowBar}>CONTACT</div>
            <p className={styles.contactDesc}>
              おひさま企画での活動に興味がある方、まずはお気軽にご相談ください。<br/>
              Web制作や動画編集、ハンドメイドなど見学も随時受け付けています。
            </p>
          </div>
          <div className={styles.contactRight}>
            <div className={styles.contactRow}>
              <div className={styles.iconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className={styles.rowLabel}>お電話のお問い合わせ</div>
              <div className={styles.rowContent}>
                <div className={styles.phoneNum}>059-387-5397</div>
                <div className={styles.phoneTime}>受付時間：平日 10:00〜15:00</div>
              </div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.iconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className={styles.rowLabel}>メールのお問い合わせ</div>
              <div className={styles.rowContent}>
                <Link href="/contact" className={styles.mailBtn}>お問い合わせフォームへ <span className={styles.arrow}></span></Link>
              </div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.iconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06c755" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <div className={styles.rowLabel}>LINEのお問い合わせ</div>
              <div className={styles.rowContent}>
                <a href="https://lin.ee/RAKz2e2" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                  <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" style={{ border: 0, verticalAlign: 'middle' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
