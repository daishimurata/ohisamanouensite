import React from 'react';
import styles from './FAQ.module.css';

export const FAQ = () => {
  const faqs = [
    { q: '農園までの交通手段は？', a: '鈴鹿市内は送迎車があるほか、車や自転車での通勤も可能です。駐車場も完備しています。' },
    { q: 'どのような服装や持ち物が必要ですか？', a: '汚れてもよい服装、帽子、手袋、長靴をご持参ください。夏場は日焼け対策もおすすめです。' },
    { q: '収穫した野菜は持ち帰れますか？', a: 'はい、一部の野菜はお持ち帰りいただけます。規格外野菜や、自家用の作物を育てています。' },
    { q: 'おひさま農園ではどのような作物を栽培していますか？', a: '季節ごとに異なる野菜や果物を栽培しています。代表的な作物には、白ネギ、じゃがいも、かぼちゃ、さつまいもなどがあります。' },
    { q: '工賃はいくらですか？', a: '一律１日２０００円です。' },
    { q: 'どのような人が働いていますか？', a: '１８歳から５５歳まで幅広い年齢層の方が働いており、精神、軽度知的の方がチームで協力しながら楽しく働ける環境です。' },
  ];

  return (
    <section className={styles.faqSection} id="faq">
      <div className={`container ${styles.faqContainer}`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.label}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              QUESTION
            </div>
            <h2 className={styles.faqTitle}>よくある質問</h2>
          </div>
          <div className={styles.headerRight}>
            皆さまから寄せられるよくある質問をまとめました。<br/>
            その他のご質問がございましたら、お気軽にお問い合わせください！
          </div>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <div className={styles.faqQ}>
                <span className={styles.qIcon}>Q</span>
                {faq.q}
              </div>
              <div className={styles.faqA}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
