import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "おひさま農園",
  description: "三重県鈴鹿市の就労継続支援B型事業所「おひさま農園」",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
