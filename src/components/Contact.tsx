import React from 'react';
import Link from 'next/link';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className="container">
        <div className={styles.contactCard}>
          <div className={styles.contactLeft}>
            <div className={styles.leftLine}></div>
            <h2 className={styles.contactTitle}>無料相談受付中</h2>
            <div className={styles.yellowBar}>CONTACT</div>
            <p className={styles.contactDesc}>
              障害のある方のお悩みや相談など、なんでもお気軽にご相談ください。<br/>
              就労B型以外のお問い合わせもお気軽にどうぞ。
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
                <div className={styles.phoneTime}>営業時間：10:00〜18:00</div>
              </div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.iconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className={styles.rowLabel}>メールのお問い合わせ</div>
              <div className={styles.rowContent}>
                <Link href="/contact" className={styles.mailBtn}>お問い合わせ <span className={styles.arrow}></span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
