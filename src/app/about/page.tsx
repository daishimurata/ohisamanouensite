import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Company } from '@/components/Company';
import { Contact } from '@/components/Contact';
import styles from './page.module.css';

export const metadata = {
  title: '会社概要 | おひさま農園',
  description: 'おひさま農園を運営する合同会社Izayaの会社概要と代表挨拶です。',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <PageHero title="会社概要" subtitle="COMPANY" />
        
        {/* 代表挨拶セクション */}
        <section className={styles.greetingSection}>
          <div className={styles.container}>
            <div className={styles.greetingContent}>
              <div className={styles.greetingImageWrapper}>
                <img 
                  src="/Photo/B0A49D33-9B3A-4419-A482-95096A6B698D_1_105_c.jpeg" 
                  alt="代表社員 村田太志" 
                  className={styles.greetingImage} 
                />
              </div>
              <div className={styles.greetingTextWrapper}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>代表挨拶</h2>
                  <span className={styles.sectionSubtitle}>Greeting</span>
                </div>
                <div className={styles.greetingText}>
                <p>
                  私はもともと異業種から農業に転身し、新規就農者としてこの道を歩み始めました。農業の魅力は、自然と向き合いながら、手をかけた分だけ成果が返ってくること。そして、ただ作物を育てるだけでなく、「人」と「地域」とのつながりを生み出せることにあると感じています。
                </p>
                <p>
                  2024年4月より、農業と福祉を結びつける「農福連携」に本格的に取り組み、障がいのある方や就労が難しい方にも、農作業を通じて働く喜びを感じてもらえる環境をつくることを目指しています。無理のないペースで取り組める農業の場を提供し、一人ひとりが自分らしく活躍できる仕組みを整えていきます。
                </p>
                <p>
                  おひさま農園では、鈴鹿白ネギを中心に、じゃがいもやとうもろこしなどを生産しています。今後も地域に根ざした農業を続けながら、農の楽しみを広め、持続可能な働き方を支える場として成長していきたいと考えています。
                </p>
                <p>
                  これからも、おひさま農園をどうぞよろしくお願いいたします。
                </p>
                <div className={styles.signature}>
                  <p>合同会社Izaya</p>
                  <p>代表社員　村田太志</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* 会社概要（既存コンポーネント再利用） */}
        <Company />

        {/* コンタクト（無料相談受付中） */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
