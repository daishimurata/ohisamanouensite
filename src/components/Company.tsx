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
              <th>法人番号</th>
              <td>3190003004274</td>
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
            <tr>
              <th>ボランティア活動<br/><span style={{ fontSize: '0.85em', fontWeight: 'normal' }}>（ぽかぽか隊）</span></th>
              <td>
                弊社の社員を中心に結成したボランティア団体「ぽかぽか隊」として、地域に根ざした活動を行っています。<br />
                ・食育活動を通じた「じゃがいも掘り体験」の実施<br />
                ・子育て支援を目的とした「おしりふき」の無料配布 など<br />
                <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: '#555' }}>ぽかぽか隊 公式LINE：</span>
                  <a href="https://lin.ee/R5AYmS6" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
                    <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" style={{ border: 0 }} />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th>公表情報<br/>(WAM NET)</th>
              <td>
                <a href="https://www.wam.go.jp/sfkohyoout/COP020100E00.do?_FORMID=COP000101&corporationNumber=A2420700000048&facilityNumber=2410301994&bunjoNumber=000000&serviceType=46&serviceSubNumber=A0000113664" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'underline' }}>
                  おひさま農園（WAM NET 公表情報へ）
                </a><br />
                <a href="https://www.wam.go.jp/shieninspho/" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'underline' }}>
                  おひさま企画（WAM NET 障害福祉サービス等情報検索へ）
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
