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
  title: 'おひさま企画 | あなたらしい「はたらく」をここから',
  description: '就労継続支援B型事業所「おひさま企画」。Webメディア運営やSNSマーケティングを通じてデジタルスキルを身につけます。',
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
