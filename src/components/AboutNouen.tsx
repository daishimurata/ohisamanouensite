import React from 'react';
import styles from './AboutNouen.module.css';

export const AboutNouen = () => {
  return (
    <section className={styles.aboutSection} id="about-nouen">
      <div className={styles.aboutContainer}>
        
        {/* コンセプト */}
        <div className={styles.conceptBlock}>
          <h2 className={styles.conceptTitle}>おひさま農園について</h2>
          <p className={styles.conceptText}>
            おひさま農園は、「農をたのしむ」をコンセプトにした就労継続支援B型事業所です。<br />
            鈴鹿の大自然の中で土に触れ、作物を育てる喜びを感じながら、一人ひとりが自分らしいペースで働き、自立と成長を目指せる温かい場所を提供しています。
          </p>
        </div>

        {/* 4つの特徴 */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💰</div>
            <h3 className={styles.featureTitle}>三重県内トップクラスの高工賃</h3>
            <p className={styles.featureText}>
              がんばった成果がしっかり還る仕組みを構築。学校給食用の野菜出荷やオンライン販売など、安定した事業基盤を背景に、地域でも高水準な工賃を実現しています。
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌱</div>
            <h3 className={styles.featureTitle}>心と体に優しい農福連携</h3>
            <p className={styles.featureText}>
              太陽の光を浴びながら土に触れ、体を動かす農業は、精神的なリフレッシュや生活リズムの改善に非常に効果的です。自然の力で元気をチャージできます。
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🧺</div>
            <h3 className={styles.featureTitle}>選べる作業・マイペース出勤</h3>
            <p className={styles.featureText}>
              畑仕事だけでなく、収穫した野菜の選別や袋詰めなどの軽作業（出荷調製作業）といった室内での作業も豊富です。体力や体調に合わせて作業を選べます。
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤝</div>
            <h3 className={styles.featureTitle}>アットホームな安心サポート</h3>
            <p className={styles.featureText}>
              農業未経験の方でも安心です。専門スタッフが一人ひとりの障害特性や体調に寄り添い、優しくサポートします。悩みごとも気軽に相談できる環境です。
            </p>
          </div>
        </div>

        {/* 事業所プロフィールデータ */}
        <div>
          <h3 className={styles.profileTitle}>事業所プロフィール</h3>
          <table className={styles.profileTable}>
            <tbody>
              <tr>
                <th>事業所名</th>
                <td>就労継続支援B型事業所 おひさま農園</td>
              </tr>
              <tr>
                <th>定員</th>
                <td>20名</td>
              </tr>
              <tr>
                <th>対象者</th>
                <td>身体障害、知的障害、精神障害、発達障害、難病をお持ちの方など</td>
              </tr>
              <tr>
                <th>主な作業内容</th>
                <td>露地野菜（鈴鹿白ネギ、じゃがいも、とうもろこし等）の栽培・管理・収穫、出荷調製作業（選別・袋詰め・梱包）、販売サポートなど</td>
              </tr>
              <tr>
                <th>送迎サポート</th>
                <td>鈴鹿市内での送迎サービスを提供しています（ルートや詳細についてはお気軽にご相談ください）。</td>
              </tr>
              <tr>
                <th>昼食提供</th>
                <td>食事提供加算対象の方には、バランスの取れた温かい昼食をご用意しております。</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
