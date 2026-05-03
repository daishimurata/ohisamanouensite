import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Contact } from '@/components/Contact';
import ClientContactForm from './ClientContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'お問い合わせ | おひさま農園',
  description: 'おひさま農園へのお問い合わせはこちらから。',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <PageHero title="お問い合わせ" subtitle="CONTACT" />
        
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <p className={styles.description}>
              ご不明点やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。<br />
              内容を確認次第、担当者よりご連絡させていただきます。
            </p>

            <ClientContactForm />
          </div>
        </section>

        {/* 既存の電話問い合わせ案内などのコンポーネントも表示 */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
