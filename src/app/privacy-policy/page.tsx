import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import styles from './page.module.css';

export const metadata = {
  title: 'プライバシーポリシー | おひさま農園',
  description: 'おひさま農園のプライバシーポリシー（個人情報保護方針）について。',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <PageHero title="プライバシーポリシー" subtitle="PRIVACY POLICY" />
        
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.policyContent}>
              <p className={styles.intro}>
                合同会社Izaya（以下「当社」といいます。）は、当社の提供するサービス（就労継続支援B型事業「おひさま農園」「おひさま企画」等）における、利用者様・お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
              </p>

              <h3 className={styles.heading}>第1条（個人情報）</h3>
              <p>
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報、及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
              </p>

              <h3 className={styles.heading}>第2条（個人情報の収集方法）</h3>
              <p>
                当社は、利用者様が利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、利用者様と提携先などとの間でなされた利用者様の個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。）などから収集することがあります。
              </p>

              <h3 className={styles.heading}>第3条（個人情報を収集・利用する目的）</h3>
              <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ul className={styles.list}>
                <li>当社サービスの提供・運営のため</li>
                <li>利用者様からのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                <li>重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反した利用者様や、不正・不当な目的でサービスを利用しようとする利用者様の特定をし、ご利用をお断りするため</li>
                <li>上記の利用目的に付随する目的</li>
              </ul>

              <h3 className={styles.heading}>第4条（お問い合わせ窓口）</h3>
              <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
              <div className={styles.contactInfo}>
                <p>法人名：合同会社Izaya</p>
                <p>所在地：三重県鈴鹿市伊船町2756-1</p>
                <p>電話番号：059-387-5397</p>
                <p>Eメール：d.murata@izaya.llc</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
