import React from 'react';
import styles from './Testimonials.module.css';

export const Testimonials = () => {
  const voices = [
    { 
      name: 'Aさま', 
      stars: '★★★★★',
      image: '/Photo/2B63D8FF-81ED-4B1D-8EE8-307CACC48195.jpg',
      title: '「おひさま農園」での体験談：就職活動の支えになった農作業',
      text: '一般就職を目指し、就職活動を進める中で「おひさま農園」を利用しました。最初は農業に対して「重労働」というイメージがありましたが、実際にはハードな作業もありつつ、心地よい疲労感が残るものでした。体を動かすことで精神的にも安定し、気持ちをリフレッシュすることができました。農作業を通じて、自分のペースで働く感覚をつかめたことも大きな収穫です。これからも就職活動を頑張りつつ、つらくなったらまた遊びに来ようと思います。'
    },
    { 
      name: 'Nさま', 
      stars: '★★★★★',
      image: '/Photo/665AF14A-B503-4988-AEED-D3DF37D48A71.jpg',
      title: '土に癒されて自信がつきました。',
      text: '私は知的障がいがあり、外に出るのが苦手でした。でも、「おひさま農園」に通い始めてから、世界が変わりました。最初は不安でしたが、スタッフさんが優しく教えてくれて、安心して農作業に取り組めました。土に触れ、野菜が育つのを見ていると、達成感が生まれ、「自分にもできる！」と自信がつきました。作業を通じて仲間もでき、会話が増えたのも嬉しいです。今では農園に行くのが楽しみ。ここは、私にとって大切な居場所になりました。'
    },
    { 
      name: 'Iさま', 
      stars: '★★★★☆',
      image: '/Photo/08F0B11A-BDAC-4370-BDA8-A6B811C2FC48.jpg',
      title: '発達障がいの私が見つけた「集中できる場所」',
      text: '発達障がいの特性で、じっと座っているのが苦手な私は、一般就職が難しいと感じていました。しかし、「おひさま農園」での農作業は、適度に体を動かしながら取り組めるので、自分に合っていました。土をいじる作業は落ち着くし、目の前の作業に集中することで気持ちが整理されます。就職に向けて、働くリズムをつかむ大きな経験になりました。'
    },
    { 
      name: 'Mさま', 
      stars: '★★★★★',
      image: '/Photo/0173D838-431E-4633-8D64-D1857D242F30.jpg',
      title: 'うつの回復のきっかけに',
      text: '長年うつ病を抱え、外に出るのが怖かったのですが、自然の中で働くことに興味があり「おひさま農園」に参加しました。最初は短時間の作業から始め、少しずつできることを増やしていくうちに、気持ちが安定していきました。身体を動かすことで気分もリフレッシュし、スタッフの方や利用者の方との交流も心を軽くしてくれました。今では「また来たい」と思える場所になっています。'
    },
    { 
      name: 'Aさま', 
      stars: '★★★★☆',
      image: '/Photo/135BC434-A391-40A6-B1C7-D9DCEA2E4321.jpg',
      title: '発達障がいの私が見つけた「働く楽しさ」',
      text: '仕事が続かず悩んでいましたが、「おひさま農園」での作業は自分のペースででき、無理なく働く感覚をつかめました。単純作業が多く、繰り返し行うことで集中力も向上。スタッフの方が特性を理解し、丁寧に教えてくれるので安心して取り組めました。作業後の達成感もあり、自信につながりました。農園での経験を活かし、自分に合った仕事を見つけたいです。'
    },
    { 
      name: 'Yさま', 
      stars: '★★★★★',
      image: '/Photo/27F97442-224F-4E2E-A6E8-D690D5A3D582.jpg',
      title: 'うつからの回復へ、自然がくれた癒し',
      text: 'うつの影響で外に出るのが怖かったのですが、思い切って「おひさま農園」に参加しました。土を触り、体を動かすことで気持ちが軽くなり、心地よい疲労感が安眠にもつながりました。人との交流も少しずつ増え、孤独感が和らいだのも大きな変化です。焦らず、自分のペースで社会復帰を目指していきたいと思います。'
    },
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
          「おひさま農園」は、それぞれの事情に寄り添い、安心して過ごせる場所です。
        </div>
      </div>
    </section>
  );
};
