import React from 'react';
import styles from './PageHero.module.css';
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export const PageHero = ({ title, subtitle, backgroundImage = '/Photo/6E8E703F-0D5A-45E9-B5A2-33B9FE691432.jpg' }: PageHeroProps) => {
  return (
    <div className={styles.pageHeroWrapper}>
      <div className={styles.pageHero} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
      <div className={styles.breadcrumbWrapper}>
        <div className={styles.breadcrumb}>
          <Link href="/">おひさま農園トップページ</Link>
          <span className={styles.separator}>&gt;</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};
