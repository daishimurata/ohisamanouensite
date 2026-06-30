"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';
import styles from './Hero.module.css';

export const Hero = () => {
  const slides = [
    { id: 0, title: '採れたて新じゃが\nオンライン販売開始', desc: 'おひさま農園で大切に育てた、ホクホクで甘みのある新じゃがを数量限定で販売中です。', link: 'https://buzzitems.base.shop/items/143259859', linkText: 'BASEショップで購入する', isExternal: true },
    { id: 1, title: 'おひさま農園\n自然と共に働く', desc: '「農をたのしむ」をコンセプトにした就労継続支援B型事業所です。地域の伝統野菜を中心とした露地栽培で安心・安全な農作物を育てています。' },
    { id: 2, title: '春は種まきシーズン\n体験受付中', desc: '土に触れ、四季の恵みを感じながら、一人ひとりのペースで働ける環境を大切にし、やりがいを持てる場を提供します。' },
    { id: 3, title: 'おひさま企画\n「好き」を仕事に', desc: 'ハンドメイド作品から動画編集、イラスト制作まで。多様な分野であなたの「得意」を活かせる新しい事業所です。' }
  ];

  const images = [
    '/Photo/71765613-EB14-4E02-9458-56D819407225_1_105_c.jpeg',
    '/Photo/9A239688-22B7-44D2-80F2-64D95892FF49_1_105_c.jpeg',
    '/Photo/AB76B974-74A9-4640-9B75-2E495E31E15D_4_5005_c.jpeg',
    '/Photo/B0A49D33-9B3A-4419-A482-95096A6B698D_1_105_c.jpeg'
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
                {slide.isExternal ? (
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" className={styles.overlayButton}>{slide.linkText}</a>
                ) : slide.id === 3 ? (
                  <Link href="/kikaku" className={styles.overlayButton}>詳しくはこちら</Link>
                ) : (
                  <a href="#about" className={styles.overlayButton}>詳しくはこちら</a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.badge} style={{ padding: 0, overflow: 'hidden', backgroundColor: '#fff' }}>
        <img src="/logo-ohisama.png" alt="おひさま農園ロゴ" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.2)' }} />
      </div>
    </div>
  );
};
