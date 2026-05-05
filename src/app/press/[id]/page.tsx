import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

// ダミーデータ（一覧ページと共通のものを持たせるか、将来的にDB化するか）
const pressReleases = [
  {
    id: 1,
    date: '2025.03.07',
    category: 'プレスリリース',
    title: '「クリエシード」開設のお知らせ',
    content: `
      クリエイティブの力で新たな可能性を広げる——「クリエシード」開設のお知らせ
      〜デザイン・動画・Web制作を通じて自由な働き方を支援〜

      合同会社Izaya（所在地：三重県鈴鹿市伊船町2756-1）は、2025年3月1日より、就労継続支援B型おひさま農園に新たなコース「クリエシード」を開設いたしました。「クリエシード」は、デザイン・動画制作・Webコンテンツ開発など、クリエイティブ分野を中心にスキル習得を支援し、個々の才能を活かした働き方を目指すプログラムです。

      ■ 「クリエシード」開設の背景
      近年、インターネットとデジタル技術の発展により、クリエイティブ業界は大きく成長しています。しかし、障がいを持つ方がクリエイティブ職に就く機会はまだ限られており、自分のスキルや才能を活かしづらい現状があります。「クリエシード」では、そうした現状を変えるため、デザインや動画編集、Web制作などのデジタルスキルを学び、実践的な仕事につなげる機会を提供します。

      ■ 「クリエシード」の特徴
      1. デザイン・動画編集・Web制作を学べる
      ・Adobe Photoshop、Illustrator、Canvaを使ったデザイン制作
      ・動画編集ソフト（Premiere Pro、CapCut）を活用した映像制作
      ・Webサイト制作（WordPress、HTML/CSS基礎）の実践的スキル
      
      2. SNS・マーケティングの活用
      ・InstagramやX（旧Twitter）を活用したSNS運用スキル
      ・ブログ記事やキャッチコピーのライティングスキルを習得
      
      3. 個別のスキル指導と実践的な仕事体験
      ・一人ひとりのレベルに応じた指導で、初心者でも安心して学習
      ・クライアント向けの制作案件に携わり、実践的な経験を積む機会も提供
      
      4. 自由な働き方をサポート
      ・在宅ワークやフリーランスとして働くための基礎知識を習得
      ・クラウドソーシング（Lancers、ココナラ等）の活用方法も学べる

      ■ クリエシードが目指す未来
      「クリエシード」は、単にスキルを習得する場ではなく、利用者一人ひとりが自分の可能性を広げ、自由な働き方を実現できる場です。将来的には、学んだスキルを活かし、企業と直接契約して仕事を受けたり、フリーランスとして活動したりすることを目指します。

      おひさま農園では、「クリエシード」と「おひさま工房」の両事業を通じて、障がいを持つ方々の多様な働き方を支援してまいります。今後も、個々の能力を活かし、より良い社会の実現に貢献できるよう、支援の幅を広げてまいります。
    `
  },
  {
    id: 2,
    date: '2025.03.07',
    category: 'プレスリリース',
    title: '「おひさま工房」コースを3月1日より開設',
    content: `
      おひさま農園、新事業「おひさま工房」コースを3月1日より開設 ー 障がい者の新たな働き方を支援

      おひさま農園（所在地：三重県鈴鹿市）は、2025年3月1日より、新たな就労支援事業として「おひさま工房」コースを開設いたしました。本コースは、障がい者の方々が手作りの作品を通じてスキルを磨き、自己表現や収益化につなげることを目的としています。

      「おひさま工房」では、レジンアクセサリーやハンドメイド雑貨の制作を中心に、実践的な技術を学ぶ機会を提供します。利用者が得意な分野で活躍できるよう、一人ひとりに寄り添ったサポートを行いながら、作品のオンライン販売やイベント出店などの販路拡大も支援してまいります。

      本コースの開設により、障がいを持つ方が自身のペースで創作活動に取り組みながら、働く喜びを感じられる環境づくりを目指します。引き続き、おひさま農園は個々の可能性を広げる取り組みを推進し、地域社会と連携しながら支援の幅を広げてまいります。
    `
  },
  {
    id: 3,
    date: '2026.05.05',
    category: 'お知らせ',
    title: 'メディア掲載：「農家の決断」にて当園が紹介されました',
    content: `
      農業と就労支援をテーマにしたメディア「農家の決断」にて、おひさま農園の取り組みが掲載されました。

      「自社で就労継続支援B型事業所も運営する新規就農者」として、代表の村田が取材を受け、農業と福祉の連携（農福連携）にかける想いや、これまでの経緯についてお話しさせていただいております。

      ぜひ以下のリンクより記事をご覧ください。

      ▼「農家の決断」掲載記事はこちら
      <a href="https://nouka-ketsudan.site/%e8%87%aa%e7%a4%be%e3%81%a7%e5%b0%b1%e5%8a%b4%e7%b6%99%e7%b6%9a%e6%94%af%e6%8f%b4b%e5%9e%8b%e4%ba%8b%e6%a5%ad%e6%89%80%e3%82%82%e9%81%8b%e5%96%b6%e3%81%99%e3%82%8b%e6%96%b0%e8%a6%8f%e5%b0%b1%e8%be%b2/" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">自社で就労継続支援B型事業所も運営する新規就農者</a>
    `
  },
  {
    id: 4,
    date: '2023.12.10',
    category: 'プレスリリース',
    title: '農福連携の取り組みが地元メディアに取り上げられました',
    content: `
      おひさま農園が推進している「農福連携」の取り組みが、地元の新聞・メディアにて紹介されました。

      農業と福祉が協力し、障がいのある方の就労機会の創出と、地域農業の活性化を目指す私たちの活動について、丁寧に取材していただきました。

      今後も地域とのつながりを大切にし、皆様に必要とされる事業所を目指してまいります。
    `
  },
  {
    id: 5,
    date: '2023.10.05',
    category: 'お知らせ',
    title: '見学・体験の受付を随時行っています',
    content: `
      おひさま農園では、就労継続支援B型の利用をご検討中の方に向けて、事業所の見学および体験利用を随時受け付けております。

      「どんな作業をしているの？」「自分にできるか不安…」という方も、まずは一度ご見学にお越しいただき、実際の雰囲気を感じてみてください。

      スタッフが丁寧にご案内し、皆様の疑問や不安にお答えします。
      お問い合わせフォームまたはお電話にて、お気軽にご連絡ください。
    `
  }
];

import { Metadata } from 'next';

// paramsの型定義
type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// メタデータの生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  const article = pressReleases.find(p => p.id === id);
  
  if (!article) {
    return { title: '記事が見つかりません | おひさま農園' };
  }
  
  return {
    title: `${article.title} | プレスリリース | おひさま農園`,
    description: article.content.substring(0, 100) + '...',
  };
}

export default async function PressDetailPage({ params }: Props) {
  // params を await で解決する
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  const article = pressReleases.find(p => p.id === id);

  if (!article) {
    notFound();
  }

  // テキストの改行を<br>に変換しつつ、HTMLタグはそのまま描画させる
  const htmlContent = article.content.replace(/\n/g, '<br />');

  return (
    <>
      <Header />
      <main className={styles.main}>
        <PageHero title="プレスリリース" subtitle="PRESS RELEASE" />
        
        <section className={styles.articleSection}>
          <article className={styles.articleContainer}>
            <header className={styles.articleHeader}>
              <div className={styles.articleMeta}>
                <time className={styles.date}>{article.date}</time>
                <span className={styles.category}>{article.category}</span>
              </div>
              <h1 className={styles.title}>{article.title}</h1>
            </header>
            
            <div 
              className={styles.articleBody} 
              dangerouslySetInnerHTML={{ __html: htmlContent }} 
            />
            
            <div className={styles.backLinkContainer}>
              <Link href="/press" className={styles.backLink}>
                一覧へ戻る
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
