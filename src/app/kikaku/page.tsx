import React from 'react';
import { KikakuHeader } from '@/components/KikakuHeader';
import { KikakuHero } from '@/components/KikakuHero';
import { KikakuServices } from '@/components/KikakuServices';
import { KikakuInstagram } from '@/components/KikakuInstagram';
import { KikakuNewsList } from '@/components/KikakuNewsList';
import { KikakuTestimonials } from '@/components/KikakuTestimonials';
import { KikakuFAQ } from '@/components/KikakuFAQ';
import { Company } from '@/components/Company';
import { KikakuContact } from '@/components/KikakuContact';
import { KikakuFooter } from '@/components/KikakuFooter';

export const metadata = {
  title: '白子駅徒歩3分・高工賃な就労継続支援B型事業所なら「おひさま企画」',
  description: '三重県鈴鹿市の就労継続支援B型事業所「おひさま企画」。白子駅から徒歩3分、快適な室内作業でお仕事を提供します。eBay輸出やWebメディア運営、SNSマーケティングなどを通じて、高工賃と確かなスキル習得を目指せる環境です。見学・体験随時受付中！',
};

export default function KikakuPage() {
  return (
    <div className="theme-kikaku">
      <KikakuHeader />
      <main>
        <KikakuHero />
        <KikakuNewsList />
        <KikakuServices />
        <KikakuInstagram />
        <KikakuTestimonials />
        <KikakuFAQ />
        <Company />
        <KikakuContact />
      </main>
      <KikakuFooter />
    </div>
  );
}
