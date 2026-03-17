import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import partners from '@site/src/data/partners';
import styles from './styles.module.css';

function getFooterNavItems(siteConfig) {
  const navbarItems = siteConfig.themeConfig?.navbar?.items ?? [];

  return navbarItems.filter((item) => item?.label && (item?.to || item?.href));
}

function resolveAssetUrl(baseUrl, assetPath) {
  const normalizedBaseUrl = baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '');
  return `${normalizedBaseUrl}${assetPath}`;
}

export default function Footer() {
  const {siteConfig} = useDocusaurusContext();
  const footerNavItems = getFooterNavItems(siteConfig);
  const footerConfig = siteConfig.themeConfig?.footer ?? {};

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <section className={styles.column}>
            <p className={styles.eyebrow}>ABOUT US</p>
            <h2 className={styles.title}>{siteConfig.title}</h2>
            <p className={styles.subtitle}>Cardio and Calming</p>
            <p className={styles.description}>
              Physical Activity and Emotional Regulation Solutions for Children with Autism and Disabilities
            </p>
          </section>

          <nav className={styles.column} aria-label="Footer navigation">
            <p className={styles.eyebrow}>Explore</p>
            <div className={styles.navList}>
              {footerNavItems.map((item) => (
                <Link
                  key={`${item.label}-${item.to || item.href}`}
                  className={styles.navLink}
                  to={item.to}
                  href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <section className={styles.column}>
            <p className={styles.eyebrow}>Partners</p>
            <div className={styles.partnerGrid}>
              {partners.map((partner) => (
                <div key={partner.name} className={styles.partnerCard}>
                  <img
                    className={styles.partnerLogo}
                    src={resolveAssetUrl(siteConfig.baseUrl, partner.src)}
                    alt={partner.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {footerConfig.copyright ? (
          <div
            className={styles.meta}
            dangerouslySetInnerHTML={{__html: footerConfig.copyright}}
          />
        ) : null}
      </div>
    </footer>
  );
}
