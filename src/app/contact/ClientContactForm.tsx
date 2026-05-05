"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function ClientContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms用のアクセスキーを追加
    formData.append("access_key", "26c682f9-7bb8-47bf-ade3-7031ca4e7402");
    
    // スパム対策用のハニーポット（見えないフィールド）
    const botcheck = formData.get("botcheck");
    if (botcheck) {
      setStatus("error");
      return;
    }

    try {
      // 1. メール通知用 (Web3Forms)
      const emailPromise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // 2. 自作管理画面のデータベース用 (Redis API)
      const formJson = Object.fromEntries(formData.entries());
      const dbPromise = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formJson),
      });

      // 両方の送信を並列で待機
      const [emailResponse] = await Promise.all([emailPromise, dbPromise]);
      const data = await emailResponse.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Error", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.formContainer} style={{ textAlign: "center", padding: "50px 20px" }}>
        <h3 style={{ color: "var(--primary-color)", fontSize: "24px", marginBottom: "20px" }}>送信完了</h3>
        <p style={{ lineHeight: 1.6, color: "#555" }}>
          お問い合わせいただき、ありがとうございます。<br />
          内容を確認次第、担当者よりご連絡させていただきます。
        </p>
        <button 
          onClick={() => setStatus("idle")} 
          className={styles.submitButton}
          style={{ marginTop: "30px", display: "inline-block" }}
        >
          新しいお問い合わせを作成する
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* スパム対策 */}
        <input type="checkbox" name="botcheck" style={{ display: "none" }} />
        <input type="hidden" name="subject" value="【おひさま農園】ホームページからのお問い合わせ" />
        <input type="hidden" name="from_name" value="おひさま農園 お問い合わせフォーム" />

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>お名前 <span className={styles.required}>必須</span></label>
          <input type="text" id="name" name="name" className={styles.input} placeholder="例：山田 太郎" required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="kana" className={styles.label}>フリガナ <span className={styles.required}>必須</span></label>
          <input type="text" id="kana" name="kana" className={styles.input} placeholder="例：ヤマダ タロウ" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>メールアドレス</label>
          <input type="email" id="email" name="email" className={styles.input} placeholder="例：info@example.com" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>電話番号 <span className={styles.required}>必須</span></label>
          <input type="tel" id="phone" name="phone" className={styles.input} placeholder="例：090-1234-5678" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category" className={styles.label}>お問い合わせ項目 <span className={styles.required}>必須</span></label>
          <select id="category" name="category" className={styles.select} required>
            <option value="">選択してください</option>
            <option value="利用・見学について">利用・見学について</option>
            <option value="採用について">採用について</option>
            <option value="おひさま企画（制作・EC）について">おひさま企画（制作・EC）について</option>
            <option value="その他">その他</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>お問い合わせ内容 <span className={styles.required}>必須</span></label>
          <textarea id="message" name="message" className={styles.textarea} rows={6} placeholder="お問い合わせ内容をご記入ください。" required></textarea>
        </div>

        {status === "error" && (
          <div style={{ color: "red", marginBottom: "20px", fontWeight: "bold" }}>
            送信に失敗しました。時間をおいて再度お試しください。
          </div>
        )}

        <div className={styles.submitWrapper}>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={status === "submitting"}
            style={{ opacity: status === "submitting" ? 0.7 : 1, cursor: status === "submitting" ? "not-allowed" : "pointer" }}
          >
            {status === "submitting" ? "送信中..." : "送信する"}
          </button>
        </div>
      </form>
    </div>
  );
}
