import React from 'react';
import styles from './Company.module.css';

export const Company = () => {
  return (
    <section className={styles.companySection}>
      <div className="container">
        <h2 className={styles.companyTitle}>会社概要</h2>
        <table className={styles.companyTable}>
          <tbody>
            <tr>
              <th>会社名</th>
              <td>合同会社Izaya</td>
            </tr>
            <tr>
              <th>英文社名</th>
              <td>Izaya.llc</td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2022年</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>村田 太志</td>
            </tr>
            <tr>
              <th>従業員数</th>
              <td>9名</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                【本社・おひさま農園】<br />
                〒510-0323 三重県鈴鹿市伊船町2756-1<br /><br />
                【おひさま企画】<br />
                〒510-0242 三重県鈴鹿市白子本町15-5
              </td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>059-387-5397</td>
            </tr>
            <tr>
              <th>Mail</th>
              <td>d.murata@izaya.llc</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>
                就労継続支援B型事業所 おひさま農園（農業・福祉事業）<br />
                就労継続支援B型事業所 おひさま企画（Web制作・ハンドメイド・EC運営等）
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
