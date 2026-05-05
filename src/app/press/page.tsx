import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'プレスリリース | おひさま農園',
  description: 'おひさま農園や合同会社Izayaからの最新のプレスリリースやお知らせを掲載しています。',
};

const pressReleases = [
  {
    id: 3,
    date: '2026.05.05',
    category: 'お知らせ',
    title: 'メディア掲載：「農家の決断」にて当園が紹介されました',
  },
  {
    id: 1,
    date: '2025.03.07',
    category: 'プレスリリース',
    title: '「クリエシード」開設のお知らせ',
  },
  {
    id: 2,
    date: '2025.03.07',
    category: 'プレスリリース',
    title: '「おひさま工房」コースを3月1日より開設',
  },
  {
    id: 4,
    date: '2023.12.10',
    category: 'プレスリリース',
    title: '農福連携の取り組みが地元メディアに取り上げられました',
  },
  {
    id: 5,
    date: '2023.10.05',
    category: 'お知らせ',
    title: '見学・体験の受付を随時行っています',
  }
];

export default function PressPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <PageHero title="プレスリリース" subtitle="PRESS RELEASE" />
        
        <section className={styles.pressSection}>
          <div className={styles.container}>
            <ul className={styles.pressList}>
              {pressReleases.map((press) => (
                <li key={press.id} className={styles.pressItem}>
                  <Link href={`/press/${press.id}`} className={styles.pressLink}>
                    <div className={styles.pressMeta}>
                      <time className={styles.date}>{press.date}</time>
                      <span className={styles.category}>{press.category}</span>
                    </div>
                    <h3 className={styles.title}>{press.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.pagination}>
              <button className={styles.pageBtn} disabled>&lt;</button>
              <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
              <button className={styles.pageBtn}>2</button>
              <button className={styles.pageBtn}>&gt;</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
