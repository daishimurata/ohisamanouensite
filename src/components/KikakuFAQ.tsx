import React from 'react';
import styles from './FAQ.module.css';

export const KikakuFAQ = () => {
  const faqs = [
    { q: 'パソコンの経験がなくても大丈夫ですか？', a: 'はい、大丈夫です！初心者の方でも基礎から丁寧にサポートいたします。マウスの持ち方やキーボード入力から始められる方もいらっしゃいます。' },
    { q: 'パソコンやソフトは自分で用意する必要がありますか？', a: 'いいえ、必要なパソコンや動画編集ソフト等の機材はすべて事業所で貸し出しますので、ご自身で用意していただく必要はありません。' },
    { q: '毎日通うのが不安なのですが…', a: '週1日・短時間からのご利用も可能です。ご自身の体調やペースに合わせて無理なく通っていただけるよう、個別支援計画を作成します。' },
    { q: '送迎はしてもらえますか？', a: 'はい、無料で送迎サービスを行っています。白子駅東口（徒歩3分）をはじめ、ご自宅近くまでの送迎についてもご相談ください。' },
    { q: '工賃はいくらですか？', a: '一律１日２０００円です。作業内容によりますが、月額平均40,000円以上を目標としています。' },
    { q: 'どのような人が働いていますか？', a: '幅広い年齢層の方が働いており、パソコン作業やハンドメイドを通じて、チームで協力しながら楽しく働ける環境です。' },
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
