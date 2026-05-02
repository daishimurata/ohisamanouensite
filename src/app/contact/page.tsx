import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Contact } from '@/components/Contact';
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

            <div className={styles.formContainer}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>お名前 <span className={styles.required}>必須</span></label>
                  <input type="text" id="name" className={styles.input} placeholder="例：山田 太郎" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="kana" className={styles.label}>フリガナ <span className={styles.required}>必須</span></label>
                  <input type="text" id="kana" className={styles.input} placeholder="例：ヤマダ タロウ" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>メールアドレス</label>
                  <input type="email" id="email" className={styles.input} placeholder="例：info@example.com" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>電話番号 <span className={styles.required}>必須</span></label>
                  <input type="tel" id="phone" className={styles.input} placeholder="例：090-1234-5678" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="category" className={styles.label}>お問い合わせ項目 <span className={styles.required}>必須</span></label>
                  <select id="category" className={styles.select} required>
                    <option value="">選択してください</option>
                    <option value="利用・見学について">利用・見学について</option>
                    <option value="採用について">採用について</option>
                    <option value="おひさま企画（制作・EC）について">おひさま企画（制作・EC）について</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>お問い合わせ内容 <span className={styles.required}>必須</span></label>
                  <textarea id="message" className={styles.textarea} rows={6} placeholder="お問い合わせ内容をご記入ください。" required></textarea>
                </div>

                <div className={styles.submitWrapper}>
                  <button type="submit" className={styles.submitButton}>送信する</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 既存の電話問い合わせ案内などのコンポーネントも表示 */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
