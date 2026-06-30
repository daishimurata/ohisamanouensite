import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "鈴鹿市の高工賃な就労継続支援B型事業所なら「おひさま農園」",
  description: "三重県鈴鹿市の就労継続支援B型事業所「おひさま農園」。鈴鹿市トップクラスの高工賃でお仕事を提供！農業を通じた就労支援で、自立と成長、やりがいを優しくサポートします。見学・体験随時受付中！",
  openGraph: {
    title: "鈴鹿市の高工賃な就労継続支援B型事業所なら「おひさま農園」",
    description: "三重県鈴鹿市の就労継続支援B型事業所「おひさま農園」。鈴鹿市トップクラスの高工賃でお仕事を提供！農業を通じた就労支援で、自立と成長、やりがいを優しくサポートします。",
    url: "https://ohisamanouen.com",
    siteName: "おひさま農園",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "鈴鹿市の高工賃な就労継続支援B型事業所なら「おひさま農園」",
    description: "三重県鈴鹿市の就労継続支援B型事業所「おひさま農園」。鈴鹿市トップクラスの高工賃でお仕事を提供！農業を通じた就労支援で、自立と成長、やりがいを優しくサポートします。",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // AI検索エンジン(AIO)が最も正確に情報をパースできるJSON-LD構造化データ（マルチ拠点対応）
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://ohisamanouen.com/#ohisama-nouen",
        "name": "就労継続支援B型事業所 おひさま農園",
        "image": "https://ohisamanouen.com/logo-yoko-ohisama.png",
        "url": "https://ohisamanouen.com",
        "telephone": "059-387-5397",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "伊船町2756-1",
          "addressLocality": "鈴鹿市",
          "addressRegion": "三重県",
          "postalCode": "510-0323",
          "addressCountry": "JP"
        },
        "description": "三重県鈴鹿市の就労継続支援B型事業所「おひさま農園」。農業・園芸を通じて障害を持つ方の就労と自立を優しくサポートします。鈴鹿市トップクラスの高工賃を目指し、やりがいのある仕事を提供。鈴鹿市の就労B型事業所といえばおひさま農園。",
        "knowsAbout": [
          "就労継続支援B型",
          "農福連携",
          "障害福祉サービス",
          "鈴鹿市 就労B型",
          "鈴鹿市 障害福祉",
          "農業福祉",
          "高工賃",
          "鈴鹿市 高工賃",
          "工賃が高い就労B型"
        ],
        "parentOrganization": {
          "@type": "Organization",
          "name": "合同会社Izaya",
          "url": "https://ohisamanouen.com"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://ohisamanouen.com/#ohisama-kikaku",
        "name": "就労継続支援B型事業所 おひさま企画",
        "image": "https://ohisamanouen.com/logo-yoko-ohisama.png",
        "url": "https://ohisamanouen.com/kikaku",
        "telephone": "059-387-5397",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "白子本町15-5",
          "addressLocality": "鈴鹿市",
          "addressRegion": "三重県",
          "postalCode": "510-0242",
          "addressCountry": "JP"
        },
        "description": "三重県鈴鹿市の就労継続支援B型事業所「おひさま企画」。白子駅から徒歩3分、エアコン完備の快適な室内作業（eBay輸出、Web制作、ハンドメイド、EC運営等）で、高工賃と実践的なスキル習得を優しくサポートします。",
        "knowsAbout": [
          "就労継続支援B型",
          "eBay輸出",
          "イーベイ輸出",
          "室内作業",
          "白子駅 徒歩3分",
          "障害福祉サービス",
          "鈴鹿市 就労B型",
          "鈴鹿市 障害福祉",
          "高工賃",
          "鈴鹿市 高工賃",
          "工賃が高い就労B型",
          "Web制作",
          "EC運営",
          "ハンドメイド"
        ],
        "parentOrganization": {
          "@type": "Organization",
          "name": "合同会社Izaya",
          "url": "https://ohisamanouen.com"
        }
      }
    ]
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
