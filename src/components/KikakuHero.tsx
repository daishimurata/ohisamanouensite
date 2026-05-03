"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './Hero.module.css';

export const KikakuHero = () => {
  const slides = [
    { id: 1, title: 'おひさま企画\nあなたらしい「はたらく」を', desc: 'Webメディア運営、SNSマーケティング、ハンドメイド制作など、デジタルスキルを実践で身につけます。' },
    { id: 2, title: '安心のサポート体制\n工賃目標4万円', desc: '1日2000円目安の工賃目標に加え、1食300円の温かい食事や白子駅からの無料送迎も完備しています。' },
    { id: 3, title: '未経験からでも\nマイペースに成長', desc: '一人ひとりの目標に合わせて、無理のないペースでステップアップを支援します。' }
  ];

  const images = [
    '/images/kikaku/IMG_2435.jpeg',
    '/images/kikaku/IMG_2436.jpeg',
    '/images/kikaku/IMG_2437.jpeg'
  ];

  return (
    <div className={styles.heroContainer}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide} style={{ backgroundImage: `url(${images[index]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className={styles.overlayBox}>
                <h2 className={styles.overlayTitle}>{slide.title.split('\n').map((t, i) => <React.Fragment key={i}>{t}<br/></React.Fragment>)}</h2>
                <p className={styles.overlayDesc}>{slide.desc}</p>
                <a href="#services" className={styles.overlayButton}>詳しくはこちら</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.badge} style={{ padding: 0, overflow: 'hidden', backgroundColor: '#fff' }}>
        <img src="/images/kikaku/color1-3.png" alt="おひさま企画ロゴ" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.2)' }} />
      </div>
    </div>
  );
};
