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
                <th>所在地</th>
                <td>
                  〒510-0323 三重県鈴鹿市伊船町2756-1<br />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=三重県鈴鹿市伊船町2756-1+おひさま農園" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: '#0066cc', textDecoration: 'underline', fontSize: '0.9em', display: 'inline-block', marginTop: '4px' }}
                  >
                    [Googleマップで見る]
                  </a>
                </td>
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
