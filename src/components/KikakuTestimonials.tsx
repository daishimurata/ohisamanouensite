import React from 'react';
import styles from './Testimonials.module.css';

export const KikakuTestimonials = () => {
  const voices = [
    { 
      name: 'Aさん', 
      stars: '★★★★★',
      image: '/images/kikaku/A9194F55-2053-490B-85D1-EF476A52E0CF_1_105_c.jpeg',
      title: 'PC初心者からでも安心でした',
      text: 'パソコンにほとんど触ったことがありませんでしたが、スタッフの方が優しく教えてくれて、今ではブログの記事作成ができるようになりました。工賃もしっかりもらえるのでやりがいがあります。'
    },
    { 
      name: 'Bさん', 
      stars: '★★★★☆',
      image: '/images/kikaku/A9194F55-2053-490B-85D1-EF476A52E0CF_1_105_c.jpeg',
      title: '自分のペースで通えています',
      text: '体調に波があるのですが、無理のない範囲で通所できています。最近はハンドメイド作品を作るのが楽しく、自分が作ったものが売れるととても嬉しいです。'
    },
    { 
      name: 'Cさん', 
      stars: '★★★★★',
      image: '/images/kikaku/A9194F55-2053-490B-85D1-EF476A52E0CF_1_105_c.jpeg',
      title: '動画編集のスキルが身につきました',
      text: '昔から動画を見るのが好きで、ここで動画編集に挑戦しました。AIツールなども使いながら、効率よく作業する方法を学べており、将来の就労に向けた自信に繋がっています。'
    }
  ];

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.label}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              Story
            </div>
            <h2 className={styles.title}>利用者様の声</h2>
          </div>
          <div className={styles.headerRight}>
            皆さまから寄せられた<br/>体験談をまとめました。
          </div>
        </div>

        <div className={styles.grid}>
          {voices.map((v, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={v.image} alt={v.name} className={styles.image} />
                <div className={styles.imageOverlay}>
                  <span className={styles.name}>{v.name}</span>
                  <span className={styles.stars}>{v.stars}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>
                  <svg className={styles.cardTitleIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  {v.title}
                </h3>
                <p className={styles.cardText}>{v.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          「おひさま企画」は、それぞれの事情に寄り添い、安心して過ごせる場所です。
        </div>
      </div>
    </section>
  );
};
